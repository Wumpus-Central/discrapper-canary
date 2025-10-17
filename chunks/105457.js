n.d(t, { Z: () => g }), n(388685);
var i = n(951288),
    r = n(647438),
    l = n(692547),
    a = n(780384),
    o = n(755721),
    s = n(481060),
    c = n(367907),
    u = n(210887),
    d = n(626135),
    p = n(981631),
    h = n(388032),
    f = n(960296),
    m = n(430864);
function g(e) {
    let { onClose: t, onConfirm: g, onCancel: b, channel: C, analyticsType: y, popoutText: _, animation: v } = e;
    r.useEffect(() => {
        d.default.track(
            p.rMx.OPEN_POPOUT,
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
            })({ type: y }, (0, c.v_)(C)),
        );
    }, [y, C]);
    let x = r.useCallback(() => {
            null == g || g(), t();
        }, [g, t]),
        O = r.useCallback(() => {
            null == b || b(), t();
        }, [b, t]),
        j = r.useRef(null);
    return (
        r.useEffect(() => {
            let e,
                t = u.Z.theme,
                i = !1;
            return (
                null != v &&
                    (async () => {
                        let [{ default: r }, l] = await Promise.all([
                            Promise.resolve().then(n.t.bind(n, 500923, 23)),
                            (0, a.wj)(t) ? v.dark() : v.light(),
                        ]);
                        i ||
                            null == j.current ||
                            (e = r.loadAnimation({
                                container: j.current,
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
        (0, i.jsx)(s.VqE, {
            "aria-labelledby": "content-warning-popout-label",
            children: (0, i.jsxs)("form", {
                className: f.contentWarningPopout,
                onSubmit: x,
                children: [
                    (0, i.jsxs)("div", {
                        className: f.body,
                        children: [
                            null != v &&
                                (0, i.jsx)("div", {
                                    className: f.animation,
                                    ref: j,
                                }),
                            (0, i.jsxs)("div", {
                                className: f.content,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: f.header,
                                        children: h.intl.string(h.t.mY3Y39),
                                    }),
                                    (0, i.jsx)(s.Text, {
                                        id: "content-warning-popout-label",
                                        className: m.markup,
                                        variant: "text-sm/normal",
                                        children: _.body,
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: f.buttonWrapper,
                                        children: [
                                            (0, i.jsxs)("div", {
                                                className: f.buttonContainer,
                                                children: [
                                                    (0, i.jsx)(o.zx, {
                                                        className: f.button,
                                                        color: o.zx.Colors.PRIMARY,
                                                        onClick: O,
                                                        children: h.intl.string(h.t.fsBWmZ),
                                                    }),
                                                    (0, i.jsx)(s.Text, {
                                                        variant: "text-xs/normal",
                                                        className: f.buttonHint,
                                                        children: h.intl.format(h.t["0LzVPT"], {}),
                                                    }),
                                                ],
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: f.buttonContainer,
                                                children: [
                                                    (0, i.jsx)(o.zx, {
                                                        className: f.button,
                                                        onClick: x,
                                                        type: "submit",
                                                        autoFocus: !0,
                                                        children: h.intl.string(h.t.KJnHq6),
                                                    }),
                                                    (0, i.jsx)(s.Text, {
                                                        variant: "text-xs/normal",
                                                        className: f.buttonHint,
                                                        children: h.intl.format(h.t.khjqdH, {}),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    null != _.footer && "" !== _.footer
                        ? (0, i.jsxs)("div", {
                              className: f.footer,
                              children: [
                                  (0, i.jsx)(s.d3s, {
                                      size: "xs",
                                      color: l.Z.unsafe_rawColors.PRIMARY_400.css,
                                      className: f.icon,
                                  }),
                                  (0, i.jsx)(s.Text, {
                                      variant: "text-sm/normal",
                                      children: _.footer,
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
        })
    );
}
