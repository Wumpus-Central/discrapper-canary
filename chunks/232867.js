(a.d(t, { m: () => m }), a(388685));
var n = a(73800),
    r = a(544891),
    l = a(959546),
    i = a(981631),
    s = a(474936);
let o = async () =>
        (
            await r.tn.get({
                url: i.ANM.ENTITLEMENTS_FOR_APPLICATION(s.CL),
                oldFormErrors: !0,
                query: {
                    exclude_consumed: !0,
                    exclude_ended: !0
                },
                rejectWithError: !0
            })
        ).body.map((e) => l.Z.createFromServer(e)),
    c = async (e) => {
        await r.tn.post({
            url: '/debug/entitlements/fractional-premium',
            body: {
                count: 1,
                sku_id: e
            },
            rejectWithError: !1
        });
    },
    d = async (e) => {
        let t = '/debug/entitlements/fractional-premium';
        (null != e && (t = ''.concat(t, '/').concat(e)),
            await r.tn.del({
                url: t,
                rejectWithError: !0
            }));
    },
    u = async () => {
        await r.tn.post({
            url: '/debug/entitlements/fulfillment',
            rejectWithError: !1
        });
    },
    m = () => {
        let [e, t] = n.useState([]),
            [a, r] = n.useState(!1),
            l = (0, n.useCallback)(async () => {
                try {
                    r(!0);
                    let e = await o();
                    t(e);
                } finally {
                    r(!1);
                }
            }, []),
            i = (0, n.useCallback)(
                async (e) => {
                    (await c(e), await l());
                },
                [l]
            );
        return {
            grantFractionalPremium: i,
            deleteFractionalPremium: (0, n.useCallback)(
                async (e) => {
                    (await d(e), await l());
                },
                [l]
            ),
            triggerNextEntitlementFulfillment: (0, n.useCallback)(async () => {
                (await u(), await l());
            }, [l]),
            refreshEntitlementList: l,
            entitlements: e,
            loading: a
        };
    };
