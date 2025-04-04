n.d(t, { Z: () => c }), n(47120);
var r = n(192379),
    o = n(481060),
    l = n(493773),
    i = n(81897),
    a = n(228168);
function c(e) {
    let { shouldShowPopoutOnHover: t, handlePreload: n } = e,
        [c, s] = r.useState(!1),
        u = r.useRef(!1),
        m = (0, i.Z)(),
        p = r.useRef(void 0),
        d = r.useRef(void 0),
        f = r.useRef(void 0);
    return ((0, l.zq)(() => {
        clearTimeout(p.current), clearTimeout(d.current), clearTimeout(f.current);
    }),
    t)
        ? {
              showPopoutFromHover: c,
              onRequestClose: () => {
                  s(!1);
              },
              onMouseEnter: () => {
                  let e;
                  (u.current = !0),
                      (p.current = setTimeout(() => {
                          u.current && (e = n(m));
                      }, a.a6)),
                      (d.current = setTimeout(async () => {
                          !(0, o.$sL)() && u.current && (null != e && (await e), s(!0));
                      }, a.JX));
              },
              onMouseLeave: () => {
                  (u.current = !1),
                      (f.current = setTimeout(() => {
                          u.current || s(!1);
                      }, a.Ig));
              }
          }
        : {
              showPopoutFromHover: !1,
              onRequestClose: void 0,
              onMouseEnter: void 0,
              onMouseLeave: void 0
          };
}
