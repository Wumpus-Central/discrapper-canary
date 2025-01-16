n.r(t),
    n.d(t, {
        default: function () {
            return E;
        }
    }),
    n(47120);
var l = n(200651),
    r = n(192379),
    a = n(990547),
    i = n(442837),
    o = n(481060),
    u = n(390885),
    s = n(594174),
    c = n(626135),
    f = n(63063),
    _ = n(771308),
    d = n(13430),
    p = n(723359),
    m = n(981631),
    A = n(630724),
    N = n(388032),
    g = n(282222);
function E(e) {
    let { transitionState: t, onClose: n } = e,
        [E, S] = r.useState(null),
        [T, C] = r.useState(null),
        [v, w] = r.useState(!1),
        b = r.createRef(),
        U = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
        h = r.createRef();
    r.useEffect(() => {
        u.Z.flowStep(A.MK.ANY, A.FF.AGE_GATE), c.default.track(m.rMx.OPEN_MODAL, { type: 'Claim Age Gate' });
    }, []),
        r.useEffect(() => {
            (null == U ? void 0 : U.nsfwAllowed) != null && n();
        }, [U, n]);
    let G = async (e) => {
            if ((e.preventDefault(), null != E)) {
                w(!0);
                try {
                    await _.Av(E, m.jXE.CLAIM_ACCOUNT_MODAL);
                } catch (e) {
                    if (null != e.body && null != e.body.date_of_birth) u.Z.flowStep(A.MK.ANY, A.FF.AGE_GATE_UNDERAGE), _.wE(p.L0.CLAIM_ACCOUNT), _.hp(p.L0.CLAIM_ACCOUNT), n();
                    else {
                        var t;
                        (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.username) != null ? C(N.intl.string(N.t['TGg/2t'])) : C(null == e ? void 0 : e.body.message);
                    }
                }
                w(!1);
            }
        },
        y = r.useCallback(() => {
            var e;
            null === (e = h.current) || void 0 === e || e.focus();
        }, [h]);
    return (0, l.jsx)(o.ModalRoot, {
        transitionState: t,
        size: o.ModalSize.DYNAMIC,
        'aria-label': N.intl.string(N.t.QpSKo6),
        className: g.modal,
        impression: {
            impressionName: a.ImpressionNames.USER_AGE_GATE,
            impressionProperties: { existing_user: !1 }
        },
        children: (0, l.jsxs)(o.ModalContent, {
            className: g.content,
            children: [
                (0, l.jsx)('div', { className: g.image }),
                (0, l.jsxs)('form', {
                    onSubmit: G,
                    children: [
                        (0, l.jsx)(o.Heading, {
                            className: g.title,
                            variant: 'heading-xl/semibold',
                            children: N.intl.string(N.t.QpSKo6)
                        }),
                        (0, l.jsx)(o.Text, {
                            color: 'header-secondary',
                            className: g.description,
                            variant: 'text-md/normal',
                            children: N.intl.format(N.t.EcJBEB, { helpURL: f.Z.getArticleURL(m.BhN.AGE_GATE) })
                        }),
                        (0, l.jsx)(d.Z, {
                            required: !0,
                            autoFocus: !0,
                            wrapperClassName: g.formItem,
                            label: N.intl.string(N.t.rhBeKS),
                            name: 'birthday',
                            onChange: (e) => S(e),
                            onPopulated: y,
                            error: T,
                            value: E,
                            ref: b
                        }),
                        (0, l.jsx)(o.Button, {
                            buttonRef: h,
                            type: 'submit',
                            size: o.Button.Sizes.LARGE,
                            submitting: v,
                            disabled: null == E,
                            fullWidth: !0,
                            children: N.intl.string(N.t.i4jeWV)
                        })
                    ]
                })
            ]
        })
    });
}
