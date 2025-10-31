n.d(t, { Z: () => x });
var r = n(951288),
    i = n(647438),
    l = n(399606),
    o = n(704215),
    a = n(481060),
    s = n(239091),
    c = n(906732),
    u = n(522651),
    d = n(765585),
    p = n(870569),
    h = n(819640),
    f = n(556296),
    g = n(13140),
    m = n(924557),
    b = n(435064),
    _ = n(39604),
    y = n(981631),
    O = n(388032),
    v = n(611372);
function j(e) {
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
let C = (e) => {
        let { keybindString: t, children: n, targetElementRef: i } = e;
        return (0, r.jsx)(a.yRy, {
            targetElementRef: i,
            shouldShow: !1,
            position: "top",
            align: "center",
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return (0, r.jsx)(d.Z, {
                    dismissibleContent: o.z.CLIPS_ONBOARDING_CLIP_BUTTON_COACHMARK,
                    shouldUseHorizontalButtons: !0,
                    inlineArt: !0,
                    artClassName: v.clipsEducationArt,
                    position: "top",
                    header: (0, r.jsx)("div", {
                        className: v.header,
                        children: O.intl.format(O.t["o+srEw"], {
                            keybind: t,
                            keybindHook: () =>
                                (0, r.jsx)("span", {
                                    className: v.keybindHintKeys,
                                    children: (0, r.jsx)(a.M2$, {
                                        className: v.keybindShortcut,
                                        shortcut: t,
                                    }),
                                }),
                        }),
                    }),
                    headerClassName: v.clipsEducationHeader,
                    body: (0, r.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        color: "always-white",
                        className: v.bodyText,
                        children: O.intl.format(O.t.DWeRm1, {
                            keybindHook: () =>
                                (0, r.jsx)("div", {
                                    className: v.keyCombo,
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
    x = () => {
        let e = i.useRef(null),
            { parentAnalyticsLocation: t } = (0, c.ZP)(),
            n = (0, l.e7)([h.Z], () => h.Z.hasLayers()),
            o = (0, m.Go)(),
            { clipsEnabled: s, isAtMaxSavingClipsOperations: d } = (0, l.cj)([b.Z], () => ({
                clipsEnabled: b.Z.getSettings().clipsEnabled,
                isAtMaxSavingClipsOperations: b.Z.getIsAtMaxSaveClipOperations(),
            })),
            v = (0, l.e7)([f.ZP], () => f.ZP.getKeybindForAction(y.kg4.SAVE_CLIP));
        if (!(o && s) || null == v || n) return null;
        let x = g.BB(v.shortcut, !0);
        return (0, r.jsx)(C, {
            keybindString: x,
            targetElementRef: e,
            children: (0, r.jsx)(p.Z, {
                ref: e,
                disabled: d,
                tooltipText:
                    null != v
                        ? O.intl.formatToPlainString(O.t.HIMcv1, { hotkey: g.BB(null == v ? void 0 : v.shortcut, !0) })
                        : O.intl.string(O.t.s52pju),
                onClick: () => {
                    (0, _.br)(), (0, u.v)(t, u.d.CLIP);
                },
                onContextMenu: j,
                icon: a.AlX,
            }),
        });
    };
