n.d(t, { default: () => g }), n(47120);
var l = n(200651),
    r = n(192379),
    a = n(990547),
    i = n(442837),
    o = n(481060),
    s = n(390885),
    c = n(594174),
    u = n(626135),
    f = n(63063),
    _ = n(771308),
    d = n(13430),
    p = n(723359),
    m = n(981631),
    A = n(630724),
    N = n(388032),
    E = n(282222);
function g(e) {
    let { transitionState: t, onClose: n } = e,
        [g, S] = r.useState(null),
        [T, C] = r.useState(null),
        [v, w] = r.useState(!1),
        b = r.createRef(),
        h = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        y = r.createRef();
    r.useEffect(() => {
        s.Z.flowStep(A.MK.ANY, A.FF.AGE_GATE), u.default.track(m.rMx.OPEN_MODAL, { type: 'Claim Age Gate' });
    }, []),
        r.useEffect(() => {
            (null == h ? void 0 : h.nsfwAllowed) != null && n();
        }, [h, n]);
    let U = async (e) => {
            if ((e.preventDefault(), null != g)) {
                w(!0);
                try {
                    await _.Av(g, m.jXE.CLAIM_ACCOUNT_MODAL);
                } catch (e) {
                    if (null != e.body && null != e.body.date_of_birth) s.Z.flowStep(A.MK.ANY, A.FF.AGE_GATE_UNDERAGE), _.wE(p.L0.CLAIM_ACCOUNT), _.hp(p.L0.CLAIM_ACCOUNT), n();
                    else {
                        var t;
                        (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.username) != null ? C(N.intl.string(N.t['TGg/2t'])) : C(null == e ? void 0 : e.body.message);
                    }
                }
                w(!1);
            }
        },
        G = r.useCallback(() => {
            var e;
            null === (e = y.current) || void 0 === e || e.focus();
        }, [y]);
    return (0, l.jsx)(o.Y0X, {
        transitionState: t,
        size: o.CgR.DYNAMIC,
        'aria-label': N.intl.string(N.t.QpSKo6),
        className: E.modal,
        impression: {
            impressionName: a.ImpressionNames.USER_AGE_GATE,
            impressionProperties: { existing_user: !1 }
        },
        children: (0, l.jsxs)(o.hzk, {
            className: E.content,
            children: [
                (0, l.jsx)('div', { className: E.image }),
                (0, l.jsxs)('form', {
                    onSubmit: U,
                    children: [
                        (0, l.jsx)(o.X6q, {
                            className: E.title,
                            variant: 'heading-xl/semibold',
                            children: N.intl.string(N.t.QpSKo6)
                        }),
                        (0, l.jsx)(o.Text, {
                            color: 'header-secondary',
                            className: E.description,
                            variant: 'text-md/normal',
                            children: N.intl.format(N.t.EcJBEB, { helpURL: f.Z.getArticleURL(m.BhN.AGE_GATE) })
                        }),
                        (0, l.jsx)(d.Z, {
                            required: !0,
                            autoFocus: !0,
                            wrapperClassName: E.formItem,
                            label: N.intl.string(N.t.rhBeKS),
                            name: 'birthday',
                            onChange: (e) => S(e),
                            onPopulated: G,
                            error: T,
                            value: g,
                            ref: b
                        }),
                        (0, l.jsx)(o.zxk, {
                            buttonRef: y,
                            type: 'submit',
                            size: o.zxk.Sizes.LARGE,
                            submitting: v,
                            disabled: null == g,
                            fullWidth: !0,
                            children: N.intl.string(N.t.i4jeWV)
                        })
                    ]
                })
            ]
        })
    });
}
