n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(481060),
    a = n(541716),
    l = n(752305),
    o = n(893718),
    c = n(313201),
    d = n(131704),
    u = n(993413),
    m = n(981631),
    g = n(388032),
    h = n(341258);
let p = (0, c.hQ)(),
    x = (0, d.kt)({
        id: '1',
        type: m.d4z.DM
    }),
    f = (0, c.hQ)();
function _(e) {
    let { sectionTitle: t, errors: n, onBioChange: c, pendingBio: d, placeholder: _, currentBio: E, disabled: C = !1 } = e,
        [T, S] = s.useState(null != d ? d : E),
        [b, I] = s.useState((0, l.JM)(T)),
        N = s.useRef(!1);
    return (
        s.useEffect(() => {
            if (void 0 === d) {
                let e = (0, l.JM)(E);
                S(E), I(e);
            }
        }, [d, E]),
        (0, i.jsxs)(u.Z, {
            title: t,
            titleId: p,
            description: g.intl.string(g.t.Bbw6AQ),
            errors: n,
            disabled: C,
            children: [
                (0, i.jsx)(o.Z, {
                    'aria-describedby': f,
                    'aria-labelledby': p,
                    className: h.bioTextAreaContainer,
                    innerClassName: h.bioTextArea,
                    maxCharacterCount: m.tPV,
                    onChange: function (e, t, n) {
                        t !== T && (S(t), I(n), c(t));
                    },
                    placeholder: _,
                    channel: x,
                    textValue: T,
                    richValue: b,
                    type: a.Ie.PROFILE_BIO_INPUT,
                    onBlur: () => {
                        N.current = !1;
                    },
                    onFocus: () => {
                        N.current = !0;
                    },
                    focused: N.current,
                    onSubmit: function () {
                        return new Promise((e) => {
                            e({
                                shouldClear: !1,
                                shouldRefocus: !0
                            });
                        });
                    }
                }),
                (0, i.jsx)(r.HiddenVisually, {
                    id: f,
                    children: g.intl.format(g.t['+DFxLS'], { maxLength: m.tPV })
                })
            ]
        })
    );
}
