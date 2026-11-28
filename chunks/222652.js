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
    m = i(336506),
    x = i(792996),
    g = (((s = {}).DEFAULT = "default"), (s.SUBSCRIBE = "subscribe"), s);
i.d(
    t,
    {},
    {
        N: g,
        z: function () {
            let e,
                t = (0, u.$)(),
                { status: i, requestInProgress: s, redirect: g } = (0, d.L)(),
                h = (0, o.A)(g),
                p = (0, r.M)("xbox");
            if (t === u.C.NO_ACCESS) return { kind: "subscribe", text: x.intl.string(x.t.sEAnVH) };
            let f = (function (e) {
                switch (e) {
                    case c.P.NOT_CLAIMED:
                    case c.P.CLAIM_IN_PROGRESS:
                        return { text: x.intl.string(m.default.EL3rU4) };
                    case c.P.CLAIMED:
                        return {
                            text: x.intl.string(m.default["0mQ2U6"]),
                            icon: n.LinkExternalMediumIcon,
                            iconPosition: "end",
                        };
                    case c.P.CANCELLATION_IN_PROGRESS:
                        return { text: x.intl.string(m.default.wBz9aO), disabled: !0 };
                }
            })(i);
            if (t === u.C.NONE)
                return {
                    kind: "default",
                    claimStatus: i,
                    requestInProgress: s,
                    text: f.text,
                    disabled: !0,
                    loading: !0,
                    icon: f.icon,
                    iconPosition: f.iconPosition,
                };
            if (i === c.P.NOT_CLAIMED || i === c.P.CLAIM_IN_PROGRESS)
                e = () => {
                    h();
                };
            else if (i === c.P.CLAIMED) {
                let t = (0, l.uF)() ? "msxbox://" : "https://xbox.com/play";
                e = () => {
                    ((0, a.A)(t), p(r.H.PARTNER_PAGE_REDIRECT, t));
                };
            }
            return {
                kind: "default",
                claimStatus: i,
                requestInProgress: s,
                text: f.text,
                disabled: (f.disabled ?? !1) || s,
                loading: s,
                icon: f.icon,
                iconPosition: f.iconPosition,
                onClick: e,
            };
        },
    },
);
