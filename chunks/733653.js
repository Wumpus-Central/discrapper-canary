(t.d(n, { r: () => c }), t(49124));
var r = t(255367);
t(73800);
var l = t(794295),
    i = t(823379),
    o = t(312539);
function c(e) {
    let { type: n, value: t, children: c } = e;
    switch (n) {
        case 'normal':
            return (0, r.jsx)(l.Z, {
                title: t.title,
                href: t.url,
                children: c
            });
        case 'mention':
            switch (t.type) {
                case 'channel':
                case 'message':
                    let {
                            value: { guild_id: u, channel_id: a }
                        } = t,
                        d = 'message_id' in t.value ? t.value.message_id : void 0;
                    return (0, r.jsx)(o.d, {
                        channelId: a,
                        guildId: u,
                        messageId: d
                    });
                case 'attachment':
                    return JSON.stringify(t.value);
                default:
                    (0, i.vE)(t);
            }
            break;
        default:
            (0, i.vE)(n);
    }
}
