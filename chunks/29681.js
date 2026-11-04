var s = n(477900),
    a = n(582128),
    i = n(855986),
    l = n(189213),
    r = n(683071),
    c = n(534514),
    d = n(834730),
    o = n(28863),
    u = n(97260),
    h = n(368484),
    m = n(775121),
    b = n(532624),
    x = n(350535);
n(980504);
var g = n(652215),
    A = n(792996),
    y = n(767251);
n.d(
    e,
    {},
    {
        default: function (t) {
            let { transitionState: e, onClose: n } = t,
                C = (0, i.bG)([b.Ay], () => b.Ay.getKeybindForAction(g.hCu.SOUNDBOARD_HOLD)),
                [p, v] = a.useState(C?.shortcut ?? []),
                f = a.useCallback(() => {
                    if (0 === p.length) return (null != C && u.A.deleteKeybind(C.id), n());
                    (null == C
                        ? u.A.addKeybind({ action: g.hCu.SOUNDBOARD_HOLD, shortcut: p, enabled: !0, params: {} })
                        : u.A.setKeybind({ ...C, shortcut: p }),
                        n());
                }, [C, n, p]);
            a.useEffect(
                () => (
                    m.A.disable(),
                    () => {
                        m.A.enable();
                    }
                ),
                [],
            );
            let j = a.useMemo(
                () => [
                    { text: A.intl.string(A.t["ETE/oC"]), onClick: n, variant: "secondary" },
                    { text: A.intl.string(A.t["R3BPH+"]), onClick: f, variant: "primary" },
                ],
                [n, f],
            );
            return (0, s.jsxs)(l.a, {
                transitionState: e,
                title: A.intl.string(A.t["0Osu3x"]),
                actions: j,
                onClose: n,
                children: [
                    (0, s.jsx)("div", {
                        className: y.$e,
                        children: (0, s.jsx)(r.w, {
                            type: "warning",
                            message: A.intl.string(A.t["O2v/eP"]),
                            role: "none",
                        }),
                    }),
                    (0, s.jsx)(c.D, {
                        className: y._5,
                        variant: "body-sm/medium",
                        color: "text-default",
                        children: A.intl.string(A.t.UUpAD6),
                    }),
                    (0, s.jsx)(d.E, {
                        className: y.XI,
                        variant: "body-md/normal",
                        children: A.intl.string(A.t["1xFbP/"]),
                    }),
                    (0, s.jsx)(d.E, {
                        className: y.lf,
                        variant: "body-sm/normal",
                        children: A.intl.string(A.t.laNlTl),
                    }),
                    (0, s.jsx)(c.D, {
                        className: y._5,
                        variant: "body-sm/medium",
                        color: "text-default",
                        children: A.intl.string(A.t["1La4tC"]),
                    }),
                    (0, s.jsx)(h.A, { defaultValue: p, onChange: v }),
                    (0, s.jsx)(o.Anchor, {
                        className: y.WA,
                        onClick: () => v((0, x.OH)("ctrl+`")),
                        children: A.intl.string(A.t["s7+2rQ"]),
                    }),
                ],
            });
        },
    },
);
