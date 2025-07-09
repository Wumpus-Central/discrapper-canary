(r.d(t, { default: () => A }), r(388685), r(953529));
var n = r(255367),
    l = r(73800),
    o = r(990547),
    i = r(442837),
    a = r(755721),
    c = r(481060),
    u = r(390885),
    s = r(594174),
    f = r(626135),
    p = r(63063),
    m = r(771308),
    d = r(13430),
    _ = r(723359),
    b = r(981631),
    g = r(630724),
    y = r(388032),
    S = r(465556);
function A(e) {
    let { transitionState: t, onClose: r } = e,
        [A, N] = l.useState(null),
        [E, O] = l.useState(null),
        [v, w] = l.useState(!1),
        T = l.useRef(null),
        C = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
        h = l.useRef(null);
    (l.useEffect(() => {
        (u.Z.flowStep(g.MK.ANY, g.FF.AGE_GATE), f.default.track(b.rMx.OPEN_MODAL, { type: 'Claim Age Gate' }));
    }, []),
        l.useEffect(() => {
            (null == C ? void 0 : C.nsfwAllowed) != null && r();
        }, [C, r]));
    let j = async (e) => {
            if ((e.preventDefault(), null != A)) {
                w(!0);
                try {
                    await m.Av(A, b.jXE.CLAIM_ACCOUNT_MODAL);
                } catch (e) {
                    if (null != e.body && null != e.body.date_of_birth) (u.Z.flowStep(g.MK.ANY, g.FF.AGE_GATE_UNDERAGE), m.wE(_.L0.CLAIM_ACCOUNT), m.hp(_.L0.CLAIM_ACCOUNT), r());
                    else {
                        var t;
                        (null == e || null == (t = e.body) ? void 0 : t.username) != null ? O(y.intl.string(y.t['TGg/2t'])) : O(null == e ? void 0 : e.body.message);
                    }
                }
                w(!1);
            }
        },
        U = l.useCallback(() => {
            var e;
            null == (e = h.current) || e.focus();
        }, [h]);
    return (0, n.jsx)(c.Y0X, {
        transitionState: t,
        size: c.CgR.DYNAMIC,
        'aria-label': y.intl.string(y.t.QpSKo6),
        className: S.modal,
        impression: {
            impressionName: o.ImpressionNames.USER_AGE_GATE,
            impressionProperties: { existing_user: !1 }
        },
        parentComponent: 'NewUserAgeGate',
        children: (0, n.jsxs)(c.hzk, {
            className: S.content,
            children: [
                (0, n.jsx)('div', { className: S.image }),
                (0, n.jsxs)('form', {
                    onSubmit: j,
                    children: [
                        (0, n.jsx)(c.X6q, {
                            className: S.title,
                            variant: 'heading-xl/semibold',
                            children: y.intl.string(y.t.QpSKo6)
                        }),
                        (0, n.jsx)(c.Text, {
                            color: 'header-secondary',
                            className: S.description,
                            variant: 'text-md/normal',
                            children: y.intl.format(y.t.EcJBEB, { helpURL: p.Z.getArticleURL(b.BhN.AGE_GATE) })
                        }),
                        (0, n.jsx)(d.Z, {
                            required: !0,
                            autoFocus: !0,
                            wrapperClassName: S.formItem,
                            label: y.intl.string(y.t.rhBeKS),
                            name: 'birthday',
                            onChange: (e) => N(e),
                            onPopulated: U,
                            error: E,
                            value: A,
                            ref: T
                        }),
                        (0, n.jsx)(a.zx, {
                            buttonRef: h,
                            type: 'submit',
                            size: a.zx.Sizes.LARGE,
                            submitting: v,
                            disabled: null == A,
                            fullWidth: !0,
                            children: y.intl.string(y.t.i4jeWV)
                        })
                    ]
                })
            ]
        })
    });
}
