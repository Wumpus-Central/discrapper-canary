t.d(n, { r: () => c }), t(49124);
var r = t(255367);
t(73800);
var l = t(481060),
    i = t(823379),
    u = t(312539);
function c(e) {
    let { type: n, value: t, children: c } = e;
    switch (n) {
        case 'normal':
            return (0, r.jsx)(l.eee, {
                href: t.url,
                title: t.title,
                children: c
            });
        case 'mention':
            switch (t.type) {
                case 'channel':
                case 'message':
                    let {
                        value: { guild_id: o, channel_id: a, message_id: d }
                    } = t;
                    return (0, r.jsx)(u.d, {
                        channelId: a,
                        guildId: o,
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
