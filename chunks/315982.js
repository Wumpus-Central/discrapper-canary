"use strict";
n.d(t, { R: () => l, v: () => o });
var r = n(627968);
n(64700);
var i = n(192308),
    s = n(204925),
    a = n(818348);
function o(e) {
    (0, i.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e("28367"), n.e("1143"), n.e("30943")]).then(n.bind(n, 284778));
            return (t) => (0, r.jsx)(e, { ...t });
        },
        { modalKey: s.jc, onCloseRequest: a.tE, onCloseCallback: e },
    );
}
function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, i.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("78925"), n.e("27672")]).then(n.bind(n, 888363));
            return (n) => (0, r.jsx)(t, { claimRequired: e, ...n });
        },
        { onCloseRequest: e ? a.tE : null, onCloseCallback: t },
    );
}
