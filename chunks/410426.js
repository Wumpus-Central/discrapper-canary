n.d(t, { Z: () => h });
var l = n(951288),
    r = n(647438),
    i = n(120356),
    a = n.n(i),
    s = n(399606),
    c = n(481060),
    o = n(547972),
    u = n(556296),
    d = n(13140),
    p = n(435064),
    m = n(981631),
    f = n(332325),
    y = n(388032),
    b = n(641719);
function h(e) {
    let { isEmptyBecauseQuery: t } = e,
        n = (0, s.e7)([u.ZP], () => u.ZP.getKeybindForAction(m.kg4.SAVE_CLIP)),
        i = (0, s.e7)([p.Z], () => p.Z.getSettings().clipsEnabled),
        h = t ? b.noSearchResultsImage : b.noClipsImage,
        v = r.useCallback(() => {
            (0, o.Z)(f.Z.CLIPS, { stackingBehavior: "stack" });
        }, []),
        g = (() => {
            if (!i) return y.intl.format(y.t["3iveao"], { onClick: v });
            if (t) return y.intl.string(y.t["xrEs6/"]);
            if (null == n) return y.intl.format(y.t.jpKk7e, { onClick: v });
            {
                let e = d.BB(n.shortcut, !0);
                return y.intl.format(y.t["xY/8K5"], {
                    keybind: e,
                    keybindHook: () =>
                        (0, l.jsx)("span", {
                            className: b.keybindHintKeys,
                            children: (0, l.jsx)(c.M2$, {
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
                (0, l.jsx)("div", { className: h }),
                (0, l.jsx)(c.Text, {
                    variant: "text-md/medium",
                    className: a()(b.noClipsText, { [b.noSearchResultsText]: t }),
                    children: g,
                }),
            ],
        }),
    });
}
