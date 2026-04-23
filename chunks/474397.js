n.d(t, { A: () => d });
var i = n(627968),
    l = n(192308),
    s = n(531685),
    a = n(723702),
    r = n(19575),
    o = n(267102),
    c = n(652215);
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
