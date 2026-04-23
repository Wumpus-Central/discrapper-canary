n.d(t, { t: () => p });
var i = n(627968),
    s = n(64700),
    l = n(284009),
    a = n.n(l),
    r = n(311907),
    o = n(452027),
    d = n(97260),
    u = n(117178),
    c = n(419954),
    g = n(532624),
    m = n(780964),
    _ = n(652215),
    A = n(985018),
    h = n(239892);
let p = (0, c.E2)(m.X.CLIPS_KEYBIND, {
    useSearchTerms: () => [A.intl.string(A.t.pf54EU), A.intl.string(A.t["QyB/jK"])],
    Component: () => {
        let e = (0, r.bG)([g.Ay], () => g.Ay.getKeybindForAction(_.hCu.SAVE_CLIP, !0));
        a()(null != e, "Save clip keybind unset");
        let t = s.useCallback(
            (t) => {
                d.A.setKeybind({ ...e, shortcut: t });
            },
            [e],
        );
        return (0, i.jsx)(o.D, {
            label: A.intl.string(A.t.pf54EU),
            description: A.intl.string(A.t["QyB/jK"]),
            layout: "horizontal",
            children: (0, i.jsx)("div", {
                className: h.g,
                children: (0, i.jsx)(u.A, { defaultValue: e.shortcut, onChange: t }),
            }),
        });
    },
});
