n.d(t, { Ay: () => r, sy: () => a });
var i = n(627968);
n(64700);
var s = n(192308),
    l = n(652215);
function a() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return new Promise((t) => {
        (0, s.openModalLazy)(
            async () => {
                let { default: t } = await n.e("28429").then(n.bind(n, 549404));
                return (n) => (0, i.jsx)(t, { ...n, isTotp: e });
            },
            { onCloseCallback: t, onCloseRequest: l.FXj },
        );
    });
}
let r = {
    enableMFA: async function () {
        await new Promise((e) => {
            (0, s.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("66535"), n.e("78811")]).then(n.bind(n, 333737));
                return (n) => (0, i.jsx)(t, { ...n, handleEnableMFASuccess: e });
            });
        }),
            await a();
    },
};
