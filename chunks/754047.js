n.d(t, { Z: () => l }), n(47120);
var r = n(192379),
    o = n(493773),
    i = n(228168);
function l(e) {
    let { shouldShowPopoutOnHover: t, handlePreload: n } = e,
        [l, a] = r.useState(!1),
        c = r.useRef(!1),
        s = r.useRef(void 0),
        u = r.useRef(void 0),
        m = r.useRef(void 0);
    return ((0, o.zq)(() => {
        clearTimeout(s.current), clearTimeout(u.current), clearTimeout(m.current);
    }),
    t)
        ? {
              showPopoutFromHover: l,
              onRequestClose: () => {
                  a(!1);
              },
              onMouseEnter: () => {
                  let e;
                  (c.current = !0),
                      (s.current = setTimeout(() => {
                          c.current && (e = n());
                      }, i.a6)),
                      (u.current = setTimeout(async () => {
                          c.current && (null != e && (await e), a(!0));
                      }, i.JX));
              },
              onMouseLeave: () => {
                  (c.current = !1),
                      (m.current = setTimeout(() => {
                          c.current || a(!1);
                      }, i.Ig));
              }
          }
        : {
              showPopoutFromHover: !1,
              onRequestClose: void 0,
              onMouseEnter: void 0,
              onMouseLeave: void 0
          };
}
