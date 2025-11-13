n.d(t, { k: () => E }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(985002),
    c = n(841409),
    u = n(780985),
    d = n(631885),
    f = n(87792),
    _ = n(292352),
    p = n(597754),
    h = n(388032),
    m = n(84989);
let g = () => {
        let e = (0, d.ZM)(),
            t = (0, u.cz)(),
            { selectTeenUser: n } = (0, l.G)({}),
            a = (e) => {
                n(e);
            },
            c = e.map((e) => ({
                label: e,
                value: e,
            })),
            _ = i.useCallback(
                (e) =>
                    (0, r.jsx)(f.I, {
                        userId: e.value,
                        avatarSize: s.EFr.SIZE_24,
                        hideUserTag: !0,
                    }),
                [],
            );
        return 0 === e.length
            ? null
            : (0, r.jsx)("div", {
                  className: o()(m.teenSelector, { [m.grow]: e.length > 1 }),
                  children:
                      e.length > 1
                          ? (0, r.jsx)(s.PhF, {
                                renderOptionLabel: _,
                                renderOptionValue: (e) => {
                                    let [t] = e;
                                    return _(t);
                                },
                                serialize: (e) => e,
                                select: a,
                                isSelected: (e) => e === (null == t ? void 0 : t.id),
                                options: c,
                            })
                          : (0, r.jsx)(f.I, {
                                userId: e[0],
                                avatarSize: s.EFr.SIZE_24,
                                hideUserTag: !0,
                            }),
              });
    },
    E = () => {
        let { selectedTab: e, handleTabChange: t } = (0, c.Z)(),
            n = i.useCallback(() => {
                t(_.dG.ACTIVITY);
            }, [t]);
        return (0, r.jsxs)(s.Kqy, {
            gap: 32,
            children: [
                (0, r.jsxs)(s.P3F, {
                    className: m.backButton,
                    onClick: n,
                    "aria-label": h.intl.string(h.t.ybUZql),
                    children: [
                        (0, r.jsx)(s.j9r, {
                            size: "sm",
                            color: s.TVs.colors.INTERACTIVE_NORMAL,
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: h.intl.string(h.t["13/7kX"]),
                        }),
                    ],
                }),
                (0, r.jsxs)(s.Kqy, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    children: [
                        (0, r.jsxs)(s.Kqy, {
                            gap: 4,
                            className: m.titleContainer,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-secondary",
                                    children: h.intl.string(p.default.RZqaJn),
                                }),
                                (0, r.jsx)(s.Heading, {
                                    variant: "heading-xl/semibold",
                                    color: "header-primary",
                                    children: h.intl.string(e === _.dG.CONTENT_AND_SOCIAL ? h.t["+o1pDZ"] : h.t.OAuOHD),
                                }),
                            ],
                        }),
                        (0, r.jsx)(g, {}),
                    ],
                }),
            ],
        });
    };
