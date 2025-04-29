r.d(t, { default: () => S }), r(388685), r(953529);
var n = r(255367),
    l = r(73800),
    o = r(990547),
    i = r(442837),
    a = r(481060),
    c = r(390885),
    u = r(594174),
    s = r(626135),
    f = r(63063),
    p = r(771308),
    m = r(13430),
    d = r(723359),
    _ = r(981631),
    b = r(630724),
    g = r(388032),
    y = r(465556);
function S(e) {
    let { transitionState: t, onClose: r } = e,
        [S, A] = l.useState(null),
        [E, N] = l.useState(null),
        [O, v] = l.useState(!1),
        w = l.createRef(),
        T = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        h = l.createRef();
    l.useEffect(() => {
        c.Z.flowStep(b.MK.ANY, b.FF.AGE_GATE), s.default.track(_.rMx.OPEN_MODAL, { type: 'Claim Age Gate' });
    }, []),
        l.useEffect(() => {
            (null == T ? void 0 : T.nsfwAllowed) != null && r();
        }, [T, r]);
    let C = async (e) => {
            if ((e.preventDefault(), null != S)) {
                v(!0);
                try {
                    await p.Av(S, _.jXE.CLAIM_ACCOUNT_MODAL);
                } catch (e) {
                    if (null != e.body && null != e.body.date_of_birth) c.Z.flowStep(b.MK.ANY, b.FF.AGE_GATE_UNDERAGE), p.wE(d.L0.CLAIM_ACCOUNT), p.hp(d.L0.CLAIM_ACCOUNT), r();
                    else {
                        var t;
                        (null == e || null == (t = e.body) ? void 0 : t.username) != null ? N(g.intl.string(g.t['TGg/2t'])) : N(null == e ? void 0 : e.body.message);
                    }
                }
                v(!1);
            }
        },
        j = l.useCallback(() => {
            var e;
            null == (e = h.current) || e.focus();
        }, [h]);
    return (0, n.jsx)(a.Y0X, {
        transitionState: t,
        size: a.CgR.DYNAMIC,
        'aria-label': g.intl.string(g.t.QpSKo6),
        className: y.modal,
        impression: {
            impressionName: o.ImpressionNames.USER_AGE_GATE,
            impressionProperties: { existing_user: !1 }
        },
        children: (0, n.jsxs)(a.hzk, {
            className: y.content,
            children: [
                (0, n.jsx)('div', { className: y.image }),
                (0, n.jsxs)('form', {
                    onSubmit: C,
                    children: [
                        (0, n.jsx)(a.X6q, {
                            className: y.title,
                            variant: 'heading-xl/semibold',
                            children: g.intl.string(g.t.QpSKo6)
                        }),
                        (0, n.jsx)(a.Text, {
                            color: 'header-secondary',
                            className: y.description,
                            variant: 'text-md/normal',
                            children: g.intl.format(g.t.EcJBEB, { helpURL: f.Z.getArticleURL(_.BhN.AGE_GATE) })
                        }),
                        (0, n.jsx)(m.Z, {
                            required: !0,
                            autoFocus: !0,
                            wrapperClassName: y.formItem,
                            label: g.intl.string(g.t.rhBeKS),
                            name: 'birthday',
                            onChange: (e) => A(e),
                            onPopulated: j,
                            error: E,
                            value: S,
                            ref: w
                        }),
                        (0, n.jsx)(a.zxk, {
                            buttonRef: h,
                            type: 'submit',
                            size: a.zxk.Sizes.LARGE,
                            submitting: O,
                            disabled: null == S,
                            fullWidth: !0,
                            children: g.intl.string(g.t.i4jeWV)
                        })
                    ]
                })
            ]
        })
    });
}
