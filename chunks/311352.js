n.d(t, { Z: () => E });
var r = n(255367),
    i = n(73800),
    l = n(399606),
    o = n(704215),
    a = n(481060),
    s = n(239091),
    c = n(906732),
    u = n(522651),
    d = n(765585),
    h = n(870569),
    p = n(819640),
    f = n(556296),
    g = n(13140),
    m = n(924557),
    b = n(435064),
    _ = n(39604),
    O = n(981631),
    y = n(388032),
    C = n(856587);
function v(e) {
    (0, s.jW)(e, async () => {
        let { default: e } = await n.e('21960').then(n.bind(n, 999466));
        return (t) =>
            (0, r.jsx)(
                e,
                (function (e) {
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
                                var r;
                                ((r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r));
                            }));
                    }
                    return e;
                })({}, t)
            );
    });
}
let j = (e) => {
        let { keybindString: t, children: n, targetElementRef: i } = e,
            l = (e, t) => {
                (e.stopPropagation(), e.preventDefault(), null == t || t());
            };
        return (0, r.jsx)(a.yRy, {
            targetElementRef: i,
            shouldShow: !1,
            position: 'top',
            align: 'center',
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return (0, r.jsx)(d.Z, {
                    dismissibleContent: o.z.CLIPS_ONBOARDING_CLIP_BUTTON_COACHMARK,
                    shouldUseHorizontalButtons: !0,
                    inlineArt: !0,
                    artClassName: C.clipsEducationArt,
                    position: 'top',
                    header: (0, r.jsx)('div', {
                        className: C.header,
                        children: y.intl.format(y.t['o+srEx'], {
                            keybind: t,
                            keybindHook: () =>
                                (0, r.jsx)('span', {
                                    className: C.keybindHintKeys,
                                    children: (0, r.jsx)(a.M2$, {
                                        className: C.keybindShortcut,
                                        shortcut: t
                                    })
                                })
                        })
                    }),
                    headerClassName: C.clipsEducationHeader,
                    body: (0, r.jsx)(a.Text, {
                        variant: 'text-sm/normal',
                        color: 'always-white',
                        className: C.bodyText,
                        children: y.intl.format(y.t.DWeRm5, {
                            keybindHook: () =>
                                (0, r.jsx)('div', {
                                    className: C.keyCombo,
                                    children: t
                                }),
                            keybind: t
                        })
                    }),
                    onClose: (e) => {
                        l(e, n);
                    }
                });
            },
            children: () => n
        });
    },
    E = () => {
        let e = i.useRef(null),
            { parentAnalyticsLocation: t } = (0, c.ZP)(),
            n = (0, l.e7)([p.Z], () => p.Z.hasLayers()),
            o = (0, m.Go)(),
            { clipsEnabled: s, isAtMaxSavingClipsOperations: d } = (0, l.cj)([b.Z], () => ({
                clipsEnabled: b.Z.getSettings().clipsEnabled,
                isAtMaxSavingClipsOperations: b.Z.getIsAtMaxSaveClipOperations()
            })),
            C = (0, l.e7)([f.ZP], () => f.ZP.getKeybindForAction(O.kg4.SAVE_CLIP));
        if (!(o && s) || null == C || n) return null;
        let E = g.BB(C.shortcut, !0);
        return (0, r.jsx)(j, {
            keybindString: E,
            targetElementRef: e,
            children: (0, r.jsx)(h.Z, {
                ref: e,
                disabled: d,
                tooltipText: null != C ? y.intl.formatToPlainString(y.t.HIMcv7, { hotkey: g.BB(null == C ? void 0 : C.shortcut, !0) }) : y.intl.string(y.t.s52pjo),
                onClick: () => {
                    ((0, _.C1)(), (0, u.v)(t, u.d.CLIP));
                },
                onContextMenu: v,
                icon: a.AlX
            })
        });
    };
