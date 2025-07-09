(a.d(t, { Z: () => x }), a(388685));
var n = a(255367),
    r = a(73800),
    l = a(544891),
    i = a(755721),
    s = a(481060),
    o = a(317951),
    c = a(959546),
    d = a(208220);
let u = '/users/@me/debug/consumables/',
    m = {
        [o.FX]: 'HD Streaming Potion',
        [o.D1]: 'Confetti Potion'
    };
function x() {
    let e,
        [t, a] = (0, r.useState)([]),
        [x, p] = (0, r.useState)(null),
        [h, b] = (0, r.useState)(!1);
    return (
        (0, r.useEffect)(
            () => (
                (async () => {
                    try {
                        let e = (await l.tn.get(u)).body.entitlements.map((e) => c.Z.createFromServer(e));
                        a(e);
                    } catch (e) {
                        p('Failed to fetch entitlements');
                    }
                })(),
                () => {
                    (a([]), p(null));
                }
            ),
            []
        ),
        (0, n.jsx)('div', {
            className: d.panel,
            children:
                null != x
                    ? (0, n.jsx)(s.Text, {
                          variant: 'text-md/normal',
                          children: x
                      })
                    : 0 === t.length
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(s.Text, {
                                    variant: 'text-lg/bold',
                                    children: 'Create Entitlements'
                                }),
                                (0, n.jsx)(i.zx, {
                                    onClick:
                                        ((e = o.D1),
                                        async () => {
                                            b(!0);
                                            try {
                                                let n = await l.tn.post({
                                                        url: u,
                                                        query: { sku_id: e },
                                                        rejectWithError: !0
                                                    }),
                                                    r = new c.Z(n.body.entitlement);
                                                a([...t, r]);
                                            } catch (e) {
                                                p('Failed to create entitlement');
                                            } finally {
                                                b(!1);
                                            }
                                        }),
                                    className: d.button,
                                    look: i.iL.OUTLINED,
                                    color: i.Tt.PRIMARY,
                                    children: 'Create Confetti Entitlement'
                                }),
                                h && (0, n.jsx)(s.$jN, {})
                            ]
                        })
                      : (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsxs)('div', {
                                    className: d.title,
                                    children: [
                                        (0, n.jsx)(s.Text, {
                                            variant: 'text-lg/bold',
                                            children: 'Existing Entitlements'
                                        }),
                                        (0, n.jsx)(s.hh5, {})
                                    ]
                                }),
                                (0, n.jsx)('ul', {
                                    children: t.map((e) =>
                                        (0, n.jsx)(
                                            'li',
                                            {
                                                children: (0, n.jsxs)('div', {
                                                    children: [
                                                        (0, n.jsx)(s.Text, {
                                                            selectable: !0,
                                                            variant: 'text-md/normal',
                                                            children: e.id
                                                        }),
                                                        (0, n.jsxs)(s.Text, {
                                                            selectable: !0,
                                                            variant: 'text-md/normal',
                                                            children: ['Type: ', m[e.skuId]]
                                                        }),
                                                        (0, n.jsxs)(s.Text, {
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
