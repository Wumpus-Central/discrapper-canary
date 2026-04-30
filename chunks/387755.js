"use strict";
n.d(t, { A: () => p });
var i = n(636537),
    r = n(228366),
    s = n(325909),
    a = n(734057),
    o = n(994500),
    l = n(287809),
    u = n(174459),
    c = n(157559),
    d = n(717398),
    _ = n(730852),
    f = n(652215),
    h = n(375708);
let p = {
    call(e, t, n, r, s) {
        let a = (n) => {
            _.default.selectVoiceChannel(e, t), n && this.ring(e), s?.(e);
        };
        if (null != r) {
            if (o.A.isBlocked(r)) return;
            let t = l.default.getUser(r);
            i.Bo.get({ url: f.Rsh.CALL(e), oldFormErrors: !0, rejectWithError: !0 }).then(
                (e) => {
                    a(n && e.body.ringable);
                },
                () => {
                    u.default.track(f.HAw.OPEN_POPOUT, { type: "Not Friend", source: "Call" }),
                        c.A.show({
                            title: h.intl.string(h.t.My50nf),
                            body: h.intl.format(h.t.IdKo2z, { username: null != t ? t.username : "" }),
                            confirmText: h.intl.string(h.t["PMsq/b"]),
                            cancelText: h.intl.string(h.t.BddRzS),
                            onConfirm() {
                                d.A.addRelationship({ userId: r, context: { location: "Call" } });
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
            i.Bo.post({
                url: f.Rsh.CALL_RING(e),
                body: { recipients: t, analytics_location: n },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
                o.type === f.rbe.GUILD_VOICE &&
                    null != t &&
                    r.h.dispatch({ type: "GUILD_LOCAL_RING_START", ringing: t, guildId: o.guild_id });
            return;
        }
        u && r.h.dispatch({ type: "CALL_ENQUEUE_RING", channelId: e, recipients: t });
    },
    stopRinging: (e, t) =>
        i.Bo.post({ url: f.Rsh.CALL_STOP_RINGING(e), body: { recipients: t }, oldFormErrors: !0, rejectWithError: !0 }),
};
