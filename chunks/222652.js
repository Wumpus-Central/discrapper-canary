s.d(t, { N: () => g, z: () => f });
var i,
    n = s(743368),
    a = s(975807),
    r = s(723702),
    l = s(196099);
s(375776);
var c = s(727811),
    o = s(263910),
    d = s(102488),
    u = s(631368),
    m = s(553875),
    x = s(375708),
    g = (((i = {}).DEFAULT = "default"), (i.SUBSCRIBE = "subscribe"), i);
function f() {
    let e,
        t = (0, u.$)(),
        { status: s, requestInProgress: i, redirect: g } = (0, d.L)(),
        f = (0, o.A)(g),
        p = (0, l.M)("xbox");
    if (t === u.C.NO_ACCESS) return { kind: "subscribe", text: x.intl.string(x.t.sEAnVH) };
    let h = (function (e) {
        switch (e) {
            case c.P.NOT_CLAIMED:
            case c.P.CLAIM_IN_PROGRESS:
                return { text: x.intl.string(m.default.EL3rU4) };
            case c.P.CLAIMED:
                return { text: x.intl.string(m.default["0mQ2U6"]), icon: n.W, iconPosition: "end" };
            case c.P.CANCELLATION_IN_PROGRESS:
                return { text: x.intl.string(m.default.wBz9aO), disabled: !0 };
        }
    })(s);
    if (t === u.C.NONE)
        return {
            kind: "default",
            claimStatus: s,
            requestInProgress: i,
            text: h.text,
            disabled: !0,
            loading: !0,
            icon: h.icon,
            iconPosition: h.iconPosition,
        };
    if (s === c.P.NOT_CLAIMED || s === c.P.CLAIM_IN_PROGRESS)
        e = () => {
            f();
        };
    else if (s === c.P.CLAIMED) {
        let t = (0, r.isWindows)() ? "msxbox://" : "https://xbox.com/play";
        e = () => {
            ((0, a.A)(t), p(l.H.PARTNER_PAGE_REDIRECT, t));
        };
    }
    return {
        kind: "default",
        claimStatus: s,
        requestInProgress: i,
        text: h.text,
        disabled: (h.disabled ?? !1) || i,
        loading: i,
        icon: h.icon,
        iconPosition: h.iconPosition,
        onClick: e,
    };
}
