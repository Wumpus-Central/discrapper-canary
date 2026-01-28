n.d(t, {
    A: () => N,
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
    d = n(975412),
    p = n(826673),
    h = n(970244),
    f = n(867455),
    g = n(780057),
    m = n(747926),
    b = n(954571),
    A = n(203982),
    y = n(453771),
    _ = n(518960),
    O = n(408018),
    j = n(447155),
    v = n(652215),
    x = n(49999),
    E = n(412136),
    C = n(985018),
    S = n(545156);
let I = RegExp("(.*)```(\\w+)\\n(.*)```(.*)", "s");

function N(e) {
    let {
            channel: t,
            options: N,
            onFileUpload: T,
            onClose: P,
            onSelect: w,
            draftType: R,
            editorTextContent: D,
            setValue: M,
            openClips: L,
        } = e,
        { analyticsLocations: k, newestAnalyticsLocation: G } = (0, u.Ay)(),
        U = (0, h.s)({
            channel: t,
        }),
        B = (0, i.bG)([g.A], () => g.A.isInProgress());

    function V() {
        (0, m.Tv)(t, void 0, "Plus Button");
    }

    function F() {
        b.default.track(v.HAw.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), M("/", (0, O.x7)("/"));
    }

    function H() {
        L();
    }

    function K() {
        (0, p.Dr)(s.M.POLLS_CHAT_INPUT_COACHMARK, {
            dismissAction: x.i.TAKE_ACTION,
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
                    modalKey: E.sm,
                },
            );
    }

    function W() {
        b.default.track(v.HAw.CHANNEL_ATTACH_MENU_START_ACTIVITY_CLICKED, {
            channel_type: t.type,
            channel_id: t.id,
            guild_id: t.guild_id,
        }),
            (0, d.A)({
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
                analyticsLocation: G,
            }),
            (0, c.LV)({
                guildId: t.guild_id,
            });
    }

    function z() {
        let e = D,
            n = "txt",
            r = "",
            l = D.match(I);
        null != l && ((r = l[1]), (n = l[2]), (e = l[3]), (r += l[4])),
            (0, _.R)(
                [
                    (0, y.VE)(
                        new Blob([e], {
                            type: "text/plain",
                        }),
                        "message.".concat(n),
                        "text/plain",
                    ),
                ],
                t,
                R,
            ),
            A._.dispatchToLastSubscribed(v.jej.CLEAR_TEXT),
            "" !== r &&
                A._.dispatchToLastSubscribed(v.jej.INSERT_TEXT, {
                    plainText: r,
                });
    }
    return (
        l.useEffect(() => {
            b.default.track(v.HAw.OPEN_POPOUT, {
                type: "Send Attachment",
                channel_id: t.id,
                guild_id: t.guild_id,
            });
        }, [t.guild_id, t.id]),
        (0, r.jsx)(a.W1t, {
            "data-menu-needs-migration": !0,
            onSelect: w,
            navId: "channel-attach",
            onClose: P,
            "aria-label": C.intl.string(C.t.Xm41aV),
            className: S.MK,
            children: N.map(function (e) {
                switch (e.type) {
                    case j.v.UPLOAD_A_FILE:
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
                                action: T,
                            },
                            "upload-file",
                        );
                    case j.v.UPLOAD_TEXT_AS_FILE:
                        if ("" === D) return null;
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
                                action: z,
                            },
                            "upload-text-as-file",
                        );
                    case j.v.CLIPS:
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
                                action: H,
                            },
                            "clips",
                        );
                    case j.v.POLL:
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
                                action: K,
                            },
                            "poll",
                        );
                    case j.v.INVITE_TO_PLAY_GAME:
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
                                            type: v.xL.JOIN,
                                            activity: n,
                                            location: k[k.length - 1],
                                        })
                                    );
                                },
                            },
                            "play",
                        );
                    case j.v.INVITE_TO_LISTEN:
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
                                            type: v.xL.LISTEN,
                                            activity: n,
                                            location: k[k.length - 1],
                                        })
                                    );
                                },
                            },
                            "listen",
                        );
                    case j.v.INVITE_TO_WATCH:
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
                                            type: v.xL.WATCH,
                                            activity: n,
                                            location: k[k.length - 1],
                                        })
                                    );
                                },
                            },
                            "watch",
                        );
                    case j.v.CREATE_THREAD:
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
                                action: V,
                            },
                            "THREAD",
                        );
                    case j.v.SLASH_COMMAND:
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
                                action: F,
                            },
                            "SLASH_COMMAND",
                        );
                    case j.v.ACTIVITY:
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
                                action: W,
                            },
                            "activity",
                        );
                    case j.v.SCHEDULED_MESSAGE:
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
                                    (0, h.e0)({
                                        channel: t,
                                    }),
                                children: U,
                            },
                            "scheduled_message",
                        );
                    case j.v.SUMMARIZE_THREAD:
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
                                action: () => f.A.summarizeThread(t),
                                loading: B,
                                disabled: B,
                                children: B
                                    ? null
                                    : (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(
                                                  a.Drp,
                                                  {
                                                      id: "summarize_thread_for_everyone",
                                                      label: C.intl.string(C.t.eCzSdd),
                                                      iconLeft: a.nFg,
                                                      leadingAccessory: {
                                                          type: "icon",
                                                          icon: a.nFg,
                                                      },
                                                      action: () => f.A.summarizeThread(t, !1),
                                                  },
                                                  "summarize_thread_for_everyone",
                                              ),
                                              (0, r.jsx)(
                                                  a.Drp,
                                                  {
                                                      id: "summarize_thread_for_me",
                                                      label: C.intl.string(C.t["HOe+Hq"]),
                                                      iconLeft: a.nys,
                                                      leadingAccessory: {
                                                          type: "icon",
                                                          icon: a.nys,
                                                      },
                                                      action: () => f.A.summarizeThread(t),
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
