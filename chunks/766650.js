n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var s = n(200651),
    r = n(192379),
    i = n(120356),
    o = n.n(i),
    l = n(666912),
    a = n(481060),
    c = n(144114),
    u = n(317175),
    d = n(149938);
function h(e) {
    let { show: t, alpha2: n, countryCode: i } = e,
        h = r.useRef(null),
        [p, m] = r.useState(0),
        [f, g] = r.useState(!1);
    r.useEffect(() => {
        function e() {
            var e, n;
            m(t && null !== (n = null === (e = h.current) || void 0 === e ? void 0 : e.getBoundingClientRect().width) && void 0 !== n ? n : 0);
        }
        return e(), window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
    }, [t, n, i]);
    let x = (0, a.useSpring)({
            width: ''.concat(p, 'px'),
            onStart: () => {
                g(!0);
            },
            onRest: () => {
                g(!1);
            }
        }),
        C = (e) => {
            c.Z.setCountryCode(e);
        };
    return (0, s.jsx)(a.Popout, {
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
                className: o()(d.outerContainer, { [d.hidden]: !(t || f) }),
                children: (0, s.jsx)(l.animated.div, {
                    className: d.container,
                    style: x,
                    children: (0, s.jsxs)('div', {
                        className: d.innerContainer,
                        ref: h,
                        children: [
                            (0, s.jsxs)(a.Clickable, {
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
