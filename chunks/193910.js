n.d(t, { Z: () => M }), n(413496), n(433524), n(35282), n(539854), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(704215),
    o = n(692547),
    s = n(481060),
    c = n(278323),
    u = n(566620),
    d = n(906732),
    p = n(499254),
    f = n(827498),
    h = n(397698),
    g = n(266454),
    m = n(706140),
    b = n(243778),
    y = n(618857),
    v = n(346479),
    O = n(286934),
    j = n(488131),
    x = n(375954),
    C = n(626135),
    E = n(585483),
    S = n(403182),
    _ = n(127654),
    I = n(752305),
    P = n(951211),
    Z = n(981631),
    N = n(921944),
    T = n(489887),
    A = n(388032),
    w = n(688169);
let R = RegExp("(.*)```(\\w+)\\n(.*)```(.*)", "s");
function D() {
    let e = (0, l.e7)([x.Z], () => x.Z.hasCurrentUserSentMessageSinceAppStart()),
        t = [];
    e && t.push(a.z.ACTIVITIES_CHAT_MENU_NEW_BADGE);
    let [n] = (0, m.cv)(t);
    return (
        i.useEffect(
            () => () => {
                n === a.z.ACTIVITIES_CHAT_MENU_NEW_BADGE &&
                    (0, g.Q3)(a.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, { dismissAction: N.L.TAKE_ACTION });
            },
            [n],
        ),
        (0, r.jsx)(b.ZP, {
            contentTypes: t,
            children: (e) => {
                let { visibleContent: t } = e;
                return t === a.z.ACTIVITIES_CHAT_MENU_NEW_BADGE
                    ? (0, r.jsx)(s.IGR, {
                          text: A.intl.string(A.t.y2b7CA),
                          color: o.Z.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT.css,
                      })
                    : null;
            },
        })
    );
}
function M(e) {
    let {
            channel: t,
            chatInputType: o,
            options: m,
            onFileUpload: b,
            onClose: x,
            onSelect: M,
            draftType: k,
            editorTextContent: L,
            setValue: U,
            openClips: G,
        } = e,
        { analyticsLocations: B, newestAnalyticsLocation: F } = (0, d.ZP)(),
        H = (0, y.Dt)({ channel: t }),
        V = (0, l.e7)([O.Z], () => O.Z.isInProgress());
    function z() {
        (0, j.R6)(t, void 0, "Plus Button");
    }
    function W() {
        C.default.track(Z.rMx.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), U("/", (0, I.JM)("/"));
    }
    function K() {
        G();
    }
    function Y() {
        (0, g.Q3)(a.z.POLLS_CHAT_INPUT_COACHMARK, { dismissAction: N.L.TAKE_ACTION }),
            (0, s.ZDy)(
                async () => {
                    let { default: e } = await n.e("68784").then(n.bind(n, 611611));
                    return (n) => {
                        var i, l;
                        return (0, r.jsx)(
                            e,
                            ((i = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({}, n)),
                            (l = l = { channel: t }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            i),
                        );
                    };
                },
                { modalKey: T.$z },
            );
    }
    function q() {
        C.default.track(Z.rMx.CHANNEL_ATTACH_MENU_START_ACTIVITY_CLICKED, {
            channel_type: t.type,
            channel_id: t.id,
            guild_id: t.guild_id,
        }),
            (0, h.Z)({
                context:
                    null != t
                        ? {
                              type: "channel",
                              channel: t,
                          }
                        : { type: "contextless" },
                openInPopout: !1,
                analyticsLocation: F,
            }),
            (0, u.w1)({ guildId: t.guild_id });
    }
    function X() {
        let e = L,
            n = "txt",
            r = "",
            i = L.match(R);
        null != i && ((r = i[1]), (n = i[2]), (e = i[3]), (r += i[4])),
            (0, _.d)([(0, S.dp)(new Blob([e], { type: "text/plain" }), "message.".concat(n), "text/plain")], t, k),
            E.S.dispatchToLastSubscribed(Z.CkL.CLEAR_TEXT),
            "" !== r && E.S.dispatchToLastSubscribed(Z.CkL.INSERT_TEXT, { plainText: r });
    }
    return (
        i.useEffect(() => {
            C.default.track(Z.rMx.OPEN_POPOUT, {
                type: "Send Attachment",
                channel_id: t.id,
                guild_id: t.guild_id,
            });
        }, [t.guild_id, t.id]),
        (0, r.jsx)(s.v2r, {
            onSelect: M,
            navId: "channel-attach",
            onClose: x,
            "aria-label": A.intl.string(A.t.Xm41aV),
            className: w.menu,
            children: m.map(function (e) {
                let n = (0, r.jsxs)("div", {
                    className: w.optionLabel,
                    children: [
                        (0, r.jsx)(e.icon, {
                            className: w.optionIcon,
                            color: "currentColor",
                        }),
                        (0, r.jsx)("div", {
                            className: w.optionName,
                            children: e.display,
                        }),
                        null != e.badgeVal &&
                            e.badgeVal > 0 &&
                            (0, r.jsx)(s.mAB, {
                                className: w.badge,
                                color: e.badgeColor,
                                count: e.badgeVal,
                            }),
                    ],
                });
                switch (e.type) {
                    case P.r.UPLOAD_A_FILE:
                        return (0, r.jsx)(
                            s.sNh,
                            {
                                id: "upload-file",
                                label: n,
                                action: b,
                            },
                            "upload-file",
                        );
                    case P.r.UPLOAD_TEXT_AS_FILE:
                        if ("" === L) return null;
                        return (0, r.jsx)(
                            s.sNh,
                            {
                                id: "upload-text-as-file",
                                label: n,
                                action: X,
                            },
                            "upload-text-as-file",
                        );
                    case P.r.CLIPS:
                        return (0, r.jsx)(
                            s.sNh,
                            {
                                id: "clips",
                                label: n,
                                action: K,
                            },
                            "clips",
                        );
                    case P.r.POLL:
                        return (0, r.jsx)(
                            s.sNh,
                            {
                                id: "poll",
                                label: n,
                                action: Y,
                            },
                            "poll",
                        );
                    case P.r.INVITE_TO_PLAY_GAME:
                        return (0, r.jsx)(
                            s.sNh,
                            {
                                id: "play",
                                label: n,
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void c.Z.sendActivityInvite({
                                            channelId: t.id,
                                            type: Z.mFx.JOIN,
                                            activity: n,
                                            location: B[B.length - 1],
                                        })
                                    );
                                },
                            },
                            "play",
                        );
                    case P.r.INVITE_TO_LISTEN:
                        return (0, r.jsx)(
                            s.sNh,
                            {
                                id: "listen",
                                label: n,
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void c.Z.sendActivityInvite({
                                            channelId: t.id,
                                            type: Z.mFx.LISTEN,
                                            activity: n,
                                            location: B[B.length - 1],
                                        })
                                    );
                                },
                            },
                            "listen",
                        );
                    case P.r.INVITE_TO_WATCH:
                        return (0, r.jsx)(
                            s.sNh,
                            {
                                id: "watch",
                                label: n,
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void c.Z.sendActivityInvite({
                                            channelId: t.id,
                                            type: Z.mFx.WATCH,
                                            activity: n,
                                            location: B[B.length - 1],
                                        })
                                    );
                                },
                            },
                            "watch",
                        );
                    case P.r.CREATE_THREAD:
                        return (0, r.jsx)(
                            s.sNh,
                            {
                                id: "THREAD",
                                label: n,
                                action: z,
                            },
                            "THREAD",
                        );
                    case P.r.SLASH_COMMAND:
                        return (0, r.jsx)(
                            s.sNh,
                            {
                                id: "SLASH_COMMAND",
                                label: n,
                                action: W,
                            },
                            "SLASH_COMMAND",
                        );
                    case P.r.APP_LAUNCHER:
                        return (0, r.jsx)(
                            s.sNh,
                            {
                                id: "APP_LAUNCHER",
                                label: n,
                                action: () => (0, p._)(f._b.TEXT, o, void 0, t.id),
                            },
                            "APP_LAUNCHER",
                        );
                    case P.r.ACTIVITY:
                        return (0, r.jsx)(
                            s.sNh,
                            {
                                id: "activity",
                                label: n,
                                action: q,
                                hint: (0, r.jsx)(D, {}),
                            },
                            "activity",
                        );
                    case P.r.SCHEDULED_MESSAGE:
                        return (0, r.jsx)(
                            s.sNh,
                            {
                                id: "scheduled_message",
                                label: n,
                                action: () => (0, y.$f)({ channel: t }),
                                children: H,
                            },
                            "scheduled_message",
                        );
                    case P.r.SUMMARIZE_THREAD:
                        return (0, r.jsx)(
                            s.sNh,
                            {
                                id: "summarize_thread",
                                label: n,
                                action: () => v.Z.summarizeThread(t),
                                icon: V ? (0, r.jsx)(s.$jN, { type: s.RAz.PULSING_ELLIPSIS }) : null,
                                disabled: V,
                                children: V
                                    ? null
                                    : (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(
                                                  s.sNh,
                                                  {
                                                      id: "summarize_thread_for_everyone",
                                                      label: A.intl.string(A.t.eCzSdd),
                                                      iconLeft: s.BFJ,
                                                      action: () => v.Z.summarizeThread(t, !1),
                                                  },
                                                  "summarize_thread_for_everyone",
                                              ),
                                              (0, r.jsx)(
                                                  s.sNh,
                                                  {
                                                      id: "summarize_thread_for_me",
                                                      label: A.intl.string(A.t["HOe+Hq"]),
                                                      iconLeft: s.tBG,
                                                      action: () => v.Z.summarizeThread(t),
                                                  },
                                                  "summarize_thread_for_me",
                                              ),
                                          ],
                                      }),
                            },
                            "summarize_thread",
                        );
                    default:
                        return null;
                }
            }),
        })
    );
}
