n.d(t, { Z: () => f }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(392711),
    o = n(780384),
    s = n(481060),
    r = n(410030),
    c = n(220082),
    d = n(564334),
    u = n(302221),
    m = n(783097),
    p = n(772606),
    h = n(488977),
    v = n(867020);
function x(e) {
    let [t, n] = l.useState(void 0);
    return (
        l.useEffect(() => {
            null != e.current && n(getComputedStyle(e.current));
        }, [e]),
        t
    );
}
function f(e) {
    let { application: t, context: n, name: f, iconURL: N, scrollerRef: C, sectionName: E } = e,
        A = (0, o.ap)((0, r.ZP)()),
        I = l.useRef(null),
        g = l.useRef(null),
        _ = l.useRef(null),
        P = l.useRef(null),
        j = (0, s.dQu)(s.TVs.colors.BG_BASE_PRIMARY).hex(),
        y = (0, c.ZP)('number' == typeof N ? '' : N, null != j ? j : ''),
        T = l.useMemo(() => {
            var e, t;
            let n = (0, a.compact)([d.Z.parseHexString(y), d.Z.parseHexString(A ? '#000000' : '#ffffff')]);
            return null !==
                (t =
                    null ===
                        (e = (0, u.k8)({
                            colors: n,
                            ratio: 5,
                            saturationFactor: 0.6
                        })) || void 0 === e
                        ? void 0
                        : e.toHexString()) && void 0 !== t
                ? t
                : y;
        }, [y, A]),
        S = x(I),
        b = x(g),
        L = l.useCallback(() => {
            var e, t, n, i;
            let l = C.current,
                o = I.current,
                s = _.current,
                r = null == P ? void 0 : P.current,
                c = parseInt(null !== (e = null == S ? void 0 : S.height) && void 0 !== e ? e : ''),
                d = parseInt(null !== (t = null == b ? void 0 : b.height) && void 0 !== t ? t : '');
            if (null != l && null != o && null != s && !isNaN(c) && !isNaN(d)) {
                let e = null !== (n = l.scrollTop) && void 0 !== n ? n : 0,
                    t = 0 !== l.scrollHeight ? l.scrollHeight : d + 20,
                    u = 0 !== l.clientHeight ? l.clientHeight : d + 20,
                    m = d - c,
                    p = (0, a.clamp)(t - u, m + 1, d + 20),
                    h = m === p ? 1 : (0, a.clamp)((e - m) / (p - m), 0, 1);
                (o.style.filter = 'brightness('.concat(1 + ((A ? 1.4 : 0.6) - 1) * h, ')')),
                    (o.style.backgroundColor = 'color-mix(in oklab,'
                        .concat(y, ' ')
                        .concat((1 - h) * 100, '%, ')
                        .concat(T, ')')),
                    (s.style.opacity = ''.concat(0 + 1 * h)),
                    (s.style.transform = 'translateY('.concat((i = c / 4) + (0 - i) * h, 'px)')),
                    null != r && (r.style.opacity = ''.concat(1 + -1 * h));
            }
        }, [T, y, null == b ? void 0 : b.height, A, C, null == S ? void 0 : S.height]);
    return (
        l.useEffect(() => {
            L();
        }, [L, A]),
        l.useEffect(() => {
            let e = C.current,
                t = () => {
                    L();
                };
            return (
                null == e || e.addEventListener('scroll', t),
                () => {
                    null == e || e.removeEventListener('scroll', t);
                }
            );
        }, [C, L]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: v.stickyContainer,
                    children: [
                        (0, i.jsx)('div', {
                            className: v.stickyBannerContainer,
                            children: (0, i.jsx)('div', {
                                className: v.stickyBanner,
                                ref: I
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: v.backButtonContainer,
                            children: (0, i.jsx)(p.Z, { className: v.headerButton })
                        }),
                        (0, i.jsx)('div', {
                            className: v.nameContainer,
                            children: (0, i.jsx)(s.X6q, {
                                ref: _,
                                className: v.textApplicationName,
                                variant: 'heading-lg/extrabold',
                                children: f
                            })
                        })
                    ]
                }),
                (0, m.BQ)(t)
                    ? (0, i.jsx)('div', {
                          ref: P,
                          className: v.moreMenuButtonContainer,
                          children: (0, i.jsx)(h.Z, {
                              application: t,
                              context: n,
                              className: v.headerButton,
                              sectionName: E
                          })
                      })
                    : null,
                (0, i.jsx)('div', {
                    ref: g,
                    className: v.bannerBackground,
                    style: { backgroundColor: y }
                })
            ]
        })
    );
}
