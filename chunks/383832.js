n.d(t, { Z: () => s });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(570140),
    a = n(71509);
function s() {
    (0, l.ZDy)(
        async () => {
            let { default: e } = await Promise.all([n.e('52030'), n.e('85325'), n.e('59769')]).then(n.bind(n, 266653));
            return (t) => (0, i.jsx)(e, { ...t });
        },
        {
            onCloseCallback: () => {
                r.Z.dispatch({
                    type: 'LOGIN_RESET',
                    isMultiAccount: !0
                });
            },
            modalKey: a.Ui
        }
    );
}
