n.d(t, { Z: () => _ }), n(388685);
var i = n(255367),
    r = n(73800),
    l = n(392711),
    o = n(780384),
    a = n(481060),
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
function _(e) {
    let { application: t, context: n, name: _, iconURL: C, scrollerRef: v, sectionName: x } = e,
        y = (0, o.ap)((0, c.ZP)()),
        g = r.useRef(null),
        N = r.useRef(null),
        j = r.useRef(null),
        P = r.useRef(null),
        E = (0, a.dQu)(a.TVs.colors.BG_BASE_PRIMARY).hex(),
        A = (0, s.ZP)('number' == typeof C ? '' : C, null != E ? E : ''),
        I = r.useMemo(() => {
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
        O = b(g),
        S = b(N),
        T = r.useCallback(() => {
            var e, t, n, i;
            let r = v.current,
                o = g.current,
                a = j.current,
                c = null == P ? void 0 : P.current,
                s = parseInt(null != (e = null == O ? void 0 : O.height) ? e : ''),
                u = parseInt(null != (t = null == S ? void 0 : S.height) ? t : '');
            if (null != r && null != o && null != a && !isNaN(s) && !isNaN(u)) {
                let e = null != (n = r.scrollTop) ? n : 0,
                    t = 0 !== r.scrollHeight ? r.scrollHeight : u + 20,
                    d = 0 !== r.clientHeight ? r.clientHeight : u + 20,
                    p = u - s,
                    m = (0, l.clamp)(t - d, p + 1, u + 20),
                    f = p === m ? 1 : (0, l.clamp)((e - p) / (m - p), 0, 1);
                (o.style.filter = 'brightness('.concat(1 + ((y ? 1.4 : 0.6) - 1) * f, ')')),
                    (o.style.backgroundColor = 'color-mix(in oklab,'
                        .concat(A, ' ')
                        .concat((1 - f) * 100, '%, ')
                        .concat(I, ')')),
                    (a.style.opacity = ''.concat(0 + +f)),
                    (a.style.transform = 'translateY('.concat((i = s / 4) + (0 - i) * f, 'px)')),
                    null != c && (c.style.opacity = ''.concat(1 + -1 * f));
            }
        }, [I, A, null == S ? void 0 : S.height, y, v, null == O ? void 0 : O.height]);
    return (
        r.useEffect(() => {
            T();
        }, [T, y]),
        r.useEffect(() => {
            let e = v.current,
                t = () => {
                    T();
                };
            return (
                null == e || e.addEventListener('scroll', t),
                () => {
                    null == e || e.removeEventListener('scroll', t);
                }
            );
        }, [v, T]),
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
                                ref: j,
                                className: h.textApplicationName,
                                variant: 'heading-lg/extrabold',
                                children: _
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
                              sectionName: x
                          })
                      })
                    : null,
                (0, i.jsx)('div', {
                    ref: N,
                    className: h.bannerBackground,
                    style: { backgroundColor: A }
                })
            ]
        })
    );
}
