n.d(t, { Z: () => d }), n(704826), n(35282), n(388685), n(457542);
var l = n(54381),
    r = n(473749),
    i = n(658550),
    s = n(481060),
    a = n(507453),
    o = n(388032);
function d(e) {
    let { mfaChallenge: t, finish: n, setSlide: d, onClose: u, isSlideReady: c, headerAlignStart: h } = e,
        [f, g] = r.useState(!1),
        [m, p] = r.useState(null),
        [b, S] = r.useState(""),
        x = r.useRef(null),
        j = o.intl.string(o.t["C/ZAw/"]),
        y = o.intl.string(o.t.fZSi1D),
        v = r.useCallback(
            (e) => {
                S(e), p(null);
            },
            [S, p],
        );
    return (
        r.useEffect(() => {
            if (c) {
                var e;
                null == (e = x.current) || e.focus();
            }
        }, [c]),
        (0, l.jsxs)("form", {
            onSubmit: (e) => {
                e.preventDefault(),
                    g(!0),
                    n({
                        mfaType: "backup",
                        data: b.replace(/-/g, ""),
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
                    onClose: u,
                    headerAlignStart: h,
                }),
                (0, l.jsxs)(a.Z.SlideContent, {
                    children: [
                        (0, l.jsx)(s.oil, {
                            label: j,
                            inputRef: x,
                            onChange: v,
                            placeholder: y,
                            maxLength: i.tL,
                            minLength: i.th,
                            value: b,
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
                    disabled: b.length < 8,
                    submitting: f,
                }),
            ],
        })
    );
}
