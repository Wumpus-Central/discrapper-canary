n.d(e, { default: () => w });
var a = n(627968),
    l = n(64700),
    i = n(284009),
    r = n.n(i),
    s = n(989349),
    o = n.n(s),
    u = n(110259),
    c = n(189213),
    E = n(772707),
    d = n(311907),
    A = n(686956),
    _ = n(935649),
    f = n(847599),
    p = n(36149),
    m = n(734057),
    h = n(309010),
    g = n(287809),
    T = n(954571),
    y = n(975571),
    G = n(955437),
    b = n(612200),
    R = n(323073),
    N = n(201505),
    k = n(204925),
    C = n(652215),
    S = n(985018),
    x = n(700129);
function w(t) {
    let e,
        n,
        { transitionState: i, source: s } = t,
        w = (0, d.bG)([g.default], () => g.default.getCurrentUser()),
        I = (0, d.bG)([h.A, m.A], () => m.A.getChannel(h.A.getChannelId())),
        [M, D] = l.useState(null),
        [v, U] = l.useState(null),
        [O, P] = l.useState(!1),
        [V, F] = l.useState(0),
        L = l.useRef(null),
        j = l.useRef(null),
        W = s === k.w_.DEEP_LINK_PROMPT,
        Y = s === k.w_.FAMILY_CENTER,
        $ = (0, R.a9)() && !Y && !W,
        { verifyAgreementButtonText: B, verifyGateDescription: H, verifyTitle: z } = (0, R.Gn)(s),
        K = (0, R.vL)(I),
        Z = R.Bc.has(s);
    (0, p.I7)(s);
    let q = null != M ? o()().diff(M, "years") : null;
    function Q() {
        if (s === k.w_.NSFW_SERVER_INVITE_EMBED) return (0, b.IO)(s), Promise.resolve();
        let t = I?.getGuildId();
        return A.A.nsfwReturnToSafety(t), (0, b.IO)(s), Promise.resolve();
    }
    async function X() {
        r()(null != M, "Cannot submit null birthday.");
        try {
            return U(null), P(!0), await (0, G.n7)(M, s);
        } catch (t) {
            null != t.body && null != t.body.date_of_birth
                ? (0, b.MP)(s, t.body.date_of_birth)
                : (t?.body?.username != null ? U(S.intl.string(S.t["TGg/2k"])) : U(t?.body.message), P(!1));
        }
    }
    async function J() {
        (r()(null != q, "Cannot submit if we haven't been able to calculate age."), q < 18) ? F(1) : await X();
    }
    async function tt(t) {
        t.preventDefault(), O || null == M || (await J());
    }
    async function te() {
        null == (await X()) && F(0);
    }
    l.useEffect(() => {
        w?.nsfwAllowed !== !0 || $ || W || (0, b.Nk)(s);
    }),
        l.useEffect(() => {
            T.default.track(C.HAw.AGE_GATE_ACTION, { source: s, action: k.AM.AGE_GATE_OPEN });
        }, [s]);
    let tn = l.useCallback(
            (t) => {
                D(t);
            },
            [D],
        ),
        ta = l.useCallback(() => {
            j.current?.focus();
        }, [j]),
        tl = l.useCallback(() => {
            _.A.showAgeVerificationGetStartedModal({ entryPoint: f.q1.NSFW_AGE_GATE });
        }, []),
        ti = { transitionState: i, onClose: Q, graphic: { type: "image", src: x.A }, gradientColor: "blue" };
    return $
        ? (0, a.jsx)(E.k, {
              title: z,
              subtitle: H,
              actions: [
                  { text: S.intl.string(S.t.f3Pet9), onClick: Q, variant: "secondary" },
                  { text: B ?? S.intl.string(S.t.FDSSia), onClick: tl },
              ],
              trackingProps: {
                  impression: { impressionName: u.ImpressionNames.USER_AGE_GATE_VERIFY },
                  impressionType: u.ImpressionTypes.MODAL,
              },
              ...ti,
          })
        : w?.nsfwAllowed === !1 && (K || Z) && !Y && !W
          ? (0, a.jsx)(E.k, {
                title: S.intl.string(Z ? S.t["H0SG/g"] : S.t.NEabBa),
                subtitle: S.intl.format(Z ? S.t["6++3cX"] : S.t["2kHZes"], {
                    helpURL: y.A.getArticleURL(C.MVz.AGE_GATE),
                }),
                actions: [{ text: S.intl.string(S.t["/g10LC"]), onClick: Q, variant: "secondary" }],
                trackingProps: {
                    impression: { impressionName: u.ImpressionNames.USER_AGE_GATE_VERIFY },
                    impressionType: u.ImpressionTypes.MODAL,
                },
                ...ti,
            })
          : 0 === V
            ? ((e = (() => {
                  switch (s) {
                      case k.w_.NSFW_SERVER:
                      case k.w_.NSFW_SERVER_INVITE:
                      case k.w_.NSFW_SERVER_INVITE_EMBED:
                          return S.intl.string(S.t.vAymlG);
                      case k.w_.FAMILY_CENTER:
                          return S.intl.string(S.t.M7mt7m);
                      default:
                          return S.intl.string(S.t.F8otRo);
                  }
              })()),
              (n = (() => {
                  switch (s) {
                      case k.w_.FAMILY_CENTER:
                          return S.intl.string(S.t.mhUrKS);
                      case k.w_.DEEP_LINK_PROMPT:
                          return S.intl.format(S.t.iyhg2s, { helpURL: y.A.getArticleURL(C.MVz.AGE_GATE) });
                      default:
                          return S.intl.format(S.t.n3QjDE, { helpURL: y.A.getArticleURL(C.MVz.AGE_GATE) });
                  }
              })()),
              (0, a.jsx)("form", {
                  onSubmit: tt,
                  children: (0, a.jsx)(c.Modal, {
                      title: e,
                      subtitle: n,
                      actions: [
                          { text: S.intl.string(S.t["1MrpWO"]), onClick: Q, variant: "secondary" },
                          { text: S.intl.string(S.t.uBFuok), onClick: J, loading: O, disabled: null == M },
                      ],
                      ...ti,
                      children: (0, a.jsx)(N.A, {
                          label: S.intl.string(S.t.rhBeKe),
                          name: "date_of_birth",
                          onChange: tn,
                          onPopulated: ta,
                          error: v,
                          value: M,
                          ref: L,
                          autoFocus: !0,
                      }),
                  }),
              }))
            : (0, a.jsx)(c.Modal, {
                  transitionState: i,
                  onClose: Q,
                  title: S.intl.formatToPlainString(S.t.wumolR, { age: q ?? "" }),
                  subtitle: S.intl.formatToPlainString(S.t.n3QjDE, { helpURL: y.A.getArticleURL(C.MVz.AGE_GATE) }),
                  actions: [
                      { text: S.intl.string(S.t.cfYCrb), onClick: () => F(0), variant: "secondary" },
                      { text: S.intl.string(S.t["6tahin"]), onClick: te },
                  ],
              });
}
