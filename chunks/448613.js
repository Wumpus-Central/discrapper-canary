n.d(t, { p: () => S });
var l = n(308528),
    i = n(148494),
    r = n(355622),
    a = n(428249),
    s = n(451909),
    o = n(138298),
    u = n(940382),
    c = n(761640),
    d = n(734057),
    f = n(806150),
    A = n(381941);
async function S(e) {
    let { userId: t, content: n, location: S, openChannel: T = !0, whenReady: h = !1, entry: m, nonce: g } = e,
        { valid: x, failureReason: E } = await (0, f.i)({ type: r.oU.NORMAL, content: n, channel: null });
    if (!x) throw Error(E);
    let R = T ? await l.A.openPrivateChannel({ recipientIds: t, location: S }) : await l.A.getOrEnsurePrivateChannel(t),
        p = d.A.getChannel(R);
    if (null == p) throw Error("Failed to open private channel");
    let C = c.Ay.getSidebarState(c.fe);
    if (
        (T && C?.type === u.PE.VIEW_MESSAGE_REQUEST && C.channelId === p.id && o.A.closeChannelSidebar(c.fe), null != m)
    )
        (0, a.d)({
            channel: p,
            content: n,
            entry: m,
            whenReady: h,
            doNotNotifyOnError: !1,
            location: A.Hx.USER_PROFILE,
        });
    else {
        let e = s.Ay.parse(p, n);
        return i.A.sendMessage(p.id, e, h, { location: A.Hx.USER_PROFILE, nonce: g });
    }
}
