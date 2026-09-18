n.d(t, { p: () => A });
var l = n(308528),
    r = n(148494),
    a = n(355622),
    i = n(428249),
    s = n(451909),
    o = n(138298),
    u = n(940382),
    c = n(761640),
    d = n(734057),
    f = n(806150),
    h = n(381941);
async function A(e) {
    let { userId: t, content: n, location: A, openChannel: m = !0, whenReady: S = !1, entry: T, nonce: g } = e,
        { valid: x, failureReason: p } = await (0, f.i)({ type: a.oU.NORMAL, content: n, channel: null });
    if (!x) throw Error(p);
    let E = m ? await l.A.openPrivateChannel({ recipientIds: t, location: A }) : await l.A.getOrEnsurePrivateChannel(t),
        R = d.A.getChannel(E);
    if (null == R) throw Error("Failed to open private channel");
    let y = c.Ay.getSidebarState(c.fe);
    if (
        (m && y?.type === u.PE.VIEW_MESSAGE_REQUEST && y.channelId === R.id && o.A.closeChannelSidebar(c.fe), null != T)
    )
        (0, i.d)({
            channel: R,
            content: n,
            entry: T,
            whenReady: S,
            doNotNotifyOnError: !1,
            location: h.Hx.USER_PROFILE,
        });
    else {
        let e = s.Ay.parse(R, n);
        return r.A.sendMessage(R.id, e, S, { location: h.Hx.USER_PROFILE, nonce: g });
    }
}
