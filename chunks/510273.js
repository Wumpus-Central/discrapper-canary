n.d(t, { Z: () => E }), n(266796);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(481060),
    a = n(955204),
    c = n(818765),
    u = n(674680),
    d = n(575740);
let _ = (e) => {
    let { color: t } = e;
    return (0, r.jsxs)('svg', {
        width: '48',
        height: '28',
        viewBox: '0 0 55 34',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        children: [
            (0, r.jsx)('rect', {
                x: '10.1968',
                y: '7',
                width: '14.4203',
                height: '14.4203',
                transform: 'rotate(45 10.1968 7)',
                className: d.__invalid_toastBG
            }),
            (0, r.jsx)('rect', {
                x: '27.3936',
                y: '0.59021',
                width: '23.4851',
                height: '23.4851',
                transform: 'rotate(45 27.3936 0.59021)',
                className: d.__invalid_toastBG
            }),
            (0, r.jsx)('rect', {
                x: '44.5903',
                y: '7',
                width: '14.4203',
                height: '14.4203',
                transform: 'rotate(45 44.5903 7)',
                className: d.__invalid_toastBG
            }),
            (0, r.jsx)('rect', {
                x: '10.1968',
                y: '13',
                width: '6',
                height: '6',
                transform: 'rotate(45 10.1968 13)',
                fill: t
            }),
            (0, r.jsx)('path', {
                d: 'M27.3936 4.39355L34.1233 16.2873L27.3936 28.1811L20.6638 16.2873L27.3936 4.39355Z',
                fill: t
            }),
            (0, r.jsx)('rect', {
                x: '44.5903',
                y: '13',
                width: '6',
                height: '6',
                transform: 'rotate(45 44.5903 13)',
                fill: t
            })
        ]
    });
};
function E(e) {
    let { achievement: t, unlocked: n } = e,
        { name: l, description: E, rarity: p, hideDescriptionUntilUnlock: h, onAction: f } = t,
        { color: m } = (0, a.F7)(p);
    i.useEffect(() => {
        let e = setTimeout(() => {
            c.Z.playAchievementUnlockSound();
        }, 50);
        return () => {
            clearTimeout(e);
        };
    }, []);
    let O = null != f && n,
        N = O ? s.P3F : 'div';
    return (0, r.jsxs)(N, {
        className: o()(d.container, O && d.actionable),
        onClick: () => {
            O && f();
        },
        children: [
            (0, r.jsx)('div', {
                className: d.iconContainer,
                children: (0, r.jsx)(u.Z, {
                    achievementId: t.id,
                    size: u.Z.Sizes.SIZE_40,
                    unlocked: n
                })
            }),
            (0, r.jsxs)('div', {
                className: d.__invalid_nameContainer,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: l()
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-secondary',
                        children: h && !n ? '?????' : E()
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: d.flair,
                children: (0, r.jsx)(_, { color: m })
            })
        ]
    });
}
