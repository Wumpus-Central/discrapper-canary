l.d(t, { default: () => b });
var n = l(627968),
    s = l(64700),
    i = l(562708),
    r = l(189213),
    u = l(17928),
    a = l(894778),
    o = l(287809),
    A = l(174459),
    d = l(975571),
    c = l(955437),
    f = l(201505),
    p = l(204925),
    _ = l(652215),
    C = l(315290),
    E = l(375708);
function b(e) {
    let { transitionState: t, onClose: l } = e,
        [b, m] = s.useState(null),
        [g, h] = s.useState(null),
        [G, w] = s.useState(!1),
        y = s.useRef(null),
        N = (0, u.bG)([o.default], () => o.default.getCurrentUser()),
        S = s.useRef(null);
    async function k(e) {
        if ((e.preventDefault(), null != b)) {
            w(!0);
            try {
                await c.n7(b, _.JJy.CLAIM_ACCOUNT_MODAL);
            } catch (e) {
                null != e.body && null != e.body.date_of_birth
                    ? (a.A.flowStep(C.do.ANY, C.Ot.AGE_GATE_UNDERAGE),
                      c.Xv(p.w_.CLAIM_ACCOUNT),
                      c.$2(p.w_.CLAIM_ACCOUNT),
                      l())
                    : e?.body?.username != null
                      ? h(E.intl.string(E.t["TGg/2k"]))
                      : h(e?.body.message);
            }
            w(!1);
        }
    }
    s.useEffect(() => {
        a.A.flowStep(C.do.ANY, C.Ot.AGE_GATE), A.default.track(_.HAw.OPEN_MODAL, { type: "Claim Age Gate" });
    }, []),
        s.useEffect(() => {
            N?.nsfwAllowed != null && l();
        }, [N, l]);
    let O = s.useCallback(() => {
        S.current?.focus();
    }, [S]);
    return (0, n.jsx)("form", {
        onSubmit: k,
        children: (0, n.jsx)(r.Modal, {
            transitionState: t,
            onClose: l,
            title: E.intl.string(E.t.QpSKow),
            subtitle: E.intl.format(E.t.EcJBEI, { helpURL: d.A.getArticleURL(_.MVz.AGE_GATE) }),
            actions: [{ text: E.intl.string(E.t.i4jeWR), type: "submit", loading: G, disabled: null == b }],
            trackingProps: {
                impression: {
                    impressionName: i.ImpressionNames.USER_AGE_GATE,
                    impressionProperties: { existing_user: !1 },
                },
            },
            children: (0, n.jsx)(f.A, {
                required: !0,
                autoFocus: !0,
                label: E.intl.string(E.t.rhBeKe),
                name: "birthday",
                onChange: (e) => m(e),
                onPopulated: O,
                error: g,
                value: b,
                ref: y,
            }),
        }),
    });
}
