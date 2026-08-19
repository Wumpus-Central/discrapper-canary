l.r(i), l.d(i, { default: () => R });
var n = l(477900),
    a = l(582128),
    t = l(17928),
    d = l(47167),
    r = l(726249),
    s = l(742589),
    c = l(131047),
    u = l(71393),
    o = l(683180),
    h = l(866665),
    g = l(408278),
    x = l(624479),
    p = l(594483),
    C = l(818085),
    I = l(375708);
function f(e) {
    let { project: i, guildId: l } = e,
        [t, d] = a.useState(!1),
        r = a.useCallback(async () => {
            if (!t && null != l) {
                d(!0);
                try {
                    await (0, p.A)(i, l);
                } finally {
                    d(!1);
                }
            }
        }, [t, l, i]);
    if (null == l) return null;
    let s = I.intl.string(C.default.sFFX7L);
    return (0, n.jsx)(h.m, {
        text: s,
        ariaHidden: !0,
        children: (0, n.jsx)(g.K, {
            "aria-label": s,
            icon: x.CopyIcon,
            variant: "icon-only",
            size: "sm",
            loading: t,
            onClick: r,
        }),
    });
}
var A = l(534890),
    m = l(663417),
    j = l(811893),
    y = l(70688),
    b = l(47294),
    k = l(16961),
    v = l(625180),
    N = l(91242),
    T = l(580954),
    _ = l(672929),
    O = l(228366),
    P = l(494126),
    F = l(5867);
async function E(e) {
    null == N.A.getFrame(e) ||
        ((await (0, P.refreshProxyTicket)(e)) &&
            ((0, P.promoteFrame)(e),
            (0, P.updateFramePanelMode)(e, F.Gd.ACTIVITY_POPOUT_WINDOW),
            O.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })));
}
var H = l(574172),
    V = l(869146),
    D = l(976860),
    W = l(808728),
    B = l(576705),
    L = l(652215),
    M = l(165610);
function w(e) {
    let { applicationId: i, surface: l, guildId: t, chatOpen: d, onToggleChat: r } = e,
        s = (0, _.A)(i, l),
        c = (0, k.G)(),
        u = (0, M.x1)(s) && s.data.proxyTicketRefreshing,
        o = a.useCallback(() => {
            null == s || u || v.A.refreshProxyTicket(s.id);
        }, [s, u]),
        x = a.useCallback(() => {
            null != s && (0, b.A)({ onConfirm: () => E(s.id) });
        }, [s]),
        p = a.useCallback(() => {
            let e = s?.id;
            null != e &&
                V.A.getWindowOpen(L.MLl.ACTIVITY_POPOUT) &&
                N.A.getMainFrame()?.id === e &&
                (0, H.close)(L.MLl.ACTIVITY_POPOUT),
                (0, T.A)().leaveFrame(e),
                (0, D.pX)(
                    (function (e, i) {
                        if (null == e) return L.BVt.FRIENDS;
                        let l = W.Ay.getDefaultChannel(e);
                        if (null != l && l.id !== i) return L.BVt.CHANNEL(e, l.id);
                        let n = W.Ay.getFirstChannel(e, (e) => {
                            let { channel: l } = e;
                            return l.id !== i && B.A.can(L.xBc.VIEW_CHANNEL, l);
                        });
                        return null != n ? L.BVt.CHANNEL(e, n.id) : L.BVt.FRIENDS;
                    })(t, (0, M.h)(l)),
                );
        }, [s?.id, t, l]),
        f = I.intl.string(!0 === d ? C.default.YdgE0j : C.default.aWVf4j),
        O =
            null == r
                ? null
                : (0, n.jsx)(h.m, {
                      text: f,
                      ariaHidden: !0,
                      children: (0, n.jsx)(g.K, {
                          "aria-label": f,
                          "aria-pressed": !0 === d,
                          icon: A.ChatIcon,
                          variant: "icon-only",
                          size: "sm",
                          onClick: r,
                      }),
                  });
    if (!(0, M.x1)(s)) return O;
    let P = I.intl.string(C.default.xKexN1),
        F = I.intl.string(C.default["6g22y7"]),
        w = I.intl.string(C.default.Ea0Wrr);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            O,
            (0, n.jsx)(h.m, {
                text: P,
                ariaHidden: !0,
                children: (0, n.jsx)(g.K, {
                    "aria-label": P,
                    icon: m.RefreshIcon,
                    variant: "icon-only",
                    size: "sm",
                    loading: u,
                    onClick: o,
                }),
            }),
            c
                ? (0, n.jsx)(h.m, {
                      text: F,
                      ariaHidden: !0,
                      children: (0, n.jsx)(g.K, {
                          "aria-label": F,
                          icon: j.t,
                          variant: "icon-only",
                          size: "sm",
                          onClick: x,
                      }),
                  })
                : null,
            (0, n.jsx)(h.m, {
                text: w,
                ariaHidden: !0,
                children: (0, n.jsx)(g.K, {
                    "aria-label": w,
                    icon: y.DoorExitIcon,
                    variant: "icon-only",
                    size: "sm",
                    onClick: p,
                }),
            }),
        ],
    });
}
var z = l(288679),
    K = l(957907),
    S = l(448922),
    Y = l(354919);
function R(e) {
    let { channel: i } = e,
        l = (0, o.B9)(i.topic),
        h = (0, K.A)(i),
        g = (0, d.Ay)(i),
        x = (0, t.bG)([u.A], () => u.A.getGuild(i.guild_id), [i.guild_id]),
        [p, C] = a.useState(!1),
        A = a.useCallback(() => C((e) => !e), []),
        m = a.useCallback(() => C(!1), []),
        j = a.useMemo(() => ({ channel: i, guild: x ?? void 0, open: p, onClose: m }), [i, x, p, m]),
        y = a.useMemo(() => ({ type: M.U4.APP_CHANNEL, channelId: i.id, guildId: i.guild_id ?? void 0 }), [i]);
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              "data-has-border": !0,
              className: Y.TE,
              children: [
                  (0, n.jsx)(r.HI, { location: x?.name, subsection: g ?? void 0 }),
                  (0, n.jsx)("div", {
                      className: Y.SC,
                      children: (0, n.jsx)(
                          s.A,
                          {
                              guildId: i.guild_id,
                              channelId: i.id,
                              channelType: i.type,
                              hideSearch: !0,
                              toolbar: (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      null != h ? (0, n.jsx)(f, { project: h, guildId: i.guild_id }) : null,
                                      (0, n.jsx)(w, {
                                          applicationId: l,
                                          surface: y,
                                          guildId: i.guild_id,
                                          chatOpen: p,
                                          onToggleChat: A,
                                      }),
                                  ],
                              }),
                              className: Y.DD,
                              "aria-label": I.intl.string(I.t.BIYAqa),
                              children: (0, c.zF)({ channel: i, channelName: g, guild: x }),
                          },
                          `header-${i.id}`,
                      ),
                  }),
                  (0, n.jsx)("div", {
                      className: S.I,
                      "data-vibegrations-channel": !0,
                      children: (0, n.jsx)(z.A, {
                          projectId: h?.id ?? null,
                          applicationId: l,
                          surface: y,
                          chatOpen: !1,
                          previewReady: !0,
                          channelMessages: j,
                      }),
                  }),
              ],
          });
}
