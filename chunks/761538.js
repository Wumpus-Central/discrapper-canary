n.d(t, { Z: () => s });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(388032),
    r = n(456574);
function s(e) {
    let { message: t } = e;
    return (0, i.jsxs)(l.P3F, {
        onClick: () => {
            (0, l.ZDy)(async () => {
                let { default: e } = await n.e('14021').then(n.bind(n, 910673));
                return (n) =>
                    (0, i.jsx)(e, {
                        channelId: t.channel_id,
                        messageId: t.id,
                        ...n
                    });
            });
        },
        className: r.accessory,
        children: [
            (0, i.jsx)(l.d3s, {
                size: 'xs',
                color: 'currentColor'
            }),
            (0, i.jsx)(l.Text, {
                variant: 'text-xs/normal',
                className: r.accessoryText,
                children: a.intl.string(a.t['2aXnfX'])
            })
        ]
    });
}
