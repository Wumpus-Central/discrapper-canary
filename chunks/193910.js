n.d(t, { Z: () => L }), n(413496), n(433524), n(35282), n(539854), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(442837),
    a = n(704215),
    o = n(692547),
    s = n(481060),
    c = n(278323),
    u = n(566620),
    d = n(906732),
    p = n(499254),
    h = n(827498),
    f = n(397698),
    m = n(266454),
    g = n(706140),
    b = n(243778),
    y = n(618857),
    C = n(346479),
    v = n(286934),
    _ = n(488131),
    O = n(375954),
    x = n(626135),
    E = n(585483),
    j = n(403182),
    S = n(127654),
    P = n(752305),
    I = n(951211),
    Z = n(981631),
    T = n(921944),
    N = n(489887),
    A = n(388032),
    w = n(749723);
let M = RegExp("(.*)```(\\w+)\\n(.*)```(.*)", "s");
function R() {
    let e = (0, l.e7)([O.Z], () => O.Z.hasCurrentUserSentMessageSinceAppStart()),
        t = [];
    e && t.push(a.z.ACTIVITIES_CHAT_MENU_NEW_BADGE);
    let [n] = (0, g.cv)(t);
    return (
        r.useEffect(
            () => () => {
                n === a.z.ACTIVITIES_CHAT_MENU_NEW_BADGE &&
                    (0, m.Q3)(a.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, { dismissAction: T.L.TAKE_ACTION });
            },
            [n],
        ),
        (0, i.jsx)(b.ZP, {
            contentTypes: t,
            children: (e) => {
                let { visibleContent: t } = e;
                return t === a.z.ACTIVITIES_CHAT_MENU_NEW_BADGE
                    ? (0, i.jsx)(s.IGR, {
                          text: A.intl.string(A.t.y2b7CA),
                          color: o.Z.colors.BUTTON_DANGER_BACKGROUND.css,
                      })
                    : null;
            },
        })
    );
}
function L(e) {
    let {
            channel: t,
            chatInputType: g,
            options: b,
            onFileUpload: O,
            onClose: L,
            onSelect: D,
            draftType: k,
            editorTextContent: U,
            setValue: V,
            openClips: F,
        } = e,
        { analyticsLocations: B, newestAnalyticsLocation: H } = (0, d.ZP)(),
        G = (0, y.Dt)({ channel: t }),
        z = (0, l.e7)([v.Z], () => v.Z.isInProgress());
    function W() {
        (0, _.R6)(t, void 0, "Plus Button");
    }
    function q() {
        x.default.track(Z.rMx.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), V("/", (0, P.JM)("/"));
    }
    function K() {
        F();
    }
    function Y() {
        (0, m.Q3)(a.z.POLLS_CHAT_INPUT_COACHMARK, { dismissAction: T.L.TAKE_ACTION }),
            (0, s.ZDy)(
                async () => {
                    let { default: e } = await n.e("68784").then(n.bind(n, 611611));
                    return (n) => {
                        var r, l;
                        return (0, i.jsx)(
                            e,
                            ((r = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        i = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        i.forEach(function (t) {
                                            var i;
                                            (i = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: i,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = i);
                                        });
                                }
                                return e;
                            })({}, n)),
                            (l = l = { channel: t }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var i = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, i);
                                      }
                                      return n;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            r),
                        );
                    };
                },
                { modalKey: N.$z },
            );
    }
    function X() {
        x.default.track(Z.rMx.CHANNEL_ATTACH_MENU_START_ACTIVITY_CLICKED, {
            channel_type: t.type,
            channel_id: t.id,
            guild_id: t.guild_id,
        }),
            (0, f.Z)({
                context:
                    null != t
                        ? {
                              type: "channel",
                              channel: t,
                          }
                        : { type: "contextless" },
                openInPopout: !1,
                analyticsLocation: H,
            }),
            (0, u.w1)({ guildId: t.guild_id });
    }
    function J() {
        let e = U,
            n = "txt",
            i = "",
            r = U.match(M);
        null != r && ((i = r[1]), (n = r[2]), (e = r[3]), (i += r[4])),
            (0, S.d)([(0, j.dp)(new Blob([e], { type: "text/plain" }), "message.".concat(n), "text/plain")], t, k),
            E.S.dispatchToLastSubscribed(Z.CkL.CLEAR_TEXT),
            "" !== i && E.S.dispatchToLastSubscribed(Z.CkL.INSERT_TEXT, { plainText: i });
    }
    return (
        r.useEffect(() => {
            x.default.track(Z.rMx.OPEN_POPOUT, {
                type: "Send Attachment",
                channel_id: t.id,
                guild_id: t.guild_id,
            });
        }, [t.guild_id, t.id]),
        (0, i.jsx)(s.v2r, {
            onSelect: D,
            navId: "channel-attach",
            onClose: L,
            "aria-label": A.intl.string(A.t.Xm41aV),
            className: w.menu,
            children: b.map(function (e) {
                var n;
                let r = (0, i.jsxs)("div", {
                    className: w.optionLabel,
                    children: [
                        (0, i.jsx)(e.icon, {
                            className: w.optionIcon,
                            color: "currentColor",
                        }),
                        (0, i.jsx)("div", {
                            className: w.optionName,
                            children: e.display,
                        }),
                        null != e.badgeVal &&
                            e.badgeVal > 0 &&
                            (0, i.jsx)(s.mAB, {
                                className: w.badge,
                                color: null != (n = e.badgeColor) ? n : o.Z.colors.STATUS_DANGER.css,
                                count: e.badgeVal,
                            }),
                    ],
                });
                switch (e.type) {
                    case I.r.UPLOAD_A_FILE:
                        return (0, i.jsx)(
                            s.sNh,
                            {
                                id: "upload-file",
                                label: r,
                                action: O,
                            },
                            "upload-file",
                        );
                    case I.r.UPLOAD_TEXT_AS_FILE:
                        if ("" === U) return null;
                        return (0, i.jsx)(
                            s.sNh,
                            {
                                id: "upload-text-as-file",
                                label: r,
                                action: J,
                            },
                            "upload-text-as-file",
                        );
                    case I.r.CLIPS:
                        return (0, i.jsx)(
                            s.sNh,
                            {
                                id: "clips",
                                label: r,
                                action: K,
                            },
                            "clips",
                        );
                    case I.r.POLL:
                        return (0, i.jsx)(
                            s.sNh,
                            {
                                id: "poll",
                                label: r,
                                action: Y,
                            },
                            "poll",
                        );
                    case I.r.INVITE_TO_PLAY_GAME:
                        return (0, i.jsx)(
                            s.sNh,
                            {
                                id: "play",
                                label: r,
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
                    case I.r.INVITE_TO_LISTEN:
                        return (0, i.jsx)(
                            s.sNh,
                            {
                                id: "listen",
                                label: r,
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
                    case I.r.INVITE_TO_WATCH:
                        return (0, i.jsx)(
                            s.sNh,
                            {
                                id: "watch",
                                label: r,
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
                    case I.r.CREATE_THREAD:
                        return (0, i.jsx)(
                            s.sNh,
                            {
                                id: "THREAD",
                                label: r,
                                action: W,
                            },
                            "THREAD",
                        );
                    case I.r.SLASH_COMMAND:
                        return (0, i.jsx)(
                            s.sNh,
                            {
                                id: "SLASH_COMMAND",
                                label: r,
                                action: q,
                            },
                            "SLASH_COMMAND",
                        );
                    case I.r.APP_LAUNCHER:
                        return (0, i.jsx)(
                            s.sNh,
                            {
                                id: "APP_LAUNCHER",
                                label: r,
                                action: () => (0, p._)(h._b.TEXT, g, void 0, t.id),
                            },
                            "APP_LAUNCHER",
                        );
                    case I.r.ACTIVITY:
                        return (0, i.jsx)(
                            s.sNh,
                            {
                                id: "activity",
                                label: r,
                                action: X,
                                hint: (0, i.jsx)(R, {}),
                            },
                            "activity",
                        );
                    case I.r.SCHEDULED_MESSAGE:
                        return (0, i.jsx)(
                            s.sNh,
                            {
                                id: "scheduled_message",
                                label: r,
                                action: () => (0, y.$f)({ channel: t }),
                                children: G,
                            },
                            "scheduled_message",
                        );
                    case I.r.SUMMARIZE_THREAD:
                        return (0, i.jsx)(
                            s.sNh,
                            {
                                id: "summarize_thread",
                                label: r,
                                action: () => C.Z.summarizeThread(t),
                                icon: z ? (0, i.jsx)(s.$jN, { type: s.RAz.PULSING_ELLIPSIS }) : null,
                                disabled: z,
                                children: z
                                    ? null
                                    : (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(
                                                  s.sNh,
                                                  {
                                                      id: "summarize_thread_for_everyone",
                                                      label: A.intl.string(A.t.eCzSdd),
                                                      iconLeft: s.BFJ,
                                                      action: () => C.Z.summarizeThread(t, !1),
                                                  },
                                                  "summarize_thread_for_everyone",
                                              ),
                                              (0, i.jsx)(
                                                  s.sNh,
                                                  {
                                                      id: "summarize_thread_for_me",
                                                      label: A.intl.string(A.t["HOe+Hq"]),
                                                      iconLeft: s.tBG,
                                                      action: () => C.Z.summarizeThread(t),
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
