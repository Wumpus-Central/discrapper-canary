var l = n(477900),
    r = n(582128),
    i = n(855986),
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
    x = n(49999),
    _ = n(135294),
    v = n(792996),
    b = n(636531);
function S(e) {
    let { icon: t, title: n, description: r } = e;
    return (0, l.jsxs)(a.B, {
        direction: "horizontal",
        gap: 12,
        children: [
            (0, l.jsx)("div", { className: b.z, children: t }),
            (0, l.jsxs)(a.B, {
                gap: 0,
                children: [
                    (0, l.jsx)(s.E, { variant: "body-md/medium", color: "text-strong", children: n }),
                    (0, l.jsx)(s.E, { variant: "body-sm/normal", color: "text-subtle", children: r }),
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
            let { guildId: t, markAsDismissed: n, transitionState: s, onClose: b } = e,
                I = (0, i.bG)([E.A], () => E.A.getGuildId()),
                y = (0, i.bG)([m.A], () => m.A.getGuild(t)?.guildSpaceSettings?.publish_status === A.B.PUBLISHED, [t]),
                D = r.useRef(I === t);
            ((0, f.Ay)(() => {
                D.current && n(x.i.AUTO_DISMISS);
            }),
                r.useEffect(() => {
                    I !== t && b();
                }, [t, b, I]));
            let j = r.useCallback(async () => {
                    ((0, p.Wd)(t), await b());
                }, [t, b]),
                w = r.useCallback(async () => {
                    (h.A.open(t, C.BEX.ENGAGEMENT, void 0, C.nd0.ENGAGEMENT_GUILD_SPACE), await b());
                }, [t, b]);
            return I !== t
                ? null
                : (0, l.jsx)(u.k, {
                      size: "md",
                      transitionState: s,
                      onClose: b,
                      gradientColor: "blue",
                      graphic: {
                          type: "rive",
                          rive: d.f,
                          aspectRatio: "16/9",
                          props: { dataBinding: { on: !0 }, withReducedMotion: "halt", fit: "contain" },
                      },
                      title: v.intl.string(_.default.x9aorn),
                      subtitle: v.intl.string(_.default.HXmZlY),
                      actions: [
                          ...(y ? [{ text: v.intl.string(v.t["154/bL"]), variant: "secondary", onClick: w }] : []),
                          { text: v.intl.string(_.default["/Ld1Ju"]), variant: "primary", onClick: j },
                      ],
                      children: (0, l.jsxs)(a.B, {
                          gap: 16,
                          children: [
                              (0, l.jsx)(S, {
                                  icon: (0, l.jsx)(c.u, { size: "sm", color: "currentColor" }),
                                  title: v.intl.string(_.default.BNSdWl),
                                  description: v.intl.string(_.default["2AoJt6"]),
                              }),
                              (0, l.jsx)(S, {
                                  icon: (0, l.jsx)(o.RefreshIcon, { size: "sm", color: "currentColor" }),
                                  title: v.intl.string(_.default.OTYC2K),
                                  description: v.intl.string(_.default.aQUPiQ),
                              }),
                              y
                                  ? (0, l.jsx)(S, {
                                        icon: (0, l.jsx)(g.M, { size: "sm", color: "currentColor" }),
                                        title: v.intl.string(_.default.GMgGSC),
                                        description: v.intl.string(_.default.FurWLH),
                                    })
                                  : (0, l.jsx)(S, {
                                        icon: (0, l.jsx)(g.M, { size: "sm", color: "currentColor" }),
                                        title: v.intl.string(_.default.Hk5K1P),
                                        description: v.intl.string(_.default["vloG7/"]),
                                    }),
                          ],
                      }),
                  });
        },
    },
);
