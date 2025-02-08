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
    let { percent: t, animate: n, interactionEnabled: i, backgroundColor: E, preloadedBuffers: p, duration: C, maxSeekableTime: f, onClick: S, onScrubBack: g, onScrubForward: x } = e,
        [_, h] = l.useState(null),
        [T, D] = l.useState(null),
        [N, I] = l.useState(null),
        [j, A] = l.useState(!1),
        b = l.useRef(null),
        L = (e) => {
            (b.current = e), h(e);
        };
    l.useEffect(() => {
        null != _ && (null == f ? I(null) : I(v(f, C, _)));
    }, [_, f, C]);
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
            D(e.clientX);
        },
        k = l.useCallback(
            (e) => {
                let { key: t } = e;
                t === c.mR.ArrowLeft && null != g ? (e.preventDefault(), e.stopPropagation(), g()) : t === c.mR.ArrowRight && null != x && (e.preventDefault(), e.stopPropagation(), x());
            },
            [g, x]
        ),
        M = null != T && null != _ ? m(T, _, C) : 0,
        P = (0, u.yv)(M),
        q = null != _ ? _.right - v((t / 100) * C, C, _) : null,
        y = null != T && null != _ ? _.right - T : null,
        w = null != N && null != _ ? _.right - N : null;
    return (0, r.jsxs)('div', {
        className: d.cont,
        ref: O,
        children: [
            (0, r.jsxs)(o.P3F, {
                className: s()(d.hitboxArea, { [d.interactionEnabled]: i }),
                ignoreKeyPress: !0,
                onClick: (e) => {
                    i && null != S && S(m(e.clientX, e.currentTarget.getBoundingClientRect(), C));
                },
                onMouseEnter: (e) => {
                    i && (null != O.current && L(O.current.getBoundingClientRect()), A(!0), R(e));
                },
                onMouseLeave: (e) => {
                    i && (A(!1), D(null));
                },
                onMouseMove: (e) => {
                    i && j && R(e);
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
                    null == p
                        ? void 0
                        : p.map((e) =>
                              (0, r.jsx)(
                                  'div',
                                  {
                                      className: s()(d.buffer, { [d.bufferHovered]: j }),
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
                        size: j ? o.Exd.Sizes.XSMALL : o.Exd.Sizes.XXSMALL,
                        animate: n
                    }),
                    j &&
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
                    j &&
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
