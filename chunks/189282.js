e.r(n);
var l = e(477900),
    a = e(582128),
    i = e(284009),
    r = e.n(i),
    u = e(536637),
    s = e.n(u),
    o = e(189213),
    c = e(129230),
    _ = e(975571),
    E = e(955437),
    f = e(612200),
    d = e(201505),
    g = e(262942),
    A = e(204925),
    b = e(652215),
    h = e(792996),
    R = e(700129);
e.d(
    n,
    {},
    {
        default: function (t) {
            let n,
                e,
                { transitionState: i, source: u } = t,
                [m, C] = a.useState(null),
                [w, y] = a.useState(null),
                [p, S] = a.useState(!1),
                [k, T] = a.useState(0),
                G = a.useRef(null),
                M = a.useRef(null),
                N = null != m ? s()().diff(m, "years") : null;
            function L() {
                return ((0, g.A)(u), Promise.resolve());
            }
            async function P() {
                r()(null != m, "Cannot submit null birthday.");
                try {
                    return (y(null), S(!0), await (0, E.n7)(m, u), (0, f.Nk)(u), !0);
                } catch (t) {
                    return (
                        null != t.body && null != t.body.date_of_birth
                            ? (0, f.MP)(u, t.body.date_of_birth)
                            : (t?.body?.username != null ? y(h.intl.string(h.t["TGg/2k"])) : y(t?.body.message), S(!1)),
                        !1
                    );
                }
            }
            async function v() {
                (r()(null != N, "Cannot submit if we haven't been able to calculate age."), N < 18) ? T(1) : await P();
            }
            a.useEffect(() => {
                c.default.track(b.HAw.AGE_GATE_ACTION, { source: u, action: A.AM.AGE_GATE_OPEN });
            }, [u]);
            let x = a.useCallback(
                    (t) => {
                        C(t);
                    },
                    [C],
                ),
                F = a.useCallback(() => {
                    M.current?.focus();
                }, [M]),
                I = { transitionState: i, onClose: L, graphic: { type: "image", src: R.A }, gradientColor: "blue" };
            return 0 === k
                ? ((n = (() => {
                      switch (u) {
                          case A.w_.NSFW_SERVER:
                          case A.w_.NSFW_SERVER_INVITE:
                          case A.w_.NSFW_SERVER_INVITE_EMBED:
                              return h.intl.string(h.t.vAymlG);
                          case A.w_.FAMILY_CENTER:
                              return h.intl.string(h.t.M7mt7m);
                          default:
                              return h.intl.string(h.t.F8otRo);
                      }
                  })()),
                  (e = (() => {
                      switch (u) {
                          case A.w_.FAMILY_CENTER:
                              return h.intl.string(h.t.mhUrKS);
                          case A.w_.DEEP_LINK_PROMPT:
                              return h.intl.format(h.t.iyhg2s, { helpURL: _.A.getArticleURL(b.MVz.AGE_GATE) });
                          default:
                              return h.intl.format(h.t.n3QjDE, { helpURL: _.A.getArticleURL(b.MVz.AGE_GATE) });
                      }
                  })()),
                  (0, l.jsx)("form", {
                      onSubmit: async function (t) {
                          (t.preventDefault(), p || null == m || (await v()));
                      },
                      children: (0, l.jsx)(o.a, {
                          title: n,
                          subtitle: e,
                          actions: [
                              { text: h.intl.string(h.t["1MrpWO"]), onClick: L, variant: "secondary" },
                              { text: h.intl.string(h.t.uBFuok), onClick: v, loading: p, disabled: null == m },
                          ],
                          ...I,
                          children: (0, l.jsx)(d.A, {
                              label: h.intl.string(h.t.rhBeKe),
                              name: "date_of_birth",
                              onChange: x,
                              onPopulated: F,
                              error: w,
                              value: m,
                              ref: G,
                              autoFocus: !0,
                          }),
                      }),
                  }))
                : (0, l.jsx)(o.a, {
                      transitionState: i,
                      onClose: L,
                      title: h.intl.formatToPlainString(h.t.wumolR, { age: N ?? "" }),
                      subtitle: h.intl.formatToPlainString(h.t.n3QjDE, { helpURL: _.A.getArticleURL(b.MVz.AGE_GATE) }),
                      actions: [
                          { text: h.intl.string(h.t.cfYCrb), onClick: () => T(0), variant: "secondary" },
                          {
                              text: h.intl.string(h.t["6tahin"]),
                              onClick: async function () {
                                  (await P()) || T(0);
                              },
                          },
                      ],
                  });
        },
    },
);
