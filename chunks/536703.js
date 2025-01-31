n.d(t, { d: () => h });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(481060),
    a = n(388032),
    o = n(588245),
    c = n(772787);
let d = () =>
        (0, i.jsx)('div', {
            className: c.svgContainer,
            children: (0, i.jsx)('img', {
                src: n(39017),
                className: c.svg,
                alt: 'Quests Icon'
            })
        }),
    u = (e) =>
        (0, i.jsx)(l.zxk, {
            ...e,
            'aria-label': a.intl.string(a.t.cpT0Cg),
            look: l.zxk.Looks.BLANK,
            size: l.zxk.Sizes.NONE,
            wrapperClassName: c.closeButton,
            innerClassName: c.closeButtonInner,
            children: (0, i.jsx)(l.Dio, {
                size: 'refresh_sm',
                color: 'currentColor',
                className: c.closeButtonIcon
            })
        }),
    m = () =>
        (0, i.jsxs)('div', {
            className: c.tail,
            children: [
                (0, i.jsx)('div', { className: c.tailSpine }),
                (0, i.jsx)('div', {
                    className: c.tailTargetOuter,
                    children: (0, i.jsx)('svg', {
                        xmlns: 'http://www.w3.org/2000/svg',
                        width: '8',
                        height: '8',
                        viewBox: '0 0 8 8',
                        fill: 'none',
                        children: (0, i.jsx)('circle', {
                            cx: '50%',
                            cy: '50%',
                            r: '3',
                            className: c.tailTargetInner
                        })
                    })
                })
            ]
        }),
    h = (e) => {
        let { onClose: t, renderTail: n = !1 } = e;
        return (0, i.jsxs)('div', {
            className: r()(o.baseCardOutline, c.container),
            children: [
                (0, i.jsx)(u, { onClick: t }),
                (0, i.jsx)(d, {}),
                (0, i.jsxs)('div', {
                    className: c.content,
                    children: [
                        (0, i.jsx)('div', {
                            className: o.coachmarkTitle,
                            children: a.intl.string(a.t['3B4+wM'])
                        }),
                        (0, i.jsx)('div', {
                            className: o.coachmarkDescription,
                            children: a.intl.format(a.t.V6DQX1, { quantity: 200 })
                        })
                    ]
                }),
                n && (0, i.jsx)(m, {})
            ]
        });
    };
