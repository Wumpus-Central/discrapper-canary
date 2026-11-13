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
    S = t(381941);
t.d(
    n,
    {},
    {
        p: async function (e) {
            let { userId: n, content: t, location: A, openChannel: T = !0, whenReady: h = !1, entry: m, nonce: g } = e,
                { valid: x, failureReason: E } = await (0, f.i)({ type: r.oU.NORMAL, content: t, channel: null });
            if (!x) throw Error(E);
            let R = T
                    ? await l.A.openPrivateChannel({ recipientIds: n, location: A })
                    : await l.A.getOrEnsurePrivateChannel(n),
                p = d.A.getChannel(R);
            if (null == p) throw Error("Failed to open private channel");
            let C = c.Ay.getSidebarState(c.fe);
            if (
                (T && C?.type === u.PE.VIEW_MESSAGE_REQUEST && C.channelId === p.id && o.A.closeChannelSidebar(c.fe),
                null != m)
            )
                (0, a.d)({
                    channel: p,
                    content: t,
                    entry: m,
                    whenReady: h,
                    doNotNotifyOnError: !1,
                    location: S.Hx.USER_PROFILE,
                });
            else {
                let e = s.Ay.parse(p, t);
                return i.A.sendMessage(p.id, e, h, { location: S.Hx.USER_PROFILE, nonce: g });
            }
        },
    },
);
