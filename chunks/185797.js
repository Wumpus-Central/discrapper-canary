s.d(t, { F: () => p, L: () => x });
var i,
    n = s(743368),
    a = s(975807),
    l = s(196099),
    r = s(723702);
s(985603);
var c = s(777376),
    o = s(758209),
    d = s(693037),
    u = s(674567),
    m = s(237146),
    g = s(375708),
    x = (((i = {}).DEFAULT = "default"), (i.SUBSCRIBE = "subscribe"), i);
function p() {
    let e,
        t = (0, u.V)(),
        { status: s, requestInProgress: i, redirect: x } = (0, d.r)(),
        p = (0, o.A)(x),
        h = (0, l.M)("xbox");
    if (t === u.s.NO_ACCESS) return { kind: "subscribe", text: g.intl.string(g.t.sEAnVH) };
    let f = (function (e) {
        switch (e) {
            case c.p.NOT_CLAIMED:
            case c.p.CLAIM_IN_PROGRESS:
                return { text: g.intl.string(m.default.EL3rU4) };
            case c.p.CLAIMED:
                return { text: g.intl.string(m.default["0mQ2U6"]), icon: n.W, iconPosition: "end" };
            case c.p.CANCELLATION_IN_PROGRESS:
                return { text: g.intl.string(m.default.wBz9aO), disabled: !0 };
        }
    })(s);
    if (t === u.s.NONE)
        return {
            kind: "default",
            claimStatus: s,
            requestInProgress: i,
            text: f.text,
            disabled: !0,
            loading: !0,
            icon: f.icon,
            iconPosition: f.iconPosition,
        };
    if (s === c.p.NOT_CLAIMED || s === c.p.CLAIM_IN_PROGRESS)
        e = () => {
            p();
        };
    else if (s === c.p.CLAIMED) {
        let t = (0, r.isWindows)() ? "msxbox://" : "https://xbox.com/play";
        e = () => {
            (0, a.A)(t), h(l.H.PARTNER_PAGE_REDIRECT, t);
        };
    }
    return {
        kind: "default",
        claimStatus: s,
        requestInProgress: i,
        text: f.text,
        disabled: (f.disabled ?? !1) || i,
        loading: i,
        icon: f.icon,
        iconPosition: f.iconPosition,
        onClick: e,
    };
}
