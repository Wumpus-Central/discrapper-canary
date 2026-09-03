n.d(t, { A: () => h });
var i = n(636537),
    r = n(228366),
    a = n(325909),
    s = n(734057),
    l = n(994500),
    o = n(287809),
    d = n(174459),
    c = n(157559),
    u = n(717398),
    _ = n(730852),
    E = n(652215),
    A = n(375708);
let h = {
    call(e, t, n, r, a) {
        let s = (n) => {
            _.default.selectVoiceChannel(e, t), n && this.ring(e), a?.(e);
        };
        if (null != r) {
            if (l.A.isBlocked(r)) return;
            let t = o.default.getUser(r);
            i.Bo.get({ url: E.Rsh.CALL(e), oldFormErrors: !0, rejectWithError: !0 }).then(
                (e) => {
                    s(n && e.body.ringable);
                },
                () => {
                    d.default.track(E.HAw.OPEN_POPOUT, { type: "Not Friend", source: "Call" }),
                        c.A.show({
                            title: A.intl.string(A.t.My50nf),
                            body: A.intl.format(A.t.IdKo2z, { username: null != t ? t.username : "" }),
                            confirmText: A.intl.string(A.t["PMsq/b"]),
                            cancelText: A.intl.string(A.t.BddRzS),
                            onConfirm() {
                                u.A.addRelationship({ userId: r, context: { location: "Call" } });
                            },
                        });
                },
            );
        } else s(n);
    },
    ring(e, t, n) {
        let l = s.A.getChannel(e);
        if (null == l) return;
        let o = (0, a.pW)(l),
            d = E.kvI.CALLABLE.has(l.type);
        if (o) {
            i.Bo.post({
                url: E.Rsh.CALL_RING(e),
                body: { recipients: t, analytics_location: n },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
                l.type === E.rbe.GUILD_VOICE &&
                    null != t &&
                    r.h.dispatch({ type: "GUILD_LOCAL_RING_START", ringing: t, guildId: l.guild_id });
            return;
        }
        d && r.h.dispatch({ type: "CALL_ENQUEUE_RING", channelId: e, recipients: t });
    },
    stopRinging: (e, t) =>
        i.Bo.post({ url: E.Rsh.CALL_STOP_RINGING(e), body: { recipients: t }, oldFormErrors: !0, rejectWithError: !0 }),
};
