n.d(t, { Z: () => d }), n(704826), n(35282), n(388685), n(457542);
var l = n(951288),
    r = n(647438),
    i = n(658550),
    s = n(481060),
    a = n(507453),
    o = n(388032);
function d(e) {
    let { mfaChallenge: t, finish: n, setSlide: d, onClose: c, isSlideReady: u, headerAlignStart: h } = e,
        [f, g] = r.useState(!1),
        [m, p] = r.useState(null),
        [x, S] = r.useState(""),
        b = r.useRef(null),
        j = o.intl.string(o.t["C/ZAw8"]),
        y = o.intl.string(o.t.fZSi1N),
        v = r.useCallback(
            (e) => {
                S(e), p(null);
            },
            [S, p],
        );
    return (
        r.useEffect(() => {
            if (u) {
                var e;
                null == (e = b.current) || e.focus();
            }
        }, [u]),
        (0, l.jsxs)("form", {
            onSubmit: (e) => {
                e.preventDefault(),
                    g(!0),
                    n({
                        mfaType: "backup",
                        data: x.replace(/-/g, ""),
                    })
                        .catch((e) => {
                            var t, n;
                            p(null != (n = null == (t = e.body) ? void 0 : t.message) ? n : e.message);
                        })
                        .finally(() => {
                            g(!1);
                        });
            },
            children: [
                (0, l.jsx)(a.Z.SlideHeader, {
                    onClose: c,
                    headerAlignStart: h,
                }),
                (0, l.jsxs)(a.Z.SlideContent, {
                    children: [
                        (0, l.jsx)(s.oil, {
                            label: j,
                            inputRef: b,
                            onChange: v,
                            placeholder: y,
                            maxLength: i.tL,
                            minLength: i.th,
                            value: x,
                            spellCheck: "false",
                            disabled: f,
                        }),
                        (0, l.jsx)(a.Z.SlideError, { error: m }),
                    ],
                }),
                (0, l.jsx)(a.Z.SlideFooter, {
                    mfaChallenge: t,
                    setSlide: d,
                    showConfirm: !0,
                    disabled: x.length < 8,
                    submitting: f,
                }),
            ],
        })
    );
}
