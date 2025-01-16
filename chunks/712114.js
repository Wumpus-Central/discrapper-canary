n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(990547),
    a = n(481060),
    s = n(213609),
    o = n(536442),
    c = n(39604),
    d = n(176127),
    u = n(388032),
    h = n(717191);
function p(e) {
    let { onOpenClips: t, lastClipsSession: n, closePopout: p } = e;
    return (l.useEffect(
        () => () => {
            (0, c.eL)();
        },
        []
    ),
    (0, s.Z)({
        type: r.ImpressionTypes.VIEW,
        name: r.ImpressionNames.HOTSPOT,
        properties: { hotspot_location: o.v6.CLIPS_CHANNEL_ATTACH_REMINDER }
    }),
    null == n)
        ? (0, i.jsx)(i.Fragment, {})
        : (0, i.jsxs)('div', {
              className: h.recentClipsPopout,
              children: [
                  (0, i.jsx)('div', {
                      className: h.thumbnailStackContainer,
                      children: (0, i.jsx)(d.Z, {})
                  }),
                  (0, i.jsx)(a.Heading, {
                      className: h.header,
                      color: 'header-primary',
                      variant: 'heading-md/extrabold',
                      children: u.intl.format(u.t['+qxkzM'], { count: n.newClipIds.length })
                  }),
                  (0, i.jsx)(a.Text, {
                      color: 'text-normal',
                      className: h.__invalid_content,
                      variant: 'text-sm/medium',
                      children: u.intl.format(u.t['7XX0/f'], { applicationName: n.applicationName })
                  }),
                  (0, i.jsxs)('div', {
                      className: h.buttonsContainer,
                      children: [
                          (0, i.jsx)(a.Button, {
                              color: a.Button.Colors.PRIMARY,
                              look: a.Button.Looks.LINK,
                              onClick: function () {
                                  (0, o.Kw)(o.v6.CLIPS_CHANNEL_ATTACH_REMINDER), p();
                              },
                              children: u.intl.string(u.t['7r5Z19'])
                          }),
                          (0, i.jsx)(a.Button, {
                              color: a.Button.Colors.BRAND,
                              onClick: t,
                              children: u.intl.string(u.t.md4qKy)
                          })
                      ]
                  })
              ]
          });
}
