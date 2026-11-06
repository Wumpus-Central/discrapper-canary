var i = n(477900);
n(582128);
var l = n(855986),
    a = n(646514),
    s = n(534514),
    r = n(831544),
    o = n(834730),
    c = n(177953),
    d = n(367513),
    u = n(793574),
    h = n(688810),
    p = n(628983),
    m = n(384059),
    A = n(715989),
    f = n(693409),
    g = n(129095),
    x = n(113783),
    C = n(597886),
    y = n(776781),
    I = n(446600),
    j = n(571909),
    v = n(623413),
    N = n(717965),
    E = n(895903),
    b = n(383899),
    S = n(792996),
    T = n(925556),
    _ = n(853325);
n.d(
    t,
    {},
    {
        Pb: function (e) {
            let { channel: t } = e,
                n = (0, x.uy)(t.id),
                l = (0, x.zy)(t.id, C.ip.AUDIENCE);
            return (0, i.jsxs)("div", {
                className: T.Qf,
                children: [
                    (0, i.jsx)(r.MicrophoneIcon, { size: "xs", color: a.A.colors.TEXT_MUTED }),
                    (0, i.jsx)(o.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: S.intl.format(S.t.chmM9N, { count: n }),
                    }),
                    (0, i.jsx)(c.GroupIcon, { size: "xs", color: a.A.colors.TEXT_MUTED }),
                    (0, i.jsx)(o.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: S.intl.format(S.t["+v2pN2"], { count: l }),
                    }),
                ],
            });
        },
        Ti: function (e) {
            let { channel: t } = e,
                { analyticsLocations: n } = (0, h.Ay)(u.A.VOICE_CONTROL_TRAY),
                { isOnStartStageScreen: l } = (0, j.Ay)();
            return (0, i.jsx)(h.f5, { value: n, children: (0, i.jsx)(N.A, { channel: t, isOnStartStageScreen: l }) });
        },
        di: function (e) {
            let { channel: t, className: n } = e,
                { parentAnalyticsLocation: a } = (0, h.Ay)(),
                s = (0, l.bG)([p.A], () => p.A.getStageAudienceSidebarOpen(t.id), [t.id]),
                r = (0, y.Ni)(t.id),
                u = (0, x.zy)(t.id, C.ip.REQUESTED_TO_SPEAK_ONLY),
                A = r ? u : 0,
                g = S.intl.string(b.default.Ds8IST);
            return (
                s
                    ? (g = S.intl.string(b.default["ZSmz+r"]))
                    : A > 0 && (g = S.intl.formatToPlainString(b.default.IQmRBE, { count: A })),
                (0, i.jsx)(f.A, {
                    className: n,
                    label: g,
                    isActive: s,
                    tooltipPosition: "bottom",
                    iconComponent: (e) => {
                        let { className: t } = e;
                        return (0, i.jsxs)("div", {
                            className: T.Sl,
                            children: [
                                (0, i.jsx)(c.GroupIcon, { className: t, color: "currentColor" }),
                                A > 0
                                    ? (0, i.jsx)(o.E, {
                                          className: T.gC,
                                          variant: "body-xs/semibold",
                                          color: "none",
                                          children: A > 99 ? "99+" : A,
                                      })
                                    : null,
                            ],
                        });
                    },
                    onClick: () => {
                        ((0, m.XJ)(a, m.OP.OPEN_REQUEST_TO_SPEAK_SIDEBAR, !s),
                            d.A.updateStageAudienceSidebarOpen(t.id, !s));
                    },
                })
            );
        },
        nM: function (e) {
            let { channel: t, inCall: n, hasConnectPermission: l, hasSpeakers: a, children: r } = e,
                { isOnStartStageScreen: o } = (0, j.Ay)();
            (0, j.vI)(t);
            let c = (0, x.E5)(t.id, C.ip.SPEAKER);
            return o
                ? (0, i.jsx)(E.A, {
                      channel: t,
                      onContinueClick: () => {
                          ((0, j.ek)(!1), n || (0, g.cy)(t));
                      },
                  })
                : n
                  ? a
                      ? r
                      : (0, i.jsxs)("div", {
                            className: _.kL,
                            children: [
                                (0, i.jsx)(A.A, {}),
                                (0, i.jsx)(s.D, {
                                    className: T.uQ,
                                    variant: "heading-lg/medium",
                                    children: S.intl.string(b.default["P63Z/o"]),
                                }),
                            ],
                        })
                  : (0, i.jsx)(v.A, { participants: c, channel: t, hasConnectPermission: l });
        },
        nd: function (e) {
            return (0, l.bG)(
                [I.A],
                () => (e.isGuildStageVoice() ? I.A.getStageInstanceByChannel(e.id)?.topic : void 0),
                [e],
            );
        },
    },
);
