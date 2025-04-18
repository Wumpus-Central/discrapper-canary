n.d(t, { Z: () => _ }), n(388685);
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
    p = n(973143);
let h = (0, c.hQ)(),
    f = (0, d.kt)({
        id: '1',
        type: m.d4z.DM
    }),
    b = (0, c.hQ)();
function _(e) {
    let { sectionTitle: t, errors: n, onBioChange: c, pendingBio: d, placeholder: _, currentBio: N, disabled: x = !1 } = e,
        [E, j] = i.useState(null != d ? d : N),
        [C, O] = i.useState((0, l.JM)(E)),
        S = i.useRef(!1);
    return (
        i.useEffect(() => {
            if (void 0 === d) {
                let e = (0, l.JM)(N);
                j(N), O(e);
            }
        }, [d, N]),
        (0, r.jsxs)(u.Z, {
            title: t,
            titleId: h,
            description: g.NW.string(g.t.Bbw6AQ),
            errors: n,
            disabled: x,
            children: [
                (0, r.jsx)(o.Z, {
                    'aria-describedby': b,
                    'aria-labelledby': h,
                    className: p.bioTextAreaContainer,
                    innerClassName: p.bioTextArea,
                    maxCharacterCount: m.tPV,
                    onChange: function (e, t, n) {
                        t !== E && (j(t), O(n), c(t));
                    },
                    placeholder: _,
                    channel: f,
                    textValue: E,
                    richValue: C,
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
