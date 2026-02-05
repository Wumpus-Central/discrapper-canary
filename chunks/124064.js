n.d(t, { A: () => C });
var i = n(627968),
    s = n(64700),
    r = n(397927),
    a = n(355622),
    l = n(408018),
    o = n(133343),
    c = n(915089),
    d = n(840065),
    u = n(95701),
    _ = n(128450),
    m = n(652215),
    A = n(985018),
    g = n(973746);
let E = (0, c.Ld)(),
    h = (0, u.createChannelRecord)({ id: "1", type: m.rbe.DM }),
    p = (0, c.Ld)();
function C(e) {
    let {
            sectionTitle: t,
            errors: n,
            onBioChange: c,
            pendingBio: u,
            placeholder: C,
            currentBio: x,
            disabled: T = !1,
        } = e,
        [I, S] = s.useState(u ?? x),
        [f, N] = s.useState((0, l.x7)(I)),
        b = s.useRef(x),
        R = s.useRef(!1);
    return (
        s.useEffect(() => {
            if (b.current !== x) {
                let e = (0, l.x7)(x);
                S(x), N(e);
            }
            b.current = x;
        }, [x]),
        (0, i.jsxs)(_.A, {
            title: t,
            titleId: E,
            description: A.intl.string(A.t.Bbw6Ac),
            errors: n,
            disabled: T,
            children: [
                (0, i.jsx)(o.Ay, {
                    "aria-describedby": p,
                    "aria-labelledby": E,
                    className: g.i,
                    innerClassName: g.Z,
                    maxCharacterCount: m.NA2,
                    onChange: function (e, t, n) {
                        t !== I && (S(t), N(n), c(t));
                    },
                    placeholder: C,
                    channel: h,
                    textValue: I,
                    richValue: f,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: d.USER_SETTINGS_MODAL_KEY,
                    type: a.oU.PROFILE_BIO_INPUT,
                    onBlur: () => {
                        R.current = !1;
                    },
                    onFocus: () => {
                        R.current = !0;
                    },
                    focused: R.current,
                    onSubmit: function () {
                        return new Promise((e) => {
                            e({ shouldClear: !1, shouldRefocus: !0 });
                        });
                    },
                }),
                (0, i.jsx)(r.AC4, { id: p, children: A.intl.format(A.t["+DFxLc"], { maxLength: m.NA2 }) }),
            ],
        })
    );
}
