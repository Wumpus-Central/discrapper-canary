"use strict";
n.d(t, { A: () => j });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(289873),
    d = n(228366),
    c = n(367513),
    u = n(951001),
    _ = n(398590),
    E = n(793574),
    A = n(688810),
    h = n(429913),
    I = n(568598),
    f = n(313961),
    p = n(446243),
    T = n(558076),
    m = n(360729),
    g = n(976860),
    S = n(272812),
    N = n(461782),
    C = n(334463),
    R = n(309010),
    O = n(287809),
    L = n(795816),
    y = n(933958),
    D = n(851907),
    v = n(838274),
    b = n(536246),
    M = n(108959),
    P = n(395678),
    U = n(56129),
    w = n(360469),
    G = n(5867),
    x = n(652215),
    k = n(806931),
    F = n(970682),
    V = n(27600),
    B = n(604949);
function H(e) {
    let { channel: t, isLoading: n } = e,
        [a, E] = r.useState(!1),
        A = (0, l.bG)([y.Ay], () => y.Ay.getCurrentEmbeddedActivity()),
        v = A?.applicationId,
        H = (0, l.bG)([y.Ay], () => null != v && y.Ay.isProxyTicketRefreshing(v), [v]),
        j = (0, l.bG)([y.Ay], () => y.Ay.getActivityPanelMode()),
        W = (0, h.h)(v),
        Y = A?.launchId,
        K = (0, l.bG)([R.Ay], () => R.Ay.getChannelId() === t?.id),
        { dockedRect: $, isHidden: z } = (0, l.cf)([C.A], () => {
            let e = C.A.pipWindow;
            return { dockedRect: null != e ? C.A.getDockedRect(e.id) : null, isHidden: C.A.isEmbeddedActivityHidden() };
        }),
        q = (0, D.xi)({ channelId: t?.id }),
        {
            activityParticipant: Z,
            selectedParticipant: X,
            participantsOpen: Q,
        } = (0, l.cf)([f.A], () => ({
            activityParticipant:
                null != A && null != t
                    ? f.A.getParticipant(
                          t.id,
                          (0, I.Qt)({ applicationId: A.applicationId, instanceId: A.compositeInstanceId }),
                      )
                    : null,
            selectedParticipant: null != t ? f.A.getSelectedParticipant(t.id) : null,
            participantsOpen: null != t && f.A.getParticipantsOpen(t.id),
        })),
        J = K || null != q,
        ee = (0, M.A)(t?.id),
        et = t?.id,
        en = t?.getGuildId(),
        { enabled: ei } = m.A.useExperiment({ guildId: en ?? void 0, location: "PictureInPictureEmbeddedActivity" }),
        er = (0, l.bG)([T.A], () => null != et && T.A.isVisible(et), [et]),
        ea = ee && ei && er,
        es = ee && X?.type !== k.lp.ACTIVITY,
        el = !ee && j === G.Gd.PIP,
        eo = (!J || (J && (es || el || ea) && null == $)) && !z,
        ed = eo && null != C.A.pipVideoWindow && null != C.A.pipActivityWindow;
    function ec() {
        if (null != t) {
            null != A &&
                c.A.selectParticipant(
                    t.id,
                    (0, I.Qt)({ applicationId: A.applicationId, instanceId: A.compositeInstanceId }),
                ),
                ea && (0, p.zD)(t.id, !0);
            let e = t.getGuildId() ?? x.ME;
            u.A.channelListScrollTo(e, t.id), (0, g.uh)(e, t.id);
        }
        null == q && (0, _.bz)();
    }
    function eu() {
        E(!a);
    }
    if (
        (r.useEffect(() => {
            if (null != v) {
                let e = eo ? w.bN.PIP : w.bN.FOCUSED;
                d.h.dispatch({ type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: e, applicationId: v });
            }
        }, [v, eo]),
        null == A || null == Y || ((0, M.A)(t?.id) && null == Z) || null == W)
    )
        return null;
    let e_ = Array.from(A.userIds)
            .map((e) => O.default.getUser(e))
            .filter((e) => null != e),
        eE = {
            instance_id: A.compositeInstanceId ?? A.launchId ?? "",
            location_id: A.location?.id,
            launch_id: A.launchId,
            referrer_id: A.referrerId,
            custom_id: A.customId,
        };
    return (
        null != A.proxyTicket && (eE.discord_proxy_ticket = A.proxyTicket),
        t?.guild_id != null && t?.guild_id !== "" && (eE.guild_id = t.guild_id),
        t?.id != null && t?.id !== "" && (eE.channel_id = t.id),
        (0, i.jsx)(N.Ay, {
            timeout: 2e3,
            children: (e) => {
                let { idle: r, onActive: l, onForceIdle: d } = e;
                return (0, i.jsxs)(S.A, {
                    className: s()(F.zr, {
                        [F.NW]: eo,
                        [B.a8]: eo,
                        [V.N7]: r && !A.config?.useInteractivePIP,
                        [F.p0]: eo && !a,
                        [F.ST]: eo && a,
                        [F.R]: z,
                        [F.Gq]: ed,
                    }),
                    noBorder: !eo,
                    children: [
                        (0, i.jsx)("div", {
                            className: "theme-dark",
                            children: (function (e) {
                                let { onActive: n, onForceIdle: r, idle: s, isActivityInTextChannel: l, users: o } = e;
                                return eo && null != A && (Z?.type === k.lp.ACTIVITY || l)
                                    ? A.config?.useInteractivePIP
                                        ? (0, i.jsx)(U.tM, {
                                              onJumpToChannel: ec,
                                              applicationId: A.applicationId,
                                              channel: t,
                                              showControls: !s,
                                              onMouseDown: n,
                                              onMouseMove: n,
                                              onMouseLeave: r,
                                              onToggleHeight: eu,
                                              isExpanded: a,
                                              hideExpandedButton: l,
                                              embeddedActivity: A,
                                          })
                                        : l
                                          ? (0, i.jsx)(U.Mp, {
                                                idle: s,
                                                onMouseMove: n,
                                                onMouseDown: n,
                                                onMouseLeave: r,
                                                onJumpToChannel: () => {
                                                    ec(), (0, L.gk)(G.Gd.PANEL);
                                                },
                                                channel: t,
                                                applicationId: A.applicationId,
                                                users: o,
                                                embeddedActivity: A,
                                            })
                                          : null == Z
                                            ? null
                                            : (0, i.jsxs)(i.Fragment, {
                                                  children: [
                                                      (0, i.jsx)("div", {
                                                          onMouseMove: n,
                                                          onMouseDown: n,
                                                          onMouseLeave: r,
                                                          className: F.OB,
                                                          onDoubleClick: ec,
                                                      }),
                                                      (0, i.jsx)(U.gE, {
                                                          idle: s,
                                                          onMouseMove: n,
                                                          onMouseDown: n,
                                                          onMouseLeave: r,
                                                          onJumpToChannel: ec,
                                                          channel: t,
                                                          applicationId: A.applicationId,
                                                          selectedParticipant: Z,
                                                          embeddedActivity: A,
                                                      }),
                                                  ],
                                              })
                                    : null;
                            })({ onActive: l, onForceIdle: d, idle: r, isActivityInTextChannel: el, users: e_ }),
                        }),
                        n || H
                            ? (0, i.jsx)(o.y, { className: s()(F.pU, { [F.p0]: eo && !a, [F.ST]: eo && a }) })
                            : (0, i.jsx)(P.o, {
                                  allowPopups: (0, b.b)(W),
                                  referrerPolicy: "origin",
                                  url: A.url,
                                  queryParams: eE,
                                  className: s()(F.pU, {
                                      [F.p0]: eo && !a,
                                      [F.ST]: eo && a,
                                      [F.v8]: eo && !A.config?.useInteractivePIP,
                                  }),
                                  shouldRefocus: !eo && K,
                              }),
                        !eo &&
                            null != t &&
                            (0, i.jsx)(U.ll, { participantsOpen: Q, showToggleParticipants: !1, channelId: t.id }),
                    ],
                });
            },
        })
    );
}
let j = (e) => {
    let { channel: t, ...n } = e,
        r = y.Ay.getCurrentEmbeddedActivity();
    (0, v.A)({ connectedEmbeddedActivity: r });
    let { analyticsLocations: a } = (0, A.Ay)(E.A.ACTIVITY_PIP);
    return (0, i.jsx)(A.f5, { value: a, children: (0, i.jsx)(H, { channel: t, isLoading: null == r, ...n }) });
};
