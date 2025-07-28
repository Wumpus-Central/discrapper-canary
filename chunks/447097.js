(n.d(t, { Z: () => d }), n(704826), n(35282), n(388685), n(457542));
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
        j = r.useRef(null),
        b = o.intl.string(o.t['C/ZAw8']),
        y = o.intl.string(o.t.fZSi1N),
        v = r.useCallback(
            (e) => {
                (S(e), x(null));
            },
            [S, x]
        );
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
                    n({
                        mfaType: 'backup',
                        data: p.replace(/-/g, '')
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
                    children: (0, l.jsxs)(s.xJW, {
                        title: b,
                        children: [
                            (0, l.jsx)(s.oil, {
                                inputRef: j,
                                onChange: v,
                                placeholder: y,
                                maxLength: i.tL,
                                minLength: i.th,
                                value: p,
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
                    disabled: p.length < 8,
                    submitting: f
                })
            ]
        })
    );
}
