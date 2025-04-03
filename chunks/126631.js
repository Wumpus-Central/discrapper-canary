n.d(t, { Z: () => N }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(541716),
    l = n(752305),
    o = n(893718),
    c = n(313201),
    d = n(131704),
    u = n(993413),
    m = n(981631),
    g = n(388032),
    p = n(967600);
let h = (0, c.hQ)(),
    f = (0, d.kt)({
        id: '1',
        type: m.d4z.DM
    }),
    b = (0, c.hQ)();
function N(e) {
    let { sectionTitle: t, errors: n, onBioChange: c, pendingBio: d, placeholder: N, currentBio: x, disabled: _ = !1 } = e,
        [E, j] = i.useState(null != d ? d : x),
        [O, C] = i.useState((0, l.JM)(E)),
        S = i.useRef(!1);
    return (
        i.useEffect(() => {
            if (void 0 === d) {
                let e = (0, l.JM)(x);
                j(x), C(e);
            }
        }, [d, x]),
        (0, r.jsxs)(u.Z, {
            title: t,
            titleId: h,
            description: g.NW.string(g.t.Bbw6AQ),
            errors: n,
            disabled: _,
            children: [
                (0, r.jsx)(o.Z, {
                    'aria-describedby': b,
                    'aria-labelledby': h,
                    className: p.bioTextAreaContainer,
                    innerClassName: p.bioTextArea,
                    maxCharacterCount: m.tPV,
                    onChange: function (e, t, n) {
                        t !== E && (j(t), C(n), c(t));
                    },
                    placeholder: N,
                    channel: f,
                    textValue: E,
                    richValue: O,
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
                (0, r.jsx)(s.nn4, {
                    id: b,
                    children: g.NW.format(g.t['+DFxLS'], { maxLength: m.tPV })
                })
            ]
        })
    );
}
