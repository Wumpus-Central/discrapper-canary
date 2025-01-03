n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(570140),
    a = n(71509);
function s() {
    (0, r.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e('52030'), n.e('11260'), n.e('86333')]).then(n.bind(n, 266653));
            return (t) => (0, i.jsx)(e, { ...t });
        },
        {
            onCloseCallback: () => {
                l.Z.dispatch({ type: 'CLEAR_AUTHENTICATION_ERRORS' }),
                    l.Z.dispatch({
                        type: 'LOGIN_RESET',
                        isMultiAccount: !0
                    });
            },
            modalKey: a.Ui
        }
    );
}
