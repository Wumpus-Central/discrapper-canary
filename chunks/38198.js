n.d(t, { A: () => y });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(554146),
    r = n(397927),
    o = n(308368),
    c = n(688810),
    d = n(826673),
    u = n(970244),
    h = n(867455),
    m = n(780057),
    A = n(747926),
    g = n(954571),
    p = n(203982),
    f = n(453771),
    _ = n(518960),
    E = n(408018),
    x = n(447155),
    C = n(652215),
    S = n(49999),
    I = n(412136),
    T = n(985018);
let N = /(.*)```(\w+)\n(.*)```(.*)/s;
function y(e) {
    let {
            channel: t,
            options: y,
            onFileUpload: b,
            onClose: v,
            onSelect: j,
            draftType: R,
            editorTextContent: M,
            setValue: D,
            openClips: O,
        } = e,
        { analyticsLocations: L } = (0, c.Ay)(),
        P = (0, u.s)({ channel: t }),
        k = (0, s.bG)([m.A], () => m.A.isInProgress());
    function w() {
        (0, A.Tv)(t, void 0, "Plus Button");
    }
    function U() {
        g.default.track(C.HAw.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), D("/", (0, E.x7)("/"));
    }
    function G() {
        O();
    }
    function F() {
        (0, d.Dr)(a.M.POLLS_CHAT_INPUT_COACHMARK, { dismissAction: S.i.TAKE_ACTION }),
            (0, r.mMO)(
                async () => {
                    let { default: e } = await n.e("52786").then(n.bind(n, 489449));
                    return (n) => (0, i.jsx)(e, { ...n, channel: t });
                },
                { modalKey: I.sm },
            );
    }
    function H() {
        let e = M,
            n = "txt",
            i = "",
            l = M.match(N);
        null != l && ((i = l[1]), (n = l[2]), (e = l[3]), (i += l[4])),
            (0, _.R)([(0, f.VE)(new Blob([e], { type: "text/plain" }), `message.${n}`, "text/plain")], t, R),
            p._.dispatchToLastSubscribed(C.jej.CLEAR_TEXT),
            "" !== i && p._.dispatchToLastSubscribed(C.jej.INSERT_TEXT, { plainText: i });
    }
    return (
        l.useEffect(() => {
            g.default.track(C.HAw.OPEN_POPOUT, { type: "Send Attachment", channel_id: t.id, guild_id: t.guild_id });
        }, [t.guild_id, t.id]),
        (0, i.jsx)(r.W1t, {
            "data-menu-migrated": !0,
            onSelect: j,
            navId: "channel-attach",
            onClose: v,
            "aria-label": T.intl.string(T.t.Xm41aV),
            children: y.map(function (e) {
                switch (e.type) {
                    case x.v.UPLOAD_A_FILE:
                        return (0, i.jsx)(
                            r.Drp,
                            {
                                id: "upload-file",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: b,
                            },
                            "upload-file",
                        );
                    case x.v.UPLOAD_TEXT_AS_FILE:
                        if ("" === M) return null;
                        return (0, i.jsx)(
                            r.Drp,
                            {
                                id: "upload-text-as-file",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: H,
                            },
                            "upload-text-as-file",
                        );
                    case x.v.CLIPS:
                        return (0, i.jsx)(
                            r.Drp,
                            {
                                id: "clips",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                badge: null != e.badgeVal && e.badgeVal > 0 ? { text: e.badgeVal.toString() } : void 0,
                                action: G,
                            },
                            "clips",
                        );
                    case x.v.POLL:
                        return (0, i.jsx)(
                            r.Drp,
                            {
                                id: "poll",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: F,
                            },
                            "poll",
                        );
                    case x.v.INVITE_TO_PLAY_GAME:
                        return (0, i.jsx)(
                            r.Drp,
                            {
                                id: "play",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void o.A.sendActivityInvite({
                                            channelId: t.id,
                                            type: C.xL.JOIN,
                                            activity: n,
                                            location: L[L.length - 1],
                                        })
                                    );
                                },
                            },
                            "play",
                        );
                    case x.v.INVITE_TO_LISTEN:
                        return (0, i.jsx)(
                            r.Drp,
                            {
                                id: "listen",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void o.A.sendActivityInvite({
                                            channelId: t.id,
                                            type: C.xL.LISTEN,
                                            activity: n,
                                            location: L[L.length - 1],
                                        })
                                    );
                                },
                            },
                            "listen",
                        );
                    case x.v.INVITE_TO_WATCH:
                        return (0, i.jsx)(
                            r.Drp,
                            {
                                id: "watch",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void o.A.sendActivityInvite({
                                            channelId: t.id,
                                            type: C.xL.WATCH,
                                            activity: n,
                                            location: L[L.length - 1],
                                        })
                                    );
                                },
                            },
                            "watch",
                        );
                    case x.v.CREATE_THREAD:
                        return (0, i.jsx)(
                            r.Drp,
                            {
                                id: "THREAD",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: w,
                            },
                            "THREAD",
                        );
                    case x.v.SLASH_COMMAND:
                        return (0, i.jsx)(
                            r.Drp,
                            {
                                id: "SLASH_COMMAND",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: U,
                            },
                            "SLASH_COMMAND",
                        );
                    case x.v.SCHEDULED_MESSAGE:
                        return (0, i.jsx)(
                            r.Drp,
                            {
                                id: "scheduled_message",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => (0, u.e0)({ channel: t }),
                                children: P,
                            },
                            "scheduled_message",
                        );
                    case x.v.SUMMARIZE_THREAD:
                        return (0, i.jsx)(
                            r.Drp,
                            {
                                id: "summarize_thread",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => h.A.summarizeThread(t),
                                loading: k,
                                disabled: k,
                                children: k
                                    ? null
                                    : (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(
                                                  r.Drp,
                                                  {
                                                      id: "summarize_thread_for_everyone",
                                                      label: T.intl.string(T.t.eCzSdd),
                                                      iconLeft: r.nFg,
                                                      leadingAccessory: { type: "icon", icon: r.nFg },
                                                      action: () => h.A.summarizeThread(t, !1),
                                                  },
                                                  "summarize_thread_for_everyone",
                                              ),
                                              (0, i.jsx)(
                                                  r.Drp,
                                                  {
                                                      id: "summarize_thread_for_me",
                                                      label: T.intl.string(T.t["HOe+Hq"]),
                                                      iconLeft: r.nys,
                                                      leadingAccessory: { type: "icon", icon: r.nys },
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
