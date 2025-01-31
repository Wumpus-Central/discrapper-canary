n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(946273),
    s = n(441110),
    o = n(388032),
    l = n(673094);
function u(e) {
    let { guild: t, message: n } = e;
    return (0, a.vV)(t.id, n.author.id)
        ? (0, i.jsx)(r.yRy, {
              animation: r.yRy.Animation.TRANSLATE,
              align: 'center',
              autoInvert: !0,
              nudgeAlignIntoViewport: !0,
              position: 'right',
              renderPopout: (e) => {
                  let { closePopout: r } = e;
                  return (0, i.jsx)(s.Z, {
                      guild: t,
                      message: n,
                      onClose: r
                  });
              },
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, i.jsx)(r.P3F, {
                      onClick: t,
                      tag: 'span',
                      children: (0, i.jsx)(r.ua7, {
                          text: o.intl.string(o.t['v/OYd3']),
                          children: (e) =>
                              (0, i.jsx)('div', {
                                  className: l.newMemberBadge,
                                  ...e,
                                  children: (0, i.jsx)(r.hg2, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 20,
                                      height: 20
                                  })
                              })
                      })
                  });
              }
          })
        : null;
}
