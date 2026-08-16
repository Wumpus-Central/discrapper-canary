l.r(i), l.d(i, { default: () => M });
var a = l(477900),
    n = l(582128),
    t = l(17928),
    d = l(834730),
    r = l(47167),
    s = l(726249),
    c = l(742589),
    u = l(71393),
    o = l(683180),
    h = l(866665),
    x = l(408278),
    p = l(663417),
    A = l(811893),
    m = l(789645),
    I = l(47294),
    g = l(16961),
    f = l(625180),
    N = l(91242),
    C = l(580954),
    v = l(672929),
    j = l(228366),
    y = l(494126),
    T = l(5867);
async function _(e) {
    null == N.A.getFrame(e) ||
        ((await (0, y.refreshProxyTicket)(e)) &&
            ((0, y.promoteFrame)(e),
            (0, y.updateFramePanelMode)(e, T.Gd.ACTIVITY_POPOUT_WINDOW),
            j.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })));
}
var P = l(574172),
    b = l(869146),
    k = l(976860),
    O = l(808728),
    E = l(576705),
    F = l(652215),
    V = l(165610),
    H = l(818085),
    B = l(375708);
function L(e) {
    let { applicationId: i, surface: l, guildId: t } = e,
        d = (0, v.A)(i, l),
        r = (0, g.G)(),
        s = (0, V.x1)(d) && d.data.proxyTicketRefreshing,
        c = n.useCallback(() => {
            null == d || s || f.A.refreshProxyTicket(d.id);
        }, [d, s]),
        u = n.useCallback(() => {
            null != d && (0, I.A)({ onConfirm: () => _(d.id) });
        }, [d]),
        o = n.useCallback(() => {
            let e = d?.id;
            null != e &&
                b.A.getWindowOpen(F.MLl.ACTIVITY_POPOUT) &&
                N.A.getMainFrame()?.id === e &&
                (0, P.close)(F.MLl.ACTIVITY_POPOUT),
                (0, C.A)().leaveFrame(e),
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
    let j = B.intl.string(H.default.xKexN1),
        y = B.intl.string(H.default["6g22y7"]),
        T = B.intl.string(H.default.Ea0Wrr);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(h.m, {
                text: j,
                ariaHidden: !0,
                children: (0, a.jsx)(x.K, {
                    "aria-label": j,
                    icon: p.f,
                    variant: "icon-only",
                    size: "sm",
                    loading: s,
                    onClick: c,
                }),
            }),
            r
                ? (0, a.jsx)(h.m, {
                      text: y,
                      ariaHidden: !0,
                      children: (0, a.jsx)(x.K, {
                          "aria-label": y,
                          icon: A.t,
                          variant: "icon-only",
                          size: "sm",
                          onClick: u,
                      }),
                  })
                : null,
            (0, a.jsx)(h.m, {
                text: T,
                ariaHidden: !0,
                children: (0, a.jsx)(x.K, { "aria-label": T, icon: m.P, variant: "icon-only", size: "sm", onClick: o }),
            }),
        ],
    });
}
var W = l(142882),
    w = l(957907),
    D = l(448922);
function M(e) {
    let { channel: i } = e,
        l = (0, o.B9)(i.topic),
        h = (0, w.A)(i),
        x = (0, r.Ay)(i),
        p = (0, t.bG)([u.A], () => u.A.getGuild(i.guild_id), [i.guild_id]),
        A = n.useMemo(() => ({ type: V.U4.APP_CHANNEL, channelId: i.id, guildId: i.guild_id ?? void 0 }), [i]);
    return null == l
        ? null
        : (0, a.jsxs)("div", {
              className: D.kL,
              children: [
                  (0, a.jsx)(s.HI, { location: p?.name, subsection: x ?? void 0 }),
                  (0, a.jsx)("div", {
                      className: D.N1,
                      children: (0, a.jsx)(
                          c.A,
                          {
                              guildId: i.guild_id,
                              channelId: i.id,
                              channelType: i.type,
                              hideSearch: !0,
                              toolbar: (0, a.jsx)(L, { applicationId: l, surface: A, guildId: i.guild_id }),
                              className: D.wx,
                              "aria-label": x ?? void 0,
                              children: (0, a.jsx)(d.E, {
                                  variant: "text-md/semibold",
                                  color: "text-default",
                                  className: D.Bv,
                                  children: x,
                              }),
                          },
                          `header-${i.id}`,
                      ),
                  }),
                  (0, a.jsx)("div", {
                      className: D.Ix,
                      "data-vibegrations-channel": !0,
                      children: (0, a.jsx)(W.A, {
                          projectId: h?.id ?? null,
                          applicationId: l,
                          surface: A,
                          chatOpen: !1,
                          previewReady: !0,
                      }),
                  }),
              ],
          });
}
