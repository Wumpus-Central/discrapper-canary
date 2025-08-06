(n.d(t, { Z: () => E }), n(388685));
var r = n(255367),
    i = n(73800),
    o = n(692547),
    a = n(780384),
    s = n(755721),
    l = n(481060),
    c = n(367907),
    u = n(210887),
    d = n(626135),
    f = n(981631),
    _ = n(388032),
    p = n(41281),
    h = n(73433);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
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
                m(e, t, n[t]);
            }));
    }
    return e;
}
function E(e) {
    let { onClose: t, onConfirm: m, onCancel: E, channel: b, analyticsType: y, popoutText: O, animation: v } = e;
    i.useEffect(() => {
        d.default.track(f.rMx.OPEN_POPOUT, g({ type: y }, (0, c.v_)(b)));
    }, [y, b]);
    let I = i.useCallback(() => {
            (null == m || m(), t());
        }, [m, t]),
        T = i.useCallback(() => {
            (null == E || E(), t());
        }, [E, t]),
        S = i.useRef(null);
    return (
        i.useEffect(() => {
            let e,
                t = u.Z.theme,
                r = !1;
            return (
                null != v &&
                    (async () => {
                        let [{ default: i }, o] = await Promise.all([Promise.resolve().then(n.t.bind(n, 500923, 23)), (0, a.wj)(t) ? v.dark() : v.light()]);
                        r ||
                            null == S.current ||
                            (e = i.loadAnimation({
                                container: S.current,
                                renderer: 'svg',
                                loop: !0,
                                autoplay: !0,
                                animationData: o
                            }));
                    })(),
                () => {
                    ((r = !0), null != e && (e.destroy(), (e = void 0)));
                }
            );
        }, [v]),
        (0, r.jsx)(l.VqE, {
            'aria-labelledby': 'content-warning-popout-label',
            children: (0, r.jsxs)('form', {
                className: p.contentWarningPopout,
                onSubmit: I,
                children: [
                    (0, r.jsxs)('div', {
                        className: p.body,
                        children: [
                            null != v &&
                                (0, r.jsx)('div', {
                                    className: p.animation,
                                    ref: S
                                }),
                            (0, r.jsxs)('div', {
                                className: p.content,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: p.header,
                                        children: _.intl.string(_.t.mY3Y39)
                                    }),
                                    (0, r.jsx)(l.Text, {
                                        id: 'content-warning-popout-label',
                                        className: h.markup,
                                        variant: 'text-sm/normal',
                                        children: O.body
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: p.buttonWrapper,
                                        children: [
                                            (0, r.jsxs)('div', {
                                                className: p.buttonContainer,
                                                children: [
                                                    (0, r.jsx)(s.zx, {
                                                        className: p.button,
                                                        color: s.zx.Colors.PRIMARY,
                                                        onClick: T,
                                                        children: _.intl.string(_.t.fsBWmZ)
                                                    }),
                                                    (0, r.jsx)(l.Text, {
                                                        variant: 'text-xs/normal',
                                                        className: p.buttonHint,
                                                        children: _.intl.format(_.t['0LzVPT'], {})
                                                    })
                                                ]
                                            }),
                                            (0, r.jsxs)('div', {
                                                className: p.buttonContainer,
                                                children: [
                                                    (0, r.jsx)(s.zx, {
                                                        className: p.button,
                                                        onClick: I,
                                                        type: 'submit',
                                                        autoFocus: !0,
                                                        children: _.intl.string(_.t.KJnHq6)
                                                    }),
                                                    (0, r.jsx)(l.Text, {
                                                        variant: 'text-xs/normal',
                                                        className: p.buttonHint,
                                                        children: _.intl.format(_.t.khjqdH, {})
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    null != O.footer && '' !== O.footer
                        ? (0, r.jsxs)('div', {
                              className: p.footer,
                              children: [
                                  (0, r.jsx)(l.d3s, {
                                      size: 'xs',
                                      color: o.Z.unsafe_rawColors.PRIMARY_400.css,
                                      className: p.icon
                                  }),
                                  (0, r.jsx)(l.Text, {
                                      variant: 'text-sm/normal',
                                      children: O.footer
                                  })
                              ]
                          })
                        : null
                ]
            })
        })
    );
}
