"use strict";
n.d(t, { A: () => c });
var i = n(627968),
    r = n(192308),
    s = n(531685),
    a = n(723702),
    o = n(19575),
    l = n(267102),
    u = n(652215);
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.BRT.APP,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        c = e ?? (0, l.zd)();
    if (c !== u.BRT.APP && null != c) {
        if (s.A.isFocused()) return;
        t
            ? a.isPlatformEmbedded
                ? o.Ay.focus()
                : window.focus()
            : (function () {
                  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.BRT.POPOUT;
                  e !== u.BRT.APP &&
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
