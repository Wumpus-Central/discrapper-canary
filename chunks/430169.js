n.d(t, { Z: () => L }), n(388685);
var i = n(951288),
    r = n(120356),
    l = n.n(r),
    o = n(481060),
    a = n(570140),
    s = n(765250),
    c = n(872810),
    u = n(700582),
    d = n(812206),
    p = n(358221),
    h = n(594190),
    f = n(925329),
    m = n(569545),
    g = n(352978),
    y = n(199902),
    O = n(314897),
    v = n(592125),
    b = n(77498),
    E = n(355863),
    _ = n(959457),
    x = n(594174),
    S = n(5192),
    I = n(444295),
    C = n(32300),
    j = n(1226),
    w = n(631734),
    N = n(620954),
    Z = n(987650),
    T = n(981631),
    P = n(388032),
    A = n(796212);
function D(e) {
    let { user: t, application: n, runningGame: r } = e;
    return null != n || null != r
        ? (0, i.jsx)("div", {
              className: A.avatarWrapper,
              children: (0, i.jsx)(o.aRk, {
                  lowerBadge: (0, i.jsx)("div", {
                      className: A.gameIconMask,
                      children:
                          null != n || null != r
                              ? (0, i.jsx)(f.Z, {
                                    game: n,
                                    pid: null == r ? void 0 : r.pid,
                                    size: f.A.XXSMALL,
                                    className: A.gameIcon,
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
function k(e) {
    let { user: t, application: n, runningGame: r, username: a, onWatchClick: s, buttonColor: c } = e;
    return (0, i.jsxs)("div", {
        className: A.container,
        children: [
            (0, i.jsx)("div", {
                className: A.avatarContainer,
                children: (0, i.jsx)(D, {
                    user: t,
                    application: n,
                    runningGame: r,
                }),
            }),
            (0, i.jsx)("div", {
                className: l()(A.body, A.singleLineBody),
                children: (0, i.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    color: "interactive-normal",
                    className: A.bodyText,
                    children: P.intl.format(P.t.vTPX29, { username: a }),
                }),
            }),
            (0, i.jsx)("div", {
                className: A.watchButtonContainer,
                children: (0, i.jsx)(o.P3F, {
                    onClick: s,
                    className: l()(A.watchButton, "green" === c && A.greenButton, "gray" === c && A.grayButton),
                    children: (0, i.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "always-white",
                        tag: "span",
                        children: P.intl.string(P.t["xl+bTE"]),
                    }),
                }),
            }),
        ],
    });
}
function R(e) {
    let { user: t, application: n, runningGame: r, username: a, onWatchClick: s, iconColor: c } = e;
    return (0, i.jsxs)("div", {
        className: A.container,
        children: [
            (0, i.jsx)("div", {
                className: A.avatarContainer,
                children: (0, i.jsx)(D, {
                    user: t,
                    application: n,
                    runningGame: r,
                }),
            }),
            (0, i.jsx)("div", {
                className: l()(A.body, A.singleLineBody),
                children: (0, i.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    color: "interactive-normal",
                    className: A.bodyText,
                    children: P.intl.format(P.t.NmEczs, { username: a }),
                }),
            }),
            (0, i.jsx)("div", { className: A.buttonDivider }),
            (0, i.jsx)("div", {
                className: A.watchButtonContainer,
                children: (0, i.jsx)(o.P3F, {
                    onClick: s,
                    className: A.watchIconButton,
                    children: (0, i.jsx)(w.a, {
                        size: "sm",
                        color: "green" === c ? "white" : o.TVs.colors.INTERACTIVE_ACTIVE.css,
                    }),
                }),
            }),
        ],
    });
}
function L(e, t, n) {
    var r, l;
    let o = x.default.getUser(e);
    if (null == o) return null;
    let { designVariant: u } = (0, C.lj)("OverlayV3StreamWatchNudge"),
        f = null == n ? void 0 : n.application_id,
        w = v.Z.getChannel(t),
        P = null != f ? d.Z.getApplication(f) : null,
        A = null != f ? b.Z.getDetectableGame(f) : null,
        D = null != f ? h.ZP.getRunningGames().find((e) => e.id === f) : null,
        L =
            null != (l = null != (r = null == D ? void 0 : D.name) ? r : null == A ? void 0 : A.name)
                ? l
                : null == P
                  ? void 0
                  : P.name,
        M = (0, S.oY)(null == w ? void 0 : w.guild_id, null == w ? void 0 : w.id, o),
        V = (e) => null != e && _.Z.isUserConnected((0, m.V9)(e.stream), O.default.getId()),
        z = (e) => {
            if (null == e) return !1;
            let t = y.Z.getActiveStreamForStreamKey((0, m.V9)(e.stream));
            return (null == t ? void 0 : t.state) === T.jm8.ACTIVE;
        },
        U = () => p.Z.getStreamParticipants(t).find((t) => t.user.id === e),
        W = () => {
            B("overlay-watch-stream");
            let [e] = E.Z.getWidgetsByType(T.Odu.GO_LIVE),
                t = U();
            if (null == e || null == t) return;
            let n = (0, m.V9)(t.stream),
                i = V(t),
                r = z(t);
            if (i && r) return (0, s.n6)(e.id);
            let l = null;
            function o() {
                clearTimeout(l), a.Z.unsubscribe("STREAM_UPDATE", d), a.Z.unsubscribe("RTC_CONNECTION_STATE", p);
            }
            function u() {
                (0, s.n6)(e.id), o();
            }
            function d(e) {
                let { streamKey: t, paused: i } = e,
                    r = U();
                if (null != r) V(r) && !i && t === n && u();
            }
            function p(e) {
                let { state: t, streamKey: i } = e,
                    r = U();
                if (null == r) return;
                let l = t === T.hes.RTC_CONNECTED && i === n,
                    o = z(r);
                l && o && u();
            }
            a.Z.subscribe("RTC_CONNECTION_STATE", p),
                a.Z.subscribe("STREAM_UPDATE", d),
                (0, j.gI)(t.stream, g.L.COVER),
                (0, c.rn)(t.stream, {
                    forceMultiple: !0,
                    noFocus: !0,
                }),
                (l = setTimeout(() => {
                    o();
                }, 10000)),
                e.pinned || (0, s.xh)(e.id),
                (0, I.Ws)(T.Odu.GO_LIVE, {
                    type: I.Qu.GO_LIVE,
                    value: I.bk.ACCEPT_REQUEST,
                    userId: t.user.id,
                });
        },
        { trackView: G, trackClick: B } = (0, N.R)(Z.n0.StreamWatchNudge, {
            notif_type: Z.n0.StreamWatchNudge,
            notif_user_id: o.id,
            activity_type: null == n ? void 0 : n.type,
            activity_name: null != L ? L : null == n ? void 0 : n.name,
        });
    return {
        body: (() => {
            switch (u) {
                case C.RD.GREEN_BUTTON_WITH_TEXT:
                    return (0, i.jsx)(k, {
                        user: o,
                        application: P,
                        runningGame: D,
                        username: M,
                        onWatchClick: W,
                        buttonColor: "green",
                    });
                case C.RD.GRAY_BUTTON_WITH_TEXT:
                    return (0, i.jsx)(k, {
                        user: o,
                        application: P,
                        runningGame: D,
                        username: M,
                        onWatchClick: W,
                        buttonColor: "gray",
                    });
                case C.RD.SINGLE_ICON_BUTTON:
                    return (0, i.jsx)(R, {
                        user: o,
                        application: P,
                        runningGame: D,
                        username: M,
                        onWatchClick: W,
                        iconColor: "white",
                    });
            }
        })(),
        maxBodyLines: 1,
        onNotificationClick: () => {
            B("dismiss");
        },
        onNotificationShow: () => {
            G();
        },
        onDismissClick: () => {
            B("dismiss");
        },
    };
}
