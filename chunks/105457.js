n.d(t, { Z: () => m }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(692547),
    a = n(780384),
    o = n(481060),
    s = n(367907),
    c = n(210887),
    u = n(626135),
    d = n(981631),
    p = n(388032),
    h = n(960296),
    f = n(430864);
function m(e) {
    let { onClose: t, onConfirm: m, onCancel: g, channel: b, analyticsType: C, popoutText: y, animation: v } = e;
    r.useEffect(() => {
        u.default.track(
            d.rMx.OPEN_POPOUT,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        i.forEach(function (t) {
                            var i;
                            (i = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = i);
                        });
                }
                return e;
            })({ type: C }, (0, s.v_)(b)),
        );
    }, [C, b]);
    let _ = r.useCallback(() => {
            null == m || m(), t();
        }, [m, t]),
        O = r.useCallback(() => {
            null == g || g(), t();
        }, [g, t]),
        x = r.useRef(null);
    return (
        r.useEffect(() => {
            let e,
                t = c.Z.theme,
                i = !1;
            return (
                null != v &&
                    (async () => {
                        let [{ default: r }, l] = await Promise.all([
                            Promise.resolve().then(n.t.bind(n, 500923, 23)),
                            (0, a.wj)(t) ? v.dark() : v.light(),
                        ]);
                        i ||
                            null == x.current ||
                            (e = r.loadAnimation({
                                container: x.current,
                                renderer: "svg",
                                loop: !0,
                                autoplay: !0,
                                animationData: l,
                            }));
                    })(),
                () => {
                    (i = !0), null != e && (e.destroy(), (e = void 0));
                }
            );
        }, [v]),
        (0, i.jsx)(o.VqE, {
            "aria-labelledby": "content-warning-popout-label",
            children: (0, i.jsxs)("form", {
                className: h.contentWarningPopout,
                onSubmit: _,
                children: [
                    (0, i.jsxs)("div", {
                        className: h.body,
                        children: [
                            null != v &&
                                (0, i.jsx)("div", {
                                    className: h.animation,
                                    ref: x,
                                }),
                            (0, i.jsxs)("div", {
                                className: h.content,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: h.header,
                                        children: p.intl.string(p.t.mY3Y38),
                                    }),
                                    (0, i.jsx)(o.Text, {
                                        id: "content-warning-popout-label",
                                        className: f.markup,
                                        variant: "text-sm/normal",
                                        children: y.body,
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: h.buttonWrapper,
                                        children: [
                                            (0, i.jsxs)("div", {
                                                className: h.buttonContainer,
                                                children: [
                                                    (0, i.jsx)("div", {
                                                        className: h.button,
                                                        children: (0, i.jsx)(o.Button, {
                                                            variant: "secondary",
                                                            onClick: O,
                                                            text: p.intl.string(p.t.fsBWmS),
                                                        }),
                                                    }),
                                                    (0, i.jsx)(o.Text, {
                                                        variant: "text-xs/normal",
                                                        className: h.buttonHint,
                                                        children: p.intl.format(p.t["0LzVPZ"], {}),
                                                    }),
                                                ],
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: h.buttonContainer,
                                                children: [
                                                    (0, i.jsx)("div", {
                                                        className: h.button,
                                                        children: (0, i.jsx)(o.Button, {
                                                            variant: "primary",
                                                            onClick: _,
                                                            text: p.intl.string(p.t.KJnHq3),
                                                            autoFocus: !0,
                                                        }),
                                                    }),
                                                    (0, i.jsx)(o.Text, {
                                                        variant: "text-xs/normal",
                                                        className: h.buttonHint,
                                                        children: p.intl.format(p.t.khjqdH, {}),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    null != y.footer && "" !== y.footer
                        ? (0, i.jsxs)("div", {
                              className: h.footer,
                              children: [
                                  (0, i.jsx)(o.d3s, {
                                      size: "xs",
                                      color: l.Z.unsafe_rawColors.PRIMARY_400.css,
                                      className: h.icon,
                                  }),
                                  (0, i.jsx)(o.Text, {
                                      variant: "text-sm/normal",
                                      children: y.footer,
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
        })
    );
}
