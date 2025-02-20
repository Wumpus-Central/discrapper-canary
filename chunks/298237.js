r.d(t, { default: () => N }), r(47120), r(266796);
var n = r(200651),
    l = r(192379),
    o = r(990547),
    i = r(442837),
    a = r(481060),
    c = r(390885),
    u = r(594174),
    s = r(626135),
    f = r(63063),
    p = r(771308),
    d = r(13430),
    m = r(723359),
    _ = r(981631),
    b = r(630724),
    g = r(388032),
    y = r(402844);
function N(e) {
    let { transitionState: t, onClose: r } = e,
        [N, S] = l.useState(null),
        [v, A] = l.useState(null),
        [E, O] = l.useState(!1),
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
            if ((e.preventDefault(), null != N)) {
                O(!0);
                try {
                    await p.Av(N, _.jXE.CLAIM_ACCOUNT_MODAL);
                } catch (e) {
                    if (null != e.body && null != e.body.date_of_birth) c.Z.flowStep(b.MK.ANY, b.FF.AGE_GATE_UNDERAGE), p.wE(m.L0.CLAIM_ACCOUNT), p.hp(m.L0.CLAIM_ACCOUNT), r();
                    else {
                        var t;
                        (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.username) != null ? A(g.NW.string(g.t['TGg/2t'])) : A(null == e ? void 0 : e.body.message);
                    }
                }
                O(!1);
            }
        },
        j = l.useCallback(() => {
            var e;
            null === (e = h.current) || void 0 === e || e.focus();
        }, [h]);
    return (0, n.jsx)(a.Y0X, {
        transitionState: t,
        size: a.CgR.DYNAMIC,
        'aria-label': g.NW.string(g.t.QpSKo6),
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
                            children: g.NW.string(g.t.QpSKo6)
                        }),
                        (0, n.jsx)(a.Text, {
                            color: 'header-secondary',
                            className: y.description,
                            variant: 'text-md/normal',
                            children: g.NW.format(g.t.EcJBEB, { helpURL: f.Z.getArticleURL(_.BhN.AGE_GATE) })
                        }),
                        (0, n.jsx)(d.Z, {
                            required: !0,
                            autoFocus: !0,
                            wrapperClassName: y.formItem,
                            label: g.NW.string(g.t.rhBeKS),
                            name: 'birthday',
                            onChange: (e) => S(e),
                            onPopulated: j,
                            error: v,
                            value: N,
                            ref: w
                        }),
                        (0, n.jsx)(a.zxk, {
                            buttonRef: h,
                            type: 'submit',
                            size: a.zxk.Sizes.LARGE,
                            submitting: E,
                            disabled: null == N,
                            fullWidth: !0,
                            children: g.NW.string(g.t.i4jeWV)
                        })
                    ]
                })
            ]
        })
    });
}
