n.d(t, { Z: () => h });
var r = n(544891),
    i = n(570140),
    a = n(985588),
    o = n(592125),
    s = n(699516),
    l = n(594174),
    c = n(626135),
    u = n(668781),
    d = n(194359),
    _ = n(287734),
    f = n(981631),
    p = n(388032);
let h = {
    call(e, t, n, i, a) {
        let o = (n) => {
            _.default.selectVoiceChannel(e, t), n && this.ring(e), null == a || a(e);
        };
        if (null != i) {
            if (s.Z.isBlocked(i)) return;
            let t = l.default.getUser(i);
            r.tn
                .get({
                    url: f.ANM.CALL(e),
                    oldFormErrors: !0,
                    rejectWithError: !0
                })
                .then(
                    (e) => {
                        o(n && e.body.ringable);
                    },
                    () => {
                        c.default.track(f.rMx.OPEN_POPOUT, {
                            type: 'Not Friend',
                            source: 'Call'
                        }),
                            u.Z.show({
                                title: p.intl.string(p.t.My50nZ),
                                body: p.intl.format(p.t.IdKo29, { username: null != t ? t.username : '' }),
                                confirmText: p.intl.string(p.t['PMsq/f']),
                                cancelText: p.intl.string(p.t.BddRzc),
                                onConfirm() {
                                    d.Z.addRelationship({
                                        userId: i,
                                        context: { location: 'Call' }
                                    });
                                }
                            });
                    }
                );
        } else o(n);
    },
    ring(e, t, n) {
        let s = o.Z.getChannel(e);
        if (null == s) return;
        let l = (0, a.V)(s),
            c = f.TPd.CALLABLE.has(s.type);
        if (l) {
            r.tn.post({
                url: f.ANM.CALL_RING(e),
                body: {
                    recipients: t,
                    analytics_location: n
                },
                oldFormErrors: !0,
                rejectWithError: !0
            }),
                s.type === f.d4z.GUILD_VOICE &&
                    null != t &&
                    i.Z.dispatch({
                        type: 'GUILD_LOCAL_RING_START',
                        ringing: t,
                        guildId: s.guild_id
                    });
            return;
        }
        c &&
            i.Z.dispatch({
                type: 'CALL_ENQUEUE_RING',
                channelId: e,
                recipients: t
            });
    },
    stopRinging: (e, t) =>
        r.tn.post({
            url: f.ANM.CALL_STOP_RINGING(e),
            body: { recipients: t },
            oldFormErrors: !0,
            rejectWithError: !0
        })
};
