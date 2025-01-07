n.d(t, {
    J: function () {
        return _;
    },
    y: function () {
        return I;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(512722),
    a = n.n(r),
    o = n(481060),
    s = n(24124),
    c = n(636449),
    u = n(620662),
    d = n(513202),
    h = n(311352),
    p = n(803647),
    f = n(131704),
    m = n(626135),
    g = n(870569),
    v = n(981631),
    C = n(388032),
    x = n(272371);
function I(e, t, n) {
    return null != e && (null != n ? n.applicationId === e.id : null != t && t.application_id === e.id && t.type === v.IIU.PLAYING && (0, u.Z)(t, v.xjy.JOIN));
}
let _ = l.memo(function (e) {
    let t,
        r,
        u,
        _,
        { stream: Z, canGoLive: b, guildId: S, isStreaming: N, channel: E, canStream: y, runningGame: j, embeddedActivity: T, activity: P, application: A, analyticsContext: w } = e,
        M = I(A, P, T),
        L = l.useCallback(() => {
            a()(null != P, 'Received null activity'),
                m.default.track(v.rMx.OPEN_MODAL, {
                    type: 'Send Join Invite',
                    application_id: P.application_id,
                    location: w.location
                }),
                (0, s.h7)(P, !1);
        }, [P, w]),
        R = l.useCallback(
            (e, t) => () => {
                d.Z.leaveActivity({
                    location: t,
                    applicationId: e,
                    showFeedback: !0
                });
            },
            []
        ),
        D = l.useCallback(() => {
            (0, p.Z)(Z);
        }, [Z]),
        G = l.useCallback(() => {
            let e = null != E && (0, f.vd)(E.type) ? E : null,
                t = null != e ? e.getGuildId() : S;
            (0, o.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('93382'), n.e('79477'), n.e('46298')]).then(n.bind(n, 60594));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        selectSource: !1,
                        guildId: t,
                        analyticsLocation: v.Sbl.ACTIVITY_PANEL
                    });
            });
        }, [E, S]);
    let B =
            (null != j || null == T || (0, c.R)()) && (N || b)
                ? (N ? ((t = !1), (r = D), (u = o.ScreenXIcon), (_ = C.intl.string(C.t.S5anIS))) : y ? ((t = !1), (r = G), (u = o.ScreenArrowIcon), (_ = null != j ? C.intl.formatToPlainString(C.t.AB5gT0, { game: j.name }) : C.intl.string(C.t.FeUKeH))) : ((t = !0), (r = null), (u = o.ScreenArrowIcon), (_ = null != E && (0, f.vd)(E.type) ? C.intl.string(C.t.uQn9Bw) : null != S ? C.intl.string(C.t.fBXEoK) : C.intl.string(C.t.n3feND))),
                  (0, i.jsx)('div', {
                      className: x.panelButtonContainer,
                      children: (0, i.jsx)(g.Z, {
                          tooltipText: _,
                          disabled: t,
                          onClick: r,
                          icon: u
                      })
                  }))
                : null,
        k =
            M && null == T
                ? (0, i.jsx)(g.Z, {
                      tooltipText: C.intl.string(C.t['hC/Ze3']),
                      onClick: L,
                      icon: o.GroupPlusIcon
                  })
                : null,
        U =
            null == T || null == E
                ? null
                : (0, i.jsx)(g.Z, {
                      tooltipText: C.intl.string(C.t['R/FK4O']),
                      onClick: R(T.applicationId, T.location),
                      icon: o.DoorExitIcon
                  }),
        O = null == Z ? null : (0, i.jsx)(h.Z, {});
    return null == B && null == k && null == U
        ? null
        : (0, i.jsxs)('div', {
              className: x.actions,
              children: [B, k, null != U ? U : O]
          });
});
