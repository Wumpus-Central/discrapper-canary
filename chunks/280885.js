n.d(t, { Z: () => _ });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(40966),
    c = n(580552),
    u = n(249458),
    d = n(240991),
    f = n(73433);
function _(e) {
    let { userBio: t, className: n, animateOnHover: o = !1, isHovering: _ = !1, lineClamp: p = 6, setLineClamp: h = !0, textColor: m, userId: g } = e,
        E = i.useMemo(() => ((0, c.Z)(g) ? (0, r.jsx)(l.Z, {}) : null == t || '' === t ? null : (0, d.parseBioReact)(t)), [g, t]);
    return null == E
        ? null
        : (0, r.jsx)('div', {
              className: a()(n, f.markup),
              children: (0, r.jsx)(s.Text, {
                  variant: 'text-sm/normal',
                  lineClamp: h ? p : void 0,
                  color: void 0 !== m ? m : void 0,
                  children: (0, r.jsx)(u.G.Provider, {
                      value: {
                          disableAnimations: o && !_,
                          disableInteractions: !1
                      },
                      children: E
                  })
              })
          });
}
