n.d(t, { Z: () => g });
var r = n(200651),
    l = n(192379),
    a = n(120356),
    i = n.n(a),
    o = n(399606),
    s = n(481060),
    c = n(547972),
    u = n(556296),
    d = n(13140),
    p = n(435064),
    m = n(981631),
    f = n(332325),
    b = n(388032),
    v = n(291099);
function g(e) {
    let { isEmptyBecauseQuery: t, closePopout: n } = e,
        a = (0, o.e7)([u.ZP], () => u.ZP.getKeybindForAction(m.kg4.SAVE_CLIP)),
        g = (0, o.e7)([p.Z], () => p.Z.getSettings().clipsEnabled),
        j = t ? v.noSearchResultsImage : v.noClipsImage,
        h = l.useCallback(() => {
            n(), (0, c.Z)(f.Z.CLIPS);
        }, [n]),
        y = (() => {
            if (!g) return b.NW.format(b.t['3iveam'], { onClick: h });
            if (t) return b.NW.string(b.t['xrEs6+']);
            if (null == a) return b.NW.format(b.t.jpKk7e, { onClick: h });
            {
                let e = d.BB(a.shortcut, !0);
                return b.NW.format(b.t['xY/8Ky'], {
                    keybind: e,
                    keybindHook: () =>
                        (0, r.jsx)('span', {
                            className: v.keybindHintKeys,
                            children: (0, r.jsx)(s.M2$, {
                                className: v.keybindShortcut,
                                shortcut: e
                            })
                        })
                });
            }
        })();
    return (0, r.jsx)('div', {
        className: v.container,
        children: (0, r.jsxs)('div', {
            className: v.content,
            children: [
                (0, r.jsx)('div', { className: j }),
                (0, r.jsx)(s.Text, {
                    variant: 'text-md/medium',
                    className: i()(v.noClipsText, { [v.noSearchResultsText]: t }),
                    children: y
                })
            ]
        })
    });
}
