n.d(t, { Z: () => d });
var i = n(200651),
    r = n(192379),
    a = n(979554),
    s = n(481060),
    o = n(436774),
    l = n(981631),
    u = n(388032),
    c = n(339506);
function d(e) {
    let { product: t, onSecondaryClick: d } = e,
        f = r.useCallback(() => {
            null != t &&
                (0, s.ZDy)(async () => {
                    let { default: e } = await n.e('43360').then(n.bind(n, 73415));
                    return (n) =>
                        (0, i.jsx)(e, {
                            collectableType: null == t ? void 0 : t.type,
                            analyticsSource: l.Sbl.PROFILE_PANEL,
                            analyticsLocation: {
                                section: l.jXE.USER_PROFILE,
                                object: l.qAy.BUTTON_CTA
                            },
                            onSecondaryClick: d,
                            ...n
                        });
                });
        }, [t, d]),
        _ = r.useMemo(() => {
            switch (null == t ? void 0 : t.type) {
                case a.Z.AVATAR_DECORATION:
                    return u.intl.format(u.t['aFR/EB'], { onClick: f });
                case a.Z.PROFILE_EFFECT:
                    return u.intl.format(u.t.eWNOND, { onClick: f });
            }
        }, [null == t ? void 0 : t.type, f]);
    return (0, i.jsxs)('div', {
        className: c.nitroUpsellContainer,
        children: [
            (0, i.jsx)(s.SrA, {
                className: c.nitroWheel,
                size: 'md',
                color: o.JX.PREMIUM_TIER_2
            }),
            (0, i.jsx)(s.Text, {
                className: c.nitroText,
                variant: 'text-md/medium',
                children: _
            })
        ]
    });
}
