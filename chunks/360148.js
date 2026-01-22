n.d(t, {
    a: () => h,
});
var r = n(651162),
    i = n(510801),
    a = n(419709),
    s = n(319835),
    o = n(85073),
    l = n(793295),
    c = n(824699),
    u = n(53941),
    d = n(163608),
    f = n(237463),
    p = n(893998);

function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class h {
    static fromServer(e) {
        return new h(e);
    }
    constructor(e) {
        var t;
        _(this, "shopBlocks", void 0),
            _(this, "categories", void 0),
            _(this, "userDiscounts", void 0),
            (this.shopBlocks = e.shop_blocks
                .map((e) => {
                    switch (e.type) {
                        case r.g.HERO:
                            return c.B.fromServer(e);
                        case r.g.FEATURED:
                            return o.t.fromServer(e);
                        case r.g.FEED:
                            return l.l.fromServer(e);
                        case r.g.WIDE_BANNER:
                            return p.y.fromServer(e);
                        case r.g.SHELF:
                            return f.r.fromServer(e);
                        case r.g.COUNTDOWN_TIMER:
                            return s.z.fromServer(e);
                        case r.g.IMMERSIVE_BANNER:
                            return u.A.fromServer(e);
                        case r.g.REWARD_HERO:
                            return d.E.fromServer(e);
                        default:
                            return;
                    }
                })
                .filter((e) => void 0 !== e)),
            (this.categories = e.categories.map((e) => i.A.fromServer(e))),
            (this.userDiscounts = null == (t = e.user_discounts) ? void 0 : t.map((e) => a.T.fromServer(e)));
    }
}
