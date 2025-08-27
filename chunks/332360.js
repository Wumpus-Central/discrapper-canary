n.d(t, { k: () => m }), n(388685);
var r = n(951288),
    i = n(647438),
    o = n(481060),
    a = n(985002),
    s = n(841409),
    l = n(780985),
    c = n(631885),
    u = n(87792),
    d = n(292352),
    f = n(345909),
    _ = n(388032),
    p = n(84989);
let h = () => {
        let e = (0, c.mq)(d.ne.ACTIVE),
            t = (0, l.cz)(),
            { selectTeenUser: n } = (0, a.G)({}),
            s = (e) => {
                n(e);
            },
            f = e.map((e) => ({
                label: e.id,
                value: e.id,
            })),
            _ = i.useCallback(
                (e) =>
                    (0, r.jsx)(u.I, {
                        userId: e.value,
                        avatarSize: o.EFr.SIZE_24,
                        hideUserTag: !0,
                    }),
                [],
            );
        return 0 === e.length
            ? null
            : 1 === e.length
              ? (0, r.jsx)(u.I, {
                    userId: e[0].id,
                    avatarSize: o.EFr.SIZE_24,
                    hideUserTag: !0,
                })
              : (0, r.jsx)(o.PhF, {
                    renderOptionLabel: _,
                    renderOptionValue: (e) => {
                        let [t] = e;
                        return _(t);
                    },
                    serialize: (e) => e,
                    select: s,
                    isSelected: (e) => e === (null == t ? void 0 : t.id),
                    options: f,
                });
    },
    m = () => {
        let { selectedTab: e, handleTabChange: t } = (0, s.Z)(),
            n = i.useCallback(() => {
                t(d.dG.ACTIVITY);
            }, [t]);
        return (0, r.jsxs)(o.Kqy, {
            gap: 32,
            children: [
                (0, r.jsxs)(o.P3F, {
                    className: p.backButton,
                    onClick: n,
                    "aria-label": _.intl.string(_.t.ybUZqq),
                    children: [
                        (0, r.jsx)(o.j9r, {
                            size: "sm",
                            color: o.TVs.colors.INTERACTIVE_NORMAL,
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: _.intl.string(_.t["13/7kZ"]),
                        }),
                    ],
                }),
                (0, r.jsxs)(o.Kqy, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    children: [
                        (0, r.jsxs)(o.Kqy, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-secondary",
                                    children: _.intl.string(f.default.RZqaJi),
                                }),
                                (0, r.jsx)(o.X6q, {
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
