var i = t(200651);
t(192379);
var a = t(481060),
    l = t(570140);
n.Z = {
    open(e) {
        (0, a.openModalLazy)(
            async () => {
                l.Z.dispatch({ type: 'SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN' });
                let { default: e } = await t.e('82961').then(t.bind(t, 751744));
                return (n) => (0, i.jsx)(e, { ...n });
            },
            { onCloseCallback: e }
        );
    }
};
