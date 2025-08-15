r.d(e, { default: () => O }), r(388685), r(953529);
var n = r(951288),
    o = r(647438),
    l = r(990547),
    i = r(442837),
    u = r(755721),
    a = r(481060),
    c = r(390885),
    f = r(594174),
    s = r(626135),
    p = r(63063),
    d = r(771308),
    m = r(13430),
    y = r(723359),
    b = r(981631),
    _ = r(630724),
    g = r(388032),
    v = r(777463);
function O(t) {
    let { transitionState: e, onClose: r } = t,
        [O, S] = o.useState(null),
        [A, w] = o.useState(null),
        [E, h] = o.useState(!1),
        N = o.useRef(null),
        T = (0, i.e7)([f.default], () => f.default.getCurrentUser()),
        j = o.useRef(null);
    o.useEffect(() => {
        c.Z.flowStep(_.MK.ANY, _.FF.AGE_GATE), s.default.track(b.rMx.OPEN_MODAL, { type: "Claim Age Gate" });
    }, []),
        o.useEffect(() => {
            (null == T ? void 0 : T.nsfwAllowed) != null && r();
        }, [T, r]);
    let C = async (t) => {
            if ((t.preventDefault(), null != O)) {
                h(!0);
                try {
                    await d.Av(O, b.jXE.CLAIM_ACCOUNT_MODAL);
                } catch (t) {
                    if (null != t.body && null != t.body.date_of_birth)
                        c.Z.flowStep(_.MK.ANY, _.FF.AGE_GATE_UNDERAGE),
                            d.wE(y.L0.CLAIM_ACCOUNT),
                            d.hp(y.L0.CLAIM_ACCOUNT),
                            r();
                    else {
                        var e;
                        (null == t || null == (e = t.body) ? void 0 : e.username) != null
                            ? w(g.intl.string(g.t["TGg/2t"]))
                            : w(null == t ? void 0 : t.body.message);
                    }
                }
                h(!1);
            }
        },
        Z = o.useCallback(() => {
            var t;
            null == (t = j.current) || t.focus();
        }, [j]);
    return (0, n.jsx)(a.Y0X, {
        transitionState: e,
        size: a.CgR.DYNAMIC,
        "aria-label": g.intl.string(g.t.QpSKo6),
        className: v.modal,
        impression: {
            impressionName: l.ImpressionNames.USER_AGE_GATE,
            impressionProperties: { existing_user: !1 },
        },
        parentComponent: "NewUserAgeGate",
        children: (0, n.jsxs)(a.hzk, {
            className: v.content,
            children: [
                (0, n.jsx)("div", { className: v.image }),
                (0, n.jsxs)("form", {
                    onSubmit: C,
                    children: [
                        (0, n.jsx)(a.X6q, {
                            className: v.title,
                            variant: "heading-xl/semibold",
                            children: g.intl.string(g.t.QpSKo6),
                        }),
                        (0, n.jsx)(a.Text, {
                            color: "header-secondary",
                            className: v.description,
                            variant: "text-md/normal",
                            children: g.intl.format(g.t.EcJBEB, { helpURL: p.Z.getArticleURL(b.BhN.AGE_GATE) }),
                        }),
                        (0, n.jsx)(m.Z, {
                            required: !0,
                            autoFocus: !0,
                            wrapperClassName: v.formItem,
                            label: g.intl.string(g.t.rhBeKS),
                            name: "birthday",
                            onChange: (t) => S(t),
                            onPopulated: Z,
                            error: A,
                            value: O,
                            ref: N,
                        }),
                        (0, n.jsx)(u.zx, {
                            buttonRef: j,
                            type: "submit",
                            size: u.zx.Sizes.LARGE,
                            submitting: E,
                            disabled: null == O,
                            fullWidth: !0,
                            children: g.intl.string(g.t.i4jeWV),
                        }),
                    ],
                }),
            ],
        }),
    });
}
