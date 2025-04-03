n.d(t, { Z: () => x });
var r = n(200651);
n(192379);
var i = n(399606),
    l = n(704215),
    o = n(481060),
    a = n(239091),
    s = n(906732),
    c = n(522651),
    u = n(765585),
    d = n(870569),
    p = n(819640),
    h = n(556296),
    f = n(13140),
    g = n(924557),
    m = n(435064),
    b = n(39604),
    y = n(981631),
    _ = n(388032),
    v = n(856587);
function O(e) {
    (0, a.jW)(e, async () => {
        let { default: e } = await n.e('21960').then(n.bind(n, 999466));
        return (t) =>
            (0, r.jsx)(
                e,
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
                })({}, t)
            );
    });
}
let j = (e) => {
        let { keybindString: t, children: n } = e,
            i = (e, t) => {
                e.stopPropagation(), e.preventDefault(), null == t || t();
            };
        return (0, r.jsx)(o.yRy, {
            shouldShow: !1,
            position: 'top',
            align: 'center',
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return (0, r.jsx)(u.Z, {
                    dismissibleContent: l.z.CLIPS_ONBOARDING_CLIP_BUTTON_COACHMARK,
                    shouldUseHorizontalButtons: !0,
                    inlineArt: !0,
                    artClassName: v.clipsEducationArt,
                    position: 'top',
                    header: (0, r.jsx)('div', {
                        className: v.header,
                        children: _.NW.format(_.t['o+srEx'], {
                            keybind: t,
                            keybindHook: () =>
                                (0, r.jsx)('span', {
                                    className: v.keybindHintKeys,
                                    children: (0, r.jsx)(o.M2$, {
                                        className: v.keybindShortcut,
                                        shortcut: t
                                    })
                                })
                        })
                    }),
                    headerClassName: v.clipsEducationHeader,
                    body: (0, r.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        color: 'always-white',
                        className: v.bodyText,
                        children: _.NW.format(_.t.DWeRm5, {
                            keybindHook: () =>
                                (0, r.jsx)('div', {
                                    className: v.keyCombo,
                                    children: t
                                }),
                            keybind: t
                        })
                    }),
                    onClose: (e) => {
                        i(e, n);
                    }
                });
            },
            children: () => n
        });
    },
    x = () => {
        let { parentAnalyticsLocation: e } = (0, s.ZP)(),
            t = (0, i.e7)([p.Z], () => p.Z.hasLayers()),
            n = (0, g.Go)(),
            { clipsEnabled: l, isAtMaxSavingClipsOperations: a } = (0, i.cj)([m.Z], () => ({
                clipsEnabled: m.Z.getSettings().clipsEnabled,
                isAtMaxSavingClipsOperations: m.Z.getIsAtMaxSaveClipOperations()
            })),
            u = (0, i.e7)([h.ZP], () => h.ZP.getKeybindForAction(y.kg4.SAVE_CLIP));
        if (!(n && l) || null == u || t) return null;
        let v = f.BB(u.shortcut, !0);
        return (0, r.jsx)(j, {
            keybindString: v,
            children: (0, r.jsx)(d.Z, {
                disabled: a,
                tooltipText: null != u ? _.NW.formatToPlainString(_.t.HIMcv7, { hotkey: f.BB(null == u ? void 0 : u.shortcut, !0) }) : _.NW.string(_.t.s52pjo),
                onClick: () => {
                    (0, b.C1)(), (0, c.v)(e, c.d.CLIP);
                },
                onContextMenu: O,
                icon: o.AlX
            })
        });
    };
