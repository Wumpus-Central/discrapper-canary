n.d(t, { Z: () => m }), n(388685);
var a = n(200651),
    r = n(192379),
    l = n(544891),
    i = n(481060),
    s = n(317951),
    o = n(959546),
    c = n(776254);
let d = '/users/@me/debug/consumables/',
    u = {
        [s.FX]: 'HD Streaming Potion',
        [s.D1]: 'Confetti Potion'
    };
function m() {
    let e,
        [t, n] = (0, r.useState)([]),
        [m, x] = (0, r.useState)(null),
        [h, p] = (0, r.useState)(!1);
    return (
        (0, r.useEffect)(
            () => (
                (async () => {
                    try {
                        let e = (await l.tn.get(d)).body.entitlements.map((e) => o.Z.createFromServer(e));
                        n(e);
                    } catch (e) {
                        x('Failed to fetch entitlements');
                    }
                })(),
                () => {
                    n([]), x(null);
                }
            ),
            []
        ),
        (0, a.jsx)('div', {
            className: c.panel,
            children:
                null != m
                    ? (0, a.jsx)(i.Text, {
                          variant: 'text-md/normal',
                          children: m
                      })
                    : 0 === t.length
                      ? (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(i.Text, {
                                    variant: 'text-lg/bold',
                                    children: 'Create Entitlements'
                                }),
                                (0, a.jsx)(i.zxk, {
                                    onClick:
                                        ((e = s.D1),
                                        async () => {
                                            p(!0);
                                            try {
                                                let a = await l.tn.post({
                                                        url: d,
                                                        query: { sku_id: e },
                                                        rejectWithError: !0
                                                    }),
                                                    r = new o.Z(a.body.entitlement);
                                                n([...t, r]);
                                            } catch (e) {
                                                x('Failed to create entitlement');
                                            } finally {
                                                p(!1);
                                            }
                                        }),
                                    className: c.button,
                                    look: i.iLD.OUTLINED,
                                    color: i.Ttl.PRIMARY,
                                    children: 'Create Confetti Entitlement'
                                }),
                                h && (0, a.jsx)(i.$jN, {})
                            ]
                        })
                      : (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsxs)('div', {
                                    className: c.title,
                                    children: [
                                        (0, a.jsx)(i.Text, {
                                            variant: 'text-lg/bold',
                                            children: 'Existing Entitlements'
                                        }),
                                        (0, a.jsx)(i.hh5, {})
                                    ]
                                }),
                                (0, a.jsx)('ul', {
                                    children: t.map((e) =>
                                        (0, a.jsx)(
                                            'li',
                                            {
                                                children: (0, a.jsxs)('div', {
                                                    children: [
                                                        (0, a.jsx)(i.Text, {
                                                            selectable: !0,
                                                            variant: 'text-md/normal',
                                                            children: e.id
                                                        }),
                                                        (0, a.jsxs)(i.Text, {
                                                            selectable: !0,
                                                            variant: 'text-md/normal',
                                                            children: ['Type: ', u[e.skuId]]
                                                        }),
                                                        (0, a.jsxs)(i.Text, {
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
    );
}
