n.d(t, { F: () => T, L: () => _ });
var i,
    l = n(743368),
    r = n(975807),
    s = n(723702),
    a = n(985603),
    c = n(777376),
    o = n(758209),
    d = n(693037),
    u = n(674567),
    E = n(237146),
    A = n(375708),
    _ = (((i = {}).DEFAULT = "default"), (i.SUBSCRIBE = "subscribe"), i);
function T() {
    let e,
        t = (0, u.V)(),
        { status: n, requestInProgress: i, redirect: _ } = (0, d.r)(),
        T = (0, o.A)(_),
        I = (0, a.A)();
    if (t === u.s.FREE_FRACTIONAL_NITRO) return { kind: "subscribe", text: A.intl.string(A.t.sEAnVH) };
    let N = (function (e) {
        switch (e) {
            case c.p1.NOT_CLAIMED:
            case c.p1.CLAIM_IN_PROGRESS:
                return { text: A.intl.string(E.default.EL3rU4) };
            case c.p1.CLAIMED:
                return { text: A.intl.string(E.default["0mQ2U6"]), icon: l.W, iconPosition: "end" };
            case c.p1.CANCELLATION_IN_PROGRESS:
                return { text: A.intl.string(E.default.wBz9aO), disabled: !0 };
        }
    })(n);
    if (n === c.p1.NOT_CLAIMED || n === c.p1.CLAIM_IN_PROGRESS)
        e = () => {
            T();
        };
    else if (n === c.p1.CLAIMED) {
        let t = (0, s.isWindows)() ? "msxbox://" : "https://xbox.com/play";
        e = () => {
            (0, r.A)(t), I(a.xf.PARTNER_PAGE_REDIRECT, t);
        };
    }
    return {
        kind: "default",
        claimStatus: n,
        requestInProgress: i,
        text: N.text,
        disabled: (N.disabled ?? !1) || i,
        loading: i,
        icon: N.icon,
        iconPosition: N.iconPosition,
        onClick: e,
    };
}
