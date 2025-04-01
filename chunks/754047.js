n.d(t, { Z: () => a }), n(47120);
var r = n(192379),
    o = n(493773),
    i = n(81897),
    l = n(228168);
function a(e) {
    let { shouldShowPopoutOnHover: t, handlePreload: n } = e,
        [a, c] = r.useState(!1),
        s = r.useRef(!1),
        u = (0, i.Z)(),
        m = r.useRef(void 0),
        p = r.useRef(void 0),
        d = r.useRef(void 0);
    return ((0, o.zq)(() => {
        clearTimeout(m.current), clearTimeout(p.current), clearTimeout(d.current);
    }),
    t)
        ? {
              showPopoutFromHover: a,
              onRequestClose: () => {
                  c(!1);
              },
              onMouseEnter: () => {
                  let e;
                  (s.current = !0),
                      (m.current = setTimeout(() => {
                          s.current && (e = n(u));
                      }, l.a6)),
                      (p.current = setTimeout(async () => {
                          s.current && (null != e && (await e), c(!0));
                      }, l.JX));
              },
              onMouseLeave: () => {
                  (s.current = !1),
                      (d.current = setTimeout(() => {
                          s.current || c(!1);
                      }, l.Ig));
              }
          }
        : {
              showPopoutFromHover: !1,
              onRequestClose: void 0,
              onMouseEnter: void 0,
              onMouseLeave: void 0
          };
}
