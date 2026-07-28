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
                n.e("67304"),
                n.e("11441"),
                n.e("28367"),
                n.e("20287"),
                n.e("82758"),
                n.e("19623"),
                n.e("80022"),
                n.e("1143"),
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
            let { default: t } = await Promise.all([n.e("69757"), n.e("27323"), n.e("19623"), n.e("21007")]).then(
                n.bind(n, 888363),
            );
            return (n) => (0, i.jsx)(t, { claimRequired: e, ...n });
        },
        { onCloseRequest: e ? s.tE : null, onCloseCallback: t },
    );
}
