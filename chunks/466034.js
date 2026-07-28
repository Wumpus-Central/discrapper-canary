n.d(a, { Ay: () => o, sy: () => i });
var t = n(477900);
n(582128);
var s = n(192308),
    l = n(652215);
function i() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return new Promise((a) => {
        (0, s.openModalLazy)(
            async () => {
                let { default: a } = await Promise.all([
                    n.e("73558"),
                    n.e("3376"),
                    n.e("87641"),
                    n.e("76237"),
                    n.e("28429"),
                ]).then(n.bind(n, 549404));
                return (n) => (0, t.jsx)(a, { ...n, isTotp: e });
            },
            { onCloseCallback: a, onCloseRequest: l.FXj },
        );
    });
}
let o = {
    enableMFA: async function () {
        await new Promise((e) => {
            (0, s.openModalLazy)(async () => {
                let { default: a } = await Promise.all([
                    n.e("97509"),
                    n.e("24673"),
                    n.e("95429"),
                    n.e("39713"),
                    n.e("48370"),
                    n.e("24084"),
                    n.e("76237"),
                    n.e("58994"),
                ]).then(n.bind(n, 333737));
                return (n) => (0, t.jsx)(a, { ...n, handleEnableMFASuccess: e });
            });
        }),
            await i();
    },
};
