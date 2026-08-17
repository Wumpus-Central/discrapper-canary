l.r(e), l.d(e, { default: () => S });
var n = l(477900),
    a = l(582128),
    t = l(17928),
    r = l(47167),
    d = l(726249),
    s = l(742589),
    c = l(131047),
    u = l(71393),
    o = l(683180),
    h = l(866665),
    x = l(408278),
    g = l(624479),
    I = l(594483),
    p = l(818085),
    A = l(375708);
function f(i) {
    let { project: e, guildId: l } = i,
        [t, r] = a.useState(!1),
        d = a.useCallback(async () => {
            if (!t && null != l) {
                r(!0);
                try {
                    await (0, I.A)(e, l);
                } finally {
                    r(!1);
                }
            }
        }, [t, l, e]);
    if (null == l) return null;
    let s = A.intl.string(p.default.sFFX7L);
    return (0, n.jsx)(h.m, {
        text: s,
        ariaHidden: !0,
        children: (0, n.jsx)(x.K, {
            "aria-label": s,
            icon: g.CopyIcon,
            variant: "icon-only",
            size: "sm",
            loading: t,
            onClick: d,
        }),
    });
}
var m = l(663417),
    C = l(811893),
    y = l(70688),
    j = l(47294),
    N = l(16961),
    T = l(625180),
    _ = l(91242),
    b = l(580954),
    v = l(672929),
    k = l(228366),
    P = l(494126),
    F = l(5867);
async function O(i) {
    null == _.A.getFrame(i) ||
        ((await (0, P.refreshProxyTicket)(i)) &&
            ((0, P.promoteFrame)(i),
            (0, P.updateFramePanelMode)(i, F.Gd.ACTIVITY_POPOUT_WINDOW),
            k.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })));
}
var E = l(574172),
    H = l(869146),
    V = l(976860),
    D = l(808728),
    B = l(576705),
    L = l(652215),
    W = l(165610);
function w(i) {
    let { applicationId: e, surface: l, guildId: t } = i,
        r = (0, v.A)(e, l),
        d = (0, N.G)(),
        s = (0, W.x1)(r) && r.data.proxyTicketRefreshing,
        c = a.useCallback(() => {
            null == r || s || T.A.refreshProxyTicket(r.id);
        }, [r, s]),
        u = a.useCallback(() => {
            null != r && (0, j.A)({ onConfirm: () => O(r.id) });
        }, [r]),
        o = a.useCallback(() => {
            let i = r?.id;
            null != i &&
                H.A.getWindowOpen(L.MLl.ACTIVITY_POPOUT) &&
                _.A.getMainFrame()?.id === i &&
                (0, E.close)(L.MLl.ACTIVITY_POPOUT),
                (0, b.A)().leaveFrame(i),
                (0, V.pX)(
                    (function (i, e) {
                        if (null == i) return L.BVt.FRIENDS;
                        let l = D.Ay.getDefaultChannel(i);
                        if (null != l && l.id !== e) return L.BVt.CHANNEL(i, l.id);
                        let n = D.Ay.getFirstChannel(i, (i) => {
                            let { channel: l } = i;
                            return l.id !== e && B.A.can(L.xBc.VIEW_CHANNEL, l);
                        });
                        return null != n ? L.BVt.CHANNEL(i, n.id) : L.BVt.FRIENDS;
                    })(t, (0, W.h)(l)),
                );
        }, [r?.id, t, l]);
    if (!(0, W.x1)(r)) return null;
    let g = A.intl.string(p.default.xKexN1),
        I = A.intl.string(p.default["6g22y7"]),
        f = A.intl.string(p.default.Ea0Wrr);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(h.m, {
                text: g,
                ariaHidden: !0,
                children: (0, n.jsx)(x.K, {
                    "aria-label": g,
                    icon: m.RefreshIcon,
                    variant: "icon-only",
                    size: "sm",
                    loading: s,
                    onClick: c,
                }),
            }),
            d
                ? (0, n.jsx)(h.m, {
                      text: I,
                      ariaHidden: !0,
                      children: (0, n.jsx)(x.K, {
                          "aria-label": I,
                          icon: C.t,
                          variant: "icon-only",
                          size: "sm",
                          onClick: u,
                      }),
                  })
                : null,
            (0, n.jsx)(h.m, {
                text: f,
                ariaHidden: !0,
                children: (0, n.jsx)(x.K, {
                    "aria-label": f,
                    icon: y.DoorExitIcon,
                    variant: "icon-only",
                    size: "sm",
                    onClick: o,
                }),
            }),
        ],
    });
}
var z = l(878706),
    K = l(957907),
    M = l(448922),
    R = l(354919);
function S(i) {
    let { channel: e } = i,
        l = (0, o.B9)(e.topic),
        h = (0, K.A)(e),
        x = (0, r.Ay)(e),
        g = (0, t.bG)([u.A], () => u.A.getGuild(e.guild_id), [e.guild_id]),
        I = a.useMemo(() => ({ type: W.U4.APP_CHANNEL, channelId: e.id, guildId: e.guild_id ?? void 0 }), [e]);
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              "data-has-border": !0,
              className: R.TE,
              children: [
                  (0, n.jsx)(d.HI, { location: g?.name, subsection: x ?? void 0 }),
                  (0, n.jsx)("div", {
                      className: R.SC,
                      children: (0, n.jsx)(
                          s.A,
                          {
                              guildId: e.guild_id,
                              channelId: e.id,
                              channelType: e.type,
                              hideSearch: !0,
                              toolbar: (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      null != h ? (0, n.jsx)(f, { project: h, guildId: e.guild_id }) : null,
                                      (0, n.jsx)(w, { applicationId: l, surface: I, guildId: e.guild_id }),
                                  ],
                              }),
                              className: R.DD,
                              "aria-label": A.intl.string(A.t.BIYAqa),
                              children: (0, c.zF)({ channel: e, channelName: x, guild: g }),
                          },
                          `header-${e.id}`,
                      ),
                  }),
                  (0, n.jsx)("div", {
                      className: M.I,
                      "data-vibegrations-channel": !0,
                      children: (0, n.jsx)(z.A, {
                          projectId: h?.id ?? null,
                          applicationId: l,
                          surface: I,
                          chatOpen: !1,
                          previewReady: !0,
                      }),
                  }),
              ],
          });
}
