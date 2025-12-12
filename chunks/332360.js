n.d(t, { k: () => b }), n(388685);
var r = n(54381),
    i = n(473749),
    o = n(120356),
    a = n.n(o),
    s = n(199849),
    l = n(481060),
    c = n(985002),
    u = n(841409),
    d = n(780985),
    f = n(631885),
    p = n(87792),
    _ = n(292352),
    m = n(435757),
    h = n(388032),
    g = n(84989);
let E = () => {
        let e = (0, f.ZM)(),
            t = (0, d.cz)(),
            { selectTeenUser: n } = (0, c.G)({}),
            o = (e) => {
                n(e);
            },
            u = e.map((e) => ({
                label: e,
                value: e,
            })),
            _ = i.useCallback(
                (e) =>
                    (0, r.jsx)(p.I, {
                        userId: e.value,
                        avatarSize: l.EFr.SIZE_24,
                        hideUserTag: !0,
                    }),
                [],
            );
        return 0 === e.length
            ? null
            : (0, r.jsx)("div", {
                  className: a()(g.teenSelector, { [g.grow]: e.length > 1 }),
                  children:
                      e.length > 1
                          ? (0, r.jsx)(s.B6, {
                                renderOptionLabel: _,
                                renderOptionValue: (e) => {
                                    let [t] = e;
                                    return _(t);
                                },
                                serialize: (e) => e,
                                select: o,
                                isSelected: (e) => e === (null == t ? void 0 : t.id),
                                options: u,
                            })
                          : (0, r.jsx)(p.I, {
                                userId: e[0],
                                avatarSize: l.EFr.SIZE_24,
                                hideUserTag: !0,
                            }),
              });
    },
    b = () => {
        let { selectedTab: e, handleTabChange: t } = (0, u.Z)(),
            n = i.useCallback(() => {
                t(_.dG.ACTIVITY);
            }, [t]);
        return (0, r.jsxs)(l.Kqy, {
            gap: 32,
            children: [
                (0, r.jsxs)(l.P3F, {
                    className: g.backButton,
                    onClick: n,
                    "aria-label": h.intl.string(h.t.ybUZql),
                    children: [
                        (0, r.jsx)(l.j9r, {
                            size: "sm",
                            color: l.TVs.colors.INTERACTIVE_TEXT_DEFAULT,
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: h.intl.string(h.t["13/7kX"]),
                        }),
                    ],
                }),
                (0, r.jsxs)(l.Kqy, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    children: [
                        (0, r.jsxs)(l.Kqy, {
                            gap: 4,
                            className: g.titleContainer,
                            children: [
                                (0, r.jsx)(l.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-subtle",
                                    children: h.intl.string(m.default.RZqaJn),
                                }),
                                (0, r.jsx)(l.Heading, {
                                    variant: "heading-xl/semibold",
                                    color: "text-strong",
                                    children: h.intl.string(e === _.dG.CONTENT_AND_SOCIAL ? h.t["+o1pDZ"] : h.t.OAuOHD),
                                }),
                            ],
                        }),
                        (0, r.jsx)(E, {}),
                    ],
                }),
            ],
        });
    };
