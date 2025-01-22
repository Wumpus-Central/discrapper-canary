r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(481060),
    u = r(40966),
    c = r(580552),
    d = r(249458),
    f = r(240991),
    p = r(665162);
function h(e) {
    let { userBio: n, className: r, animateOnHover: o = !1, isHovering: h = !1, lineClamp: _ = 6, setLineClamp: m = !0, textColor: g, userId: E } = e,
        v = a.useMemo(() => ((0, c.Z)(E) ? (0, i.jsx)(u.Z, {}) : null == n || '' === n ? null : (0, f.parseBioReact)(n)), [E, n]);
    return null == v
        ? null
        : (0, i.jsx)('div', {
              className: s()(r, p.markup),
              children: (0, i.jsx)(l.Text, {
                  variant: 'text-sm/normal',
                  lineClamp: m ? _ : void 0,
                  color: void 0 !== g ? g : void 0,
                  children: (0, i.jsx)(d.G.Provider, {
                      value: {
                          disableAnimations: o && !h,
                          disableInteractions: !1
                      },
                      children: v
                  })
              })
          });
}
