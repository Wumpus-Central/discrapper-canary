(n.r(e), n.d(e, { default: () => I }));
var l = n(477900),
    i = n(582128),
    a = n(284009),
    r = n.n(a),
    s = n(536637),
    u = n.n(s),
    o = n(17928),
    c = n(189213),
    E = n(66834),
    _ = n(780964),
    f = n(843010),
    A = n(766075),
    d = n(734057),
    g = n(309010),
    h = n(174459),
    b = n(975571),
    C = n(955437),
    R = n(612200),
    m = n(201505),
    w = n(204925),
    y = n(652215),
    T = n(105292),
    S = n(700129);
function I(t) {
    let e,
        n,
        { transitionState: a, source: s } = t,
        I = (0, o.bG)([g.Ay, d.A], () => d.A.getChannel(g.Ay.getChannelId())),
        [p, N] = i.useState(null),
        [G, k] = i.useState(null),
        [M, F] = i.useState(!1),
        [L, P] = i.useState(0),
        v = i.useRef(null),
        V = i.useRef(null),
        O = null != p ? u()().diff(p, "years") : null;
    function U() {
        if (s === w.w_.NSFW_SERVER_INVITE_EMBED) return ((0, R.IO)(s), Promise.resolve());
        if (s === w.w_.FAMILY_CENTER)
            return (
                (0, R.IO)(s),
                (0, f.f)() && (0, A.openUserSettings)(_.X.ACCOUNT_FAMILY_CENTER_CATEGORY),
                Promise.resolve()
            );
        let t = I?.getGuildId();
        return (E.A.nsfwReturnToSafety(t), (0, R.IO)(s), Promise.resolve());
    }
    async function x() {
        r()(null != p, "Cannot submit null birthday.");
        try {
            return (k(null), F(!0), await (0, C.n7)(p, s), (0, R.Nk)(s), !0);
        } catch (t) {
            return (
                null != t.body && null != t.body.date_of_birth
                    ? (0, R.MP)(s, t.body.date_of_birth)
                    : (t?.body?.username != null ? k(T.intl.string(T.t["TGg/2k"])) : k(t?.body.message), F(!1)),
                !1
            );
        }
    }
    async function j() {
        (r()(null != O, "Cannot submit if we haven't been able to calculate age."), O < 18) ? P(1) : await x();
    }
    async function D(t) {
        (t.preventDefault(), M || null == p || (await j()));
    }
    async function Y() {
        (await x()) || P(0);
    }
    i.useEffect(() => {
        h.default.track(y.HAw.AGE_GATE_ACTION, { source: s, action: w.AM.AGE_GATE_OPEN });
    }, [s]);
    let W = i.useCallback(
            (t) => {
                N(t);
            },
            [N],
        ),
        B = i.useCallback(() => {
            V.current?.focus();
        }, [V]),
        z = { transitionState: a, onClose: U, graphic: { type: "image", src: S.A }, gradientColor: "blue" };
    return 0 === L
        ? ((e = (() => {
              switch (s) {
                  case w.w_.NSFW_SERVER:
                  case w.w_.NSFW_SERVER_INVITE:
                  case w.w_.NSFW_SERVER_INVITE_EMBED:
                      return T.intl.string(T.t.vAymlG);
                  case w.w_.FAMILY_CENTER:
                      return T.intl.string(T.t.M7mt7m);
                  default:
                      return T.intl.string(T.t.F8otRo);
              }
          })()),
          (n = (() => {
              switch (s) {
                  case w.w_.FAMILY_CENTER:
                      return T.intl.string(T.t.mhUrKS);
                  case w.w_.DEEP_LINK_PROMPT:
                      return T.intl.format(T.t.iyhg2s, { helpURL: b.A.getArticleURL(y.MVz.AGE_GATE) });
                  default:
                      return T.intl.format(T.t.n3QjDE, { helpURL: b.A.getArticleURL(y.MVz.AGE_GATE) });
              }
          })()),
          (0, l.jsx)("form", {
              onSubmit: D,
              children: (0, l.jsx)(c.a, {
                  title: e,
                  subtitle: n,
                  actions: [
                      { text: T.intl.string(T.t["1MrpWO"]), onClick: U, variant: "secondary" },
                      { text: T.intl.string(T.t.uBFuok), onClick: j, loading: M, disabled: null == p },
                  ],
                  ...z,
                  children: (0, l.jsx)(m.A, {
                      label: T.intl.string(T.t.rhBeKe),
                      name: "date_of_birth",
                      onChange: W,
                      onPopulated: B,
                      error: G,
                      value: p,
                      ref: v,
                      autoFocus: !0,
                  }),
              }),
          }))
        : (0, l.jsx)(c.a, {
              transitionState: a,
              onClose: U,
              title: T.intl.formatToPlainString(T.t.wumolR, { age: O ?? "" }),
              subtitle: T.intl.formatToPlainString(T.t.n3QjDE, { helpURL: b.A.getArticleURL(y.MVz.AGE_GATE) }),
              actions: [
                  { text: T.intl.string(T.t.cfYCrb), onClick: () => P(0), variant: "secondary" },
                  { text: T.intl.string(T.t["6tahin"]), onClick: Y },
              ],
          });
}
