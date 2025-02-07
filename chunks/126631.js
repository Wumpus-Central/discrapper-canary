n.d(t, { Z: () => E }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(481060),
    l = n(541716),
    a = n(752305),
    o = n(893718),
    c = n(313201),
    d = n(131704),
    u = n(993413),
    m = n(981631),
    h = n(388032),
    g = n(341258);
let _ = (0, c.hQ)(),
    x = (0, d.kt)({
        id: '1',
        type: m.d4z.DM
    }),
    p = (0, c.hQ)();
function E(e) {
    let { sectionTitle: t, errors: n, onBioChange: c, pendingBio: d, placeholder: E, currentBio: C, disabled: f = !1 } = e,
        [T, N] = s.useState(null != d ? d : C),
        [S, I] = s.useState((0, a.JM)(T)),
        b = s.useRef(!1);
    return (
        s.useEffect(() => {
            if (void 0 === d) {
                let e = (0, a.JM)(C);
                N(C), I(e);
            }
        }, [d, C]),
        (0, i.jsxs)(u.Z, {
            title: t,
            titleId: _,
            description: h.intl.string(h.t.Bbw6AQ),
            errors: n,
            disabled: f,
            children: [
                (0, i.jsx)(o.Z, {
                    'aria-describedby': p,
                    'aria-labelledby': _,
                    className: g.bioTextAreaContainer,
                    innerClassName: g.bioTextArea,
                    maxCharacterCount: m.tPV,
                    onChange: function (e, t, n) {
                        t !== T && (N(t), I(n), c(t));
                    },
                    placeholder: E,
                    channel: x,
                    textValue: T,
                    richValue: S,
                    type: l.Ie.PROFILE_BIO_INPUT,
                    onBlur: () => {
                        b.current = !1;
                    },
                    onFocus: () => {
                        b.current = !0;
                    },
                    focused: b.current,
                    onSubmit: function () {
                        return new Promise((e) => {
                            e({
                                shouldClear: !1,
                                shouldRefocus: !0
                            });
                        });
                    }
                }),
                (0, i.jsx)(r.nn4, {
                    id: p,
                    children: h.intl.format(h.t['+DFxLS'], { maxLength: m.tPV })
                })
            ]
        })
    );
}
