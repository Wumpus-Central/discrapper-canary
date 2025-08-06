n.d(t, { Z: () => _ });
var r = n(255367),
    i = n(73800),
    o = n(990547),
    a = n(481060),
    s = n(213609),
    l = n(536442),
    c = n(39604),
    u = n(176127),
    d = n(388032),
    f = n(235966);
function _(e) {
    let { onOpenClips: t, lastClipsSession: n, closePopout: _ } = e;
    function p() {
        ((0, l.Kw)(l.v6.CLIPS_CHANNEL_ATTACH_REMINDER), _());
    }
    return (i.useEffect(
        () => () => {
            (0, c.eL)();
        },
        []
    ),
    (0, s.Z)({
        type: o.ImpressionTypes.VIEW,
        name: o.ImpressionNames.HOTSPOT,
        properties: { hotspot_location: l.v6.CLIPS_CHANNEL_ATTACH_REMINDER }
    }),
    null == n)
        ? null
        : (0, r.jsxs)('div', {
              className: f.recentClipsPopout,
              children: [
                  (0, r.jsx)('div', {
                      className: f.thumbnailStackContainer,
                      children: (0, r.jsx)(u.Z, {})
                  }),
                  (0, r.jsx)(a.X6q, {
                      className: f.header,
                      color: 'header-primary',
                      variant: 'heading-md/extrabold',
                      children: d.intl.format(d.t['+qxkzM'], { count: n.newClipIds.length })
                  }),
                  (0, r.jsx)(a.Text, {
                      color: 'text-default',
                      className: f.__invalid_content,
                      variant: 'text-sm/medium',
                      children: d.intl.format(d.t['7XX0/f'], { applicationName: n.applicationName })
                  }),
                  (0, r.jsx)('div', {
                      className: f.buttonsContainer,
                      children: (0, r.jsxs)(a.hE2, {
                          children: [
                              (0, r.jsx)(a.zxk, {
                                  variant: 'secondary',
                                  text: d.intl.string(d.t['7r5Z19']),
                                  onClick: p
                              }),
                              (0, r.jsx)(a.zxk, {
                                  variant: 'primary',
                                  text: d.intl.string(d.t.md4qKy),
                                  onClick: t
                              })
                          ]
                      })
                  })
              ]
          });
}
