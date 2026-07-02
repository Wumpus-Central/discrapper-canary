"use strict";
n.d(t, { A: () => H });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(289873),
    u = n(228366),
    d = n(367513),
    c = n(951001),
    _ = n(398590),
    h = n(793574),
    f = n(688810),
    E = n(429913),
    p = n(568598),
    m = n(313961),
    g = n(408822),
    A = n(558076),
    I = n(360729),
    T = n(976860),
    S = n(272812),
    N = n(461782),
    C = n(334463),
    y = n(309010),
    v = n(287809),
    R = n(795816),
    O = n(933958),
    b = n(851907),
    L = n(838274),
    D = n(536246),
    P = n(108959),
    w = n(395678),
    M = n(56129),
    x = n(360469),
    U = n(5867),
    k = n(652215),
    G = n(806931),
    V = n(970682),
    F = n(27600),
    B = n(604949);
function j(e) {
    let { channel: t, isLoading: n } = e,
        [s, h] = r.useState(!1),
        f = (0, o.bG)([O.Ay], () => O.Ay.getCurrentEmbeddedActivity()),
        L = f?.applicationId,
        j = (0, o.bG)([O.Ay], () => null != L && O.Ay.isProxyTicketRefreshing(L), [L]),
        H = (0, o.bG)([O.Ay], () => O.Ay.getActivityPanelMode()),
        W = (0, E.h)(L),
        Y = f?.launchId,
        K = (0, o.bG)([y.A], () => y.A.getChannelId() === t?.id),
        { dockedRect: $, isHidden: z } = (0, o.cf)([C.A], () => {
            let e = C.A.pipWindow;
            return { dockedRect: null != e ? C.A.getDockedRect(e.id) : null, isHidden: C.A.isEmbeddedActivityHidden() };
        }),
        q = (0, b.xi)({ channelId: t?.id }),
        {
            activityParticipant: Z,
            selectedParticipant: X,
            participantsOpen: Q,
        } = (0, o.cf)([m.A], () => ({
            activityParticipant:
                null != f && null != t
                    ? m.A.getParticipant(
                          t.id,
                          (0, p.Qt)({ applicationId: f.applicationId, instanceId: f.compositeInstanceId }),
                      )
                    : null,
            selectedParticipant: null != t ? m.A.getSelectedParticipant(t.id) : null,
            participantsOpen: null != t && m.A.getParticipantsOpen(t.id),
        })),
        J = K || null != q,
        ee = (0, P.A)(t?.id),
        et = t?.id,
        en = t?.getGuildId(),
        { enabled: ei } = I.A.useExperiment({ guildId: en ?? void 0, location: "PictureInPictureEmbeddedActivity" }),
        er = (0, o.bG)([A.A], () => null != et && A.A.isVisible(et), [et]),
        es = ee && ei && er,
        ea = ee && X?.type !== G.lp.ACTIVITY,
        eo = !ee && H === U.Gd.PIP,
        el = (!J || (J && (ea || eo || es) && null == $)) && !z,
        eu = el && null != C.A.pipVideoWindow && null != C.A.pipActivityWindow;
    function ed() {
        if (null != t) {
            null != f &&
                d.A.selectParticipant(
                    t.id,
                    (0, p.Qt)({ applicationId: f.applicationId, instanceId: f.compositeInstanceId }),
                ),
                es && (0, g.zD)(t.id, !0);
            let e = t.getGuildId() ?? k.ME;
            c.A.channelListScrollTo(e, t.id), (0, T.uh)(e, t.id);
        }
        null == q && (0, _.bz)();
    }
    function ec() {
        h(!s);
    }
    if (
        (r.useEffect(() => {
            if (null != L) {
                let e = el ? x.bN.PIP : x.bN.FOCUSED;
                u.h.dispatch({ type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: e, applicationId: L });
            }
        }, [L, el]),
        null == f || null == Y || ((0, P.A)(t?.id) && null == Z) || null == W)
    )
        return null;
    let e_ = Array.from(f.userIds)
            .map((e) => v.default.getUser(e))
            .filter((e) => null != e),
        eh = {
            instance_id: f.compositeInstanceId ?? f.launchId ?? "",
            location_id: f.location?.id,
            launch_id: f.launchId,
            referrer_id: f.referrerId,
            custom_id: f.customId,
        };
    return (
        null != f.proxyTicket && (eh.discord_proxy_ticket = f.proxyTicket),
        t?.guild_id != null && t?.guild_id !== "" && (eh.guild_id = t.guild_id),
        t?.id != null && t?.id !== "" && (eh.channel_id = t.id),
        (0, i.jsx)(N.Ay, {
            timeout: 2e3,
            children: (e) => {
                let { idle: r, onActive: o, onForceIdle: u } = e;
                return (0, i.jsxs)(S.A, {
                    className: a()(V.zr, {
                        [V.NW]: el,
                        [B.a8]: el,
                        [F.N7]: r && !f.config?.useInteractivePIP,
                        [V.p0]: el && !s,
                        [V.ST]: el && s,
                        [V.R]: z,
                        [V.Gq]: eu,
                    }),
                    noBorder: !el,
                    children: [
                        (0, i.jsx)("div", {
                            className: "theme-dark",
                            children: (function (e) {
                                let { onActive: n, onForceIdle: r, idle: a, isActivityInTextChannel: o, users: l } = e;
                                return el && null != f && (Z?.type === G.lp.ACTIVITY || o)
                                    ? f.config?.useInteractivePIP
                                        ? (0, i.jsx)(M.tM, {
                                              onJumpToChannel: ed,
                                              applicationId: f.applicationId,
                                              channel: t,
                                              showControls: !a,
                                              onMouseDown: n,
                                              onMouseMove: n,
                                              onMouseLeave: r,
                                              onToggleHeight: ec,
                                              isExpanded: s,
                                              hideExpandedButton: o,
                                              embeddedActivity: f,
                                          })
                                        : o
                                          ? (0, i.jsx)(M.Mp, {
                                                idle: a,
                                                onMouseMove: n,
                                                onMouseDown: n,
                                                onMouseLeave: r,
                                                onJumpToChannel: () => {
                                                    ed(), (0, R.gk)(U.Gd.PANEL);
                                                },
                                                channel: t,
                                                applicationId: f.applicationId,
                                                users: l,
                                                embeddedActivity: f,
                                            })
                                          : null == Z
                                            ? null
                                            : (0, i.jsxs)(i.Fragment, {
                                                  children: [
                                                      (0, i.jsx)("div", {
                                                          onMouseMove: n,
                                                          onMouseDown: n,
                                                          onMouseLeave: r,
                                                          className: V.OB,
                                                          onDoubleClick: ed,
                                                      }),
                                                      (0, i.jsx)(M.gE, {
                                                          idle: a,
                                                          onMouseMove: n,
                                                          onMouseDown: n,
                                                          onMouseLeave: r,
                                                          onJumpToChannel: ed,
                                                          channel: t,
                                                          applicationId: f.applicationId,
                                                          selectedParticipant: Z,
                                                          embeddedActivity: f,
                                                      }),
                                                  ],
                                              })
                                    : null;
                            })({ onActive: o, onForceIdle: u, idle: r, isActivityInTextChannel: eo, users: e_ }),
                        }),
                        n || j
                            ? (0, i.jsx)(l.y, { className: a()(V.pU, { [V.p0]: el && !s, [V.ST]: el && s }) })
                            : (0, i.jsx)(w.o, {
                                  allowPopups: (0, D.b)(W),
                                  referrerPolicy: "origin",
                                  url: f.url,
                                  queryParams: eh,
                                  className: a()(V.pU, {
                                      [V.p0]: el && !s,
                                      [V.ST]: el && s,
                                      [V.v8]: el && !f.config?.useInteractivePIP,
                                  }),
                                  shouldRefocus: !el && K,
                              }),
                        !el &&
                            null != t &&
                            (0, i.jsx)(M.ll, { participantsOpen: Q, showToggleParticipants: !1, channelId: t.id }),
                    ],
                });
            },
        })
    );
}
let H = (e) => {
    let { channel: t, ...n } = e,
        r = O.Ay.getCurrentEmbeddedActivity();
    (0, L.A)({ connectedEmbeddedActivity: r });
    let { analyticsLocations: s } = (0, f.Ay)(h.A.ACTIVITY_PIP);
    return (0, i.jsx)(f.f5, { value: s, children: (0, i.jsx)(j, { channel: t, isLoading: null == r, ...n }) });
};
