var i = r(544891),
    a = r(570140),
    o = r(985588),
    s = r(592125),
    l = r(699516),
    u = r(594174),
    c = r(626135),
    d = r(668781),
    f = r(194359),
    p = r(287734),
    h = r(981631),
    _ = r(388032);
n.Z = {
    call(e, n, r, a, o) {
        let s = (r) => {
            p.default.selectVoiceChannel(e, n), r && this.ring(e), null == o || o(e);
        };
        if (null != a) {
            if (l.Z.isBlocked(a)) return;
            let n = u.default.getUser(a);
            i.tn
                .get({
                    url: h.ANM.CALL(e),
                    oldFormErrors: !0,
                    rejectWithError: !0
                })
                .then(
                    (e) => {
                        s(r && e.body.ringable);
                    },
                    () => {
                        c.default.track(h.rMx.OPEN_POPOUT, {
                            type: 'Not Friend',
                            source: 'Call'
                        }),
                            d.Z.show({
                                title: _.intl.string(_.t.My50nZ),
                                body: _.intl.format(_.t.IdKo29, { username: null != n ? n.username : '' }),
                                confirmText: _.intl.string(_.t['PMsq/f']),
                                cancelText: _.intl.string(_.t.BddRzc),
                                onConfirm() {
                                    f.Z.addRelationship({
                                        userId: a,
                                        context: { location: 'Call' }
                                    });
                                }
                            });
                    }
                );
        } else s(r);
    },
    ring(e, n) {
        let r = s.Z.getChannel(e);
        if (null == r) return;
        let l = (0, o.V)(r),
            u = h.TPd.CALLABLE.has(r.type);
        if (l) {
            i.tn.post({
                url: h.ANM.CALL_RING(e),
                body: { recipients: n },
                oldFormErrors: !0,
                rejectWithError: !0
            });
            return;
        }
        u &&
            a.Z.dispatch({
                type: 'CALL_ENQUEUE_RING',
                channelId: e,
                recipients: n
            });
    },
    stopRinging: (e, n) =>
        i.tn.post({
            url: h.ANM.CALL_STOP_RINGING(e),
            body: { recipients: n },
            oldFormErrors: !0,
            rejectWithError: !0
        })
};
