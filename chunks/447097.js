n.d(t, { Z: () => c }), n(704826), n(35282), n(388685), n(457542);
var r = n(54381),
    l = n(473749),
    i = n(658550),
    s = n(481060),
    a = n(507453),
    o = n(388032);
function c(e) {
    let { mfaChallenge: t, finish: n, setSlide: c, onClose: d, isSlideReady: u, headerAlignStart: f } = e,
        [h, g] = l.useState(!1),
        [m, p] = l.useState(null),
        [b, j] = l.useState(""),
        x = l.useRef(null),
        y = o.intl.string(o.t["C/ZAw/"]),
        S = o.intl.string(o.t.fZSi1D),
        v = l.useCallback(
            (e) => {
                j(e), p(null);
            },
            [j, p],
        );
    return (
        l.useEffect(() => {
            if (u) {
                var e;
                null == (e = x.current) || e.focus();
            }
        }, [u]),
        (0, r.jsxs)("form", {
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
                (0, r.jsx)(a.Z.SlideHeader, {
                    onClose: d,
                    headerAlignStart: f,
                }),
                (0, r.jsxs)(a.Z.SlideContent, {
                    children: [
                        (0, r.jsx)(s.oil, {
                            label: y,
                            inputRef: x,
                            onChange: v,
                            placeholder: S,
                            maxLength: i.tL,
                            minLength: i.th,
                            value: b,
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
                    disabled: b.length < 8,
                    submitting: h,
                }),
            ],
        })
    );
}
