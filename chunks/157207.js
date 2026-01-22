n.d(t, {
    A: () => p,
});
var r = n(627968),
    l = n(64700),
    i = n(110259),
    a = n(397927),
    s = n(139286),
    o = n(450510),
    c = n(399925),
    u = n(237607),
    d = n(985018),
    f = n(305711);

function p(e) {
    let { onOpenClips: t, lastClipsSession: n, closePopout: p } = e;
    return (l.useEffect(
        () => () => {
            (0, c.jA)();
        },
        [],
    ),
    (0, s.A)({
        type: i.ImpressionTypes.VIEW,
        name: i.ImpressionNames.HOTSPOT,
        properties: {
            hotspot_location: o._2.CLIPS_CHANNEL_ATTACH_REMINDER,
        },
    }),
    null == n)
        ? null
        : (0, r.jsxs)("div", {
              className: f.WG,
              children: [
                  (0, r.jsx)("div", {
                      className: f.Yt,
                      children: (0, r.jsx)(u.A, {}),
                  }),
                  (0, r.jsx)(a.Heading, {
                      className: f.wx,
                      color: "text-strong",
                      variant: "heading-md/extrabold",
                      children: d.intl.format(d.t["+qxkzC"], {
                          count: n.newClipIds.length,
                      }),
                  }),
                  (0, r.jsx)(a.Text, {
                      color: "text-default",
                      className: f.__invalid_content,
                      variant: "text-sm/medium",
                      children: d.intl.format(d.t["7XX0/X"], {
                          applicationName: n.applicationName,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: f.NC,
                      children: (0, r.jsxs)(a.ButtonGroup, {
                          children: [
                              (0, r.jsx)(a.Button, {
                                  variant: "secondary",
                                  text: d.intl.string(d.t["7r5Z19"]),
                                  onClick: function () {
                                      (0, o.sF)(o._2.CLIPS_CHANNEL_ATTACH_REMINDER), p();
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
