n.d(t, { A: () => c });
var i = n(627968),
    l = n(192308),
    s = n(531685),
    a = n(723702),
    r = n(837921),
    o = n(267102),
    d = n(652215);
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.BRT.APP,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        c = e ?? (0, o.zd)();
    if (c !== d.BRT.APP && null != c) {
        if (s.A.isFocused()) return;
        t
            ? a.isPlatformEmbedded
                ? r.Ay.focus()
                : window.focus()
            : (function () {
                  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.BRT.POPOUT;
                  e !== d.BRT.APP &&
                      (0, l.openModalLazy)(
                          async () => {
                              let { default: t } = await n.e("20570").then(n.bind(n, 368033));
                              return (n) => (0, i.jsx)(t, { ...n, contextKey: e });
                          },
                          { contextKey: (0, l.modalContextFromAppContext)(e) },
                      );
              })(e);
    }
}
