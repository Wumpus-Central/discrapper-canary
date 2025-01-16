n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(388032),
    a = n(873970);
function o(e) {
    let { message: t } = e;
    return (0, i.jsxs)(r.Clickable, {
        onClick: () => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await n.e('14021').then(n.bind(n, 910673));
                return (n) =>
                    (0, i.jsx)(e, {
                        channelId: t.channel_id,
                        messageId: t.id,
                        ...n
                    });
            });
        },
        className: a.accessory,
        children: [
            (0, i.jsx)(r.CircleInformationIcon, {
                size: 'xs',
                color: 'currentColor'
            }),
            (0, i.jsx)(r.Text, {
                variant: 'text-xs/normal',
                className: a.accessoryText,
                children: l.intl.string(l.t['2aXnfX'])
            })
        ]
    });
}
