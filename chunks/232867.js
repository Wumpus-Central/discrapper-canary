n.d(t, { m: () => m }), n(388685);
var a = n(473749),
    r = n(544891),
    i = n(959546),
    l = n(981631),
    s = n(474936);
let o = async () =>
        (
            await r.tn.get({
                url: l.ANM.ENTITLEMENTS_FOR_APPLICATION(s.CL),
                oldFormErrors: !0,
                query: {
                    exclude_consumed: !0,
                    exclude_ended: !0,
                },
                rejectWithError: !0,
            })
        ).body.map((e) => i.Z.createFromServer(e)),
    c = async (e) => {
        await r.tn.post({
            url: "/debug/entitlements/fractional-premium",
            body: {
                count: 1,
                sku_id: e,
            },
            rejectWithError: !1,
        });
    },
    d = async (e) => {
        let t = "/debug/entitlements/fractional-premium";
        null != e && (t = "".concat(t, "/").concat(e)),
            await r.tn.del({
                url: t,
                rejectWithError: !0,
            });
    },
    u = async () => {
        await r.tn.post({
            url: "/debug/entitlements/fulfillment",
            rejectWithError: !1,
        });
    },
    m = () => {
        let [e, t] = a.useState([]),
            [n, r] = a.useState(!1),
            i = (0, a.useCallback)(async () => {
                try {
                    r(!0);
                    let e = await o();
                    t(e);
                } finally {
                    r(!1);
                }
            }, []),
            l = (0, a.useCallback)(
                async (e) => {
                    await c(e), await i();
                },
                [i],
            );
        return {
            grantFractionalPremium: l,
            deleteFractionalPremium: (0, a.useCallback)(
                async (e) => {
                    await d(e), await i();
                },
                [i],
            ),
            triggerNextEntitlementFulfillment: (0, a.useCallback)(async () => {
                await u(), await i();
            }, [i]),
            refreshEntitlementList: i,
            entitlements: e,
            loading: n,
        };
    };
