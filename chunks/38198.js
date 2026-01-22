n.d(t, { A: () => L }), n(591487), n(727858), n(747238), n(321073), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(554146),
    s = n(827734),
    o = n(397927),
    c = n(308368),
    u = n(795816),
    d = n(688810),
    f = n(211401),
    p = n(500049),
    h = n(975412),
    b = n(826673),
    g = n(160761),
    m = n(379848),
    A = n(970244),
    y = n(867455),
    O = n(780057),
    j = n(747926),
    v = n(320501),
    x = n(954571),
    E = n(203982),
    _ = n(453771),
    C = n(518960),
    S = n(408018),
    I = n(447155),
    N = n(652215),
    T = n(49999),
    P = n(412136),
    w = n(985018),
    R = n(545156);
let D = RegExp("(.*)```(\\w+)\\n(.*)```(.*)", "s");
function M() {
    let e = (0, i.bG)([v.A], () => v.A.hasCurrentUserSentMessageSinceAppStart()),
        t = [];
    e && t.push(a.M.ACTIVITIES_CHAT_MENU_NEW_BADGE);
    let [n] = (0, g.DP)(t);
    return (
        l.useEffect(
            () => () => {
                n === a.M.ACTIVITIES_CHAT_MENU_NEW_BADGE &&
                    (0, b.Dr)(a.M.ACTIVITIES_CHAT_MENU_NEW_BADGE, { dismissAction: T.i.TAKE_ACTION });
            },
            [n],
        ),
        (0, r.jsx)(m.Ay, {
            contentTypes: t,
            children: (e) => {
                let { visibleContent: t } = e;
                return t === a.M.ACTIVITIES_CHAT_MENU_NEW_BADGE
                    ? (0, r.jsx)(o.LpS, {
                          text: w.intl.string(w.t.y2b7CA),
                          color: s.A.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT.css,
                      })
                    : null;
            },
        })
    );
}
function L(e) {
    let {
            channel: t,
            chatInputType: s,
            options: g,
            onFileUpload: m,
            onClose: v,
            onSelect: L,
            draftType: G,
            editorTextContent: k,
            setValue: U,
            openClips: V,
        } = e,
        { analyticsLocations: F, newestAnalyticsLocation: H } = (0, d.Ay)(),
        B = (0, A.s)({ channel: t }),
        K = (0, i.bG)([O.A], () => O.A.isInProgress());
    function W() {
        (0, j.Tv)(t, void 0, "Plus Button");
    }
    function z() {
        x.default.track(N.HAw.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), U("/", (0, S.x7)("/"));
    }
    function Y() {
        V();
    }
    function q() {
        (0, b.Dr)(a.M.POLLS_CHAT_INPUT_COACHMARK, { dismissAction: T.i.TAKE_ACTION }),
            (0, o.mMO)(
                async () => {
                    let { default: e } = await n.e("52786").then(n.bind(n, 489449));
                    return (n) => {
                        var l, i;
                        return (0, r.jsx)(
                            e,
                            ((l = (function (e) {
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
                            (i = i = { channel: t }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(i)).forEach(function (e) {
                                      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                                  }),
                            l),
                        );
                    };
                },
                { modalKey: P.sm },
            );
    }
    function X() {
        x.default.track(N.HAw.CHANNEL_ATTACH_MENU_START_ACTIVITY_CLICKED, {
            channel_type: t.type,
            channel_id: t.id,
            guild_id: t.guild_id,
        }),
            (0, h.A)({
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
            (0, u.LV)({ guildId: t.guild_id });
    }
    function J() {
        let e = k,
            n = "txt",
            r = "",
            l = k.match(D);
        null != l && ((r = l[1]), (n = l[2]), (e = l[3]), (r += l[4])),
            (0, C.R)([(0, _.VE)(new Blob([e], { type: "text/plain" }), "message.".concat(n), "text/plain")], t, G),
            E._.dispatchToLastSubscribed(N.jej.CLEAR_TEXT),
            "" !== r && E._.dispatchToLastSubscribed(N.jej.INSERT_TEXT, { plainText: r });
    }
    return (
        l.useEffect(() => {
            x.default.track(N.HAw.OPEN_POPOUT, {
                type: "Send Attachment",
                channel_id: t.id,
                guild_id: t.guild_id,
            });
        }, [t.guild_id, t.id]),
        (0, r.jsx)(o.W1t, {
            onSelect: L,
            navId: "channel-attach",
            onClose: v,
            "aria-label": w.intl.string(w.t.Xm41aV),
            className: R.MK,
            children: g.map(function (e) {
                let n = (0, r.jsxs)("div", {
                    className: R.ed,
                    children: [
                        (0, r.jsx)(e.icon, {
                            className: R.H9,
                            color: "currentColor",
                        }),
                        (0, r.jsx)("div", {
                            className: R.fS,
                            children: e.display,
                        }),
                        null != e.badgeVal &&
                            e.badgeVal > 0 &&
                            (0, r.jsx)(o.hVq, {
                                className: R.qS,
                                color: e.badgeColor,
                                count: e.badgeVal,
                            }),
                    ],
                });
                switch (e.type) {
                    case I.v.UPLOAD_A_FILE:
                        return (0, r.jsx)(
                            o.Drp,
                            {
                                id: "upload-file",
                                label: n,
                                action: m,
                            },
                            "upload-file",
                        );
                    case I.v.UPLOAD_TEXT_AS_FILE:
                        if ("" === k) return null;
                        return (0, r.jsx)(
                            o.Drp,
                            {
                                id: "upload-text-as-file",
                                label: n,
                                action: J,
                            },
                            "upload-text-as-file",
                        );
                    case I.v.CLIPS:
                        return (0, r.jsx)(
                            o.Drp,
                            {
                                id: "clips",
                                label: n,
                                action: Y,
                            },
                            "clips",
                        );
                    case I.v.POLL:
                        return (0, r.jsx)(
                            o.Drp,
                            {
                                id: "poll",
                                label: n,
                                action: q,
                            },
                            "poll",
                        );
                    case I.v.INVITE_TO_PLAY_GAME:
                        return (0, r.jsx)(
                            o.Drp,
                            {
                                id: "play",
                                label: n,
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void c.A.sendActivityInvite({
                                            channelId: t.id,
                                            type: N.xL.JOIN,
                                            activity: n,
                                            location: F[F.length - 1],
                                        })
                                    );
                                },
                            },
                            "play",
                        );
                    case I.v.INVITE_TO_LISTEN:
                        return (0, r.jsx)(
                            o.Drp,
                            {
                                id: "listen",
                                label: n,
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void c.A.sendActivityInvite({
                                            channelId: t.id,
                                            type: N.xL.LISTEN,
                                            activity: n,
                                            location: F[F.length - 1],
                                        })
                                    );
                                },
                            },
                            "listen",
                        );
                    case I.v.INVITE_TO_WATCH:
                        return (0, r.jsx)(
                            o.Drp,
                            {
                                id: "watch",
                                label: n,
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void c.A.sendActivityInvite({
                                            channelId: t.id,
                                            type: N.xL.WATCH,
                                            activity: n,
                                            location: F[F.length - 1],
                                        })
                                    );
                                },
                            },
                            "watch",
                        );
                    case I.v.CREATE_THREAD:
                        return (0, r.jsx)(
                            o.Drp,
                            {
                                id: "THREAD",
                                label: n,
                                action: W,
                            },
                            "THREAD",
                        );
                    case I.v.SLASH_COMMAND:
                        return (0, r.jsx)(
                            o.Drp,
                            {
                                id: "SLASH_COMMAND",
                                label: n,
                                action: z,
                            },
                            "SLASH_COMMAND",
                        );
                    case I.v.APP_LAUNCHER:
                        return (0, r.jsx)(
                            o.Drp,
                            {
                                id: "APP_LAUNCHER",
                                label: n,
                                action: () => (0, f.R)(p.s4.TEXT, s, void 0, t.id),
                            },
                            "APP_LAUNCHER",
                        );
                    case I.v.ACTIVITY:
                        return (0, r.jsx)(
                            o.Drp,
                            {
                                id: "activity",
                                label: n,
                                action: X,
                                hint: (0, r.jsx)(M, {}),
                            },
                            "activity",
                        );
                    case I.v.SCHEDULED_MESSAGE:
                        return (0, r.jsx)(
                            o.Drp,
                            {
                                id: "scheduled_message",
                                label: n,
                                action: () => (0, A.e0)({ channel: t }),
                                children: B,
                            },
                            "scheduled_message",
                        );
                    case I.v.SUMMARIZE_THREAD:
                        return (0, r.jsx)(
                            o.Drp,
                            {
                                id: "summarize_thread",
                                label: n,
                                action: () => y.A.summarizeThread(t),
                                icon: K ? (0, r.jsx)(o.y$y, { type: o.tVU.PULSING_ELLIPSIS }) : null,
                                disabled: K,
                                children: K
                                    ? null
                                    : (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(
                                                  o.Drp,
                                                  {
                                                      id: "summarize_thread_for_everyone",
                                                      label: w.intl.string(w.t.eCzSdd),
                                                      leadingAccessory: {
                                                          type: "icon",
                                                          icon: o.nFg,
                                                      },
                                                      action: () => y.A.summarizeThread(t, !1),
                                                  },
                                                  "summarize_thread_for_everyone",
                                              ),
                                              (0, r.jsx)(
                                                  o.Drp,
                                                  {
                                                      id: "summarize_thread_for_me",
                                                      label: w.intl.string(w.t["HOe+Hq"]),
                                                      leadingAccessory: {
                                                          type: "icon",
                                                          icon: o.nys,
                                                      },
                                                      action: () => y.A.summarizeThread(t),
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
