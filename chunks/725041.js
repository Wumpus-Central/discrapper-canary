n.d(t, { J: () => S, default: () => I });
var l = n(477900),
    r = n(582128),
    i = n(17928),
    a = n(331322),
    s = n(834730),
    u = n(772707),
    d = n(93675),
    c = n(902478),
    o = n(663417),
    g = n(366056),
    f = n(964486),
    h = n(468689),
    m = n(71393),
    E = n(967198),
    p = n(202762),
    A = n(593673),
    C = n(652215),
    x = n(49999),
    _ = n(880098),
    v = n(105292),
    b = n(636531);
let S = "GUILD_SPACE_NUX_MODAL";
function y(e) {
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
function I(e) {
    let { guildId: t, markAsDismissed: n, transitionState: s, onClose: b } = e,
        S = (0, i.bG)([E.A], () => E.A.getGuildId()),
        I = (0, i.bG)([m.A], () => m.A.getGuild(t)?.guildSpaceSettings?.publish_status === A.B.PUBLISHED, [t]),
        D = r.useRef(S === t);
    ((0, f.Ay)(() => {
        D.current && n(x.i.AUTO_DISMISS);
    }),
        r.useEffect(() => {
            S !== t && b();
        }, [t, b, S]));
    let j = r.useCallback(async () => {
            ((0, p.Wd)(t), await b());
        }, [t, b]),
        w = r.useCallback(async () => {
            (h.A.open(t, C.BEX.ENGAGEMENT, void 0, C.nd0.ENGAGEMENT_GUILD_SPACE), await b());
        }, [t, b]);
    return S !== t
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
                  ...(I ? [{ text: v.intl.string(v.t["154/bL"]), variant: "secondary", onClick: w }] : []),
                  { text: v.intl.string(_.default["/Ld1Ju"]), variant: "secondary", onClick: j },
              ],
              children: (0, l.jsxs)(a.B, {
                  gap: 16,
                  children: [
                      (0, l.jsx)(y, {
                          icon: (0, l.jsx)(c.u, { size: "sm", color: "currentColor" }),
                          title: v.intl.string(_.default.BNSdWl),
                          description: v.intl.string(_.default["2AoJt6"]),
                      }),
                      (0, l.jsx)(y, {
                          icon: (0, l.jsx)(o.RefreshIcon, { size: "sm", color: "currentColor" }),
                          title: v.intl.string(_.default.OTYC2K),
                          description: v.intl.string(_.default.aQUPiQ),
                      }),
                      I
                          ? (0, l.jsx)(y, {
                                icon: (0, l.jsx)(g.M, { size: "sm", color: "currentColor" }),
                                title: v.intl.string(_.default.GMgGSC),
                                description: v.intl.string(_.default.FurWLH),
                            })
                          : (0, l.jsx)(y, {
                                icon: (0, l.jsx)(g.M, { size: "sm", color: "currentColor" }),
                                title: v.intl.string(_.default.Hk5K1P),
                                description: v.intl.string(_.default["vloG7/"]),
                            }),
                  ],
              }),
          });
}
