n.d(t, { J: () => E, default: () => p });
var l = n(477900),
    r = n(582128),
    i = n(17928),
    a = n(772707),
    u = n(93675),
    s = n(331322),
    c = n(834730),
    d = n(964486),
    o = n(967198),
    f = n(202762),
    g = n(49999),
    m = n(968176),
    h = n(375708);
let E = "GUILD_SPACE_NUX_MODAL";
function p(e) {
    let { guildId: t, markAsDismissed: n, transitionState: E, onClose: p } = e,
        x = (0, i.bG)([o.A], () => o.A.getGuildId()),
        A = r.useRef(x === t);
    ((0, d.Ay)(() => {
        A.current && n(g.i.AUTO_DISMISS);
    }),
        r.useEffect(() => {
            x !== t && p();
        }, [t, p, x]));
    let C = r.useCallback(async () => {
            ((0, f.Wd)(t), await p());
        }, [t, p]),
        _ = r.useCallback(async () => {
            await p();
        }, [p]);
    return x !== t
        ? null
        : (0, l.jsx)(a.k, {
              size: "md",
              transitionState: E,
              onClose: p,
              gradientColor: "blue",
              graphic: {
                  type: "rive",
                  rive: u.f,
                  aspectRatio: "16/9",
                  props: { dataBinding: { on: !0 }, withReducedMotion: "halt", fit: "contain" },
              },
              title: h.intl.string(m.default.x9aorn),
              subtitle: h.intl.string(m.default.HXmZlY),
              actions: [
                  { text: h.intl.string(m.default.KcOpCm), variant: "secondary", onClick: C },
                  { text: h.intl.string(h.t.RzWDqY), variant: "primary", onClick: _ },
              ],
              children: (0, l.jsxs)(s.B, {
                  gap: 16,
                  children: [
                      (0, l.jsxs)(s.B, {
                          gap: 4,
                          children: [
                              (0, l.jsx)(c.E, {
                                  variant: "text-md/medium",
                                  color: "text-strong",
                                  children: h.intl.string(m.default.BNSdWl),
                              }),
                              (0, l.jsx)(c.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children: h.intl.string(m.default["2AoJt6"]),
                              }),
                          ],
                      }),
                      (0, l.jsxs)(s.B, {
                          gap: 4,
                          children: [
                              (0, l.jsx)(c.E, {
                                  variant: "text-md/medium",
                                  color: "text-strong",
                                  children: h.intl.string(m.default.OTYC2K),
                              }),
                              (0, l.jsx)(c.E, {
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
