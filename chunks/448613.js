n.d(t, { p: () => S });
var l = n(308528),
    i = n(148494),
    a = n(355622),
    r = n(428249),
    s = n(451909),
    o = n(138298),
    u = n(940382),
    c = n(761640),
    d = n(734057),
    f = n(806150),
    A = n(381941);
async function S(e) {
    let { userId: t, content: n, location: S, openChannel: h = !0, whenReady: T = !1, entry: m, nonce: g } = e,
        { valid: x, failureReason: E } = await (0, f.i)({ type: a.oU.NORMAL, content: n, channel: null });
    if (!x) throw Error(E);
    let p = h ? await l.A.openPrivateChannel({ recipientIds: t, location: S }) : await l.A.getOrEnsurePrivateChannel(t),
        R = d.A.getChannel(p);
    if (null == R) throw Error("Failed to open private channel");
    let y = c.Ay.getSidebarState(c.fe);
    if (
        (h && y?.type === u.PE.VIEW_MESSAGE_REQUEST && y.channelId === R.id && o.A.closeChannelSidebar(c.fe), null != m)
    )
        (0, r.d)({
            channel: R,
            content: n,
            entry: m,
            whenReady: T,
            doNotNotifyOnError: !1,
            location: A.Hx.USER_PROFILE,
        });
    else {
        let e = s.Ay.parse(R, n);
        return i.A.sendMessage(R.id, e, T, { location: A.Hx.USER_PROFILE, nonce: g });
    }
}
