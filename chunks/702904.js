n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(399606),
    s = n(544891),
    c = n(481060),
    d = n(355467),
    u = n(244526),
    m = n(853872),
    h = n(246992),
    x = n(941469),
    f = n(509345);
let p = [
    {
        label: 'VISA',
        value: 'pm_card_us'
    },
    {
        label: 'Mastercard',
        value: 'pm_card_mastercard'
    },
    {
        label: 'Canadian Visa',
        value: 'pm_card_ca'
    },
    {
        label: 'Mexican Visa',
        value: 'pm_card_mx'
    },
    {
        label: 'German Visa',
        value: 'pm_card_de'
    },
    {
        label: 'Brazilian Visa',
        value: 'pm_card_br'
    },
    {
        label: 'UK Visa',
        value: 'pm_card_gb'
    },
    {
        label: 'Japanese Visa',
        value: 'pm_card_jp'
    },
    {
        label: 'Malaysia Visa',
        value: 'pm_card_my'
    },
    {
        label: 'Polish Visa',
        value: 'pm_card_pl'
    }
];
function b() {
    let [e, t] = a.useState('pm_card_us'),
        n = Object.values((0, o.e7)([m.Z], () => m.Z.paymentSources)),
        l = async () => {
            let t = e;
            '' === t && (t = 'pm_card_us'),
                await s.tn.post({
                    url: '/debug/payment-source',
                    body: { token: t },
                    rejectWithError: !1
                }),
                await (0, d.tZ)();
        },
        u = async () => {
            await s.tn.del({
                url: '/debug/payment-source',
                rejectWithError: !1
            }),
                await (0, d.tZ)();
        },
        b = async () => {
            await s.tn.del({
                url: '/debug/rate-limits',
                rejectWithError: !1
            }),
                window.location.reload();
        };
    return (
        a.useEffect(() => {
            (0, d.tZ)();
        }, []),
        (0, r.jsx)(c.ScrollerThin, {
            className: i()(x.panel),
            children: (0, r.jsxs)('div', {
                className: f.panelInner,
                children: [
                    (0, r.jsxs)(c.Text, {
                        style: { marginBottom: '16px' },
                        variant: 'text-lg/bold',
                        children: [' ', 'Manage Payment Sources', ' ']
                    }),
                    (0, r.jsxs)('div', {
                        className: f.buttons,
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: 'text-md/normal',
                                children: ' Card Type '
                            }),
                            (0, r.jsx)(c.Select, {
                                serialize: (e) => e,
                                isSelected: (t) => t === e,
                                options: p,
                                select: t,
                                popoutLayerContext: h.O$
                            }),
                            (0, r.jsx)(c.Button, {
                                size: c.Button.Sizes.SMALL,
                                onClick: l,
                                children: 'Create Stripe Credit Card'
                            }),
                            n.length > 0 &&
                                (0, r.jsx)(c.Button, {
                                    size: c.Button.Sizes.SMALL,
                                    onClick: u,
                                    children: 'Delete All Payment Sources'
                                }),
                            (0, r.jsx)(c.Button, {
                                size: c.Button.Sizes.SMALL,
                                onClick: b,
                                children: 'Reset API Rate limits and reload app'
                            })
                        ]
                    }),
                    (0, r.jsx)(c.Text, {
                        style: {
                            marginTop: '16px',
                            marginBottom: '16px'
                        },
                        variant: 'text-md/normal',
                        children: 'Existing Payment Sources'
                    }),
                    n.map((e) => (0, r.jsx)(g, { paymentSource: e }, e.id))
                ]
            })
        })
    );
}
function g(e) {
    let { paymentSource: t } = e;
    return (0, r.jsxs)('div', {
        className: f.inputRow,
        children: [
            (0, r.jsx)(
                u.Z,
                {
                    locale: 'en-US',
                    paymentSource: t,
                    showLabels: !0,
                    showPaymentSourceIcon: !0
                },
                t.id
            ),
            (0, r.jsx)('img', {
                alt: t.country,
                style: {
                    marginRight: 5,
                    height: 25
                },
                src: j(t.country)
            })
        ]
    });
}
let v = ['AN', 'MI', 'TP'],
    j = (e) => {
        if (null == e) return '';
        if (v.includes(e)) return 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f30e.svg';
        let t = e
            .toUpperCase()
            .split('')
            .map((e) => (127397 + e.charCodeAt(0)).toString(16))
            .join('-');
        return 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/'.concat(t, '.svg');
    };
