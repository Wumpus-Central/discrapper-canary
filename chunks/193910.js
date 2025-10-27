n.d(t, { Z: () => M }), n(413496), n(433524), n(35282), n(539854), n(388685);
var i = n(951288),
    r = n(647438),
    l = n(831209),
    a = n(442837),
    o = n(704215),
    s = n(481060),
    c = n(278323),
    u = n(566620),
    d = n(906732),
    p = n(397698),
    h = n(266454),
    f = n(706140),
    m = n(243778),
    g = n(618857),
    b = n(346479),
    C = n(286934),
    y = n(488131),
    _ = n(375954),
    v = n(626135),
    x = n(585483),
    O = n(403182),
    j = n(127654),
    E = n(752305),
    S = n(951211),
    P = n(981631),
    I = n(921944),
    Z = n(489887),
    T = n(388032),
    N = n(749723);
let A = RegExp("(.*)```(\\w+)\\n(.*)```(.*)", "s");
function w() {
    let e = (0, a.e7)([_.Z], () => _.Z.hasCurrentUserSentMessageSinceAppStart()),
        t = [];
    e && t.push(o.z.ACTIVITIES_CHAT_MENU_NEW_BADGE);
    let [n] = (0, f.cv)(t);
    return (
        r.useEffect(
            () => () => {
                n === o.z.ACTIVITIES_CHAT_MENU_NEW_BADGE &&
                    (0, h.Q3)(o.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, { dismissAction: I.L.TAKE_ACTION });
            },
            [n],
        ),
        (0, i.jsx)(m.ZP, {
            contentTypes: t,
            children: (e) => {
                let { visibleContent: t } = e;
                return t === o.z.ACTIVITIES_CHAT_MENU_NEW_BADGE
                    ? (0, i.jsx)(s.IGR, {
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
            options: f,
            onFileUpload: m,
            onClose: _,
            onSelect: M,
            draftType: R,
            editorTextContent: L,
            setValue: D,
            openClips: k,
        } = e,
        { analyticsLocations: U, newestAnalyticsLocation: B } = (0, d.ZP)(),
        H = (0, g.Dt)({ channel: t }),
        F = (0, a.e7)([C.Z], () => C.Z.isInProgress());
    function V() {
        (0, y.R6)(t, void 0, "Plus Button");
    }
    function G() {
        v.default.track(P.rMx.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), D("/", (0, E.JM)("/"));
    }
    function z() {
        k();
    }
    function W() {
        (0, h.Q3)(o.z.POLLS_CHAT_INPUT_COACHMARK, { dismissAction: I.L.TAKE_ACTION }),
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
        let e = L,
            n = "txt",
            i = "",
            r = L.match(A);
        null != r && ((i = r[1]), (n = r[2]), (e = r[3]), (i += r[4])),
            (0, j.d)([(0, O.dp)(new Blob([e], { type: "text/plain" }), "message.".concat(n), "text/plain")], t, R),
            x.S.dispatchToLastSubscribed(P.CkL.CLEAR_TEXT),
            "" !== i && x.S.dispatchToLastSubscribed(P.CkL.INSERT_TEXT, { plainText: i });
    }
    return (
        r.useEffect(() => {
            v.default.track(P.rMx.OPEN_POPOUT, {
                type: "Send Attachment",
                channel_id: t.id,
                guild_id: t.guild_id,
            });
        }, [t.guild_id, t.id]),
        (0, i.jsx)(s.v2r, {
            onSelect: M,
            navId: "channel-attach",
            onClose: _,
            "aria-label": T.intl.string(T.t.Xm41aV),
            className: N.menu,
            children: f.map(function (e) {
                var n;
                let r = (0, i.jsxs)("div", {
                    className: N.optionLabel,
                    children: [
                        (0, i.jsx)(e.icon, {
                            className: N.optionIcon,
                            color: "currentColor",
                        }),
                        (0, i.jsx)("div", {
                            className: N.optionName,
                            children: e.display,
                        }),
                        null != e.badgeVal &&
                            e.badgeVal > 0 &&
                            (0, i.jsx)(s.mAB, {
                                className: N.badge,
                                color: null != (n = e.badgeColor) ? n : l.Z.STATUS_DANGER,
                                count: e.badgeVal,
                            }),
                    ],
                });
                switch (e.type) {
                    case S.r.UPLOAD_A_FILE:
                        return (0, i.jsx)(
                            s.sNh,
                            {
                                id: "upload-file",
                                label: r,
                                action: m,
                            },
                            "upload-file",
                        );
                    case S.r.UPLOAD_TEXT_AS_FILE:
                        if ("" === L) return null;
                        return (0, i.jsx)(
                            s.sNh,
                            {
                                id: "upload-text-as-file",
                                label: r,
                                action: Y,
                            },
                            "upload-text-as-file",
                        );
                    case S.r.CLIPS:
                        return (0, i.jsx)(
                            s.sNh,
                            {
                                id: "clips",
                                label: r,
                                action: z,
                            },
                            "clips",
                        );
                    case S.r.POLL:
                        return (0, i.jsx)(
                            s.sNh,
                            {
                                id: "poll",
                                label: r,
                                action: W,
                            },
                            "poll",
                        );
                    case S.r.INVITE_TO_PLAY_GAME:
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
                        return (0, i.jsx)(
                            s.sNh,
                            {
                                id: "THREAD",
                                label: r,
                                action: V,
                            },
                            "THREAD",
                        );
                    case S.r.SLASH_COMMAND:
                        return (0, i.jsx)(
                            s.sNh,
                            {
                                id: "SLASH_COMMAND",
                                label: r,
                                action: G,
                            },
                            "SLASH_COMMAND",
                        );
                    case S.r.ACTIVITY:
                        return (0, i.jsx)(
                            s.sNh,
                            {
                                id: "activity",
                                label: r,
                                action: q,
                                hint: (0, i.jsx)(w, {}),
                            },
                            "activity",
                        );
                    case S.r.SCHEDULED_MESSAGE:
                        return (0, i.jsx)(
                            s.sNh,
                            {
                                id: "scheduled_message",
                                label: r,
                                action: () => (0, g.$f)({ channel: t }),
                                children: H,
                            },
                            "scheduled_message",
                        );
                    case S.r.SUMMARIZE_THREAD:
                        return (0, i.jsx)(
                            s.sNh,
                            {
                                id: "summarize_thread",
                                label: r,
                                action: () => b.Z.summarizeThread(t),
                                icon: F ? (0, i.jsx)(s.$jN, { type: s.RAz.PULSING_ELLIPSIS }) : null,
                                disabled: F,
                                children: F
                                    ? null
                                    : (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(
                                                  s.sNh,
                                                  {
                                                      id: "summarize_thread_for_everyone",
                                                      label: T.intl.string(T.t.eCzSdd),
                                                      iconLeft: s.BFJ,
                                                      action: () => b.Z.summarizeThread(t, !1),
                                                  },
                                                  "summarize_thread_for_everyone",
                                              ),
                                              (0, i.jsx)(
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
