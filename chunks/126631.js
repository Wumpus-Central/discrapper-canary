n.d(t, { Z: () => E }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(481060),
    o = n(541716),
    s = n(752305),
    l = n(893718),
    c = n(313201),
    u = n(131704),
    d = n(993413),
    f = n(981631),
    _ = n(388032),
    p = n(100077);
let h = (0, c.hQ)(),
    m = (0, u.kt)({
        id: "1",
        type: f.d4z.DM,
    }),
    g = (0, c.hQ)();
function E(e) {
    let {
            sectionTitle: t,
            errors: n,
            onBioChange: c,
            pendingBio: u,
            placeholder: E,
            currentBio: b,
            disabled: y = !1,
        } = e,
        [O, v] = i.useState(null != u ? u : b),
        [I, T] = i.useState((0, s.JM)(O)),
        S = i.useRef(!1);
    function A(e, t, n) {
        t !== O && (v(t), T(n), c(t));
    }
    function C() {
        return new Promise((e) => {
            e({
                shouldClear: !1,
                shouldRefocus: !0,
            });
        });
    }
    return (
        i.useEffect(() => {
            if (void 0 === u) {
                let e = (0, s.JM)(b);
                v(b), T(e);
            }
        }, [u, b]),
        (0, r.jsxs)(d.Z, {
            title: t,
            titleId: h,
            description: _.intl.string(_.t.Bbw6AQ),
            errors: n,
            disabled: y,
            children: [
                (0, r.jsx)(l.ZP, {
                    "aria-describedby": g,
                    "aria-labelledby": h,
                    className: p.bioTextAreaContainer,
                    innerClassName: p.bioTextArea,
                    maxCharacterCount: f.tPV,
                    onChange: A,
                    placeholder: E,
                    channel: m,
                    textValue: O,
                    richValue: I,
                    type: o.Ie.PROFILE_BIO_INPUT,
                    onBlur: () => {
                        S.current = !1;
                    },
                    onFocus: () => {
                        S.current = !0;
                    },
                    focused: S.current,
                    onSubmit: C,
                }),
                (0, r.jsx)(a.nn4, {
                    id: g,
                    children: _.intl.format(_.t["+DFxLS"], { maxLength: f.tPV }),
                }),
            ],
        })
    );
}
