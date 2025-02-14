n.d(t, { Z: () => Z });
var i = n(200651);
n(192379);
var l = n(399606),
    r = n(704215),
    a = n(481060),
    o = n(239091),
    s = n(765585),
    c = n(870569),
    d = n(819640),
    u = n(556296),
    h = n(13140),
    p = n(924557),
    m = n(435064),
    g = n(39604),
    f = n(981631),
    _ = n(388032),
    v = n(804999);
function C(e) {
    (0, o.jW)(e, async () => {
        let { default: e } = await n.e('21960').then(n.bind(n, 999466));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
function x() {
    (0, g.C1)();
}
let I = (e) => {
        let { keybindString: t, children: n } = e,
            l = (e, t) => {
                e.stopPropagation(), e.preventDefault(), null == t || t();
            };
        return (0, i.jsx)(a.yRy, {
            shouldShow: !1,
            position: 'top',
            align: 'center',
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return (0, i.jsx)(s.Z, {
                    dismissibleContent: r.z.CLIPS_ONBOARDING_CLIP_BUTTON_COACHMARK,
                    shouldUseHorizontalButtons: !0,
                    inlineArt: !0,
                    artClassName: v.clipsEducationArt,
                    position: 'top',
                    header: (0, i.jsx)('div', {
                        className: v.header,
                        children: _.intl.format(_.t['o+srEx'], {
                            keybind: t,
                            keybindHook: () =>
                                (0, i.jsx)('span', {
                                    className: v.keybindHintKeys,
                                    children: (0, i.jsx)(a.M2$, {
                                        className: v.keybindShortcut,
                                        shortcut: t
                                    })
                                })
                        })
                    }),
                    headerClassName: v.clipsEducationHeader,
                    body: (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            color: 'always-white',
                            className: v.bodyText,
                            children: _.intl.format(_.t.DWeRm5, {
                                keybindHook: () =>
                                    (0, i.jsx)('div', {
                                        className: v.keyCombo,
                                        children: t
                                    }),
                                keybind: t
                            })
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
    Z = () => {
        let e = (0, l.e7)([d.Z], () => d.Z.hasLayers()),
            t = (0, p.Go)(),
            { clipsEnabled: n, isAtMaxSavingClipsOperations: r } = (0, l.cj)([m.Z], () => ({
                clipsEnabled: m.Z.getSettings().clipsEnabled,
                isAtMaxSavingClipsOperations: m.Z.getIsAtMaxSaveClipOperations()
            })),
            o = (0, l.e7)([u.ZP], () => u.ZP.getKeybindForAction(f.kg4.SAVE_CLIP));
        if (!(t && n) || null == o || e) return null;
        let s = h.BB(o.shortcut, !0);
        return (0, i.jsx)(I, {
            keybindString: s,
            children: (0, i.jsx)(c.Z, {
                disabled: r,
                tooltipText: null != o ? _.intl.formatToPlainString(_.t.HIMcv7, { hotkey: h.BB(null == o ? void 0 : o.shortcut, !0) }) : _.intl.string(_.t.s52pjo),
                onClick: x,
                onContextMenu: C,
                icon: a.AlX
            })
        });
    };
