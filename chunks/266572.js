n(47120);
var i = n(200651);
n(192379);
var r = n(544891),
    l = n(846519),
    a = n(481060),
    s = n(496929),
    o = n(115130),
    c = n(812206),
    d = n(594174),
    u = n(580130),
    h = n(695103),
    m = n(70956),
    p = n(998502),
    g = n(996106),
    f = n(186901),
    _ = n(981631);
let E = 10 * m.Z.Millis.SECOND;
t.Z = {
    [_.Etm.VALIDATE_APPLICATION]: {
        scope: f.lH,
        handler(e) {
            let { socket: t } = e,
                r = t.application.id;
            try {
                if (null == r) throw new g.Z({ errorCode: _.lTL.INVALID_COMMAND }, 'No application.');
                let e = c.Z.getApplication(r);
                if (null == e) throw new g.Z({ errorCode: _.lTL.INVALID_ENTITLEMENT }, 'SKU does not exist.');
                let t = e.primarySkuId;
                if (null == t) throw new g.Z({ errorCode: _.lTL.INVALID_ENTITLEMENT }, 'SKU does not exist.');
                return Promise.race([
                    (function (e, t) {
                        let n = u.Z.isEntitledToSku(d.default.getCurrentUser(), e, t);
                        return null != n ? Promise.resolve(n) : (0, s.yD)(t).then(() => !0 === u.Z.isEntitledToSku(d.default.getCurrentUser(), e, t));
                    })(t, e.id).then((e) => {
                        if (!e) throw new g.Z({ errorCode: _.lTL.INVALID_ENTITLEMENT }, 'User does not have entitlement.');
                    }),
                    (0, l.GR)(E).then(() => {
                        throw new g.Z({ errorCode: _.lTL.INVALID_ENTITLEMENT }, 'Timed out fetching entitlement.');
                    })
                ]);
            } catch (e) {
                throw (
                    (e.code === _.lTL.INVALID_ENTITLEMENT &&
                        (p.ZP.focus(null, !0),
                        (0, a.openModalLazy)(async () => {
                            let { default: e } = await n.e('48748').then(n.bind(n, 52004));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    applicationId: r
                                });
                        })),
                    e)
                );
            }
        }
    },
    [_.Etm.GET_ENTITLEMENT_TICKET]: {
        scope: f.lH,
        handler(e) {
            let { socket: t } = e,
                l = t.application.id;
            if (null == l) throw new g.Z({ errorCode: _.lTL.INVALID_COMMAND }, 'No application.');
            return r.tn
                .post({
                    url: _.ANM.ENTITLEMENT_TICKET(l),
                    body: { test_mode: h.Z.inTestModeForApplication(l) || o.Z.inDevModeForApplication(l) },
                    retries: 3,
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then((e) => {
                    let { body: t } = e;
                    return t;
                })
                .catch((e) => {
                    throw (
                        (p.ZP.focus(null, !0),
                        (0, a.openModalLazy)(async () => {
                            let { default: e } = await n.e('48748').then(n.bind(n, 52004));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    applicationId: l
                                });
                        }),
                        e)
                    );
                });
        }
    }
};
