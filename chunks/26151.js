n.d(t, { Z: () => m });
var r = n(544891),
    i = n(570140),
    a = n(985588),
    o = n(592125),
    s = n(699516),
    l = n(594174),
    c = n(626135),
    u = n(668781),
    d = n(194359),
    f = n(287734),
    p = n(981631),
    _ = n(388032);
let m = {
    call(e, t, n, i, a) {
        let o = (n) => {
            f.default.selectVoiceChannel(e, t), n && this.ring(e), null == a || a(e);
        };
        if (null != i) {
            if (s.Z.isBlocked(i)) return;
            let t = l.default.getUser(i);
            r.tn
                .get({
                    url: p.ANM.CALL(e),
                    oldFormErrors: !0,
                    rejectWithError: !0,
                })
                .then(
                    (e) => {
                        o(n && e.body.ringable);
                    },
                    () => {
                        c.default.track(p.rMx.OPEN_POPOUT, {
                            type: "Not Friend",
                            source: "Call",
                        }),
                            u.Z.show({
                                title: _.intl.string(_.t.My50nf),
                                body: _.intl.format(_.t.IdKo2z, { username: null != t ? t.username : "" }),
                                confirmText: _.intl.string(_.t["PMsq/b"]),
                                cancelText: _.intl.string(_.t.BddRzS),
                                onConfirm() {
                                    d.Z.addRelationship({
                                        userId: i,
                                        context: { location: "Call" },
                                    });
                                },
                            });
                    },
                );
        } else o(n);
    },
    ring(e, t, n) {
        let s = o.Z.getChannel(e);
        if (null == s) return;
        let l = (0, a.V)(s),
            c = p.TPd.CALLABLE.has(s.type);
        if (l) {
            r.tn.post({
                url: p.ANM.CALL_RING(e),
                body: {
                    recipients: t,
                    analytics_location: n,
                },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
                s.type === p.d4z.GUILD_VOICE &&
                    null != t &&
                    i.Z.dispatch({
                        type: "GUILD_LOCAL_RING_START",
                        ringing: t,
                        guildId: s.guild_id,
                    });
            return;
        }
        c &&
            i.Z.dispatch({
                type: "CALL_ENQUEUE_RING",
                channelId: e,
                recipients: t,
            });
    },
    stopRinging: (e, t) =>
        r.tn.post({
            url: p.ANM.CALL_STOP_RINGING(e),
            body: { recipients: t },
            oldFormErrors: !0,
            rejectWithError: !0,
        }),
};
