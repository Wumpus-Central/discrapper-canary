n.d(t, { Z: () => D }), n(388685);
var i = n(54381),
    r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(765250),
    s = n(13245),
    u = n(872810),
    c = n(700582),
    d = n(812206),
    h = n(358221),
    p = n(594190),
    f = n(925329),
    m = n(352978),
    g = n(592125),
    y = n(77498),
    O = n(355863),
    E = n(594174),
    v = n(5192),
    S = n(444295),
    b = n(32300),
    x = n(1226),
    j = n(624864),
    I = n(631734),
    C = n(620954),
    Z = n(987650),
    N = n(981631),
    w = n(388032),
    T = n(796212);
function _(e) {
    let { user: t, application: n, runningGame: r } = e;
    return null != n || null != r
        ? (0, i.jsx)("div", {
              className: T.avatarWrapper,
              children: (0, i.jsx)(a.aRk, {
                  lowerBadge: (0, i.jsx)("div", {
                      className: T.gameIconMask,
                      children:
                          null != n || null != r
                              ? (0, i.jsx)(f.Z, {
                                    game: n,
                                    pid: null == r ? void 0 : r.pid,
                                    size: f.A.XXSMALL,
                                    className: T.gameIcon,
                                })
                              : null,
                  }),
                  lowerBadgeSize: {
                      width: 16,
                      height: 16,
                  },
                  children: (0, i.jsx)(c.Z, {
                      user: t,
                      "aria-hidden": !0,
                      size: a.EFr.SIZE_40,
                  }),
              }),
          })
        : (0, i.jsx)(c.Z, {
              user: t,
              "aria-hidden": !0,
              size: a.EFr.SIZE_40,
          });
}
function P(e) {
    let { user: t, application: n, runningGame: r, username: o, onWatchClick: s, buttonColor: u } = e;
    return (0, i.jsxs)("div", {
        className: T.container,
        children: [
            (0, i.jsx)("div", {
                className: T.avatarContainer,
                children: (0, i.jsx)(_, {
                    user: t,
                    application: n,
                    runningGame: r,
                }),
            }),
            (0, i.jsx)("div", {
                className: l()(T.body, T.singleLineBody),
                children: (0, i.jsx)(a.Text, {
                    variant: "text-sm/medium",
                    color: "interactive-normal",
                    className: T.bodyText,
                    children: w.intl.format(w.t.vTPX23, { username: o }),
                }),
            }),
            (0, i.jsx)("div", {
                className: T.watchButtonContainer,
                children: (0, i.jsx)(a.P3F, {
                    onClick: s,
                    className: l()(T.watchButton, "green" === u && T.greenButton, "gray" === u && T.grayButton),
                    children: (0, i.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        color: "always-white",
                        tag: "span",
                        children: w.intl.string(w.t["xl+bTG"]),
                    }),
                }),
            }),
        ],
    });
}
function A(e) {
    let { user: t, application: n, runningGame: r, username: o, onWatchClick: s, iconColor: u } = e;
    return (0, i.jsxs)("div", {
        className: T.container,
        children: [
            (0, i.jsx)("div", {
                className: T.avatarContainer,
                children: (0, i.jsx)(_, {
                    user: t,
                    application: n,
                    runningGame: r,
                }),
            }),
            (0, i.jsx)("div", {
                className: l()(T.body, T.singleLineBody),
                children: (0, i.jsx)(a.Text, {
                    variant: "text-sm/medium",
                    color: "interactive-normal",
                    className: T.bodyText,
                    children: w.intl.format(w.t.NmEczg, { username: o }),
                }),
            }),
            (0, i.jsx)("div", { className: T.buttonDivider }),
            (0, i.jsx)("div", {
                className: T.watchButtonContainer,
                children: (0, i.jsx)(a.P3F, {
                    onClick: s,
                    className: T.watchIconButton,
                    children: (0, i.jsx)(I.a, {
                        size: "sm",
                        color: "green" === u ? "white" : a.TVs.colors.INTERACTIVE_ACTIVE.css,
                    }),
                }),
            }),
        ],
    });
}
function D(e, t, n) {
    var r, l;
    if (j.Z.isNotificationDisabled(Z.n0.StreamWatchNudge)) return null;
    let a = E.default.getUser(e);
    if (null == a) return null;
    let { designVariant: c } = (0, b.lj)("OverlayV3StreamWatchNudge"),
        f = null == n ? void 0 : n.application_id,
        I = g.Z.getChannel(t),
        w = null != f ? d.Z.getApplication(f) : null,
        T = null != f ? y.Z.getDetectableGame(f) : null,
        _ = null != f ? p.ZP.getRunningGames().find((e) => e.id === f) : null,
        D =
            null != (l = null != (r = null == _ ? void 0 : _.name) ? r : null == T ? void 0 : T.name)
                ? l
                : null == w
                  ? void 0
                  : w.name,
        R = (0, v.oY)(null == I ? void 0 : I.guild_id, null == I ? void 0 : I.id, a),
        { trackView: k, trackClick: L } = (0, C.Rg)(Z.n0.StreamWatchNudge, {
            notif_type: Z.n0.StreamWatchNudge,
            notif_user_id: a.id,
            activity_type: null == n ? void 0 : n.type,
            activity_name: null != D ? D : null == n ? void 0 : n.name,
        });
    return {
        body: (() => {
            switch (c) {
                case b.RD.GREEN_BUTTON_WITH_TEXT:
                    return (0, i.jsx)(P, {
                        user: a,
                        application: w,
                        runningGame: _,
                        username: R,
                        buttonColor: "green",
                    });
                case b.RD.GRAY_BUTTON_WITH_TEXT:
                    return (0, i.jsx)(P, {
                        user: a,
                        application: w,
                        runningGame: _,
                        username: R,
                        buttonColor: "gray",
                    });
                case b.RD.SINGLE_ICON_BUTTON:
                    return (0, i.jsx)(A, {
                        user: a,
                        application: w,
                        runningGame: _,
                        username: R,
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
                ((0, x.gI)(l.stream, m.L.COVER),
                (0, u.rn)(l.stream, {
                    forceMultiple: !0,
                    noFocus: !0,
                }),
                (0, o.xh)(r.id, { forcedPinnedState: !0 }),
                (0, o.n6)(r.id),
                (0, S.Ws)(N.Odu.GO_LIVE, {
                    type: S.Qu.GO_LIVE,
                    value: S.bk.ACCEPT_REQUEST,
                    userId: l.user.id,
                })),
                setTimeout(() => {
                    s.Z.updateNotificationStatus(i);
                }, 300);
        },
        onNotificationShow: () => {
            k();
        },
        onDismissClick: (e, t) => {
            L("dismiss"), s.Z.updateNotificationStatus(t);
        },
    };
}
