n.d(t, {
    default: () => y,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    o = n(110259),
    a = n(158954),
    i = n(311907),
    u = n(894778),
    c = n(287809),
    s = n(954571),
    p = n(975571),
    d = n(955437),
    f = n(201505),
    A = n(204925),
    _ = n(652215),
    m = n(315290),
    E = n(985018);

function y(e) {
    let { transitionState: t, onClose: n } = e,
        [y, b] = l.useState(null),
        [g, O] = l.useState(null),
        [T, w] = l.useState(!1),
        S = l.useRef(null),
        N = (0, i.bG)([c.default], () => c.default.getCurrentUser()),
        h = l.useRef(null);
    l.useEffect(() => {
        u.A.flowStep(m.do.ANY, m.Ot.AGE_GATE),
            s.default.track(_.HAw.OPEN_MODAL, {
                type: "Claim Age Gate",
            });
    }, []),
        l.useEffect(() => {
            (null == N ? void 0 : N.nsfwAllowed) != null && n();
        }, [N, n]);
    let v = async (e) => {
            if ((e.preventDefault(), null != y)) {
                w(!0);
                try {
                    await d.n7(y, _.JJy.CLAIM_ACCOUNT_MODAL);
                } catch (e) {
                    if (null != e.body && null != e.body.date_of_birth)
                        u.A.flowStep(m.do.ANY, m.Ot.AGE_GATE_UNDERAGE),
                            d.Xv(A.w_.CLAIM_ACCOUNT),
                            d.$2(A.w_.CLAIM_ACCOUNT),
                            n();
                    else {
                        var t;
                        (null == e || null == (t = e.body) ? void 0 : t.username) != null
                            ? O(E.intl.string(E.t["TGg/2k"]))
                            : O(null == e ? void 0 : e.body.message);
                    }
                }
                w(!1);
            }
        },
        G = l.useCallback(() => {
            var e;
            null == (e = h.current) || e.focus();
        }, [h]);
    return (0, r.jsx)("form", {
        onSubmit: v,
        children: (0, r.jsx)(a.Modal, {
            transitionState: t,
            onClose: n,
            title: E.intl.string(E.t.QpSKow),
            subtitle: E.intl.format(E.t.EcJBEI, {
                helpURL: p.A.getArticleURL(_.MVz.AGE_GATE),
            }),
            actions: [
                {
                    text: E.intl.string(E.t.i4jeWR),
                    type: "submit",
                    loading: T,
                    disabled: null == y,
                },
            ],
            trackingProps: {
                impression: {
                    impressionName: o.ImpressionNames.USER_AGE_GATE,
                    impressionProperties: {
                        existing_user: !1,
                    },
                },
            },
            children: (0, r.jsx)(f.A, {
                required: !0,
                autoFocus: !0,
                label: E.intl.string(E.t.rhBeKe),
                name: "birthday",
                onChange: (e) => b(e),
                onPopulated: G,
                error: g,
                value: y,
                ref: S,
            }),
        }),
    });
}
