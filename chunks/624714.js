n.d(t, { Z: () => m }), n(47120), n(789020);
var r = n(544891),
    i = n(115130),
    l = n(287545),
    a = n(812206),
    o = n(695103),
    s = n(626135),
    c = n(630388),
    u = n(996106),
    d = n(914946),
    p = n(452426),
    h = n(561205),
    f = n(186901),
    g = n(981631);
let m = {
    [g.Etm.SEND_ANALYTICS_EVENT]: {
        validation: (e) =>
            (0, p.Z)(e)
                .required()
                .keys({
                    event_name: e.string().required(),
                    event_properties: (0, p.Z)(e).required()
                }),
        handler(e) {
            var t;
            let {
                socket: n,
                args: { event_name: r, event_properties: i }
            } = e;
            (0, d.bu)(n.transport), (0, d._f)(n.application);
            let o = n.application.id,
                p = (0, h.Z)(),
                f = null == p ? void 0 : p.getGuildId();
            if (null == p) throw new u.Z({ errorCode: g.lTL.INVALID_COMMAND }, 'Invalid channel');
            let m = a.Z.getApplication(o);
            if (!(0, c.yE)(null != (t = null == m ? void 0 : m.flags) ? t : 0, g.udG.EMBEDDED_FIRST_PARTY)) throw new u.Z({ errorCode: g.lTL.INVALID_COMMAND }, 'This application cannot access this API');
            let b = (0, l.U)(o),
                _ = {
                    activity_application_id: o,
                    activity_channel_type: p.type,
                    activity_guild_id: f,
                    activity_user_session_id: null == b ? void 0 : b.activityUserSessionId
                };
            s.default.track(
                r,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, _, i)
            );
        }
    },
    [g.Etm.GET_APPLICATION_TICKET]: {
        scope: f.lH,
        handler(e) {
            let { socket: t } = e,
                n = t.application.id;
            if (null == n) throw new u.Z({ errorCode: g.lTL.INVALID_COMMAND }, 'No application.');
            return r.tn
                .post({
                    url: g.ANM.APPLICATION_TICKET(n),
                    body: { test_mode: o.Z.inTestModeForApplication(n) || i.Z.inDevModeForApplication(n) },
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
