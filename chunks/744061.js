n.d(t, { Z: () => f }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(692547),
    r = n(780384),
    s = n(481060),
    o = n(367907),
    c = n(210887),
    d = n(626135),
    u = n(981631),
    h = n(388032),
    p = n(576043),
    m = n(642367);
function f(e) {
    let { onClose: t, onConfirm: f, onCancel: g, channel: _, analyticsType: C, popoutText: x, animation: v } = e;
    l.useEffect(() => {
        d.default.track(u.rMx.OPEN_POPOUT, {
            type: C,
            ...(0, o.v_)(_)
        });
    }, [C, _]);
    let E = l.useCallback(() => {
            null == f || f(), t();
        }, [f, t]),
        I = l.useCallback(() => {
            null == g || g(), t();
        }, [g, t]),
        b = l.useRef(null);
    return (
        l.useEffect(() => {
            let e;
            let t = c.Z.theme,
                i = !1;
            return (
                null != v &&
                    (async () => {
                        let [{ default: l }, a] = await Promise.all([Promise.resolve().then(n.t.bind(n, 500923, 23)), (0, r.wj)(t) ? v.dark() : v.light()]);
                        i ||
                            null == b.current ||
                            (e = l.loadAnimation({
                                container: b.current,
                                renderer: 'svg',
                                loop: !0,
                                autoplay: !0,
                                animationData: a
                            }));
                    })(),
                () => {
                    (i = !0), null != e && (e.destroy(), (e = void 0));
                }
            );
        }, [v]),
        (0, i.jsx)(s.VqE, {
            'aria-labelledby': 'content-warning-popout-label',
            children: (0, i.jsxs)('form', {
                className: p.contentWarningPopout,
                onSubmit: E,
                children: [
                    (0, i.jsxs)('div', {
                        className: p.body,
                        children: [
                            null != v &&
                                (0, i.jsx)('div', {
                                    className: p.animation,
                                    ref: b
                                }),
                            (0, i.jsxs)('div', {
                                className: p.content,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: p.header,
                                        children: h.intl.string(h.t.mY3Y39)
                                    }),
                                    (0, i.jsx)(s.Text, {
                                        id: 'content-warning-popout-label',
                                        className: m.markup,
                                        variant: 'text-sm/normal',
                                        children: x.body
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: p.buttonWrapper,
                                        children: [
                                            (0, i.jsxs)('div', {
                                                className: p.buttonContainer,
                                                children: [
                                                    (0, i.jsx)(s.zxk, {
                                                        className: p.button,
                                                        color: s.zxk.Colors.PRIMARY,
                                                        onClick: I,
                                                        children: h.intl.string(h.t.fsBWmZ)
                                                    }),
                                                    (0, i.jsx)(s.Text, {
                                                        variant: 'text-xs/normal',
                                                        className: p.buttonHint,
                                                        children: h.intl.format(h.t['0LzVPT'], {})
                                                    })
                                                ]
                                            }),
                                            (0, i.jsxs)('div', {
                                                className: p.buttonContainer,
                                                children: [
                                                    (0, i.jsx)(s.zxk, {
                                                        className: p.button,
                                                        onClick: E,
                                                        type: 'submit',
                                                        autoFocus: !0,
                                                        children: h.intl.string(h.t.KJnHq6)
                                                    }),
                                                    (0, i.jsx)(s.Text, {
                                                        variant: 'text-xs/normal',
                                                        className: p.buttonHint,
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
                    null != x.footer && '' !== x.footer
                        ? (0, i.jsxs)('div', {
                              className: p.footer,
                              children: [
                                  (0, i.jsx)(s.d3s, {
                                      size: 'xs',
                                      color: a.Z.unsafe_rawColors.PRIMARY_400.css,
                                      className: p.icon
                                  }),
                                  (0, i.jsx)(s.Text, {
                                      variant: 'text-sm/normal',
                                      children: x.footer
                                  })
                              ]
                          })
                        : null
                ]
            })
        })
    );
}
