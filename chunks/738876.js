var e = i(477900),
    r = i(582128),
    a = i(855986),
    s = i(192308),
    l = i(323073),
    u = i(861382),
    o = i(47167),
    d = i(74847),
    c = i(820828),
    p = i(352527),
    A = i(31717),
    h = i(834942),
    g = i(186111),
    f = i(576705),
    C = i(994500),
    T = i(287809),
    D = i(676279),
    b = i(188567),
    _ = i(518960),
    j = i(65593),
    m = i(698638),
    G = i(652215),
    L = i(792996);
i.d(
    n,
    {},
    {
        A: function (t) {
            let { className: n, style: i, channel: S, draftType: k } = t,
                [v, B] = r.useState(!0),
                { onShareClick: E } = (0, p.A)(S.id),
                y = (0, a.bG)([g.A], () => g.A.hasLayers()),
                F = (0, a.bG)([f.A], () => null != S && f.A.can(G.xBc.ATTACH_FILES, S), [S]),
                I = null != (0, a.bG)([u.A], () => u.A.getActiveCommand(S.id)),
                M = S.getGuildId(),
                O = k === A.C.FirstThreadMessage,
                R = (0, l.ni)(S),
                U = r.useMemo(
                    () => !y && ((S.isPrivate() && !S.isManaged()) || (null != M && !R && F && h.A.canChatInGuild(M))),
                    [F, R, S, M, y],
                );
            function x(t) {
                return k === A.C.ChannelMessage && U && !I && (0, d.t)(S.id) && (0, c.zp)() && (0, c.jB)(t);
            }
            let Y = O
                ? G.kvI.GUILD_THREADS_ONLY.has(S.type)
                    ? L.intl.string(L.t.RBBLhL)
                    : L.intl.string(L.t.gUx4eu)
                : v || (0, D.nr)()
                  ? L.intl.format(L.t.dYP2Fc, { destination: (0, o.m1)(S, T.default, C.A, !0) })
                  : L.intl.string(L.t.h76ulG);
            return I || !U
                ? null
                : (0, e.jsx)(j.A, {
                      className: n,
                      style: i,
                      title: Y,
                      description: O || (0, D.nr)() ? L.intl.string(L.t.lpgkzq) : L.intl.string(L.t.usQh4J),
                      icons: m.ir,
                      onDrop: function (t) {
                          if (I) return !1;
                          U &&
                              null != S &&
                              ((0, _.R)(t, S, k, { requireConfirm: !!(0, D.nr)() || v, origin: "drag_drop" }),
                              b._.dispatchToLastSubscribed(G.jej.TEXTAREA_FOCUS));
                      },
                      isDataDrag: c.jB,
                      canDropData: x,
                      onDropData: function (t) {
                          if (!x(t)) return;
                          let n = (0, c.bd)(t);
                          null != n &&
                              ((0, c.YG)(!0),
                              E({
                                  clips: [n],
                                  keepModalsOpen: !0,
                                  onShareComplete: () => {
                                      (0, s.ue)() || b._.dispatchToLastSubscribed(G.jej.TEXTAREA_FOCUS);
                                  },
                              }));
                      },
                      onDragClear: function () {
                          B(!0);
                      },
                      onDragOver: function (t) {
                          return (
                              !I &&
                              (null != t.dataTransfer && (0, c.jB)(t.dataTransfer)
                                  ? void B(!0)
                                  : void (!O && t.shiftKey === v && B(!t.shiftKey)))
                          );
                      },
                  });
        },
    },
);
