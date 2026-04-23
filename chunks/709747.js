n.d(t, { A: () => w });
var i = n(627968),
    r = n(64700),
    a = n(311907),
    s = n(534890),
    l = n(573613),
    o = n(47167),
    d = n(734057),
    c = n(71393),
    u = n(383501),
    h = n(994500),
    m = n(287809),
    p = n(256415),
    g = n(810412),
    f = n(1193),
    _ = n(129537),
    x = n(412477),
    A = n(651813),
    E = n(320165),
    S = n(121914),
    I = n(197043),
    v = n(919843),
    b = n(652215),
    C = n(499214),
    T = n(985018),
    j = n(881890);
function y(e) {
    let { dragStart: t, dragging: n } = e,
        [y, w] = (0, a.bG)([f.A], () => f.A.getSessionEntries()),
        N = (0, a.bG)([f.A], () => f.A.getSelectedChannelId()),
        R = (0, a.bG)([f.A], () => f.A.getVoiceChatMinimized()),
        M = (0, a.bG)([d.A], () => (null != N ? (d.A.getChannel(N) ?? null) : null), [N]);
    r.useEffect(() => {
        null == N || (null == M && (0, v.b)(N));
    }, [M, N]);
    let O = (0, a.bG)([c.A], () => (0, A.P)(M, c.A), [M]),
        k = (0, a.bG)([u.A], () => u.A.getChannelId(), []),
        D = r.useMemo(() => (null == k || 0 === w ? y : y.filter((e) => e.channelId !== k)), [y, w, k]),
        z = (0, g.Dk)(() => {
            let e = new Set();
            for (let t of (null != k && e.add(k), D)) e.add(t.channelId);
            return e;
        }, [D, k, w]),
        { shownUserIds: P, contentInventoryIds: L } = (0, a.bG)(
            [],
            () =>
                (function (e) {
                    let t = new Set(),
                        n = new Set();
                    for (let i of e) {
                        let e = d.A.getChannel(i) ?? null;
                        if (null != e) {
                            if (e.isDM()) {
                                let n = e.getRecipientId?.() ?? null;
                                null != n && t.add(n);
                                continue;
                            }
                            if (e.isMultiUserDM()) {
                                for (let n of e.recipients ?? []) t.add(n);
                                continue;
                            }
                            n.add(i);
                        }
                    }
                    return { shownUserIds: t, contentInventoryIds: n };
                })(z),
            [z],
        ),
        V = (0, g.Dk)(() => P, [P]),
        G = (0, g.Dk)(() => L, [L]);
    r.useEffect(() => {
        (0 !== V.size || 0 !== G.size) &&
            (0, g.Y)(b.uss.TEXT_CHAT_V3, {
                locked: p.default.isInstanceLocked(),
                shownUserIds: Array.from(V),
                liveUserIds: [],
                contentInventoryIds: Array.from(G),
            });
    }, [V, G]);
    let U = (0, a.bG)([m.default], () => (0, A.j)(M, m.default)),
        H = (0, a.bG)(
            [m.default, h.A],
            () => (null == M ? T.intl.string(C.default.uhJexs) : (0, o.m1)(M, m.default, h.A)),
            [M],
        ),
        F = (0, a.bG)([d.A], () => {
            if (null != k && null != d.A.getChannel(k)) return !0;
            if (0 === w) return !1;
            for (let e of y) if (null != d.A.getChannel(e.channelId)) return !0;
            return !1;
        }, [y, k, w]),
        W = null != N && !(R && N === k);
    return F
        ? (0, i.jsxs)("div", {
              className: j.kL,
              children: [
                  (0, i.jsx)("nav", {
                      className: j.pz,
                      "aria-label": T.intl.string(C.default["2yFtJ1"]),
                      onMouseDown: (e) => {
                          0 === e.button && t(_.P.MOVE, e.clientX, e.clientY);
                      },
                      children: (0, i.jsxs)(l.d_, {
                          children: [
                              null != k
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(
                                                S.g,
                                                {
                                                    channelId: k,
                                                    selectedVoiceChannelId: k,
                                                    iconVariant: S._.CHANNEL_TYPE,
                                                },
                                                `tiv-${k}`,
                                            ),
                                            D.length > 0 ? (0, i.jsx)("hr", { className: j.mF }) : null,
                                        ],
                                    })
                                  : null,
                              D.map((e) =>
                                  (0, i.jsx)(S.g, { channelId: e.channelId, selectedVoiceChannelId: k }, e.channelId),
                              ),
                          ],
                      }),
                  }),
                  W
                      ? (0, i.jsxs)("div", {
                            className: j.oM,
                            children: [
                                (0, i.jsx)(E.A, { channel: M, user: U, guild: O, title: H, dragStart: t, dragging: n }),
                                (0, i.jsx)(I.A, { selectedChannelId: N }),
                            ],
                        })
                      : null,
              ],
          })
        : (0, i.jsx)(x.g, { emptyText: T.intl.string(C.default["xpv/t5"]), icon: s.o });
}
let w = r.memo(function (e) {
    let { locked: t, dragStart: n, dragging: r } = e;
    return t ? null : (0, i.jsx)(y, { dragStart: n, dragging: r });
});
