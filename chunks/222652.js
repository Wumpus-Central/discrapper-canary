i.d(t, { N: () => g, z: () => p });
var s,
    n = i(743368),
    a = i(975807),
    l = i(723702),
    r = i(196099);
i(375776);
var c = i(727811),
    o = i(263910),
    d = i(102488),
    u = i(631368),
    m = i(553875),
    x = i(105292),
    g = (((s = {}).DEFAULT = "default"), (s.SUBSCRIBE = "subscribe"), s);
function p() {
    let e,
        t = (0, u.$)(),
        { status: i, requestInProgress: s, redirect: g } = (0, d.L)(),
        p = (0, o.A)(g),
        f = (0, r.M)("xbox");
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
    })(i);
    if (t === u.C.NONE)
        return {
            kind: "default",
            claimStatus: i,
            requestInProgress: s,
            text: h.text,
            disabled: !0,
            loading: !0,
            icon: h.icon,
            iconPosition: h.iconPosition,
        };
    if (i === c.P.NOT_CLAIMED || i === c.P.CLAIM_IN_PROGRESS)
        e = () => {
            p();
        };
    else if (i === c.P.CLAIMED) {
        let t = (0, l.isWindows)() ? "msxbox://" : "https://xbox.com/play";
        e = () => {
            ((0, a.A)(t), f(r.H.PARTNER_PAGE_REDIRECT, t));
        };
    }
    return {
        kind: "default",
        claimStatus: i,
        requestInProgress: s,
        text: h.text,
        disabled: (h.disabled ?? !1) || s,
        loading: s,
        icon: h.icon,
        iconPosition: h.iconPosition,
        onClick: e,
    };
}
