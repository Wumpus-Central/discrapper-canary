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
    let { percent: t, animate: n, interactionEnabled: o, backgroundColor: v, preloadedBuffers: E, duration: g, maxSeekableTime: O, onClick: b, onScrubBack: C, onScrubForward: S } = e,
        [h, _] = l.useState(null),
        [j, y] = l.useState(null),
        [x, D] = l.useState(null),
        [T, P] = l.useState(!1),
        R = l.useRef(null),
        N = (e) => {
            ((R.current = e), _(e));
        };
    l.useEffect(() => {
        null != h && (null == O ? D(null) : D(p(O, g, h)));
    }, [h, O, g]);
    let I = (0, c.Z)((e) => {
            N(e.contentRect);
        }),
        k = (0, s.y)(I);
    (l.useLayoutEffect(() => {
        null != k.current && N(k.current.getBoundingClientRect());
    }, [k]),
        l.useEffect(() => {
            let e = () => {
                null != k.current && N(k.current.getBoundingClientRect());
            };
            return (window.addEventListener('resize', e), () => window.removeEventListener('resize', e));
        }, [k]));
    let A = (e) => {
            y(e.clientX);
        },
        w = l.useCallback(
            (e) => {
                let { key: t } = e;
                t === d.mR.ArrowLeft && null != C ? (e.preventDefault(), e.stopPropagation(), C()) : t === d.mR.ArrowRight && null != S && (e.preventDefault(), e.stopPropagation(), S());
            },
            [C, S]
        ),
        L = null != j && null != h ? f(j, h, g) : 0,
        M = (0, u.yv)(L),
        V = null != h ? h.right - p((t / 100) * g, g, h) : null,
        B = null != j && null != h ? h.right - j : null,
        F = null != x && null != h ? h.right - x : null;
    return (0, r.jsxs)('div', {
        className: m.cont,
        ref: k,
        children: [
            (0, r.jsxs)(a.P3F, {
                className: i()(m.hitboxArea, { [m.interactionEnabled]: o }),
                ignoreKeyPress: !0,
                onClick: (e) => {
                    o && null != b && b(f(e.clientX, e.currentTarget.getBoundingClientRect(), g));
                },
                onMouseEnter: (e) => {
                    o && (null != k.current && N(k.current.getBoundingClientRect()), P(!0), A(e));
                },
                onMouseLeave: (e) => {
                    o && (P(!1), y(null));
                },
                onMouseMove: (e) => {
                    o && T && A(e);
                },
                onKeyDown: w,
                tabIndex: o ? void 0 : -1,
                focusProps: {
                    offset: {
                        top: 12,
                        bottom: 12
                    }
                },
                children: [
                    null == E
                        ? void 0
                        : E.map((e) =>
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
