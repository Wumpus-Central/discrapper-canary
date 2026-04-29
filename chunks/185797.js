i.d(t, { F: () => m });
var s = i(743368),
    a = i(975807),
    n = i(723702),
    r = i(985603),
    l = i(777376),
    c = i(758209),
    d = i(915418),
    o = i(237146),
    u = i(985018);
function m() {
    let e,
        { status: t, requestInProgress: i, redirect: m } = (0, d.r)(),
        A = (0, c.A)(m),
        p = (0, r.A)(),
        g = (function (e) {
            switch (e) {
                case l.p1.NOT_CLAIMED:
                case l.p1.CLAIM_IN_PROGRESS:
                    return { text: u.intl.string(o.default.EL3rU4) };
                case l.p1.CLAIMED:
                    return { text: u.intl.string(o.default["0mQ2U6"]), icon: s.W, iconPosition: "end" };
                case l.p1.CANCELLATION_IN_PROGRESS:
                    return { text: u.intl.string(o.default.wBz9aO), disabled: !0 };
            }
        })(t);
    if (t === l.p1.NOT_CLAIMED || t === l.p1.CLAIM_IN_PROGRESS)
        e = () => {
            A();
        };
    else if (t === l.p1.CLAIMED) {
        let t = (0, n.isWindows)() ? "msxbox://" : "https://xbox.com/play";
        e = () => {
            (0, a.A)(t), p(r.xf.PARTNER_PAGE_REDIRECT, t);
        };
    }
    return {
        claimStatus: t,
        requestInProgress: i,
        text: g.text,
        disabled: (g.disabled ?? !1) || i,
        loading: i,
        icon: g.icon,
        iconPosition: g.iconPosition,
        onClick: e,
    };
}
