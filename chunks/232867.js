n.d(t, { m: () => m }), n(388685);
var a = n(647438),
    i = n(544891),
    l = n(959546),
    r = n(981631),
    s = n(474936);
let o = async () =>
        (
            await i.tn.get({
                url: r.ANM.ENTITLEMENTS_FOR_APPLICATION(s.CL),
                oldFormErrors: !0,
                query: {
                    exclude_consumed: !0,
                    exclude_ended: !0,
                },
                rejectWithError: !0,
            })
        ).body.map((e) => l.Z.createFromServer(e)),
    c = async (e) => {
        await i.tn.post({
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
            await i.tn.del({
                url: t,
                rejectWithError: !0,
            });
    },
    u = async () => {
        await i.tn.post({
            url: "/debug/entitlements/fulfillment",
            rejectWithError: !1,
        });
    },
    m = () => {
        let [e, t] = a.useState([]),
            [n, i] = a.useState(!1),
            l = (0, a.useCallback)(async () => {
                try {
                    i(!0);
                    let e = await o();
                    t(e);
                } finally {
                    i(!1);
                }
            }, []),
            r = (0, a.useCallback)(
                async (e) => {
                    await c(e), await l();
                },
                [l],
            );
        return {
            grantFractionalPremium: r,
            deleteFractionalPremium: (0, a.useCallback)(
                async (e) => {
                    await d(e), await l();
                },
                [l],
            ),
            triggerNextEntitlementFulfillment: (0, a.useCallback)(async () => {
                await u(), await l();
            }, [l]),
            refreshEntitlementList: l,
            entitlements: e,
            loading: n,
        };
    };
