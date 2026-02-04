n.d(t, {
    A: () => C,
}),
    n(896048);
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(397927),
    o = n(47167),
    s = n(734057),
    u = n(71393),
    c = n(383501),
    d = n(994500),
    h = n(287809),
    p = n(256415),
    f = n(810412),
    g = n(129537),
    m = n(412477),
    A = n(187667),
    y = n(651813),
    O = n(320165),
    v = n(121914),
    b = n(197043),
    E = n(919843),
    _ = n(652215),
    S = n(895867),
    x = n(985018),
    I = n(141223);

function j(e) {
    let { dragStart: t, dragging: n } = e,
        [j, C] = (0, l.bG)([A.A], () => A.A.getSessionEntries()),
        T = (0, l.bG)([A.A], () => A.A.getSelectedChannelId()),
        w = (0, l.bG)([A.A], () => A.A.getVoiceChatMinimized()),
        N = (0, l.bG)([s.A], () => {
            var e;
            return null != T && null != (e = s.A.getChannel(T)) ? e : null;
        }, [T]);
    r.useEffect(() => {
        null == T || (null == N && (0, E.b)(T));
    }, [N, T]);
    let P = (0, l.bG)([u.A], () => (0, y.P)(N, u.A), [N]),
        D = (0, l.bG)([c.A], () => c.A.getChannelId(), []),
        R = r.useMemo(() => (null == D || 0 === C ? j : j.filter((e) => e.channelId !== D)), [j, C, D]),
        L = (0, f.Dk)(() => {
            let e = new Set();
            for (let t of (null != D && e.add(D), R)) e.add(t.channelId);
            return e;
        }, [R, D, C]),
        { shownUserIds: k, contentInventoryIds: M } = (0, l.bG)(
            [],
            () =>
                (function (e) {
                    let t = new Set(),
                        n = new Set();
                    for (let o of e) {
                        var i, r, l, a;
                        let e = null != (i = s.A.getChannel(o)) ? i : null;
                        if (null != e) {
                            if (e.isDM()) {
                                let n = null != (r = null == (l = e.getRecipientId) ? void 0 : l.call(e)) ? r : null;
                                null != n && t.add(n);
                                continue;
                            }
                            if (e.isMultiUserDM()) {
                                for (let n of null != (a = e.recipients) ? a : []) t.add(n);
                                continue;
                            }
                            n.add(o);
                        }
                    }
                    return {
                        shownUserIds: t,
                        contentInventoryIds: n,
                    };
                })(L),
            [L],
        ),
        z = (0, f.Dk)(() => k, [k]),
        V = (0, f.Dk)(() => M, [M]);
    r.useEffect(() => {
        (0 !== z.size || 0 !== V.size) &&
            (0, f.Y)(_.uss.TEXT_CHAT_V3, {
                locked: p.default.isInstanceLocked(),
                shownUserIds: Array.from(z),
                liveUserIds: [],
                contentInventoryIds: Array.from(V),
            });
    }, [z, V]);
    let U = (0, l.bG)([h.default], () => (0, y.j)(N, h.default)),
        G = (0, l.bG)(
            [h.default, d.A],
            () => (null == N ? x.intl.string(S.default.uhJexs) : (0, o.m1)(N, h.default, d.A)),
            [N],
        ),
        H = (0, l.bG)([s.A], () => {
            if (null != D && null != s.A.getChannel(D)) return !0;
            if (0 === C) return !1;
            for (let e of j) if (null != s.A.getChannel(e.channelId)) return !0;
            return !1;
        }, [j, D, C]),
        Y = null != T && !(w && T === D);
    return H
        ? (0, i.jsxs)("div", {
              className: I.kL,
              children: [
                  (0, i.jsx)("nav", {
                      className: I.pz,
                      "aria-label": x.intl.string(S.default["2yFtJ1"]),
                      onMouseDown: (e) => {
                          0 === e.button && t(g.P.MOVE, e.clientX, e.clientY);
                      },
                      children: (0, i.jsxs)(a.d_W, {
                          children: [
                              null != D
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(
                                                v.g,
                                                {
                                                    channelId: D,
                                                    selectedVoiceChannelId: D,
                                                    iconVariant: v._.CHANNEL_TYPE,
                                                },
                                                "tiv-".concat(D),
                                            ),
                                            R.length > 0
                                                ? (0, i.jsx)("hr", {
                                                      className: I.mF,
                                                  })
                                                : null,
                                        ],
                                    })
                                  : null,
                              R.map((e) =>
                                  (0, i.jsx)(
                                      v.g,
                                      {
                                          channelId: e.channelId,
                                          selectedVoiceChannelId: D,
                                      },
                                      e.channelId,
                                  ),
                              ),
                          ],
                      }),
                  }),
                  Y
                      ? (0, i.jsxs)("div", {
                            className: I.oM,
                            children: [
                                (0, i.jsx)(O.A, {
                                    channel: N,
                                    user: U,
                                    guild: P,
                                    title: G,
                                    dragStart: t,
                                    dragging: n,
                                }),
                                (0, i.jsx)(b.A, {
                                    selectedChannelId: T,
                                }),
                            ],
                        })
                      : null,
              ],
          })
        : (0, i.jsx)(m.g, {
              emptyText: x.intl.string(S.default["xpv/t5"]),
              icon: a.oyn,
          });
}
let C = r.memo(function (e) {
    let { locked: t, dragStart: n, dragging: r } = e;
    return t
        ? null
        : (0, i.jsx)(j, {
              dragStart: n,
              dragging: r,
          });
});
