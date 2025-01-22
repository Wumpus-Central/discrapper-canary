var i = r(544891),
    a = r(570140),
    o = r(523746),
    s = r(699516),
    l = r(594174),
    u = r(626135),
    c = r(668781),
    d = r(194359),
    f = r(287734),
    p = r(981631),
    h = r(388032);
n.Z = {
    call(e, n, r, a, o) {
        let _ = (r) => {
            f.default.selectVoiceChannel(e, n), r && this.ring(e), null == o || o(e);
        };
        if (null != a) {
            if (s.Z.isBlocked(a)) return;
            let n = l.default.getUser(a);
            i.tn
                .get({
                    url: p.ANM.CALL(e),
                    oldFormErrors: !0,
                    rejectWithError: !0
                })
                .then(
                    (e) => {
                        _(r && e.body.ringable);
                    },
                    () => {
                        u.default.track(p.rMx.OPEN_POPOUT, {
                            type: 'Not Friend',
                            source: 'Call'
                        }),
                            c.Z.show({
                                title: h.intl.string(h.t.My50nZ),
                                body: h.intl.format(h.t.IdKo29, { username: null != n ? n.username : '' }),
                                confirmText: h.intl.string(h.t['PMsq/f']),
                                cancelText: h.intl.string(h.t.BddRzc),
                                onConfirm() {
                                    d.Z.addRelationship({
                                        userId: a,
                                        context: { location: 'Call' }
                                    });
                                }
                            });
                    }
                );
        } else _(r);
    },
    ring(e, n) {
        let r = o.Z.getCall(e);
        if (null != r && null != r.messageId && !o.Z.isCallUnavailable(e)) {
            i.tn.post({
                url: p.ANM.CALL_RING(e),
                body: { recipients: n },
                oldFormErrors: !0,
                rejectWithError: !0
            });
            return;
        }
        a.Z.dispatch({
            type: 'CALL_ENQUEUE_RING',
            channelId: e,
            recipients: n
        });
    },
    stopRinging: (e, n) =>
        i.tn.post({
            url: p.ANM.CALL_STOP_RINGING(e),
            body: { recipients: n },
            oldFormErrors: !0,
            rejectWithError: !0
        })
};
