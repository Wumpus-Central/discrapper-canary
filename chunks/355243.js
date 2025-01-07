n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(481060),
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
    let { percent: t, animate: n, interactionEnabled: l, backgroundColor: E, preloadedBuffers: p, duration: C, maxSeekableTime: f, onClick: S, onScrubBack: g, onScrubForward: x } = e,
        [h, _] = i.useState(null),
        [T, N] = i.useState(null),
        [D, I] = i.useState(null),
        [A, j] = i.useState(!1),
        b = i.useRef(null),
        R = (e) => {
            (b.current = e), _(e);
        };
    i.useEffect(() => {
        null != h && (null == f ? I(null) : I(v(f, C, h)));
    }, [h, f, C]);
    let L = (0, a.y)(() => {
        if (null != L.current) R(L.current.getBoundingClientRect());
    });
    i.useLayoutEffect(() => {
        null != L.current && R(L.current.getBoundingClientRect());
    }, [L]),
        i.useEffect(() => {
            let e = () => {
                null != L.current && R(L.current.getBoundingClientRect());
            };
            return window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
        }, [L]);
    let O = (e) => {
            N(e.clientX);
        },
        k = i.useCallback(
            (e) => {
                let { key: t } = e;
                t === c.mR.ArrowLeft && null != g ? (e.preventDefault(), e.stopPropagation(), g()) : t === c.mR.ArrowRight && null != x && (e.preventDefault(), e.stopPropagation(), x());
            },
            [g, x]
        ),
        M = null != T && null != h ? m(T, h, C) : 0,
        P = (0, u.yv)(M),
        y = null != h ? h.right - v((t / 100) * C, C, h) : null,
        q = null != T && null != h ? h.right - T : null,
        w = null != D && null != h ? h.right - D : null;
    return (0, r.jsxs)('div', {
        className: d.cont,
        ref: L,
        children: [
            (0, r.jsxs)(s.Clickable, {
                className: o()(d.hitboxArea, { [d.interactionEnabled]: l }),
                ignoreKeyPress: !0,
                onClick: (e) => {
                    if (!!l && null != S) S(m(e.clientX, e.currentTarget.getBoundingClientRect(), C));
                },
                onMouseEnter: (e) => {
                    if (!!l) null != L.current && R(L.current.getBoundingClientRect()), j(!0), O(e);
                },
                onMouseLeave: (e) => {
                    if (!!l) j(!1), N(null);
                },
                onMouseMove: (e) => {
                    if (!!l) A && O(e);
                },
                onKeyDown: k,
                tabIndex: l ? void 0 : -1,
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
                                      className: o()(d.buffer, { [d.bufferHovered]: A }),
                                      style: {
                                          width: ''.concat(100 * e.size, '%'),
                                          left: ''.concat(100 * e.start, '%')
                                      }
                                  },
                                  ''.concat(e.start, ':').concat(e.size)
                              )
                          ),
                    !l &&
                        null != w &&
                        w > 0 &&
                        (0, r.jsx)('div', {
                            className: d.seekableBar,
                            style: {
                                right: null != w ? ''.concat(w, 'px') : 'auto',
                                opacity: null != w ? 1 : 0
                            }
                        }),
                    (0, r.jsx)(s.Progress, {
                        className: d.progress,
                        percent: t,
                        foregroundColor: '#FFFFFF',
                        backgroundColor: null != E ? E : void 0,
                        size: A ? s.Progress.Sizes.XSMALL : s.Progress.Sizes.XXSMALL,
                        animate: n
                    }),
                    A &&
                        null != P &&
                        (0, r.jsx)(s.Text, {
                            className: d.timeDisplay,
                            variant: 'text-xs/normal',
                            style: {
                                right: null != q ? ''.concat(q - 10, 'px') : 'auto',
                                color: '#FFFFFF'
                            },
                            children: P
                        }),
                    A &&
                        l &&
                        null != y &&
                        (0, r.jsx)('div', {
                            className: d.grabber,
                            style: { right: ''.concat(y - 6, 'px') }
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
