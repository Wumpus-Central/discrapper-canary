n.d(t, { Z: () => p }), n(388685);
var a = n(951288),
    r = n(647438),
    l = n(544891),
    i = n(755721),
    o = n(481060),
    s = n(317951),
    c = n(959546),
    d = n(625299);
let u = "/users/@me/debug/consumables/",
    m = {
        [s.FX]: "HD Streaming Potion",
        [s.D1]: "Confetti Potion",
    };
function p() {
    let e,
        [t, n] = (0, r.useState)([]),
        [p, h] = (0, r.useState)(null),
        [x, f] = (0, r.useState)(!1);
    return (
        (0, r.useEffect)(
            () => (
                (async () => {
                    try {
                        let e = (await l.tn.get(u)).body.entitlements.map((e) => c.Z.createFromServer(e));
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
                    ? (0, a.jsx)(o.Text, {
                          variant: "text-md/normal",
                          children: p,
                      })
                    : 0 === t.length
                      ? (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(o.Text, {
                                    variant: "text-lg/bold",
                                    children: "Create Entitlements",
                                }),
                                (0, a.jsx)(i.zx, {
                                    onClick:
                                        ((e = s.D1),
                                        async () => {
                                            f(!0);
                                            try {
                                                let a = await l.tn.post({
                                                        url: u,
                                                        query: { sku_id: e },
                                                        rejectWithError: !0,
                                                    }),
                                                    r = new c.Z(a.body.entitlement);
                                                n([...t, r]);
                                            } catch (e) {
                                                h("Failed to create entitlement");
                                            } finally {
                                                f(!1);
                                            }
                                        }),
                                    className: d.button,
                                    look: i.iL.OUTLINED,
                                    color: i.Tt.PRIMARY,
                                    children: "Create Confetti Entitlement",
                                }),
                                x && (0, a.jsx)(o.$jN, {}),
                            ],
                        })
                      : (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsxs)("div", {
                                    className: d.title,
                                    children: [
                                        (0, a.jsx)(o.Text, {
                                            variant: "text-lg/bold",
                                            children: "Existing Entitlements",
                                        }),
                                        (0, a.jsx)(o.hh5, {}),
                                    ],
                                }),
                                (0, a.jsx)("ul", {
                                    children: t.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            {
                                                children: (0, a.jsxs)("div", {
                                                    children: [
                                                        (0, a.jsx)(o.Text, {
                                                            selectable: !0,
                                                            variant: "text-md/normal",
                                                            children: e.id,
                                                        }),
                                                        (0, a.jsxs)(o.Text, {
                                                            selectable: !0,
                                                            variant: "text-md/normal",
                                                            children: ["Type: ", m[e.skuId]],
                                                        }),
                                                        (0, a.jsxs)(o.Text, {
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
