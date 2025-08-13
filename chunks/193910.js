n.d(t, { Z: () => j }), n(413496), n(433524), n(35282), n(539854), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(831209),
    a = n(442837),
    s = n(704215),
    l = n(481060),
    c = n(278323),
    u = n(566620),
    d = n(906732),
    f = n(397698),
    _ = n(266454),
    p = n(706140),
    h = n(243778),
    m = n(618857),
    g = n(488131),
    E = n(375954),
    b = n(626135),
    y = n(585483),
    O = n(403182),
    v = n(127654),
    I = n(752305),
    T = n(951211),
    S = n(981631),
    A = n(921944),
    N = n(489887),
    C = n(388032),
    R = n(115203);
function P(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function w(e) {
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
                P(e, t, n[t]);
            });
    }
    return e;
}
function D(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let x = RegExp("(.*)```(\\w+)\\n(.*)```(.*)", "s");
function M() {
    let e = (0, a.e7)([E.Z], () => E.Z.hasCurrentUserSentMessageSinceAppStart()),
        t = [];
    e && t.push(s.z.ACTIVITIES_CHAT_MENU_NEW_BADGE);
    let [n] = (0, p.cv)(t);
    return (
        i.useEffect(
            () => () => {
                n === s.z.ACTIVITIES_CHAT_MENU_NEW_BADGE &&
                    (0, _.Q3)(s.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, { dismissAction: A.L.TAKE_ACTION });
            },
            [n],
        ),
        (0, r.jsx)(h.ZP, {
            contentTypes: t,
            children: (e) => {
                let { visibleContent: t } = e;
                return t === s.z.ACTIVITIES_CHAT_MENU_NEW_BADGE
                    ? (0, r.jsx)(l.IGR, {
                          text: C.intl.string(C.t.y2b7CA),
                          color: o.Z.BUTTON_DANGER_BACKGROUND,
                      })
                    : null;
            },
        })
    );
}
function j(e) {
    let {
            channel: t,
            options: a,
            onFileUpload: p,
            onClose: h,
            onSelect: E,
            draftType: P,
            editorTextContent: D,
            setValue: j,
            openClips: k,
        } = e,
        { analyticsLocations: U, newestAnalyticsLocation: G } = (0, d.ZP)(),
        B = (0, m.Dt)({ channel: t });
    function Z(e) {
        c.Z.sendActivityInvite({
            channelId: t.id,
            type: S.mFx.JOIN,
            activity: e,
            location: U[U.length - 1],
        });
    }
    function F(e) {
        c.Z.sendActivityInvite({
            channelId: t.id,
            type: S.mFx.LISTEN,
            activity: e,
            location: U[U.length - 1],
        });
    }
    function V(e) {
        c.Z.sendActivityInvite({
            channelId: t.id,
            type: S.mFx.WATCH,
            activity: e,
            location: U[U.length - 1],
        });
    }
    function H() {
        (0, g.R6)(t, void 0, "Plus Button");
    }
    function Y() {
        b.default.track(S.rMx.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), j("/", (0, I.JM)("/"));
    }
    function W() {
        k();
    }
    function K() {
        (0, _.Q3)(s.z.POLLS_CHAT_INPUT_COACHMARK, { dismissAction: A.L.TAKE_ACTION }),
            (0, l.ZDy)(
                async () => {
                    let { default: e } = await n.e("68784").then(n.bind(n, 611611));
                    return (n) => (0, r.jsx)(e, L(w({}, n), { channel: t }));
                },
                { modalKey: N.$z },
            );
    }
    function z() {
        b.default.track(S.rMx.CHANNEL_ATTACH_MENU_START_ACTIVITY_CLICKED, {
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
                analyticsLocation: G,
            }),
            (0, u.w1)({ guildId: t.guild_id });
    }
    function q() {
        let e = D,
            n = "txt",
            r = "",
            i = D.match(x);
        null != i && ((r = i[1]), (n = i[2]), (e = i[3]), (r += i[4])),
            (0, v.d)([(0, O.dp)(new Blob([e], { type: "text/plain" }), "message.".concat(n), "text/plain")], t, P),
            y.S.dispatchToLastSubscribed(S.CkL.CLEAR_TEXT),
            "" !== r && y.S.dispatchToLastSubscribed(S.CkL.INSERT_TEXT, { plainText: r });
    }
    function X(e) {
        var n;
        let i = (0, r.jsxs)("div", {
            className: R.optionLabel,
            children: [
                (0, r.jsx)(e.icon, {
                    className: R.optionIcon,
                    color: "currentColor",
                }),
                (0, r.jsx)("div", {
                    className: R.optionName,
                    children: e.display,
                }),
                null != e.badgeVal &&
                    e.badgeVal > 0 &&
                    (0, r.jsx)(l.mAB, {
                        className: R.badge,
                        color: null != (n = e.badgeColor) ? n : o.Z.STATUS_DANGER,
                        count: e.badgeVal,
                    }),
            ],
        });
        switch (e.type) {
            case T.r.UPLOAD_A_FILE:
                return (0, r.jsx)(
                    l.sNh,
                    {
                        id: "upload-file",
                        label: i,
                        action: p,
                    },
                    "upload-file",
                );
            case T.r.UPLOAD_TEXT_AS_FILE:
                if ("" === D) return null;
                return (0, r.jsx)(
                    l.sNh,
                    {
                        id: "upload-text-as-file",
                        label: i,
                        action: q,
                    },
                    "upload-text-as-file",
                );
            case T.r.CLIPS:
                return (0, r.jsx)(
                    l.sNh,
                    {
                        id: "clips",
                        label: i,
                        action: W,
                    },
                    "clips",
                );
            case T.r.POLL:
                return (0, r.jsx)(
                    l.sNh,
                    {
                        id: "poll",
                        label: i,
                        action: K,
                    },
                    "poll",
                );
            case T.r.INVITE_TO_PLAY_GAME:
                return (0, r.jsx)(
                    l.sNh,
                    {
                        id: "play",
                        label: i,
                        action: () => Z(e.activity),
                    },
                    "play",
                );
            case T.r.INVITE_TO_LISTEN:
                return (0, r.jsx)(
                    l.sNh,
                    {
                        id: "listen",
                        label: i,
                        action: () => F(e.activity),
                    },
                    "listen",
                );
            case T.r.INVITE_TO_WATCH:
                return (0, r.jsx)(
                    l.sNh,
                    {
                        id: "watch",
                        label: i,
                        action: () => V(e.activity),
                    },
                    "watch",
                );
            case T.r.CREATE_THREAD:
                return (0, r.jsx)(
                    l.sNh,
                    {
                        id: "THREAD",
                        label: i,
                        action: H,
                    },
                    "THREAD",
                );
            case T.r.SLASH_COMMAND:
                return (0, r.jsx)(
                    l.sNh,
                    {
                        id: "SLASH_COMMAND",
                        label: i,
                        action: Y,
                    },
                    "SLASH_COMMAND",
                );
            case T.r.ACTIVITY:
                return (0, r.jsx)(
                    l.sNh,
                    {
                        id: "activity",
                        label: i,
                        action: z,
                        hint: (0, r.jsx)(M, {}),
                    },
                    "activity",
                );
            case T.r.SCHEDULED_MESSAGE:
                return (0, r.jsx)(
                    l.sNh,
                    {
                        id: "scheduled_message",
                        label: i,
                        action: () => (0, m.$f)({ channel: t }),
                        children: B,
                    },
                    "scheduled_message",
                );
            default:
                return null;
        }
    }
    return (
        i.useEffect(() => {
            b.default.track(S.rMx.OPEN_POPOUT, {
                type: "Send Attachment",
                channel_id: t.id,
                guild_id: t.guild_id,
            });
        }, [t.guild_id, t.id]),
        (0, r.jsx)(l.v2r, {
            onSelect: E,
            navId: "channel-attach",
            onClose: h,
            "aria-label": C.intl.string(C.t.Xm41aW),
            className: R.menu,
            children: a.map(X),
        })
    );
}
