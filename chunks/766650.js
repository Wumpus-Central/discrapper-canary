n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var s = n(200651),
    r = n(192379),
    i = n(120356),
    l = n.n(i),
    a = n(642128),
    o = n(481060),
    c = n(144114),
    u = n(317175),
    d = n(149938);
function h(e) {
    let { show: t, alpha2: n, countryCode: i } = e,
        h = r.useRef(null),
        [p, m] = r.useState(0),
        [x, f] = r.useState(!1);
    r.useEffect(() => {
        function e() {
            var e, n;
            m(t && null !== (n = null === (e = h.current) || void 0 === e ? void 0 : e.getBoundingClientRect().width) && void 0 !== n ? n : 0);
        }
        return e(), window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
    }, [t, n, i]);
    let g = (0, o.useSpring)({
            width: ''.concat(p, 'px'),
            onStart: () => {
                f(!0);
            },
            onRest: () => {
                f(!1);
            }
        }),
        C = (e) => {
            c.Z.setCountryCode(e);
        };
    return (0, s.jsx)(o.Popout, {
        position: 'top',
        renderPopout: (e) =>
            (0, s.jsx)(u.Z, {
                className: d.popout,
                onClick: (t) => {
                    C(t), e.closePopout();
                }
            }),
        children: (e) =>
            (0, s.jsx)('div', {
                className: l()(d.outerContainer, { [d.hidden]: !(t || x) }),
                children: (0, s.jsx)(a.animated.div, {
                    className: d.container,
                    style: g,
                    children: (0, s.jsxs)('div', {
                        className: d.innerContainer,
                        ref: h,
                        children: [
                            (0, s.jsxs)(o.Clickable, {
                                ...e,
                                className: d.countryCode,
                                children: [n, ' ', i]
                            }),
                            (0, s.jsx)('div', { className: d.separator })
                        ]
                    })
                })
            })
    });
}
