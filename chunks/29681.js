n.d(t, { default: () => C });
var s = n(627968),
    i = n(64700),
    r = n(189213),
    l = n(17928),
    o = n(512950),
    a = n(534514),
    d = n(834730),
    c = n(349288),
    h = n(97260),
    u = n(635242),
    p = n(775121),
    m = n(532624),
    _ = n(350535);
n(980504);
var g = n(652215),
    b = n(985018),
    f = n(690320);
function C(e) {
    let { transitionState: t, onClose: n } = e,
        C = (0, l.bG)([m.Ay], () => m.Ay.getKeybindForAction(g.hCu.SOUNDBOARD_HOLD)),
        [R, E] = i.useState(C?.shortcut ?? []),
        D = i.useCallback(() => {
            if (0 === R.length) return null != C && h.A.deleteKeybind(C.id), n();
            null == C
                ? h.A.addKeybind({ action: g.hCu.SOUNDBOARD_HOLD, shortcut: R, enabled: !0, params: {} })
                : h.A.setKeybind({ ...C, shortcut: R }),
                n();
        }, [C, n, R]);
    i.useEffect(
        () => (
            p.A.disable(),
            () => {
                p.A.enable();
            }
        ),
        [],
    );
    let v = i.useMemo(
        () => [
            { text: b.intl.string(b.t["ETE/oC"]), onClick: n, variant: "secondary" },
            { text: b.intl.string(b.t["R3BPH+"]), onClick: D, variant: "primary" },
        ],
        [n, D],
    );
    return (0, s.jsxs)(r.Modal, {
        transitionState: t,
        title: b.intl.string(b.t["0Osu3x"]),
        actions: v,
        onClose: n,
        children: [
            (0, s.jsx)(o.p, { className: f.$e, messageType: o.Y.WARNING, children: b.intl.string(b.t["O2v/eP"]) }),
            (0, s.jsx)(a.D, {
                className: f._5,
                variant: "eyebrow",
                color: "text-default",
                children: b.intl.string(b.t.UUpAD6),
            }),
            (0, s.jsx)(d.E, { className: f.XI, variant: "text-md/normal", children: b.intl.string(b.t["1xFbP/"]) }),
            (0, s.jsx)(d.E, { className: f.lf, variant: "text-sm/normal", children: b.intl.string(b.t.laNlTl) }),
            (0, s.jsx)(a.D, {
                className: f._5,
                variant: "eyebrow",
                color: "text-default",
                children: b.intl.string(b.t["1La4tC"]),
            }),
            (0, s.jsx)(u.A, { defaultValue: R, onChange: E }),
            (0, s.jsx)(c.Anchor, {
                className: f.WA,
                onClick: () => E((0, _.OH)("ctrl+`")),
                children: b.intl.string(b.t["s7+2rQ"]),
            }),
        ],
    });
}
