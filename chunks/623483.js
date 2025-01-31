e.d(t, { Z: () => s });
var i = e(200651);
e(192379);
var l = e(481060),
    a = e(117984),
    r = e(388032);
function s(n) {
    return (0, i.jsx)(l.sNh, {
        id: 'delete-channel',
        label: r.intl.string(r.t.Jg0R7e),
        subtext: r.intl.string(r.t['+mNKMz']),
        color: 'danger',
        action: () =>
            (0, l.ZDy)(async () => {
                let { default: t } = await e.e('37720').then(e.bind(e, 357632));
                return (e) =>
                    (0, i.jsx)(t, {
                        ...e,
                        onConfirm: () => {
                            e.onClose(), (0, a.xh)(n.id);
                        },
                        channel: n
                    });
            })
    });
}
