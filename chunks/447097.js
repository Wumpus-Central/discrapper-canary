n.d(t, { Z: () => c }), n(704826), n(35282), n(388685), n(457542);
var r = n(200651),
    l = n(192379),
    i = n(658550),
    s = n(481060),
    o = n(507453),
    a = n(388032);
function c(e) {
    let { mfaChallenge: t, finish: n, setSlide: c, onClose: u, isSlideReady: d } = e,
        [f, h] = l.useState(!1),
        [m, p] = l.useState(null),
        [g, b] = l.useState(''),
        j = l.useRef(null),
        y = a.intl.string(a.t['C/ZAw8']),
        x = a.intl.string(a.t.fZSi1N),
        S = l.useCallback(
            (e) => {
                b(e), p(null);
            },
            [b, p]
        );
    return (
        l.useEffect(() => {
            if (d) {
                var e;
                null == (e = j.current) || e.focus();
            }
        }, [d]),
        (0, r.jsxs)('form', {
            onSubmit: (e) => {
                e.preventDefault(),
                    h(!0),
                    n({
                        mfaType: 'backup',
                        data: g.replace(/-/g, '')
                    })
                        .catch((e) => {
                            var t, n;
                            p(null != (n = null == (t = e.body) ? void 0 : t.message) ? n : e.message);
                        })
                        .finally(() => {
                            h(!1);
                        });
            },
            children: [
                (0, r.jsx)(o.Z.SlideHeader, { onClose: u }),
                (0, r.jsx)(o.Z.SlideContent, {
                    children: (0, r.jsxs)(s.xJW, {
                        title: y,
                        children: [
                            (0, r.jsx)(s.oil, {
                                inputRef: j,
                                onChange: S,
                                placeholder: x,
                                maxLength: i.tL,
                                minLength: i.th,
                                value: g,
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
                    disabled: g.length < 8,
                    submitting: f
                })
            ]
        })
    );
}
