s.d(t, { Z: () => h }), s(47120);
var n = s(200651),
    r = s(192379),
    i = s(120356),
    l = s.n(i),
    a = s(642128),
    o = s(481060),
    c = s(144114),
    d = s(317175),
    u = s(950274);
function h(e) {
    let { show: t, alpha2: s, countryCode: i } = e,
        h = r.useRef(null),
        [m, p] = r.useState(0),
        [x, g] = r.useState(!1);
    r.useEffect(() => {
        function e() {
            var e, s;
            p(t && null !== (s = null === (e = h.current) || void 0 === e ? void 0 : e.getBoundingClientRect().width) && void 0 !== s ? s : 0);
        }
        return e(), window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
    }, [t, s, i]);
    let f = (0, o.q_F)({
            width: ''.concat(m, 'px'),
            onStart: () => {
                g(!0);
            },
            onRest: () => {
                g(!1);
            }
        }),
        j = (e) => {
            c.Z.setCountryCode(e);
        };
    return (0, n.jsx)(o.yRy, {
        position: 'top',
        renderPopout: (e) =>
            (0, n.jsx)(d.Z, {
                className: u.popout,
                onClick: (t) => {
                    j(t), e.closePopout();
                }
            }),
        children: (e) =>
            (0, n.jsx)('div', {
                className: l()(u.outerContainer, { [u.hidden]: !(t || x) }),
                children: (0, n.jsx)(a.animated.div, {
                    className: u.container,
                    style: f,
                    children: (0, n.jsxs)('div', {
                        className: u.innerContainer,
                        ref: h,
                        children: [
                            (0, n.jsxs)(o.P3F, {
                                ...e,
                                className: u.countryCode,
                                children: [s, ' ', i]
                            }),
                            (0, n.jsx)('div', { className: u.separator })
                        ]
                    })
                })
            })
    });
}
