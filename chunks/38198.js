n.d(t, {
    A: () => P,
}),
    n(591487),
    n(727858),
    n(747238);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(554146),
    a = n(397927),
    o = n(308368),
    c = n(795816),
    u = n(688810),
    d = n(211401),
    p = n(500049),
    h = n(975412),
    f = n(826673),
    g = n(970244),
    m = n(867455),
    b = n(780057),
    A = n(747926),
    y = n(954571),
    _ = n(203982),
    O = n(453771),
    j = n(518960),
    v = n(408018),
    x = n(447155),
    E = n(652215),
    C = n(49999),
    S = n(412136),
    I = n(985018),
    N = n(545156);
let T = RegExp("(.*)```(\\w+)\\n(.*)```(.*)", "s");

function P(e) {
    let {
            channel: t,
            chatInputType: P,
            options: w,
            onFileUpload: R,
            onClose: D,
            onSelect: M,
            draftType: L,
            editorTextContent: k,
            setValue: G,
            openClips: U,
        } = e,
        { analyticsLocations: B, newestAnalyticsLocation: V } = (0, u.Ay)(),
        F = (0, g.s)({
            channel: t,
        }),
        H = (0, i.bG)([b.A], () => b.A.isInProgress());

    function K() {
        (0, A.Tv)(t, void 0, "Plus Button");
    }

    function W() {
        y.default.track(E.HAw.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), G("/", (0, v.x7)("/"));
    }

    function z() {
        U();
    }

    function Y() {
        (0, f.Dr)(s.M.POLLS_CHAT_INPUT_COACHMARK, {
            dismissAction: C.i.TAKE_ACTION,
        }),
            (0, a.mMO)(
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
                            (i = i =
                                {
                                    channel: t,
                                }),
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
                {
                    modalKey: S.sm,
                },
            );
    }

    function q() {
        y.default.track(E.HAw.CHANNEL_ATTACH_MENU_START_ACTIVITY_CLICKED, {
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
                        : {
                              type: "contextless",
                          },
                openInPopout: !1,
                analyticsLocation: V,
            }),
            (0, c.LV)({
                guildId: t.guild_id,
            });
    }

    function X() {
        let e = k,
            n = "txt",
            r = "",
            l = k.match(T);
        null != l && ((r = l[1]), (n = l[2]), (e = l[3]), (r += l[4])),
            (0, j.R)(
                [
                    (0, O.VE)(
                        new Blob([e], {
                            type: "text/plain",
                        }),
                        "message.".concat(n),
                        "text/plain",
                    ),
                ],
                t,
                L,
            ),
            _._.dispatchToLastSubscribed(E.jej.CLEAR_TEXT),
            "" !== r &&
                _._.dispatchToLastSubscribed(E.jej.INSERT_TEXT, {
                    plainText: r,
                });
    }
    return (
        l.useEffect(() => {
            y.default.track(E.HAw.OPEN_POPOUT, {
                type: "Send Attachment",
                channel_id: t.id,
                guild_id: t.guild_id,
            });
        }, [t.guild_id, t.id]),
        (0, r.jsx)(a.W1t, {
            "data-menu-needs-migration": !0,
            onSelect: M,
            navId: "channel-attach",
            onClose: D,
            "aria-label": I.intl.string(I.t.Xm41aV),
            className: N.MK,
            children: w.map(function (e) {
                switch (e.type) {
                    case x.v.UPLOAD_A_FILE:
                        return (0, r.jsx)(
                            a.Drp,
                            {
                                id: "upload-file",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: {
                                    type: "icon",
                                    icon: e.icon,
                                },
                                action: R,
                            },
                            "upload-file",
                        );
                    case x.v.UPLOAD_TEXT_AS_FILE:
                        if ("" === k) return null;
                        return (0, r.jsx)(
                            a.Drp,
                            {
                                id: "upload-text-as-file",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: {
                                    type: "icon",
                                    icon: e.icon,
                                },
                                action: X,
                            },
                            "upload-text-as-file",
                        );
                    case x.v.CLIPS:
                        return (0, r.jsx)(
                            a.Drp,
                            {
                                id: "clips",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: {
                                    type: "icon",
                                    icon: e.icon,
                                },
                                badge:
                                    null != e.badgeVal && e.badgeVal > 0
                                        ? {
                                              text: e.badgeVal.toString(),
                                          }
                                        : void 0,
                                action: z,
                            },
                            "clips",
                        );
                    case x.v.POLL:
                        return (0, r.jsx)(
                            a.Drp,
                            {
                                id: "poll",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: {
                                    type: "icon",
                                    icon: e.icon,
                                },
                                action: Y,
                            },
                            "poll",
                        );
                    case x.v.INVITE_TO_PLAY_GAME:
                        return (0, r.jsx)(
                            a.Drp,
                            {
                                id: "play",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: {
                                    type: "icon",
                                    icon: e.icon,
                                },
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void o.A.sendActivityInvite({
                                            channelId: t.id,
                                            type: E.xL.JOIN,
                                            activity: n,
                                            location: B[B.length - 1],
                                        })
                                    );
                                },
                            },
                            "play",
                        );
                    case x.v.INVITE_TO_LISTEN:
                        return (0, r.jsx)(
                            a.Drp,
                            {
                                id: "listen",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: {
                                    type: "icon",
                                    icon: e.icon,
                                },
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void o.A.sendActivityInvite({
                                            channelId: t.id,
                                            type: E.xL.LISTEN,
                                            activity: n,
                                            location: B[B.length - 1],
                                        })
                                    );
                                },
                            },
                            "listen",
                        );
                    case x.v.INVITE_TO_WATCH:
                        return (0, r.jsx)(
                            a.Drp,
                            {
                                id: "watch",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: {
                                    type: "icon",
                                    icon: e.icon,
                                },
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void o.A.sendActivityInvite({
                                            channelId: t.id,
                                            type: E.xL.WATCH,
                                            activity: n,
                                            location: B[B.length - 1],
                                        })
                                    );
                                },
                            },
                            "watch",
                        );
                    case x.v.CREATE_THREAD:
                        return (0, r.jsx)(
                            a.Drp,
                            {
                                id: "THREAD",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: {
                                    type: "icon",
                                    icon: e.icon,
                                },
                                action: K,
                            },
                            "THREAD",
                        );
                    case x.v.SLASH_COMMAND:
                        return (0, r.jsx)(
                            a.Drp,
                            {
                                id: "SLASH_COMMAND",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: {
                                    type: "icon",
                                    icon: e.icon,
                                },
                                action: W,
                            },
                            "SLASH_COMMAND",
                        );
                    case x.v.APP_LAUNCHER:
                        return (0, r.jsx)(
                            a.Drp,
                            {
                                id: "APP_LAUNCHER",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: {
                                    type: "icon",
                                    icon: e.icon,
                                },
                                action: () => (0, d.R)(p.s4.TEXT, P, void 0, t.id),
                            },
                            "APP_LAUNCHER",
                        );
                    case x.v.ACTIVITY:
                        return (0, r.jsx)(
                            a.Drp,
                            {
                                id: "activity",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: {
                                    type: "icon",
                                    icon: e.icon,
                                },
                                action: q,
                            },
                            "activity",
                        );
                    case x.v.SCHEDULED_MESSAGE:
                        return (0, r.jsx)(
                            a.Drp,
                            {
                                id: "scheduled_message",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: {
                                    type: "icon",
                                    icon: e.icon,
                                },
                                action: () =>
                                    (0, g.e0)({
                                        channel: t,
                                    }),
                                children: F,
                            },
                            "scheduled_message",
                        );
                    case x.v.SUMMARIZE_THREAD:
                        return (0, r.jsx)(
                            a.Drp,
                            {
                                id: "summarize_thread",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: {
                                    type: "icon",
                                    icon: e.icon,
                                },
                                action: () => m.A.summarizeThread(t),
                                loading: H,
                                disabled: H,
                                children: H
                                    ? null
                                    : (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(
                                                  a.Drp,
                                                  {
                                                      id: "summarize_thread_for_everyone",
                                                      label: I.intl.string(I.t.eCzSdd),
                                                      iconLeft: a.nFg,
                                                      leadingAccessory: {
                                                          type: "icon",
                                                          icon: a.nFg,
                                                      },
                                                      action: () => m.A.summarizeThread(t, !1),
                                                  },
                                                  "summarize_thread_for_everyone",
                                              ),
                                              (0, r.jsx)(
                                                  a.Drp,
                                                  {
                                                      id: "summarize_thread_for_me",
                                                      label: I.intl.string(I.t["HOe+Hq"]),
                                                      iconLeft: a.nys,
                                                      leadingAccessory: {
                                                          type: "icon",
                                                          icon: a.nys,
                                                      },
                                                      action: () => m.A.summarizeThread(t),
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
