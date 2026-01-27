n.d(t, {
    A: () => b,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(355622),
    a = n(408018),
    o = n(133343),
    c = n(915089),
    d = n(840065),
    u = n(95701),
    _ = n(128450),
    p = n(652215),
    m = n(985018),
    g = n(973746);
let A = (0, c.Ld)(),
    f = (0, u.createChannelRecord)({
        id: "1",
        type: p.rbe.DM,
    }),
    h = (0, c.Ld)();

function b(e) {
    let {
            sectionTitle: t,
            errors: n,
            onBioChange: c,
            pendingBio: u,
            placeholder: b,
            currentBio: E,
            disabled: x = !1,
        } = e,
        [O, C] = i.useState(null != u ? u : E),
        [I, T] = i.useState((0, a.x7)(O)),
        S = i.useRef(E),
        j = i.useRef(!1);
    return (
        i.useEffect(() => {
            if (S.current !== E) {
                let e = (0, a.x7)(E);
                C(E), T(e);
            }
            S.current = E;
        }, [E]),
        (0, r.jsxs)(_.A, {
            title: t,
            titleId: A,
            description: m.intl.string(m.t.Bbw6Ac),
            errors: n,
            disabled: x,
            children: [
                (0, r.jsx)(o.Ay, {
                    "aria-describedby": h,
                    "aria-labelledby": A,
                    className: g.i,
                    innerClassName: g.Z,
                    maxCharacterCount: p.NA2,
                    onChange: function (e, t, n) {
                        t !== O && (C(t), T(n), c(t));
                    },
                    placeholder: b,
                    channel: f,
                    textValue: O,
                    richValue: I,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: d.USER_SETTINGS_MODAL_KEY,
                    type: s.oU.PROFILE_BIO_INPUT,
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
                                shouldRefocus: !0,
                            });
                        });
                    },
                }),
                (0, r.jsx)(l.AC4, {
                    id: h,
                    children: m.intl.format(m.t["+DFxLc"], {
                        maxLength: p.NA2,
                    }),
                }),
            ],
        })
    );
}
