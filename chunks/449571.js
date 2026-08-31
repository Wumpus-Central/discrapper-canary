"use strict";
n.d(t, { A: () => W });
var i = n(477900),
    r = n(582128),
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
    f = n(198052),
    p = n(446243),
    T = n(558076),
    m = n(360729),
    g = n(976860),
    S = n(272812),
    N = n(461782),
    C = n(334463),
    O = n(309010),
    R = n(287809),
    L = n(795816),
    y = n(933958),
    D = n(851907),
    v = n(838274),
    b = n(536246),
    M = n(108959),
    P = n(835228),
    U = n(56129),
    w = n(51250),
    G = n(360469),
    x = n(5867),
    k = n(652215),
    F = n(806931),
    V = n(411801),
    B = n(967481),
    H = n(969426);
function j(e) {
    let { channel: t, isLoading: n } = e,
        [a, E] = r.useState(!1),
        A = (0, l.bG)([y.Ay], () => y.Ay.getCurrentEmbeddedActivity()),
        v = A?.applicationId,
        j = (0, l.bG)([y.Ay], () => null != v && y.Ay.isProxyTicketRefreshing(v), [v]),
        W = (0, l.bG)([y.Ay], () => y.Ay.getActivityPanelMode()),
        Y = (0, h.h)(v),
        K = A?.launchId,
        $ = (0, l.bG)([O.Ay], () => O.Ay.getChannelId() === t?.id),
        { dockedRect: z, isHidden: q } = (0, l.cf)([C.A], () => {
            let e = C.A.pipWindow;
            return { dockedRect: null != e ? C.A.getDockedRect(e.id) : null, isHidden: C.A.isEmbeddedActivityHidden() };
        }),
        Z = (0, D.xi)({ channelId: t?.id }),
        {
            activityParticipant: X,
            selectedParticipant: Q,
            participantsOpen: J,
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
        ee = $ || null != Z,
        et = (0, M.A)(t?.id),
        en = t?.id,
        ei = t?.getGuildId(),
        { enabled: er } = (0, m.mf)({ guildId: ei ?? void 0, location: "PictureInPictureEmbeddedActivity" }),
        ea = (0, l.bG)([T.A], () => null != en && T.A.isVisible(en), [en]),
        es = et && er && ea,
        el = et && Q?.type !== F.lp.ACTIVITY,
        eo = !et && W === x.Gd.PIP,
        ed = (!ee || (ee && (el || eo || es) && null == z)) && !q,
        ec = ed && null != C.A.pipVideoWindow && null != C.A.pipActivityWindow;
    function eu() {
        if (null != t) {
            null != A &&
                c.A.selectParticipant(
                    t.id,
                    (0, I.Qt)({ applicationId: A.applicationId, instanceId: A.compositeInstanceId }),
                ),
                es && (0, p.UV)(!0, t.id);
            let e = t.getGuildId() ?? k.ME;
            u.A.channelListScrollTo(e, t.id), (0, g.uh)(e, t.id);
        }
        null == Z && (0, _.bz)();
    }
    function e_() {
        E(!a);
    }
    if (
        (r.useEffect(() => {
            if (null != v) {
                let e = ed ? G.bN.PIP : G.bN.FOCUSED;
                d.h.dispatch({ type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: e, applicationId: v });
            }
        }, [v, ed]),
        null == A || null == K || ((0, M.A)(t?.id) && null == X) || null == Y || !0 === A.renderInFramePool)
    )
        return null;
    let eE = Array.from(A.userIds)
            .map((e) => R.default.getUser(e))
            .filter((e) => null != e),
        eA = (0, w.A)(A, t);
    return (0, i.jsx)(N.Ay, {
        timeout: 2e3,
        children: (e) => {
            let { idle: r, onActive: l, onForceIdle: d } = e;
            return (0, i.jsxs)(S.A, {
                className: s()(V.zr, {
                    [V.NW]: ed,
                    [H.a8]: ed,
                    [B.N7]: r && !A.config?.useInteractivePIP,
                    [V.p0]: ed && !a,
                    [V.ST]: ed && a,
                    [V.R]: q,
                    [V.Gq]: ec,
                }),
                noBorder: !ed,
                children: [
                    (0, i.jsx)("div", {
                        className: "theme-dark",
                        children: (function (e) {
                            let { onActive: n, onForceIdle: r, idle: s, isActivityInTextChannel: l, users: o } = e;
                            return ed && null != A && (X?.type === F.lp.ACTIVITY || l)
                                ? A.config?.useInteractivePIP
                                    ? (0, i.jsx)(U.tM, {
                                          onJumpToChannel: eu,
                                          applicationId: A.applicationId,
                                          channel: t,
                                          showControls: !s,
                                          onMouseDown: n,
                                          onMouseMove: n,
                                          onMouseLeave: r,
                                          onToggleHeight: e_,
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
                                                eu(), (0, L.gk)(x.Gd.PANEL);
                                            },
                                            channel: t,
                                            applicationId: A.applicationId,
                                            users: o,
                                            embeddedActivity: A,
                                        })
                                      : null == X
                                        ? null
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)("div", {
                                                      onMouseMove: n,
                                                      onMouseDown: n,
                                                      onMouseLeave: r,
                                                      className: V.IU,
                                                      onDoubleClick: eu,
                                                  }),
                                                  (0, i.jsx)(U.gE, {
                                                      idle: s,
                                                      onMouseMove: n,
                                                      onMouseDown: n,
                                                      onMouseLeave: r,
                                                      onJumpToChannel: eu,
                                                      channel: t,
                                                      applicationId: A.applicationId,
                                                      selectedParticipant: X,
                                                      embeddedActivity: A,
                                                  }),
                                              ],
                                          })
                                : null;
                        })({ onActive: l, onForceIdle: d, idle: r, isActivityInTextChannel: eo, users: eE }),
                    }),
                    n || j
                        ? (0, i.jsx)(o.y, { className: s()(V.pU, { [V.p0]: ed && !a, [V.ST]: ed && a }) })
                        : (0, i.jsx)(P.o, {
                              allowPopups: (0, b.b)(Y),
                              referrerPolicy: "origin",
                              url: A.url,
                              queryParams: eA,
                              className: s()(V.pU, {
                                  [V.p0]: ed && !a,
                                  [V.ST]: ed && a,
                                  [V.v8]: ed && !A.config?.useInteractivePIP,
                              }),
                              shouldRefocus: !ed && $,
                          }),
                    !ed &&
                        null != t &&
                        (0, i.jsx)(U.ll, { participantsOpen: J, showToggleParticipants: !1, channelId: t.id }),
                ],
            });
        },
    });
}
let W = (e) => {
    let { channel: t, ...n } = e,
        r = y.Ay.getCurrentEmbeddedActivity();
    (0, v.A)({ connectedEmbeddedActivity: r });
    let { analyticsLocations: a } = (0, A.Ay)(E.A.ACTIVITY_PIP);
    return (0, i.jsx)(A.f5, { value: a, children: (0, i.jsx)(j, { channel: t, isLoading: null == r, ...n }) });
};
