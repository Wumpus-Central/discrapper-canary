n.d(t, { Z: () => h });
var r = n(200651),
    i = n(192379),
    l = n(990547),
    o = n(481060),
    a = n(213609),
    s = n(536442),
    c = n(39604),
    u = n(176127),
    d = n(388032),
    p = n(235966);
function h(e) {
    let { onOpenClips: t, lastClipsSession: n, closePopout: h } = e;
    return (i.useEffect(
        () => () => {
            (0, c.eL)();
        },
        []
    ),
    (0, a.Z)({
        type: l.ImpressionTypes.VIEW,
        name: l.ImpressionNames.HOTSPOT,
        properties: { hotspot_location: s.v6.CLIPS_CHANNEL_ATTACH_REMINDER }
    }),
    null == n)
        ? null
        : (0, r.jsxs)('div', {
              className: p.recentClipsPopout,
              children: [
                  (0, r.jsx)('div', {
                      className: p.thumbnailStackContainer,
                      children: (0, r.jsx)(u.Z, {})
                  }),
                  (0, r.jsx)(o.X6q, {
                      className: p.header,
                      color: 'header-primary',
                      variant: 'heading-md/extrabold',
                      children: d.NW.format(d.t['+qxkzM'], { count: n.newClipIds.length })
                  }),
                  (0, r.jsx)(o.Text, {
                      color: 'text-normal',
                      className: p.__invalid_content,
                      variant: 'text-sm/medium',
                      children: d.NW.format(d.t['7XX0/f'], { applicationName: n.applicationName })
                  }),
                  (0, r.jsxs)('div', {
                      className: p.buttonsContainer,
                      children: [
                          (0, r.jsx)(o.zxk, {
                              color: o.zxk.Colors.PRIMARY,
                              look: o.zxk.Looks.LINK,
                              onClick: function () {
                                  (0, s.Kw)(s.v6.CLIPS_CHANNEL_ATTACH_REMINDER), h();
                              },
                              children: d.NW.string(d.t['7r5Z19'])
                          }),
                          (0, r.jsx)(o.zxk, {
                              color: o.zxk.Colors.BRAND,
                              onClick: t,
                              children: d.NW.string(d.t.md4qKy)
                          })
                      ]
                  })
              ]
          });
}
