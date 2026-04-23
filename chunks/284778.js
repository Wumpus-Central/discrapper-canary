n.d(t, { default: () => T });
var l = n(627968),
    r = n(64700),
    a = n(110259),
    o = n(189213),
    i = n(17928),
    s = n(894778),
    u = n(287809),
    c = n(954571),
    d = n(975571),
    A = n(955437),
    _ = n(201505),
    p = n(204925),
    f = n(652215),
    E = n(315290),
    m = n(985018);
function T(e) {
    let { transitionState: t, onClose: n } = e,
        [T, g] = r.useState(null),
        [N, y] = r.useState(null),
        [h, G] = r.useState(!1),
        S = r.useRef(null),
        w = (0, i.bG)([u.default], () => u.default.getCurrentUser()),
        C = r.useRef(null);
    r.useEffect(() => {
        s.A.flowStep(E.do.ANY, E.Ot.AGE_GATE), c.default.track(f.HAw.OPEN_MODAL, { type: "Claim Age Gate" });
    }, []),
        r.useEffect(() => {
            w?.nsfwAllowed != null && n();
        }, [w, n]);
    let b = async (e) => {
            if ((e.preventDefault(), null != T)) {
                G(!0);
                try {
                    await A.n7(T, f.JJy.CLAIM_ACCOUNT_MODAL);
                } catch (e) {
                    null != e.body && null != e.body.date_of_birth
                        ? (s.A.flowStep(E.do.ANY, E.Ot.AGE_GATE_UNDERAGE),
                          A.Xv(p.w_.CLAIM_ACCOUNT),
                          A.$2(p.w_.CLAIM_ACCOUNT),
                          n())
                        : e?.body?.username != null
                          ? y(m.intl.string(m.t["TGg/2k"]))
                          : y(e?.body.message);
                }
                G(!1);
            }
        },
        U = r.useCallback(() => {
            C.current?.focus();
        }, [C]);
    return (0, l.jsx)("form", {
        onSubmit: b,
        children: (0, l.jsx)(o.Modal, {
            transitionState: t,
            onClose: n,
            title: m.intl.string(m.t.QpSKow),
            subtitle: m.intl.format(m.t.EcJBEI, { helpURL: d.A.getArticleURL(f.MVz.AGE_GATE) }),
            actions: [{ text: m.intl.string(m.t.i4jeWR), type: "submit", loading: h, disabled: null == T }],
            trackingProps: {
                impression: {
                    impressionName: a.ImpressionNames.USER_AGE_GATE,
                    impressionProperties: { existing_user: !1 },
                },
            },
            children: (0, l.jsx)(_.A, {
                required: !0,
                autoFocus: !0,
                label: m.intl.string(m.t.rhBeKe),
                name: "birthday",
                onChange: (e) => g(e),
                onPopulated: U,
                error: N,
                value: T,
                ref: S,
            }),
        }),
    });
}
