n.d(t, { B: () => c });
var i = n(307301),
    s = n(419954),
    l = n(933297),
    a = n(665671),
    r = n(87707),
    o = n(780964),
    d = n(264717),
    u = n(985018);
let c = (0, s.zZ)(o.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => u.intl.string(u.t.IBq4Y3),
        useSubtitle: () => u.intl.string(u.t.yK9edS),
        useHeaderDecoration: function () {
            if ((0, r.dI)() === r.gW.AVAILABLE)
                return {
                    type: l.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: l.UV.BUTTON,
                            id: "add-security-key-button",
                            text: u.intl.string(u.t["Tzs/fw"]),
                            icon: i.j,
                            onClick: a.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch ((0, r.dI)()) {
                    case r.gW.UNAVAILABLE_NO_CRYPTO:
                        return {
                            type: l.lT.INLINE_NOTICE,
                            noticeType: "info",
                            useText: () => u.intl.string(u.t.bWCGI9),
                        };
                    case r.gW.UNAVAILABLE_UNVERIFIED:
                        return {
                            type: l.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            useText: () => u.intl.string(u.t.uggF7o),
                        };
                    case r.gW.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [g],
    }),
    g = (0, s.E2)(o.X.SECURITY_KEYS_LIST, { useSearchTerms: () => [u.intl.string(u.t.y7SXYX)], Component: d.A });
