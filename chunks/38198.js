n.d(t, { A: () => R });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(554146),
    r = n(192308),
    o = n(477782),
    c = n(177953),
    d = n(950305),
    u = n(861672),
    h = n(308368),
    m = n(688810),
    A = n(826673),
    g = n(970244),
    _ = n(867455),
    p = n(780057),
    f = n(747926),
    E = n(954571),
    C = n(203982),
    x = n(453771),
    S = n(518960),
    I = n(408018),
    v = n(447155),
    N = n(652215),
    T = n(49999),
    y = n(412136),
    b = n(985018);
let j = /(.*)```(\w+)\n(.*)```(.*)/s;
function R(e) {
    let {
            channel: t,
            options: R,
            onFileUpload: M,
            onClose: L,
            onSelect: D,
            draftType: P,
            editorTextContent: O,
            setValue: w,
            openClips: U,
        } = e,
        { analyticsLocations: k } = (0, m.Ay)(),
        G = (0, g.s)({ channel: t }),
        F = (0, a.bG)([p.A], () => p.A.isInProgress());
    function H() {
        (0, f.Tv)(t, void 0, "Plus Button");
    }
    function B() {
        E.default.track(N.HAw.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), w("/", (0, I.x7)("/"));
    }
    function V() {
        U();
    }
    function W() {
        (0, A.Dr)(s.M.POLLS_CHAT_INPUT_COACHMARK, { dismissAction: T.i.TAKE_ACTION }),
            (0, r.openModalLazy)(
                async () => {
                    let { default: e } = await n.e("52786").then(n.bind(n, 489449));
                    return (n) => (0, i.jsx)(e, { ...n, channel: t });
                },
                { modalKey: y.sm },
            );
    }
    function z() {
        let e = O,
            n = "txt",
            i = "",
            l = O.match(j);
        null != l && ((i = l[1]), (n = l[2]), (e = l[3]), (i += l[4])),
            (0, S.R)([(0, x.VE)(new Blob([e], { type: "text/plain" }), `message.${n}`, "text/plain")], t, P),
            C._.dispatchToLastSubscribed(N.jej.CLEAR_TEXT),
            "" !== i && C._.dispatchToLastSubscribed(N.jej.INSERT_TEXT, { plainText: i });
    }
    return (
        l.useEffect(() => {
            E.default.track(N.HAw.OPEN_POPOUT, { type: "Send Attachment", channel_id: t.id, guild_id: t.guild_id });
        }, [t.guild_id, t.id]),
        (0, i.jsx)(u.W, {
            "data-menu-migrated": !0,
            onSelect: D,
            navId: "channel-attach",
            onClose: L,
            "aria-label": b.intl.string(b.t.Xm41aV),
            children: R.map(function (e) {
                switch (e.type) {
                    case v.v.UPLOAD_A_FILE:
                        return (0, i.jsx)(
                            o.Dr,
                            {
                                id: "upload-file",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: M,
                            },
                            "upload-file",
                        );
                    case v.v.UPLOAD_TEXT_AS_FILE:
                        if ("" === O) return null;
                        return (0, i.jsx)(
                            o.Dr,
                            {
                                id: "upload-text-as-file",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: z,
                            },
                            "upload-text-as-file",
                        );
                    case v.v.CLIPS:
                        return (0, i.jsx)(
                            o.Dr,
                            {
                                id: "clips",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                badge: null != e.badgeVal && e.badgeVal > 0 ? { text: e.badgeVal.toString() } : void 0,
                                action: V,
                            },
                            "clips",
                        );
                    case v.v.POLL:
                        return (0, i.jsx)(
                            o.Dr,
                            {
                                id: "poll",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: W,
                            },
                            "poll",
                        );
                    case v.v.INVITE_TO_PLAY_GAME:
                        return (0, i.jsx)(
                            o.Dr,
                            {
                                id: "play",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void h.A.sendActivityInvite({
                                            channelId: t.id,
                                            type: N.xL.JOIN,
                                            activity: n,
                                            location: k[k.length - 1],
                                        })
                                    );
                                },
                            },
                            "play",
                        );
                    case v.v.INVITE_TO_LISTEN:
                        return (0, i.jsx)(
                            o.Dr,
                            {
                                id: "listen",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void h.A.sendActivityInvite({
                                            channelId: t.id,
                                            type: N.xL.LISTEN,
                                            activity: n,
                                            location: k[k.length - 1],
                                        })
                                    );
                                },
                            },
                            "listen",
                        );
                    case v.v.INVITE_TO_WATCH:
                        return (0, i.jsx)(
                            o.Dr,
                            {
                                id: "watch",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void h.A.sendActivityInvite({
                                            channelId: t.id,
                                            type: N.xL.WATCH,
                                            activity: n,
                                            location: k[k.length - 1],
                                        })
                                    );
                                },
                            },
                            "watch",
                        );
                    case v.v.CREATE_THREAD:
                        return (0, i.jsx)(
                            o.Dr,
                            {
                                id: "THREAD",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: H,
                            },
                            "THREAD",
                        );
                    case v.v.SLASH_COMMAND:
                        return (0, i.jsx)(
                            o.Dr,
                            {
                                id: "SLASH_COMMAND",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: B,
                            },
                            "SLASH_COMMAND",
                        );
                    case v.v.SCHEDULED_MESSAGE:
                        return (0, i.jsx)(
                            o.Dr,
                            {
                                id: "scheduled_message",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => (0, g.e0)({ channel: t }),
                                children: G,
                            },
                            "scheduled_message",
                        );
                    case v.v.SUMMARIZE_THREAD:
                        return (0, i.jsx)(
                            o.Dr,
                            {
                                id: "summarize_thread",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => _.A.summarizeThread(t),
                                loading: F,
                                disabled: F,
                                children: F
                                    ? null
                                    : (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(
                                                  o.Dr,
                                                  {
                                                      id: "summarize_thread_for_everyone",
                                                      label: b.intl.string(b.t.eCzSdd),
                                                      iconLeft: c.n,
                                                      leadingAccessory: { type: "icon", icon: c.n },
                                                      action: () => _.A.summarizeThread(t, !1),
                                                  },
                                                  "summarize_thread_for_everyone",
                                              ),
                                              (0, i.jsx)(
                                                  o.Dr,
                                                  {
                                                      id: "summarize_thread_for_me",
                                                      label: b.intl.string(b.t["HOe+Hq"]),
                                                      iconLeft: d.n,
                                                      leadingAccessory: { type: "icon", icon: d.n },
                                                      action: () => _.A.summarizeThread(t),
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
