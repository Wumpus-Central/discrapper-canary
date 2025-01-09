n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var r = n(200651),
    a = n(192379),
    l = n(544891),
    i = n(481060),
    o = n(959546),
    s = n(215023),
    c = n(695063);
let d = '/users/@me/debug/consumables/',
    u = {
        [s.FX]: 'HD Streaming Potion',
        [s.D1]: 'Confetti Potion'
    };
function m() {
    let e,
        [t, n] = (0, a.useState)([]),
        [m, h] = (0, a.useState)(null),
        [x, f] = (0, a.useState)(!1);
    (0, a.useEffect)(
        () => (
            (async () => {
                try {
                    let e = (await l.tn.get(d)).body.entitlements.map((e) => o.Z.createFromServer(e));
                    n(e);
                } catch (e) {
                    h('Failed to fetch entitlements');
                }
            })(),
            () => {
                n([]), h(null);
            }
        ),
        []
    );
    return (0, r.jsx)('div', {
        className: c.panel,
        children:
            null != m
                ? (0, r.jsx)(i.Text, {
                      variant: 'text-md/normal',
                      children: m
                  })
                : (0, r.jsx)(r.Fragment, {
                      children:
                          0 === t.length
                              ? (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(i.Text, {
                                            variant: 'text-lg/bold',
                                            children: 'Create Entitlements'
                                        }),
                                        (0, r.jsx)(i.Button, {
                                            onClick:
                                                ((e = s.D1),
                                                async () => {
                                                    f(!0);
                                                    try {
                                                        let r = await l.tn.post({
                                                                url: d,
                                                                query: { sku_id: e },
                                                                rejectWithError: !0
                                                            }),
                                                            a = new o.Z(r.body.entitlement);
                                                        n([...t, a]);
                                                    } catch (e) {
                                                        h('Failed to create entitlement');
                                                    } finally {
                                                        f(!1);
                                                    }
                                                }),
                                            className: c.button,
                                            look: i.ButtonLooks.OUTLINED,
                                            color: i.ButtonColors.PRIMARY,
                                            children: 'Create Confetti Entitlement'
                                        }),
                                        x && (0, r.jsx)(i.Spinner, {})
                                    ]
                                })
                              : (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: c.title,
                                            children: [
                                                (0, r.jsx)(i.Text, {
                                                    variant: 'text-lg/bold',
                                                    children: 'Existing Entitlements'
                                                }),
                                                (0, r.jsx)(i.PotionIcon, {})
                                            ]
                                        }),
                                        (0, r.jsx)('ul', {
                                            children: t.map((e) =>
                                                (0, r.jsx)(
                                                    'li',
                                                    {
                                                        children: (0, r.jsxs)('div', {
                                                            children: [
                                                                (0, r.jsx)(i.Text, {
                                                                    selectable: !0,
                                                                    variant: 'text-md/normal',
                                                                    children: e.id
                                                                }),
                                                                (0, r.jsxs)(i.Text, {
                                                                    selectable: !0,
                                                                    variant: 'text-md/normal',
                                                                    children: ['Type: ', u[e.skuId]]
                                                                }),
                                                                (0, r.jsxs)(i.Text, {
                                                                    selectable: !0,
                                                                    variant: 'text-md/normal',
                                                                    children: ['Consumed? : ', e.consumed ? 'Yes' : 'No']
                                                                })
                                                            ]
                                                        })
                                                    },
                                                    e.id
                                                )
                                            )
                                        })
                                    ]
                                })
                  })
    });
}
