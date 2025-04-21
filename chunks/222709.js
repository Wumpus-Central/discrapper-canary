n.d(t, { Z: () => m });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(528963),
    s = n(143740),
    c = n(528144),
    u = n(212342),
    d = n(388032),
    p = n(745641);
let m = (e) => {
    let { channelId: t, messageId: n } = e,
        m = (0, l.e7)([u.Z], () => u.Z.shouldShowBump(n), [n]),
        f = i.useCallback(() => {
            o.Z.dismissPublishBump(n), (0, s.Z)(t, n);
        }, [t, n]),
        h = i.useCallback(() => {
            o.Z.dismissPublishBump(n);
        }, [n]),
        g = i.useCallback(() => {
            o.Z.permanentlyHidePublishBump(t);
        }, [t]);
    return m
        ? (0, r.jsxs)('div', {
              className: p.container,
              children: [
                  (0, r.jsxs)('div', {
                      className: p.bumpBox,
                      children: [
                          (0, r.jsx)(a.MqZ, {
                              size: 'xs',
                              color: 'currentColor',
                              className: p.icon
                          }),
                          (0, r.jsx)(c.Z, {
                              className: p.tagline,
                              size: c.Z.Sizes.SIZE_14,
                              children: d.intl.string(d.t.hasZoa)
                          }),
                          (0, r.jsx)(a.zxk, {
                              color: a.zxk.Colors.LINK,
                              look: a.zxk.Looks.LINK,
                              size: a.zxk.Sizes.MIN,
                              className: p.publish,
                              onClick: f,
                              children: d.intl.string(d.t['MFGE5+'])
                          }),
                          (0, r.jsx)(a.P3F, {
                              onClick: h,
                              children: (0, r.jsx)(a.k$p, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: p.closeIcon
                              })
                          })
                      ]
                  }),
                  (0, r.jsx)(a.Text, {
                      color: 'text-muted',
                      className: p.hidePermanently,
                      variant: 'text-sm/normal',
                      children: (0, r.jsx)(a.P3F, {
                          onClick: g,
                          children: d.intl.string(d.t.efSkDg)
                      })
                  })
              ]
          })
        : null;
};
