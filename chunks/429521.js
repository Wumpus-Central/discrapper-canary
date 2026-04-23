n.d(t, { A: () => g });
var a = n(64700),
    i = n(308528),
    l = n(843472),
    r = n(56562),
    o = n(432222),
    s = n(976860),
    d = n(734057),
    c = n(320501),
    u = n(954571),
    _ = n(652215),
    p = n(381941),
    f = n(901123),
    A = n(985018);
function g(e, t) {
    let n = a.useRef(!1);
    return a.useCallback(
        async (a, g) => {
            try {
                if (n.current) return;
                n.current = !0;
                let A = await i.A.openPrivateChannel({ recipientIds: e, location: t, navigateToChannel: !1 }),
                    g = d.A.getChannel(A);
                if (null == g) throw Error("Failed to open private channel");
                u.default.track(_.HAw.WAVE_CTA_CLICKED, { source: t }),
                    await l.A.sendStickers(g.id, [o.w], "", { location: p.Hx.SEND_WAVE }),
                    a?.(),
                    (0, s.pX)(_.BVt.CHANNEL(f.ME, g.id)),
                    l.A.jumpToMessage({
                        channelId: g.id,
                        messageId: c.A.getLastMessage(g.id)?.id ?? "",
                        jumpType: r.US.INSTANT,
                    });
            } catch (e) {
                g(A.intl.string(A.t.Q97Gke));
            } finally {
                n.current = !1;
            }
        },
        [t, e],
    );
}
