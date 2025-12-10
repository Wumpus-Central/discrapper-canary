n.d(t, { Z: () => m }), n(388685), n(997841);
var r = n(95015),
    i = n(544891),
    l = n(115130),
    a = n(287545),
    s = n(812206),
    o = n(695103),
    c = n(626135),
    u = n(996106),
    d = n(914946),
    p = n(452426),
    f = n(561205),
    g = n(186901),
    h = n(981631);
let m = {
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
                args: { event_name: i, event_properties: l },
            } = e;
            (0, d.bu)(n.transport), (0, d._f)(n.application);
            let o = n.application.id,
                p = (0, f.Z)(),
                g = null == p ? void 0 : p.getGuildId(),
                m = s.Z.getApplication(o);
            if (!(0, r.yE)(null != (t = null == m ? void 0 : m.flags) ? t : 0, h.udG.EMBEDDED_FIRST_PARTY))
                throw new u.Z({ errorCode: h.lTL.INVALID_COMMAND }, "This application cannot access this API");
            let _ = (0, a.U)(o),
                b = {
                    activity_application_id: o,
                    activity_channel_type: null == p ? void 0 : p.type,
                    activity_guild_id: g,
                    activity_user_session_id: null == _ ? void 0 : _.activityUserSessionId,
                };
            c.default.track(
                i,
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
                })({}, b, l),
            );
        },
    },
    [h.Etm.GET_APPLICATION_TICKET]: {
        scope: g.lH,
        handler(e) {
            let { socket: t } = e,
                n = t.application.id;
            if (null == n) throw new u.Z({ errorCode: h.lTL.INVALID_COMMAND }, "No application.");
            return i.tn
                .post({
                    url: h.ANM.APPLICATION_TICKET(n),
                    body: { test_mode: o.Z.inTestModeForApplication(n) || l.Z.inDevModeForApplication(n) },
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
