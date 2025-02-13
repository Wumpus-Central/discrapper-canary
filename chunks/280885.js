n.d(t, { Z: () => _ });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(40966),
    u = n(580552),
    c = n(249458),
    d = n(240991),
    f = n(663362);
function _(e) {
    let { userBio: t, className: n, animateOnHover: a = !1, isHovering: _ = !1, lineClamp: p = 6, setLineClamp: h = !0, textColor: m, userId: g } = e,
        E = r.useMemo(() => ((0, u.Z)(g) ? (0, i.jsx)(l.Z, {}) : null == t || '' === t ? null : (0, d.parseBioReact)(t)), [g, t]);
    return null == E
        ? null
        : (0, i.jsx)('div', {
              className: s()(n, f.markup),
              children: (0, i.jsx)(o.Text, {
                  variant: 'text-sm/normal',
                  lineClamp: h ? p : void 0,
                  color: void 0 !== m ? m : void 0,
                  children: (0, i.jsx)(c.G.Provider, {
                      value: {
                          disableAnimations: a && !_,
                          disableInteractions: !1
                      },
                      children: E
                  })
              })
          });
}
