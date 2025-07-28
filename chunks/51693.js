(n.d(t, { Z: () => d }), n(388685), n(457542));
var l = n(255367),
    r = n(73800),
    i = n(658550),
    s = n(481060),
    a = n(507453),
    o = n(388032);
function d(e) {
    let { mfaChallenge: t, finish: n, setSlide: d, onClose: c, isSlideReady: u, headerAlignStart: h } = e,
        [f, m] = r.useState(!1),
        [g, x] = r.useState(null),
        [p, S] = r.useState(''),
        j = r.useRef(null);
    return (
        r.useEffect(() => {
            if (u) {
                var e;
                null == (e = j.current) || e.focus();
            }
        }, [u]),
        (0, l.jsxs)('form', {
            onSubmit: (e) => {
                (e.preventDefault(),
                    m(!0),
                    x(null),
                    n({
                        mfaType: 'totp',
                        data: p
                    })
                        .catch((e) => {
                            var t, n;
                            x(null != (n = null == (t = e.body) ? void 0 : t.message) ? n : e.message);
                        })
                        .finally(() => {
                            m(!1);
                        }));
            },
            children: [
                (0, l.jsx)(a.Z.SlideHeader, {
                    onClose: c,
                    headerAlignStart: h
                }),
                (0, l.jsx)(a.Z.SlideContent, {
                    scrollbarType: 'none',
                    children: (0, l.jsxs)(s.xJW, {
                        title: o.intl.string(o.t.HZPBOT),
                        children: [
                            (0, l.jsx)(s.oil, {
                                inputRef: j,
                                onChange: S,
                                placeholder: o.intl.string(o.t.tARzgo),
                                maxLength: i.gH,
                                minLength: i.gH,
                                value: p,
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
                    setSlide: d,
                    showConfirm: !0,
                    disabled: p.length !== i.gH,
                    submitting: f
                })
            ]
        })
    );
}
