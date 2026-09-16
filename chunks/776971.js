n.d(e, { default: () => I });
var i = n(477900),
    l = n(582128),
    a = n(284009),
    r = n.n(a),
    s = n(536637),
    o = n.n(s),
    u = n(562708),
    c = n(189213),
    E = n(772707),
    _ = n(17928),
    A = n(66834),
    d = n(379257),
    f = n(847599),
    g = n(734057),
    m = n(309010),
    p = n(287809),
    b = n(174459),
    R = n(975571),
    h = n(955437),
    y = n(612200),
    C = n(323073),
    w = n(201505),
    G = n(204925),
    T = n(652215),
    S = n(375708),
    k = n(700129);
function I(t) {
    let e,
        n,
        { transitionState: a, source: s } = t,
        I = (0, _.bG)([p.default], () => p.default.getCurrentUser()),
        N = (0, _.bG)([m.Ay, g.A], () => g.A.getChannel(m.Ay.getChannelId())),
        [M, L] = l.useState(null),
        [P, F] = l.useState(null),
        [V, v] = l.useState(!1),
        [x, U] = l.useState(0),
        D = l.useRef(null),
        O = l.useRef(null),
        j = s === G.w_.DEEP_LINK_PROMPT,
        B = s === G.w_.FAMILY_CENTER,
        W = (0, C.a9)() && !B && !j,
        {
            verifyAgreementButtonText: Y,
            verifyDisagreementButtonText: z,
            verifyEmphasiseDisagree: K,
            verifyGateDescription: H,
            verifyTitle: Q,
        } = (0, C.Gn)(s),
        q = (0, C.vL)(N),
        X = C.Bc.has(s),
        Z = null != M ? o()().diff(M, "years") : null;
    function J() {
        if (s === G.w_.NSFW_SERVER_INVITE_EMBED) return ((0, y.IO)(s), Promise.resolve());
        let t = N?.getGuildId();
        return (A.A.nsfwReturnToSafety(t), (0, y.IO)(s), Promise.resolve());
    }
    async function $() {
        r()(null != M, "Cannot submit null birthday.");
        try {
            return (F(null), v(!0), await (0, h.n7)(M, s), !0);
        } catch (t) {
            return (
                null != t.body && null != t.body.date_of_birth
                    ? (0, y.MP)(s, t.body.date_of_birth)
                    : (t?.body?.username != null ? F(S.intl.string(S.t["TGg/2k"])) : F(t?.body.message), v(!1)),
                !1
            );
        }
    }
    async function tt() {
        (r()(null != Z, "Cannot submit if we haven't been able to calculate age."), Z < 18) ? U(1) : await $();
    }
    async function te(t) {
        (t.preventDefault(), V || null == M || (await tt()));
    }
    async function tn() {
        (await $()) || U(0);
    }
    (l.useEffect(() => {
        I?.nsfwAllowed !== !0 || W || j || (0, y.Nk)(s);
    }),
        l.useEffect(() => {
            b.default.track(T.HAw.AGE_GATE_ACTION, { source: s, action: G.AM.AGE_GATE_OPEN });
        }, [s]));
    let ti = l.useCallback(
            (t) => {
                L(t);
            },
            [L],
        ),
        tl = l.useCallback(() => {
            O.current?.focus();
        }, [O]),
        ta = l.useCallback(() => {
            d.A.showAgeVerificationGetStartedModal({ entryPoint: f.q1.NSFW_AGE_GATE });
        }, []),
        tr = { transitionState: a, onClose: J, graphic: { type: "image", src: k.A }, gradientColor: "blue" };
    if (W) {
        let t = { text: z ?? S.intl.string(S.t.f3Pet9), onClick: J },
            e = { text: Y ?? S.intl.string(S.t.FDSSia), onClick: ta };
        return (0, i.jsx)(E.k, {
            title: Q,
            subtitle: H,
            actions: !0 === K ? [{ ...e, variant: "secondary" }, t] : [{ ...t, variant: "secondary" }, e],
            trackingProps: {
                impression: { impressionName: u.ImpressionNames.USER_AGE_GATE_VERIFY },
                impressionType: u.ImpressionTypes.MODAL,
            },
            ...tr,
        });
    }
    return I?.nsfwAllowed === !1 && (q || X) && !B && !j
        ? (0, i.jsx)(E.k, {
              title: S.intl.string(X ? S.t["H0SG/g"] : S.t.NEabBa),
              subtitle: S.intl.format(X ? S.t["6++3cX"] : S.t["2kHZes"], {
                  helpURL: R.A.getArticleURL(T.MVz.AGE_GATE),
              }),
              actions: [{ text: S.intl.string(S.t["/g10LC"]), onClick: J, variant: "secondary" }],
              trackingProps: {
                  impression: { impressionName: u.ImpressionNames.USER_AGE_GATE_VERIFY },
                  impressionType: u.ImpressionTypes.MODAL,
              },
              ...tr,
          })
        : 0 === x
          ? ((e = (() => {
                switch (s) {
                    case G.w_.NSFW_SERVER:
                    case G.w_.NSFW_SERVER_INVITE:
                    case G.w_.NSFW_SERVER_INVITE_EMBED:
                        return S.intl.string(S.t.vAymlG);
                    case G.w_.FAMILY_CENTER:
                        return S.intl.string(S.t.M7mt7m);
                    default:
                        return S.intl.string(S.t.F8otRo);
                }
            })()),
            (n = (() => {
                switch (s) {
                    case G.w_.FAMILY_CENTER:
                        return S.intl.string(S.t.mhUrKS);
                    case G.w_.DEEP_LINK_PROMPT:
                        return S.intl.format(S.t.iyhg2s, { helpURL: R.A.getArticleURL(T.MVz.AGE_GATE) });
                    default:
                        return S.intl.format(S.t.n3QjDE, { helpURL: R.A.getArticleURL(T.MVz.AGE_GATE) });
                }
            })()),
            (0, i.jsx)("form", {
                onSubmit: te,
                children: (0, i.jsx)(c.Modal, {
                    title: e,
                    subtitle: n,
                    actions: [
                        { text: S.intl.string(S.t["1MrpWO"]), onClick: J, variant: "secondary" },
                        { text: S.intl.string(S.t.uBFuok), onClick: tt, loading: V, disabled: null == M },
                    ],
                    ...tr,
                    children: (0, i.jsx)(w.A, {
                        label: S.intl.string(S.t.rhBeKe),
                        name: "date_of_birth",
                        onChange: ti,
                        onPopulated: tl,
                        error: P,
                        value: M,
                        ref: D,
                        autoFocus: !0,
                    }),
                }),
            }))
          : (0, i.jsx)(c.Modal, {
                transitionState: a,
                onClose: J,
                title: S.intl.formatToPlainString(S.t.wumolR, { age: Z ?? "" }),
                subtitle: S.intl.formatToPlainString(S.t.n3QjDE, { helpURL: R.A.getArticleURL(T.MVz.AGE_GATE) }),
                actions: [
                    { text: S.intl.string(S.t.cfYCrb), onClick: () => U(0), variant: "secondary" },
                    { text: S.intl.string(S.t["6tahin"]), onClick: tn },
                ],
            });
}
