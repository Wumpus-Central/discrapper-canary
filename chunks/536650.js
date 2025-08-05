(n.d(t, { Z: () => y }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(392711),
    o = n(780384),
    s = n(481060),
    l = n(410030),
    c = n(220082),
    u = n(564334),
    d = n(302221),
    f = n(783097),
    _ = n(772606),
    p = n(488977),
    h = n(614266);
let m = 20;
function g(e, t, n) {
    return t === n ? 1 : (0, a.clamp)((e - t) / (n - t), 0, 1);
}
function E(e, t, n) {
    return e + (t - e) * n;
}
function b(e) {
    let [t, n] = i.useState(void 0);
    return (
        i.useEffect(() => {
            null != e.current && n(getComputedStyle(e.current));
        }, [e]),
        t
    );
}
function y(e) {
    let { application: t, context: n, name: y, iconURL: O, scrollerRef: v, sectionName: I } = e,
        T = (0, o.ap)((0, l.ZP)()),
        S = i.useRef(null),
        A = i.useRef(null),
        N = i.useRef(null),
        C = i.useRef(null),
        w = (0, s.dQu)(s.TVs.colors.BACKGROUND_BASE_LOW).hex(),
        R = (0, c.ZP)('number' == typeof O ? '' : O, null != w ? w : ''),
        P = i.useMemo(() => {
            var e, t;
            let n = (0, a.compact)([u.Z.parseHexString(R), u.Z.parseHexString(T ? '#000000' : '#ffffff')]);
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
                : R;
        }, [R, T]),
        D = b(S),
        L = b(A),
        x = i.useCallback(() => {
            var e, t, n;
            let r = v.current,
                i = S.current,
                o = N.current,
                s = null == C ? void 0 : C.current,
                l = parseInt(null != (e = null == D ? void 0 : D.height) ? e : ''),
                c = parseInt(null != (t = null == L ? void 0 : L.height) ? t : '');
            if (null != r && null != i && null != o && !isNaN(l) && !isNaN(c)) {
                let e = null != (n = r.scrollTop) ? n : 0,
                    t = 0 !== r.scrollHeight ? r.scrollHeight : c + m,
                    u = 0 !== r.clientHeight ? r.clientHeight : c + m,
                    d = c - l,
                    f = (0, a.clamp)(t - u, d + 1, c + m),
                    _ = g(e, d, f);
                ((i.style.filter = 'brightness('.concat(E(1, T ? 1.4 : 0.6, _), ')')),
                    (i.style.backgroundColor = 'color-mix(in oklab,'
                        .concat(R, ' ')
                        .concat((1 - _) * 100, '%, ')
                        .concat(P, ')')),
                    (o.style.opacity = ''.concat(E(0, 1, _))),
                    (o.style.transform = 'translateY('.concat(E(l / 4, 0, _), 'px)')),
                    null != s && (s.style.opacity = ''.concat(E(1, 0, _))));
            }
        }, [P, R, null == L ? void 0 : L.height, T, v, null == D ? void 0 : D.height]);
    return (
        i.useEffect(() => {
            x();
        }, [x, T]),
        i.useEffect(() => {
            let e = v.current,
                t = () => {
                    x();
                };
            return (
                null == e || e.addEventListener('scroll', t),
                () => {
                    null == e || e.removeEventListener('scroll', t);
                }
            );
        }, [v, x]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: h.stickyContainer,
                    children: [
                        (0, r.jsx)('div', {
                            className: h.stickyBannerContainer,
                            children: (0, r.jsx)('div', {
                                className: h.stickyBanner,
                                ref: S
                            })
                        }),
                        (0, r.jsx)('div', {
                            className: h.backButtonContainer,
                            children: (0, r.jsx)(_.Z, { className: h.headerButton })
                        }),
                        (0, r.jsx)('div', {
                            className: h.nameContainer,
                            children: (0, r.jsx)(s.X6q, {
                                ref: N,
                                className: h.textApplicationName,
                                variant: 'heading-lg/extrabold',
                                children: y
                            })
                        })
                    ]
                }),
                (0, f.BQ)(t)
                    ? (0, r.jsx)('div', {
                          ref: C,
                          className: h.moreMenuButtonContainer,
                          children: (0, r.jsx)(p.Z, {
                              application: t,
                              context: n,
                              className: h.headerButton,
                              sectionName: I
                          })
                      })
                    : null,
                (0, r.jsx)('div', {
                    ref: A,
                    className: h.bannerBackground,
                    style: { backgroundColor: R }
                })
            ]
        })
    );
}
