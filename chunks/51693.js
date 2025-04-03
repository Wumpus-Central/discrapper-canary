r.d(t, { Z: () => u }), r(47120), r(773603);
var n = r(200651),
    l = r(192379),
    s = r(658550),
    i = r(481060),
    o = r(540059),
    a = r(507453),
    c = r(388032);
function u(e) {
    let { mfaChallenge: t, finish: r, setSlide: u, onClose: d, isSlideReady: f } = e,
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
        (0, n.jsxs)('form', {
            onSubmit: (e) => {
                e.preventDefault(),
                    p(!0),
                    b(null),
                    r({
                        mfaType: 'totp',
                        data: j
                    })
                        .catch((e) => {
                            var t, r;
                            b(null != (r = null == (t = e.body) ? void 0 : t.message) ? r : e.message);
                        })
                        .finally(() => {
                            p(!1);
                        });
            },
            children: [
                (0, n.jsx)(a.Z.SlideHeader, { onClose: d }),
                (0, n.jsx)(a.Z.SlideContent, {
                    scrollbarType: h ? 'none' : void 0,
                    children: (0, n.jsxs)(i.xJW, {
                        title: c.NW.string(c.t.HZPBOT),
                        children: [
                            (0, n.jsx)(i.oil, {
                                inputRef: x,
                                onChange: y,
                                placeholder: c.NW.string(c.t.tARzgo),
                                maxLength: s.gH,
                                minLength: s.gH,
                                value: j,
                                autoComplete: 'one-time-code',
                                spellCheck: 'false',
                                disabled: m
                            }),
                            (0, n.jsx)(a.Z.SlideError, { error: g })
                        ]
                    })
                }),
                (0, n.jsx)(a.Z.SlideFooter, {
                    mfaChallenge: t,
                    setSlide: u,
                    showConfirm: !0,
                    disabled: j.length !== s.gH,
                    submitting: m
                })
            ]
        })
    );
}
