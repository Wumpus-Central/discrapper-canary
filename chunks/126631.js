n.d(t, { Z: () => b }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(541716),
    s = n(752305),
    l = n(893718),
    c = n(313201),
    u = n(518596),
    d = n(131704),
    f = n(993413),
    p = n(981631),
    _ = n(388032),
    m = n(754024);
let h = (0, c.hQ)(),
    g = (0, d.createChannelRecord)({
        id: "1",
        type: p.d4z.DM,
    }),
    E = (0, c.hQ)();
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
        [v, S] = i.useState(null != d ? d : y),
        [I, T] = i.useState((0, s.JM)(v)),
        C = i.useRef(y),
        A = i.useRef(!1);
    function N(e, t, n) {
        t !== v && (S(t), T(n), c(t));
    }
    function P() {
        return new Promise((e) => {
            e({
                shouldClear: !1,
                shouldRefocus: !0,
            });
        });
    }
    return (
        i.useEffect(() => {
            if (C.current !== y) {
                let e = (0, s.JM)(y);
                S(y), T(e);
            }
            C.current = y;
        }, [y]),
        (0, r.jsxs)(f.Z, {
            title: t,
            titleId: h,
            description: _.intl.string(_.t.Bbw6Ac),
            errors: n,
            disabled: O,
            children: [
                (0, r.jsx)(l.ZP, {
                    "aria-describedby": E,
                    "aria-labelledby": h,
                    className: m.bioTextAreaContainer,
                    innerClassName: m.bioTextArea,
                    maxCharacterCount: p.tPV,
                    onChange: N,
                    placeholder: b,
                    channel: g,
                    textValue: v,
                    richValue: I,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: u.USER_SETTINGS_MODAL_KEY,
                    type: o.Ie.PROFILE_BIO_INPUT,
                    onBlur: () => {
                        A.current = !1;
                    },
                    onFocus: () => {
                        A.current = !0;
                    },
                    focused: A.current,
                    onSubmit: P,
                }),
                (0, r.jsx)(a.nn4, {
                    id: E,
                    children: _.intl.format(_.t["+DFxLc"], { maxLength: p.tPV }),
                }),
            ],
        })
    );
}
