n.d(t, { k: () => m }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(481060),
    o = n(985002),
    s = n(841409),
    l = n(780985),
    c = n(631885),
    u = n(87792),
    d = n(292352),
    f = n(412297),
    _ = n(388032),
    p = n(262448);
let h = () => {
        let e = (0, c.ZM)(),
            t = (0, l.cz)(),
            { selectTeenUser: n } = (0, o.G)({}),
            s = (e) => {
                n(e);
            },
            d = e.map((e) => ({
                label: e,
                value: e,
            })),
            f = i.useCallback(
                (e) =>
                    (0, r.jsx)(u.I, {
                        userId: e.value,
                        avatarSize: a.EFr.SIZE_24,
                        hideUserTag: !0,
                    }),
                [],
            );
        return 0 === e.length
            ? null
            : 1 === e.length
              ? (0, r.jsx)(u.I, {
                    userId: e[0],
                    avatarSize: a.EFr.SIZE_24,
                    hideUserTag: !0,
                })
              : (0, r.jsx)(a.PhF, {
                    renderOptionLabel: f,
                    renderOptionValue: (e) => {
                        let [t] = e;
                        return f(t);
                    },
                    serialize: (e) => e,
                    select: s,
                    isSelected: (e) => e === (null == t ? void 0 : t.id),
                    options: d,
                });
    },
    m = () => {
        let { selectedTab: e, handleTabChange: t } = (0, s.Z)(),
            n = i.useCallback(() => {
                t(d.dG.ACTIVITY);
            }, [t]);
        return (0, r.jsxs)(a.Kqy, {
            gap: 32,
            children: [
                (0, r.jsxs)(a.P3F, {
                    className: p.backButton,
                    onClick: n,
                    "aria-label": _.intl.string(_.t.ybUZqq),
                    children: [
                        (0, r.jsx)(a.j9r, {
                            size: "sm",
                            color: a.TVs.colors.INTERACTIVE_NORMAL,
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: _.intl.string(_.t["13/7kZ"]),
                        }),
                    ],
                }),
                (0, r.jsxs)(a.Kqy, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    children: [
                        (0, r.jsxs)(a.Kqy, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-secondary",
                                    children: _.intl.string(f.default.RZqaJi),
                                }),
                                (0, r.jsx)(a.X6q, {
                                    variant: "heading-xl/semibold",
                                    color: "header-primary",
                                    children: _.intl.string(e === d.dG.CONTENT_AND_SOCIAL ? _.t["+o1pDQ"] : _.t.OAuOHB),
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: p.teenSelector,
                            children: (0, r.jsx)(h, {}),
                        }),
                    ],
                }),
            ],
        });
    };
