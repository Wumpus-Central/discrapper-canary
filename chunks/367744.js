n.d(t, { o: () => m });
var a = n(64700),
    s = n(562465),
    i = n(557009),
    l = n(652215),
    r = n(788868);
let o = async () =>
        (
            await s.Bo.get({
                url: l.Rsh.ENTITLEMENTS_FOR_APPLICATION(r.tv),
                oldFormErrors: !0,
                query: { exclude_consumed: !0, exclude_ended: !0 },
                rejectWithError: !0,
            })
        ).body.map((e) => i.A.createFromServer(e)),
    d = async (e) => {
        await s.Bo.post({
            url: "/debug/entitlements/fractional-premium",
            body: { count: 1, sku_id: e },
            rejectWithError: !1,
        });
    },
    c = async (e) => {
        let t = "/debug/entitlements/fractional-premium";
        null != e && (t = `${t}/${e}`), await s.Bo.del({ url: t, rejectWithError: !0 });
    },
    u = async () => {
        await s.Bo.post({ url: "/debug/entitlements/fulfillment", rejectWithError: !1 });
    },
    m = () => {
        let [e, t] = a.useState([]),
            [n, s] = a.useState(!1),
            i = (0, a.useCallback)(async () => {
                try {
                    s(!0);
                    let e = await o();
                    t(e);
                } finally {
                    s(!1);
                }
            }, []),
            l = (0, a.useCallback)(
                async (e) => {
                    await d(e), await i();
                },
                [i],
            );
        return {
            grantFractionalPremium: l,
            deleteFractionalPremium: (0, a.useCallback)(
                async (e) => {
                    await c(e), await i();
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
