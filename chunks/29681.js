n.d(e, { default: () => p });
var a = n(477900),
    s = n(582128),
    i = n(17928),
    l = n(189213),
    r = n(683071),
    c = n(297264),
    o = n(834730),
    d = n(28863),
    u = n(97260),
    h = n(635242),
    x = n(775121),
    b = n(532624),
    g = n(350535);
n(980504);
var m = n(652215),
    A = n(660183),
    C = n(767251);
function p(t) {
    let { transitionState: e, onClose: n } = t,
        p = (0, i.bG)([b.Ay], () => b.Ay.getKeybindForAction(m.hCu.SOUNDBOARD_HOLD)),
        [y, v] = s.useState(p?.shortcut ?? []),
        f = s.useCallback(() => {
            if (0 === y.length) return (null != p && u.A.deleteKeybind(p.id), n());
            (null == p
                ? u.A.addKeybind({ action: m.hCu.SOUNDBOARD_HOLD, shortcut: y, enabled: !0, params: {} })
                : u.A.setKeybind({ ...p, shortcut: y }),
                n());
        }, [p, n, y]);
    s.useEffect(
        () => (
            x.A.disable(),
            () => {
                x.A.enable();
            }
        ),
        [],
    );
    let j = s.useMemo(
        () => [
            { text: A.intl.string(A.t["ETE/oC"]), onClick: n, variant: "secondary" },
            { text: A.intl.string(A.t["R3BPH+"]), onClick: f, variant: "primary" },
        ],
        [n, f],
    );
    return (0, a.jsxs)(l.a, {
        transitionState: e,
        title: A.intl.string(A.t["0Osu3x"]),
        actions: j,
        onClose: n,
        children: [
            (0, a.jsx)("div", {
                className: C.$e,
                children: (0, a.jsx)(r.w, { type: "warning", message: A.intl.string(A.t["O2v/eP"]), role: "static" }),
            }),
            (0, a.jsx)(c.D, {
                className: C._5,
                variant: "eyebrow",
                color: "text-default",
                children: A.intl.string(A.t.UUpAD6),
            }),
            (0, a.jsx)(o.E, { className: C.XI, variant: "text-md/normal", children: A.intl.string(A.t["1xFbP/"]) }),
            (0, a.jsx)(o.E, { className: C.lf, variant: "text-sm/normal", children: A.intl.string(A.t.laNlTl) }),
            (0, a.jsx)(c.D, {
                className: C._5,
                variant: "eyebrow",
                color: "text-default",
                children: A.intl.string(A.t["1La4tC"]),
            }),
            (0, a.jsx)(h.A, { defaultValue: y, onChange: v }),
            (0, a.jsx)(d.Anchor, {
                className: C.WA,
                onClick: () => v((0, g.OH)("ctrl+`")),
                children: A.intl.string(A.t["s7+2rQ"]),
            }),
        ],
    });
}
