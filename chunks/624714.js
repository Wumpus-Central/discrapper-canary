n.d(t, { Z: () => g }), n(388685), n(997841);
var r = n(544891),
    i = n(115130),
    l = n(287545),
    a = n(812206),
    s = n(695103),
    o = n(626135),
    c = n(630388),
    u = n(996106),
    d = n(914946),
    p = n(452426),
    f = n(561205),
    m = n(186901),
    h = n(981631);
let g = {
    [h.Etm.SEND_ANALYTICS_EVENT]: {
        validation: (e) =>
            (0, p.Z)(e)
                .required()
                .keys({
                    event_name: e.string().required(),
                    event_properties: (0, p.Z)(e).required(),
                }),
        handler(e) {
            var t;
            let {
                socket: n,
                args: { event_name: r, event_properties: i },
            } = e;
            (0, d.bu)(n.transport), (0, d._f)(n.application);
            let s = n.application.id,
                p = (0, f.Z)(),
                m = null == p ? void 0 : p.getGuildId(),
                g = a.Z.getApplication(s);
            if (!(0, c.yE)(null != (t = null == g ? void 0 : g.flags) ? t : 0, h.udG.EMBEDDED_FIRST_PARTY))
                throw new u.Z({ errorCode: h.lTL.INVALID_COMMAND }, "This application cannot access this API");
            let _ = (0, l.U)(s),
                b = {
                    activity_application_id: s,
                    activity_channel_type: null == p ? void 0 : p.type,
                    activity_guild_id: m,
                    activity_user_session_id: null == _ ? void 0 : _.activityUserSessionId,
                };
            o.default.track(
                r,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, b, i),
            );
        },
    },
    [h.Etm.GET_APPLICATION_TICKET]: {
        scope: m.lH,
        handler(e) {
            let { socket: t } = e,
                n = t.application.id;
            if (null == n) throw new u.Z({ errorCode: h.lTL.INVALID_COMMAND }, "No application.");
            return r.tn
                .post({
                    url: h.ANM.APPLICATION_TICKET(n),
                    body: { test_mode: s.Z.inTestModeForApplication(n) || i.Z.inDevModeForApplication(n) },
                    retries: 3,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                })
                .then((e) => {
                    let { body: t } = e;
                    return t;
                });
        },
    },
};
