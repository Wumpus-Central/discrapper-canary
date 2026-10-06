n.d(e, { default: () => N });
var i = n(477900),
    l = n(582128),
    a = n(284009),
    r = n.n(a),
    s = n(536637),
    o = n.n(s),
    u = n(562708),
    c = n(17928),
    E = n(189213),
    _ = n(772707),
    A = n(66834),
    f = n(379257),
    d = n(306537),
    g = n(734057),
    m = n(309010),
    p = n(287809),
    b = n(174459),
    R = n(975571),
    h = n(955437),
    w = n(612200),
    y = n(323073),
    C = n(597306),
    G = n(201505),
    T = n(204925),
    S = n(652215),
    k = n(375708),
    I = n(700129);
function N(t) {
    let e,
        n,
        { transitionState: a, source: s } = t,
        N = (0, c.bG)([p.default], () => p.default.getCurrentUser()),
        M = (0, c.bG)([m.Ay, g.A], () => g.A.getChannel(m.Ay.getChannelId())),
        [L, P] = l.useState(null),
        [F, V] = l.useState(null),
        [v, x] = l.useState(!1),
        [U, D] = l.useState(0),
        O = l.useRef(null),
        j = l.useRef(null),
        B = s === T.w_.DEEP_LINK_PROMPT,
        W = s === T.w_.FAMILY_CENTER,
        Y = (0, C.a)() && !W && !B,
        {
            verifyAgreementButtonText: z,
            verifyDisagreementButtonText: K,
            verifyEmphasiseDisagree: H,
            verifyGateDescription: Q,
            verifyTitle: q,
        } = (0, y.Gn)(s),
        X = (0, y.vL)(M),
        Z = y.Bc.has(s),
        J = null != L ? o()().diff(L, "years") : null;
    function $() {
        if (s === T.w_.NSFW_SERVER_INVITE_EMBED) return ((0, w.IO)(s), Promise.resolve());
        let t = M?.getGuildId();
        return (A.A.nsfwReturnToSafety(t), (0, w.IO)(s), Promise.resolve());
    }
    async function tt() {
        r()(null != L, "Cannot submit null birthday.");
        try {
            return (V(null), x(!0), await (0, h.n7)(L, s), !0);
        } catch (t) {
            return (
                null != t.body && null != t.body.date_of_birth
                    ? (0, w.MP)(s, t.body.date_of_birth)
                    : (t?.body?.username != null ? V(k.intl.string(k.t["TGg/2k"])) : V(t?.body.message), x(!1)),
                !1
            );
        }
    }
    async function te() {
        (r()(null != J, "Cannot submit if we haven't been able to calculate age."), J < 18) ? D(1) : await tt();
    }
    async function tn(t) {
        (t.preventDefault(), v || null == L || (await te()));
    }
    async function ti() {
        (await tt()) || D(0);
    }
    (l.useEffect(() => {
        N?.nsfwAllowed !== !0 || Y || B || (0, w.Nk)(s);
    }, [N?.nsfwAllowed, Y, B, s]),
        l.useEffect(() => {
            b.default.track(S.HAw.AGE_GATE_ACTION, { source: s, action: T.AM.AGE_GATE_OPEN });
        }, [s]));
    let tl = l.useCallback(
            (t) => {
                P(t);
            },
            [P],
        ),
        ta = l.useCallback(() => {
            j.current?.focus();
        }, [j]),
        tr = l.useCallback(() => {
            f.A.showAgeVerificationGetStartedModal({ entryPoint: d.q1.NSFW_AGE_GATE });
        }, []),
        ts = { transitionState: a, onClose: $, graphic: { type: "image", src: I.A }, gradientColor: "blue" };
    if (Y) {
        let t = { text: K ?? k.intl.string(k.t.f3Pet9), onClick: $ },
            e = { text: z ?? k.intl.string(k.t.FDSSia), onClick: tr };
        return (0, i.jsx)(_.k, {
            title: q,
            subtitle: Q,
            actions: !0 === H ? [{ ...e, variant: "secondary" }, t] : [{ ...t, variant: "secondary" }, e],
            trackingProps: {
                impression: { impressionName: u.ImpressionNames.USER_AGE_GATE_VERIFY },
                impressionType: u.ImpressionTypes.MODAL,
            },
            ...ts,
        });
    }
    return N?.nsfwAllowed === !1 && (X || Z) && !W && !B
        ? (0, i.jsx)(_.k, {
              title: k.intl.string(Z ? k.t["H0SG/g"] : k.t.NEabBa),
              subtitle: k.intl.format(Z ? k.t["6++3cX"] : k.t["2kHZes"], {
                  helpURL: R.A.getArticleURL(S.MVz.AGE_GATE),
              }),
              actions: [{ text: k.intl.string(k.t["/g10LC"]), onClick: $, variant: "secondary" }],
              trackingProps: {
                  impression: { impressionName: u.ImpressionNames.USER_AGE_GATE_VERIFY },
                  impressionType: u.ImpressionTypes.MODAL,
              },
              ...ts,
          })
        : 0 === U
          ? ((e = (() => {
                switch (s) {
                    case T.w_.NSFW_SERVER:
                    case T.w_.NSFW_SERVER_INVITE:
                    case T.w_.NSFW_SERVER_INVITE_EMBED:
                        return k.intl.string(k.t.vAymlG);
                    case T.w_.FAMILY_CENTER:
                        return k.intl.string(k.t.M7mt7m);
                    default:
                        return k.intl.string(k.t.F8otRo);
                }
            })()),
            (n = (() => {
                switch (s) {
                    case T.w_.FAMILY_CENTER:
                        return k.intl.string(k.t.mhUrKS);
                    case T.w_.DEEP_LINK_PROMPT:
                        return k.intl.format(k.t.iyhg2s, { helpURL: R.A.getArticleURL(S.MVz.AGE_GATE) });
                    default:
                        return k.intl.format(k.t.n3QjDE, { helpURL: R.A.getArticleURL(S.MVz.AGE_GATE) });
                }
            })()),
            (0, i.jsx)("form", {
                onSubmit: tn,
                children: (0, i.jsx)(E.a, {
                    title: e,
                    subtitle: n,
                    actions: [
                        { text: k.intl.string(k.t["1MrpWO"]), onClick: $, variant: "secondary" },
                        { text: k.intl.string(k.t.uBFuok), onClick: te, loading: v, disabled: null == L },
                    ],
                    ...ts,
                    children: (0, i.jsx)(G.A, {
                        label: k.intl.string(k.t.rhBeKe),
                        name: "date_of_birth",
                        onChange: tl,
                        onPopulated: ta,
                        error: F,
                        value: L,
                        ref: O,
                        autoFocus: !0,
                    }),
                }),
            }))
          : (0, i.jsx)(E.a, {
                transitionState: a,
                onClose: $,
                title: k.intl.formatToPlainString(k.t.wumolR, { age: J ?? "" }),
                subtitle: k.intl.formatToPlainString(k.t.n3QjDE, { helpURL: R.A.getArticleURL(S.MVz.AGE_GATE) }),
                actions: [
                    { text: k.intl.string(k.t.cfYCrb), onClick: () => D(0), variant: "secondary" },
                    { text: k.intl.string(k.t["6tahin"]), onClick: ti },
                ],
            });
}
