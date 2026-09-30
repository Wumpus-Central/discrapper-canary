t.d(l, { A: () => M });
var i = t(477900);
t(582128);
var n = t(477782),
    a = t(17928),
    d = t(47167),
    r = t(5180),
    s = t(769765),
    u = t(71393),
    o = t(576705),
    c = t(994500),
    g = t(967198),
    b = t(543465),
    h = t(287809),
    f = t(44757),
    A = t(97587),
    m = t(838533),
    v = t(79843),
    _ = t(652215),
    p = t(375708);
let x = [];
function j(e) {
    return e.id === _._Ee ? null : e;
}
function D(e, l) {
    return (
        e.length === l.length &&
        e.every((e, t) => e.id === l[t].id && e.label === l[t].label && e.disabled === l[t].disabled)
    );
}
var I = t(466152);
function L(e, l) {
    (0, I.A)(e.guildId, e.channel, l.targetParentId, l.updates);
}
function M(e) {
    let l = (function (e) {
        let {
                isFavorites: l,
                listGuildId: t,
                categories: i,
                listChannel: n,
                isBlocked: I,
                guild: L,
            } = (function (e) {
                let l = (0, a.bG)([g.A], () => g.A.getGuildId()),
                    t = (0, r.ai)(l),
                    i = t ? l : e.getGuildId(),
                    {
                        categories: n,
                        listChannel: d,
                        isBlocked: c,
                        guild: h,
                    } = (0, a.cf)(
                        [s.A, u.A, o.A, b.Ay],
                        () => ({
                            categories: s.A.getCategories(i),
                            listChannel: (0, m.A)(i, e.id) ?? e,
                            isBlocked: null != (0, v.A)(e, i),
                            guild: u.A.getGuild(i),
                        }),
                        [i, e],
                    );
                return { isFavorites: t, listGuildId: i, categories: n, listChannel: d, isBlocked: c, guild: h };
            })(e),
            M = n.isCategory(),
            E = (0, f.cM)(n.parent_id, i),
            P = n.isCategory()
                ? i._categories.filter((e) => {
                      let { channel: l } = e;
                      return l.id !== _._Ee;
                  })
                : (0, f.dS)(n, i),
            k = P.length > 1 ? { first: P[0], last: P[P.length - 1] } : null,
            y = (0, a.bG)(
                [s.A, u.A, o.A, h.default, c.A],
                () =>
                    M
                        ? x
                        : i._categories
                              .filter((e) => {
                                  let { channel: t } = e;
                                  return l || (0, A.JL)(j(t));
                              })
                              .map((e) => {
                                  let { channel: t } = e,
                                      i = j(t);
                                  return {
                                      id: t.id,
                                      label: (0, d.m1)(t, h.default, c.A),
                                      disabled: t.id === E || !(l || (null != L && (0, A.Ay)(i, L))),
                                  };
                              }),
                [i, M, E, l, L],
                D,
            );
        if (__OVERLAY__ || (!l && n.isThread()) || null == t || I || (!y.some((e) => !e.disabled) && null == k))
            return null;
        let C = M || E === _._Ee;
        return {
            label: p.intl.string(p.t.A95Fzm),
            guildId: t,
            channel: n,
            isFavorites: l,
            destinations: y,
            placements:
                null != k
                    ? {
                          firstLabel: p.intl.string(C ? p.t.IMqgs9 : p.t.Q9TKt6),
                          lastLabel: p.intl.string(C ? p.t["8fQe3x"] : p.t["/Pkxmw"]),
                          isFirst: k.first.channel.id === n.id,
                          isLast: k.last.channel.id === n.id,
                      }
                    : null,
            getDestinationMove: function (e) {
                return { targetParentId: e === _._Ee ? null : e, updates: (0, f.vX)(n, i, e, "last") };
            },
            getPlacementMove: function (e) {
                return { targetParentId: n.parent_id ?? null, updates: (0, f.vX)(n, i, E, e) };
            },
        };
    })(e);
    if (null == l) return null;
    let t = l.destinations.find((e) => e.id === _._Ee),
        I = l.destinations.filter((e) => e.id !== _._Ee),
        M = l.destinations.some((e) => !e.disabled),
        { placements: E } = l;
    return (0, i.jsxs)(n.Dr, {
        id: "move-to",
        label: l.label,
        children: [
            (0, i.jsx)(n.rX, {
                children:
                    M && I.length > 0
                        ? (0, i.jsxs)(n.Dr, {
                              id: "move-to-category",
                              label: p.intl.string(p.t.RZY2fr),
                              children: [
                                  null != t
                                      ? (0, i.jsx)(n.rX, {
                                            children: (0, i.jsx)(n.Dr, {
                                                id: String(t.id),
                                                label: t.label,
                                                disabled: t.disabled,
                                                action: () => L(l, l.getDestinationMove(t.id)),
                                            }),
                                        })
                                      : null,
                                  (0, i.jsx)(n.rX, {
                                      children: I.map((e) =>
                                          (0, i.jsx)(
                                              n.Dr,
                                              {
                                                  id: String(e.id),
                                                  label: e.label,
                                                  disabled: e.disabled,
                                                  action: () => L(l, l.getDestinationMove(e.id)),
                                              },
                                              e.id,
                                          ),
                                      ),
                                  }),
                              ],
                          })
                        : null,
            }),
            (0, i.jsx)(n.rX, {
                children:
                    null != E
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(n.Dr, {
                                      id: "move-to-first",
                                      label: E.firstLabel,
                                      disabled: E.isFirst,
                                      action: () => L(l, l.getPlacementMove("first")),
                                  }),
                                  (0, i.jsx)(n.Dr, {
                                      id: "move-to-last",
                                      label: E.lastLabel,
                                      disabled: E.isLast,
                                      action: () => L(l, l.getPlacementMove("last")),
                                  }),
                              ],
                          })
                        : null,
            }),
        ],
    });
}
