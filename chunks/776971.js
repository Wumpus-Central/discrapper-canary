n.d(e, { default: () => S });
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
    p = n(36149),
    f = n(734057),
    m = n(309010),
    h = n(287809),
    g = n(954571),
    y = n(975571),
    T = n(955437),
    G = n(612200),
    b = n(323073),
    R = n(201505),
    C = n(204925),
    N = n(652215),
    k = n(985018),
    x = n(700129);
function S(t) {
    let e,
        n,
        { transitionState: i, source: s } = t,
        S = (0, E.bG)([h.default], () => h.default.getCurrentUser()),
        w = (0, E.bG)([m.A, f.A], () => f.A.getChannel(m.A.getChannelId())),
        [I, M] = a.useState(null),
        [v, D] = a.useState(null),
        [O, U] = a.useState(!1),
        [P, V] = a.useState(0),
        L = a.useRef(null),
        $ = a.useRef(null),
        F = s === C.w_.DEEP_LINK_PROMPT,
        j = s === C.w_.FAMILY_CENTER,
        W = (0, b.a9)() && !j && !F,
        { verifyAgreementButtonText: Y, verifyGateDescription: B, verifyTitle: H } = (0, b.Gn)(s),
        z = (0, b.vL)(w),
        K = b.Bc.has(s);
    (0, p.I7)(s);
    let Z = null != I ? o()().diff(I, "years") : null;
    function q() {
        if (s === C.w_.NSFW_SERVER_INVITE_EMBED) return (0, G.IO)(s), Promise.resolve();
        let t = w?.getGuildId();
        return d.A.nsfwReturnToSafety(t), (0, G.IO)(s), Promise.resolve();
    }
    async function Q() {
        r()(null != I, "Cannot submit null birthday.");
        try {
            return D(null), U(!0), await (0, T.n7)(I, s);
        } catch (t) {
            null != t.body && null != t.body.date_of_birth
                ? (0, G.MP)(s, t.body.date_of_birth)
                : (t?.body?.username != null ? D(k.intl.string(k.t["TGg/2k"])) : D(t?.body.message), U(!1));
        }
    }
    async function X() {
        (r()(null != Z, "Cannot submit if we haven't been able to calculate age."), Z < 18) ? V(1) : await Q();
    }
    async function J(t) {
        t.preventDefault(), O || null == I || (await X());
    }
    async function tt() {
        null == (await Q()) && V(0);
    }
    a.useEffect(() => {
        S?.nsfwAllowed !== !0 || W || F || (0, G.Nk)(s);
    }),
        a.useEffect(() => {
            g.default.track(N.HAw.AGE_GATE_ACTION, { source: s, action: C.AM.AGE_GATE_OPEN });
        }, [s]);
    let te = a.useCallback(
            (t) => {
                M(t);
            },
            [M],
        ),
        tn = a.useCallback(() => {
            $.current?.focus();
        }, [$]),
        tl = a.useCallback(() => {
            A.A.showAgeVerificationGetStartedModal({ entryPoint: _.q1.NSFW_AGE_GATE });
        }, []),
        ta = { transitionState: i, onClose: q, graphic: { type: "image", src: x.A }, gradientColor: "blue" };
    return W
        ? (0, l.jsx)(c.ExpressiveModal, {
              title: H,
              subtitle: B,
              actions: [
                  { text: k.intl.string(k.t.f3Pet9), onClick: q, variant: "secondary" },
                  { text: Y ?? k.intl.string(k.t.FDSSia), onClick: tl },
              ],
              trackingProps: {
                  impression: { impressionName: u.ImpressionNames.USER_AGE_GATE_VERIFY },
                  impressionType: u.ImpressionTypes.MODAL,
              },
              ...ta,
          })
        : S?.nsfwAllowed === !1 && (z || K) && !j && !F
          ? (0, l.jsx)(c.ExpressiveModal, {
                title: k.intl.string(K ? k.t["H0SG/g"] : k.t.NEabBa),
                subtitle: k.intl.format(K ? k.t["6++3cX"] : k.t["2kHZes"], {
                    helpURL: y.A.getArticleURL(N.MVz.AGE_GATE),
                }),
                actions: [{ text: k.intl.string(k.t["/g10LC"]), onClick: q, variant: "secondary" }],
                trackingProps: {
                    impression: { impressionName: u.ImpressionNames.USER_AGE_GATE_VERIFY },
                    impressionType: u.ImpressionTypes.MODAL,
                },
                ...ta,
            })
          : 0 === P
            ? ((e = (() => {
                  switch (s) {
                      case C.w_.NSFW_SERVER:
                      case C.w_.NSFW_SERVER_INVITE:
                      case C.w_.NSFW_SERVER_INVITE_EMBED:
                          return k.intl.string(k.t.vAymlG);
                      case C.w_.FAMILY_CENTER:
                          return k.intl.string(k.t.M7mt7m);
                      default:
                          return k.intl.string(k.t.F8otRo);
                  }
              })()),
              (n = (() => {
                  switch (s) {
                      case C.w_.FAMILY_CENTER:
                          return k.intl.string(k.t.mhUrKS);
                      case C.w_.DEEP_LINK_PROMPT:
                          return k.intl.format(k.t.iyhg2s, { helpURL: y.A.getArticleURL(N.MVz.AGE_GATE) });
                      default:
                          return k.intl.format(k.t.n3QjDE, { helpURL: y.A.getArticleURL(N.MVz.AGE_GATE) });
                  }
              })()),
              (0, l.jsx)("form", {
                  onSubmit: J,
                  children: (0, l.jsx)(c.Modal, {
                      title: e,
                      subtitle: n,
                      actions: [
                          { text: k.intl.string(k.t["1MrpWO"]), onClick: q, variant: "secondary" },
                          { text: k.intl.string(k.t.uBFuok), onClick: X, loading: O, disabled: null == I },
                      ],
                      ...ta,
                      children: (0, l.jsx)(R.A, {
                          label: k.intl.string(k.t.rhBeKe),
                          name: "date_of_birth",
                          onChange: te,
                          onPopulated: tn,
                          error: v,
                          value: I,
                          ref: L,
                          autoFocus: !0,
                      }),
                  }),
              }))
            : (0, l.jsx)(c.Modal, {
                  transitionState: i,
                  onClose: q,
                  title: k.intl.formatToPlainString(k.t.wumolR, { age: Z ?? "" }),
                  subtitle: k.intl.formatToPlainString(k.t.n3QjDE, { helpURL: y.A.getArticleURL(N.MVz.AGE_GATE) }),
                  actions: [
                      { text: k.intl.string(k.t.cfYCrb), onClick: () => V(0), variant: "secondary" },
                      { text: k.intl.string(k.t["6tahin"]), onClick: tt },
                  ],
              });
}
