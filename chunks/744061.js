n.d(t, { Z: () => m }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(692547),
    o = n(780384),
    a = n(481060),
    s = n(367907),
    c = n(210887),
    u = n(626135),
    d = n(981631),
    p = n(388032),
    h = n(41281),
    f = n(73433);
function m(e) {
    let { onClose: t, onConfirm: m, onCancel: g, channel: b, analyticsType: _, popoutText: C, animation: y } = e;
    i.useEffect(() => {
        u.default.track(
            d.rMx.OPEN_POPOUT,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({ type: _ }, (0, s.v_)(b))
        );
    }, [_, b]);
    let x = i.useCallback(() => {
            null == m || m(), t();
        }, [m, t]),
        v = i.useCallback(() => {
            null == g || g(), t();
        }, [g, t]),
        j = i.useRef(null);
    return (
        i.useEffect(() => {
            let e,
                t = c.Z.theme,
                r = !1;
            return (
                null != y &&
                    (async () => {
                        let [{ default: i }, l] = await Promise.all([Promise.resolve().then(n.t.bind(n, 500923, 23)), (0, o.wj)(t) ? y.dark() : y.light()]);
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
                    (r = !0), null != e && (e.destroy(), (e = void 0));
                }
            );
        }, [y]),
        (0, r.jsx)(a.VqE, {
            'aria-labelledby': 'content-warning-popout-label',
            children: (0, r.jsxs)('form', {
                className: h.contentWarningPopout,
                onSubmit: x,
                children: [
                    (0, r.jsxs)('div', {
                        className: h.body,
                        children: [
                            null != y &&
                                (0, r.jsx)('div', {
                                    className: h.animation,
                                    ref: j
                                }),
                            (0, r.jsxs)('div', {
                                className: h.content,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: h.header,
                                        children: p.NW.string(p.t.mY3Y39)
                                    }),
                                    (0, r.jsx)(a.Text, {
                                        id: 'content-warning-popout-label',
                                        className: f.markup,
                                        variant: 'text-sm/normal',
                                        children: C.body
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: h.buttonWrapper,
                                        children: [
                                            (0, r.jsxs)('div', {
                                                className: h.buttonContainer,
                                                children: [
                                                    (0, r.jsx)(a.zxk, {
                                                        className: h.button,
                                                        color: a.zxk.Colors.PRIMARY,
                                                        onClick: v,
                                                        children: p.NW.string(p.t.fsBWmZ)
                                                    }),
                                                    (0, r.jsx)(a.Text, {
                                                        variant: 'text-xs/normal',
                                                        className: h.buttonHint,
                                                        children: p.NW.format(p.t['0LzVPT'], {})
                                                    })
                                                ]
                                            }),
                                            (0, r.jsxs)('div', {
                                                className: h.buttonContainer,
                                                children: [
                                                    (0, r.jsx)(a.zxk, {
                                                        className: h.button,
                                                        onClick: x,
                                                        type: 'submit',
                                                        autoFocus: !0,
                                                        children: p.NW.string(p.t.KJnHq6)
                                                    }),
                                                    (0, r.jsx)(a.Text, {
                                                        variant: 'text-xs/normal',
                                                        className: h.buttonHint,
                                                        children: p.NW.format(p.t.khjqdH, {})
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
                              className: h.footer,
                              children: [
                                  (0, r.jsx)(a.d3s, {
                                      size: 'xs',
                                      color: l.Z.unsafe_rawColors.PRIMARY_400.css,
                                      className: h.icon
                                  }),
                                  (0, r.jsx)(a.Text, {
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
