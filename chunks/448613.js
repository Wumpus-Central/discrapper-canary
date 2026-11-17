var l = t(308528),
    i = t(138399),
    a = t(355622),
    r = t(428249),
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
                { valid: x, failureReason: E } = await (0, f.i)({ type: a.oU.NORMAL, content: t, channel: null });
            if (!x) throw Error(E);
            let p = h
                    ? await l.A.openPrivateChannel({ recipientIds: n, location: S })
                    : await l.A.getOrEnsurePrivateChannel(n),
                R = d.A.getChannel(p);
            if (null == R) throw Error("Failed to open private channel");
            let C = c.Ay.getSidebarState(c.fe);
            if (
                (h && C?.type === u.PE.VIEW_MESSAGE_REQUEST && C.channelId === R.id && o.A.closeChannelSidebar(c.fe),
                null != m)
            )
                (0, r.d)({
                    channel: R,
                    content: t,
                    entry: m,
                    whenReady: T,
                    doNotNotifyOnError: !1,
                    location: A.Hx.USER_PROFILE,
                });
            else {
                let e = s.Ay.parse(R, t);
                return i.A.sendMessage(R.id, e, T, { location: A.Hx.USER_PROFILE, nonce: g });
            }
        },
    },
);
