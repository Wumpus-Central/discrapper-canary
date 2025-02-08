n.d(t, { Z: () => E });
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(481060),
    o = n(955204),
    c = n(818765),
    d = n(674680),
    u = n(941253);
let _ = (e) => {
    let { color: t } = e;
    return (0, i.jsxs)('svg', {
        width: '48',
        height: '28',
        viewBox: '0 0 55 34',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        children: [
            (0, i.jsx)('rect', {
                x: '10.1968',
                y: '7',
                width: '14.4203',
                height: '14.4203',
                transform: 'rotate(45 10.1968 7)',
                className: u.__invalid_toastBG
            }),
            (0, i.jsx)('rect', {
                x: '27.3936',
                y: '0.59021',
                width: '23.4851',
                height: '23.4851',
                transform: 'rotate(45 27.3936 0.59021)',
                className: u.__invalid_toastBG
            }),
            (0, i.jsx)('rect', {
                x: '44.5903',
                y: '7',
                width: '14.4203',
                height: '14.4203',
                transform: 'rotate(45 44.5903 7)',
                className: u.__invalid_toastBG
            }),
            (0, i.jsx)('rect', {
                x: '10.1968',
                y: '13',
                width: '6',
                height: '6',
                transform: 'rotate(45 10.1968 13)',
                fill: t
            }),
            (0, i.jsx)('path', {
                d: 'M27.3936 4.39355L34.1233 16.2873L27.3936 28.1811L20.6638 16.2873L27.3936 4.39355Z',
                fill: t
            }),
            (0, i.jsx)('rect', {
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
        { name: r, description: E, rarity: h, hideDescriptionUntilUnlock: p, onAction: I } = t,
        { color: m } = (0, o.F7)(h);
    l.useEffect(() => {
        let e = setTimeout(() => {
            c.Z.playAchievementUnlockSound();
        }, 50);
        return () => {
            clearTimeout(e);
        };
    }, []);
    let C = null != I && n,
        T = C ? a.P3F : 'div';
    return (0, i.jsxs)(T, {
        className: s()(u.container, C && u.actionable),
        onClick: () => {
            C && I();
        },
        children: [
            (0, i.jsx)('div', {
                className: u.iconContainer,
                children: (0, i.jsx)(d.Z, {
                    achievementId: t.id,
                    size: d.Z.Sizes.SIZE_40,
                    unlocked: n
                })
            }),
            (0, i.jsxs)('div', {
                className: u.__invalid_nameContainer,
                children: [
                    (0, i.jsx)(a.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: r()
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-secondary',
                        children: p && !n ? '?????' : E()
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: u.flair,
                children: (0, i.jsx)(_, { color: m })
            })
        ]
    });
}
