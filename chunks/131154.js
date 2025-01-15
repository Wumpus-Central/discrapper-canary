t.d(n, {
    Z: function () {
        return c;
    }
});
var l = t(200651);
t(192379);
var i = t(120356),
    a = t.n(i),
    r = t(481060),
    o = t(388032),
    s = t(888110);
function c(e) {
    let { guild: n, speakers: t, speakerCount: i, className: c } = e,
        d = t.slice(0, 5),
        u = d.map((e) => {
            var t, i;
            return (0, l.jsxs)(
                'div',
                {
                    className: s.speakerContainer,
                    children: [
                        (0, l.jsx)(r.Avatar, {
                            src: null == e ? void 0 : null === (t = e.user) || void 0 === t ? void 0 : t.getAvatarURL(n.id, 20),
                            size: r.AvatarSizes.SIZE_20,
                            className: s.avatar,
                            'aria-label': ''.concat(null == e ? void 0 : e.userNick, '-avatar')
                        }),
                        (0, l.jsx)('div', {
                            className: s.textInGridContainer,
                            children: (0, l.jsx)(r.Text, {
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                className: s.textInGrid,
                                children: null == e ? void 0 : e.userNick
                            })
                        })
                    ]
                },
                null == e ? void 0 : null === (i = e.user) || void 0 === i ? void 0 : i.id
            );
        }),
        m = i - d.length;
    return (0, l.jsxs)('div', {
        className: a()(s.grid, c),
        children: [
            u,
            m > 0 &&
                (0, l.jsxs)('div', {
                    className: s.speakerContainer,
                    children: [
                        (0, l.jsx)('div', {
                            className: s.iconMicrophone,
                            children: (0, l.jsx)(r.MicrophoneIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                height: 12
                            })
                        }),
                        (0, l.jsx)(r.Text, {
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            className: s.textInGrid,
                            children: o.intl.format(o.t['185ggI'], { count: m })
                        })
                    ]
                })
        ]
    });
}
