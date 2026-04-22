n.d(t, { A: () => h });
var l = n(64700),
    a = n(308528),
    r = n(843472),
    i = n(56562),
    s = n(432222),
    o = n(976860),
    d = n(734057),
    u = n(320501),
    c = n(954571),
    A = n(652215),
    f = n(381941),
    _ = n(901123),
    p = n(985018);
function h(e, t) {
    let n = l.useRef(!1);
    return l.useCallback(
        async (l, h) => {
            try {
                if (n.current) return;
                n.current = !0;
                let p = await a.A.openPrivateChannel({ recipientIds: e, location: t, navigateToChannel: !1 }),
                    h = d.A.getChannel(p);
                if (null == h) throw Error("Failed to open private channel");
                c.default.track(A.HAw.WAVE_CTA_CLICKED, { source: t }),
                    await r.A.sendStickers(h.id, [s.w], "", { location: f.Hx.SEND_WAVE }),
                    l?.(),
                    (0, o.pX)(A.BVt.CHANNEL(_.ME, h.id)),
                    r.A.jumpToMessage({
                        channelId: h.id,
                        messageId: u.A.getLastMessage(h.id)?.id ?? "",
                        jumpType: i.US.INSTANT,
                    });
            } catch (e) {
                h(p.intl.string(p.t.Q97Gke));
            } finally {
                n.current = !1;
            }
        },
        [t, e],
    );
}
