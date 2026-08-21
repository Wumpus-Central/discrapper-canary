s.d(t, { N: () => x, z: () => f });
var i,
    n = s(743368),
    a = s(975807),
    l = s(723702),
    r = s(196099);
s(375776);
var c = s(727811),
    o = s(263910),
    d = s(102488),
    u = s(631368),
    m = s(477767),
    g = s(375708),
    x = (((i = {}).DEFAULT = "default"), (i.SUBSCRIBE = "subscribe"), i);
function f() {
    let e,
        t = (0, u.$)(),
        { status: s, requestInProgress: i, redirect: x } = (0, d.L)(),
        f = (0, o.A)(x),
        p = (0, r.M)("xbox");
    if (t === u.C.NO_ACCESS) return { kind: "subscribe", text: g.intl.string(g.t.sEAnVH) };
    let h = (function (e) {
        switch (e) {
            case c.P.NOT_CLAIMED:
            case c.P.CLAIM_IN_PROGRESS:
                return { text: g.intl.string(m.default.EL3rU4) };
            case c.P.CLAIMED:
                return { text: g.intl.string(m.default["0mQ2U6"]), icon: n.W, iconPosition: "end" };
            case c.P.CANCELLATION_IN_PROGRESS:
                return { text: g.intl.string(m.default.wBz9aO), disabled: !0 };
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
        let t = (0, l.isWindows)() ? "msxbox://" : "https://xbox.com/play";
        e = () => {
            (0, a.A)(t), p(r.H.PARTNER_PAGE_REDIRECT, t);
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
