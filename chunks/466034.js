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
                    n.e("644565"),
                    n.e("503376"),
                    n.e("87641"),
                    n.e("676237"),
                    n.e("428429"),
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
                    n.e("262546"),
                    n.e("679928"),
                    n.e("595429"),
                    n.e("154657"),
                    n.e("748370"),
                    n.e("524084"),
                    n.e("676237"),
                    n.e("158994"),
                ]).then(n.bind(n, 333737));
                return (n) => (0, t.jsx)(a, { ...n, handleEnableMFASuccess: e });
            });
        }),
            await i();
    },
};
