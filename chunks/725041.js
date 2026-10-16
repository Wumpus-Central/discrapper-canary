n.d(t, { J: () => S, default: () => y });
var l = n(477900),
    r = n(582128),
    i = n(17928),
    a = n(331322),
    u = n(834730),
    s = n(772707),
    c = n(93675),
    d = n(902478),
    o = n(663417),
    f = n(366056),
    g = n(964486),
    m = n(468689),
    h = n(71393),
    E = n(967198),
    p = n(202762),
    x = n(593673),
    C = n(652215),
    A = n(49999),
    _ = n(61567),
    v = n(105292),
    I = n(636531);
let S = "GUILD_SPACE_NUX_MODAL";
function b(e) {
    let { icon: t, title: n, description: r } = e;
    return (0, l.jsxs)(a.B, {
        direction: "horizontal",
        gap: 12,
        children: [
            (0, l.jsx)("div", { className: I.z, children: t }),
            (0, l.jsxs)(a.B, {
                gap: 0,
                children: [
                    (0, l.jsx)(u.E, { variant: "text-md/medium", color: "text-strong", children: n }),
                    (0, l.jsx)(u.E, { variant: "text-sm/normal", color: "text-subtle", children: r }),
                ],
            }),
        ],
    });
}
function y(e) {
    let { guildId: t, markAsDismissed: n, transitionState: u, onClose: I } = e,
        S = (0, i.bG)([E.A], () => E.A.getGuildId()),
        y = (0, i.bG)([h.A], () => h.A.getGuild(t)?.guildSpaceSettings?.publish_status === x.B.PUBLISHED, [t]),
        D = r.useRef(S === t);
    ((0, g.Ay)(() => {
        D.current && n(A.i.AUTO_DISMISS);
    }),
        r.useEffect(() => {
            S !== t && I();
        }, [t, I, S]));
    let j = r.useCallback(async () => {
            ((0, p.Wd)(t), await I());
        }, [t, I]),
        G = r.useCallback(async () => {
            (m.A.open(t, C.BEX.ENGAGEMENT, void 0, C.nd0.ENGAGEMENT_GUILD_SPACE), await I());
        }, [t, I]);
    return S !== t
        ? null
        : (0, l.jsx)(s.k, {
              size: "md",
              transitionState: u,
              onClose: I,
              gradientColor: "blue",
              graphic: {
                  type: "rive",
                  rive: c.f,
                  aspectRatio: "16/9",
                  props: { dataBinding: { on: !0 }, withReducedMotion: "halt", fit: "contain" },
              },
              title: v.intl.string(_.default.x9aorn),
              subtitle: v.intl.string(_.default.HXmZlY),
              actions: [
                  ...(y ? [{ text: v.intl.string(v.t["154/bL"]), variant: "secondary", onClick: G }] : []),
                  { text: v.intl.string(_.default["/Ld1Ju"]), variant: "secondary", onClick: j },
              ],
              children: (0, l.jsxs)(a.B, {
                  gap: 16,
                  children: [
                      (0, l.jsx)(b, {
                          icon: (0, l.jsx)(d.u, { size: "sm", color: "currentColor" }),
                          title: v.intl.string(_.default.BNSdWl),
                          description: v.intl.string(_.default["2AoJt6"]),
                      }),
                      (0, l.jsx)(b, {
                          icon: (0, l.jsx)(o.RefreshIcon, { size: "sm", color: "currentColor" }),
                          title: v.intl.string(_.default.OTYC2K),
                          description: v.intl.string(_.default.aQUPiQ),
                      }),
                      y
                          ? (0, l.jsx)(b, {
                                icon: (0, l.jsx)(f.M, { size: "sm", color: "currentColor" }),
                                title: v.intl.string(_.default.GMgGSC),
                                description: v.intl.string(_.default.FurWLH),
                            })
                          : (0, l.jsx)(b, {
                                icon: (0, l.jsx)(f.M, { size: "sm", color: "currentColor" }),
                                title: v.intl.string(_.default.Hk5K1P),
                                description: v.intl.string(_.default["vloG7/"]),
                            }),
                  ],
              }),
          });
}
