(n.d(t, { Z: () => g }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(692547),
    a = n(780384),
    o = n(755721),
    s = n(481060),
    c = n(367907),
    u = n(210887),
    d = n(626135),
    p = n(981631),
    h = n(388032),
    f = n(41281),
    m = n(73433);
function g(e) {
    let { onClose: t, onConfirm: g, onCancel: b, channel: _, analyticsType: y, popoutText: C, animation: x } = e;
    i.useEffect(() => {
        d.default.track(
            p.rMx.OPEN_POPOUT,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            ((r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r));
                        }));
                }
                return e;
            })({ type: y }, (0, c.v_)(_))
        );
    }, [y, _]);
    let v = i.useCallback(() => {
            (null == g || g(), t());
        }, [g, t]),
        O = i.useCallback(() => {
            (null == b || b(), t());
        }, [b, t]),
        j = i.useRef(null);
    return (
        i.useEffect(() => {
            let e,
                t = u.Z.theme,
                r = !1;
            return (
                null != x &&
                    (async () => {
                        let [{ default: i }, l] = await Promise.all([Promise.resolve().then(n.t.bind(n, 500923, 23)), (0, a.wj)(t) ? x.dark() : x.light()]);
                        r ||
                            null == j.current ||
                            (e = i.loadAnimation({
                                container: j.current,
                                renderer: 'svg',
                                loop: !0,
                                autoplay: !0,
                                animationData: l
                            }));
                    })(),
                () => {
                    ((r = !0), null != e && (e.destroy(), (e = void 0)));
                }
            );
        }, [x]),
        (0, r.jsx)(s.VqE, {
            'aria-labelledby': 'content-warning-popout-label',
            children: (0, r.jsxs)('form', {
                className: f.contentWarningPopout,
                onSubmit: v,
                children: [
                    (0, r.jsxs)('div', {
                        className: f.body,
                        children: [
                            null != x &&
                                (0, r.jsx)('div', {
                                    className: f.animation,
                                    ref: j
                                }),
                            (0, r.jsxs)('div', {
                                className: f.content,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: f.header,
                                        children: h.intl.string(h.t.mY3Y39)
                                    }),
                                    (0, r.jsx)(s.Text, {
                                        id: 'content-warning-popout-label',
                                        className: m.markup,
                                        variant: 'text-sm/normal',
                                        children: C.body
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: f.buttonWrapper,
                                        children: [
                                            (0, r.jsxs)('div', {
                                                className: f.buttonContainer,
                                                children: [
                                                    (0, r.jsx)(o.zx, {
                                                        className: f.button,
                                                        color: o.zx.Colors.PRIMARY,
                                                        onClick: O,
                                                        children: h.intl.string(h.t.fsBWmZ)
                                                    }),
                                                    (0, r.jsx)(s.Text, {
                                                        variant: 'text-xs/normal',
                                                        className: f.buttonHint,
                                                        children: h.intl.format(h.t['0LzVPT'], {})
                                                    })
                                                ]
                                            }),
                                            (0, r.jsxs)('div', {
                                                className: f.buttonContainer,
                                                children: [
                                                    (0, r.jsx)(o.zx, {
                                                        className: f.button,
                                                        onClick: v,
                                                        type: 'submit',
                                                        autoFocus: !0,
                                                        children: h.intl.string(h.t.KJnHq6)
                                                    }),
                                                    (0, r.jsx)(s.Text, {
                                                        variant: 'text-xs/normal',
                                                        className: f.buttonHint,
                                                        children: h.intl.format(h.t.khjqdH, {})
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    null != C.footer && '' !== C.footer
                        ? (0, r.jsxs)('div', {
                              className: f.footer,
                              children: [
                                  (0, r.jsx)(s.d3s, {
                                      size: 'xs',
                                      color: l.Z.unsafe_rawColors.PRIMARY_400.css,
                                      className: f.icon
                                  }),
                                  (0, r.jsx)(s.Text, {
                                      variant: 'text-sm/normal',
                                      children: C.footer
                                  })
                              ]
                          })
                        : null
                ]
            })
        })
    );
}
