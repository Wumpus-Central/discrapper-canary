n.d(e, { default: () => x });
var l = n(627968),
    a = n(64700),
    i = n(284009),
    r = n.n(i),
    s = n(989349),
    o = n.n(s),
    u = n(110259),
    c = n(158954),
    E = n(311907),
    d = n(686956),
    A = n(935649),
    _ = n(847599),
    p = n(734057),
    f = n(309010),
    m = n(287809),
    h = n(954571),
    g = n(975571),
    y = n(955437),
    T = n(612200),
    G = n(323073),
    b = n(201505),
    R = n(204925),
    C = n(652215),
    N = n(985018),
    k = n(700129);
function x(t) {
    let e,
        n,
        { transitionState: i, source: s } = t,
        x = (0, E.bG)([m.default], () => m.default.getCurrentUser()),
        S = (0, E.bG)([f.A, p.A], () => p.A.getChannel(f.A.getChannelId())),
        [w, M] = a.useState(null),
        [I, v] = a.useState(null),
        [D, O] = a.useState(!1),
        [U, V] = a.useState(0),
        $ = a.useRef(null),
        L = a.useRef(null),
        j = s === R.w_.FAMILY_CENTER,
        F = (0, G.a9)() && !j,
        { verifyAgreementButtonText: P, verifyGateDescription: W, verifyTitle: Y } = (0, G.Gn)(s),
        B = (0, G.vL)(S),
        H = G.Bc.has(s),
        z = null != w ? o()().diff(w, "years") : null;
    function K() {
        if (s === R.w_.NSFW_SERVER_INVITE_EMBED) return (0, T.IO)(s), Promise.resolve();
        let t = S?.getGuildId();
        return d.A.nsfwReturnToSafety(t), (0, T.IO)(s), Promise.resolve();
    }
    async function Z() {
        r()(null != w, "Cannot submit null birthday.");
        try {
            return v(null), O(!0), await (0, y.n7)(w, s);
        } catch (t) {
            null != t.body && null != t.body.date_of_birth
                ? (0, T.MP)(s, t.body.date_of_birth)
                : (t?.body?.username != null ? v(N.intl.string(N.t["TGg/2k"])) : v(t?.body.message), O(!1));
        }
    }
    async function q() {
        (r()(null != z, "Cannot submit if we haven't been able to calculate age."), z < 18) ? V(1) : await Z();
    }
    async function Q(t) {
        t.preventDefault(), D || null == w || (await q());
    }
    async function X() {
        null == (await Z()) && V(0);
    }
    a.useEffect(() => {
        x?.nsfwAllowed !== !0 || F || (0, T.Nk)(s);
    }),
        a.useEffect(() => {
            h.default.track(C.HAw.AGE_GATE_ACTION, { source: s, action: R.AM.AGE_GATE_OPEN });
        }, [s]);
    let J = a.useCallback(
            (t) => {
                M(t);
            },
            [M],
        ),
        tt = a.useCallback(() => {
            L.current?.focus();
        }, [L]),
        te = a.useCallback(() => {
            A.A.showAgeVerificationGetStartedModal({ entryPoint: _.q1.NSFW_AGE_GATE });
        }, []),
        tn = { transitionState: i, onClose: K, graphic: { type: "image", src: k.A }, gradientColor: "blue" };
    return F
        ? (0, l.jsx)(c.ExpressiveModal, {
              title: Y,
              subtitle: W,
              actions: [
                  { text: N.intl.string(N.t.f3Pet9), onClick: K, variant: "secondary" },
                  { text: P ?? N.intl.string(N.t["5B+npG"]), onClick: te },
              ],
              trackingProps: {
                  impression: { impressionName: u.ImpressionNames.USER_AGE_GATE_VERIFY },
                  impressionType: u.ImpressionTypes.MODAL,
              },
              ...tn,
          })
        : x?.nsfwAllowed === !1 && (B || H) && !j
          ? (0, l.jsx)(c.ExpressiveModal, {
                title: N.intl.string(H ? N.t["H0SG/g"] : N.t.NEabBa),
                subtitle: N.intl.format(H ? N.t["6++3cX"] : N.t["2kHZes"], {
                    helpURL: g.A.getArticleURL(C.MVz.AGE_GATE),
                }),
                actions: [{ text: N.intl.string(N.t["/g10LC"]), onClick: K, variant: "secondary" }],
                trackingProps: {
                    impression: { impressionName: u.ImpressionNames.USER_AGE_GATE_VERIFY },
                    impressionType: u.ImpressionTypes.MODAL,
                },
                ...tn,
            })
          : 0 === U
            ? ((e = (() => {
                  switch (s) {
                      case R.w_.NSFW_SERVER:
                      case R.w_.NSFW_SERVER_INVITE:
                      case R.w_.NSFW_SERVER_INVITE_EMBED:
                          return N.intl.string(N.t.vAymlG);
                      case R.w_.FAMILY_CENTER:
                          return N.intl.string(N.t.M7mt7m);
                      default:
                          return N.intl.string(N.t.F8otRo);
                  }
              })()),
              (n = (() => {
                  switch (s) {
                      case R.w_.FAMILY_CENTER:
                          return N.intl.string(N.t.mhUrKS);
                      case R.w_.DEEP_LINK_PROMPT:
                          return N.intl.format(N.t.iyhg2s, { helpURL: g.A.getArticleURL(C.MVz.AGE_GATE) });
                      default:
                          return N.intl.format(N.t.n3QjDE, { helpURL: g.A.getArticleURL(C.MVz.AGE_GATE) });
                  }
              })()),
              (0, l.jsx)("form", {
                  onSubmit: Q,
                  children: (0, l.jsx)(c.Modal, {
                      title: e,
                      subtitle: n,
                      actions: [
                          { text: N.intl.string(N.t["1MrpWO"]), onClick: K, variant: "secondary" },
                          { text: N.intl.string(N.t.uBFuok), onClick: q, loading: D, disabled: null == w },
                      ],
                      ...tn,
                      children: (0, l.jsx)(b.A, {
                          label: N.intl.string(N.t.rhBeKe),
                          name: "date_of_birth",
                          onChange: J,
                          onPopulated: tt,
                          error: I,
                          value: w,
                          ref: $,
                          autoFocus: !0,
                      }),
                  }),
              }))
            : (0, l.jsx)(c.Modal, {
                  transitionState: i,
                  onClose: K,
                  title: N.intl.formatToPlainString(N.t.wumolR, { age: z ?? "" }),
                  subtitle: N.intl.formatToPlainString(N.t.n3QjDE, { helpURL: g.A.getArticleURL(C.MVz.AGE_GATE) }),
                  actions: [
                      { text: N.intl.string(N.t.cfYCrb), onClick: () => V(0), variant: "secondary" },
                      { text: N.intl.string(N.t["6tahin"]), onClick: X },
                  ],
              });
}
