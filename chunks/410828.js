n.d(t, { Pb: () => P, Ti: () => O, di: () => M, nM: () => R, nd: () => L });
var i = n(477900);
n(582128);
var l = n(17928),
    a = n(661531),
    s = n(297264),
    r = n(831544),
    o = n(834730),
    c = n(177953),
    d = n(367513),
    u = n(793574),
    h = n(688810),
    p = n(198052),
    m = n(384059),
    A = n(715989),
    f = n(204651),
    x = n(747376),
    g = n(113783),
    C = n(518769),
    j = n(776781),
    y = n(446600),
    I = n(571909),
    N = n(623413),
    E = n(717965),
    v = n(895903),
    b = n(289438),
    S = n(105292),
    _ = n(925556),
    T = n(853325);
function R(e) {
    let { channel: t, inCall: n, hasConnectPermission: l, hasSpeakers: a, children: r } = e,
        { isOnStartStageScreen: o } = (0, I.Ay)();
    (0, I.vI)(t);
    let c = (0, g.E5)(t.id, C.ip.SPEAKER);
    return o
        ? (0, i.jsx)(v.A, {
              channel: t,
              onContinueClick: () => {
                  ((0, I.ek)(!1), n || (0, x.cy)(t));
              },
          })
        : n
          ? a
              ? r
              : (0, i.jsxs)("div", {
                    className: T.kL,
                    children: [
                        (0, i.jsx)(A.A, {}),
                        (0, i.jsx)(s.D, {
                            className: _.uQ,
                            variant: "heading-lg/normal",
                            children: S.intl.string(b.default["P63Z/o"]),
                        }),
                    ],
                })
          : (0, i.jsx)(N.A, { participants: c, channel: t, hasConnectPermission: l });
}
function O(e) {
    let { channel: t } = e,
        { analyticsLocations: n } = (0, h.Ay)(u.A.VOICE_CONTROL_TRAY),
        { isOnStartStageScreen: l } = (0, I.Ay)();
    return (0, i.jsx)(h.f5, { value: n, children: (0, i.jsx)(E.A, { channel: t, isOnStartStageScreen: l }) });
}
function L(e) {
    return (0, l.bG)([y.A], () => (e.isGuildStageVoice() ? y.A.getStageInstanceByChannel(e.id)?.topic : void 0), [e]);
}
function P(e) {
    let { channel: t } = e,
        n = (0, g.uy)(t.id),
        l = (0, g.zy)(t.id, C.ip.AUDIENCE);
    return (0, i.jsxs)("div", {
        className: _.Qf,
        children: [
            (0, i.jsx)(r.MicrophoneIcon, { size: "xs", color: a.A.colors.TEXT_MUTED }),
            (0, i.jsx)(o.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: S.intl.format(S.t.chmM9N, { count: n }),
            }),
            (0, i.jsx)(c.n, { size: "xs", color: a.A.colors.TEXT_MUTED }),
            (0, i.jsx)(o.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: S.intl.format(S.t["+v2pN2"], { count: l }),
            }),
        ],
    });
}
function M(e) {
    let { channel: t, className: n } = e,
        { parentAnalyticsLocation: a } = (0, h.Ay)(),
        s = (0, l.bG)([p.A], () => p.A.getStageAudienceSidebarOpen(t.id), [t.id]),
        r = (0, j.Ni)(t.id),
        u = (0, g.zy)(t.id, C.ip.REQUESTED_TO_SPEAK_ONLY),
        A = r ? u : 0,
        x = S.intl.string(b.default.Ds8IST);
    return (
        s
            ? (x = S.intl.string(b.default["ZSmz+r"]))
            : A > 0 && (x = S.intl.formatToPlainString(b.default.IQmRBE, { count: A })),
        (0, i.jsx)(f.A, {
            className: n,
            label: x,
            isActive: s,
            tooltipPosition: "bottom",
            iconComponent: (e) => {
                let { className: t } = e;
                return (0, i.jsxs)("div", {
                    className: _.Sl,
                    children: [
                        (0, i.jsx)(c.n, { className: t, color: "currentColor" }),
                        A > 0
                            ? (0, i.jsx)(o.E, {
                                  className: _.gC,
                                  variant: "text-xs/semibold",
                                  color: "none",
                                  children: A > 99 ? "99+" : A,
                              })
                            : null,
                    ],
                });
            },
            onClick: () => {
                ((0, m.X)(a, m.O.OPEN_REQUEST_TO_SPEAK_SIDEBAR, !s), d.A.updateStageAudienceSidebarOpen(t.id, !s));
            },
        })
    );
}
