"use strict";
n.d(t, { A: () => B });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    u = n(73153),
    c = n(367513),
    d = n(951001),
    _ = n(398590),
    f = n(793574),
    h = n(688810),
    p = n(429913),
    g = n(568598),
    E = n(313961),
    A = n(976860),
    I = n(272812),
    T = n(461782),
    y = n(334463),
    S = n(309010),
    v = n(287809),
    C = n(795816),
    b = n(933958),
    N = n(851907),
    R = n(838274),
    O = n(536246),
    D = n(108959),
    L = n(398866),
    w = n(56129),
    x = n(360469),
    P = n(5867),
    M = n(652215),
    k = n(806931),
    U = n(463967),
    G = n(319567),
    F = n(976092);
function V(e) {
    let { channel: t, isLoading: n } = e,
        [a, f] = i.useState(!1),
        h = (0, o.bG)([b.Ay], () => b.Ay.getCurrentEmbeddedActivity()),
        R = h?.applicationId,
        V = (0, o.bG)([b.Ay], () => null != R && b.Ay.isProxyTicketRefreshing(R), [R]),
        B = (0, o.bG)([b.Ay], () => b.Ay.getActivityPanelMode()),
        j = (0, p.h)(R),
        H = h?.launchId,
        Y = (0, o.bG)([S.A], () => S.A.getChannelId() === t?.id),
        { dockedRect: W, isHidden: K } = (0, o.cf)([y.A], () => {
            let e = y.A.pipWindow;
            return { dockedRect: null != e ? y.A.getDockedRect(e.id) : null, isHidden: y.A.isEmbeddedActivityHidden() };
        }),
        $ = (0, N.xi)({ channelId: t?.id }),
        {
            activityParticipant: z,
            selectedParticipant: q,
            participantsOpen: X,
        } = (0, o.cf)([E.A], () => ({
            activityParticipant:
                null != h && null != t
                    ? E.A.getParticipant(
                          t.id,
                          (0, g.Qt)({ applicationId: h.applicationId, instanceId: h.compositeInstanceId }),
                      )
                    : null,
            selectedParticipant: null != t ? E.A.getSelectedParticipant(t.id) : null,
            participantsOpen: null != t && E.A.getParticipantsOpen(t.id),
        })),
        Z = Y || null != $,
        Q = (0, D.A)(t?.id),
        J = Q && q?.type !== k.lp.ACTIVITY,
        ee = !Q && B === P.Gd.PIP,
        et = Z && (J || ee) && null == W,
        en = (!Z || et) && !K,
        er = en && null != y.A.pipVideoWindow && null != y.A.pipActivityWindow;
    function ei() {
        if (null != t) {
            null != h &&
                c.A.selectParticipant(
                    t.id,
                    (0, g.Qt)({ applicationId: h.applicationId, instanceId: h.compositeInstanceId }),
                );
            let e = t.getGuildId() ?? M.ME;
            d.A.channelListScrollTo(e, t.id), (0, A.uh)(e, t.id);
        }
        null == $ && (0, _.bz)();
    }
    function ea() {
        f(!a);
    }
    function es(e) {
        let { onActive: n, onForceIdle: i, idle: s, isActivityInTextChannel: o, users: l } = e;
        return en && null != h && (z?.type === k.lp.ACTIVITY || o)
            ? h.config?.useInteractivePIP
                ? (0, r.jsx)(w.tM, {
                      onJumpToChannel: ei,
                      applicationId: h.applicationId,
                      channel: t,
                      showControls: !s,
                      onMouseDown: n,
                      onMouseMove: n,
                      onMouseLeave: i,
                      onToggleHeight: ea,
                      isExpanded: a,
                      hideExpandedButton: o,
                      embeddedActivity: h,
                  })
                : o
                  ? (0, r.jsx)(w.Mp, {
                        idle: s,
                        onMouseMove: n,
                        onMouseDown: n,
                        onMouseLeave: i,
                        onJumpToChannel: () => {
                            ei(), (0, C.gk)(P.Gd.PANEL);
                        },
                        channel: t,
                        applicationId: h.applicationId,
                        users: l,
                        embeddedActivity: h,
                    })
                  : null == z
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  onMouseMove: n,
                                  onMouseDown: n,
                                  onMouseLeave: i,
                                  className: U.OB,
                                  onDoubleClick: ei,
                              }),
                              (0, r.jsx)(w.gE, {
                                  idle: s,
                                  onMouseMove: n,
                                  onMouseDown: n,
                                  onMouseLeave: i,
                                  onJumpToChannel: ei,
                                  channel: t,
                                  applicationId: h.applicationId,
                                  selectedParticipant: z,
                                  embeddedActivity: h,
                              }),
                          ],
                      })
            : null;
    }
    if (
        (i.useEffect(() => {
            if (null != R) {
                let e = en ? x.bN.PIP : x.bN.FOCUSED;
                u.h.dispatch({ type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: e, applicationId: R });
            }
        }, [R, en]),
        null == h || null == H || ((0, D.A)(t?.id) && null == z) || null == j)
    )
        return null;
    let eo = Array.from(h.userIds)
            .map((e) => v.default.getUser(e))
            .filter((e) => null != e),
        el = {
            instance_id: h.compositeInstanceId ?? h.launchId ?? "",
            location_id: h.location?.id,
            launch_id: h.launchId,
            referrer_id: h.referrerId,
            custom_id: h.customId,
        };
    return (
        null != h.proxyTicket && (el.discord_proxy_ticket = h.proxyTicket),
        t?.guild_id != null && t?.guild_id !== "" && (el.guild_id = t.guild_id),
        t?.id != null && t?.id !== "" && (el.channel_id = t.id),
        (0, r.jsx)(T.Ay, {
            timeout: 2e3,
            children: (e) => {
                let { idle: i, onActive: o, onForceIdle: u } = e;
                return (0, r.jsxs)(I.A, {
                    className: s()(U.zr, {
                        [U.NW]: en,
                        [F.a8]: en,
                        [G.N7]: i && !h.config?.useInteractivePIP,
                        [U.p0]: en && !a,
                        [U.ST]: en && a,
                        [U.R]: K,
                        [U.Gq]: er,
                    }),
                    noBorder: !en,
                    children: [
                        (0, r.jsx)("div", {
                            className: "theme-dark",
                            children: es({
                                onActive: o,
                                onForceIdle: u,
                                idle: i,
                                isActivityInTextChannel: ee,
                                users: eo,
                            }),
                        }),
                        n || V
                            ? (0, r.jsx)(l.y$y, { className: s()(U.pU, { [U.p0]: en && !a, [U.ST]: en && a }) })
                            : (0, r.jsx)(L.o, {
                                  allowPopups: (0, O.b)(j),
                                  referrerPolicy: "origin",
                                  url: h.url,
                                  queryParams: el,
                                  className: s()(U.pU, {
                                      [U.p0]: en && !a,
                                      [U.ST]: en && a,
                                      [U.v8]: en && !h.config?.useInteractivePIP,
                                  }),
                                  shouldRefocus: !en && Y,
                              }),
                        !en &&
                            null != t &&
                            (0, r.jsx)(w.ll, { participantsOpen: X, showToggleParticipants: !1, channelId: t.id }),
                    ],
                });
            },
        })
    );
}
let B = (e) => {
    let { channel: t, ...n } = e,
        i = b.Ay.getCurrentEmbeddedActivity();
    (0, R.A)({ connectedEmbeddedActivity: i });
    let { analyticsLocations: a } = (0, h.Ay)(f.A.ACTIVITY_PIP),
        s = null == i;
    return (0, r.jsx)(h.f5, { value: a, children: (0, r.jsx)(V, { channel: t, isLoading: s, ...n }) });
};
