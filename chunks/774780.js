"use strict";
n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(555337),
    o = n(965033),
    d = n(403362),
    c = n(975571),
    u = n(928348),
    m = n(53594),
    g = n(24043),
    x = n(268749),
    h = n(86933),
    _ = n(390715),
    p = n(264349),
    A = n(411335),
    f = n(652215),
    j = n(985018),
    N = n(130408);
function E(e) {
    let { guildId: t, setPreventNavigation: n = () => {} } = e,
        { editingRule: E, setEditingRule: b } = (0, x.U)(),
        { guild: T, subsection: C } = (0, l.cf)([a.A], () => a.A.getProps()),
        I = T?.id ?? t ?? f.dJq,
        v = null != E,
        [S] = (0, u.qv)(I),
        { rulesByTriggerType: y } = (0, u.wP)(I),
        R = { [m.yT.MEMBERS]: j.intl.string(j.t.sx4E5v), [m.yT.CONTENT]: j.intl.string(j.t.fphZb0) },
        O = s.useMemo(
            () =>
                Object.values(y ?? {})
                    .flat()
                    .filter(d.Vq),
            [y],
        ),
        G = { isInEditMode: v, setEditingRule: b },
        L = s.useRef(G);
    s.useEffect(() => {
        L.current = G;
    }),
        s.useEffect(() => {
            let { isInEditMode: e, setEditingRule: t } = L.current;
            e && t(null);
        }, [I]);
    let D = s.useCallback(
            (e, t) =>
                null != e
                    ? (O.find((t) => {
                          let { id: n } = t;
                          return n === e;
                      })?.name ?? null)
                    : null != t
                      ? m.i$[t].getDefaultRuleName()
                      : null,
            [O],
        ),
        M = s.useMemo(() => D(E?.id ?? null, E?.triggerType ?? null), [D, E]);
    s.useEffect(() => {
        n(v, (0, p.cT)(M));
    }, [n, v, M]);
    let k = (0, m.ws)(I);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(r.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: j.intl.string(j.t.uRelgx),
            }),
            (0, i.jsx)("div", {
                className: N.iQ,
                children: (0, i.jsxs)("div", {
                    className: N.h_,
                    children: [
                        (0, i.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: j.intl.string(j.t.EwuSCR),
                        }),
                        (0, i.jsx)(r.Text, {
                            variant: "text-sm/medium",
                            className: N.xR,
                            children: j.intl.format(j.t["B+sgGt"], {
                                helpUrl: c.A.getArticleURL(f.MVz.GUILD_AUTOMOD_BLOCKED_MESSAGE),
                            }),
                        }),
                    ],
                }),
            }),
            S
                ? (0, i.jsx)(g.A, {})
                : Object.entries(k).map((e) => {
                      let [t, n] = e;
                      if (0 === n.length) return (0, i.jsx)(s.Fragment, {}, t);
                      let l =
                          null != R[t]
                              ? (0, i.jsx)("div", {
                                    className: N.Km,
                                    children: (0, i.jsx)(r.Text, {
                                        variant: "text-lg/normal",
                                        color: "text-strong",
                                        children: R[t],
                                    }),
                                })
                              : null;
                      return (0, i.jsxs)(
                          "div",
                          {
                              className: N.Wk,
                              children: [
                                  l,
                                  (0, i.jsx)(i.Fragment, {
                                      children: n.map((e) =>
                                          (0, i.jsx)(
                                              _.A,
                                              {
                                                  guildId: I,
                                                  triggerType: e,
                                                  rules: y[e] ?? [],
                                                  initWithEdit:
                                                      C === f.nd0.AUTOMOD_MENTION_SPAM && e === A.uh.MENTION_SPAM,
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
            null != T && (0, i.jsx)(o.t9, { guild: T, withDivider: !1, className: N.Vf }),
            (0, i.jsx)(h.A, { guildId: I, existingRules: O }),
            v && (0, i.jsx)("div", { className: N.OL }),
        ],
    });
}
