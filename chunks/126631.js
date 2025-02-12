n.d(t, { Z: () => E }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(481060),
    r = n(541716),
    a = n(752305),
    o = n(893718),
    c = n(313201),
    d = n(131704),
    u = n(993413),
    h = n(981631),
    m = n(388032),
    g = n(548286);
let x = (0, c.hQ)(),
    _ = (0, d.kt)({
        id: '1',
        type: h.d4z.DM
    }),
    p = (0, c.hQ)();
function E(e) {
    let { sectionTitle: t, errors: n, onBioChange: c, pendingBio: d, placeholder: E, currentBio: C, disabled: N = !1 } = e,
        [f, I] = s.useState(null != d ? d : C),
        [T, S] = s.useState((0, a.JM)(f)),
        j = s.useRef(!1);
    return (
        s.useEffect(() => {
            if (void 0 === d) {
                let e = (0, a.JM)(C);
                I(C), S(e);
            }
        }, [d, C]),
        (0, i.jsxs)(u.Z, {
            title: t,
            titleId: x,
            description: m.intl.string(m.t.Bbw6AQ),
            errors: n,
            disabled: N,
            children: [
                (0, i.jsx)(o.Z, {
                    'aria-describedby': p,
                    'aria-labelledby': x,
                    className: g.bioTextAreaContainer,
                    innerClassName: g.bioTextArea,
                    maxCharacterCount: h.tPV,
                    onChange: function (e, t, n) {
                        t !== f && (I(t), S(n), c(t));
                    },
                    placeholder: E,
                    channel: _,
                    textValue: f,
                    richValue: T,
                    type: r.Ie.PROFILE_BIO_INPUT,
                    onBlur: () => {
                        j.current = !1;
                    },
                    onFocus: () => {
                        j.current = !0;
                    },
                    focused: j.current,
                    onSubmit: function () {
                        return new Promise((e) => {
                            e({
                                shouldClear: !1,
                                shouldRefocus: !0
                            });
                        });
                    }
                }),
                (0, i.jsx)(l.nn4, {
                    id: p,
                    children: m.intl.format(m.t['+DFxLS'], { maxLength: h.tPV })
                })
            ]
        })
    );
}
