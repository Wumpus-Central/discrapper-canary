n.d(t, { Z: () => h });
var r = n(544891),
    i = n(570140),
    o = n(985588),
    a = n(592125),
    s = n(699516),
    l = n(594174),
    c = n(626135),
    u = n(668781),
    d = n(194359),
    f = n(287734),
    _ = n(981631),
    p = n(388032);
let h = {
    call(e, t, n, i, o) {
        let a = (n) => {
            f.default.selectVoiceChannel(e, t), n && this.ring(e), null == o || o(e);
        };
        if (null != i) {
            if (s.Z.isBlocked(i)) return;
            let t = l.default.getUser(i);
            r.tn
                .get({
                    url: _.ANM.CALL(e),
                    oldFormErrors: !0,
                    rejectWithError: !0
                })
                .then(
                    (e) => {
                        a(n && e.body.ringable);
                    },
                    () => {
                        c.default.track(_.rMx.OPEN_POPOUT, {
                            type: 'Not Friend',
                            source: 'Call'
                        }),
                            u.Z.show({
                                title: p.NW.string(p.t.My50nZ),
                                body: p.NW.format(p.t.IdKo29, { username: null != t ? t.username : '' }),
                                confirmText: p.NW.string(p.t['PMsq/f']),
                                cancelText: p.NW.string(p.t.BddRzc),
                                onConfirm() {
                                    d.Z.addRelationship({
                                        userId: i,
                                        context: { location: 'Call' }
                                    });
                                }
                            });
                    }
                );
        } else a(n);
    },
    ring(e, t) {
        let n = a.Z.getChannel(e);
        if (null == n) return;
        let s = (0, o.V)(n),
            l = _.TPd.CALLABLE.has(n.type);
        if (s) {
            r.tn.post({
                url: _.ANM.CALL_RING(e),
                body: { recipients: t },
                oldFormErrors: !0,
                rejectWithError: !0
            }),
                n.type === _.d4z.GUILD_VOICE &&
                    null != t &&
                    i.Z.dispatch({
                        type: 'GUILD_LOCAL_RING_START',
                        ringing: t,
                        guildId: n.guild_id
                    });
            return;
        }
        l &&
            i.Z.dispatch({
                type: 'CALL_ENQUEUE_RING',
                channelId: e,
                recipients: t
            });
    },
    stopRinging: (e, t) =>
        r.tn.post({
            url: _.ANM.CALL_STOP_RINGING(e),
            body: { recipients: t },
            oldFormErrors: !0,
            rejectWithError: !0
        })
};
