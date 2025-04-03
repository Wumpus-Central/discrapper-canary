n.d(t, { Z: () => s }), n(47120);
var r = n(192379),
    l = n(481060),
    o = n(493773),
    i = n(81897),
    a = n(228168);
function s(e) {
    let { shouldShowPopoutOnHover: t, handlePreload: n } = e,
        [s, c] = r.useState(!1),
        u = r.useRef(!1),
        d = (0, i.Z)(),
        m = r.useRef(void 0),
        p = r.useRef(void 0),
        f = r.useRef(void 0);
    return ((0, o.zq)(() => {
        clearTimeout(m.current), clearTimeout(p.current), clearTimeout(f.current);
    }),
    t)
        ? {
              showPopoutFromHover: s,
              onRequestClose: () => {
                  c(!1);
              },
              onMouseEnter: () => {
                  let e;
                  (u.current = !0),
                      (m.current = setTimeout(() => {
                          u.current && (e = n(d));
                      }, a.a6)),
                      (p.current = setTimeout(async () => {
                          !(0, l.$sL)() && u.current && (null != e && (await e), c(!0));
                      }, a.JX));
              },
              onMouseLeave: () => {
                  (u.current = !1),
                      (f.current = setTimeout(() => {
                          u.current || c(!1);
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
