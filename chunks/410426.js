n.d(t, { Z: () => h });
var l = n(951288),
    a = n(647438),
    r = n(120356),
    i = n.n(r),
    o = n(399606),
    s = n(481060),
    c = n(547972),
    u = n(556296),
    d = n(13140),
    p = n(435064),
    m = n(981631),
    f = n(332325),
    g = n(388032),
    b = n(641719);
function h(e) {
    let { isEmptyBecauseQuery: t, closePopout: n } = e,
        r = (0, o.e7)([u.ZP], () => u.ZP.getKeybindForAction(m.kg4.SAVE_CLIP)),
        h = (0, o.e7)([p.Z], () => p.Z.getSettings().clipsEnabled),
        x = t ? b.noSearchResultsImage : b.noClipsImage,
        j = a.useCallback(() => {
            n(), (0, c.Z)(f.Z.CLIPS);
        }, [n]),
        y = (() => {
            if (!h) return g.intl.format(g.t["3iveao"], { onClick: j });
            if (t) return g.intl.string(g.t["xrEs6/"]);
            if (null == r) return g.intl.format(g.t.jpKk7e, { onClick: j });
            {
                let e = d.BB(r.shortcut, !0);
                return g.intl.format(g.t["xY/8K5"], {
                    keybind: e,
                    keybindHook: () =>
                        (0, l.jsx)("span", {
                            className: b.keybindHintKeys,
                            children: (0, l.jsx)(s.M2$, {
                                className: b.keybindShortcut,
                                shortcut: e,
                            }),
                        }),
                });
            }
        })();
    return (0, l.jsx)("div", {
        className: b.container,
        children: (0, l.jsxs)("div", {
            className: b.content,
            children: [
                (0, l.jsx)("div", { className: x }),
                (0, l.jsx)(s.Text, {
                    variant: "text-md/medium",
                    className: i()(b.noClipsText, { [b.noSearchResultsText]: t }),
                    children: y,
                }),
            ],
        }),
    });
}
