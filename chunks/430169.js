n.d(t, { Z: () => A }), n(388685);
var i = n(951288),
    r = n(120356),
    l = n.n(r),
    o = n(481060),
    a = n(765250),
    s = n(13245),
    c = n(872810),
    u = n(700582),
    d = n(812206),
    p = n(358221),
    h = n(594190),
    f = n(925329),
    m = n(352978),
    g = n(592125),
    y = n(77498),
    O = n(355863),
    v = n(594174),
    b = n(5192),
    E = n(444295),
    _ = n(32300),
    x = n(1226),
    S = n(631734),
    I = n(620954),
    C = n(987650),
    j = n(981631),
    w = n(388032),
    N = n(796212);
function Z(e) {
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
function T(e) {
    let { user: t, application: n, runningGame: r, username: a, onWatchClick: s, buttonColor: c } = e;
    return (0, i.jsxs)("div", {
        className: N.container,
        children: [
            (0, i.jsx)("div", {
                className: N.avatarContainer,
                children: (0, i.jsx)(Z, {
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
                    className: l()(N.watchButton, "green" === c && N.greenButton, "gray" === c && N.grayButton),
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
    let { user: t, application: n, runningGame: r, username: a, onWatchClick: s, iconColor: c } = e;
    return (0, i.jsxs)("div", {
        className: N.container,
        children: [
            (0, i.jsx)("div", {
                className: N.avatarContainer,
                children: (0, i.jsx)(Z, {
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
                    children: (0, i.jsx)(S.a, {
                        size: "sm",
                        color: "green" === c ? "white" : o.TVs.colors.INTERACTIVE_ACTIVE.css,
                    }),
                }),
            }),
        ],
    });
}
function A(e, t, n) {
    var r, l;
    let o = v.default.getUser(e);
    if (null == o) return null;
    let { designVariant: u } = (0, _.lj)("OverlayV3StreamWatchNudge"),
        f = null == n ? void 0 : n.application_id,
        S = g.Z.getChannel(t),
        w = null != f ? d.Z.getApplication(f) : null,
        N = null != f ? y.Z.getDetectableGame(f) : null,
        Z = null != f ? h.ZP.getRunningGames().find((e) => e.id === f) : null,
        A =
            null != (l = null != (r = null == Z ? void 0 : Z.name) ? r : null == N ? void 0 : N.name)
                ? l
                : null == w
                  ? void 0
                  : w.name,
        D = (0, b.oY)(null == S ? void 0 : S.guild_id, null == S ? void 0 : S.id, o),
        { trackView: k, trackClick: R } = (0, I.R)(C.n0.StreamWatchNudge, {
            notif_type: C.n0.StreamWatchNudge,
            notif_user_id: o.id,
            activity_type: null == n ? void 0 : n.type,
            activity_name: null != A ? A : null == n ? void 0 : n.name,
        });
    return {
        body: (() => {
            switch (u) {
                case _.RD.GREEN_BUTTON_WITH_TEXT:
                    return (0, i.jsx)(T, {
                        user: o,
                        application: w,
                        runningGame: Z,
                        username: D,
                        buttonColor: "green",
                    });
                case _.RD.GRAY_BUTTON_WITH_TEXT:
                    return (0, i.jsx)(T, {
                        user: o,
                        application: w,
                        runningGame: Z,
                        username: D,
                        buttonColor: "gray",
                    });
                case _.RD.SINGLE_ICON_BUTTON:
                    return (0, i.jsx)(P, {
                        user: o,
                        application: w,
                        runningGame: Z,
                        username: D,
                        iconColor: "white",
                    });
            }
        })(),
        maxBodyLines: 1,
        onNotificationClick: (n, i) => {
            R("overlay-watch-stream");
            let [r] = O.Z.getWidgetsByType(j.Odu.GO_LIVE),
                l = p.Z.getStreamParticipants(t).find((t) => t.user.id === e);
            null != r &&
                null != l &&
                ((0, x.gI)(l.stream, m.L.COVER),
                (0, c.rn)(l.stream, {
                    forceMultiple: !0,
                    noFocus: !0,
                }),
                (0, a.xh)(r.id, !0),
                (0, a.n6)(r.id),
                (0, E.Ws)(j.Odu.GO_LIVE, {
                    type: E.Qu.GO_LIVE,
                    value: E.bk.ACCEPT_REQUEST,
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
            R("dismiss"), s.Z.updateNotificationStatus(t);
        },
    };
}
