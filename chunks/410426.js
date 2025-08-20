n.d(t, { Z: () => h });
var l = n(951288),
    r = n(647438),
    a = n(120356),
    i = n.n(a),
    o = n(399606),
    c = n(481060),
    s = n(547972),
    u = n(556296),
    d = n(13140),
    p = n(435064),
    m = n(981631),
    f = n(332325),
    b = n(388032),
    g = n(641719);
function h(e) {
    let { isEmptyBecauseQuery: t, closePopout: n } = e,
        a = (0, o.e7)([u.ZP], () => u.ZP.getKeybindForAction(m.kg4.SAVE_CLIP)),
        h = (0, o.e7)([p.Z], () => p.Z.getSettings().clipsEnabled),
        y = t ? g.noSearchResultsImage : g.noClipsImage,
        x = r.useCallback(() => {
            n(), (0, s.Z)(f.Z.CLIPS);
        }, [n]),
        j = (() => {
            if (!h) return b.intl.format(b.t["3iveam"], { onClick: x });
            if (t) return b.intl.string(b.t["xrEs6+"]);
            if (null == a) return b.intl.format(b.t.jpKk7e, { onClick: x });
            {
                let e = d.BB(a.shortcut, !0);
                return b.intl.format(b.t["xY/8Ky"], {
                    keybind: e,
                    keybindHook: () =>
                        (0, l.jsx)("span", {
                            className: g.keybindHintKeys,
                            children: (0, l.jsx)(c.M2$, {
                                className: g.keybindShortcut,
                                shortcut: e,
                            }),
                        }),
                });
            }
        })();
    return (0, l.jsx)("div", {
        className: g.container,
        children: (0, l.jsxs)("div", {
            className: g.content,
            children: [
                (0, l.jsx)("div", { className: y }),
                (0, l.jsx)(c.Text, {
                    variant: "text-md/medium",
                    className: i()(g.noClipsText, { [g.noSearchResultsText]: t }),
                    children: j,
                }),
            ],
        }),
    });
}
