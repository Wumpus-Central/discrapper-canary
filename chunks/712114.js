n.d(t, { Z: () => f });
var r = n(951288),
    i = n(647438),
    l = n(990547),
    a = n(481060),
    o = n(213609),
    s = n(536442),
    c = n(39604),
    u = n(176127),
    d = n(388032),
    p = n(945202);
function f(e) {
    let { onOpenClips: t, lastClipsSession: n, closePopout: f } = e;
    return (i.useEffect(
        () => () => {
            (0, c.eL)();
        },
        [],
    ),
    (0, o.Z)({
        type: l.ImpressionTypes.VIEW,
        name: l.ImpressionNames.HOTSPOT,
        properties: { hotspot_location: s.v6.CLIPS_CHANNEL_ATTACH_REMINDER },
    }),
    null == n)
        ? null
        : (0, r.jsxs)("div", {
              className: p.recentClipsPopout,
              children: [
                  (0, r.jsx)("div", {
                      className: p.thumbnailStackContainer,
                      children: (0, r.jsx)(u.Z, {}),
                  }),
                  (0, r.jsx)(a.Heading, {
                      className: p.header,
                      color: "header-primary",
                      variant: "heading-md/extrabold",
                      children: d.intl.format(d.t["+qxkzC"], { count: n.newClipIds.length }),
                  }),
                  (0, r.jsx)(a.Text, {
                      color: "text-default",
                      className: p.__invalid_content,
                      variant: "text-sm/medium",
                      children: d.intl.format(d.t["7XX0/X"], { applicationName: n.applicationName }),
                  }),
                  (0, r.jsx)("div", {
                      className: p.buttonsContainer,
                      children: (0, r.jsxs)(a.ButtonGroup, {
                          children: [
                              (0, r.jsx)(a.Button, {
                                  variant: "secondary",
                                  text: d.intl.string(d.t["7r5Z19"]),
                                  onClick: function () {
                                      (0, s.Kw)(s.v6.CLIPS_CHANNEL_ATTACH_REMINDER), f();
                                  },
                              }),
                              (0, r.jsx)(a.Button, {
                                  variant: "primary",
                                  text: d.intl.string(d.t.md4qKz),
                                  onClick: t,
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
