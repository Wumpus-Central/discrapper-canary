n.d(t, { Z: () => _ });
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
    s = n(528963),
    o = n(143740),
    c = n(528144),
    d = n(212342),
    u = n(388032),
    m = n(450690);
let _ = (e) => {
    let { channelId: t, messageId: n } = e,
        _ = (0, a.e7)([d.Z], () => d.Z.shouldShowBump(n), [n]),
        h = l.useCallback(() => {
            s.Z.dismissPublishBump(n), (0, o.Z)(t, n);
        }, [t, n]),
        p = l.useCallback(() => {
            s.Z.dismissPublishBump(n);
        }, [n]),
        g = l.useCallback(() => {
            s.Z.permanentlyHidePublishBump(t);
        }, [t]);
    return _
        ? (0, i.jsxs)('div', {
              className: m.container,
              children: [
                  (0, i.jsxs)('div', {
                      className: m.bumpBox,
                      children: [
                          (0, i.jsx)(r.MqZ, {
                              size: 'xs',
                              color: 'currentColor',
                              className: m.icon
                          }),
                          (0, i.jsx)(c.Z, {
                              className: m.tagline,
                              size: c.Z.Sizes.SIZE_14,
                              children: u.intl.string(u.t.hasZoa)
                          }),
                          (0, i.jsx)(r.zxk, {
                              color: r.zxk.Colors.LINK,
                              look: r.zxk.Looks.LINK,
                              size: r.zxk.Sizes.MIN,
                              className: m.publish,
                              onClick: h,
                              children: u.intl.string(u.t['MFGE5+'])
                          }),
                          (0, i.jsx)(r.P3F, {
                              onClick: p,
                              children: (0, i.jsx)(r.k$p, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: m.closeIcon
                              })
                          })
                      ]
                  }),
                  (0, i.jsx)(r.Text, {
                      color: 'text-muted',
                      className: m.hidePermanently,
                      variant: 'text-sm/normal',
                      children: (0, i.jsx)(r.P3F, {
                          onClick: g,
                          children: u.intl.string(u.t.efSkDg)
                      })
                  })
              ]
          })
        : null;
};
