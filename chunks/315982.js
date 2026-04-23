n.d(t, { R: () => l, v: () => _ });
var i = n(627968);
n(64700);
var r = n(192308),
    a = n(204925),
    s = n(818348);
function _(e) {
    (0, r.openModalLazy)(
        async () => {
            let { default: e } = await n.e("1143").then(n.bind(n, 284778));
            return (t) => (0, i.jsx)(e, { ...t });
        },
        { modalKey: a.jc, onCloseRequest: s.tE, onCloseCallback: e },
    );
}
function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, r.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("78925"), n.e("27672")]).then(n.bind(n, 888363));
            return (n) => (0, i.jsx)(t, { claimRequired: e, ...n });
        },
        { onCloseRequest: e ? s.tE : null, onCloseCallback: t },
    );
}
