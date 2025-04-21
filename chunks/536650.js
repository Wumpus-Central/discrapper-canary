n.d(t, { Z: () => _ }), n(388685);
var i = n(200651),
    r = n(192379),
    l = n(392711),
    o = n(780384),
    a = n(481060),
    s = n(410030),
    c = n(220082),
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
function _(e) {
    let { application: t, context: n, name: _, iconURL: y, scrollerRef: x, sectionName: C } = e,
        v = (0, o.ap)((0, s.ZP)()),
        g = r.useRef(null),
        j = r.useRef(null),
        P = r.useRef(null),
        N = r.useRef(null),
        E = (0, a.dQu)(a.TVs.colors.BG_BASE_PRIMARY).hex(),
        O = (0, c.ZP)('number' == typeof y ? '' : y, null != E ? E : ''),
        A = r.useMemo(() => {
            var e, t;
            let n = (0, l.compact)([u.Z.parseHexString(O), u.Z.parseHexString(v ? '#000000' : '#ffffff')]);
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
                : O;
        }, [O, v]),
        I = b(g),
        S = b(j),
        T = r.useCallback(() => {
            var e, t, n, i;
            let r = x.current,
                o = g.current,
                a = P.current,
                s = null == N ? void 0 : N.current,
                c = parseInt(null != (e = null == I ? void 0 : I.height) ? e : ''),
                u = parseInt(null != (t = null == S ? void 0 : S.height) ? t : '');
            if (null != r && null != o && null != a && !isNaN(c) && !isNaN(u)) {
                let e = null != (n = r.scrollTop) ? n : 0,
                    t = 0 !== r.scrollHeight ? r.scrollHeight : u + 20,
                    d = 0 !== r.clientHeight ? r.clientHeight : u + 20,
                    p = u - c,
                    m = (0, l.clamp)(t - d, p + 1, u + 20),
                    f = p === m ? 1 : (0, l.clamp)((e - p) / (m - p), 0, 1);
                (o.style.filter = 'brightness('.concat(1 + ((v ? 1.4 : 0.6) - 1) * f, ')')),
                    (o.style.backgroundColor = 'color-mix(in oklab,'
                        .concat(O, ' ')
                        .concat((1 - f) * 100, '%, ')
                        .concat(A, ')')),
                    (a.style.opacity = ''.concat(0 + +f)),
                    (a.style.transform = 'translateY('.concat((i = c / 4) + (0 - i) * f, 'px)')),
                    null != s && (s.style.opacity = ''.concat(1 + -1 * f));
            }
        }, [A, O, null == S ? void 0 : S.height, v, x, null == I ? void 0 : I.height]);
    return (
        r.useEffect(() => {
            T();
        }, [T, v]),
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
                                ref: g
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: h.backButtonContainer,
                            children: (0, i.jsx)(m.Z, { className: h.headerButton })
                        }),
                        (0, i.jsx)('div', {
                            className: h.nameContainer,
                            children: (0, i.jsx)(a.X6q, {
                                ref: P,
                                className: h.textApplicationName,
                                variant: 'heading-lg/extrabold',
                                children: _
                            })
                        })
                    ]
                }),
                (0, p.BQ)(t)
                    ? (0, i.jsx)('div', {
                          ref: N,
                          className: h.moreMenuButtonContainer,
                          children: (0, i.jsx)(f.Z, {
                              application: t,
                              context: n,
                              className: h.headerButton,
                              sectionName: C
                          })
                      })
                    : null,
                (0, i.jsx)('div', {
                    ref: j,
                    className: h.bannerBackground,
                    style: { backgroundColor: O }
                })
            ]
        })
    );
}
