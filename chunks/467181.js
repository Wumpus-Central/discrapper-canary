n.d(t, { A: () => d }), n(896048), n(492834);
var r = n(627968),
    l = n(64700),
    i = n(533925),
    s = n(397927),
    a = n(398450),
    o = n(985018);
function d(e) {
    let { mfaChallenge: t, finish: n, setSlide: d, onClose: c, isSlideReady: u, headerAlignStart: f } = e,
        [h, g] = l.useState(!1),
        [p, m] = l.useState(null),
        [b, j] = l.useState(""),
        y = l.useRef(null);
    return (
        l.useEffect(() => {
            if (u) {
                var e;
                null == (e = y.current) || e.focus();
            }
        }, [u]),
        (0, r.jsxs)("form", {
            onSubmit: (e) => {
                e.preventDefault(),
                    g(!0),
                    m(null),
                    n({
                        mfaType: "totp",
                        data: b,
                    })
                        .catch((e) => {
                            var t, n;
                            m(null != (t = null == (n = e.body) ? void 0 : n.message) ? t : e.message);
                        })
                        .finally(() => {
                            g(!1);
                        });
            },
            children: [
                (0, r.jsx)(a.A.SlideHeader, {
                    onClose: c,
                    headerAlignStart: f,
                }),
                (0, r.jsxs)(a.A.SlideContent, {
                    scrollbarType: "none",
                    children: [
                        (0, r.jsx)(s.ksK, {
                            label: o.intl.string(o.t.HZPBOd),
                            inputRef: y,
                            onChange: j,
                            placeholder: o.intl.string(o.t.tARzgo),
                            maxLength: i.XZ,
                            minLength: i.XZ,
                            value: b,
                            autoComplete: "one-time-code",
                            spellCheck: "false",
                            disabled: h,
                        }),
                        (0, r.jsx)(a.A.SlideError, { error: p }),
                    ],
                }),
                (0, r.jsx)(a.A.SlideFooter, {
                    mfaChallenge: t,
                    setSlide: d,
                    showConfirm: !0,
                    disabled: b.length !== i.XZ,
                    submitting: h,
                }),
            ],
        })
    );
}
