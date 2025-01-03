n(47120), n(789020);
var i = n(544891),
    r = n(115130),
    l = n(287545),
    a = n(812206),
    s = n(695103),
    o = n(626135),
    c = n(630388),
    d = n(996106),
    u = n(914946),
    h = n(452426),
    m = n(561205),
    p = n(186901),
    g = n(981631);
t.Z = {
    [g.Etm.SEND_ANALYTICS_EVENT]: {
        validation: (e) =>
            (0, h.Z)(e)
                .required()
                .keys({
                    event_name: e.string().required(),
                    event_properties: (0, h.Z)(e).required()
                }),
        handler(e) {
            var t;
            let {
                socket: n,
                args: { event_name: i, event_properties: r }
            } = e;
            (0, u.bu)(n.transport), (0, u._f)(n.application);
            let s = n.application.id,
                h = (0, m.Z)(),
                p = null == h ? void 0 : h.getGuildId();
            if (null == h) throw new d.Z({ errorCode: g.lTL.INVALID_COMMAND }, 'Invalid channel');
            let f = a.Z.getApplication(s);
            if (!(0, c.yE)(null !== (t = null == f ? void 0 : f.flags) && void 0 !== t ? t : 0, g.udG.EMBEDDED_FIRST_PARTY)) throw new d.Z({ errorCode: g.lTL.INVALID_COMMAND }, 'This application cannot access this API');
            let _ = (0, l.U)(s),
                E = {
                    activity_application_id: s,
                    activity_channel_type: h.type,
                    activity_guild_id: p,
                    activity_user_session_id: null == _ ? void 0 : _.activityUserSessionId
                };
            o.default.track(i, {
                ...E,
                ...r
            });
        }
    },
    [g.Etm.GET_APPLICATION_TICKET]: {
        scope: p.lH,
        handler(e) {
            let { socket: t } = e,
                n = t.application.id;
            if (null == n) throw new d.Z({ errorCode: g.lTL.INVALID_COMMAND }, 'No application.');
            return i.tn
                .post({
                    url: g.ANM.APPLICATION_TICKET(n),
                    body: { test_mode: s.Z.inTestModeForApplication(n) || r.Z.inDevModeForApplication(n) },
                    retries: 3,
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then((e) => {
                    let { body: t } = e;
                    return t;
                });
        }
    }
};
