var l = n(477900),
    i = n(582128),
    r = n(855986),
    a = n(331322),
    s = n(834730),
    u = n(772707),
    d = n(480749),
    c = n(902478),
    o = n(663417),
    g = n(366056),
    f = n(964486),
    h = n(727419),
    m = n(71393),
    E = n(967198),
    p = n(202762),
    A = n(593673),
    C = n(652215),
    I = n(49999),
    _ = n(135294),
    S = n(792996),
    x = n(636531);
function v(e) {
    let { icon: t, title: n, description: i } = e;
    return (0, l.jsxs)(a.B, {
        direction: "horizontal",
        gap: 12,
        children: [
            (0, l.jsx)("div", { className: x.z, children: t }),
            (0, l.jsxs)(a.B, {
                gap: 0,
                children: [
                    (0, l.jsx)(s.E, { variant: "body-md/medium", color: "text-strong", children: n }),
                    (0, l.jsx)(s.E, { variant: "body-sm/normal", color: "text-subtle", children: i }),
                ],
            }),
        ],
    });
}
n.d(
    t,
    {},
    {
        J: "GUILD_SPACE_NUX_MODAL",
        default: function (e) {
            let { guildId: t, markAsDismissed: n, transitionState: s, onClose: x } = e,
                y = (0, r.bG)([E.A], () => E.A.getGuildId()),
                b = (0, r.bG)([m.A], () => m.A.getGuild(t)?.guildSpaceSettings?.publish_status === A.B.PUBLISHED, [t]),
                D = i.useRef(y === t);
            ((0, f.Ay)(() => {
                D.current && n(I.i.AUTO_DISMISS);
            }),
                i.useEffect(() => {
                    y !== t && x();
                }, [t, x, y]));
            let G = i.useCallback(async () => {
                    ((0, p.Wd)(t), await x());
                }, [t, x]),
                j = i.useCallback(async () => {
                    (h.A.open(t, C.BEX.ENGAGEMENT, void 0, C.nd0.ENGAGEMENT_GUILD_SPACE), await x());
                }, [t, x]);
            return y !== t
                ? null
                : (0, l.jsx)(u.k, {
                      size: "md",
                      transitionState: s,
                      onClose: x,
                      gradientColor: "blue",
                      graphic: {
                          type: "rive",
                          rive: d.f,
                          aspectRatio: "16/9",
                          props: { dataBinding: { on: !0 }, withReducedMotion: "halt", fit: "contain" },
                      },
                      title: S.intl.string(_.default.x9aorn),
                      subtitle: S.intl.string(_.default.HXmZlY),
                      actions: [
                          ...(b ? [{ text: S.intl.string(S.t["154/bL"]), variant: "secondary", onClick: j }] : []),
                          { text: S.intl.string(_.default["/Ld1Ju"]), variant: "primary", onClick: G },
                      ],
                      children: (0, l.jsxs)(a.B, {
                          gap: 16,
                          children: [
                              (0, l.jsx)(v, {
                                  icon: (0, l.jsx)(c.GridVerticalIcon, { size: "sm", color: "currentColor" }),
                                  title: S.intl.string(_.default.BNSdWl),
                                  description: S.intl.string(_.default["2AoJt6"]),
                              }),
                              (0, l.jsx)(v, {
                                  icon: (0, l.jsx)(o.RefreshIcon, { size: "sm", color: "currentColor" }),
                                  title: S.intl.string(_.default.OTYC2K),
                                  description: S.intl.string(_.default.aQUPiQ),
                              }),
                              b
                                  ? (0, l.jsx)(v, {
                                        icon: (0, l.jsx)(g.ExperimentalCheckpointIcon, {
                                            size: "sm",
                                            color: "currentColor",
                                        }),
                                        title: S.intl.string(_.default.GMgGSC),
                                        description: S.intl.string(_.default.FurWLH),
                                    })
                                  : (0, l.jsx)(v, {
                                        icon: (0, l.jsx)(g.ExperimentalCheckpointIcon, {
                                            size: "sm",
                                            color: "currentColor",
                                        }),
                                        title: S.intl.string(_.default.Hk5K1P),
                                        description: S.intl.string(_.default["vloG7/"]),
                                    }),
                          ],
                      }),
                  });
        },
    },
);
