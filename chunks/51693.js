(n.d(t, { Z: () => d }), n(388685), n(457542));
var l = n(255367),
    r = n(73800),
    i = n(658550),
    s = n(481060),
    a = n(507453),
    o = n(388032);
function d(e) {
    let { mfaChallenge: t, finish: n, setSlide: d, onClose: c, isSlideReady: u } = e,
        [h, f] = r.useState(!1),
        [m, g] = r.useState(null),
        [x, p] = r.useState(''),
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
                    f(!0),
                    g(null),
                    n({
                        mfaType: 'totp',
                        data: x
                    })
                        .catch((e) => {
                            var t, n;
                            g(null != (n = null == (t = e.body) ? void 0 : t.message) ? n : e.message);
                        })
                        .finally(() => {
                            f(!1);
                        }));
            },
            children: [
                (0, l.jsx)(a.Z.SlideHeader, { onClose: c }),
                (0, l.jsx)(a.Z.SlideContent, {
                    scrollbarType: 'none',
                    children: (0, l.jsxs)(s.xJW, {
                        title: o.intl.string(o.t.HZPBOT),
                        children: [
                            (0, l.jsx)(s.oil, {
                                inputRef: j,
                                onChange: p,
                                placeholder: o.intl.string(o.t.tARzgo),
                                maxLength: i.gH,
                                minLength: i.gH,
                                value: x,
                                autoComplete: 'one-time-code',
                                spellCheck: 'false',
                                disabled: h
                            }),
                            (0, l.jsx)(a.Z.SlideError, { error: m })
                        ]
                    })
                }),
                (0, l.jsx)(a.Z.SlideFooter, {
                    mfaChallenge: t,
                    setSlide: d,
                    showConfirm: !0,
                    disabled: x.length !== i.gH,
                    submitting: h
                })
            ]
        })
    );
}
