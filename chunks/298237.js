n.d(t, { default: () => y }), n(388685);
var r = n(54381),
    l = n(473749),
    o = n(990547),
    a = n(793030),
    i = n(442837),
    u = n(390885),
    c = n(594174),
    s = n(626135),
    f = n(63063),
    p = n(771308),
    d = n(13430),
    _ = n(723359),
    E = n(981631),
    m = n(630724),
    A = n(388032);
function y(e) {
    let { transitionState: t, onClose: n } = e,
        [y, b] = l.useState(null),
        [g, T] = l.useState(null),
        [O, N] = l.useState(!1),
        S = l.useRef(null),
        v = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        h = l.useRef(null);
    l.useEffect(() => {
        u.Z.flowStep(m.MK.ANY, m.FF.AGE_GATE), s.default.track(E.rMx.OPEN_MODAL, { type: "Claim Age Gate" });
    }, []),
        l.useEffect(() => {
            (null == v ? void 0 : v.nsfwAllowed) != null && n();
        }, [v, n]);
    let G = async (e) => {
            if ((e.preventDefault(), null != y)) {
                N(!0);
                try {
                    await p.Av(y, E.jXE.CLAIM_ACCOUNT_MODAL);
                } catch (e) {
                    if (null != e.body && null != e.body.date_of_birth)
                        u.Z.flowStep(m.MK.ANY, m.FF.AGE_GATE_UNDERAGE),
                            p.wE(_.L0.CLAIM_ACCOUNT),
                            p.hp(_.L0.CLAIM_ACCOUNT),
                            n();
                    else {
                        var t;
                        (null == e || null == (t = e.body) ? void 0 : t.username) != null
                            ? T(A.intl.string(A.t["TGg/2k"]))
                            : T(null == e ? void 0 : e.body.message);
                    }
                }
                N(!1);
            }
        },
        w = l.useCallback(() => {
            var e;
            null == (e = h.current) || e.focus();
        }, [h]);
    return (0, r.jsx)("form", {
        onSubmit: G,
        children: (0, r.jsx)(a.Modal, {
            transitionState: t,
            onClose: n,
            title: A.intl.string(A.t.QpSKow),
            subtitle: A.intl.format(A.t.EcJBEI, { helpURL: f.Z.getArticleURL(E.BhN.AGE_GATE) }),
            actions: [
                {
                    text: A.intl.string(A.t.i4jeWR),
                    type: "submit",
                    loading: O,
                    disabled: null == y,
                },
            ],
            trackingProps: {
                impression: {
                    impressionName: o.ImpressionNames.USER_AGE_GATE,
                    impressionProperties: { existing_user: !1 },
                },
            },
            children: (0, r.jsx)(d.Z, {
                required: !0,
                autoFocus: !0,
                label: A.intl.string(A.t.rhBeKe),
                name: "birthday",
                onChange: (e) => b(e),
                onPopulated: w,
                error: g,
                value: y,
                ref: S,
            }),
        }),
    });
}
