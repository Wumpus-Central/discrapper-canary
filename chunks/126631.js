n.d(t, { Z: () => y }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(541716),
    s = n(752305),
    l = n(893718),
    c = n(313201),
    u = n(526665),
    d = n(518596),
    f = n(131704),
    _ = n(993413),
    p = n(981631),
    h = n(388032),
    m = n(765725);
let g = (0, c.hQ)(),
    E = (0, f.createChannelRecord)({
        id: "1",
        type: p.d4z.DM,
    }),
    b = (0, c.hQ)();
function y(e) {
    let {
            sectionTitle: t,
            errors: n,
            onBioChange: c,
            pendingBio: f,
            placeholder: y,
            currentBio: O,
            disabled: v = !1,
        } = e,
        [I, T] = i.useState(null != f ? f : O),
        [S, A] = i.useState((0, s.JM)(I)),
        C = i.useRef(!1);
    function N(e, t, n) {
        t !== I && (T(t), A(n), c(t));
    }
    function R() {
        return new Promise((e) => {
            e({
                shouldClear: !1,
                shouldRefocus: !0,
            });
        });
    }
    i.useEffect(() => {
        if (void 0 === f) {
            let e = (0, s.JM)(O);
            T(O), A(e);
        }
    }, [f, O]);
    let P = (0, u.wy)("AboutMeSection");
    return (0, r.jsxs)(_.Z, {
        title: t,
        titleId: g,
        description: h.intl.string(h.t.Bbw6Ac),
        errors: n,
        disabled: v,
        children: [
            (0, r.jsx)(l.ZP, {
                "aria-describedby": b,
                "aria-labelledby": g,
                className: m.bioTextAreaContainer,
                innerClassName: m.bioTextArea,
                maxCharacterCount: p.tPV,
                onChange: N,
                placeholder: y,
                channel: E,
                textValue: I,
                richValue: S,
                emojiPickerCloseOnModalOuterClick: P,
                parentModalKey: P ? d.USER_SETTINGS_MODAL_KEY : void 0,
                type: o.Ie.PROFILE_BIO_INPUT,
                onBlur: () => {
                    C.current = !1;
                },
                onFocus: () => {
                    C.current = !0;
                },
                focused: C.current,
                onSubmit: R,
            }),
            (0, r.jsx)(a.nn4, {
                id: b,
                children: h.intl.format(h.t["+DFxLc"], { maxLength: p.tPV }),
            }),
        ],
    });
}
