n.d(t, { o: () => m }), n(896048);
var a = n(64700),
    l = n(562465),
    i = n(557009),
    r = n(652215),
    s = n(788868);
let o = async () =>
        (
            await l.Bo.get({
                url: r.Rsh.ENTITLEMENTS_FOR_APPLICATION(s.tv),
                oldFormErrors: !0,
                query: {
                    exclude_consumed: !0,
                    exclude_ended: !0,
                },
                rejectWithError: !0,
            })
        ).body.map((e) => i.A.createFromServer(e)),
    c = async (e) => {
        await l.Bo.post({
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
            await l.Bo.del({
                url: t,
                rejectWithError: !0,
            });
    },
    u = async () => {
        await l.Bo.post({
            url: "/debug/entitlements/fulfillment",
            rejectWithError: !1,
        });
    },
    m = () => {
        let [e, t] = a.useState([]),
            [n, l] = a.useState(!1),
            i = (0, a.useCallback)(async () => {
                try {
                    l(!0);
                    let e = await o();
                    t(e);
                } finally {
                    l(!1);
                }
            }, []),
            r = (0, a.useCallback)(
                async (e) => {
                    await c(e), await i();
                },
                [i],
            );
        return {
            grantFractionalPremium: r,
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
