n.d(t, { Z: () => d }), n(757143), n(47120), n(773603);
var l = n(200651),
    i = n(192379),
    s = n(658550),
    r = n(481060),
    o = n(507453),
    a = n(388032);
function d(e) {
    let { mfaChallenge: t, finish: n, setSlide: d, onClose: u, isSlideReady: c } = e,
        [h, m] = i.useState(!1),
        [f, x] = i.useState(null),
        [g, S] = i.useState(''),
        v = i.useRef(null),
        p = a.intl.string(a.t['C/ZAw8']),
        j = a.intl.string(a.t.fZSi1N),
        b = i.useCallback(
            (e) => {
                S(e), x(null);
            },
            [S, x]
        );
    return (
        i.useEffect(() => {
            if (c) {
                var e;
                null === (e = v.current) || void 0 === e || e.focus();
            }
        }, [c]),
        (0, l.jsxs)('form', {
            onSubmit: (e) => {
                e.preventDefault(),
                    m(!0),
                    n({
                        mfaType: 'backup',
                        data: g.replace(/-/g, '')
                    })
                        .catch((e) => {
                            var t, n;
                            x(null !== (n = null === (t = e.body) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : e.message);
                        })
                        .finally(() => {
                            m(!1);
                        });
            },
            children: [
                (0, l.jsx)(o.Z.SlideHeader, { onClose: u }),
                (0, l.jsx)(o.Z.SlideContent, {
                    children: (0, l.jsxs)(r.xJW, {
                        title: p,
                        children: [
                            (0, l.jsx)(r.oil, {
                                inputRef: v,
                                onChange: b,
                                placeholder: j,
                                maxLength: s.tL,
                                minLength: s.th,
                                value: g,
                                spellCheck: 'false',
                                disabled: h
                            }),
                            (0, l.jsx)(o.Z.SlideError, { error: f })
                        ]
                    })
                }),
                (0, l.jsx)(o.Z.SlideFooter, {
                    mfaChallenge: t,
                    setSlide: d,
                    showConfirm: !0,
                    disabled: g.length < 8,
                    submitting: h
                })
            ]
        })
    );
}
