n.d(t, { Z: () => m });
var r = n(200651),
    i = n(192379),
    a = n(442837),
    o = n(481060),
    l = n(528963),
    s = n(143740),
    c = n(528144),
    d = n(212342),
    u = n(388032),
    p = n(701989);
let m = (e) => {
    let { channelId: t, messageId: n } = e,
        m = (0, a.e7)([d.Z], () => d.Z.shouldShowBump(n), [n]),
        f = i.useCallback(() => {
            l.Z.dismissPublishBump(n), (0, s.Z)(t, n);
        }, [t, n]),
        h = i.useCallback(() => {
            l.Z.dismissPublishBump(n);
        }, [n]),
        g = i.useCallback(() => {
            l.Z.permanentlyHidePublishBump(t);
        }, [t]);
    return m
        ? (0, r.jsxs)('div', {
              className: p.container,
              children: [
                  (0, r.jsxs)('div', {
                      className: p.bumpBox,
                      children: [
                          (0, r.jsx)(o.MqZ, {
                              size: 'xs',
                              color: 'currentColor',
                              className: p.icon
                          }),
                          (0, r.jsx)(c.Z, {
                              className: p.tagline,
                              size: c.Z.Sizes.SIZE_14,
                              children: u.NW.string(u.t.hasZoa)
                          }),
                          (0, r.jsx)(o.zxk, {
                              color: o.zxk.Colors.LINK,
                              look: o.zxk.Looks.LINK,
                              size: o.zxk.Sizes.MIN,
                              className: p.publish,
                              onClick: f,
                              children: u.NW.string(u.t['MFGE5+'])
                          }),
                          (0, r.jsx)(o.P3F, {
                              onClick: h,
                              children: (0, r.jsx)(o.k$p, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: p.closeIcon
                              })
                          })
                      ]
                  }),
                  (0, r.jsx)(o.Text, {
                      color: 'text-muted',
                      className: p.hidePermanently,
                      variant: 'text-sm/normal',
                      children: (0, r.jsx)(o.P3F, {
                          onClick: g,
                          children: u.NW.string(u.t.efSkDg)
                      })
                  })
              ]
          })
        : null;
};
