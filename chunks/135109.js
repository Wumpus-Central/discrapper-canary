l.r(i), l.d(i, { default: () => U });
var a = l(477900),
    n = l(582128),
    t = l(17928),
    d = l(47167),
    r = l(726249),
    s = l(742589),
    c = l(131047),
    u = l(71393),
    o = l(683180),
    h = l(866665),
    A = l(408278),
    p = l(663417),
    x = l(811893),
    I = l(70688),
    g = l(47294),
    m = l(16961),
    C = l(625180),
    f = l(91242),
    N = l(580954),
    T = l(672929),
    y = l(228366),
    _ = l(494126),
    j = l(5867);
async function b(e) {
    null == f.A.getFrame(e) ||
        ((await (0, _.refreshProxyTicket)(e)) &&
            ((0, _.promoteFrame)(e),
            (0, _.updateFramePanelMode)(e, j.Gd.ACTIVITY_POPOUT_WINDOW),
            y.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })));
}
var v = l(574172),
    P = l(869146),
    k = l(976860),
    O = l(808728),
    E = l(576705),
    F = l(652215),
    V = l(165610),
    H = l(818085),
    B = l(375708);
function D(e) {
    let { applicationId: i, surface: l, guildId: t } = e,
        d = (0, T.A)(i, l),
        r = (0, m.G)(),
        s = (0, V.x1)(d) && d.data.proxyTicketRefreshing,
        c = n.useCallback(() => {
            null == d || s || C.A.refreshProxyTicket(d.id);
        }, [d, s]),
        u = n.useCallback(() => {
            null != d && (0, g.A)({ onConfirm: () => b(d.id) });
        }, [d]),
        o = n.useCallback(() => {
            let e = d?.id;
            null != e &&
                P.A.getWindowOpen(F.MLl.ACTIVITY_POPOUT) &&
                f.A.getMainFrame()?.id === e &&
                (0, v.close)(F.MLl.ACTIVITY_POPOUT),
                (0, N.A)().leaveFrame(e),
                (0, k.pX)(
                    (function (e, i) {
                        if (null == e) return F.BVt.FRIENDS;
                        let l = O.Ay.getDefaultChannel(e);
                        if (null != l && l.id !== i) return F.BVt.CHANNEL(e, l.id);
                        let a = O.Ay.getFirstChannel(e, (e) => {
                            let { channel: l } = e;
                            return l.id !== i && E.A.can(F.xBc.VIEW_CHANNEL, l);
                        });
                        return null != a ? F.BVt.CHANNEL(e, a.id) : F.BVt.FRIENDS;
                    })(t, (0, V.h)(l)),
                );
        }, [d?.id, t, l]);
    if (!(0, V.x1)(d)) return null;
    let y = B.intl.string(H.default.xKexN1),
        _ = B.intl.string(H.default["6g22y7"]),
        j = B.intl.string(H.default.Ea0Wrr);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(h.m, {
                text: y,
                ariaHidden: !0,
                children: (0, a.jsx)(A.K, {
                    "aria-label": y,
                    icon: p.f,
                    variant: "icon-only",
                    size: "sm",
                    loading: s,
                    onClick: c,
                }),
            }),
            r
                ? (0, a.jsx)(h.m, {
                      text: _,
                      ariaHidden: !0,
                      children: (0, a.jsx)(A.K, {
                          "aria-label": _,
                          icon: x.t,
                          variant: "icon-only",
                          size: "sm",
                          onClick: u,
                      }),
                  })
                : null,
            (0, a.jsx)(h.m, {
                text: j,
                ariaHidden: !0,
                children: (0, a.jsx)(A.K, { "aria-label": j, icon: I.o, variant: "icon-only", size: "sm", onClick: o }),
            }),
        ],
    });
}
var W = l(142882),
    L = l(957907),
    w = l(448922),
    M = l(354919);
function U(e) {
    let { channel: i } = e,
        l = (0, o.B9)(i.topic),
        h = (0, L.A)(i),
        A = (0, d.Ay)(i),
        p = (0, t.bG)([u.A], () => u.A.getGuild(i.guild_id), [i.guild_id]),
        x = n.useMemo(() => ({ type: V.U4.APP_CHANNEL, channelId: i.id, guildId: i.guild_id ?? void 0 }), [i]);
    return null == l
        ? null
        : (0, a.jsxs)("div", {
              "data-has-border": !0,
              className: M.TE,
              children: [
                  (0, a.jsx)(r.HI, { location: p?.name, subsection: A ?? void 0 }),
                  (0, a.jsx)("div", {
                      className: M.SC,
                      children: (0, a.jsx)(
                          s.A,
                          {
                              guildId: i.guild_id,
                              channelId: i.id,
                              channelType: i.type,
                              hideSearch: !0,
                              toolbar: (0, a.jsx)(D, { applicationId: l, surface: x, guildId: i.guild_id }),
                              className: M.DD,
                              "aria-label": B.intl.string(B.t.BIYAqa),
                              children: (0, c.zF)({ channel: i, channelName: A, guild: p }),
                          },
                          `header-${i.id}`,
                      ),
                  }),
                  (0, a.jsx)("div", {
                      className: w.I,
                      "data-vibegrations-channel": !0,
                      children: (0, a.jsx)(W.A, {
                          projectId: h?.id ?? null,
                          applicationId: l,
                          surface: x,
                          chatOpen: !1,
                          previewReady: !0,
                      }),
                  }),
              ],
          });
}
