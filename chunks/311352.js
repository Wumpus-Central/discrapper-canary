n.d(t, { Z: () => E }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(399606),
    a = n(907862),
    o = n(481060),
    s = n(239091),
    c = n(906732),
    u = n(522651),
    d = n(870569),
    f = n(819640),
    h = n(556296),
    p = n(13140),
    g = n(435064),
    b = n(341569),
    m = n(39604),
    y = n(981631),
    O = n(388032),
    v = n(238168),
    j = n(38983);
function C(e) {
    (0, s.jW)(e, async () => {
        let { default: e } = await n.e("21960").then(n.bind(n, 999466));
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
            [l, s] = i.useState(!1),
            c = i.useCallback(() => s(!1), []);
        return (0, r.jsx)(a.J2, {
            shouldShow: l,
            targetElementRef: n,
            position: "top",
            title: O.intl.format(O.t["o+srEw"], {
                keybind: t,
                keybindHook: () =>
                    (0, r.jsx)("span", {
                        className: v.keybindHintKeys,
                        children: (0, r.jsx)(o.M2$, {
                            className: v.keybindShortcut,
                            shortcut: t,
                        }),
                    }),
            }),
            body: O.intl.format(O.t.DWeRm1, {
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
        let e = i.useRef(null),
            { parentAnalyticsLocation: t } = (0, c.ZP)(),
            n = (0, l.e7)([f.Z], () => f.Z.hasLayers()),
            a = (0, b.z8)(),
            s = (0, l.e7)([g.Z], () => g.Z.getIsAtMaxSaveClipOperations()),
            v = (0, l.e7)([h.ZP], () => h.ZP.getKeybindForAction(y.kg4.SAVE_CLIP));
        if (!a || null == v || n) return null;
        let j = p.BB(v.shortcut, !0);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(x, {
                    keybindString: j,
                    targetElementRef: e,
                }),
                (0, r.jsx)(d.Z, {
                    ref: e,
                    disabled: s,
                    tooltipText:
                        null != v
                            ? O.intl.formatToPlainString(O.t.HIMcv1, {
                                  hotkey: p.BB(null == v ? void 0 : v.shortcut, !0),
                              })
                            : O.intl.string(O.t.s52pju),
                    onClick: () => {
                        (0, m.br)(), (0, u.v)(t, u.d.CLIP);
                    },
                    onContextMenu: C,
                    icon: o.AlX,
                }),
            ],
        });
    };
