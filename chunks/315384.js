n.d(t, { Z: () => p }), n(388685);
var a = n(54381),
    l = n(473749),
    r = n(544891),
    i = n(755721),
    s = n(481060),
    o = n(317951),
    c = n(959546),
    d = n(838303);
let u = "/users/@me/debug/consumables/",
    m = {
        [o.FX]: "HD Streaming Potion",
        [o.D1]: "Confetti Potion",
    };
function p() {
    let e,
        [t, n] = (0, l.useState)([]),
        [p, h] = (0, l.useState)(null),
        [x, g] = (0, l.useState)(!1);
    return (
        (0, l.useEffect)(
            () => (
                (async () => {
                    try {
                        let e = (await r.tn.get(u)).body.entitlements.map((e) => c.Z.createFromServer(e));
                        n(e);
                    } catch (e) {
                        h("Failed to fetch entitlements");
                    }
                })(),
                () => {
                    n([]), h(null);
                }
            ),
            [],
        ),
        (0, a.jsx)("div", {
            className: d.panel,
            children:
                null != p
                    ? (0, a.jsx)(s.Text, {
                          variant: "text-md/normal",
                          children: p,
                      })
                    : 0 === t.length
                      ? (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(s.Text, {
                                    variant: "text-lg/bold",
                                    children: "Create Entitlements",
                                }),
                                (0, a.jsx)(i.zx, {
                                    onClick:
                                        ((e = o.D1),
                                        async () => {
                                            g(!0);
                                            try {
                                                let a = await r.tn.post({
                                                        url: u,
                                                        query: { sku_id: e },
                                                        rejectWithError: !0,
                                                    }),
                                                    l = new c.Z(a.body.entitlement);
                                                n([...t, l]);
                                            } catch (e) {
                                                h("Failed to create entitlement");
                                            } finally {
                                                g(!1);
                                            }
                                        }),
                                    className: d.button,
                                    look: i.iL.OUTLINED,
                                    color: i.Tt.PRIMARY,
                                    children: "Create Confetti Entitlement",
                                }),
                                x && (0, a.jsx)(s.$jN, {}),
                            ],
                        })
                      : (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsxs)("div", {
                                    className: d.title,
                                    children: [
                                        (0, a.jsx)(s.Text, {
                                            variant: "text-lg/bold",
                                            children: "Existing Entitlements",
                                        }),
                                        (0, a.jsx)(s.hh5, {}),
                                    ],
                                }),
                                (0, a.jsx)("ul", {
                                    children: t.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            {
                                                children: (0, a.jsxs)("div", {
                                                    children: [
                                                        (0, a.jsx)(s.Text, {
                                                            selectable: !0,
                                                            variant: "text-md/normal",
                                                            children: e.id,
                                                        }),
                                                        (0, a.jsxs)(s.Text, {
                                                            selectable: !0,
                                                            variant: "text-md/normal",
                                                            children: ["Type: ", m[e.skuId]],
                                                        }),
                                                        (0, a.jsxs)(s.Text, {
                                                            selectable: !0,
                                                            variant: "text-md/normal",
                                                            children: ["Consumed? : ", e.consumed ? "Yes" : "No"],
                                                        }),
                                                    ],
                                                }),
                                            },
                                            e.id,
                                        ),
                                    ),
                                }),
                            ],
                        }),
        })
    );
}
