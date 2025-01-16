r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(979554),
    o = r(481060),
    l = r(436774),
    u = r(981631),
    c = r(388032),
    d = r(339506);
function f(e) {
    let { product: n, onSecondaryClick: f } = e,
        _ = a.useCallback(() => {
            if (null != n)
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await r.e('43360').then(r.bind(r, 73415));
                    return (r) =>
                        (0, i.jsx)(e, {
                            collectableType: null == n ? void 0 : n.type,
                            analyticsSource: u.Sbl.PROFILE_PANEL,
                            analyticsLocation: {
                                section: u.jXE.USER_PROFILE,
                                object: u.qAy.BUTTON_CTA
                            },
                            onSecondaryClick: f,
                            ...r
                        });
                });
        }, [n, f]),
        h = a.useMemo(() => {
            switch (null == n ? void 0 : n.type) {
                case s.Z.AVATAR_DECORATION:
                    return c.intl.format(c.t['aFR/EB'], { onClick: _ });
                case s.Z.PROFILE_EFFECT:
                    return c.intl.format(c.t.eWNOND, { onClick: _ });
            }
        }, [null == n ? void 0 : n.type, _]);
    return (0, i.jsxs)('div', {
        className: d.nitroUpsellContainer,
        children: [
            (0, i.jsx)(o.NitroWheelIcon, {
                className: d.nitroWheel,
                size: 'md',
                color: l.JX.PREMIUM_TIER_2
            }),
            (0, i.jsx)(o.Text, {
                className: d.nitroText,
                variant: 'text-md/medium',
                children: h
            })
        ]
    });
}
