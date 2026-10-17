n.d(t, { A: () => K });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(289873),
    d = n(73153),
    c = n(367513),
    u = n(951001),
    _ = n(398590),
    E = n(793574),
    A = n(688810),
    h = n(429913),
    f = n(568598),
    I = n(198052),
    p = n(477754),
    T = n(446243),
    m = n(558076),
    g = n(360729),
    S = n(976860),
    N = n(272812),
    C = n(461782),
    O = n(334463),
    R = n(309010),
    L = n(287809),
    y = n(795816),
    D = n(933958),
    v = n(851907),
    b = n(838274),
    P = n(536246),
    M = n(108959),
    U = n(597396),
    w = n(56129),
    G = n(824613),
    x = n(51250),
    k = n(818023),
    F = n(5867),
    B = n(652215),
    V = n(806931),
    H = n(411801),
    j = n(967481),
    W = n(969426);
function Y(e) {
    let { channel: t, isLoading: n } = e,
        [a, E] = r.useState(!1),
        A = (0, l.bG)([D.Ay], () => D.Ay.getCurrentEmbeddedActivity()),
        b = A?.applicationId,
        Y = (0, l.bG)([D.Ay], () => null != b && D.Ay.isProxyTicketRefreshing(b), [b]),
        K = (0, l.bG)([D.Ay], () => D.Ay.getActivityPanelMode()),
        $ = (0, h.h)(b),
        z = A?.launchId,
        X = (0, l.bG)([R.Ay], () => R.Ay.getChannelId() === t?.id),
        { dockedRect: q, isHidden: Z } = (0, l.cf)([O.A], () => {
            let e = O.A.pipWindow;
            return { dockedRect: null != e ? O.A.getDockedRect(e.id) : null, isHidden: O.A.isEmbeddedActivityHidden() };
        }),
        Q = (0, v.xi)({ channelId: t?.id }),
        {
            activityParticipant: J,
            selectedParticipant: ee,
            participantsOpen: et,
        } = (0, l.cf)([I.A], () => ({
            activityParticipant:
                null != A && null != t
                    ? I.A.getParticipant(
                          t.id,
                          (0, f.Qt)({ applicationId: A.applicationId, instanceId: A.compositeInstanceId }),
                      )
                    : null,
            selectedParticipant: null != t ? I.A.getSelectedParticipant(t.id) : null,
            participantsOpen: null != t && I.A.getParticipantsOpen(t.id),
        })),
        en = X || null != Q,
        ei = (0, M.A)(t?.id),
        er = t?.id,
        ea = t?.getGuildId(),
        { enabled: es } = (0, g.mf)({ guildId: ea ?? void 0, location: "PictureInPictureEmbeddedActivity" }),
        el = (0, l.bG)([m.A], () => null != er && m.A.isVisible(er), [er]),
        eo = ei && es && el,
        ed = ei && ee?.type !== V.lp.ACTIVITY,
        ec = !ei && K === F.Gd.PIP,
        eu = (!en || (en && (ed || ec || eo) && null == q)) && !Z,
        e_ = eu && null != O.A.pipVideoWindow && null != O.A.pipActivityWindow;
    function eE() {
        if (null != t) {
            (null != A &&
                c.A.selectParticipant(
                    t.id,
                    (0, f.Qt)({ applicationId: A.applicationId, instanceId: A.compositeInstanceId }),
                ),
                eo && (0, T.UV)(!0, t.id));
            let e = t.getGuildId() ?? B.ME;
            (u.A.channelListScrollTo(e, t.id), (0, S.uh)(e, t.id));
        }
        null == Q && (0, _.bz)();
    }
    function eA() {
        E(!a);
    }
    if (
        (r.useEffect(() => {
            if (null != b) {
                let e = eu ? k.bN.PIP : k.bN.FOCUSED;
                d.h.dispatch({ type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: e, applicationId: b });
            }
        }, [b, eu]),
        null == A || null == z || ((0, M.A)(t?.id) && null == J) || null == $ || !0 === A.renderInFramePool)
    )
        return null;
    let eh = Array.from(A.userIds)
            .map((e) => L.default.getUser(e))
            .filter((e) => null != e),
        ef = (0, x.A)(A, t);
    return (0, i.jsx)(C.Ay, {
        timeout: 2e3,
        children: (e) => {
            let { idle: r, onActive: l, onForceIdle: d } = e;
            return (0, i.jsxs)(N.A, {
                className: s()(H.zr, {
                    [H.NW]: eu,
                    [W.a8]: eu,
                    [j.N7]: r && !A.config?.useInteractivePIP,
                    [H.p0]: eu && !a,
                    [H.ST]: eu && a,
                    [H.R]: Z,
                    [H.Gq]: e_,
                }),
                noBorder: !eu,
                children: [
                    (0, i.jsx)("div", {
                        className: "theme-dark",
                        children: (function (e) {
                            let { onActive: n, onForceIdle: r, idle: s, isActivityInTextChannel: l, users: o } = e;
                            return eu && null != A && (J?.type === V.lp.ACTIVITY || l)
                                ? A.config?.useInteractivePIP
                                    ? (0, i.jsx)(w.tM, {
                                          onJumpToChannel: eE,
                                          applicationId: A.applicationId,
                                          channel: t,
                                          showControls: !s,
                                          onMouseDown: n,
                                          onMouseMove: n,
                                          onMouseLeave: r,
                                          onToggleHeight: eA,
                                          isExpanded: a,
                                          hideExpandedButton: l,
                                          embeddedActivity: A,
                                      })
                                    : l
                                      ? (0, i.jsx)(w.Mp, {
                                            idle: s,
                                            onMouseMove: n,
                                            onMouseDown: n,
                                            onMouseLeave: r,
                                            onJumpToChannel: () => {
                                                (eE(), (0, y.gk)(F.Gd.PANEL));
                                            },
                                            channel: t,
                                            applicationId: A.applicationId,
                                            users: o,
                                            embeddedActivity: A,
                                        })
                                      : null == J
                                        ? null
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)("div", {
                                                      onMouseMove: n,
                                                      onMouseDown: n,
                                                      onMouseLeave: r,
                                                      className: H.IU,
                                                      onDoubleClick: eE,
                                                  }),
                                                  (0, i.jsx)(w.gE, {
                                                      idle: s,
                                                      onMouseMove: n,
                                                      onMouseDown: n,
                                                      onMouseLeave: r,
                                                      onJumpToChannel: eE,
                                                      channel: t,
                                                      applicationId: A.applicationId,
                                                      selectedParticipant: J,
                                                      embeddedActivity: A,
                                                  }),
                                              ],
                                          })
                                : null;
                        })({ onActive: l, onForceIdle: d, idle: r, isActivityInTextChannel: ec, users: eh }),
                    }),
                    n || Y
                        ? (0, i.jsx)(o.y, { className: s()(H.pU, { [H.p0]: eu && !a, [H.ST]: eu && a }) })
                        : (0, i.jsx)(U.o, {
                              allowPopups: (0, P.b)($),
                              referrerPolicy: "origin",
                              url: A.url,
                              contextSource: { type: p.f.ACTIVITY, applicationId: A.applicationId },
                              queryParams: ef,
                              className: s()(H.pU, {
                                  [H.p0]: eu && !a,
                                  [H.ST]: eu && a,
                                  [H.v8]: eu && !A.config?.useInteractivePIP,
                              }),
                              shouldRefocus: !eu && X,
                              onIframeMount: (e) => (0, G.hN)(A.applicationId, e),
                              onIframeUnmount: (e) => (0, G.WO)(A.applicationId, e),
                          }),
                    !eu &&
                        null != t &&
                        (0, i.jsx)(w.ll, { participantsOpen: et, showToggleParticipants: !1, channelId: t.id }),
                ],
            });
        },
    });
}
let K = (e) => {
    let { channel: t, ...n } = e,
        r = D.Ay.getCurrentEmbeddedActivity();
    (0, b.A)({ connectedEmbeddedActivity: r });
    let { analyticsLocations: a } = (0, A.Ay)(E.A.ACTIVITY_PIP);
    return (0, i.jsx)(A.f5, { value: a, children: (0, i.jsx)(Y, { channel: t, isLoading: null == r, ...n }) });
};
