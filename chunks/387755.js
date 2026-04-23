"use strict";
n.d(t, { A: () => h });
var r = n(562465),
    i = n(73153),
    s = n(325909),
    a = n(734057),
    o = n(994500),
    l = n(287809),
    u = n(954571),
    c = n(157559),
    d = n(49229),
    _ = n(956793),
    f = n(652215),
    p = n(985018);
let h = {
    call(e, t, n, i, s) {
        let a = (n) => {
            _.default.selectVoiceChannel(e, t), n && this.ring(e), s?.(e);
        };
        if (null != i) {
            if (o.A.isBlocked(i)) return;
            let t = l.default.getUser(i);
            r.Bo.get({ url: f.Rsh.CALL(e), oldFormErrors: !0, rejectWithError: !0 }).then(
                (e) => {
                    a(n && e.body.ringable);
                },
                () => {
                    u.default.track(f.HAw.OPEN_POPOUT, { type: "Not Friend", source: "Call" }),
                        c.A.show({
                            title: p.intl.string(p.t.My50nf),
                            body: p.intl.format(p.t.IdKo2z, { username: null != t ? t.username : "" }),
                            confirmText: p.intl.string(p.t["PMsq/b"]),
                            cancelText: p.intl.string(p.t.BddRzS),
                            onConfirm() {
                                d.A.addRelationship({ userId: i, context: { location: "Call" } });
                            },
                        });
                },
            );
        } else a(n);
    },
    ring(e, t, n) {
        let o = a.A.getChannel(e);
        if (null == o) return;
        let l = (0, s.pW)(o),
            u = f.kvI.CALLABLE.has(o.type);
        if (l) {
            r.Bo.post({
                url: f.Rsh.CALL_RING(e),
                body: { recipients: t, analytics_location: n },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
                o.type === f.rbe.GUILD_VOICE &&
                    null != t &&
                    i.h.dispatch({ type: "GUILD_LOCAL_RING_START", ringing: t, guildId: o.guild_id });
            return;
        }
        u && i.h.dispatch({ type: "CALL_ENQUEUE_RING", channelId: e, recipients: t });
    },
    stopRinging: (e, t) =>
        r.Bo.post({ url: f.Rsh.CALL_STOP_RINGING(e), body: { recipients: t }, oldFormErrors: !0, rejectWithError: !0 }),
};
