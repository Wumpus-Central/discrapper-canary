n.d(t, { J: () => E, default: () => p });
var l = n(477900),
    r = n(582128),
    i = n(17928),
    a = n(772707),
    s = n(93675),
    u = n(331322),
    d = n(834730),
    c = n(964486),
    o = n(967198),
    f = n(202762),
    g = n(49999),
    m = n(968176),
    h = n(375708);
let E = "GUILD_SPACE_NUX_MODAL";
function p(e) {
    let { guildId: t, markAsDismissed: n, transitionState: E, onClose: p } = e,
        A = (0, i.bG)([o.A], () => o.A.getGuildId()),
        x = r.useRef(A === t);
    ((0, c.Ay)(() => {
        x.current && n(g.i.AUTO_DISMISS);
    }),
        r.useEffect(() => {
            A !== t && p();
        }, [t, p, A]));
    let _ = r.useCallback(async () => {
            ((0, f.Wd)(t), await p());
        }, [t, p]),
        C = r.useCallback(async () => {
            await p();
        }, [p]);
    return A !== t
        ? null
        : (0, l.jsx)(a.k, {
              size: "md",
              transitionState: E,
              onClose: p,
              gradientColor: "blue",
              graphic: {
                  type: "rive",
                  rive: s.f,
                  aspectRatio: "16/9",
                  props: { dataBinding: { on: !0 }, withReducedMotion: "halt", fit: "contain" },
              },
              title: h.intl.string(m.default.x9aorn),
              subtitle: h.intl.string(m.default.HXmZlY),
              actions: [
                  { text: h.intl.string(m.default.KcOpCm), variant: "secondary", onClick: _ },
                  { text: h.intl.string(h.t.RzWDqY), variant: "primary", onClick: C },
              ],
              children: (0, l.jsxs)(u.B, {
                  gap: 16,
                  children: [
                      (0, l.jsxs)(u.B, {
                          gap: 4,
                          children: [
                              (0, l.jsx)(d.E, {
                                  variant: "text-md/medium",
                                  color: "text-strong",
                                  children: h.intl.string(m.default.BNSdWl),
                              }),
                              (0, l.jsx)(d.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children: h.intl.string(m.default["2AoJt6"]),
                              }),
                          ],
                      }),
                      (0, l.jsxs)(u.B, {
                          gap: 4,
                          children: [
                              (0, l.jsx)(d.E, {
                                  variant: "text-md/medium",
                                  color: "text-strong",
                                  children: h.intl.string(m.default.OTYC2K),
                              }),
                              (0, l.jsx)(d.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children: h.intl.string(m.default.aQUPiQ),
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
