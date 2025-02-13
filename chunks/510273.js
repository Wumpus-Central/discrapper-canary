i.d(e, { Z: () => E });
var n = i(200651),
    r = i(192379),
    s = i(120356),
    o = i.n(s),
    l = i(481060),
    a = i(955204),
    c = i(818765),
    d = i(674680),
    h = i(73285);
let u = (t) => {
    let { color: e } = t;
    return (0, n.jsxs)('svg', {
        width: '48',
        height: '28',
        viewBox: '0 0 55 34',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        children: [
            (0, n.jsx)('rect', {
                x: '10.1968',
                y: '7',
                width: '14.4203',
                height: '14.4203',
                transform: 'rotate(45 10.1968 7)',
                className: h.__invalid_toastBG
            }),
            (0, n.jsx)('rect', {
                x: '27.3936',
                y: '0.59021',
                width: '23.4851',
                height: '23.4851',
                transform: 'rotate(45 27.3936 0.59021)',
                className: h.__invalid_toastBG
            }),
            (0, n.jsx)('rect', {
                x: '44.5903',
                y: '7',
                width: '14.4203',
                height: '14.4203',
                transform: 'rotate(45 44.5903 7)',
                className: h.__invalid_toastBG
            }),
            (0, n.jsx)('rect', {
                x: '10.1968',
                y: '13',
                width: '6',
                height: '6',
                transform: 'rotate(45 10.1968 13)',
                fill: e
            }),
            (0, n.jsx)('path', {
                d: 'M27.3936 4.39355L34.1233 16.2873L27.3936 28.1811L20.6638 16.2873L27.3936 4.39355Z',
                fill: e
            }),
            (0, n.jsx)('rect', {
                x: '44.5903',
                y: '13',
                width: '6',
                height: '6',
                transform: 'rotate(45 44.5903 13)',
                fill: e
            })
        ]
    });
};
function E(t) {
    let { achievement: e, unlocked: i } = t,
        { name: s, description: E, rarity: g, hideDescriptionUntilUnlock: _, onAction: L } = e,
        { color: C } = (0, a.F7)(g);
    r.useEffect(() => {
        let t = setTimeout(() => {
            c.Z.playAchievementUnlockSound();
        }, 50);
        return () => {
            clearTimeout(t);
        };
    }, []);
    let m = null != L && i,
        p = m ? l.P3F : 'div';
    return (0, n.jsxs)(p, {
        className: o()(h.container, m && h.actionable),
        onClick: () => {
            m && L();
        },
        children: [
            (0, n.jsx)('div', {
                className: h.iconContainer,
                children: (0, n.jsx)(d.Z, {
                    achievementId: e.id,
                    size: d.Z.Sizes.SIZE_40,
                    unlocked: i
                })
            }),
            (0, n.jsxs)('div', {
                className: h.__invalid_nameContainer,
                children: [
                    (0, n.jsx)(l.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: s()
                    }),
                    (0, n.jsx)(l.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-secondary',
                        children: _ && !i ? '?????' : E()
                    })
                ]
            }),
            (0, n.jsx)('div', {
                className: h.flair,
                children: (0, n.jsx)(u, { color: C })
            })
        ]
    });
}
