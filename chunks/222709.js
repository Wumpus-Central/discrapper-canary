n.d(t, { Z: () => m });
var r = n(200651),
    i = n(192379),
    a = n(442837),
    l = n(481060),
    o = n(528963),
    s = n(143740),
    c = n(528144),
    u = n(212342),
    d = n(388032),
    p = n(745641);
let m = (e) => {
    let { channelId: t, messageId: n } = e,
        m = (0, a.e7)([u.Z], () => u.Z.shouldShowBump(n), [n]),
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
                          (0, r.jsx)(l.MqZ, {
                              size: 'xs',
                              color: 'currentColor',
                              className: p.icon
                          }),
                          (0, r.jsx)(c.Z, {
                              className: p.tagline,
                              size: c.Z.Sizes.SIZE_14,
                              children: d.NW.string(d.t.hasZoa)
                          }),
                          (0, r.jsx)(l.zxk, {
                              color: l.zxk.Colors.LINK,
                              look: l.zxk.Looks.LINK,
                              size: l.zxk.Sizes.MIN,
                              className: p.publish,
                              onClick: f,
                              children: d.NW.string(d.t['MFGE5+'])
                          }),
                          (0, r.jsx)(l.P3F, {
                              onClick: h,
                              children: (0, r.jsx)(l.k$p, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: p.closeIcon
                              })
                          })
                      ]
                  }),
                  (0, r.jsx)(l.Text, {
                      color: 'text-muted',
                      className: p.hidePermanently,
                      variant: 'text-sm/normal',
                      children: (0, r.jsx)(l.P3F, {
                          onClick: g,
                          children: d.NW.string(d.t.efSkDg)
                      })
                  })
              ]
          })
        : null;
};
