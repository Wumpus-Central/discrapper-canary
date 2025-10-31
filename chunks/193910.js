n.d(t, { Z: () => M }), n(413496), n(433524), n(35282), n(539854), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(831209),
    a = n(442837),
    o = n(704215),
    s = n(481060),
    c = n(278323),
    u = n(566620),
    d = n(906732),
    p = n(397698),
    f = n(266454),
    h = n(706140),
    m = n(243778),
    g = n(618857),
    b = n(346479),
    _ = n(286934),
    y = n(488131),
    C = n(375954),
    v = n(626135),
    O = n(585483),
    x = n(403182),
    E = n(127654),
    j = n(752305),
    S = n(951211),
    P = n(981631),
    I = n(921944),
    Z = n(489887),
    T = n(388032),
    N = n(749723);
let A = RegExp("(.*)```(\\w+)\\n(.*)```(.*)", "s");
function w() {
    let e = (0, a.e7)([C.Z], () => C.Z.hasCurrentUserSentMessageSinceAppStart()),
        t = [];
    e && t.push(o.z.ACTIVITIES_CHAT_MENU_NEW_BADGE);
    let [n] = (0, h.cv)(t);
    return (
        i.useEffect(
            () => () => {
                n === o.z.ACTIVITIES_CHAT_MENU_NEW_BADGE &&
                    (0, f.Q3)(o.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, { dismissAction: I.L.TAKE_ACTION });
            },
            [n],
        ),
        (0, r.jsx)(m.ZP, {
            contentTypes: t,
            children: (e) => {
                let { visibleContent: t } = e;
                return t === o.z.ACTIVITIES_CHAT_MENU_NEW_BADGE
                    ? (0, r.jsx)(s.IGR, {
                          text: T.intl.string(T.t.y2b7CA),
                          color: l.Z.BUTTON_DANGER_BACKGROUND,
                      })
                    : null;
            },
        })
    );
}
function M(e) {
    let {
            channel: t,
            options: h,
            onFileUpload: m,
            onClose: C,
            onSelect: M,
            draftType: R,
            editorTextContent: D,
            setValue: L,
            openClips: k,
        } = e,
        { analyticsLocations: U, newestAnalyticsLocation: B } = (0, d.ZP)(),
        F = (0, g.Dt)({ channel: t }),
        V = (0, a.e7)([_.Z], () => _.Z.isInProgress());
    function H() {
        (0, y.R6)(t, void 0, "Plus Button");
    }
    function G() {
        v.default.track(P.rMx.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), L("/", (0, j.JM)("/"));
    }
    function W() {
        k();
    }
    function z() {
        (0, f.Q3)(o.z.POLLS_CHAT_INPUT_COACHMARK, { dismissAction: I.L.TAKE_ACTION }),
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
                { modalKey: Z.$z },
            );
    }
    function q() {
        v.default.track(P.rMx.CHANNEL_ATTACH_MENU_START_ACTIVITY_CLICKED, {
            channel_type: t.type,
            channel_id: t.id,
            guild_id: t.guild_id,
        }),
            (0, p.Z)({
                context:
                    null != t
                        ? {
                              type: "channel",
                              channel: t,
                          }
                        : { type: "contextless" },
                openInPopout: !1,
                analyticsLocation: B,
            }),
            (0, u.w1)({ guildId: t.guild_id });
    }
    function Y() {
        let e = D,
            n = "txt",
            r = "",
            i = D.match(A);
        null != i && ((r = i[1]), (n = i[2]), (e = i[3]), (r += i[4])),
            (0, E.d)([(0, x.dp)(new Blob([e], { type: "text/plain" }), "message.".concat(n), "text/plain")], t, R),
            O.S.dispatchToLastSubscribed(P.CkL.CLEAR_TEXT),
            "" !== r && O.S.dispatchToLastSubscribed(P.CkL.INSERT_TEXT, { plainText: r });
    }
    return (
        i.useEffect(() => {
            v.default.track(P.rMx.OPEN_POPOUT, {
                type: "Send Attachment",
                channel_id: t.id,
                guild_id: t.guild_id,
            });
        }, [t.guild_id, t.id]),
        (0, r.jsx)(s.v2r, {
            onSelect: M,
            navId: "channel-attach",
            onClose: C,
            "aria-label": T.intl.string(T.t.Xm41aV),
            className: N.menu,
            children: h.map(function (e) {
                var n;
                let i = (0, r.jsxs)("div", {
                    className: N.optionLabel,
                    children: [
                        (0, r.jsx)(e.icon, {
                            className: N.optionIcon,
                            color: "currentColor",
                        }),
                        (0, r.jsx)("div", {
                            className: N.optionName,
                            children: e.display,
                        }),
                        null != e.badgeVal &&
                            e.badgeVal > 0 &&
                            (0, r.jsx)(s.mAB, {
                                className: N.badge,
                                color: null != (n = e.badgeColor) ? n : l.Z.STATUS_DANGER,
                                count: e.badgeVal,
                            }),
                    ],
                });
                switch (e.type) {
                    case S.r.UPLOAD_A_FILE:
                        return (0, r.jsx)(
                            s.sNh,
                            {
                                id: "upload-file",
                                label: i,
                                action: m,
                            },
                            "upload-file",
                        );
                    case S.r.UPLOAD_TEXT_AS_FILE:
                        if ("" === D) return null;
                        return (0, r.jsx)(
                            s.sNh,
                            {
                                id: "upload-text-as-file",
                                label: i,
                                action: Y,
                            },
                            "upload-text-as-file",
                        );
                    case S.r.CLIPS:
                        return (0, r.jsx)(
                            s.sNh,
                            {
                                id: "clips",
                                label: i,
                                action: W,
                            },
                            "clips",
                        );
                    case S.r.POLL:
                        return (0, r.jsx)(
                            s.sNh,
                            {
                                id: "poll",
                                label: i,
                                action: z,
                            },
                            "poll",
                        );
                    case S.r.INVITE_TO_PLAY_GAME:
                        return (0, r.jsx)(
                            s.sNh,
                            {
                                id: "play",
                                label: i,
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void c.Z.sendActivityInvite({
                                            channelId: t.id,
                                            type: P.mFx.JOIN,
                                            activity: n,
                                            location: U[U.length - 1],
                                        })
                                    );
                                },
                            },
                            "play",
                        );
                    case S.r.INVITE_TO_LISTEN:
                        return (0, r.jsx)(
                            s.sNh,
                            {
                                id: "listen",
                                label: i,
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void c.Z.sendActivityInvite({
                                            channelId: t.id,
                                            type: P.mFx.LISTEN,
                                            activity: n,
                                            location: U[U.length - 1],
                                        })
                                    );
                                },
                            },
                            "listen",
                        );
                    case S.r.INVITE_TO_WATCH:
                        return (0, r.jsx)(
                            s.sNh,
                            {
                                id: "watch",
                                label: i,
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void c.Z.sendActivityInvite({
                                            channelId: t.id,
                                            type: P.mFx.WATCH,
                                            activity: n,
                                            location: U[U.length - 1],
                                        })
                                    );
                                },
                            },
                            "watch",
                        );
                    case S.r.CREATE_THREAD:
                        return (0, r.jsx)(
                            s.sNh,
                            {
                                id: "THREAD",
                                label: i,
                                action: H,
                            },
                            "THREAD",
                        );
                    case S.r.SLASH_COMMAND:
                        return (0, r.jsx)(
                            s.sNh,
                            {
                                id: "SLASH_COMMAND",
                                label: i,
                                action: G,
                            },
                            "SLASH_COMMAND",
                        );
                    case S.r.ACTIVITY:
                        return (0, r.jsx)(
                            s.sNh,
                            {
                                id: "activity",
                                label: i,
                                action: q,
                                hint: (0, r.jsx)(w, {}),
                            },
                            "activity",
                        );
                    case S.r.SCHEDULED_MESSAGE:
                        return (0, r.jsx)(
                            s.sNh,
                            {
                                id: "scheduled_message",
                                label: i,
                                action: () => (0, g.$f)({ channel: t }),
                                children: F,
                            },
                            "scheduled_message",
                        );
                    case S.r.SUMMARIZE_THREAD:
                        return (0, r.jsx)(
                            s.sNh,
                            {
                                id: "summarize_thread",
                                label: i,
                                action: () => b.Z.summarizeThread(t),
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
                                                      label: T.intl.string(T.t.eCzSdd),
                                                      iconLeft: s.BFJ,
                                                      action: () => b.Z.summarizeThread(t, !1),
                                                  },
                                                  "summarize_thread_for_everyone",
                                              ),
                                              (0, r.jsx)(
                                                  s.sNh,
                                                  {
                                                      id: "summarize_thread_for_me",
                                                      label: T.intl.string(T.t["HOe+Hq"]),
                                                      iconLeft: s.tBG,
                                                      action: () => b.Z.summarizeThread(t),
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
