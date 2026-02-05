"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(397927),
    a = n(531685),
    s = n(723702),
    o = n(837921),
    l = n(267102),
    u = n(652215);
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.BRT.POPOUT;
    e !== u.BRT.APP &&
        (0, i.mMO)(
            async () => {
                let { default: t } = await n.e("20570").then(n.bind(n, 368033));
                return (n) => (0, r.jsx)(t, { ...n, contextKey: e });
            },
            { contextKey: (0, i.TId)(e) },
        );
}
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.BRT.APP,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e ?? (0, l.zd)();
    if (n !== u.BRT.APP && null != n) {
        if (a.A.isFocused()) return;
        t ? (s.isPlatformEmbedded ? o.Ay.focus() : window.focus()) : c(e);
    }
}
