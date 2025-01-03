n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(481060),
    s = n(320161),
    o = n(572004),
    c = n(51144),
    d = n(785717),
    u = n(475413),
    h = n(388032),
    m = n(286416);
function p(e) {
    let { user: t, isHovering: n } = e,
        { trackUserProfileAction: r } = (0, d.KZ)();
    return o.wS
        ? (0, i.jsx)(s.Z, {
              text: h.intl.string(h.t.y5MwJy),
              delay: 0,
              'aria-label': !1,
              copyValue: c.ZP.getUserTag(t, {
                  decoration: 'never',
                  identifiable: 'always'
              }),
              onCopy: () => r({ action: 'COPY_USERNAME' }),
              children: (e) =>
                  (0, i.jsx)(u.kF, {
                      ...e,
                      className: l()(m.hover, { [m.visible]: n }),
                      innerClassName: m.hover,
                      look: a.Button.Looks.BLANK,
                      size: a.Button.Sizes.NONE,
                      color: m.hoverColor,
                      themeColor: 'none',
                      grow: !1,
                      'aria-label': h.intl.string(h.t.y5MwJy),
                      children: (0, i.jsx)(a.CopyIcon, {
                          size: 'xs',
                          color: 'currentColor'
                      })
                  })
          })
        : null;
}
