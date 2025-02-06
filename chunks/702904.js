n.d(t, { Z: () => _ }), n(47120);
var a = n(200651),
    l = n(192379),
    r = n(120356),
    i = n.n(r),
    o = n(399606),
    s = n(544891),
    c = n(481060),
    d = n(355467),
    u = n(244526),
    m = n(853872),
    h = n(246992),
    x = n(941469),
    p = n(509345);
let f = [
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
function _() {
    let [e, t] = l.useState('pm_card_us'),
        n = Object.values((0, o.e7)([m.Z], () => m.Z.paymentSources)),
        r = async () => {
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
        _ = async () => {
            await s.tn.del({
                url: '/debug/rate-limits',
                rejectWithError: !1
            }),
                window.location.reload();
        };
    return (
        l.useEffect(() => {
            (0, d.tZ)();
        }, []),
        (0, a.jsx)(c.zJl, {
            className: i()(x.panel),
            children: (0, a.jsxs)('div', {
                className: p.panelInner,
                children: [
                    (0, a.jsxs)(c.Text, {
                        style: { marginBottom: '16px' },
                        variant: 'text-lg/bold',
                        children: [' ', 'Manage Payment Sources', ' ']
                    }),
                    (0, a.jsxs)('div', {
                        className: p.buttons,
                        children: [
                            (0, a.jsx)(c.Text, {
                                variant: 'text-md/normal',
                                children: ' Card Type '
                            }),
                            (0, a.jsx)(c.PhF, {
                                serialize: (e) => e,
                                isSelected: (t) => t === e,
                                options: f,
                                select: t,
                                popoutLayerContext: h.O$
                            }),
                            (0, a.jsx)(c.zxk, {
                                size: c.zxk.Sizes.SMALL,
                                onClick: r,
                                children: 'Create Stripe Credit Card'
                            }),
                            n.length > 0 &&
                                (0, a.jsx)(c.zxk, {
                                    size: c.zxk.Sizes.SMALL,
                                    onClick: u,
                                    children: 'Delete All Payment Sources'
                                }),
                            (0, a.jsx)(c.zxk, {
                                size: c.zxk.Sizes.SMALL,
                                onClick: _,
                                children: 'Reset API Rate limits and reload app'
                            })
                        ]
                    }),
                    (0, a.jsx)(c.Text, {
                        style: {
                            marginTop: '16px',
                            marginBottom: '16px'
                        },
                        variant: 'text-md/normal',
                        children: 'Existing Payment Sources'
                    }),
                    n.map((e) => (0, a.jsx)(b, { paymentSource: e }, e.id))
                ]
            })
        })
    );
}
function b(e) {
    let { paymentSource: t } = e;
    return (0, a.jsxs)('div', {
        className: p.inputRow,
        children: [
            (0, a.jsx)(
                u.Z,
                {
                    locale: 'en-US',
                    paymentSource: t,
                    showLabels: !0,
                    showPaymentSourceIcon: !0
                },
                t.id
            ),
            (0, a.jsx)('img', {
                alt: t.country,
                style: {
                    marginRight: 5,
                    height: 25
                },
                src: v(t.country)
            })
        ]
    });
}
let g = ['AN', 'MI', 'TP'],
    v = (e) => {
        if (null == e) return '';
        if (g.includes(e)) return 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f30e.svg';
        let t = e
            .toUpperCase()
            .split('')
            .map((e) => (127397 + e.charCodeAt(0)).toString(16))
            .join('-');
        return 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/'.concat(t, '.svg');
    };
