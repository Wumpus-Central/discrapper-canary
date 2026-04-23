a.d(t, { o: () => m });
var n = a(64700),
    l = a(562465),
    i = a(557009),
    s = a(652215),
    r = a(788868);
let o = async () =>
        (
            await l.Bo.get({
                url: s.Rsh.ENTITLEMENTS_FOR_APPLICATION(r.tv),
                oldFormErrors: !0,
                query: { exclude_consumed: !0, exclude_ended: !0 },
                rejectWithError: !0,
            })
        ).body.map((e) => i.A.createFromServer(e)),
    d = async (e) => {
        await l.Bo.post({
            url: "/debug/entitlements/fractional-premium",
            body: { count: 1, sku_id: e },
            rejectWithError: !1,
        });
    },
    c = async (e) => {
        let t = "/debug/entitlements/fractional-premium";
        null != e && (t = `${t}/${e}`), await l.Bo.del({ url: t, rejectWithError: !0 });
    },
    u = async () => {
        await l.Bo.post({ url: "/debug/entitlements/fulfillment", rejectWithError: !1 });
    },
    m = () => {
        let [e, t] = n.useState([]),
            [a, l] = n.useState(!1),
            i = (0, n.useCallback)(async () => {
                try {
                    l(!0);
                    let e = await o();
                    t(e);
                } finally {
                    l(!1);
                }
            }, []),
            s = (0, n.useCallback)(
                async (e) => {
                    await d(e), await i();
                },
                [i],
            );
        return {
            grantFractionalPremium: s,
            deleteFractionalPremium: (0, n.useCallback)(
                async (e) => {
                    await c(e), await i();
                },
                [i],
            ),
            triggerNextEntitlementFulfillment: (0, n.useCallback)(async () => {
                await u(), await i();
            }, [i]),
            refreshEntitlementList: i,
            entitlements: e,
            loading: a,
        };
    };
