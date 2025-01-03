n(411104), n(47120);
var i = n(72924),
    r = n(100527),
    l = n(367207),
    a = n(996106),
    s = n(452426),
    o = n(561205),
    c = n(334288),
    d = n(852926),
    u = n(186901),
    h = n(981631),
    m = n(474936);
let p = [r.Z.RPC];
function g(e, t) {
    let n = {
        subscriptionTier: m.Si.TIER_2,
        analyticsLocations: p,
        analyticsObject: t
    };
    switch (e) {
        case h.IlC.APP:
            return l.Z.openPremiumPaymentModalInApp(n);
        case h.IlC.OVERLAY:
            return l.Z.openPremiumPaymentModalInOverlay(n);
        default:
            throw Error('Unexpected app context: '.concat(e));
    }
}
t.Z = {
    [h.Etm.START_PURCHASE]: {
        [u.Gp.ANY]: [u.wE, u.lH],
        validation: (e) =>
            (0, s.Z)(e)
                .required()
                .keys({
                    sku_id: e.string().required(),
                    pid: e.number().min(0)
                }),
        handler(e) {
            let {
                socket: t,
                args: { sku_id: n, pid: r }
            } = e;
            (0, c.f)(t.transport);
            let l = t.application.id;
            if (null == l) throw new a.Z({ errorCode: h.lTL.INVALID_COMMAND }, 'No application.');
            let { lock: s, context: m } = (0, d.jU)(t.transport !== u.He.POST_MESSAGE ? r : null);
            if (null == (0, o.Z)()) throw new a.Z({ errorCode: h.lTL.INVALID_CHANNEL }, 'Invalid channel');
            let f = { page: h.ZY5.IN_APP };
            return (async () => {
                try {
                    let e = await (0, i.S)({
                        applicationId: l,
                        skuId: n,
                        openPremiumPaymentModal: () => g(m, f),
                        analyticsLocations: p,
                        analyticsLocationObject: f,
                        context: m
                    });
                    return s(), e;
                } catch (e) {
                    if ((s(), null != e)) {
                        let t = '';
                        throw ((t = 'object' == typeof e && 'message' in e && 'string' == typeof e.message ? e.message : 'string' == typeof e ? e : JSON.stringify(e)), new a.Z({ errorCode: h.lTL.PURCHASE_ERROR }, t));
                    }
                    throw new a.Z({ errorCode: h.lTL.PURCHASE_CANCELED }, 'Purchase was canceled by the user.');
                }
            })();
        }
    },
    [h.Etm.START_PREMIUM_PURCHASE]: {
        [u.Gp.ANY]: [u.wE, u.lH],
        validation: (e) => (0, s.Z)(e).keys({ pid: e.number().min(0) }),
        handler(e) {
            let {
                socket: t,
                args: { pid: n }
            } = e;
            if (((0, c.f)(t.transport), null == t.application.id)) throw new a.Z({ errorCode: h.lTL.INVALID_COMMAND }, 'No application.');
            let { lock: i, context: r } = (0, d.jU)(t.transport !== u.He.POST_MESSAGE ? n : null);
            return g(r, { page: h.ZY5.IN_APP }).then(
                () => {
                    i();
                },
                (e) => {
                    if ((i(), null != e)) throw new a.Z({ errorCode: h.lTL.PURCHASE_ERROR }, e);
                    throw new a.Z({ errorCode: h.lTL.PURCHASE_CANCELED }, 'Purchase was canceled by the user.');
                }
            );
        }
    }
};
