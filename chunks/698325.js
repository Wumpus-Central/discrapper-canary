i.d(t, { default: () => S }), i(321073);
var n = i(627968),
    l = i(64700),
    a = i(136722),
    s = i(189213),
    r = i(17928),
    d = i(289873),
    o = i(783878),
    c = i(243721),
    u = i(834730),
    h = i(702805),
    p = i(155718),
    m = i(495273),
    x = i(260509),
    g = i(317525),
    y = i(488926),
    f = i(387255),
    k = i(375708),
    w = i(905060);
function C(e) {
    return (t) => null != t && !(0, m.N8)(e, t);
}
function v(e) {
    let { rolesRow: t } = e;
    return (0, n.jsx)("div", { "aria-hidden": !0, className: w.Ni, style: { backgroundColor: t?.colorString } });
}
let S = function (e) {
    let t,
        i,
        { guild: S, channel: b, permission: j, onClose: N, transitionState: E, currentSelectedRoles: M = [] } = e,
        { shouldEveryonePost: R, setShouldEveryonePost: A } = (function (e, t) {
            let i = y.MJ(t, e),
                [n, a] = l.useState(i);
            return { shouldEveryonePost: n, setShouldEveryonePost: a };
        })(b, j),
        O = ((t = (0, r.bG)([g.A], () => g.A.getSortedRoles(S.id))),
        l.useMemo(() => (0, f.i)(t).filter((e) => C(S.id)(e.id)), [S, t])).map((e) => ({
            key: e.key,
            id: e.id,
            label: e.name,
            value: e.id,
            leading: (0, n.jsx)(v, { rolesRow: e }),
        })),
        [T, F] = l.useState(M.map((e) => e.id).filter(C(S.id))),
        [G, P] = l.useState(!1),
        [W, Z] = l.useState(!1),
        q = T.length > 0 || R,
        K =
            ((i = (0, r.bG)([g.A], () => g.A.getSortedRoles(S.id))),
            l.useCallback(
                (e, t) => {
                    let n = (0, f.i)(i),
                        l = new Set(t),
                        s = { ...b.permissionOverwrites },
                        r = [],
                        d = [];
                    return (
                        n.forEach((t) => {
                            let i = t.id;
                            l.has(i)
                                ? r.push({
                                      id: i,
                                      type: p.r2.ROLE,
                                      allow: a.WQ(s[i]?.allow ?? y.x3, e),
                                      deny: a.TF(s[i]?.deny ?? y.x3, e),
                                  })
                                : (0, m.N8)(S.id, i)
                                  ? r.push({
                                        id: i,
                                        type: p.r2.ROLE,
                                        allow: a.TF(s[i]?.allow ?? y.x3, e),
                                        deny: a.WQ(s[i]?.deny ?? y.x3, e),
                                    })
                                  : i in s && d.push(i);
                        }, []),
                        (0, h.lS)(b.id, r, d)
                    );
                },
                [S, i, b],
            ));
    async function L() {
        if (!q) return;
        P(!0), Z(!1);
        let e = [...T];
        if (R) {
            let t = (0, x.af)(S);
            e.push(t);
        }
        try {
            await K(j, e), N();
        } catch (e) {
            Z(!0);
        } finally {
            P(!1);
        }
    }
    return G
        ? (0, n.jsx)(d.y, {})
        : (0, n.jsxs)(s.Modal, {
              title: k.intl.string(k.t.TFGnmk),
              actions: [
                  { variant: "secondary", text: k.intl.string(k.t["ETE/oC"]), onClick: N },
                  { variant: "primary", text: k.intl.string(k.t["R3BPH+"]), onClick: L, disabled: !q },
              ],
              onClose: N,
              transitionState: E,
              children: [
                  (0, n.jsx)("div", {
                      className: w.CI,
                      children: (0, n.jsx)(o.Z, {
                          selectionMode: "multiple",
                          maxOptionsVisible: 5,
                          placeholder: k.intl.string(k.t["8kKqCW"]),
                          value: T,
                          options: O,
                          onSelectionChange: (e) => {
                              F(e);
                          },
                      }),
                  }),
                  (0, n.jsx)("div", {
                      className: w.nM,
                      children: (0, n.jsx)(c.d, {
                          label: k.intl.string(k.t["kPwwA/"]),
                          description: k.intl.format(k.t.l7Ercq, {}),
                          checked: R,
                          onChange: A,
                      }),
                  }),
                  W
                      ? (0, n.jsx)("div", {
                            className: w.nM,
                            children: (0, n.jsx)(u.E, {
                                className: w.z3,
                                variant: "text-sm/normal",
                                children: k.intl.string(k.t.mgZKZP),
                            }),
                        })
                      : null,
              ],
          });
};
