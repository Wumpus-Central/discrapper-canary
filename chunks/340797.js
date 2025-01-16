r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    s = r(946273),
    o = r(441110),
    l = r(388032),
    u = r(673094);
function c(e) {
    let { guild: n, message: r } = e;
    return (0, s.vV)(n.id, r.author.id)
        ? (0, i.jsx)(a.Popout, {
              animation: a.Popout.Animation.TRANSLATE,
              align: 'center',
              autoInvert: !0,
              nudgeAlignIntoViewport: !0,
              position: 'right',
              renderPopout: (e) => {
                  let { closePopout: a } = e;
                  return (0, i.jsx)(o.Z, {
                      guild: n,
                      message: r,
                      onClose: a
                  });
              },
              children: (e) => {
                  let { onClick: n } = e;
                  return (0, i.jsx)(a.Clickable, {
                      onClick: n,
                      tag: 'span',
                      children: (0, i.jsx)(a.Tooltip, {
                          text: l.intl.string(l.t['v/OYd3']),
                          children: (e) =>
                              (0, i.jsx)('div', {
                                  className: u.newMemberBadge,
                                  ...e,
                                  children: (0, i.jsx)(a.NewUserIcon, {
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
