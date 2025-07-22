n.d(t, { Z: () => f });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(40966),
    c = n(580552),
    u = n(249458),
    d = n(240991),
    _ = n(73433);
function f(e) {
    let { userBio: t, className: n, animateOnHover: a = !1, isHovering: f = !1, lineClamp: p = 6, setLineClamp: h = !0, textColor: m, userId: g } = e,
        E = i.useMemo(() => ((0, c.Z)(g) ? (0, r.jsx)(l.Z, {}) : null == t || '' === t ? null : (0, d.parseBioReact)(t)), [g, t]);
    return null == E
        ? null
        : (0, r.jsx)('div', {
              className: o()(n, _.markup),
              children: (0, r.jsx)(s.Text, {
                  variant: 'text-sm/normal',
                  lineClamp: h ? p : void 0,
                  color: void 0 !== m ? m : void 0,
                  children: (0, r.jsx)(u.G.Provider, {
                      value: {
                          disableAnimations: a && !f,
                          disableInteractions: !1
                      },
                      children: E
                  })
              })
          });
}
