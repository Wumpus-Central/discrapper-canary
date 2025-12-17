n.d(t, { Z: () => k }), n(388685);
var i = n(54381),
    r = n(120356),
    a = n.n(r),
    l = n(481060),
    o = n(765250),
    s = n(13245),
    c = n(872810),
    u = n(700582),
    d = n(812206),
    f = n(358221),
    h = n(594190),
    p = n(925329),
    m = n(352978),
    g = n(592125),
    b = n(77498),
    y = n(355863),
    O = n(594174),
    v = n(5192),
    E = n(444295),
    S = n(32300),
    x = n(1226),
    I = n(624864),
    C = n(631734),
    j = n(620954),
    _ = n(987650),
    Z = n(981631),
    N = n(388032),
    w = n(612118);
function T(e) {
    let { user: t, application: n, runningGame: r } = e;
    return null != n || null != r
        ? (0, i.jsx)("div", {
              className: w.avatarWrapper,
              children: (0, i.jsx)(l.aRk, {
                  lowerBadge: (0, i.jsx)("div", {
                      className: w.gameIconMask,
                      children:
                          null != n || null != r
                              ? (0, i.jsx)(p.Z, {
                                    game: n,
                                    pid: null == r ? void 0 : r.pid,
                                    size: p.A.XXSMALL,
                                    className: w.gameIcon,
                                })
                              : null,
                  }),
                  lowerBadgeSize: {
                      width: 16,
                      height: 16,
                  },
                  children: (0, i.jsx)(u.Z, {
                      user: t,
                      "aria-hidden": !0,
                      size: l.EFr.SIZE_40,
                  }),
              }),
          })
        : (0, i.jsx)(u.Z, {
              user: t,
              "aria-hidden": !0,
              size: l.EFr.SIZE_40,
          });
}
function P(e) {
    let { user: t, application: n, runningGame: r, username: o, onWatchClick: s, buttonColor: c } = e;
    return (0, i.jsxs)("div", {
        className: w.container,
        children: [
            (0, i.jsx)("div", {
                className: w.avatarContainer,
                children: (0, i.jsx)(T, {
                    user: t,
                    application: n,
                    runningGame: r,
                }),
            }),
            (0, i.jsx)("div", {
                className: a()(w.body, w.singleLineBody),
                children: (0, i.jsx)(l.Text, {
                    variant: "text-sm/medium",
                    color: "interactive-text-default",
                    className: w.bodyText,
                    children: N.intl.format(N.t.vTPX23, { username: o }),
                }),
            }),
            (0, i.jsx)("div", {
                className: w.watchButtonContainer,
                children: (0, i.jsx)(l.P3F, {
                    onClick: s,
                    className: a()(w.watchButton, "green" === c && w.greenButton, "gray" === c && w.grayButton),
                    children: (0, i.jsx)(l.Text, {
                        variant: "text-sm/medium",
                        color: "always-white",
                        tag: "span",
                        children: N.intl.string(N.t["xl+bTG"]),
                    }),
                }),
            }),
        ],
    });
}
function A(e) {
    let { user: t, application: n, runningGame: r, username: o, onWatchClick: s, iconColor: c } = e;
    return (0, i.jsxs)("div", {
        className: w.container,
        children: [
            (0, i.jsx)("div", {
                className: w.avatarContainer,
                children: (0, i.jsx)(T, {
                    user: t,
                    application: n,
                    runningGame: r,
                }),
            }),
            (0, i.jsx)("div", {
                className: a()(w.body, w.singleLineBody),
                children: (0, i.jsx)(l.Text, {
                    variant: "text-sm/medium",
                    color: "interactive-text-default",
                    className: w.bodyText,
                    children: N.intl.format(N.t.NmEczg, { username: o }),
                }),
            }),
            (0, i.jsx)("div", { className: w.buttonDivider }),
            (0, i.jsx)("div", {
                className: w.watchButtonContainer,
                children: (0, i.jsx)(l.P3F, {
                    onClick: s,
                    className: w.watchIconButton,
                    children: (0, i.jsx)(C.a, {
                        size: "sm",
                        color: "green" === c ? "white" : l.TVs.colors.INTERACTIVE_TEXT_ACTIVE.css,
                    }),
                }),
            }),
        ],
    });
}
function k(e, t, n) {
    var r, a;
    if (I.Z.isNotificationDisabled(_.n0.StreamWatchNudge)) return null;
    let l = O.default.getUser(e);
    if (null == l) return null;
    let { designVariant: u } = (0, S.lj)("OverlayV3StreamWatchNudge"),
        p = null == n ? void 0 : n.application_id,
        C = g.Z.getChannel(t),
        N = null != p ? d.Z.getApplication(p) : null,
        w = null != p ? b.Z.getDetectableGame(p) : null,
        T = null != p ? h.ZP.getRunningGames().find((e) => e.id === p) : null,
        k =
            null != (a = null != (r = null == T ? void 0 : T.name) ? r : null == w ? void 0 : w.name)
                ? a
                : null == N
                  ? void 0
                  : N.name,
        D = (0, v.oY)(null == C ? void 0 : C.guild_id, null == C ? void 0 : C.id, l),
        { trackView: R, trackClick: L } = (0, j.Rg)(_.n0.StreamWatchNudge, {
            notif_type: _.n0.StreamWatchNudge,
            notif_user_id: l.id,
            activity_type: null == n ? void 0 : n.type,
            activity_name: null != k ? k : null == n ? void 0 : n.name,
        });
    return {
        body: (() => {
            switch (u) {
                case S.RD.GREEN_BUTTON_WITH_TEXT:
                    return (0, i.jsx)(P, {
                        user: l,
                        application: N,
                        runningGame: T,
                        username: D,
                        buttonColor: "green",
                    });
                case S.RD.GRAY_BUTTON_WITH_TEXT:
                    return (0, i.jsx)(P, {
                        user: l,
                        application: N,
                        runningGame: T,
                        username: D,
                        buttonColor: "gray",
                    });
                case S.RD.SINGLE_ICON_BUTTON:
                    return (0, i.jsx)(A, {
                        user: l,
                        application: N,
                        runningGame: T,
                        username: D,
                        iconColor: "white",
                    });
            }
        })(),
        maxBodyLines: 1,
        onNotificationClick: (n, i) => {
            L("overlay-watch-stream");
            let [r] = y.Z.getWidgetsByType(Z.Odu.GO_LIVE),
                a = f.Z.getStreamParticipants(t).find((t) => t.user.id === e);
            null != r &&
                null != a &&
                ((0, x.gI)(a.stream, m.L.COVER),
                (0, c.rn)(a.stream, {
                    forceMultiple: !0,
                    noFocus: !0,
                }),
                (0, o.xh)(r.id, { forcedPinnedState: !0 }),
                (0, o.n6)(r.id),
                (0, E.Ws)(Z.Odu.GO_LIVE, {
                    type: E.Qu.GO_LIVE,
                    value: E.bk.ACCEPT_REQUEST,
                    userId: a.user.id,
                })),
                setTimeout(() => {
                    s.Z.updateNotificationStatus(i);
                }, 300);
        },
        onNotificationShow: () => {
            R();
        },
        onDismissClick: (e, t) => {
            L("dismiss"), s.Z.updateNotificationStatus(t);
        },
    };
}
