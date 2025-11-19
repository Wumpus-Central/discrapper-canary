n.d(t, { Z: () => k }), n(388685);
var i = n(54381),
    r = n(120356),
    l = n.n(r),
    o = n(481060),
    a = n(765250),
    s = n(13245),
    c = n(872810),
    u = n(700582),
    d = n(812206),
    h = n(358221),
    p = n(594190),
    f = n(925329),
    m = n(352978),
    g = n(592125),
    y = n(77498),
    O = n(355863),
    v = n(594174),
    E = n(5192),
    b = n(444295),
    _ = n(32300),
    S = n(1226),
    x = n(624864),
    I = n(631734),
    C = n(620954),
    j = n(987650),
    N = n(981631),
    Z = n(388032),
    w = n(796212);
function T(e) {
    let { user: t, application: n, runningGame: r } = e;
    return null != n || null != r
        ? (0, i.jsx)("div", {
              className: w.avatarWrapper,
              children: (0, i.jsx)(o.aRk, {
                  lowerBadge: (0, i.jsx)("div", {
                      className: w.gameIconMask,
                      children:
                          null != n || null != r
                              ? (0, i.jsx)(f.Z, {
                                    game: n,
                                    pid: null == r ? void 0 : r.pid,
                                    size: f.A.XXSMALL,
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
                      size: o.EFr.SIZE_40,
                  }),
              }),
          })
        : (0, i.jsx)(u.Z, {
              user: t,
              "aria-hidden": !0,
              size: o.EFr.SIZE_40,
          });
}
function P(e) {
    let { user: t, application: n, runningGame: r, username: a, onWatchClick: s, buttonColor: c } = e;
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
                className: l()(w.body, w.singleLineBody),
                children: (0, i.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    color: "interactive-normal",
                    className: w.bodyText,
                    children: Z.intl.format(Z.t.vTPX23, { username: a }),
                }),
            }),
            (0, i.jsx)("div", {
                className: w.watchButtonContainer,
                children: (0, i.jsx)(o.P3F, {
                    onClick: s,
                    className: l()(w.watchButton, "green" === c && w.greenButton, "gray" === c && w.grayButton),
                    children: (0, i.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "always-white",
                        tag: "span",
                        children: Z.intl.string(Z.t["xl+bTG"]),
                    }),
                }),
            }),
        ],
    });
}
function A(e) {
    let { user: t, application: n, runningGame: r, username: a, onWatchClick: s, iconColor: c } = e;
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
                className: l()(w.body, w.singleLineBody),
                children: (0, i.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    color: "interactive-normal",
                    className: w.bodyText,
                    children: Z.intl.format(Z.t.NmEczg, { username: a }),
                }),
            }),
            (0, i.jsx)("div", { className: w.buttonDivider }),
            (0, i.jsx)("div", {
                className: w.watchButtonContainer,
                children: (0, i.jsx)(o.P3F, {
                    onClick: s,
                    className: w.watchIconButton,
                    children: (0, i.jsx)(I.a, {
                        size: "sm",
                        color: "green" === c ? "white" : o.TVs.colors.INTERACTIVE_ACTIVE.css,
                    }),
                }),
            }),
        ],
    });
}
function k(e, t, n) {
    var r, l;
    if (x.Z.isNotificationDisabled(j.n0.StreamWatchNudge)) return null;
    let o = v.default.getUser(e);
    if (null == o) return null;
    let { designVariant: u } = (0, _.lj)("OverlayV3StreamWatchNudge"),
        f = null == n ? void 0 : n.application_id,
        I = g.Z.getChannel(t),
        Z = null != f ? d.Z.getApplication(f) : null,
        w = null != f ? y.Z.getDetectableGame(f) : null,
        T = null != f ? p.ZP.getRunningGames().find((e) => e.id === f) : null,
        k =
            null != (l = null != (r = null == T ? void 0 : T.name) ? r : null == w ? void 0 : w.name)
                ? l
                : null == Z
                  ? void 0
                  : Z.name,
        D = (0, E.oY)(null == I ? void 0 : I.guild_id, null == I ? void 0 : I.id, o),
        { trackView: R, trackClick: L } = (0, C.Rg)(j.n0.StreamWatchNudge, {
            notif_type: j.n0.StreamWatchNudge,
            notif_user_id: o.id,
            activity_type: null == n ? void 0 : n.type,
            activity_name: null != k ? k : null == n ? void 0 : n.name,
        });
    return {
        body: (() => {
            switch (u) {
                case _.RD.GREEN_BUTTON_WITH_TEXT:
                    return (0, i.jsx)(P, {
                        user: o,
                        application: Z,
                        runningGame: T,
                        username: D,
                        buttonColor: "green",
                    });
                case _.RD.GRAY_BUTTON_WITH_TEXT:
                    return (0, i.jsx)(P, {
                        user: o,
                        application: Z,
                        runningGame: T,
                        username: D,
                        buttonColor: "gray",
                    });
                case _.RD.SINGLE_ICON_BUTTON:
                    return (0, i.jsx)(A, {
                        user: o,
                        application: Z,
                        runningGame: T,
                        username: D,
                        iconColor: "white",
                    });
            }
        })(),
        maxBodyLines: 1,
        onNotificationClick: (n, i) => {
            L("overlay-watch-stream");
            let [r] = O.Z.getWidgetsByType(N.Odu.GO_LIVE),
                l = h.Z.getStreamParticipants(t).find((t) => t.user.id === e);
            null != r &&
                null != l &&
                ((0, S.gI)(l.stream, m.L.COVER),
                (0, c.rn)(l.stream, {
                    forceMultiple: !0,
                    noFocus: !0,
                }),
                (0, a.xh)(r.id, { forcedPinnedState: !0 }),
                (0, a.n6)(r.id),
                (0, b.Ws)(N.Odu.GO_LIVE, {
                    type: b.Qu.GO_LIVE,
                    value: b.bk.ACCEPT_REQUEST,
                    userId: l.user.id,
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
