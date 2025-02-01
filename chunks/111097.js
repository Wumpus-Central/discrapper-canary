n.d(t, { Z: () => _ }), n(411104), n(47120);
var i = n(72924),
    l = n(100527),
    r = n(367207),
    a = n(996106),
    s = n(452426),
    o = n(561205),
    c = n(334288),
    d = n(852926),
    u = n(186901),
    h = n(981631),
    m = n(474936);
let p = [l.Z.RPC];
function g(e, t) {
    let n = {
        subscriptionTier: m.Si.TIER_2,
        analyticsLocations: p,
        analyticsObject: t
    };
    switch (e) {
        case h.IlC.APP:
            return r.Z.openPremiumPaymentModalInApp(n);
        case h.IlC.OVERLAY:
            return r.Z.openPremiumPaymentModalInOverlay(n);
        default:
            throw Error('Unexpected app context: '.concat(e));
    }
}
let _ = {
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
                args: { sku_id: n, pid: l }
            } = e;
            (0, c.f)(t.transport);
            let r = t.application.id;
            if (null == r) throw new a.Z({ errorCode: h.lTL.INVALID_COMMAND }, 'No application.');
            let { lock: s, context: m } = (0, d.jU)(t.transport !== u.He.POST_MESSAGE ? l : null);
            if (null == (0, o.Z)()) throw new a.Z({ errorCode: h.lTL.INVALID_CHANNEL }, 'Invalid channel');
            let _ = { page: h.ZY5.IN_APP };
            return (async () => {
                try {
                    let e = await (0, i.S)({
                        applicationId: r,
                        skuId: n,
                        openPremiumPaymentModal: () => g(m, _),
                        analyticsLocations: p,
                        analyticsLocationObject: _,
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
            let { lock: i, context: l } = (0, d.jU)(t.transport !== u.He.POST_MESSAGE ? n : null);
            return g(l, { page: h.ZY5.IN_APP }).then(
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
