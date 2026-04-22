l.d(t, { A: () => d });
var n = l(627968),
    i = l(192308),
    s = l(531685),
    a = l(723702),
    r = l(837921),
    o = l(267102),
    c = l(652215);
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.BRT.APP,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        d = e ?? (0, o.zd)();
    if (d !== c.BRT.APP && null != d) {
        if (s.A.isFocused()) return;
        t
            ? a.isPlatformEmbedded
                ? r.Ay.focus()
                : window.focus()
            : (function () {
                  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.BRT.POPOUT;
                  e !== c.BRT.APP &&
                      (0, i.openModalLazy)(
                          async () => {
                              let { default: t } = await l.e("20570").then(l.bind(l, 368033));
                              return (l) => (0, n.jsx)(t, { ...l, contextKey: e });
                          },
                          { contextKey: (0, i.modalContextFromAppContext)(e) },
                      );
              })(e);
    }
}
