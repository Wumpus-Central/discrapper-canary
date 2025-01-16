var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(528963),
    s = n(143740),
    c = n(528144),
    d = n(212342),
    u = n(388032),
    m = n(869361);
t.Z = (e) => {
    let { channelId: t, messageId: n } = e,
        h = (0, l.e7)([d.Z], () => d.Z.shouldShowBump(n), [n]),
        f = r.useCallback(() => {
            o.Z.dismissPublishBump(n), (0, s.Z)(t, n);
        }, [t, n]),
        p = r.useCallback(() => {
            o.Z.dismissPublishBump(n);
        }, [n]),
        _ = r.useCallback(() => {
            o.Z.permanentlyHidePublishBump(t);
        }, [t]);
    return h
        ? (0, i.jsxs)('div', {
              className: m.container,
              children: [
                  (0, i.jsxs)('div', {
                      className: m.bumpBox,
                      children: [
                          (0, i.jsx)(a.AnnouncementsIcon, {
                              size: 'xs',
                              color: 'currentColor',
                              className: m.icon
                          }),
                          (0, i.jsx)(c.Z, {
                              className: m.tagline,
                              size: c.Z.Sizes.SIZE_14,
                              children: u.intl.string(u.t.hasZoa)
                          }),
                          (0, i.jsx)(a.Button, {
                              color: a.Button.Colors.LINK,
                              look: a.Button.Looks.LINK,
                              size: a.Button.Sizes.MIN,
                              className: m.publish,
                              onClick: f,
                              children: u.intl.string(u.t['MFGE5+'])
                          }),
                          (0, i.jsx)(a.Clickable, {
                              onClick: p,
                              children: (0, i.jsx)(a.CircleXIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: m.closeIcon
                              })
                          })
                      ]
                  }),
                  (0, i.jsx)(a.Text, {
                      color: 'text-muted',
                      className: m.hidePermanently,
                      variant: 'text-sm/normal',
                      children: (0, i.jsx)(a.Clickable, {
                          onClick: _,
                          children: u.intl.string(u.t.efSkDg)
                      })
                  })
              ]
          })
        : null;
};
