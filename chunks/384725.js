t.d(i, { Z: () => s });
var n = t(200651);
t(192379);
var a = t(481060),
    l = t(570140);
let s = {
    open(e) {
        l.Z.dispatch({
            type: 'SAFETY_HUB_APPEAL_OPEN',
            classificationId: e
        }),
            (0, a.ZDy)(async () => {
                let { default: i } = await t.e('65652').then(t.bind(t, 208265));
                return (t) =>
                    (0, n.jsx)(i, {
                        classificationId: e,
                        ...t
                    });
            });
    },
    close() {
        l.Z.dispatch({ type: 'SAFETY_HUB_APPEAL_CLOSE' });
    }
};
