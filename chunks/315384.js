n.d(t, { Z: () => m }), n(47120);
var r = n(200651),
    a = n(192379),
    i = n(544891),
    l = n(481060),
    o = n(317951),
    s = n(959546),
    c = n(248366);
let d = '/users/@me/debug/consumables/',
    u = {
        [o.FX]: 'HD Streaming Potion',
        [o.D1]: 'Confetti Potion'
    };
function m() {
    let e;
    let [t, n] = (0, a.useState)([]),
        [m, h] = (0, a.useState)(null),
        [x, f] = (0, a.useState)(!1);
    return (
        (0, a.useEffect)(
            () => (
                (async () => {
                    try {
                        let e = (await i.tn.get(d)).body.entitlements.map((e) => s.Z.createFromServer(e));
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
        ),
        (0, r.jsx)('div', {
            className: c.panel,
            children:
                null != m
                    ? (0, r.jsx)(l.Text, {
                          variant: 'text-md/normal',
                          children: m
                      })
                    : 0 === t.length
                      ? (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(l.Text, {
                                    variant: 'text-lg/bold',
                                    children: 'Create Entitlements'
                                }),
                                (0, r.jsx)(l.zxk, {
                                    onClick:
                                        ((e = o.D1),
                                        async () => {
                                            f(!0);
                                            try {
                                                let r = await i.tn.post({
                                                        url: d,
                                                        query: { sku_id: e },
                                                        rejectWithError: !0
                                                    }),
                                                    a = new s.Z(r.body.entitlement);
                                                n([...t, a]);
                                            } catch (e) {
                                                h('Failed to create entitlement');
                                            } finally {
                                                f(!1);
                                            }
                                        }),
                                    className: c.button,
                                    look: l.iLD.OUTLINED,
                                    color: l.Ttl.PRIMARY,
                                    children: 'Create Confetti Entitlement'
                                }),
                                x && (0, r.jsx)(l.$jN, {})
                            ]
                        })
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)('div', {
                                    className: c.title,
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            variant: 'text-lg/bold',
                                            children: 'Existing Entitlements'
                                        }),
                                        (0, r.jsx)(l.hh5, {})
                                    ]
                                }),
                                (0, r.jsx)('ul', {
                                    children: t.map((e) =>
                                        (0, r.jsx)(
                                            'li',
                                            {
                                                children: (0, r.jsxs)('div', {
                                                    children: [
                                                        (0, r.jsx)(l.Text, {
                                                            selectable: !0,
                                                            variant: 'text-md/normal',
                                                            children: e.id
                                                        }),
                                                        (0, r.jsxs)(l.Text, {
                                                            selectable: !0,
                                                            variant: 'text-md/normal',
                                                            children: ['Type: ', u[e.skuId]]
                                                        }),
                                                        (0, r.jsxs)(l.Text, {
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
