n.d(t, { Z: () => _ }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(481060),
    l = n(541716),
    a = n(752305),
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
function _(e) {
    let { sectionTitle: t, errors: n, onBioChange: c, pendingBio: d, placeholder: _, currentBio: x, disabled: E = !1 } = e,
        [j, C] = r.useState(null != d ? d : x),
        [O, S] = r.useState((0, a.JM)(j)),
        v = r.useRef(!1);
    return (
        r.useEffect(() => {
            if (void 0 === d) {
                let e = (0, a.JM)(x);
                C(x), S(e);
            }
        }, [d, x]),
        (0, i.jsxs)(u.Z, {
            title: t,
            titleId: h,
            description: p.intl.string(p.t.Bbw6AQ),
            errors: n,
            disabled: E,
            children: [
                (0, i.jsx)(o.Z, {
                    'aria-describedby': b,
                    'aria-labelledby': h,
                    className: g.bioTextAreaContainer,
                    innerClassName: g.bioTextArea,
                    maxCharacterCount: m.tPV,
                    onChange: function (e, t, n) {
                        t !== j && (C(t), S(n), c(t));
                    },
                    placeholder: _,
                    channel: f,
                    textValue: j,
                    richValue: O,
                    type: l.Ie.PROFILE_BIO_INPUT,
                    onBlur: () => {
                        v.current = !1;
                    },
                    onFocus: () => {
                        v.current = !0;
                    },
                    focused: v.current,
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
