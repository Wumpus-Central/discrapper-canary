t.d(e, {
    Z: function () {
        return u;
    }
});
var i = t(200651);
t(192379);
var r = t(481060),
    l = t(117984),
    a = t(388032);
function u(n) {
    return (0, i.jsx)(r.MenuItem, {
        id: 'delete-channel',
        label: a.intl.string(a.t.Jg0R7e),
        subtext: a.intl.string(a.t['+mNKMz']),
        color: 'danger',
        action: () =>
            (0, r.openModalLazy)(async () => {
                let { default: e } = await t.e('37720').then(t.bind(t, 357632));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        onConfirm: () => {
                            t.onClose(), (0, l.xh)(n.id);
                        },
                        channel: n
                    });
            })
    });
}
