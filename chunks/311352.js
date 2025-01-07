var i = n(200651);
n(192379);
var l = n(399606),
    r = n(704215),
    a = n(481060),
    o = n(239091),
    s = n(765585),
    c = n(870569),
    u = n(819640),
    d = n(556296),
    h = n(13140),
    p = n(924557),
    f = n(435064),
    m = n(39604),
    g = n(981631),
    v = n(388032),
    C = n(703757);
function x(e) {
    (0, o.jW)(e, async () => {
        let { default: e } = await n.e('21960').then(n.bind(n, 999466));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
function I() {
    (0, m.C1)();
}
let _ = (e) => {
    let { keybindString: t, children: n } = e,
        l = (e, t) => {
            e.stopPropagation(), e.preventDefault(), null == t || t();
        };
    return (0, i.jsx)(a.Popout, {
        shouldShow: !1,
        position: 'top',
        align: 'center',
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(s.Z, {
                dismissibleContent: r.z.CLIPS_ONBOARDING_CLIP_BUTTON_COACHMARK,
                shouldUseHorizontalButtons: !0,
                inlineArt: !0,
                artClassName: C.clipsEducationArt,
                position: 'top',
                header: (0, i.jsx)('div', {
                    className: C.header,
                    children: v.intl.format(v.t['o+srEx'], {
                        keybind: t,
                        keybindHook: () =>
                            (0, i.jsx)('span', {
                                className: C.keybindHintKeys,
                                children: (0, i.jsx)(a.KeyCombo, {
                                    className: C.keybindShortcut,
                                    shortcut: t
                                })
                            })
                    })
                }),
                headerClassName: C.clipsEducationHeader,
                body: (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(a.Text, {
                        variant: 'text-sm/normal',
                        color: 'always-white',
                        className: C.bodyText,
                        children: v.intl.format(v.t.DWeRm5, {
                            keybindHook: () =>
                                (0, i.jsx)('div', {
                                    className: C.keyCombo,
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
};
t.Z = () => {
    let e = (0, l.e7)([u.Z], () => u.Z.hasLayers()),
        t = (0, p.Go)(),
        { clipsEnabled: n, isAtMaxSavingClipsOperations: r } = (0, l.cj)([f.Z], () => ({
            clipsEnabled: f.Z.getSettings().clipsEnabled,
            isAtMaxSavingClipsOperations: f.Z.getIsAtMaxSaveClipOperations()
        })),
        o = (0, l.e7)([d.Z], () => d.Z.getKeybindForAction(g.kg4.SAVE_CLIP));
    if (!(t && n) || null == o || e) return null;
    let s = h.BB(o.shortcut, !0);
    return (0, i.jsx)(_, {
        keybindString: s,
        children: (0, i.jsx)(c.Z, {
            disabled: r,
            tooltipText: null != o ? v.intl.formatToPlainString(v.t.HIMcv7, { hotkey: h.BB(null == o ? void 0 : o.shortcut, !0) }) : v.intl.string(v.t.s52pjo),
            onClick: I,
            onContextMenu: x,
            icon: a.ClipsIcon
        })
    });
};
