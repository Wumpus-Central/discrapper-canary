n.d(t, { t: () => h });
var i = n(627968),
    s = n(64700),
    l = n(284009),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(97260),
    c = n(117178),
    u = n(419954),
    m = n(532624),
    g = n(780964),
    _ = n(652215),
    x = n(985018),
    A = n(613060);
let h = (0, u.E2)(g.X.CLIPS_KEYBIND, {
    useSearchTerms: () => [x.intl.string(x.t.pf54EU), x.intl.string(x.t["QyB/jK"])],
    Component: () => {
        let e = (0, r.bG)([m.Ay], () => m.Ay.getKeybindForAction(_.hCu.SAVE_CLIP, !0));
        a()(null != e, "Save clip keybind unset");
        let t = s.useCallback(
            (t) => {
                d.A.setKeybind({ ...e, shortcut: t });
            },
            [e],
        );
        return (0, i.jsx)(o.D0$, {
            label: x.intl.string(x.t.pf54EU),
            description: x.intl.string(x.t["QyB/jK"]),
            layout: "horizontal",
            children: (0, i.jsx)("div", {
                className: A.g,
                children: (0, i.jsx)(c.A, { defaultValue: e.shortcut, onChange: t }),
            }),
        });
    },
});
