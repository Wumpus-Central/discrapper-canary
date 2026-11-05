var l = t(308528),
    i = t(138399),
    r = t(355622),
    a = t(428249),
    s = t(451909),
    o = t(138298),
    u = t(940382),
    c = t(799704),
    d = t(734057),
    f = t(710272),
    A = t(381941);
t.d(
    n,
    {},
    {
        p: async function (e) {
            let { userId: n, content: t, location: S, openChannel: h = !0, whenReady: T = !1, entry: m, nonce: g } = e,
                { valid: x, failureReason: E } = await (0, f.i)({ type: r.oU.NORMAL, content: t, channel: null });
            if (!x) throw Error(E);
            let R = h
                    ? await l.A.openPrivateChannel({ recipientIds: n, location: S })
                    : await l.A.getOrEnsurePrivateChannel(n),
                p = d.A.getChannel(R);
            if (null == p) throw Error("Failed to open private channel");
            let C = c.Ay.getSidebarState(c.fe);
            if (
                (h && C?.type === u.PE.VIEW_MESSAGE_REQUEST && C.channelId === p.id && o.A.closeChannelSidebar(c.fe),
                null != m)
            )
                (0, a.d)({
                    channel: p,
                    content: t,
                    entry: m,
                    whenReady: T,
                    doNotNotifyOnError: !1,
                    location: A.Hx.USER_PROFILE,
                });
            else {
                let e = s.Ay.parse(p, t);
                return i.A.sendMessage(p.id, e, T, { location: A.Hx.USER_PROFILE, nonce: g });
            }
        },
    },
);
