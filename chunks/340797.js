n.d(t, { Z: () => c });
var a = n(200651);
n(192379);
var o = n(481060),
    i = n(946273),
    r = n(441110),
    s = n(388032),
    l = n(387405);
function c(e) {
    let { guild: t, message: n } = e;
    return (0, i.vV)(t.id, n.author.id)
        ? (0, a.jsx)(o.yRy, {
              animation: o.yRy.Animation.TRANSLATE,
              align: 'center',
              autoInvert: !0,
              nudgeAlignIntoViewport: !0,
              position: 'right',
              renderPopout: (e) => {
                  let { closePopout: o } = e;
                  return (0, a.jsx)(r.Z, {
                      guild: t,
                      message: n,
                      onClose: o
                  });
              },
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, a.jsx)(o.P3F, {
                      onClick: t,
                      tag: 'span',
                      children: (0, a.jsx)(o.ua7, {
                          text: s.intl.string(s.t['v/OYd3']),
                          children: (e) =>
                              (0, a.jsx)('div', {
                                  className: l.newMemberBadge,
                                  ...e,
                                  children: (0, a.jsx)(o.hg2, {
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
