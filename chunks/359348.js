n.d(t, { A: () => E }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(417597),
    a = n(342494),
    s = n(397927),
    o = n(442433),
    c = n(688810),
    u = n(384059),
    d = n(42473),
    f = n(186111),
    p = n(532624),
    h = n(350535),
    b = n(274372),
    g = n(572164),
    m = n(399925),
    A = n(652215),
    y = n(985018),
    O = n(345314),
    j = n(145394);
function v(e) {
    (0, o.L3)(e, async () => {
        let { default: e } = await n.e("44751").then(n.bind(n, 575538));
        return (t) =>
            (0, r.jsx)(
                e,
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
                })({}, t),
            );
    });
}
let x = (e) => {
        let { keybindString: t, targetElementRef: n } = e,
            [i, o] = l.useState(!1),
            c = l.useCallback(() => o(!1), []);
        return (0, r.jsx)(a.AM, {
            shouldShow: i,
            targetElementRef: n,
            position: "top",
            title: y.intl.format(y.t["o+srEw"], {
                keybind: t,
                keybindHook: () =>
                    (0, r.jsx)("span", {
                        className: O.E,
                        children: (0, r.jsx)(s.e7I, {
                            className: O.d,
                            shortcut: t,
                        }),
                    }),
            }),
            body: y.intl.format(y.t.DWeRm1, {
                keybindHook: () => t,
                keybind: t,
            }),
            graphic: {
                type: "image",
                src: j,
            },
            caretConfig: { align: "center" },
            onRequestClose: c,
        });
    },
    E = () => {
        let e = l.useRef(null),
            { parentAnalyticsLocation: t } = (0, c.Ay)(),
            n = (0, i.bG)([f.A], () => f.A.hasLayers()),
            a = (0, g.Et)(),
            o = (0, i.bG)([b.A], () => b.A.getIsAtMaxSaveClipOperations()),
            O = (0, i.bG)([p.Ay], () => p.Ay.getKeybindForAction(A.hCu.SAVE_CLIP));
        if (!a || null == O || n) return null;
        let j = h.dI(O.shortcut, !0);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(x, {
                    keybindString: j,
                    targetElementRef: e,
                }),
                (0, r.jsx)(d.A, {
                    ref: e,
                    disabled: o,
                    tooltipText:
                        null != O
                            ? y.intl.formatToPlainString(y.t.HIMcv1, {
                                  hotkey: h.dI(null == O ? void 0 : O.shortcut, !0),
                              })
                            : y.intl.string(y.t.s52pju),
                    onClick: () => {
                        (0, m.l0)(), (0, u.X)(t, u.O.CLIP);
                    },
                    onContextMenu: v,
                    icon: s.xgA,
                }),
            ],
        });
    };
