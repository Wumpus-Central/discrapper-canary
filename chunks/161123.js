n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var s = n(284009),
    l = n.n(s),
    a = n(311907),
    r = n(834730),
    o = n(97260),
    d = n(117178),
    u = n(15285),
    c = n(942405),
    g = n(532624),
    m = n(9302),
    _ = n(985018),
    A = n(481384);
function h() {
    let e = (0, a.bG)([g.Ay], () => g.Ay.getOverlayKeybind()),
        t = !(0, m.supportsLegacy)(),
        n = !(0, m.supportsOutOfProcess)(),
        [s, h] = (0, a.yK)([u.Ay], () => [u.Ay.canShowAdminWarning, u.Ay.getVisibleGame()], []),
        p = (0, c.NP)(),
        x = null != h && h.elevated && s && !p,
        E = !(0, g.DV)(e?.shortcut ?? []);
    return (0, i.jsx)("div", {
        className: A.hc,
        children: (0, i.jsxs)("div", {
            className: A.eH,
            children: [
                (0, i.jsxs)("div", {
                    className: A.Bu,
                    children: [
                        (0, i.jsx)(r.E, {
                            variant: "text-md/medium",
                            color: "text-strong",
                            children: _.intl.string(_.t.VsAZcC),
                        }),
                        x &&
                            (0, i.jsx)(r.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-warning",
                                className: A.y7,
                                children: _.intl.string(_.t.NsowVa),
                            }),
                        E &&
                            (0, i.jsx)(r.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-warning",
                                className: A.y7,
                                children: _.intl.string(_.t["UNoTw/"]),
                            }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: A.IH,
                    children: (0, i.jsx)(d.A, {
                        disabled: t && n,
                        defaultValue: null != e ? e.shortcut : [],
                        onChange: function (t) {
                            l()(null != e, "Keybind should never be undefined"), o.A.setKeybind({ ...e, shortcut: t });
                        },
                    }),
                }),
            ],
        }),
    });
}
