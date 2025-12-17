n.d(t, { Z: () => E });
var r = n(54381),
    i = n(473749),
    l = n(399606),
    a = n(704215),
    o = n(481060),
    s = n(239091),
    c = n(906732),
    u = n(522651),
    d = n(765585),
    f = n(870569),
    h = n(819640),
    p = n(556296),
    g = n(13140),
    b = n(435064),
    m = n(341569),
    y = n(39604),
    O = n(981631),
    v = n(388032),
    j = n(238168);
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
        let { keybindString: t, children: n, targetElementRef: i } = e;
        return (0, r.jsx)(o.yRy, {
            targetElementRef: i,
            shouldShow: !1,
            position: "top",
            align: "center",
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return (0, r.jsx)(d.Z, {
                    dismissibleContent: a.z.CLIPS_ONBOARDING_CLIP_BUTTON_COACHMARK,
                    shouldUseHorizontalButtons: !0,
                    inlineArt: !0,
                    artClassName: j.clipsEducationArt,
                    position: "top",
                    header: (0, r.jsx)("div", {
                        className: j.header,
                        children: v.intl.format(v.t["o+srEw"], {
                            keybind: t,
                            keybindHook: () =>
                                (0, r.jsx)("span", {
                                    className: j.keybindHintKeys,
                                    children: (0, r.jsx)(o.M2$, {
                                        className: j.keybindShortcut,
                                        shortcut: t,
                                    }),
                                }),
                        }),
                    }),
                    headerClassName: j.clipsEducationHeader,
                    body: (0, r.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "always-white",
                        className: j.bodyText,
                        children: v.intl.format(v.t.DWeRm1, {
                            keybindHook: () =>
                                (0, r.jsx)("div", {
                                    className: j.keyCombo,
                                    children: t,
                                }),
                            keybind: t,
                        }),
                    }),
                    onClose: (e) => {
                        e.stopPropagation(), e.preventDefault(), null == n || n();
                    },
                });
            },
            children: () => n,
        });
    },
    E = () => {
        let e = i.useRef(null),
            { parentAnalyticsLocation: t } = (0, c.ZP)(),
            n = (0, l.e7)([h.Z], () => h.Z.hasLayers()),
            a = (0, m.z8)(),
            s = (0, l.e7)([b.Z], () => b.Z.getIsAtMaxSaveClipOperations()),
            d = (0, l.e7)([p.ZP], () => p.ZP.getKeybindForAction(O.kg4.SAVE_CLIP));
        if (!a || null == d || n) return null;
        let j = g.BB(d.shortcut, !0);
        return (0, r.jsx)(x, {
            keybindString: j,
            targetElementRef: e,
            children: (0, r.jsx)(f.Z, {
                ref: e,
                disabled: s,
                tooltipText:
                    null != d
                        ? v.intl.formatToPlainString(v.t.HIMcv1, { hotkey: g.BB(null == d ? void 0 : d.shortcut, !0) })
                        : v.intl.string(v.t.s52pju),
                onClick: () => {
                    (0, y.br)(), (0, u.v)(t, u.d.CLIP);
                },
                onContextMenu: C,
                icon: o.AlX,
            }),
        });
    };
