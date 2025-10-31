n.d(t, { Z: () => m }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(692547),
    a = n(780384),
    o = n(481060),
    s = n(367907),
    c = n(210887),
    u = n(626135),
    d = n(981631),
    p = n(388032),
    f = n(960296),
    h = n(430864);
function m(e) {
    let { onClose: t, onConfirm: m, onCancel: g, channel: b, analyticsType: _, popoutText: y, animation: C } = e;
    i.useEffect(() => {
        u.default.track(
            d.rMx.OPEN_POPOUT,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({ type: _ }, (0, s.v_)(b)),
        );
    }, [_, b]);
    let v = i.useCallback(() => {
            null == m || m(), t();
        }, [m, t]),
        O = i.useCallback(() => {
            null == g || g(), t();
        }, [g, t]),
        x = i.useRef(null);
    return (
        i.useEffect(() => {
            let e,
                t = c.Z.theme,
                r = !1;
            return (
                null != C &&
                    (async () => {
                        let [{ default: i }, l] = await Promise.all([
                            Promise.resolve().then(n.t.bind(n, 500923, 23)),
                            (0, a.wj)(t) ? C.dark() : C.light(),
                        ]);
                        r ||
                            null == x.current ||
                            (e = i.loadAnimation({
                                container: x.current,
                                renderer: "svg",
                                loop: !0,
                                autoplay: !0,
                                animationData: l,
                            }));
                    })(),
                () => {
                    (r = !0), null != e && (e.destroy(), (e = void 0));
                }
            );
        }, [C]),
        (0, r.jsx)(o.VqE, {
            "aria-labelledby": "content-warning-popout-label",
            children: (0, r.jsxs)("form", {
                className: f.contentWarningPopout,
                onSubmit: v,
                children: [
                    (0, r.jsxs)("div", {
                        className: f.body,
                        children: [
                            null != C &&
                                (0, r.jsx)("div", {
                                    className: f.animation,
                                    ref: x,
                                }),
                            (0, r.jsxs)("div", {
                                className: f.content,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: f.header,
                                        children: p.intl.string(p.t.mY3Y38),
                                    }),
                                    (0, r.jsx)(o.Text, {
                                        id: "content-warning-popout-label",
                                        className: h.markup,
                                        variant: "text-sm/normal",
                                        children: y.body,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: f.buttonWrapper,
                                        children: [
                                            (0, r.jsxs)("div", {
                                                className: f.buttonContainer,
                                                children: [
                                                    (0, r.jsx)("div", {
                                                        className: f.button,
                                                        children: (0, r.jsx)(o.Button, {
                                                            variant: "secondary",
                                                            onClick: O,
                                                            text: p.intl.string(p.t.fsBWmS),
                                                        }),
                                                    }),
                                                    (0, r.jsx)(o.Text, {
                                                        variant: "text-xs/normal",
                                                        className: f.buttonHint,
                                                        children: p.intl.format(p.t["0LzVPZ"], {}),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: f.buttonContainer,
                                                children: [
                                                    (0, r.jsx)("div", {
                                                        className: f.button,
                                                        children: (0, r.jsx)(o.Button, {
                                                            variant: "primary",
                                                            onClick: v,
                                                            text: p.intl.string(p.t.KJnHq3),
                                                            autoFocus: !0,
                                                        }),
                                                    }),
                                                    (0, r.jsx)(o.Text, {
                                                        variant: "text-xs/normal",
                                                        className: f.buttonHint,
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
                        ? (0, r.jsxs)("div", {
                              className: f.footer,
                              children: [
                                  (0, r.jsx)(o.d3s, {
                                      size: "xs",
                                      color: l.Z.unsafe_rawColors.PRIMARY_400.css,
                                      className: f.icon,
                                  }),
                                  (0, r.jsx)(o.Text, {
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
