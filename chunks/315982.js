"use strict";
n.d(t, { R: () => o, v: () => l });
var i = n(477900);
n(582128);
var r = n(192308),
    a = n(204925),
    s = n(818348);
function l(e) {
    (0, r.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("376991"),
                n.e("545224"),
                n.e("428367"),
                n.e("264236"),
                n.e("776750"),
                n.e("220287"),
                n.e("682758"),
                n.e("319623"),
                n.e("280022"),
                n.e("401143"),
            ]).then(n.bind(n, 284778));
            return (t) => (0, i.jsx)(e, { ...t });
        },
        { modalKey: a.jc, onCloseRequest: s.tE, onCloseCallback: e },
    );
}
function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, r.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([
                n.e("896162"),
                n.e("213042"),
                n.e("188941"),
                n.e("349619"),
                n.e("627323"),
                n.e("319623"),
                n.e("121007"),
            ]).then(n.bind(n, 888363));
            return (n) => (0, i.jsx)(t, { claimRequired: e, ...n });
        },
        { onCloseRequest: e ? s.tE : null, onCloseCallback: t },
    );
}
