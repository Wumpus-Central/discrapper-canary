n.d(t, { A: () => d });
var a = n(627968),
    r = n(64700),
    i = n(533925),
    s = n(292666),
    l = n(398450),
    o = n(985018);
function d(e) {
    let { mfaChallenge: t, finish: n, setSlide: d, onClose: c, isSlideReady: u, headerAlignStart: h } = e,
        [g, m] = r.useState(!1),
        [p, f] = r.useState(null),
        [x, S] = r.useState(""),
        b = r.useRef(null);
    return (
        r.useEffect(() => {
            u && b.current?.focus();
        }, [u]),
        (0, a.jsxs)("form", {
            onSubmit: (e) => {
                e.preventDefault(),
                    m(!0),
                    f(null),
                    n({ mfaType: "totp", data: x })
                        .catch((e) => {
                            f(e.body?.message ?? e.message);
                        })
                        .finally(() => {
                            m(!1);
                        });
            },
            children: [
                (0, a.jsx)(l.A.SlideHeader, { onClose: c, headerAlignStart: h }),
                (0, a.jsxs)(l.A.SlideContent, {
                    scrollbarType: "none",
                    children: [
                        (0, a.jsx)(s.k, {
                            label: o.intl.string(o.t.HZPBOd),
                            inputRef: b,
                            onChange: S,
                            placeholder: o.intl.string(o.t.tARzgo),
                            maxLength: i.XZ,
                            minLength: i.XZ,
                            value: x,
                            autoComplete: "one-time-code",
                            spellCheck: "false",
                            disabled: g,
                        }),
                        (0, a.jsx)(l.A.SlideError, { error: p }),
                    ],
                }),
                (0, a.jsx)(l.A.SlideFooter, {
                    mfaChallenge: t,
                    setSlide: d,
                    showConfirm: !0,
                    disabled: x.length !== i.XZ,
                    submitting: g,
                }),
            ],
        })
    );
}
