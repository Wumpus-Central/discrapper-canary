n.d(t, { Z: () => v }), n(388685);
var r = n(255367),
    l = n(73800),
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
    let { percent: t, animate: n, interactionEnabled: o, backgroundColor: v, preloadedBuffers: g, duration: E, maxSeekableTime: b, onClick: O, onScrubBack: h, onScrubForward: S } = e,
        [C, j] = l.useState(null),
        [_, y] = l.useState(null),
        [x, D] = l.useState(null),
        [P, T] = l.useState(!1),
        N = l.useRef(null),
        k = (e) => {
            (N.current = e), j(e);
        };
    l.useEffect(() => {
        null != C && (null == b ? D(null) : D(f(b, E, C)));
    }, [C, b, E]);
    let I = (0, c.Z)((e) => {
            k(e.contentRect);
        }),
        A = (0, s.y)(I);
    l.useLayoutEffect(() => {
        null != A.current && k(A.current.getBoundingClientRect());
    }, [A]),
        l.useEffect(() => {
            let e = () => {
                null != A.current && k(A.current.getBoundingClientRect());
            };
            return window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
        }, [A]);
    let w = (e) => {
            y(e.clientX);
        },
        L = l.useCallback(
            (e) => {
                let { key: t } = e;
                t === d.mR.ArrowLeft && null != h ? (e.preventDefault(), e.stopPropagation(), h()) : t === d.mR.ArrowRight && null != S && (e.preventDefault(), e.stopPropagation(), S());
            },
            [h, S]
        ),
        R = null != _ && null != C ? p(_, C, E) : 0,
        M = (0, u.yv)(R),
        V = null != C ? C.right - f((t / 100) * E, E, C) : null,
        B = null != _ && null != C ? C.right - _ : null,
        F = null != x && null != C ? C.right - x : null;
    return (0, r.jsxs)('div', {
        className: m.cont,
        ref: A,
        children: [
            (0, r.jsxs)(a.P3F, {
                className: i()(m.hitboxArea, { [m.interactionEnabled]: o }),
                ignoreKeyPress: !0,
                onClick: (e) => {
                    o && null != O && O(p(e.clientX, e.currentTarget.getBoundingClientRect(), E));
                },
                onMouseEnter: (e) => {
                    o && (null != A.current && k(A.current.getBoundingClientRect()), T(!0), w(e));
                },
                onMouseLeave: (e) => {
                    o && (T(!1), y(null));
                },
                onMouseMove: (e) => {
                    o && P && w(e);
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
                                      className: i()(m.buffer, { [m.bufferHovered]: P }),
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
                        size: P ? a.Exd.Sizes.XSMALL : a.Exd.Sizes.XXSMALL,
                        animate: n
                    }),
                    P &&
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
                    P &&
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
