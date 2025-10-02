n.d(t, { Z: () => D }), n(388685);
var i = n(951288),
    r = n(120356),
    l = n.n(r),
    o = n(481060),
    a = n(765250),
    s = n(13245),
    u = n(872810),
    c = n(700582),
    d = n(812206),
    p = n(358221),
    h = n(594190),
    f = n(925329),
    m = n(352978),
    g = n(592125),
    O = n(77498),
    y = n(355863),
    E = n(594174),
    v = n(5192),
    b = n(444295),
    S = n(32300),
    x = n(1226),
    j = n(631734),
    I = n(620954),
    C = n(987650),
    Z = n(981631),
    w = n(388032),
    N = n(700460);
function T(e) {
    let { user: t, application: n, runningGame: r } = e;
    return null != n || null != r
        ? (0, i.jsx)("div", {
              className: N.avatarWrapper,
              children: (0, i.jsx)(o.aRk, {
                  lowerBadge: (0, i.jsx)("div", {
                      className: N.gameIconMask,
                      children:
                          null != n || null != r
                              ? (0, i.jsx)(f.Z, {
                                    game: n,
                                    pid: null == r ? void 0 : r.pid,
                                    size: f.A.XXSMALL,
                                    className: N.gameIcon,
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
                      size: o.EFr.SIZE_40,
                  }),
              }),
          })
        : (0, i.jsx)(c.Z, {
              user: t,
              "aria-hidden": !0,
              size: o.EFr.SIZE_40,
          });
}
function _(e) {
    let { user: t, application: n, runningGame: r, username: a, onWatchClick: s, buttonColor: u } = e;
    return (0, i.jsxs)("div", {
        className: N.container,
        children: [
            (0, i.jsx)("div", {
                className: N.avatarContainer,
                children: (0, i.jsx)(T, {
                    user: t,
                    application: n,
                    runningGame: r,
                }),
            }),
            (0, i.jsx)("div", {
                className: l()(N.body, N.singleLineBody),
                children: (0, i.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    color: "interactive-normal",
                    className: N.bodyText,
                    children: w.intl.format(w.t.vTPX29, { username: a }),
                }),
            }),
            (0, i.jsx)("div", {
                className: N.watchButtonContainer,
                children: (0, i.jsx)(o.P3F, {
                    onClick: s,
                    className: l()(N.watchButton, "green" === u && N.greenButton, "gray" === u && N.grayButton),
                    children: (0, i.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "always-white",
                        tag: "span",
                        children: w.intl.string(w.t["xl+bTE"]),
                    }),
                }),
            }),
        ],
    });
}
function P(e) {
    let { user: t, application: n, runningGame: r, username: a, onWatchClick: s, iconColor: u } = e;
    return (0, i.jsxs)("div", {
        className: N.container,
        children: [
            (0, i.jsx)("div", {
                className: N.avatarContainer,
                children: (0, i.jsx)(T, {
                    user: t,
                    application: n,
                    runningGame: r,
                }),
            }),
            (0, i.jsx)("div", {
                className: l()(N.body, N.singleLineBody),
                children: (0, i.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    color: "interactive-normal",
                    className: N.bodyText,
                    children: w.intl.format(w.t.NmEczs, { username: a }),
                }),
            }),
            (0, i.jsx)("div", { className: N.buttonDivider }),
            (0, i.jsx)("div", {
                className: N.watchButtonContainer,
                children: (0, i.jsx)(o.P3F, {
                    onClick: s,
                    className: N.watchIconButton,
                    children: (0, i.jsx)(j.a, {
                        size: "sm",
                        color: "green" === u ? "white" : o.TVs.colors.INTERACTIVE_ACTIVE.css,
                    }),
                }),
            }),
        ],
    });
}
function D(e, t, n) {
    var r, l;
    let o = E.default.getUser(e);
    if (null == o) return null;
    let { designVariant: c } = (0, S.lj)("OverlayV3StreamWatchNudge"),
        f = null == n ? void 0 : n.application_id,
        j = g.Z.getChannel(t),
        w = null != f ? d.Z.getApplication(f) : null,
        N = null != f ? O.Z.getDetectableGame(f) : null,
        T = null != f ? h.ZP.getRunningGames().find((e) => e.id === f) : null,
        D =
            null != (l = null != (r = null == T ? void 0 : T.name) ? r : null == N ? void 0 : N.name)
                ? l
                : null == w
                  ? void 0
                  : w.name,
        A = (0, v.oY)(null == j ? void 0 : j.guild_id, null == j ? void 0 : j.id, o),
        { trackView: R, trackClick: k } = (0, I.R)(C.n0.StreamWatchNudge, {
            notif_type: C.n0.StreamWatchNudge,
            notif_user_id: o.id,
            activity_type: null == n ? void 0 : n.type,
            activity_name: null != D ? D : null == n ? void 0 : n.name,
        });
    return {
        body: (() => {
            switch (c) {
                case S.RD.GREEN_BUTTON_WITH_TEXT:
                    return (0, i.jsx)(_, {
                        user: o,
                        application: w,
                        runningGame: T,
                        username: A,
                        buttonColor: "green",
                    });
                case S.RD.GRAY_BUTTON_WITH_TEXT:
                    return (0, i.jsx)(_, {
                        user: o,
                        application: w,
                        runningGame: T,
                        username: A,
                        buttonColor: "gray",
                    });
                case S.RD.SINGLE_ICON_BUTTON:
                    return (0, i.jsx)(P, {
                        user: o,
                        application: w,
                        runningGame: T,
                        username: A,
                        iconColor: "white",
                    });
            }
        })(),
        maxBodyLines: 1,
        onNotificationClick: (n, i) => {
            k("overlay-watch-stream");
            let [r] = y.Z.getWidgetsByType(Z.Odu.GO_LIVE),
                l = p.Z.getStreamParticipants(t).find((t) => t.user.id === e);
            null != r &&
                null != l &&
                ((0, x.gI)(l.stream, m.L.COVER),
                (0, u.rn)(l.stream, {
                    forceMultiple: !0,
                    noFocus: !0,
                }),
                (0, a.xh)(r.id, { forcedPinnedState: !0 }),
                (0, a.n6)(r.id),
                (0, b.Ws)(Z.Odu.GO_LIVE, {
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
            k("dismiss"), s.Z.updateNotificationStatus(t);
        },
    };
}
