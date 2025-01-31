n.d(t, { Z: () => u }), n(47120), n(773603);
var l = n(200651),
    i = n(192379),
    s = n(658550),
    r = n(481060),
    o = n(540059),
    a = n(507453),
    d = n(388032);
function u(e) {
    let { mfaChallenge: t, finish: n, setSlide: u, onClose: c, isSlideReady: h } = e,
        m = (0, o.Q3)('TotpSlide'),
        [f, x] = i.useState(!1),
        [g, S] = i.useState(null),
        [v, p] = i.useState(''),
        j = i.useRef(null);
    return (
        i.useEffect(() => {
            if (h) {
                var e;
                null === (e = j.current) || void 0 === e || e.focus();
            }
        }, [h]),
        (0, l.jsxs)('form', {
            onSubmit: (e) => {
                e.preventDefault(),
                    x(!0),
                    S(null),
                    n({
                        mfaType: 'totp',
                        data: v
                    })
                        .catch((e) => {
                            var t, n;
                            S(null !== (n = null === (t = e.body) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : e.message);
                        })
                        .finally(() => {
                            x(!1);
                        });
            },
            children: [
                (0, l.jsx)(a.Z.SlideHeader, { onClose: c }),
                (0, l.jsx)(a.Z.SlideContent, {
                    scrollbarType: m ? 'none' : void 0,
                    children: (0, l.jsxs)(r.xJW, {
                        title: d.intl.string(d.t.HZPBOT),
                        children: [
                            (0, l.jsx)(r.oil, {
                                inputRef: j,
                                onChange: p,
                                placeholder: d.intl.string(d.t.tARzgo),
                                maxLength: s.gH,
                                minLength: s.gH,
                                value: v,
                                autoComplete: 'one-time-code',
                                spellCheck: 'false',
                                disabled: f
                            }),
                            (0, l.jsx)(a.Z.SlideError, { error: g })
                        ]
                    })
                }),
                (0, l.jsx)(a.Z.SlideFooter, {
                    mfaChallenge: t,
                    setSlide: u,
                    showConfirm: !0,
                    disabled: v.length !== s.gH,
                    submitting: f
                })
            ]
        })
    );
}
