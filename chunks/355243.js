n.d(t, { Z: () => f }), n(47120);
var r = n(200651),
    l = n(192379),
    o = n(120356),
    i = n.n(o),
    a = n(481060),
    s = n(393903),
    c = n(604162),
    u = n(420212),
    d = n(650762);
function m(e, t, n) {
    return n * (Math.max(e - t.left, 0) / t.width);
}
function p(e, t, n) {
    return n.left + (e / t) * n.width;
}
function f(e) {
    let { percent: t, animate: n, interactionEnabled: o, backgroundColor: f, preloadedBuffers: v, duration: g, maxSeekableTime: b, onClick: E, onScrubBack: O, onScrubForward: h } = e,
        [S, C] = l.useState(null),
        [j, y] = l.useState(null),
        [_, x] = l.useState(null),
        [N, D] = l.useState(!1),
        P = l.useRef(null),
        T = (e) => {
            (P.current = e), C(e);
        };
    l.useEffect(() => {
        null != S && (null == b ? x(null) : x(p(b, g, S)));
    }, [S, b, g]);
    let k = (0, s.y)(() => {
        null != k.current && T(k.current.getBoundingClientRect());
    });
    l.useLayoutEffect(() => {
        null != k.current && T(k.current.getBoundingClientRect());
    }, [k]),
        l.useEffect(() => {
            let e = () => {
                null != k.current && T(k.current.getBoundingClientRect());
            };
            return window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
        }, [k]);
    let w = (e) => {
            y(e.clientX);
        },
        A = l.useCallback(
            (e) => {
                let { key: t } = e;
                t === u.mR.ArrowLeft && null != O ? (e.preventDefault(), e.stopPropagation(), O()) : t === u.mR.ArrowRight && null != h && (e.preventDefault(), e.stopPropagation(), h());
            },
            [O, h]
        ),
        I = null != j && null != S ? m(j, S, g) : 0,
        L = (0, c.yv)(I),
        R = null != S ? S.right - p((t / 100) * g, g, S) : null,
        M = null != j && null != S ? S.right - j : null,
        V = null != _ && null != S ? S.right - _ : null;
    return (0, r.jsxs)('div', {
        className: d.cont,
        ref: k,
        children: [
            (0, r.jsxs)(a.P3F, {
                className: i()(d.hitboxArea, { [d.interactionEnabled]: o }),
                ignoreKeyPress: !0,
                onClick: (e) => {
                    o && null != E && E(m(e.clientX, e.currentTarget.getBoundingClientRect(), g));
                },
                onMouseEnter: (e) => {
                    o && (null != k.current && T(k.current.getBoundingClientRect()), D(!0), w(e));
                },
                onMouseLeave: (e) => {
                    o && (D(!1), y(null));
                },
                onMouseMove: (e) => {
                    o && N && w(e);
                },
                onKeyDown: A,
                tabIndex: o ? void 0 : -1,
                focusProps: {
                    offset: {
                        top: 12,
                        bottom: 12
                    }
                },
                children: [
                    null == v
                        ? void 0
                        : v.map((e) =>
                              (0, r.jsx)(
                                  'div',
                                  {
                                      className: i()(d.buffer, { [d.bufferHovered]: N }),
                                      style: {
                                          width: ''.concat(100 * e.size, '%'),
                                          left: ''.concat(100 * e.start, '%')
                                      }
                                  },
                                  ''.concat(e.start, ':').concat(e.size)
                              )
                          ),
                    !o &&
                        null != V &&
                        V > 0 &&
                        (0, r.jsx)('div', {
                            className: d.seekableBar,
                            style: {
                                right: null != V ? ''.concat(V, 'px') : 'auto',
                                opacity: +(null != V)
                            }
                        }),
                    (0, r.jsx)(a.Exd, {
                        className: d.progress,
                        percent: t,
                        foregroundColor: '#FFFFFF',
                        backgroundColor: null != f ? f : void 0,
                        size: N ? a.Exd.Sizes.XSMALL : a.Exd.Sizes.XXSMALL,
                        animate: n
                    }),
                    N &&
                        null != L &&
                        (0, r.jsx)(a.Text, {
                            className: d.timeDisplay,
                            variant: 'text-xs/normal',
                            style: {
                                right: null != M ? ''.concat(M - 10, 'px') : 'auto',
                                color: '#FFFFFF'
                            },
                            children: L
                        }),
                    N &&
                        o &&
                        null != R &&
                        (0, r.jsx)('div', {
                            className: d.grabber,
                            style: { right: ''.concat(R - 6, 'px') }
                        })
                ]
            }),
            (0, r.jsx)('div', {
                className: d.progressGlow,
                style: { width: ''.concat(t, '%') }
            })
        ]
    });
}
