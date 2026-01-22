n.d(t, { A: () => b }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(355622),
    o = n(408018),
    l = n(133343),
    c = n(915089),
    u = n(840065),
    d = n(95701),
    f = n(128450),
    p = n(652215),
    _ = n(985018),
    h = n(973746);
let m = (0, c.Ld)(),
    g = (0, d.createChannelRecord)({
        id: "1",
        type: p.rbe.DM,
    }),
    E = (0, c.Ld)();
function b(e) {
    let {
            sectionTitle: t,
            errors: n,
            onBioChange: c,
            pendingBio: d,
            placeholder: b,
            currentBio: y,
            disabled: O = !1,
        } = e,
        [A, v] = i.useState(null != d ? d : y),
        [S, I] = i.useState((0, o.x7)(A)),
        T = i.useRef(y),
        C = i.useRef(!1);
    function N(e, t, n) {
        t !== A && (v(t), I(n), c(t));
    }
    function R() {
        return new Promise((e) => {
            e({
                shouldClear: !1,
                shouldRefocus: !0,
            });
        });
    }
    return (
        i.useEffect(() => {
            if (T.current !== y) {
                let e = (0, o.x7)(y);
                v(y), I(e);
            }
            T.current = y;
        }, [y]),
        (0, r.jsxs)(f.A, {
            title: t,
            titleId: m,
            description: _.intl.string(_.t.Bbw6Ac),
            errors: n,
            disabled: O,
            children: [
                (0, r.jsx)(l.Ay, {
                    "aria-describedby": E,
                    "aria-labelledby": m,
                    className: h.i,
                    innerClassName: h.Z,
                    maxCharacterCount: p.NA2,
                    onChange: N,
                    placeholder: b,
                    channel: g,
                    textValue: A,
                    richValue: S,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: u.USER_SETTINGS_MODAL_KEY,
                    type: s.oU.PROFILE_BIO_INPUT,
                    onBlur: () => {
                        C.current = !1;
                    },
                    onFocus: () => {
                        C.current = !0;
                    },
                    focused: C.current,
                    onSubmit: R,
                }),
                (0, r.jsx)(a.AC4, {
                    id: E,
                    children: _.intl.format(_.t["+DFxLc"], { maxLength: p.NA2 }),
                }),
            ],
        })
    );
}
