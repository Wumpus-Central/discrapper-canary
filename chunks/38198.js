n.d(t, {
    A: () => S,
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
    c = n(688810),
    u = n(826673),
    d = n(970244),
    h = n(867455),
    p = n(780057),
    g = n(747926),
    f = n(954571),
    m = n(203982),
    b = n(453771),
    A = n(518960),
    y = n(408018),
    O = n(447155),
    _ = n(652215),
    j = n(49999),
    x = n(412136),
    v = n(985018),
    E = n(545156);
let C = RegExp("(.*)```(\\w+)\\n(.*)```(.*)", "s");

function S(e) {
    let {
            channel: t,
            options: S,
            onFileUpload: I,
            onClose: N,
            onSelect: T,
            draftType: P,
            editorTextContent: w,
            setValue: R,
            openClips: D,
        } = e,
        { analyticsLocations: L } = (0, c.Ay)(),
        M = (0, d.s)({
            channel: t,
        }),
        G = (0, i.bG)([p.A], () => p.A.isInProgress());

    function k() {
        (0, g.Tv)(t, void 0, "Plus Button");
    }

    function U() {
        f.default.track(_.HAw.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), R("/", (0, y.x7)("/"));
    }

    function V() {
        D();
    }

    function B() {
        (0, u.Dr)(s.M.POLLS_CHAT_INPUT_COACHMARK, {
            dismissAction: j.i.TAKE_ACTION,
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
                    modalKey: x.sm,
                },
            );
    }

    function H() {
        let e = w,
            n = "txt",
            r = "",
            l = w.match(C);
        null != l && ((r = l[1]), (n = l[2]), (e = l[3]), (r += l[4])),
            (0, A.R)(
                [
                    (0, b.VE)(
                        new Blob([e], {
                            type: "text/plain",
                        }),
                        "message.".concat(n),
                        "text/plain",
                    ),
                ],
                t,
                P,
            ),
            m._.dispatchToLastSubscribed(_.jej.CLEAR_TEXT),
            "" !== r &&
                m._.dispatchToLastSubscribed(_.jej.INSERT_TEXT, {
                    plainText: r,
                });
    }
    return (
        l.useEffect(() => {
            f.default.track(_.HAw.OPEN_POPOUT, {
                type: "Send Attachment",
                channel_id: t.id,
                guild_id: t.guild_id,
            });
        }, [t.guild_id, t.id]),
        (0, r.jsx)(a.W1t, {
            "data-menu-needs-migration": !0,
            onSelect: T,
            navId: "channel-attach",
            onClose: N,
            "aria-label": v.intl.string(v.t.Xm41aV),
            className: E.MK,
            children: S.map(function (e) {
                switch (e.type) {
                    case O.v.UPLOAD_A_FILE:
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
                                action: I,
                            },
                            "upload-file",
                        );
                    case O.v.UPLOAD_TEXT_AS_FILE:
                        if ("" === w) return null;
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
                                action: H,
                            },
                            "upload-text-as-file",
                        );
                    case O.v.CLIPS:
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
                                action: V,
                            },
                            "clips",
                        );
                    case O.v.POLL:
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
                                action: B,
                            },
                            "poll",
                        );
                    case O.v.INVITE_TO_PLAY_GAME:
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
                                            type: _.xL.JOIN,
                                            activity: n,
                                            location: L[L.length - 1],
                                        })
                                    );
                                },
                            },
                            "play",
                        );
                    case O.v.INVITE_TO_LISTEN:
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
                                            type: _.xL.LISTEN,
                                            activity: n,
                                            location: L[L.length - 1],
                                        })
                                    );
                                },
                            },
                            "listen",
                        );
                    case O.v.INVITE_TO_WATCH:
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
                                            type: _.xL.WATCH,
                                            activity: n,
                                            location: L[L.length - 1],
                                        })
                                    );
                                },
                            },
                            "watch",
                        );
                    case O.v.CREATE_THREAD:
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
                                action: k,
                            },
                            "THREAD",
                        );
                    case O.v.SLASH_COMMAND:
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
                                action: U,
                            },
                            "SLASH_COMMAND",
                        );
                    case O.v.SCHEDULED_MESSAGE:
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
                                    (0, d.e0)({
                                        channel: t,
                                    }),
                                children: M,
                            },
                            "scheduled_message",
                        );
                    case O.v.SUMMARIZE_THREAD:
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
                                action: () => h.A.summarizeThread(t),
                                loading: G,
                                disabled: G,
                                children: G
                                    ? null
                                    : (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(
                                                  a.Drp,
                                                  {
                                                      id: "summarize_thread_for_everyone",
                                                      label: v.intl.string(v.t.eCzSdd),
                                                      iconLeft: a.nFg,
                                                      leadingAccessory: {
                                                          type: "icon",
                                                          icon: a.nFg,
                                                      },
                                                      action: () => h.A.summarizeThread(t, !1),
                                                  },
                                                  "summarize_thread_for_everyone",
                                              ),
                                              (0, r.jsx)(
                                                  a.Drp,
                                                  {
                                                      id: "summarize_thread_for_me",
                                                      label: v.intl.string(v.t["HOe+Hq"]),
                                                      iconLeft: a.nys,
                                                      leadingAccessory: {
                                                          type: "icon",
                                                          icon: a.nys,
                                                      },
                                                      action: () => h.A.summarizeThread(t),
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
