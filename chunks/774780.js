n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(834730),
    a = n(534514),
    o = n(555337),
    d = n(965033),
    c = n(403362),
    u = n(975571),
    m = n(928348),
    g = n(53594),
    h = n(24043),
    x = n(268749),
    _ = n(86933),
    p = n(390715),
    A = n(264349),
    E = n(411335),
    f = n(652215),
    j = n(985018),
    N = n(637059);
function I(e) {
    let { guildId: t, setPreventNavigation: n = () => {} } = e,
        { editingRule: I, setEditingRule: C } = (0, x.U)(),
        { guild: b, subsection: v } = (0, s.cf)([o.A], () => o.A.getProps()),
        S = b?.id ?? t ?? f.dJq,
        T = null != I,
        [y] = (0, m.qv)(S),
        { rulesByTriggerType: R } = (0, m.wP)(S),
        L = { [g.yT.MEMBERS]: j.intl.string(j.t.sx4E5v), [g.yT.CONTENT]: j.intl.string(j.t.fphZb0) },
        D = l.useMemo(
            () =>
                Object.values(R ?? {})
                    .flat()
                    .filter(c.Vq),
            [R],
        ),
        O = { isInEditMode: T, setEditingRule: C },
        G = l.useRef(O);
    l.useEffect(() => {
        G.current = O;
    }),
        l.useEffect(() => {
            let { isInEditMode: e, setEditingRule: t } = G.current;
            e && t(null);
        }, [S]);
    let M = l.useCallback(
            (e, t) =>
                null != e
                    ? (D.find((t) => {
                          let { id: n } = t;
                          return n === e;
                      })?.name ?? null)
                    : null != t
                      ? g.i$[t].getDefaultRuleName()
                      : null,
            [D],
        ),
        k = l.useMemo(() => M(I?.id ?? null, I?.triggerType ?? null), [M, I]);
    l.useEffect(() => {
        n(T, (0, A.cT)(k));
    }, [n, T, k]);
    let U = (0, g.ws)(S);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(a.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: j.intl.string(j.t.uRelgx),
            }),
            (0, i.jsx)("div", {
                className: N.iQ,
                children: (0, i.jsxs)("div", {
                    className: N.h_,
                    children: [
                        (0, i.jsx)(r.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: j.intl.string(j.t.EwuSCR),
                        }),
                        (0, i.jsx)(r.E, {
                            variant: "text-sm/medium",
                            className: N.xR,
                            children: j.intl.format(j.t["B+sgGt"], {
                                helpUrl: u.A.getArticleURL(f.MVz.GUILD_AUTOMOD_BLOCKED_MESSAGE),
                            }),
                        }),
                    ],
                }),
            }),
            y
                ? (0, i.jsx)(h.A, {})
                : Object.entries(U).map((e) => {
                      let [t, n] = e;
                      if (0 === n.length) return (0, i.jsx)(l.Fragment, {}, t);
                      let s =
                          null != L[t]
                              ? (0, i.jsx)("div", {
                                    className: N.Km,
                                    children: (0, i.jsx)(r.E, {
                                        variant: "text-lg/normal",
                                        color: "text-strong",
                                        children: L[t],
                                    }),
                                })
                              : null;
                      return (0, i.jsxs)(
                          "div",
                          {
                              className: N.Wk,
                              children: [
                                  s,
                                  (0, i.jsx)(i.Fragment, {
                                      children: n.map((e) =>
                                          (0, i.jsx)(
                                              p.A,
                                              {
                                                  guildId: S,
                                                  triggerType: e,
                                                  rules: R[e] ?? [],
                                                  initWithEdit:
                                                      v === f.nd0.AUTOMOD_MENTION_SPAM && e === E.uh.MENTION_SPAM,
                                              },
                                              e,
                                          ),
                                      ),
                                  }),
                              ],
                          },
                          t,
                      );
                  }),
            null != b && (0, i.jsx)(d.t9, { guild: b, withDivider: !1, className: N.Vf }),
            (0, i.jsx)(_.A, { guildId: S, existingRules: D }),
            T && (0, i.jsx)("div", { className: N.OL }),
        ],
    });
}
