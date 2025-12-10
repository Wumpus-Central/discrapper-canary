n.d(t, { Z: () => m }), n(415506), n(388685), n(49124);
var r = n(72924),
    i = n(100527),
    l = n(367207),
    a = n(996106),
    s = n(452426),
    o = n(561205),
    c = n(334288),
    u = n(852926),
    d = n(186901),
    p = n(981631),
    f = n(474936);
let g = [i.Z.RPC];
function h(e, t) {
    let n = {
        subscriptionTier: f.Si.TIER_2,
        analyticsLocations: g,
        analyticsObject: t,
    };
    switch (e) {
        case p.IlC.APP:
            return l.Z.openPremiumPaymentModalInApp(n);
        case p.IlC.OVERLAY:
            return l.Z.openPremiumPaymentModalInOverlay(n);
        default:
            throw Error("Unexpected app context: ".concat(e));
    }
}
let m = {
    [p.Etm.START_PURCHASE]: {
        [d.Gp.ANY]: [d.wE, d.lH],
        validation: (e) =>
            (0, s.Z)(e)
                .required()
                .keys({
                    sku_id: e.string().required(),
                    pid: e.number().min(0),
                }),
        handler(e) {
            let {
                socket: t,
                args: { sku_id: n, pid: i },
            } = e;
            (0, c.f)(t.transport);
            let l = t.application.id;
            if (null == l) throw new a.Z({ errorCode: p.lTL.INVALID_COMMAND }, "No application.");
            let { lock: s, context: f } = (0, u.jU)(t.transport !== d.He.POST_MESSAGE ? i : null);
            if (null == (0, o.Z)()) throw new a.Z({ errorCode: p.lTL.INVALID_CHANNEL }, "Invalid channel");
            let m = { page: p.ZY5.IN_APP };
            return (async () => {
                try {
                    let e = await (0, r.S)({
                        applicationId: l,
                        skuId: n,
                        openPremiumPaymentModal: () => h(f, m),
                        analyticsLocations: g,
                        analyticsLocationObject: m,
                        context: f,
                    });
                    return s(), e;
                } catch (e) {
                    if ((s(), null != e)) {
                        let t = "";
                        throw (
                            ((t =
                                "object" == typeof e && "message" in e && "string" == typeof e.message
                                    ? e.message
                                    : "string" == typeof e
                                      ? e
                                      : JSON.stringify(e)),
                            new a.Z({ errorCode: p.lTL.PURCHASE_ERROR }, t))
                        );
                    }
                    throw new a.Z({ errorCode: p.lTL.PURCHASE_CANCELED }, "Purchase was canceled by the user.");
                }
            })();
        },
    },
    [p.Etm.START_PREMIUM_PURCHASE]: {
        [d.Gp.ANY]: [d.wE, d.lH],
        validation: (e) => (0, s.Z)(e).keys({ pid: e.number().min(0) }),
        handler(e) {
            let {
                socket: t,
                args: { pid: n },
            } = e;
            if (((0, c.f)(t.transport), null == t.application.id))
                throw new a.Z({ errorCode: p.lTL.INVALID_COMMAND }, "No application.");
            let { lock: r, context: i } = (0, u.jU)(t.transport !== d.He.POST_MESSAGE ? n : null);
            return h(i, { page: p.ZY5.IN_APP }).then(
                () => {
                    r();
                },
                (e) => {
                    if ((r(), null != e)) throw new a.Z({ errorCode: p.lTL.PURCHASE_ERROR }, e);
                    throw new a.Z({ errorCode: p.lTL.PURCHASE_CANCELED }, "Purchase was canceled by the user.");
                },
            );
        },
    },
};
