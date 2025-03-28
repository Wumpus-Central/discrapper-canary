r.d(t, { Z: () => l }), r(47120);
var n = r(192379),
    o = r(493773),
    i = r(228168);
function l(e) {
    let { shouldShowPopoutOnHover: t, handlePreload: r } = e,
        [l, a] = n.useState(!1),
        c = n.useRef(!1),
        s = n.useRef(void 0),
        u = n.useRef(void 0),
        m = n.useRef(void 0);
    return ((0, o.zq)(() => {
        clearTimeout(s.current), clearTimeout(u.current), clearTimeout(m.current);
    }),
    t)
        ? {
              showPopoutFromHover: l,
              handleMouseEnter: () => {
                  (c.current = !0),
                      (s.current = setTimeout(() => {
                          c.current && r();
                      }, i.a6)),
                      (u.current = setTimeout(() => {
                          c.current && a(!0);
                      }, i.JX));
              },
              handleMouseLeave: () => {
                  (c.current = !1),
                      (m.current = setTimeout(() => {
                          c.current || a(!1);
                      }, i.Ig));
              }
          }
        : {
              showPopoutFromHover: !1,
              handleMouseEnter: void 0,
              handleMouseLeave: void 0
          };
}
