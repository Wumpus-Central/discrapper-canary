n.d(t, { Z: () => h });
var i = n(544891),
    r = n(570140),
    a = n(985588),
    s = n(592125),
    o = n(699516),
    l = n(594174),
    u = n(626135),
    c = n(668781),
    d = n(194359),
    f = n(287734),
    _ = n(981631),
    p = n(388032);
let h = {
    call(e, t, n, r, a) {
        let s = (n) => {
            f.default.selectVoiceChannel(e, t), n && this.ring(e), null == a || a(e);
        };
        if (null != r) {
            if (o.Z.isBlocked(r)) return;
            let t = l.default.getUser(r);
            i.tn
                .get({
                    url: _.ANM.CALL(e),
                    oldFormErrors: !0,
                    rejectWithError: !0
                })
                .then(
                    (e) => {
                        s(n && e.body.ringable);
                    },
                    () => {
                        u.default.track(_.rMx.OPEN_POPOUT, {
                            type: 'Not Friend',
                            source: 'Call'
                        }),
                            c.Z.show({
                                title: p.intl.string(p.t.My50nZ),
                                body: p.intl.format(p.t.IdKo29, { username: null != t ? t.username : '' }),
                                confirmText: p.intl.string(p.t['PMsq/f']),
                                cancelText: p.intl.string(p.t.BddRzc),
                                onConfirm() {
                                    d.Z.addRelationship({
                                        userId: r,
                                        context: { location: 'Call' }
                                    });
                                }
                            });
                    }
                );
        } else s(n);
    },
    ring(e, t) {
        let n = s.Z.getChannel(e);
        if (null == n) return;
        let o = (0, a.V)(n),
            l = _.TPd.CALLABLE.has(n.type);
        if (o) {
            i.tn.post({
                url: _.ANM.CALL_RING(e),
                body: { recipients: t },
                oldFormErrors: !0,
                rejectWithError: !0
            }),
                n.type === _.d4z.GUILD_VOICE &&
                    null != t &&
                    r.Z.dispatch({
                        type: 'GUILD_LOCAL_RING_START',
                        ringing: t,
                        guildId: n.guild_id
                    });
            return;
        }
        l &&
            r.Z.dispatch({
                type: 'CALL_ENQUEUE_RING',
                channelId: e,
                recipients: t
            });
    },
    stopRinging: (e, t) =>
        i.tn.post({
            url: _.ANM.CALL_STOP_RINGING(e),
            body: { recipients: t },
            oldFormErrors: !0,
            rejectWithError: !0
        })
};
