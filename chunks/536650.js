(n.d(t, { Z: () => y }), n(388685));
var l = n(255367),
    i = n(73800),
    r = n(392711),
    a = n(780384),
    o = n(481060),
    s = n(410030),
    c = n(220082),
    u = n(564334),
    d = n(302221),
    p = n(783097),
    m = n(772606),
    f = n(488977),
    h = n(614266);
function v(e) {
    let [t, n] = i.useState(void 0);
    return (
        i.useEffect(() => {
            null != e.current && n(getComputedStyle(e.current));
        }, [e]),
        t
    );
}
function y(e) {
    let { application: t, context: n, name: y, iconURL: x, scrollerRef: b, sectionName: g } = e,
        j = (0, a.ap)((0, s.ZP)()),
        N = i.useRef(null),
        C = i.useRef(null),
        E = i.useRef(null),
        P = i.useRef(null),
        O = (0, o.dQu)(o.TVs.colors.BACKGROUND_BASE_LOW).hex(),
        A = (0, c.ZP)('number' == typeof x ? '' : x, null != O ? O : ''),
        I = i.useMemo(() => {
            var e, t;
            let n = (0, r.compact)([u.Z.parseHexString(A), u.Z.parseHexString(j ? '#000000' : '#ffffff')]);
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
        }, [A, j]),
        _ = v(N),
        S = v(C),
        T = i.useCallback(() => {
            var e, t, n, l;
            let i = b.current,
                a = N.current,
                o = E.current,
                s = null == P ? void 0 : P.current,
                c = parseInt(null != (e = null == _ ? void 0 : _.height) ? e : ''),
                u = parseInt(null != (t = null == S ? void 0 : S.height) ? t : '');
            if (null != i && null != a && null != o && !isNaN(c) && !isNaN(u)) {
                let e = null != (n = i.scrollTop) ? n : 0,
                    t = 0 !== i.scrollHeight ? i.scrollHeight : u + 20,
                    d = 0 !== i.clientHeight ? i.clientHeight : u + 20,
                    p = u - c,
                    m = (0, r.clamp)(t - d, p + 1, u + 20),
                    f = p === m ? 1 : (0, r.clamp)((e - p) / (m - p), 0, 1);
                ((a.style.filter = 'brightness('.concat(1 + ((j ? 1.4 : 0.6) - 1) * f, ')')),
                    (a.style.backgroundColor = 'color-mix(in oklab,'
                        .concat(A, ' ')
                        .concat((1 - f) * 100, '%, ')
                        .concat(I, ')')),
                    (o.style.opacity = ''.concat(0 + +f)),
                    (o.style.transform = 'translateY('.concat((l = c / 4) + (0 - l) * f, 'px)')),
                    null != s && (s.style.opacity = ''.concat(1 + -1 * f)));
            }
        }, [I, A, null == S ? void 0 : S.height, j, b, null == _ ? void 0 : _.height]);
    return (
        i.useEffect(() => {
            T();
        }, [T, j]),
        i.useEffect(() => {
            let e = b.current,
                t = () => {
                    T();
                };
            return (
                null == e || e.addEventListener('scroll', t),
                () => {
                    null == e || e.removeEventListener('scroll', t);
                }
            );
        }, [b, T]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)('div', {
                    className: h.stickyContainer,
                    children: [
                        (0, l.jsx)('div', {
                            className: h.stickyBannerContainer,
                            children: (0, l.jsx)('div', {
                                className: h.stickyBanner,
                                ref: N
                            })
                        }),
                        (0, l.jsx)('div', {
                            className: h.backButtonContainer,
                            children: (0, l.jsx)(m.Z, { className: h.headerButton })
                        }),
                        (0, l.jsx)('div', {
                            className: h.nameContainer,
                            children: (0, l.jsx)(o.X6q, {
                                ref: E,
                                className: h.textApplicationName,
                                variant: 'heading-lg/extrabold',
                                children: y
                            })
                        })
                    ]
                }),
                (0, p.BQ)(t)
                    ? (0, l.jsx)('div', {
                          ref: P,
                          className: h.moreMenuButtonContainer,
                          children: (0, l.jsx)(f.Z, {
                              application: t,
                              context: n,
                              className: h.headerButton,
                              sectionName: g
                          })
                      })
                    : null,
                (0, l.jsx)('div', {
                    ref: C,
                    className: h.bannerBackground,
                    style: { backgroundColor: A }
                })
            ]
        })
    );
}
