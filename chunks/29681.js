n.d(t, { default: () => g });
var s = n(627968),
    i = n(64700),
    r = n(158954),
    l = n(311907),
    o = n(397927),
    a = n(97260),
    d = n(117178),
    c = n(775121),
    h = n(532624),
    u = n(350535);
n(980504);
var p = n(652215),
    m = n(985018),
    _ = n(316173);
function g(e) {
    let { transitionState: t, onClose: n } = e,
        g = (0, l.bG)([h.Ay], () => h.Ay.getKeybindForAction(p.hCu.SOUNDBOARD_HOLD)),
        [b, C] = i.useState(g?.shortcut ?? []),
        f = i.useCallback(() => {
            if (0 === b.length) return null != g && a.A.deleteKeybind(g.id), n();
            null == g
                ? a.A.addKeybind({ action: p.hCu.SOUNDBOARD_HOLD, shortcut: b, enabled: !0, params: {} })
                : a.A.setKeybind({ ...g, shortcut: b }),
                n();
        }, [g, n, b]);
    i.useEffect(
        () => (
            c.A.disable(),
            () => {
                c.A.enable();
            }
        ),
        [],
    );
    let R = i.useMemo(
        () => [
            { text: m.intl.string(m.t["ETE/oC"]), onClick: n, variant: "secondary" },
            { text: m.intl.string(m.t["R3BPH+"]), onClick: f, variant: "primary" },
        ],
        [n, f],
    );
    return (0, s.jsxs)(r.Modal, {
        transitionState: t,
        title: m.intl.string(m.t["0Osu3x"]),
        actions: R,
        onClose: n,
        children: [
            (0, s.jsx)(o.po8, { className: _.$e, messageType: o.YCn.WARNING, children: m.intl.string(m.t["O2v/eP"]) }),
            (0, s.jsx)(o.Heading, {
                className: _._5,
                variant: "eyebrow",
                color: "text-default",
                children: m.intl.string(m.t.UUpAD6),
            }),
            (0, s.jsx)(o.Text, { className: _.XI, variant: "text-md/normal", children: m.intl.string(m.t["1xFbP/"]) }),
            (0, s.jsx)(o.Text, { className: _.lf, variant: "text-sm/normal", children: m.intl.string(m.t.laNlTl) }),
            (0, s.jsx)(o.Heading, {
                className: _._5,
                variant: "eyebrow",
                color: "text-default",
                children: m.intl.string(m.t["1La4tC"]),
            }),
            (0, s.jsx)(d.A, { defaultValue: b, onChange: C }),
            (0, s.jsx)(o.MzZ, {
                className: _.WA,
                onClick: () => C((0, u.OH)("ctrl+`")),
                children: m.intl.string(m.t["s7+2rQ"]),
            }),
        ],
    });
}
