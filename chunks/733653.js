t.d(n, { r: () => u }), t(49124);
var r = t(255367);
t(73800);
var l = t(481060),
    i = t(823379),
    o = t(312539);
function u(e) {
    let { type: n, value: t, children: u } = e;
    switch (n) {
        case 'normal':
            return (0, r.jsx)(l.eee, {
                href: t.url,
                title: t.title,
                children: u
            });
        case 'mention':
            switch (t.type) {
                case 'channel':
                case 'message':
                    let {
                        value: { guild_id: c, channel_id: a, message_id: d }
                    } = t;
                    return (0, r.jsx)(o.d, {
                        channelId: a,
                        guildId: c,
                        messageId: d
                    });
                case 'attachment':
                    return JSON.stringify(t.value);
            }
            break;
        default:
            (0, i.vE)(n);
    }
}
