n.d(t, {
    Z: function () {
        return g;
    }
});
var l = n(200651),
    a = n(192379),
    i = n(120356),
    o = n.n(i),
    s = n(399606),
    r = n(481060),
    c = n(547972),
    d = n(556296),
    u = n(13140),
    m = n(435064),
    p = n(981631),
    v = n(332325),
    h = n(388032),
    x = n(680901);
function g(e) {
    let { isEmptyBecauseQuery: t, closePopout: n } = e,
        i = (0, s.e7)([d.Z], () => d.Z.getKeybindForAction(p.kg4.SAVE_CLIP)),
        g = (0, s.e7)([m.Z], () => m.Z.getSettings().clipsEnabled),
        C = t ? x.noSearchResultsImage : x.noClipsImage,
        f = a.useCallback(() => {
            n(), (0, c.Z)(v.Z.CLIPS);
        }, [n]),
        j = (() => {
            if (!g) return h.intl.format(h.t['3iveam'], { onClick: f });
            if (t) return h.intl.string(h.t['xrEs6+']);
            if (null == i) return h.intl.format(h.t.jpKk7e, { onClick: f });
            {
                let e = u.BB(i.shortcut, !0);
                return h.intl.format(h.t['xY/8Ky'], {
                    keybind: e,
                    keybindHook: () =>
                        (0, l.jsx)('span', {
                            className: x.keybindHintKeys,
                            children: (0, l.jsx)(r.KeyCombo, {
                                className: x.keybindShortcut,
                                shortcut: e
                            })
                        })
                });
            }
        })();
    return (0, l.jsx)('div', {
        className: x.container,
        children: (0, l.jsxs)('div', {
            className: x.content,
            children: [
                (0, l.jsx)('div', { className: C }),
                (0, l.jsx)(r.Text, {
                    variant: 'text-md/medium',
                    className: o()(x.noClipsText, { [x.noSearchResultsText]: t }),
                    children: j
                })
            ]
        })
    });
}
