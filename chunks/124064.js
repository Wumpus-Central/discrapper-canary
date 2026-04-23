n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    l = n(140735),
    a = n(355622),
    r = n(408018),
    o = n(133343),
    d = n(915089),
    u = n(858897),
    c = n(95701),
    g = n(128450),
    m = n(652215),
    _ = n(985018),
    A = n(158983);
let h = (0, d.Ld)(),
    p = (0, c.createChannelRecord)({ id: "1", type: m.rbe.DM }),
    x = (0, d.Ld)();
function E(e) {
    let {
            sectionTitle: t,
            errors: n,
            onBioChange: d,
            pendingBio: c,
            placeholder: E,
            currentBio: T,
            disabled: S = !1,
        } = e,
        [f, b] = s.useState(c ?? T),
        [C, v] = s.useState((0, r.x7)(f)),
        N = s.useRef(T),
        I = s.useRef(!1);
    return (
        s.useEffect(() => {
            if (N.current !== T) {
                let e = (0, r.x7)(T);
                b(T), v(e);
            }
            N.current = T;
        }, [T]),
        s.useEffect(() => {
            void 0 !== c || f === T || I.current || (b(T), v((0, r.x7)(T)));
        }, [c, T, f]),
        (0, i.jsxs)(g.A, {
            title: t,
            titleId: h,
            description: _.intl.string(_.t.Bbw6Ac),
            errors: n,
            disabled: S,
            children: [
                (0, i.jsx)(o.Ay, {
                    "aria-describedby": x,
                    "aria-labelledby": h,
                    className: A.i,
                    innerClassName: A.Z,
                    maxCharacterCount: m.NA2,
                    onChange: function (e, t, n) {
                        t !== f && (b(t), v(n), d(t));
                    },
                    placeholder: E,
                    channel: p,
                    textValue: f,
                    richValue: C,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: u.USER_SETTINGS_MODAL_KEY,
                    type: a.oU.PROFILE_BIO_INPUT,
                    onBlur: () => {
                        I.current = !1;
                    },
                    onFocus: () => {
                        I.current = !0;
                    },
                    focused: I.current,
                    onSubmit: function () {
                        return new Promise((e) => {
                            e({ shouldClear: !1, shouldRefocus: !0 });
                        });
                    },
                }),
                (0, i.jsx)(l.A, { id: x, children: _.intl.format(_.t["+DFxLc"], { maxLength: m.NA2 }) }),
            ],
        })
    );
}
