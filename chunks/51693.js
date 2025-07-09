(n.d(t, { Z: () => c }), n(388685), n(457542));
var r = n(255367),
    l = n(73800),
    i = n(658550),
    s = n(481060),
    o = n(507453),
    a = n(388032);
function c(e) {
    let { mfaChallenge: t, finish: n, setSlide: c, onClose: u, isSlideReady: d } = e,
        [f, h] = l.useState(!1),
        [m, p] = l.useState(null),
        [g, b] = l.useState(''),
        y = l.useRef(null);
    return (
        l.useEffect(() => {
            if (d) {
                var e;
                null == (e = y.current) || e.focus();
            }
        }, [d]),
        (0, r.jsxs)('form', {
            onSubmit: (e) => {
                (e.preventDefault(),
                    h(!0),
                    p(null),
                    n({
                        mfaType: 'totp',
                        data: g
                    })
                        .catch((e) => {
                            var t, n;
                            p(null != (n = null == (t = e.body) ? void 0 : t.message) ? n : e.message);
                        })
                        .finally(() => {
                            h(!1);
                        }));
            },
            children: [
                (0, r.jsx)(o.Z.SlideHeader, { onClose: u }),
                (0, r.jsx)(o.Z.SlideContent, {
                    scrollbarType: 'none',
                    children: (0, r.jsxs)(s.xJW, {
                        title: a.intl.string(a.t.HZPBOT),
                        children: [
                            (0, r.jsx)(s.oil, {
                                inputRef: y,
                                onChange: b,
                                placeholder: a.intl.string(a.t.tARzgo),
                                maxLength: i.gH,
                                minLength: i.gH,
                                value: g,
                                autoComplete: 'one-time-code',
                                spellCheck: 'false',
                                disabled: f
                            }),
                            (0, r.jsx)(o.Z.SlideError, { error: m })
                        ]
                    })
                }),
                (0, r.jsx)(o.Z.SlideFooter, {
                    mfaChallenge: t,
                    setSlide: c,
                    showConfirm: !0,
                    disabled: g.length !== i.gH,
                    submitting: f
                })
            ]
        })
    );
}
