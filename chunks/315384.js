n.d(t, { Z: () => h }), n(47120);
var a = n(200651),
    r = n(192379),
    l = n(544891),
    i = n(481060),
    o = n(317951),
    s = n(959546),
    c = n(587970);
let d = '/users/@me/debug/consumables/',
    u = {
        [o.FX]: 'HD Streaming Potion',
        [o.D1]: 'Confetti Potion'
    };
function h() {
    let e;
    let [t, n] = (0, r.useState)([]),
        [h, m] = (0, r.useState)(null),
        [x, _] = (0, r.useState)(!1);
    return (
        (0, r.useEffect)(
            () => (
                (async () => {
                    try {
                        let e = (await l.tn.get(d)).body.entitlements.map((e) => s.Z.createFromServer(e));
                        n(e);
                    } catch (e) {
                        m('Failed to fetch entitlements');
                    }
                })(),
                () => {
                    n([]), m(null);
                }
            ),
            []
        ),
        (0, a.jsx)('div', {
            className: c.panel,
            children:
                null != h
                    ? (0, a.jsx)(i.Text, {
                          variant: 'text-md/normal',
                          children: h
                      })
                    : (0, a.jsx)(a.Fragment, {
                          children:
                              0 === t.length
                                  ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(i.Text, {
                                                variant: 'text-lg/bold',
                                                children: 'Create Entitlements'
                                            }),
                                            (0, a.jsx)(i.zxk, {
                                                onClick:
                                                    ((e = o.D1),
                                                    async () => {
                                                        _(!0);
                                                        try {
                                                            let a = await l.tn.post({
                                                                    url: d,
                                                                    query: { sku_id: e },
                                                                    rejectWithError: !0
                                                                }),
                                                                r = new s.Z(a.body.entitlement);
                                                            n([...t, r]);
                                                        } catch (e) {
                                                            m('Failed to create entitlement');
                                                        } finally {
                                                            _(!1);
                                                        }
                                                    }),
                                                className: c.button,
                                                look: i.iLD.OUTLINED,
                                                color: i.Ttl.PRIMARY,
                                                children: 'Create Confetti Entitlement'
                                            }),
                                            x && (0, a.jsx)(i.$jN, {})
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
        })
    );
}
