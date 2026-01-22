n.d(t, {
    A: () => v,
}),
    n(896048),
    n(864466),
    n(443073),
    n(228524);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(555337),
    c = n(965033),
    o = n(403362),
    d = n(975571),
    u = n(928348),
    f = n(53594),
    g = n(24043),
    b = n(268749),
    m = n(86933),
    p = n(390715),
    x = n(264349),
    h = n(411335),
    j = n(652215),
    O = n(985018),
    y = n(64638);

function v(e) {
    var t, n;
    let { guildId: v, setPreventNavigation: A = () => {} } = e,
        { editingRule: E, setEditingRule: N } = (0, b.U)(),
        { guild: _, subsection: S } = (0, l.cf)([a.A], () => a.A.getProps()),
        T = null != (t = null != (n = null == _ ? void 0 : _.id) ? n : v) ? t : j.dJq,
        I = null != E,
        [C] = (0, u.qv)(T),
        { rulesByTriggerType: P } = (0, u.wP)(T),
        w = {
            [f.yT.MEMBERS]: O.intl.string(O.t.sx4E5v),
            [f.yT.CONTENT]: O.intl.string(O.t.fphZb0),
        },
        R = i.useMemo(
            () =>
                Object.values(null != P ? P : {})
                    .flat()
                    .filter(o.Vq),
            [P],
        ),
        D = {
            isInEditMode: I,
            setEditingRule: N,
        },
        G = i.useRef(D);
    i.useEffect(() => {
        G.current = D;
    }),
        i.useEffect(() => {
            let { isInEditMode: e, setEditingRule: t } = G.current;
            e && t(null);
        }, [T]);
    let L = i.useCallback(
            (e, t) => {
                if (null != e) {
                    var n, r;
                    return null !=
                        (n =
                            null ==
                            (r = R.find((t) => {
                                let { id: n } = t;
                                return n === e;
                            }))
                                ? void 0
                                : r.name)
                        ? n
                        : null;
                }
                return null != t ? f.i$[t].getDefaultRuleName() : null;
            },
            [R],
        ),
        k = i.useMemo(() => {
            var e, t;
            return L(
                null != (e = null == E ? void 0 : E.id) ? e : null,
                null != (t = null == E ? void 0 : E.triggerType) ? t : null,
            );
        }, [L, E]);
    i.useEffect(() => {
        A(I, (0, x.cT)(k));
    }, [A, I, k]);
    let M = (0, f.ws)(T);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(s.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: O.intl.string(O.t.uRelgx),
            }),
            (0, r.jsx)("div", {
                className: y.iQ,
                children: (0, r.jsxs)("div", {
                    className: y.h_,
                    children: [
                        (0, r.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: O.intl.string(O.t.EwuSCR),
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            className: y.xR,
                            children: O.intl.format(O.t["B+sgGt"], {
                                helpUrl: d.A.getArticleURL(j.MVz.GUILD_AUTOMOD_BLOCKED_MESSAGE),
                            }),
                        }),
                    ],
                }),
            }),
            C
                ? (0, r.jsx)(g.A, {})
                : Object.entries(M).map((e) => {
                      let [t, n] = e;
                      if (0 === n.length) return (0, r.jsx)(i.Fragment, {}, t);
                      let l =
                          null != w[t]
                              ? (0, r.jsx)("div", {
                                    className: y.Km,
                                    children: (0, r.jsx)(s.Text, {
                                        variant: "text-lg/normal",
                                        color: "text-strong",
                                        children: w[t],
                                    }),
                                })
                              : null;
                      return (0, r.jsxs)(
                          "div",
                          {
                              className: y.Wk,
                              children: [
                                  l,
                                  (0, r.jsx)(r.Fragment, {
                                      children: n.map((e) => {
                                          var t;
                                          return (0, r.jsx)(
                                              p.A,
                                              {
                                                  guildId: T,
                                                  triggerType: e,
                                                  rules: null != (t = P[e]) ? t : [],
                                                  initWithEdit:
                                                      S === j.nd0.AUTOMOD_MENTION_SPAM && e === h.uh.MENTION_SPAM,
                                              },
                                              e,
                                          );
                                      }),
                                  }),
                              ],
                          },
                          t,
                      );
                  }),
            null != _ &&
                (0, r.jsx)(c.t9, {
                    guild: _,
                    withDivider: !1,
                    className: y.Vf,
                }),
            (0, r.jsx)(m.A, {
                guildId: T,
                existingRules: R,
            }),
            I &&
                (0, r.jsx)("div", {
                    className: y.OL,
                }),
        ],
    });
}
