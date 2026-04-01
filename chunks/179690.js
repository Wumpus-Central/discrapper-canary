n.d(e, { Ay: () => l, sy: () => r });
var s = n(627968);
n(64700);
var i = n(397927),
    a = n(652215);
function r() {
    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return new Promise((e) => {
        (0, i.mMO)(
            async () => {
                let { default: e } = await n.e("28429").then(n.bind(n, 549404));
                return (n) => (0, s.jsx)(e, { ...n, isTotp: t });
            },
            { onCloseCallback: e, onCloseRequest: a.FXj },
        );
    });
}
let l = {
    enableMFA: async function () {
        await new Promise((t) => {
            (0, i.mMO)(async () => {
                let { default: e } = await Promise.all([n.e("8407"), n.e("78811")]).then(n.bind(n, 333737));
                return (n) => (0, s.jsx)(e, { ...n, handleEnableMFASuccess: t });
            });
        }),
            await r();
    },
};
