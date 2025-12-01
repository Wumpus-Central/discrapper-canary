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
    p = n(993413),
    _ = n(981631),
    m = n(388032),
    h = n(100077);
let g = (0, c.hQ)(),
    E = (0, f.createChannelRecord)({
        id: "1",
        type: _.d4z.DM,
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
        [S, I] = i.useState(null != f ? f : O),
        [T, A] = i.useState((0, s.JM)(S)),
        C = i.useRef(!1);
    function N(e, t, n) {
        t !== S && (I(t), A(n), c(t));
    }
    function P() {
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
            I(O), A(e);
        }
    }, [f, O]);
    let R = (0, u.wy)("AboutMeSection");
    return (0, r.jsxs)(p.Z, {
        title: t,
        titleId: g,
        description: m.intl.string(m.t.Bbw6Ac),
        errors: n,
        disabled: v,
        children: [
            (0, r.jsx)(l.ZP, {
                "aria-describedby": b,
                "aria-labelledby": g,
                className: h.bioTextAreaContainer,
                innerClassName: h.bioTextArea,
                maxCharacterCount: _.tPV,
                onChange: N,
                placeholder: y,
                channel: E,
                textValue: S,
                richValue: T,
                emojiPickerCloseOnModalOuterClick: R,
                parentModalKey: R ? d.USER_SETTINGS_MODAL_KEY : void 0,
                type: o.Ie.PROFILE_BIO_INPUT,
                onBlur: () => {
                    C.current = !1;
                },
                onFocus: () => {
                    C.current = !0;
                },
                focused: C.current,
                onSubmit: P,
            }),
            (0, r.jsx)(a.nn4, {
                id: b,
                children: m.intl.format(m.t["+DFxLc"], { maxLength: _.tPV }),
            }),
        ],
    });
}
