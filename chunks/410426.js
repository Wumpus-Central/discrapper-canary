n.d(t, { Z: () => v });
var l = n(54381),
    r = n(473749),
    i = n(120356),
    a = n.n(i),
    s = n(399606),
    c = n(481060),
    o = n(547972),
    u = n(556296),
    d = n(13140),
    p = n(341569),
    m = n(981631),
    f = n(332325),
    b = n(388032),
    y = n(46733);
function v(e) {
    let { isEmptyBecauseQuery: t } = e,
        n = (0, s.e7)([u.ZP], () => u.ZP.getKeybindForAction(m.kg4.SAVE_CLIP)),
        i = (0, p.z8)(),
        v = t ? y.noSearchResultsImage : y.noClipsImage,
        h = r.useCallback(() => {
            (0, o.Z)(f.Z.CLIPS, { stackingBehavior: "stack" });
        }, []),
        j = (() => {
            if (!i) return b.intl.format(b.t["3iveao"], { onClick: h });
            if (t) return b.intl.string(b.t["xrEs6/"]);
            if (null == n) return b.intl.format(b.t.jpKk7e, { onClick: h });
            {
                let e = d.BB(n.shortcut, !0);
                return b.intl.format(b.t["xY/8K5"], {
                    keybind: e,
                    keybindHook: () =>
                        (0, l.jsx)("span", {
                            className: y.keybindHintKeys,
                            children: (0, l.jsx)(c.M2$, {
                                className: y.keybindShortcut,
                                shortcut: e,
                            }),
                        }),
                });
            }
        })();
    return (0, l.jsx)("div", {
        className: y.container,
        children: (0, l.jsxs)("div", {
            className: y.content,
            children: [
                (0, l.jsx)("div", { className: v }),
                (0, l.jsx)(c.Text, {
                    variant: "text-md/medium",
                    className: a()(y.noClipsText, { [y.noSearchResultsText]: t }),
                    children: j,
                }),
            ],
        }),
    });
}
