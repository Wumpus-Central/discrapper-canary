n.d(t, {
    J: () => Z,
    y: () => x
});
var i = n(200651),
    l = n(192379),
    r = n(512722),
    a = n.n(r),
    o = n(481060),
    s = n(24124),
    c = n(636449),
    d = n(620662),
    u = n(513202),
    h = n(311352),
    p = n(803647),
    m = n(131704),
    g = n(626135),
    f = n(870569),
    _ = n(981631),
    v = n(388032),
    C = n(594102);
function x(e, t, n) {
    return null != e && (null != n ? n.applicationId === e.id : null != t && t.application_id === e.id && t.type === _.IIU.PLAYING && (0, d.Z)(t, _.xjy.JOIN));
}
let Z = l.memo(function (e) {
    let t,
        r,
        d,
        Z,
        { stream: I, canGoLive: b, guildId: S, isStreaming: N, channel: E, canStream: j, runningGame: y, embeddedActivity: A, activity: T, application: P, analyticsContext: w } = e,
        R = x(P, T, A),
        L = l.useCallback(() => {
            a()(null != T, 'Received null activity'),
                g.default.track(_.rMx.OPEN_MODAL, {
                    type: 'Send Join Invite',
                    application_id: T.application_id,
                    location: w.location
                }),
                (0, s.h7)(T, !1);
        }, [T, w]),
        M = l.useCallback(
            (e, t) => () => {
                u.Z.leaveActivity({
                    location: t,
                    applicationId: e,
                    showFeedback: !0
                });
            },
            []
        ),
        D = l.useCallback(() => {
            (0, p.Z)(I);
        }, [I]),
        G = l.useCallback(() => {
            let e = null != E && (0, m.vd)(E.type) ? E : null,
                t = null != e ? e.getGuildId() : S;
            (0, o.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('93382'), n.e('79477'), n.e('38109')]).then(n.bind(n, 60594));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        selectSource: !1,
                        guildId: t,
                        analyticsLocation: _.Sbl.ACTIVITY_PANEL
                    });
            });
        }, [E, S]),
        k =
            (null != y || null == A || (0, c.R)()) && (N || b)
                ? (N ? ((t = !1), (r = D), (d = o.g5r), (Z = v.intl.string(v.t.S5anIS))) : j ? ((t = !1), (r = G), (d = o.hGI), (Z = null != y ? v.intl.formatToPlainString(v.t.AB5gT0, { game: y.name }) : v.intl.string(v.t.FeUKeH))) : ((t = !0), (r = null), (d = o.hGI), (Z = null != E && (0, m.vd)(E.type) ? v.intl.string(v.t.uQn9Bw) : null != S ? v.intl.string(v.t.fBXEoK) : v.intl.string(v.t.n3feND))),
                  (0, i.jsx)('div', {
                      className: C.panelButtonContainer,
                      children: (0, i.jsx)(f.Z, {
                          tooltipText: Z,
                          disabled: t,
                          onClick: r,
                          icon: d
                      })
                  }))
                : null,
        B =
            R && null == A
                ? (0, i.jsx)(f.Z, {
                      tooltipText: v.intl.string(v.t['hC/Ze3']),
                      onClick: L,
                      icon: o.ejJ
                  })
                : null,
        O =
            null == A || null == E
                ? null
                : (0, i.jsx)(f.Z, {
                      tooltipText: v.intl.string(v.t['R/FK4O']),
                      onClick: M(A.applicationId, A.location),
                      icon: o.PBZ
                  }),
        U = null == I ? null : (0, i.jsx)(h.Z, {});
    return null == k && null == B && null == O
        ? null
        : (0, i.jsxs)('div', {
              className: C.actions,
              children: [k, B, null != O ? O : U]
          });
});
