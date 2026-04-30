n.d(e, { default: () => N });
var i = n(627968),
    l = n(64700),
    a = n(284009),
    s = n.n(a),
    r = n(989349),
    o = n.n(r),
    u = n(562708),
    c = n(189213),
    E = n(772707),
    _ = n(17928),
    A = n(66834),
    d = n(139716),
    f = n(847599),
    g = n(36149),
    m = n(734057),
    p = n(309010),
    b = n(287809),
    R = n(174459),
    h = n(975571),
    C = n(955437),
    w = n(612200),
    G = n(323073),
    T = n(201505),
    y = n(204925),
    S = n(652215),
    k = n(375708),
    I = n(700129);
function N(t) {
    let e,
        n,
        { transitionState: a, source: r } = t,
        N = (0, _.bG)([b.default], () => b.default.getCurrentUser()),
        M = (0, _.bG)([p.A, m.A], () => m.A.getChannel(p.A.getChannelId())),
        [L, P] = l.useState(null),
        [F, V] = l.useState(null),
        [x, v] = l.useState(!1),
        [U, D] = l.useState(0),
        O = l.useRef(null),
        j = l.useRef(null),
        B = r === y.w_.DEEP_LINK_PROMPT,
        W = r === y.w_.FAMILY_CENTER,
        Y = (0, G.a9)() && !W && !B,
        { verifyAgreementButtonText: z, verifyGateDescription: K, verifyTitle: H } = (0, G.Gn)(r),
        Q = (0, G.vL)(M),
        q = G.Bc.has(r);
    (0, g.I7)(r);
    let X = null != L ? o()().diff(L, "years") : null;
    function Z() {
        if (r === y.w_.NSFW_SERVER_INVITE_EMBED) return (0, w.IO)(r), Promise.resolve();
        let t = M?.getGuildId();
        return A.A.nsfwReturnToSafety(t), (0, w.IO)(r), Promise.resolve();
    }
    async function J() {
        s()(null != L, "Cannot submit null birthday.");
        try {
            return V(null), v(!0), await (0, C.n7)(L, r);
        } catch (t) {
            null != t.body && null != t.body.date_of_birth
                ? (0, w.MP)(r, t.body.date_of_birth)
                : (t?.body?.username != null ? V(k.intl.string(k.t["TGg/2k"])) : V(t?.body.message), v(!1));
        }
    }
    async function $() {
        (s()(null != X, "Cannot submit if we haven't been able to calculate age."), X < 18) ? D(1) : await J();
    }
    async function tt(t) {
        t.preventDefault(), x || null == L || (await $());
    }
    async function te() {
        null == (await J()) && D(0);
    }
    l.useEffect(() => {
        N?.nsfwAllowed !== !0 || Y || B || (0, w.Nk)(r);
    }),
        l.useEffect(() => {
            R.default.track(S.HAw.AGE_GATE_ACTION, { source: r, action: y.AM.AGE_GATE_OPEN });
        }, [r]);
    let tn = l.useCallback(
            (t) => {
                P(t);
            },
            [P],
        ),
        ti = l.useCallback(() => {
            j.current?.focus();
        }, [j]),
        tl = l.useCallback(() => {
            d.A.showAgeVerificationGetStartedModal({ entryPoint: f.q1.NSFW_AGE_GATE });
        }, []),
        ta = { transitionState: a, onClose: Z, graphic: { type: "image", src: I.A }, gradientColor: "blue" };
    return Y
        ? (0, i.jsx)(E.k, {
              title: H,
              subtitle: K,
              actions: [
                  { text: k.intl.string(k.t.f3Pet9), onClick: Z, variant: "secondary" },
                  { text: z ?? k.intl.string(k.t.FDSSia), onClick: tl },
              ],
              trackingProps: {
                  impression: { impressionName: u.ImpressionNames.USER_AGE_GATE_VERIFY },
                  impressionType: u.ImpressionTypes.MODAL,
              },
              ...ta,
          })
        : N?.nsfwAllowed === !1 && (Q || q) && !W && !B
          ? (0, i.jsx)(E.k, {
                title: k.intl.string(q ? k.t["H0SG/g"] : k.t.NEabBa),
                subtitle: k.intl.format(q ? k.t["6++3cX"] : k.t["2kHZes"], {
                    helpURL: h.A.getArticleURL(S.MVz.AGE_GATE),
                }),
                actions: [{ text: k.intl.string(k.t["/g10LC"]), onClick: Z, variant: "secondary" }],
                trackingProps: {
                    impression: { impressionName: u.ImpressionNames.USER_AGE_GATE_VERIFY },
                    impressionType: u.ImpressionTypes.MODAL,
                },
                ...ta,
            })
          : 0 === U
            ? ((e = (() => {
                  switch (r) {
                      case y.w_.NSFW_SERVER:
                      case y.w_.NSFW_SERVER_INVITE:
                      case y.w_.NSFW_SERVER_INVITE_EMBED:
                          return k.intl.string(k.t.vAymlG);
                      case y.w_.FAMILY_CENTER:
                          return k.intl.string(k.t.M7mt7m);
                      default:
                          return k.intl.string(k.t.F8otRo);
                  }
              })()),
              (n = (() => {
                  switch (r) {
                      case y.w_.FAMILY_CENTER:
                          return k.intl.string(k.t.mhUrKS);
                      case y.w_.DEEP_LINK_PROMPT:
                          return k.intl.format(k.t.iyhg2s, { helpURL: h.A.getArticleURL(S.MVz.AGE_GATE) });
                      default:
                          return k.intl.format(k.t.n3QjDE, { helpURL: h.A.getArticleURL(S.MVz.AGE_GATE) });
                  }
              })()),
              (0, i.jsx)("form", {
                  onSubmit: tt,
                  children: (0, i.jsx)(c.Modal, {
                      title: e,
                      subtitle: n,
                      actions: [
                          { text: k.intl.string(k.t["1MrpWO"]), onClick: Z, variant: "secondary" },
                          { text: k.intl.string(k.t.uBFuok), onClick: $, loading: x, disabled: null == L },
                      ],
                      ...ta,
                      children: (0, i.jsx)(T.A, {
                          label: k.intl.string(k.t.rhBeKe),
                          name: "date_of_birth",
                          onChange: tn,
                          onPopulated: ti,
                          error: F,
                          value: L,
                          ref: O,
                          autoFocus: !0,
                      }),
                  }),
              }))
            : (0, i.jsx)(c.Modal, {
                  transitionState: a,
                  onClose: Z,
                  title: k.intl.formatToPlainString(k.t.wumolR, { age: X ?? "" }),
                  subtitle: k.intl.formatToPlainString(k.t.n3QjDE, { helpURL: h.A.getArticleURL(S.MVz.AGE_GATE) }),
                  actions: [
                      { text: k.intl.string(k.t.cfYCrb), onClick: () => D(0), variant: "secondary" },
                      { text: k.intl.string(k.t["6tahin"]), onClick: te },
                  ],
              });
}
