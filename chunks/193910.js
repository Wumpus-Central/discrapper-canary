n.d(t, { Z: () => A }), n(413496), n(433524), n(35282), n(539854), n(388685);
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
    b = n(488131),
    C = n(375954),
    y = n(626135),
    _ = n(585483),
    v = n(403182),
    x = n(127654),
    O = n(752305),
    j = n(951211),
    E = n(981631),
    S = n(921944),
    P = n(489887),
    I = n(388032),
    Z = n(749723);
let T = RegExp("(.*)```(\\w+)\\n(.*)```(.*)", "s");
function N() {
    let e = (0, a.e7)([C.Z], () => C.Z.hasCurrentUserSentMessageSinceAppStart()),
        t = [];
    e && t.push(o.z.ACTIVITIES_CHAT_MENU_NEW_BADGE);
    let [n] = (0, f.cv)(t);
    return (
        r.useEffect(
            () => () => {
                n === o.z.ACTIVITIES_CHAT_MENU_NEW_BADGE &&
                    (0, h.Q3)(o.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, { dismissAction: S.L.TAKE_ACTION });
            },
            [n],
        ),
        (0, i.jsx)(m.ZP, {
            contentTypes: t,
            children: (e) => {
                let { visibleContent: t } = e;
                return t === o.z.ACTIVITIES_CHAT_MENU_NEW_BADGE
                    ? (0, i.jsx)(s.IGR, {
                          text: I.intl.string(I.t.y2b7CA),
                          color: l.Z.BUTTON_DANGER_BACKGROUND,
                      })
                    : null;
            },
        })
    );
}
function A(e) {
    let {
            channel: t,
            options: a,
            onFileUpload: f,
            onClose: m,
            onSelect: C,
            draftType: A,
            editorTextContent: w,
            setValue: M,
            openClips: R,
        } = e,
        { analyticsLocations: L, newestAnalyticsLocation: D } = (0, d.ZP)(),
        k = (0, g.Dt)({ channel: t });
    function U() {
        (0, b.R6)(t, void 0, "Plus Button");
    }
    function B() {
        y.default.track(E.rMx.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), M("/", (0, O.JM)("/"));
    }
    function H() {
        R();
    }
    function V() {
        (0, h.Q3)(o.z.POLLS_CHAT_INPUT_COACHMARK, { dismissAction: S.L.TAKE_ACTION }),
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
                { modalKey: P.$z },
            );
    }
    function F() {
        y.default.track(E.rMx.CHANNEL_ATTACH_MENU_START_ACTIVITY_CLICKED, {
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
                analyticsLocation: D,
            }),
            (0, u.w1)({ guildId: t.guild_id });
    }
    function G() {
        let e = w,
            n = "txt",
            i = "",
            r = w.match(T);
        null != r && ((i = r[1]), (n = r[2]), (e = r[3]), (i += r[4])),
            (0, x.d)([(0, v.dp)(new Blob([e], { type: "text/plain" }), "message.".concat(n), "text/plain")], t, A),
            _.S.dispatchToLastSubscribed(E.CkL.CLEAR_TEXT),
            "" !== i && _.S.dispatchToLastSubscribed(E.CkL.INSERT_TEXT, { plainText: i });
    }
    return (
        r.useEffect(() => {
            y.default.track(E.rMx.OPEN_POPOUT, {
                type: "Send Attachment",
                channel_id: t.id,
                guild_id: t.guild_id,
            });
        }, [t.guild_id, t.id]),
        (0, i.jsx)(s.v2r, {
            onSelect: C,
            navId: "channel-attach",
            onClose: m,
            "aria-label": I.intl.string(I.t.Xm41aW),
            className: Z.menu,
            children: a.map(function (e) {
                var n;
                let r = (0, i.jsxs)("div", {
                    className: Z.optionLabel,
                    children: [
                        (0, i.jsx)(e.icon, {
                            className: Z.optionIcon,
                            color: "currentColor",
                        }),
                        (0, i.jsx)("div", {
                            className: Z.optionName,
                            children: e.display,
                        }),
                        null != e.badgeVal &&
                            e.badgeVal > 0 &&
                            (0, i.jsx)(s.mAB, {
                                className: Z.badge,
                                color: null != (n = e.badgeColor) ? n : l.Z.STATUS_DANGER,
                                count: e.badgeVal,
                            }),
                    ],
                });
                switch (e.type) {
                    case j.r.UPLOAD_A_FILE:
                        return (0, i.jsx)(
                            s.sNh,
                            {
                                id: "upload-file",
                                label: r,
                                action: f,
                            },
                            "upload-file",
                        );
                    case j.r.UPLOAD_TEXT_AS_FILE:
                        if ("" === w) return null;
                        return (0, i.jsx)(
                            s.sNh,
                            {
                                id: "upload-text-as-file",
                                label: r,
                                action: G,
                            },
                            "upload-text-as-file",
                        );
                    case j.r.CLIPS:
                        return (0, i.jsx)(
                            s.sNh,
                            {
                                id: "clips",
                                label: r,
                                action: H,
                            },
                            "clips",
                        );
                    case j.r.POLL:
                        return (0, i.jsx)(
                            s.sNh,
                            {
                                id: "poll",
                                label: r,
                                action: V,
                            },
                            "poll",
                        );
                    case j.r.INVITE_TO_PLAY_GAME:
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
                                            type: E.mFx.JOIN,
                                            activity: n,
                                            location: L[L.length - 1],
                                        })
                                    );
                                },
                            },
                            "play",
                        );
                    case j.r.INVITE_TO_LISTEN:
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
                                            type: E.mFx.LISTEN,
                                            activity: n,
                                            location: L[L.length - 1],
                                        })
                                    );
                                },
                            },
                            "listen",
                        );
                    case j.r.INVITE_TO_WATCH:
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
                                            type: E.mFx.WATCH,
                                            activity: n,
                                            location: L[L.length - 1],
                                        })
                                    );
                                },
                            },
                            "watch",
                        );
                    case j.r.CREATE_THREAD:
                        return (0, i.jsx)(
                            s.sNh,
                            {
                                id: "THREAD",
                                label: r,
                                action: U,
                            },
                            "THREAD",
                        );
                    case j.r.SLASH_COMMAND:
                        return (0, i.jsx)(
                            s.sNh,
                            {
                                id: "SLASH_COMMAND",
                                label: r,
                                action: B,
                            },
                            "SLASH_COMMAND",
                        );
                    case j.r.ACTIVITY:
                        return (0, i.jsx)(
                            s.sNh,
                            {
                                id: "activity",
                                label: r,
                                action: F,
                                hint: (0, i.jsx)(N, {}),
                            },
                            "activity",
                        );
                    case j.r.SCHEDULED_MESSAGE:
                        return (0, i.jsx)(
                            s.sNh,
                            {
                                id: "scheduled_message",
                                label: r,
                                action: () => (0, g.$f)({ channel: t }),
                                children: k,
                            },
                            "scheduled_message",
                        );
                    default:
                        return null;
                }
            }),
        })
    );
}
