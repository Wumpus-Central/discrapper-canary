t.d(n, {
    Z: function () {
        return l;
    }
});
var i = t(200651);
t(192379);
var a = t(120356),
    r = t.n(a),
    c = t(481060),
    o = t(388032),
    d = t(184617);
function l(e) {
    let { guild: n, speakers: t, speakerCount: a, className: l } = e,
        s = t.slice(0, 5),
        _ = s.map((e) => {
            var t, a;
            return (0, i.jsxs)(
                'div',
                {
                    className: d.speakerContainer,
                    children: [
                        (0, i.jsx)(c.Avatar, {
                            src: null == e ? void 0 : null === (t = e.user) || void 0 === t ? void 0 : t.getAvatarURL(n.id, 20),
                            size: c.AvatarSizes.SIZE_20,
                            className: d.avatar,
                            'aria-label': ''.concat(null == e ? void 0 : e.userNick, '-avatar')
                        }),
                        (0, i.jsx)('div', {
                            className: d.textInGridContainer,
                            children: (0, i.jsx)(c.Text, {
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                className: d.textInGrid,
                                children: null == e ? void 0 : e.userNick
                            })
                        })
                    ]
                },
                null == e ? void 0 : null === (a = e.user) || void 0 === a ? void 0 : a.id
            );
        }),
        u = a - s.length;
    return (0, i.jsxs)('div', {
        className: r()(d.grid, l),
        children: [
            _,
            u > 0 &&
                (0, i.jsxs)('div', {
                    className: d.speakerContainer,
                    children: [
                        (0, i.jsx)('div', {
                            className: d.iconMicrophone,
                            children: (0, i.jsx)(c.MicrophoneIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                height: 12
                            })
                        }),
                        (0, i.jsx)(c.Text, {
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            className: d.textInGrid,
                            children: o.intl.format(o.t['185ggI'], { count: u })
                        })
                    ]
                })
        ]
    });
}
