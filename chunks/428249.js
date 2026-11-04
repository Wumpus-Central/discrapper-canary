var r = n(138399),
    u = n(451909);
n.d(
    t,
    {},
    {
        J: function (e) {
            let { channel: t, content: n, whenReady: o, doNotNotifyOnError: i, location: a } = e,
                s = u.Ay.parse(t, n);
            return r.A.sendMessage(t.id, s, o, { doNotNotifyOnError: i, location: a });
        },
        d: function (e) {
            let { channel: t, content: n, entry: o, whenReady: i, doNotNotifyOnError: a, location: s } = e,
                l = u.Ay.parse(t, n);
            return r.A.sendMessage(t.id, l, i, {
                contentInventoryEntry: { unverified_content: o },
                doNotNotifyOnError: a,
                location: s,
            });
        },
    },
);
