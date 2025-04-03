r.d(t, { Z: () => c }), r(757143), r(301563), r(47120), r(773603);
var n = r(200651),
    l = r(192379),
    s = r(658550),
    i = r(481060),
    o = r(507453),
    a = r(388032);
function c(e) {
    let { mfaChallenge: t, finish: r, setSlide: c, onClose: u, isSlideReady: d } = e,
        [f, h] = l.useState(!1),
        [m, p] = l.useState(null),
        [g, b] = l.useState(''),
        j = l.useRef(null),
        y = a.NW.string(a.t['C/ZAw8']),
        x = a.NW.string(a.t.fZSi1N),
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
        (0, n.jsxs)('form', {
            onSubmit: (e) => {
                e.preventDefault(),
                    h(!0),
                    r({
                        mfaType: 'backup',
                        data: g.replace(/-/g, '')
                    })
                        .catch((e) => {
                            var t, r;
                            p(null != (r = null == (t = e.body) ? void 0 : t.message) ? r : e.message);
                        })
                        .finally(() => {
                            h(!1);
                        });
            },
            children: [
                (0, n.jsx)(o.Z.SlideHeader, { onClose: u }),
                (0, n.jsx)(o.Z.SlideContent, {
                    children: (0, n.jsxs)(i.xJW, {
                        title: y,
                        children: [
                            (0, n.jsx)(i.oil, {
                                inputRef: j,
                                onChange: S,
                                placeholder: x,
                                maxLength: s.tL,
                                minLength: s.th,
                                value: g,
                                spellCheck: 'false',
                                disabled: f
                            }),
                            (0, n.jsx)(o.Z.SlideError, { error: m })
                        ]
                    })
                }),
                (0, n.jsx)(o.Z.SlideFooter, {
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
