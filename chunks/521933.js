n.d(t, { A: () => r });
var i = n(627968);
n(64700);
var s = n(192308),
    l = n(204925),
    a = n(818348);
let r = {
    openNewUserAgeGateModal: (e) => {
        (0, s.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("1143"), n.e("20969")]).then(n.bind(n, 284778));
                return (t) => (0, i.jsx)(e, { ...t });
            },
            { modalKey: l.jc, onCloseRequest: a.tE, onCloseCallback: e },
        );
    },
    openClaimAccountModal: function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 ? arguments[1] : void 0;
        (0, s.openModalLazy)(
            async () => {
                let { default: t } = await Promise.all([n.e("78925"), n.e("5291")]).then(n.bind(n, 888363));
                return (n) => (0, i.jsx)(t, { claimRequired: e, ...n });
            },
            { onCloseRequest: e ? a.tE : null, onCloseCallback: t },
        );
    },
};
