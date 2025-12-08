n.d(t, { Z: () => c }), n(388685), n(457542);
var r = n(54381),
    l = n(473749),
    i = n(658550),
    s = n(481060),
    a = n(507453),
    o = n(388032);
function c(e) {
    let { mfaChallenge: t, finish: n, setSlide: c, onClose: u, isSlideReady: d, headerAlignStart: f } = e,
        [h, g] = l.useState(!1),
        [m, b] = l.useState(null),
        [p, j] = l.useState(""),
        y = l.useRef(null);
    return (
        l.useEffect(() => {
            if (d) {
                var e;
                null == (e = y.current) || e.focus();
            }
        }, [d]),
        (0, r.jsxs)("form", {
            onSubmit: (e) => {
                e.preventDefault(),
                    g(!0),
                    b(null),
                    n({
                        mfaType: "totp",
                        data: p,
                    })
                        .catch((e) => {
                            var t, n;
                            b(null != (n = null == (t = e.body) ? void 0 : t.message) ? n : e.message);
                        })
                        .finally(() => {
                            g(!1);
                        });
            },
            children: [
                (0, r.jsx)(a.Z.SlideHeader, {
                    onClose: u,
                    headerAlignStart: f,
                }),
                (0, r.jsxs)(a.Z.SlideContent, {
                    scrollbarType: "none",
                    children: [
                        (0, r.jsx)(s.oil, {
                            label: o.intl.string(o.t.HZPBOd),
                            inputRef: y,
                            onChange: j,
                            placeholder: o.intl.string(o.t.tARzgo),
                            maxLength: i.gH,
                            minLength: i.gH,
                            value: p,
                            autoComplete: "one-time-code",
                            spellCheck: "false",
                            disabled: h,
                        }),
                        (0, r.jsx)(a.Z.SlideError, { error: m }),
                    ],
                }),
                (0, r.jsx)(a.Z.SlideFooter, {
                    mfaChallenge: t,
                    setSlide: c,
                    showConfirm: !0,
                    disabled: p.length !== i.gH,
                    submitting: h,
                }),
            ],
        })
    );
}
