n.d(t, { Z: () => d }), n(388685), n(457542);
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
        x = r.useRef(null);
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
                    p(null),
                    n({
                        mfaType: "totp",
                        data: b,
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
                    scrollbarType: "none",
                    children: [
                        (0, l.jsx)(s.oil, {
                            label: o.intl.string(o.t.HZPBOd),
                            inputRef: x,
                            onChange: S,
                            placeholder: o.intl.string(o.t.tARzgo),
                            maxLength: i.gH,
                            minLength: i.gH,
                            value: b,
                            autoComplete: "one-time-code",
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
                    disabled: b.length !== i.gH,
                    submitting: f,
                }),
            ],
        })
    );
}
