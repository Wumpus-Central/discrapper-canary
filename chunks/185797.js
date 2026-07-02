n.d(t, { F: () => N, L: () => g });
var i,
    a = n(743368),
    s = n(975807),
    r = n(196099),
    l = n(723702);
n(985603);
var c = n(777376),
    o = n(758209),
    d = n(693037),
    u = n(674567),
    m = n(237146),
    A = n(375708),
    g = (((i = {}).DEFAULT = "default"), (i.SUBSCRIBE = "subscribe"), i);
function N() {
    let e,
        t = (0, u.V)(),
        { status: n, requestInProgress: i, redirect: g } = (0, d.r)(),
        N = (0, o.A)(g),
        p = (0, r.M)("xbox");
    if (t === u.s.NO_ACCESS) return { kind: "subscribe", text: A.intl.string(A.t.sEAnVH) };
    let f = (function (e) {
        switch (e) {
            case c.p.NOT_CLAIMED:
            case c.p.CLAIM_IN_PROGRESS:
                return { text: A.intl.string(m.default.EL3rU4) };
            case c.p.CLAIMED:
                return { text: A.intl.string(m.default["0mQ2U6"]), icon: a.W, iconPosition: "end" };
            case c.p.CANCELLATION_IN_PROGRESS:
                return { text: A.intl.string(m.default.wBz9aO), disabled: !0 };
        }
    })(n);
    if (t === u.s.NONE)
        return {
            kind: "default",
            claimStatus: n,
            requestInProgress: i,
            text: f.text,
            disabled: !0,
            loading: !0,
            icon: f.icon,
            iconPosition: f.iconPosition,
        };
    if (n === c.p.NOT_CLAIMED || n === c.p.CLAIM_IN_PROGRESS)
        e = () => {
            N();
        };
    else if (n === c.p.CLAIMED) {
        let t = (0, l.isWindows)() ? "msxbox://" : "https://xbox.com/play";
        e = () => {
            (0, s.A)(t), p(r.H.PARTNER_PAGE_REDIRECT, t);
        };
    }
    return {
        kind: "default",
        claimStatus: n,
        requestInProgress: i,
        text: f.text,
        disabled: (f.disabled ?? !1) || i,
        loading: i,
        icon: f.icon,
        iconPosition: f.iconPosition,
        onClick: e,
    };
}
