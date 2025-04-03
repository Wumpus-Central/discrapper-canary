r.d(t, { default: () => N }), r(47120), r(266796);
var n = r(200651),
    l = r(192379),
    o = r(990547),
    a = r(442837),
    i = r(481060),
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
function N(e) {
    let { transitionState: t, onClose: r } = e,
        [N, S] = l.useState(null),
        [A, E] = l.useState(null),
        [O, v] = l.useState(!1),
        w = l.createRef(),
        T = (0, a.e7)([u.default], () => u.default.getCurrentUser()),
        h = l.createRef();
    l.useEffect(() => {
        c.Z.flowStep(b.MK.ANY, b.FF.AGE_GATE), s.default.track(_.rMx.OPEN_MODAL, { type: 'Claim Age Gate' });
    }, []),
        l.useEffect(() => {
            (null == T ? void 0 : T.nsfwAllowed) != null && r();
        }, [T, r]);
    let C = async (e) => {
            if ((e.preventDefault(), null != N)) {
                v(!0);
                try {
                    await p.Av(N, _.jXE.CLAIM_ACCOUNT_MODAL);
                } catch (e) {
                    if (null != e.body && null != e.body.date_of_birth) c.Z.flowStep(b.MK.ANY, b.FF.AGE_GATE_UNDERAGE), p.wE(d.L0.CLAIM_ACCOUNT), p.hp(d.L0.CLAIM_ACCOUNT), r();
                    else {
                        var t;
                        (null == e || null == (t = e.body) ? void 0 : t.username) != null ? E(g.NW.string(g.t['TGg/2t'])) : E(null == e ? void 0 : e.body.message);
                    }
                }
                v(!1);
            }
        },
        j = l.useCallback(() => {
            var e;
            null == (e = h.current) || e.focus();
        }, [h]);
    return (0, n.jsx)(i.Y0X, {
        transitionState: t,
        size: i.CgR.DYNAMIC,
        'aria-label': g.NW.string(g.t.QpSKo6),
        className: y.modal,
        impression: {
            impressionName: o.ImpressionNames.USER_AGE_GATE,
            impressionProperties: { existing_user: !1 }
        },
        children: (0, n.jsxs)(i.hzk, {
            className: y.content,
            children: [
                (0, n.jsx)('div', { className: y.image }),
                (0, n.jsxs)('form', {
                    onSubmit: C,
                    children: [
                        (0, n.jsx)(i.X6q, {
                            className: y.title,
                            variant: 'heading-xl/semibold',
                            children: g.NW.string(g.t.QpSKo6)
                        }),
                        (0, n.jsx)(i.Text, {
                            color: 'header-secondary',
                            className: y.description,
                            variant: 'text-md/normal',
                            children: g.NW.format(g.t.EcJBEB, { helpURL: f.Z.getArticleURL(_.BhN.AGE_GATE) })
                        }),
                        (0, n.jsx)(m.Z, {
                            required: !0,
                            autoFocus: !0,
                            wrapperClassName: y.formItem,
                            label: g.NW.string(g.t.rhBeKS),
                            name: 'birthday',
                            onChange: (e) => S(e),
                            onPopulated: j,
                            error: A,
                            value: N,
                            ref: w
                        }),
                        (0, n.jsx)(i.zxk, {
                            buttonRef: h,
                            type: 'submit',
                            size: i.zxk.Sizes.LARGE,
                            submitting: O,
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
