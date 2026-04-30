i.d(t, { F: () => g, L: () => p });
var s,
    a = i(743368),
    n = i(975807),
    r = i(723702),
    l = i(985603),
    c = i(777376),
    d = i(758209),
    o = i(915418),
    u = i(674567),
    m = i(237146),
    A = i(985018),
    p = (((s = {}).DEFAULT = "default"), (s.SUBSCRIBE = "subscribe"), s);
function g() {
    let e,
        t = (0, u.V)(),
        { status: i, requestInProgress: s, redirect: p } = (0, o.r)(),
        g = (0, d.A)(p),
        x = (0, l.A)();
    if (t === u.s.FREE_FRACTIONAL_NITRO) return { kind: "subscribe", text: A.intl.string(A.t.sEAnVH) };
    let N = (function (e) {
        switch (e) {
            case c.p1.NOT_CLAIMED:
            case c.p1.CLAIM_IN_PROGRESS:
                return { text: A.intl.string(m.default.EL3rU4) };
            case c.p1.CLAIMED:
                return { text: A.intl.string(m.default["0mQ2U6"]), icon: a.W, iconPosition: "end" };
            case c.p1.CANCELLATION_IN_PROGRESS:
                return { text: A.intl.string(m.default.wBz9aO), disabled: !0 };
        }
    })(i);
    if (i === c.p1.NOT_CLAIMED || i === c.p1.CLAIM_IN_PROGRESS)
        e = () => {
            g();
        };
    else if (i === c.p1.CLAIMED) {
        let t = (0, r.isWindows)() ? "msxbox://" : "https://xbox.com/play";
        e = () => {
            (0, n.A)(t), x(l.xf.PARTNER_PAGE_REDIRECT, t);
        };
    }
    return {
        kind: "default",
        claimStatus: i,
        requestInProgress: s,
        text: N.text,
        disabled: (N.disabled ?? !1) || s,
        loading: s,
        icon: N.icon,
        iconPosition: N.iconPosition,
        onClick: e,
    };
}
