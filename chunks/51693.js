n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120),
    n(773603);
var l = n(200651),
    i = n(192379),
    r = n(658550),
    s = n(481060),
    o = n(540059),
    a = n(507453),
    d = n(388032);
function u(e) {
    let { mfaChallenge: t, finish: n, setSlide: u, onClose: c, isSlideReady: h } = e,
        f = (0, o.Q3)('TotpSlide'),
        [m, g] = i.useState(!1),
        [S, x] = i.useState(null),
        [p, v] = i.useState(''),
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
                    g(!0),
                    x(null),
                    n({
                        mfaType: 'totp',
                        data: p
                    })
                        .catch((e) => {
                            var t, n;
                            x(null !== (n = null === (t = e.body) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : e.message);
                        })
                        .finally(() => {
                            g(!1);
                        });
            },
            children: [
                (0, l.jsx)(a.Z.SlideHeader, { onClose: c }),
                (0, l.jsx)(a.Z.SlideContent, {
                    scrollbarType: f ? 'none' : void 0,
                    children: (0, l.jsxs)(s.FormItem, {
                        title: d.intl.string(d.t.HZPBOT),
                        children: [
                            (0, l.jsx)(s.TextInput, {
                                inputRef: j,
                                onChange: v,
                                placeholder: d.intl.string(d.t.tARzgo),
                                maxLength: r.gH,
                                minLength: r.gH,
                                value: p,
                                autoComplete: 'one-time-code',
                                spellCheck: 'false',
                                disabled: m
                            }),
                            (0, l.jsx)(a.Z.SlideError, { error: S })
                        ]
                    })
                }),
                (0, l.jsx)(a.Z.SlideFooter, {
                    mfaChallenge: t,
                    setSlide: u,
                    showConfirm: !0,
                    disabled: p.length !== r.gH,
                    submitting: m
                })
            ]
        })
    );
}
