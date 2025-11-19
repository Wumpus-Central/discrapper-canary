n.d(t, { m: () => m }), n(388685);
var a = n(473749),
    l = n(544891),
    r = n(959546),
    i = n(981631),
    s = n(474936);
let o = async () =>
        (
            await l.tn.get({
                url: i.ANM.ENTITLEMENTS_FOR_APPLICATION(s.CL),
                oldFormErrors: !0,
                query: {
                    exclude_consumed: !0,
                    exclude_ended: !0,
                },
                rejectWithError: !0,
            })
        ).body.map((e) => r.Z.createFromServer(e)),
    c = async (e) => {
        await l.tn.post({
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
            await l.tn.del({
                url: t,
                rejectWithError: !0,
            });
    },
    u = async () => {
        await l.tn.post({
            url: "/debug/entitlements/fulfillment",
            rejectWithError: !1,
        });
    },
    m = () => {
        let [e, t] = a.useState([]),
            [n, l] = a.useState(!1),
            r = (0, a.useCallback)(async () => {
                try {
                    l(!0);
                    let e = await o();
                    t(e);
                } finally {
                    l(!1);
                }
            }, []),
            i = (0, a.useCallback)(
                async (e) => {
                    await c(e), await r();
                },
                [r],
            );
        return {
            grantFractionalPremium: i,
            deleteFractionalPremium: (0, a.useCallback)(
                async (e) => {
                    await d(e), await r();
                },
                [r],
            ),
            triggerNextEntitlementFulfillment: (0, a.useCallback)(async () => {
                await u(), await r();
            }, [r]),
            refreshEntitlementList: r,
            entitlements: e,
            loading: n,
        };
    };
