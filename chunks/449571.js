"use strict";
n.d(t, { A: () => V });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(397927),
    u = n(73153),
    c = n(367513),
    d = n(951001),
    _ = n(398590),
    f = n(793574),
    p = n(688810),
    h = n(429913),
    m = n(568598),
    E = n(313961),
    g = n(976860),
    A = n(272812),
    I = n(461782),
    T = n(334463),
    S = n(309010),
    y = n(287809),
    v = n(795816),
    N = n(933958),
    C = n(851907),
    R = n(838274),
    O = n(536246),
    b = n(108959),
    D = n(398866),
    L = n(56129),
    w = n(360469),
    M = n(5867),
    P = n(652215),
    x = n(806931),
    k = n(696093),
    U = n(706069),
    G = n(962294);
function F(e) {
    let { channel: t, isLoading: n } = e,
        [s, f] = i.useState(!1),
        p = (0, o.bG)([N.Ay], () => N.Ay.getCurrentEmbeddedActivity()),
        R = p?.applicationId,
        F = (0, o.bG)([N.Ay], () => null != R && N.Ay.isProxyTicketRefreshing(R), [R]),
        V = (0, o.bG)([N.Ay], () => N.Ay.getActivityPanelMode()),
        B = (0, h.h)(R),
        H = p?.launchId,
        j = (0, o.bG)([S.A], () => S.A.getChannelId() === t?.id),
        { dockedRect: Y, isHidden: W } = (0, o.cf)([T.A], () => {
            let e = T.A.pipWindow;
            return { dockedRect: null != e ? T.A.getDockedRect(e.id) : null, isHidden: T.A.isEmbeddedActivityHidden() };
        }),
        K = (0, C.xi)({ channelId: t?.id }),
        {
            activityParticipant: $,
            selectedParticipant: z,
            participantsOpen: q,
        } = (0, o.cf)([E.A], () => ({
            activityParticipant:
                null != p && null != t
                    ? E.A.getParticipant(
                          t.id,
                          (0, m.Qt)({ applicationId: p.applicationId, instanceId: p.compositeInstanceId }),
                      )
                    : null,
            selectedParticipant: null != t ? E.A.getSelectedParticipant(t.id) : null,
            participantsOpen: null != t && E.A.getParticipantsOpen(t.id),
        })),
        Z = j || null != K,
        X = (0, b.A)(t?.id),
        Q = X && z?.type !== x.lp.ACTIVITY,
        J = !X && V === M.Gd.PIP,
        ee = Z && (Q || J) && null == Y,
        et = (!Z || ee) && !W,
        en = et && null != T.A.pipVideoWindow && null != T.A.pipActivityWindow;
    function er() {
        if (null != t) {
            null != p &&
                c.A.selectParticipant(
                    t.id,
                    (0, m.Qt)({ applicationId: p.applicationId, instanceId: p.compositeInstanceId }),
                );
            let e = t.getGuildId() ?? P.ME;
            d.A.channelListScrollTo(e, t.id), (0, g.uh)(e, t.id);
        }
        null == K && (0, _.bz)();
    }
    function ei() {
        f(!s);
    }
    function es(e) {
        let { onActive: n, onForceIdle: i, idle: a, isActivityInTextChannel: o, users: l } = e;
        return et && null != p && ($?.type === x.lp.ACTIVITY || o)
            ? p.config?.useInteractivePIP
                ? (0, r.jsx)(L.tM, {
                      onJumpToChannel: er,
                      applicationId: p.applicationId,
                      channel: t,
                      showControls: !a,
                      onMouseDown: n,
                      onMouseMove: n,
                      onMouseLeave: i,
                      onToggleHeight: ei,
                      isExpanded: s,
                      hideExpandedButton: o,
                      embeddedActivity: p,
                  })
                : o
                  ? (0, r.jsx)(L.Mp, {
                        idle: a,
                        onMouseMove: n,
                        onMouseDown: n,
                        onMouseLeave: i,
                        onJumpToChannel: () => {
                            er(), (0, v.gk)(M.Gd.PANEL);
                        },
                        channel: t,
                        applicationId: p.applicationId,
                        users: l,
                        embeddedActivity: p,
                    })
                  : null == $
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  onMouseMove: n,
                                  onMouseDown: n,
                                  onMouseLeave: i,
                                  className: k.OB,
                                  onDoubleClick: er,
                              }),
                              (0, r.jsx)(L.gE, {
                                  idle: a,
                                  onMouseMove: n,
                                  onMouseDown: n,
                                  onMouseLeave: i,
                                  onJumpToChannel: er,
                                  channel: t,
                                  applicationId: p.applicationId,
                                  selectedParticipant: $,
                                  embeddedActivity: p,
                              }),
                          ],
                      })
            : null;
    }
    if (
        (i.useEffect(() => {
            if (null != R) {
                let e = et ? w.bN.PIP : w.bN.FOCUSED;
                u.h.dispatch({ type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: e, applicationId: R });
            }
        }, [R, et]),
        null == p || null == H || ((0, b.A)(t?.id) && null == $) || null == B)
    )
        return null;
    let ea = Array.from(p.userIds)
            .map((e) => y.default.getUser(e))
            .filter((e) => null != e),
        eo = {
            instance_id: p.compositeInstanceId ?? p.launchId ?? "",
            location_id: p.location?.id,
            launch_id: p.launchId,
            referrer_id: p.referrerId,
            custom_id: p.customId,
        };
    return (
        null != p.proxyTicket && (eo.discord_proxy_ticket = p.proxyTicket),
        t?.guild_id != null && t?.guild_id !== "" && (eo.guild_id = t.guild_id),
        t?.id != null && t?.id !== "" && (eo.channel_id = t.id),
        (0, r.jsx)(I.Ay, {
            timeout: 2e3,
            children: (e) => {
                let { idle: i, onActive: o, onForceIdle: u } = e;
                return (0, r.jsxs)(A.A, {
                    className: a()(k.zr, {
                        [k.NW]: et,
                        [G.a8]: et,
                        [U.N7]: i && !p.config?.useInteractivePIP,
                        [k.p0]: et && !s,
                        [k.ST]: et && s,
                        [k.R]: W,
                        [k.Gq]: en,
                    }),
                    noBorder: !et,
                    children: [
                        (0, r.jsx)("div", {
                            className: "theme-dark",
                            children: es({
                                onActive: o,
                                onForceIdle: u,
                                idle: i,
                                isActivityInTextChannel: J,
                                users: ea,
                            }),
                        }),
                        n || F
                            ? (0, r.jsx)(l.y$y, { className: a()(k.pU, { [k.p0]: et && !s, [k.ST]: et && s }) })
                            : (0, r.jsx)(D.o, {
                                  allowPopups: (0, O.b)(B),
                                  referrerPolicy: "origin",
                                  url: p.url,
                                  queryParams: eo,
                                  className: a()(k.pU, {
                                      [k.p0]: et && !s,
                                      [k.ST]: et && s,
                                      [k.v8]: et && !p.config?.useInteractivePIP,
                                  }),
                                  shouldRefocus: !et && j,
                              }),
                        !et &&
                            null != t &&
                            (0, r.jsx)(L.ll, { participantsOpen: q, showToggleParticipants: !1, channelId: t.id }),
                    ],
                });
            },
        })
    );
}
let V = (e) => {
    let { channel: t, ...n } = e,
        i = N.Ay.getCurrentEmbeddedActivity();
    (0, R.A)({ connectedEmbeddedActivity: i });
    let { analyticsLocations: s } = (0, p.Ay)(f.A.ACTIVITY_PIP),
        a = null == i;
    return (0, r.jsx)(p.f5, { value: s, children: (0, r.jsx)(F, { channel: t, isLoading: a, ...n }) });
};
