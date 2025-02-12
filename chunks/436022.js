n.d(r, { default: () => d }), n(47120);
var i = n(200651),
    l = n(192379),
    e = n(481060),
    s = n(355467),
    o = n(362786),
    a = n(388032),
    u = n(541678);
let c = {
    [o.HZ.GIFTING_REFUND]: () => a.intl.string(a.t.o9vzKy),
    [o.HZ.BUYERS_REMORSE]: () => a.intl.string(a.t['OaU+ER']),
    [o.HZ.WRONG_PURCHASE]: () => a.intl.string(a.t.eAeOKC),
    [o.HZ.FORGOT_TO_CANCEL]: () => a.intl.string(a.t.IoDJdX),
    [o.HZ.SERVER_BOOSTING_COOLDOWN]: () => a.intl.string(a.t.MGTxUl),
    [o.HZ.USER_CONFUSION]: () => a.intl.string(a.t.PY5tHx),
    [o.HZ.WANT_TO_SWITCH_TIERS]: () => a.intl.string(a.t['o+aUCg']),
    [o.HZ.DONT_NEED]: () => a.intl.string(a.t['R++9BA']),
    [o.HZ.OTHER]: () => a.intl.string(a.t['sVo/9/'])
};
function d(t) {
    let r,
        { payment: n, reportProblemUrl: d, onClose: x, ...m } = t,
        [h, p] = l.useState(null),
        [E, g] = l.useState(!1),
        [O, _] = l.useState(null);
    r = E
        ? (0, i.jsx)(e.$jN, {})
        : null != O
          ? (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(e.Text, {
                        variant: 'text-md/normal',
                        className: u.refundErrorTitle,
                        children: a.intl.format(a.t['1LaEh4'], { error: O })
                    }),
                    (0, i.jsx)(e.Text, {
                        className: u.refundErrorSupport,
                        variant: 'text-sm/normal',
                        children: a.intl.format(a.t.cugISU, { supportUrl: d })
                    })
                ]
            })
          : (0, i.jsxs)('div', {
                className: u.body,
                children: [
                    (0, i.jsx)(e.q4e, {
                        options: Object.entries(c)
                            .sort((t, r) => {
                                let [n] = t,
                                    [i] = r;
                                return Number(n) === o.HZ.OTHER ? 1 : Number(i) === o.HZ.OTHER ? -1 : 0;
                            })
                            .map((t) => {
                                let [r, n] = t;
                                return {
                                    value: parseInt(r),
                                    label: n()
                                };
                            }),
                        onChange: (t) => p(t),
                        value: h,
                        placeholder: a.intl.string(a.t['SQsI/P'])
                    }),
                    (0, i.jsxs)(e.Text, {
                        className: u.notice,
                        variant: 'text-sm/normal',
                        children: [a.intl.string(a.t.hZ2ql5), ' ', n.isPremiumSubscription || n.isPremiumGuildSubscription || n.isPremiumGift ? a.intl.string(a.t.IOkTho) : null]
                    })
                ]
            });
    let b = null == h || E || null != O;
    return (0, i.jsxs)(e.Y0X, {
        ...m,
        children: [
            (0, i.jsx)(e.xBx, {
                separator: !1,
                children: (0, i.jsx)(e.X6q, {
                    variant: 'heading-lg/semibold',
                    children: null != O ? a.intl.string(a.t['UleS9/']) : a.intl.string(a.t.RK9GKC)
                })
            }),
            (0, i.jsx)(e.hzk, { children: r }),
            (0, i.jsxs)(e.mzw, {
                children: [
                    (0, i.jsx)(e.zxk, {
                        type: 'submit',
                        color: e.zxk.Colors.RED,
                        onClick: async () => {
                            if (!b && null != h) {
                                g(!0), _(null);
                                try {
                                    await (0, s.Os)(n.id, h), x();
                                } catch (t) {
                                    _(t.body.message);
                                } finally {
                                    g(!1);
                                }
                            }
                        },
                        disabled: b,
                        autoFocus: !0,
                        children: a.intl.string(a.t.geKm7u)
                    }),
                    (0, i.jsx)(e.zxk, {
                        type: 'button',
                        look: e.zxk.Looks.LINK,
                        color: e.zxk.Colors.PRIMARY,
                        onClick: () => {
                            x();
                        },
                        children: a.intl.string(a.t.oEAioK)
                    })
                ]
            })
        ]
    });
}
