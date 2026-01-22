n.d(t, { A: () => h });
var r = n(562465),
    i = n(73153),
    a = n(325909),
    s = n(734057),
    o = n(994500),
    l = n(287809),
    c = n(954571),
    u = n(157559),
    d = n(49229),
    f = n(956793),
    p = n(652215),
    _ = n(985018);
let h = {
    call(e, t, n, i, a) {
        let s = (n) => {
            f.default.selectVoiceChannel(e, t), n && this.ring(e), null == a || a(e);
        };
        if (null != i) {
            if (o.A.isBlocked(i)) return;
            let t = l.default.getUser(i);
            r.Bo.get({
                url: p.Rsh.CALL(e),
                oldFormErrors: !0,
                rejectWithError: !0,
            }).then(
                (e) => {
                    s(n && e.body.ringable);
                },
                () => {
                    c.default.track(p.HAw.OPEN_POPOUT, {
                        type: "Not Friend",
                        source: "Call",
                    }),
                        u.A.show({
                            title: _.intl.string(_.t.My50nf),
                            body: _.intl.format(_.t.IdKo2z, { username: null != t ? t.username : "" }),
                            confirmText: _.intl.string(_.t["PMsq/b"]),
                            cancelText: _.intl.string(_.t.BddRzS),
                            onConfirm() {
                                d.A.addRelationship({
                                    userId: i,
                                    context: { location: "Call" },
                                });
                            },
                        });
                },
            );
        } else s(n);
    },
    ring(e, t, n) {
        let o = s.A.getChannel(e);
        if (null == o) return;
        let l = (0, a.p)(o),
            c = p.kvI.CALLABLE.has(o.type);
        if (l) {
            r.Bo.post({
                url: p.Rsh.CALL_RING(e),
                body: {
                    recipients: t,
                    analytics_location: n,
                },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
                o.type === p.rbe.GUILD_VOICE &&
                    null != t &&
                    i.h.dispatch({
                        type: "GUILD_LOCAL_RING_START",
                        ringing: t,
                        guildId: o.guild_id,
                    });
            return;
        }
        c &&
            i.h.dispatch({
                type: "CALL_ENQUEUE_RING",
                channelId: e,
                recipients: t,
            });
    },
    stopRinging: (e, t) =>
        r.Bo.post({
            url: p.Rsh.CALL_STOP_RINGING(e),
            body: { recipients: t },
            oldFormErrors: !0,
            rejectWithError: !0,
        }),
};
