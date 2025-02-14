n.d(t, { Z: () => _ }), n(47120), n(789020);
var i = n(544891),
    l = n(115130),
    r = n(287545),
    a = n(812206),
    s = n(695103),
    o = n(626135),
    d = n(630388),
    c = n(996106),
    u = n(914946),
    h = n(452426),
    m = n(561205),
    p = n(186901),
    g = n(981631);
let _ = {
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
                args: { event_name: i, event_properties: l }
            } = e;
            (0, u.bu)(n.transport), (0, u._f)(n.application);
            let s = n.application.id,
                h = (0, m.Z)(),
                p = null == h ? void 0 : h.getGuildId();
            if (null == h) throw new c.Z({ errorCode: g.lTL.INVALID_COMMAND }, 'Invalid channel');
            let _ = a.Z.getApplication(s);
            if (!(0, d.yE)(null !== (t = null == _ ? void 0 : _.flags) && void 0 !== t ? t : 0, g.udG.EMBEDDED_FIRST_PARTY)) throw new c.Z({ errorCode: g.lTL.INVALID_COMMAND }, 'This application cannot access this API');
            let f = (0, r.U)(s),
                E = {
                    activity_application_id: s,
                    activity_channel_type: h.type,
                    activity_guild_id: p,
                    activity_user_session_id: null == f ? void 0 : f.activityUserSessionId
                };
            o.default.track(i, {
                ...E,
                ...l
            });
        }
    },
    [g.Etm.GET_APPLICATION_TICKET]: {
        scope: p.lH,
        handler(e) {
            let { socket: t } = e,
                n = t.application.id;
            if (null == n) throw new c.Z({ errorCode: g.lTL.INVALID_COMMAND }, 'No application.');
            return i.tn
                .post({
                    url: g.ANM.APPLICATION_TICKET(n),
                    body: { test_mode: s.Z.inTestModeForApplication(n) || l.Z.inDevModeForApplication(n) },
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
