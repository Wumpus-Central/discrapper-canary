n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(481060),
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
function E(e) {
    let { sectionTitle: t, errors: n, onBioChange: c, pendingBio: d, placeholder: E, currentBio: _, disabled: C = !1 } = e,
        [T, S] = r.useState(null != d ? d : _),
        [b, I] = r.useState((0, l.JM)(T)),
        N = r.useRef(!1);
    return (
        r.useEffect(() => {
            if (void 0 === d) {
                let e = (0, l.JM)(_);
                S(_), I(e);
            }
        }, [d, _]),
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
                    placeholder: E,
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
                (0, i.jsx)(s.HiddenVisually, {
                    id: f,
                    children: g.intl.format(g.t['+DFxLS'], { maxLength: m.tPV })
                })
            ]
        })
    );
}
