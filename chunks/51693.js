n.d(t, { Z: () => u }), n(388685), n(457542);
var r = n(255367),
    l = n(73800),
    i = n(658550),
    s = n(481060),
    o = n(540059),
    a = n(507453),
    c = n(388032);
function u(e) {
    let { mfaChallenge: t, finish: n, setSlide: u, onClose: d, isSlideReady: f } = e,
        h = (0, o.Q3)('TotpSlide'),
        [m, p] = l.useState(!1),
        [g, b] = l.useState(null),
        [j, y] = l.useState(''),
        x = l.useRef(null);
    return (
        l.useEffect(() => {
            if (f) {
                var e;
                null == (e = x.current) || e.focus();
            }
        }, [f]),
        (0, r.jsxs)('form', {
            onSubmit: (e) => {
                e.preventDefault(),
                    p(!0),
                    b(null),
                    n({
                        mfaType: 'totp',
                        data: j
                    })
                        .catch((e) => {
                            var t, n;
                            b(null != (n = null == (t = e.body) ? void 0 : t.message) ? n : e.message);
                        })
                        .finally(() => {
                            p(!1);
                        });
            },
            children: [
                (0, r.jsx)(a.Z.SlideHeader, { onClose: d }),
                (0, r.jsx)(a.Z.SlideContent, {
                    scrollbarType: h ? 'none' : void 0,
                    children: (0, r.jsxs)(s.xJW, {
                        title: c.intl.string(c.t.HZPBOT),
                        children: [
                            (0, r.jsx)(s.oil, {
                                inputRef: x,
                                onChange: y,
                                placeholder: c.intl.string(c.t.tARzgo),
                                maxLength: i.gH,
                                minLength: i.gH,
                                value: j,
                                autoComplete: 'one-time-code',
                                spellCheck: 'false',
                                disabled: m
                            }),
                            (0, r.jsx)(a.Z.SlideError, { error: g })
                        ]
                    })
                }),
                (0, r.jsx)(a.Z.SlideFooter, {
                    mfaChallenge: t,
                    setSlide: u,
                    showConfirm: !0,
                    disabled: j.length !== i.gH,
                    submitting: m
                })
            ]
        })
    );
}
