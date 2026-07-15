"use strict";
n.d(t, { A: () => c });
var i = n(627968),
    r = n(192308),
    a = n(531685),
    s = n(723702),
    l = n(19575),
    o = n(267102),
    d = n(652215);
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.BRT.APP,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        c = e ?? (0, o.zd)();
    if (c !== d.BRT.APP && null != c) {
        if (a.A.isFocused()) return;
        t
            ? s.isPlatformEmbedded
                ? l.Ay.focus()
                : window.focus()
            : (function () {
                  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.BRT.POPOUT;
                  e !== d.BRT.APP &&
                      (0, r.openModalLazy)(
                          async () => {
                              let { default: t } = await n.e("20570").then(n.bind(n, 368033));
                              return (n) => (0, i.jsx)(t, { ...n, contextKey: e });
                          },
                          { contextKey: (0, r.modalContextFromAppContext)(e) },
                      );
              })(e);
    }
}
