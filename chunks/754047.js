r.d(t, { Z: () => l }), r(47120);
var n = r(192379),
    i = r(493773),
    o = r(228168);
function l(e) {
    let { shouldShowPopoutOnHover: t, handlePreload: r } = e,
        [l, a] = n.useState(!1),
        c = n.useRef(void 0),
        s = n.useRef(void 0),
        u = n.useRef(void 0);
    (0, i.zq)(() => () => {
        clearTimeout(c.current), clearTimeout(s.current), clearTimeout(u.current);
    });
    let m = n.useRef(!1);
    return t
        ? {
              showPopoutFromHover: l,
              handleMouseEnter: () => {
                  (m.current = !0),
                      (c.current = setTimeout(() => {
                          m.current && r();
                      }, o.a6)),
                      (s.current = setTimeout(() => {
                          m.current && a(!0);
                      }, o.JX));
              },
              handleMouseLeave: () => {
                  (m.current = !1),
                      (u.current = setTimeout(() => {
                          m.current || a(!1);
                      }, o.Ig));
              }
          }
        : {};
}
