n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(481060),
    s = n(320161),
    o = n(572004),
    d = n(51144),
    c = n(785717),
    u = n(475413),
    h = n(388032),
    m = n(254924);
function p(e) {
    let { user: t, isHovering: n } = e,
        { trackUserProfileAction: l } = (0, c.KZ)();
    return o.wS
        ? (0, i.jsx)(s.Z, {
              text: h.intl.string(h.t.y5MwJy),
              delay: 0,
              'aria-label': !1,
              copyValue: d.ZP.getUserTag(t, {
                  decoration: 'never',
                  identifiable: 'always'
              }),
              onCopy: () => l({ action: 'COPY_USERNAME' }),
              children: (e) =>
                  (0, i.jsx)(u.kF, {
                      ...e,
                      className: r()(m.hover, { [m.visible]: n }),
                      innerClassName: m.hover,
                      look: a.zxk.Looks.BLANK,
                      size: a.zxk.Sizes.NONE,
                      color: m.hoverColor,
                      themeColor: 'none',
                      grow: !1,
                      'aria-label': h.intl.string(h.t.y5MwJy),
                      children: (0, i.jsx)(a.TIy, {
                          size: 'xs',
                          color: 'currentColor'
                      })
                  })
          })
        : null;
}
