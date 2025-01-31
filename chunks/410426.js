l.d(t, { Z: () => g });
var a = l(200651),
    n = l(192379),
    i = l(120356),
    s = l.n(i),
    r = l(399606),
    o = l(481060),
    c = l(547972),
    d = l(556296),
    u = l(13140),
    m = l(435064),
    p = l(981631),
    x = l(332325),
    v = l(388032),
    h = l(680901);
function g(e) {
    let { isEmptyBecauseQuery: t, closePopout: l } = e,
        i = (0, r.e7)([d.Z], () => d.Z.getKeybindForAction(p.kg4.SAVE_CLIP)),
        g = (0, r.e7)([m.Z], () => m.Z.getSettings().clipsEnabled),
        C = t ? h.noSearchResultsImage : h.noClipsImage,
        f = n.useCallback(() => {
            l(), (0, c.Z)(x.Z.CLIPS);
        }, [l]),
        j = (() => {
            if (!g) return v.intl.format(v.t['3iveam'], { onClick: f });
            if (t) return v.intl.string(v.t['xrEs6+']);
            if (null == i) return v.intl.format(v.t.jpKk7e, { onClick: f });
            {
                let e = u.BB(i.shortcut, !0);
                return v.intl.format(v.t['xY/8Ky'], {
                    keybind: e,
                    keybindHook: () =>
                        (0, a.jsx)('span', {
                            className: h.keybindHintKeys,
                            children: (0, a.jsx)(o.M2$, {
                                className: h.keybindShortcut,
                                shortcut: e
                            })
                        })
                });
            }
        })();
    return (0, a.jsx)('div', {
        className: h.container,
        children: (0, a.jsxs)('div', {
            className: h.content,
            children: [
                (0, a.jsx)('div', { className: C }),
                (0, a.jsx)(o.Text, {
                    variant: 'text-md/medium',
                    className: s()(h.noClipsText, { [h.noSearchResultsText]: t }),
                    children: j
                })
            ]
        })
    });
}
