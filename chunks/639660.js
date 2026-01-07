n.d(t, { Z: () => g });
var r = n(54381),
    i = n(793030),
    o = n(166146),
    l = n(247048),
    a = n(975706),
    s = n(800869),
    u = n(366751),
    c = n(309945),
    d = n(225039),
    f = n(556970),
    p = n(388032),
    m = n(754747);
function v(e) {
    let { text: t } = e;
    return (0, r.jsx)("div", {
        className: m.staffContainer,
        children: (0, r.jsx)(i.xvT, {
            variant: "text-sm/medium",
            children: t,
        }),
    });
}
function g(e) {
    let { guildId: t } = e,
        n = (0, a.Z)(t),
        g = (0, o.Z)(t),
        x = (0, l.Z)(t),
        b = (0, d.Z)(g.shouldShow || x.shouldShow);
    return n.shouldShow || g.shouldShow || x.shouldShow || b.shouldShow
        ? (0, r.jsxs)("div", {
              className: m.container,
              children: [
                  (0, r.jsx)(i.xvT, {
                      variant: "eyebrow",
                      color: "text-subtle",
                      children: p.intl.string(f.default["3FRirU"]),
                  }),
                  n.shouldShow && (0, r.jsx)(v, { text: n.text }),
                  g.shouldShow &&
                      (0, r.jsx)(c.Z, {
                          guildId: t,
                          powerupNames: g.expiringPowerupNames,
                          warnings: g.warnings,
                      }),
                  x.shouldShow &&
                      null != x.notificationConfig &&
                      (0, r.jsx)(u.Z, {
                          notificationConfig: x.notificationConfig,
                          markAsDismissed: x.markAsDismissed,
                      }),
                  b.shouldShow && (0, r.jsx)(s.Z, { markAsDismissed: b.markAsDismissed }),
              ],
          })
        : null;
}
