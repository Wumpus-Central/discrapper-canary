n.d(t, { Z: () => h });
var e = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    o = n(481060),
    c = n(955204),
    a = n(818765),
    d = n(674680),
    E = n(181976);
let _ = (i) => {
    let { color: t } = i;
    return (0, e.jsxs)('svg', {
        width: '48',
        height: '28',
        viewBox: '0 0 55 34',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        children: [
            (0, e.jsx)('rect', {
                x: '10.1968',
                y: '7',
                width: '14.4203',
                height: '14.4203',
                transform: 'rotate(45 10.1968 7)',
                className: E.__invalid_toastBG
            }),
            (0, e.jsx)('rect', {
                x: '27.3936',
                y: '0.59021',
                width: '23.4851',
                height: '23.4851',
                transform: 'rotate(45 27.3936 0.59021)',
                className: E.__invalid_toastBG
            }),
            (0, e.jsx)('rect', {
                x: '44.5903',
                y: '7',
                width: '14.4203',
                height: '14.4203',
                transform: 'rotate(45 44.5903 7)',
                className: E.__invalid_toastBG
            }),
            (0, e.jsx)('rect', {
                x: '10.1968',
                y: '13',
                width: '6',
                height: '6',
                transform: 'rotate(45 10.1968 13)',
                fill: t
            }),
            (0, e.jsx)('path', {
                d: 'M27.3936 4.39355L34.1233 16.2873L27.3936 28.1811L20.6638 16.2873L27.3936 4.39355Z',
                fill: t
            }),
            (0, e.jsx)('rect', {
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
function h(i) {
    let { achievement: t, unlocked: n } = i,
        { name: l, description: h, rarity: L, hideDescriptionUntilUnlock: u, onAction: O } = t,
        { color: p } = (0, c.F7)(L);
    r.useEffect(() => {
        let i = setTimeout(() => {
            a.Z.playAchievementUnlockSound();
        }, 50);
        return () => {
            clearTimeout(i);
        };
    }, []);
    let T = null != O && n,
        U = T ? o.P3F : 'div';
    return (0, e.jsxs)(U, {
        className: s()(E.container, T && E.actionable),
        onClick: () => {
            T && O();
        },
        children: [
            (0, e.jsx)('div', {
                className: E.iconContainer,
                children: (0, e.jsx)(d.Z, {
                    achievementId: t.id,
                    size: d.Z.Sizes.SIZE_40,
                    unlocked: n
                })
            }),
            (0, e.jsxs)('div', {
                className: E.__invalid_nameContainer,
                children: [
                    (0, e.jsx)(o.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: l()
                    }),
                    (0, e.jsx)(o.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-secondary',
                        children: u && !n ? '?????' : h()
                    })
                ]
            }),
            (0, e.jsx)('div', {
                className: E.flair,
                children: (0, e.jsx)(_, { color: p })
            })
        ]
    });
}
