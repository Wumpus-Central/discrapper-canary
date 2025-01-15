n.d(e, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var s = n(200651),
    r = n(192379),
    i = n(120356),
    l = n.n(i),
    a = n(476183),
    o = n(481060),
    c = n(144114),
    u = n(317175),
    d = n(306287);
function h(t) {
    let { show: e, alpha2: n, countryCode: i } = t,
        h = r.useRef(null),
        [p, m] = r.useState(0),
        [x, f] = r.useState(!1);
    r.useEffect(() => {
        function t() {
            var t, n;
            m(e && null !== (n = null === (t = h.current) || void 0 === t ? void 0 : t.getBoundingClientRect().width) && void 0 !== n ? n : 0);
        }
        return t(), window.addEventListener('resize', t), () => window.removeEventListener('resize', t);
    }, [e, n, i]);
    let g = (0, o.useSpring)({
            width: ''.concat(p, 'px'),
            onStart: () => {
                f(!0);
            },
            onRest: () => {
                f(!1);
            }
        }),
        C = (t) => {
            c.Z.setCountryCode(t);
        };
    return (0, s.jsx)(o.Popout, {
        position: 'top',
        renderPopout: (t) =>
            (0, s.jsx)(u.Z, {
                className: d.popout,
                onClick: (e) => {
                    C(e), t.closePopout();
                }
            }),
        children: (t) =>
            (0, s.jsx)('div', {
                className: l()(d.outerContainer, { [d.hidden]: !(e || x) }),
                children: (0, s.jsx)(a.animated.div, {
                    className: d.container,
                    style: g,
                    children: (0, s.jsxs)('div', {
                        className: d.innerContainer,
                        ref: h,
                        children: [
                            (0, s.jsxs)(o.Clickable, {
                                ...t,
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
