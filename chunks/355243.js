n.d(t, { Z: () => v }), n(388685);
var r = n(200651),
    l = n(192379),
    o = n(120356),
    i = n.n(o),
    a = n(481060),
    s = n(393903),
    c = n(448986),
    u = n(604162),
    d = n(420212),
    m = n(650762);
function p(e, t, n) {
    return n * (Math.max(e - t.left, 0) / t.width);
}
function f(e, t, n) {
    return n.left + (e / t) * n.width;
}
function v(e) {
    let { percent: t, animate: n, interactionEnabled: o, backgroundColor: v, preloadedBuffers: g, duration: b, maxSeekableTime: E, onClick: O, onScrubBack: h, onScrubForward: S } = e,
        [C, j] = l.useState(null),
        [y, _] = l.useState(null),
        [x, N] = l.useState(null),
        [D, P] = l.useState(!1),
        T = l.useRef(null),
        k = (e) => {
            (T.current = e), j(e);
        };
    l.useEffect(() => {
        null != C && (null == E ? N(null) : N(f(E, b, C)));
    }, [C, E, b]);
    let w = (0, c.Z)((e) => {
            k(e.contentRect);
        }),
        A = (0, s.y)(w);
    l.useLayoutEffect(() => {
        null != A.current && k(A.current.getBoundingClientRect());
    }, [A]),
        l.useEffect(() => {
            let e = () => {
                null != A.current && k(A.current.getBoundingClientRect());
            };
            return window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
        }, [A]);
    let I = (e) => {
            _(e.clientX);
        },
        L = l.useCallback(
            (e) => {
                let { key: t } = e;
                t === d.mR.ArrowLeft && null != h ? (e.preventDefault(), e.stopPropagation(), h()) : t === d.mR.ArrowRight && null != S && (e.preventDefault(), e.stopPropagation(), S());
            },
            [h, S]
        ),
        R = null != y && null != C ? p(y, C, b) : 0,
        M = (0, u.yv)(R),
        V = null != C ? C.right - f((t / 100) * b, b, C) : null,
        B = null != y && null != C ? C.right - y : null,
        F = null != x && null != C ? C.right - x : null;
    return (0, r.jsxs)('div', {
        className: m.cont,
        ref: A,
        children: [
            (0, r.jsxs)(a.P3F, {
                className: i()(m.hitboxArea, { [m.interactionEnabled]: o }),
                ignoreKeyPress: !0,
                onClick: (e) => {
                    o && null != O && O(p(e.clientX, e.currentTarget.getBoundingClientRect(), b));
                },
                onMouseEnter: (e) => {
                    o && (null != A.current && k(A.current.getBoundingClientRect()), P(!0), I(e));
                },
                onMouseLeave: (e) => {
                    o && (P(!1), _(null));
                },
                onMouseMove: (e) => {
                    o && D && I(e);
                },
                onKeyDown: L,
                tabIndex: o ? void 0 : -1,
                focusProps: {
                    offset: {
                        top: 12,
                        bottom: 12
                    }
                },
                children: [
                    null == g
                        ? void 0
                        : g.map((e) =>
                              (0, r.jsx)(
                                  'div',
                                  {
                                      className: i()(m.buffer, { [m.bufferHovered]: D }),
                                      style: {
                                          width: ''.concat(100 * e.size, '%'),
                                          left: ''.concat(100 * e.start, '%')
                                      }
                                  },
                                  ''.concat(e.start, ':').concat(e.size)
                              )
                          ),
                    !o &&
                        null != F &&
                        F > 0 &&
                        (0, r.jsx)('div', {
                            className: m.seekableBar,
                            style: {
                                right: null != F ? ''.concat(F, 'px') : 'auto',
                                opacity: +(null != F)
                            }
                        }),
                    (0, r.jsx)(a.Exd, {
                        className: m.progress,
                        percent: t,
                        foregroundColor: '#FFFFFF',
                        backgroundColor: null != v ? v : void 0,
                        size: D ? a.Exd.Sizes.XSMALL : a.Exd.Sizes.XXSMALL,
                        animate: n
                    }),
                    D &&
                        null != M &&
                        (0, r.jsx)(a.Text, {
                            className: m.timeDisplay,
                            variant: 'text-xs/normal',
                            style: {
                                right: null != B ? ''.concat(B - 10, 'px') : 'auto',
                                color: '#FFFFFF'
                            },
                            children: M
                        }),
                    D &&
                        o &&
                        null != V &&
                        (0, r.jsx)('div', {
                            className: m.grabber,
                            style: { right: ''.concat(V - 6, 'px') }
                        })
                ]
            }),
            (0, r.jsx)('div', {
                className: m.progressGlow,
                style: { width: ''.concat(t, '%') }
            })
        ]
    });
}
