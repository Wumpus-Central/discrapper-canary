n.d(t, { Z: () => E }), n(47120);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    s = n.n(i),
    o = n(481060),
    a = n(393903),
    u = n(604162),
    c = n(420212),
    d = n(452973);
function m(e, t, n) {
    return n * (Math.max(e - t.left, 0) / t.width);
}
function v(e, t, n) {
    return n.left + (e / t) * n.width;
}
function E(e) {
    let { percent: t, animate: n, interactionEnabled: i, backgroundColor: E, preloadedBuffers: C, duration: p, maxSeekableTime: S, onClick: f, onScrubBack: g, onScrubForward: x } = e,
        [h, _] = l.useState(null),
        [T, N] = l.useState(null),
        [D, j] = l.useState(null),
        [I, A] = l.useState(!1),
        b = l.useRef(null),
        L = (e) => {
            (b.current = e), _(e);
        };
    l.useEffect(() => {
        null != h && (null == S ? j(null) : j(v(S, p, h)));
    }, [h, S, p]);
    let O = (0, a.y)(() => {
        null != O.current && L(O.current.getBoundingClientRect());
    });
    l.useLayoutEffect(() => {
        null != O.current && L(O.current.getBoundingClientRect());
    }, [O]),
        l.useEffect(() => {
            let e = () => {
                null != O.current && L(O.current.getBoundingClientRect());
            };
            return window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
        }, [O]);
    let R = (e) => {
            N(e.clientX);
        },
        k = l.useCallback(
            (e) => {
                let { key: t } = e;
                t === c.mR.ArrowLeft && null != g ? (e.preventDefault(), e.stopPropagation(), g()) : t === c.mR.ArrowRight && null != x && (e.preventDefault(), e.stopPropagation(), x());
            },
            [g, x]
        ),
        M = null != T && null != h ? m(T, h, p) : 0,
        P = (0, u.yv)(M),
        q = null != h ? h.right - v((t / 100) * p, p, h) : null,
        y = null != T && null != h ? h.right - T : null,
        w = null != D && null != h ? h.right - D : null;
    return (0, r.jsxs)('div', {
        className: d.cont,
        ref: O,
        children: [
            (0, r.jsxs)(o.P3F, {
                className: s()(d.hitboxArea, { [d.interactionEnabled]: i }),
                ignoreKeyPress: !0,
                onClick: (e) => {
                    i && null != f && f(m(e.clientX, e.currentTarget.getBoundingClientRect(), p));
                },
                onMouseEnter: (e) => {
                    i && (null != O.current && L(O.current.getBoundingClientRect()), A(!0), R(e));
                },
                onMouseLeave: (e) => {
                    i && (A(!1), N(null));
                },
                onMouseMove: (e) => {
                    i && I && R(e);
                },
                onKeyDown: k,
                tabIndex: i ? void 0 : -1,
                focusProps: {
                    offset: {
                        top: 12,
                        bottom: 12
                    }
                },
                children: [
                    null == C
                        ? void 0
                        : C.map((e) =>
                              (0, r.jsx)(
                                  'div',
                                  {
                                      className: s()(d.buffer, { [d.bufferHovered]: I }),
                                      style: {
                                          width: ''.concat(100 * e.size, '%'),
                                          left: ''.concat(100 * e.start, '%')
                                      }
                                  },
                                  ''.concat(e.start, ':').concat(e.size)
                              )
                          ),
                    !i &&
                        null != w &&
                        w > 0 &&
                        (0, r.jsx)('div', {
                            className: d.seekableBar,
                            style: {
                                right: null != w ? ''.concat(w, 'px') : 'auto',
                                opacity: null != w ? 1 : 0
                            }
                        }),
                    (0, r.jsx)(o.Exd, {
                        className: d.progress,
                        percent: t,
                        foregroundColor: '#FFFFFF',
                        backgroundColor: null != E ? E : void 0,
                        size: I ? o.Exd.Sizes.XSMALL : o.Exd.Sizes.XXSMALL,
                        animate: n
                    }),
                    I &&
                        null != P &&
                        (0, r.jsx)(o.Text, {
                            className: d.timeDisplay,
                            variant: 'text-xs/normal',
                            style: {
                                right: null != y ? ''.concat(y - 10, 'px') : 'auto',
                                color: '#FFFFFF'
                            },
                            children: P
                        }),
                    I &&
                        i &&
                        null != q &&
                        (0, r.jsx)('div', {
                            className: d.grabber,
                            style: { right: ''.concat(q - 6, 'px') }
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
