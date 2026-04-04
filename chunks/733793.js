n.d(t, { N: () => p });
var i = n(627968),
    s = n(64700),
    l = n(284009),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(97260),
    c = n(117178),
    u = n(734066),
    m = n(419954),
    g = n(532624),
    _ = n(780964),
    x = n(652215),
    A = n(985018),
    h = n(613060);
let p = (0, m.E2)(_.X.CLIPS_SCREENSHOT_KEYBIND, {
    useSearchTerms: () => [A.intl.string(A.t["0U/hj7"]), A.intl.string(A.t["5zxkdo"])],
    usePredicate: u.BW,
    Component: () => {
        let e = (0, r.bG)([g.Ay], () => g.Ay.getKeybindForAction(x.hCu.SAVE_CLIP, !0)),
            t = (0, r.bG)([g.Ay], () => g.Ay.getKeybindForAction(x.hCu.SAVE_SCREENSHOT, !0));
        a()(null != e, "Save clip keybind unset"), a()(null != t, "Save screenshot keybind unset");
        let n = s.useCallback(
            (e) => {
                d.A.setKeybind({ ...t, shortcut: e });
            },
            [t],
        );
        return (0, i.jsx)(o.D0$, {
            label: A.intl.string(A.t["0U/hj7"]),
            description: A.intl.string(A.t["5zxkdo"]),
            layout: "horizontal",
            children: (0, i.jsx)("div", {
                className: h.g,
                children: (0, i.jsx)(c.A, { defaultValue: t.shortcut, onChange: n }),
            }),
        });
    },
});
