n.d(t, { Z: () => f }), n(47120);
var r = n(200651),
    o = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(481060),
    a = n(393903),
    c = n(604162),
    u = n(420212),
    d = n(898997);
function m(e, t, n) {
    return n * (Math.max(e - t.left, 0) / t.width);
}
function p(e, t, n) {
    return n.left + (e / t) * n.width;
}
function f(e) {
    let { percent: t, animate: n, interactionEnabled: i, backgroundColor: f, preloadedBuffers: v, duration: E, maxSeekableTime: g, onClick: b, onScrubBack: O, onScrubForward: S } = e,
        [j, C] = o.useState(null),
        [h, y] = o.useState(null),
        [x, _] = o.useState(null),
        [N, D] = o.useState(!1),
        P = o.useRef(null),
        T = (e) => {
            (P.current = e), C(e);
        };
    o.useEffect(() => {
        null != j && (null == g ? _(null) : _(p(g, E, j)));
    }, [j, g, E]);
    let I = (0, a.y)(() => {
        null != I.current && T(I.current.getBoundingClientRect());
    });
    o.useLayoutEffect(() => {
        null != I.current && T(I.current.getBoundingClientRect());
    }, [I]),
        o.useEffect(() => {
            let e = () => {
                null != I.current && T(I.current.getBoundingClientRect());
            };
            return window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
        }, [I]);
    let A = (e) => {
            y(e.clientX);
        },
        w = o.useCallback(
            (e) => {
                let { key: t } = e;
                t === u.mR.ArrowLeft && null != O ? (e.preventDefault(), e.stopPropagation(), O()) : t === u.mR.ArrowRight && null != S && (e.preventDefault(), e.stopPropagation(), S());
            },
            [O, S]
        ),
        L = null != h && null != j ? m(h, j, E) : 0,
        k = (0, c.yv)(L),
        R = null != j ? j.right - p((t / 100) * E, E, j) : null,
        M = null != h && null != j ? j.right - h : null,
        q = null != x && null != j ? j.right - x : null;
    return (0, r.jsxs)('div', {
        className: d.cont,
        ref: I,
        children: [
            (0, r.jsxs)(s.P3F, {
                className: l()(d.hitboxArea, { [d.interactionEnabled]: i }),
                ignoreKeyPress: !0,
                onClick: (e) => {
                    i && null != b && b(m(e.clientX, e.currentTarget.getBoundingClientRect(), E));
                },
                onMouseEnter: (e) => {
                    i && (null != I.current && T(I.current.getBoundingClientRect()), D(!0), A(e));
                },
                onMouseLeave: (e) => {
                    i && (D(!1), y(null));
                },
                onMouseMove: (e) => {
                    i && N && A(e);
                },
                onKeyDown: w,
                tabIndex: i ? void 0 : -1,
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
                                      className: l()(d.buffer, { [d.bufferHovered]: N }),
                                      style: {
                                          width: ''.concat(100 * e.size, '%'),
                                          left: ''.concat(100 * e.start, '%')
                                      }
                                  },
                                  ''.concat(e.start, ':').concat(e.size)
                              )
                          ),
                    !i &&
                        null != q &&
                        q > 0 &&
                        (0, r.jsx)('div', {
                            className: d.seekableBar,
                            style: {
                                right: null != q ? ''.concat(q, 'px') : 'auto',
                                opacity: +(null != q)
                            }
                        }),
                    (0, r.jsx)(s.Exd, {
                        className: d.progress,
                        percent: t,
                        foregroundColor: '#FFFFFF',
                        backgroundColor: null != f ? f : void 0,
                        size: N ? s.Exd.Sizes.XSMALL : s.Exd.Sizes.XXSMALL,
                        animate: n
                    }),
                    N &&
                        null != k &&
                        (0, r.jsx)(s.Text, {
                            className: d.timeDisplay,
                            variant: 'text-xs/normal',
                            style: {
                                right: null != M ? ''.concat(M - 10, 'px') : 'auto',
                                color: '#FFFFFF'
                            },
                            children: k
                        }),
                    N &&
                        i &&
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
