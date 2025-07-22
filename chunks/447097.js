(n.d(t, { Z: () => d }), n(704826), n(35282), n(388685), n(457542));
var l = n(255367),
    r = n(73800),
    s = n(658550),
    i = n(481060),
    a = n(507453),
    o = n(388032);
function d(e) {
    let { mfaChallenge: t, finish: n, setSlide: d, onClose: c, isSlideReady: u } = e,
        [h, f] = r.useState(!1),
        [m, g] = r.useState(null),
        [x, p] = r.useState(''),
        j = r.useRef(null),
        b = o.intl.string(o.t['C/ZAw8']),
        y = o.intl.string(o.t.fZSi1N),
        S = r.useCallback(
            (e) => {
                (p(e), g(null));
            },
            [p, g]
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
                    f(!0),
                    n({
                        mfaType: 'backup',
                        data: x.replace(/-/g, '')
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
                    children: (0, l.jsxs)(i.xJW, {
                        title: b,
                        children: [
                            (0, l.jsx)(i.oil, {
                                inputRef: j,
                                onChange: S,
                                placeholder: y,
                                maxLength: s.tL,
                                minLength: s.th,
                                value: x,
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
                    disabled: x.length < 8,
                    submitting: h
                })
            ]
        })
    );
}
