n.d(t, { A: () => Y });
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
    M = n(536246),
    P = n(108959),
    U = n(597396),
    w = n(56129),
    G = n(51250),
    x = n(818023),
    k = n(5867),
    F = n(652215),
    B = n(806931),
    V = n(411801),
    H = n(967481),
    j = n(969426);
function W(e) {
    let { channel: t, isLoading: n } = e,
        [a, E] = r.useState(!1),
        A = (0, l.bG)([D.Ay], () => D.Ay.getCurrentEmbeddedActivity()),
        b = A?.applicationId,
        W = (0, l.bG)([D.Ay], () => null != b && D.Ay.isProxyTicketRefreshing(b), [b]),
        Y = (0, l.bG)([D.Ay], () => D.Ay.getActivityPanelMode()),
        K = (0, h.h)(b),
        $ = A?.launchId,
        z = (0, l.bG)([R.Ay], () => R.Ay.getChannelId() === t?.id),
        { dockedRect: X, isHidden: Z } = (0, l.cf)([O.A], () => {
            let e = O.A.pipWindow;
            return { dockedRect: null != e ? O.A.getDockedRect(e.id) : null, isHidden: O.A.isEmbeddedActivityHidden() };
        }),
        q = (0, v.xi)({ channelId: t?.id }),
        {
            activityParticipant: Q,
            selectedParticipant: J,
            participantsOpen: ee,
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
        et = z || null != q,
        en = (0, P.A)(t?.id),
        ei = t?.id,
        er = t?.getGuildId(),
        { enabled: ea } = (0, g.mf)({ guildId: er ?? void 0, location: "PictureInPictureEmbeddedActivity" }),
        es = (0, l.bG)([m.A], () => null != ei && m.A.isVisible(ei), [ei]),
        el = en && ea && es,
        eo = en && J?.type !== B.lp.ACTIVITY,
        ed = !en && Y === k.Gd.PIP,
        ec = (!et || (et && (eo || ed || el) && null == X)) && !Z,
        eu = ec && null != O.A.pipVideoWindow && null != O.A.pipActivityWindow;
    function e_() {
        if (null != t) {
            (null != A &&
                c.A.selectParticipant(
                    t.id,
                    (0, f.Qt)({ applicationId: A.applicationId, instanceId: A.compositeInstanceId }),
                ),
                el && (0, T.UV)(!0, t.id));
            let e = t.getGuildId() ?? F.ME;
            (u.A.channelListScrollTo(e, t.id), (0, S.uh)(e, t.id));
        }
        null == q && (0, _.bz)();
    }
    function eE() {
        E(!a);
    }
    if (
        (r.useEffect(() => {
            if (null != b) {
                let e = ec ? x.bN.PIP : x.bN.FOCUSED;
                d.h.dispatch({ type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: e, applicationId: b });
            }
        }, [b, ec]),
        null == A || null == $ || ((0, P.A)(t?.id) && null == Q) || null == K || !0 === A.renderInFramePool)
    )
        return null;
    let eA = Array.from(A.userIds)
            .map((e) => L.default.getUser(e))
            .filter((e) => null != e),
        eh = (0, G.A)(A, t);
    return (0, i.jsx)(C.Ay, {
        timeout: 2e3,
        children: (e) => {
            let { idle: r, onActive: l, onForceIdle: d } = e;
            return (0, i.jsxs)(N.A, {
                className: s()(V.zr, {
                    [V.NW]: ec,
                    [j.a8]: ec,
                    [H.N7]: r && !A.config?.useInteractivePIP,
                    [V.p0]: ec && !a,
                    [V.ST]: ec && a,
                    [V.R]: Z,
                    [V.Gq]: eu,
                }),
                noBorder: !ec,
                children: [
                    (0, i.jsx)("div", {
                        className: "theme-dark",
                        children: (function (e) {
                            let { onActive: n, onForceIdle: r, idle: s, isActivityInTextChannel: l, users: o } = e;
                            return ec && null != A && (Q?.type === B.lp.ACTIVITY || l)
                                ? A.config?.useInteractivePIP
                                    ? (0, i.jsx)(w.tM, {
                                          onJumpToChannel: e_,
                                          applicationId: A.applicationId,
                                          channel: t,
                                          showControls: !s,
                                          onMouseDown: n,
                                          onMouseMove: n,
                                          onMouseLeave: r,
                                          onToggleHeight: eE,
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
                                                (e_(), (0, y.gk)(k.Gd.PANEL));
                                            },
                                            channel: t,
                                            applicationId: A.applicationId,
                                            users: o,
                                            embeddedActivity: A,
                                        })
                                      : null == Q
                                        ? null
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)("div", {
                                                      onMouseMove: n,
                                                      onMouseDown: n,
                                                      onMouseLeave: r,
                                                      className: V.IU,
                                                      onDoubleClick: e_,
                                                  }),
                                                  (0, i.jsx)(w.gE, {
                                                      idle: s,
                                                      onMouseMove: n,
                                                      onMouseDown: n,
                                                      onMouseLeave: r,
                                                      onJumpToChannel: e_,
                                                      channel: t,
                                                      applicationId: A.applicationId,
                                                      selectedParticipant: Q,
                                                      embeddedActivity: A,
                                                  }),
                                              ],
                                          })
                                : null;
                        })({ onActive: l, onForceIdle: d, idle: r, isActivityInTextChannel: ed, users: eA }),
                    }),
                    n || W
                        ? (0, i.jsx)(o.y, { className: s()(V.pU, { [V.p0]: ec && !a, [V.ST]: ec && a }) })
                        : (0, i.jsx)(U.o, {
                              allowPopups: (0, M.b)(K),
                              referrerPolicy: "origin",
                              url: A.url,
                              contextSource: { type: p.f.ACTIVITY, applicationId: A.applicationId },
                              queryParams: eh,
                              className: s()(V.pU, {
                                  [V.p0]: ec && !a,
                                  [V.ST]: ec && a,
                                  [V.v8]: ec && !A.config?.useInteractivePIP,
                              }),
                              shouldRefocus: !ec && z,
                          }),
                    !ec &&
                        null != t &&
                        (0, i.jsx)(w.ll, { participantsOpen: ee, showToggleParticipants: !1, channelId: t.id }),
                ],
            });
        },
    });
}
let Y = (e) => {
    let { channel: t, ...n } = e,
        r = D.Ay.getCurrentEmbeddedActivity();
    (0, b.A)({ connectedEmbeddedActivity: r });
    let { analyticsLocations: a } = (0, A.Ay)(E.A.ACTIVITY_PIP);
    return (0, i.jsx)(A.f5, { value: a, children: (0, i.jsx)(W, { channel: t, isLoading: null == r, ...n }) });
};
