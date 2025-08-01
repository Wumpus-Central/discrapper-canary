(n.d(t, { Z: () => x }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(481060),
    a = n(541716),
    l = n(752305),
    o = n(893718),
    c = n(313201),
    d = n(131704),
    u = n(993413),
    m = n(981631),
    p = n(388032),
    g = n(967600);
let h = (0, c.hQ)(),
    f = (0, d.kt)({
        id: '1',
        type: m.d4z.DM
    }),
    b = (0, c.hQ)();
function x(e) {
    let { sectionTitle: t, errors: n, onBioChange: c, pendingBio: d, placeholder: x, currentBio: _, disabled: j = !1 } = e,
        [C, O] = r.useState(null != d ? d : _),
        [E, v] = r.useState((0, l.JM)(C)),
        S = r.useRef(!1);
    return (
        r.useEffect(() => {
            if (void 0 === d) {
                let e = (0, l.JM)(_);
                (O(_), v(e));
            }
        }, [d, _]),
        (0, i.jsxs)(u.Z, {
            title: t,
            titleId: h,
            description: p.intl.string(p.t.Bbw6AQ),
            errors: n,
            disabled: j,
            children: [
                (0, i.jsx)(o.ZP, {
                    'aria-describedby': b,
                    'aria-labelledby': h,
                    className: g.bioTextAreaContainer,
                    innerClassName: g.bioTextArea,
                    maxCharacterCount: m.tPV,
                    onChange: function (e, t, n) {
                        t !== C && (O(t), v(n), c(t));
                    },
                    placeholder: x,
                    channel: f,
                    textValue: C,
                    richValue: E,
                    type: a.Ie.PROFILE_BIO_INPUT,
                    onBlur: () => {
                        S.current = !1;
                    },
                    onFocus: () => {
                        S.current = !0;
                    },
                    focused: S.current,
                    onSubmit: function () {
                        return new Promise((e) => {
                            e({
                                shouldClear: !1,
                                shouldRefocus: !0
                            });
                        });
                    }
                }),
                (0, i.jsx)(s.nn4, {
                    id: b,
                    children: p.intl.format(p.t['+DFxLS'], { maxLength: m.tPV })
                })
            ]
        })
    );
}
