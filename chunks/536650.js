n.d(t, { Z: () => C }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(392711),
    a = n(780384),
    o = n(481060),
    c = n(410030),
    s = n(220082),
    u = n(564334),
    d = n(302221),
    p = n(783097),
    m = n(772606),
    f = n(488977),
    h = n(614266);
function b(e) {
    let [t, n] = r.useState(void 0);
    return (
        r.useEffect(() => {
            null != e.current && n(getComputedStyle(e.current));
        }, [e]),
        t
    );
}
function C(e) {
    let { application: t, context: n, name: C, iconURL: _, scrollerRef: x, sectionName: v } = e,
        y = (0, a.ap)((0, c.ZP)()),
        N = r.useRef(null),
        g = r.useRef(null),
        j = r.useRef(null),
        P = r.useRef(null),
        E = (0, o.dQu)(o.TVs.colors.BG_BASE_PRIMARY).hex(),
        A = (0, s.ZP)('number' == typeof _ ? '' : _, null != E ? E : ''),
        O = r.useMemo(() => {
            var e, t;
            let n = (0, l.compact)([u.Z.parseHexString(A), u.Z.parseHexString(y ? '#000000' : '#ffffff')]);
            return null !=
                (t =
                    null ==
                    (e = (0, d.k8)({
                        colors: n,
                        ratio: 5,
                        saturationFactor: 0.6
                    }))
                        ? void 0
                        : e.toHexString())
                ? t
                : A;
        }, [A, y]),
        I = b(N),
        S = b(g),
        T = r.useCallback(() => {
            var e, t, n, i;
            let r = x.current,
                a = N.current,
                o = j.current,
                c = null == P ? void 0 : P.current,
                s = parseInt(null != (e = null == I ? void 0 : I.height) ? e : ''),
                u = parseInt(null != (t = null == S ? void 0 : S.height) ? t : '');
            if (null != r && null != a && null != o && !isNaN(s) && !isNaN(u)) {
                let e = null != (n = r.scrollTop) ? n : 0,
                    t = 0 !== r.scrollHeight ? r.scrollHeight : u + 20,
                    d = 0 !== r.clientHeight ? r.clientHeight : u + 20,
                    p = u - s,
                    m = (0, l.clamp)(t - d, p + 1, u + 20),
                    f = p === m ? 1 : (0, l.clamp)((e - p) / (m - p), 0, 1);
                (a.style.filter = 'brightness('.concat(1 + ((y ? 1.4 : 0.6) - 1) * f, ')')),
                    (a.style.backgroundColor = 'color-mix(in oklab,'
                        .concat(A, ' ')
                        .concat((1 - f) * 100, '%, ')
                        .concat(O, ')')),
                    (o.style.opacity = ''.concat(0 + +f)),
                    (o.style.transform = 'translateY('.concat((i = s / 4) + (0 - i) * f, 'px)')),
                    null != c && (c.style.opacity = ''.concat(1 + -1 * f));
            }
        }, [O, A, null == S ? void 0 : S.height, y, x, null == I ? void 0 : I.height]);
    return (
        r.useEffect(() => {
            T();
        }, [T, y]),
        r.useEffect(() => {
            let e = x.current,
                t = () => {
                    T();
                };
            return (
                null == e || e.addEventListener('scroll', t),
                () => {
                    null == e || e.removeEventListener('scroll', t);
                }
            );
        }, [x, T]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: h.stickyContainer,
                    children: [
                        (0, i.jsx)('div', {
                            className: h.stickyBannerContainer,
                            children: (0, i.jsx)('div', {
                                className: h.stickyBanner,
                                ref: N
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: h.backButtonContainer,
                            children: (0, i.jsx)(m.Z, { className: h.headerButton })
                        }),
                        (0, i.jsx)('div', {
                            className: h.nameContainer,
                            children: (0, i.jsx)(o.X6q, {
                                ref: j,
                                className: h.textApplicationName,
                                variant: 'heading-lg/extrabold',
                                children: C
                            })
                        })
                    ]
                }),
                (0, p.BQ)(t)
                    ? (0, i.jsx)('div', {
                          ref: P,
                          className: h.moreMenuButtonContainer,
                          children: (0, i.jsx)(f.Z, {
                              application: t,
                              context: n,
                              className: h.headerButton,
                              sectionName: v
                          })
                      })
                    : null,
                (0, i.jsx)('div', {
                    ref: g,
                    className: h.bannerBackground,
                    style: { backgroundColor: A }
                })
            ]
        })
    );
}
