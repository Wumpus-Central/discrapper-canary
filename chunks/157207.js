n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    a = n(110259),
    s = n(397927),
    r = n(139286),
    o = n(450510),
    c = n(399925),
    d = n(237607),
    u = n(985018),
    h = n(305711);
function m(e) {
    let { onOpenClips: t, lastClipsSession: n, closePopout: m } = e;
    return (l.useEffect(
        () => () => {
            (0, c.jA)();
        },
        [],
    ),
    (0, r.A)({
        type: a.ImpressionTypes.VIEW,
        name: a.ImpressionNames.HOTSPOT,
        properties: { hotspot_location: o._2.CLIPS_CHANNEL_ATTACH_REMINDER },
    }),
    null == n)
        ? null
        : (0, i.jsxs)("div", {
              className: h.WG,
              children: [
                  (0, i.jsx)("div", { className: h.Yt, children: (0, i.jsx)(d.A, {}) }),
                  (0, i.jsx)(s.Heading, {
                      className: h.wx,
                      color: "text-strong",
                      variant: "heading-md/extrabold",
                      children: u.intl.format(u.t["+qxkzC"], { count: n.newClipIds.length }),
                  }),
                  (0, i.jsx)(s.Text, {
                      color: "text-default",
                      className: h.__invalid_content,
                      variant: "text-sm/medium",
                      children: u.intl.format(u.t["7XX0/X"], { applicationName: n.applicationName }),
                  }),
                  (0, i.jsx)("div", {
                      className: h.NC,
                      children: (0, i.jsxs)(s.ButtonGroup, {
                          children: [
                              (0, i.jsx)(s.Button, {
                                  variant: "secondary",
                                  text: u.intl.string(u.t["7r5Z19"]),
                                  onClick: function () {
                                      (0, o.sF)(o._2.CLIPS_CHANNEL_ATTACH_REMINDER), m();
                                  },
                              }),
                              (0, i.jsx)(s.Button, { variant: "primary", text: u.intl.string(u.t.md4qKz), onClick: t }),
                          ],
                      }),
                  }),
              ],
          });
}
