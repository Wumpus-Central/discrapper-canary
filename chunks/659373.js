var i = n(582128),
    l = n(964486),
    r = n(609425),
    s = n(919395),
    a = n(84540),
    o = n(287809),
    u = n(471865),
    d = n(773527),
    c = n(211824);
n.d(
    t,
    {},
    {
        K: function (e, t) {
            let { pendingDisplayNameStyles: n } = (0, s.B0)(e),
                g = (0, r.A)({ userId: e.id, pendingDisplayNameStyles: n, ignoreDisabledStylesSetting: !0 }),
                f = null != g && (0, d.n2)(g),
                [m, p] = i.useState(!1),
                h = i.useRef(!1),
                x = i.useRef(!0);
            (0, l.l0)(() => {
                x.current = !1;
            });
            let A = i.useCallback(() => {
                if (h.current) return;
                let e = o.default.getCurrentUser()?.displayNameStyles;
                (0, a.p)({ displayNameStyles: null == e || (0, d.n2)(e) ? null : e });
            }, []);
            return {
                isApplied: f,
                isEnrolling: m,
                applyCampaignDisplayNameStyle: i.useCallback(async () => {
                    if (h.current) return !1;
                    ((h.current = !0), p(!0));
                    let e = !1;
                    try {
                        e = await (0, u.Br)(c.vB.DISPLAY_NAME_STYLE);
                    } catch {
                        e = !1;
                    }
                    return (
                        !!x.current &&
                        (((h.current = !1), p(!1), e)
                            ? ((0, u.WT)(),
                              (0, a.p)({ displayNameStyles: c.AA }),
                              (0, u.VN)(c.vB.DISPLAY_NAME_STYLE),
                              !0)
                            : (t?.(), !1))
                    );
                }, [t]),
                removeCampaignDisplayNameStyle: A,
            };
        },
    },
);
