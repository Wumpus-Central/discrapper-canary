(n.d(t, { Z: () => v }), n(388685));
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
function f(e, t, n) {
    return n * (Math.max(e - t.left, 0) / t.width);
}
function p(e, t, n) {
    return n.left + (e / t) * n.width;
}
function v(e) {
    let { percent: t, animate: n, interactionEnabled: o, backgroundColor: v, preloadedBuffers: g, duration: b, maxSeekableTime: E, onClick: O, onScrubBack: C, onScrubForward: h } = e,
        [S, j] = l.useState(null),
        [y, _] = l.useState(null),
        [x, D] = l.useState(null),
        [T, P] = l.useState(!1),
        N = l.useRef(null),
        k = (e) => {
            ((N.current = e), j(e));
        };
    l.useEffect(() => {
        null != S && (null == E ? D(null) : D(p(E, b, S)));
    }, [S, E, b]);
    let w = (0, c.Z)((e) => {
            k(e.contentRect);
        }),
        I = (0, s.y)(w);
    (l.useLayoutEffect(() => {
        null != I.current && k(I.current.getBoundingClientRect());
    }, [I]),
        l.useEffect(() => {
            let e = () => {
                null != I.current && k(I.current.getBoundingClientRect());
            };
            return (window.addEventListener('resize', e), () => window.removeEventListener('resize', e));
        }, [I]));
    let A = (e) => {
            _(e.clientX);
        },
        L = l.useCallback(
            (e) => {
                let { key: t } = e;
                t === d.mR.ArrowLeft && null != C ? (e.preventDefault(), e.stopPropagation(), C()) : t === d.mR.ArrowRight && null != h && (e.preventDefault(), e.stopPropagation(), h());
            },
            [C, h]
        ),
        R = null != y && null != S ? f(y, S, b) : 0,
        M = (0, u.yv)(R),
        V = null != S ? S.right - p((t / 100) * b, b, S) : null,
        B = null != y && null != S ? S.right - y : null,
        F = null != x && null != S ? S.right - x : null;
    return (0, r.jsxs)('div', {
        className: m.cont,
        ref: I,
        children: [
            (0, r.jsxs)(a.P3F, {
                className: i()(m.hitboxArea, { [m.interactionEnabled]: o }),
                ignoreKeyPress: !0,
                onClick: (e) => {
                    o && null != O && O(f(e.clientX, e.currentTarget.getBoundingClientRect(), b));
                },
                onMouseEnter: (e) => {
                    o && (null != I.current && k(I.current.getBoundingClientRect()), P(!0), A(e));
                },
                onMouseLeave: (e) => {
                    o && (P(!1), _(null));
                },
                onMouseMove: (e) => {
                    o && T && A(e);
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
                                      className: i()(m.buffer, { [m.bufferHovered]: T }),
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
                        size: T ? a.Exd.Sizes.XSMALL : a.Exd.Sizes.XXSMALL,
                        animate: n
                    }),
                    T &&
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
                    T &&
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
