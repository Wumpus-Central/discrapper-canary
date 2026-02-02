n.d(t, {
    A: () => T,
}),
    n(896048);
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(47167),
    o = n(734057),
    u = n(71393),
    c = n(383501),
    d = n(994500),
    h = n(287809),
    p = n(256415),
    f = n(810412),
    g = n(129537),
    m = n(412477),
    y = n(187667),
    A = n(651813),
    v = n(320165),
    b = n(121914),
    E = n(197043),
    O = n(919843),
    x = n(652215),
    _ = n(895867),
    S = n(985018),
    I = n(141223);

function j(e) {
    let { dragStart: t, dragging: n } = e,
        [j, T] = (0, l.bG)([y.A], () => y.A.getSessionEntries()),
        C = (0, l.bG)([y.A], () => y.A.getSelectedChannelId()),
        N = (0, l.bG)([y.A], () => y.A.getVoiceChatMinimized()),
        w = (0, l.bG)([o.A], () => {
            var e;
            return null != C && null != (e = o.A.getChannel(C)) ? e : null;
        }, [C]);
    r.useEffect(() => {
        null == C || (null == w && (0, O.b)(C));
    }, [w, C]);
    let P = (0, l.bG)([u.A], () => (0, A.P)(w, u.A), [w]),
        D = (0, l.bG)([c.A], () => c.A.getChannelId(), []),
        R = r.useMemo(() => (null == D || 0 === T ? j : j.filter((e) => e.channelId !== D)), [j, T, D]),
        k = (0, f.Dk)(() => {
            let e = new Set();
            for (let t of (null != D && e.add(D), R)) e.add(t.channelId);
            return e;
        }, [R, D, T]),
        { shownUserIds: M, contentInventoryIds: L } = (0, l.bG)(
            [],
            () =>
                (function (e) {
                    let t = new Set(),
                        n = new Set();
                    for (let s of e) {
                        var i, r, l, a;
                        let e = null != (i = o.A.getChannel(s)) ? i : null;
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
                            n.add(s);
                        }
                    }
                    return {
                        shownUserIds: t,
                        contentInventoryIds: n,
                    };
                })(k),
            [k],
        ),
        U = (0, f.Dk)(() => M, [M]),
        G = (0, f.Dk)(() => L, [L]);
    r.useEffect(() => {
        (0 !== U.size || 0 !== G.size) &&
            (0, f.Y)(x.uss.TEXT_CHAT_V3, {
                locked: p.default.isInstanceLocked(),
                shownUserIds: Array.from(U),
                liveUserIds: [],
                contentInventoryIds: Array.from(G),
            });
    }, [U, G]);
    let V = (0, l.bG)([h.default], () => (0, A.j)(w, h.default)),
        z = (0, l.bG)(
            [h.default, d.A],
            () => (null == w ? S.intl.string(_.default.uhJexs) : (0, s.m1)(w, h.default, d.A)),
            [w],
        );
    if (
        !(0, l.bG)([o.A], () => {
            if (0 === T) return !1;
            if (null != D && null != o.A.getChannel(D)) return !0;
            for (let e of j) if (null != o.A.getChannel(e.channelId)) return !0;
            return !1;
        }, [j, D, T])
    )
        return (0, i.jsx)(m.g, {
            emptyText: S.intl.string(_.default["xpv/t5"]),
            icon: a.oyn,
        });
    let F = null != C && !(N && C === D);
    return (0, i.jsxs)("div", {
        className: I.kL,
        children: [
            (0, i.jsx)("nav", {
                className: I.pz,
                "aria-label": S.intl.string(_.default["2yFtJ1"]),
                onMouseDown: (e) => {
                    0 === e.button && t(g.P.MOVE, e.clientX, e.clientY);
                },
                children: (0, i.jsxs)(a.d_W, {
                    children: [
                        null != D
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(
                                          b.g,
                                          {
                                              channelId: D,
                                              selectedVoiceChannelId: D,
                                              iconVariant: b._.CHANNEL_TYPE,
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
                                b.g,
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
            F
                ? (0, i.jsxs)("div", {
                      className: I.oM,
                      children: [
                          (0, i.jsx)(v.A, {
                              channel: w,
                              user: V,
                              guild: P,
                              title: z,
                              dragStart: t,
                              dragging: n,
                          }),
                          (0, i.jsx)(E.A, {
                              selectedChannelId: C,
                          }),
                      ],
                  })
                : null,
        ],
    });
}
let T = r.memo(function (e) {
    let { locked: t, dragStart: n, dragging: r } = e;
    return t
        ? null
        : (0, i.jsx)(j, {
              dragStart: n,
              dragging: r,
          });
});
