n.d(t, { A: () => y });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(554146),
    r = n(397927),
    o = n(308368),
    c = n(688810),
    d = n(826673),
    u = n(970244),
    h = n(867455),
    m = n(780057),
    A = n(747926),
    p = n(954571),
    g = n(203982),
    f = n(453771),
    _ = n(518960),
    E = n(408018),
    C = n(447155),
    x = n(652215),
    S = n(49999),
    T = n(412136),
    I = n(985018),
    N = n(545156);
let v = /(.*)```(\w+)\n(.*)```(.*)/s;
function y(e) {
    let {
            channel: t,
            options: y,
            onFileUpload: b,
            onClose: R,
            onSelect: j,
            draftType: M,
            editorTextContent: D,
            setValue: O,
            openClips: L,
        } = e,
        { analyticsLocations: P } = (0, c.Ay)(),
        w = (0, u.s)({ channel: t }),
        k = (0, a.bG)([m.A], () => m.A.isInProgress());
    function U() {
        (0, A.Tv)(t, void 0, "Plus Button");
    }
    function G() {
        p.default.track(x.HAw.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), O("/", (0, E.x7)("/"));
    }
    function F() {
        L();
    }
    function H() {
        (0, d.Dr)(s.M.POLLS_CHAT_INPUT_COACHMARK, { dismissAction: S.i.TAKE_ACTION }),
            (0, r.mMO)(
                async () => {
                    let { default: e } = await n.e("52786").then(n.bind(n, 489449));
                    return (n) => (0, i.jsx)(e, { ...n, channel: t });
                },
                { modalKey: T.sm },
            );
    }
    function B() {
        let e = D,
            n = "txt",
            i = "",
            l = D.match(v);
        null != l && ((i = l[1]), (n = l[2]), (e = l[3]), (i += l[4])),
            (0, _.R)([(0, f.VE)(new Blob([e], { type: "text/plain" }), `message.${n}`, "text/plain")], t, M),
            g._.dispatchToLastSubscribed(x.jej.CLEAR_TEXT),
            "" !== i && g._.dispatchToLastSubscribed(x.jej.INSERT_TEXT, { plainText: i });
    }
    return (
        l.useEffect(() => {
            p.default.track(x.HAw.OPEN_POPOUT, { type: "Send Attachment", channel_id: t.id, guild_id: t.guild_id });
        }, [t.guild_id, t.id]),
        (0, i.jsx)(r.W1t, {
            "data-menu-needs-migration": !0,
            onSelect: j,
            navId: "channel-attach",
            onClose: R,
            "aria-label": I.intl.string(I.t.Xm41aV),
            className: N.MK,
            children: y.map(function (e) {
                switch (e.type) {
                    case C.v.UPLOAD_A_FILE:
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
                    case C.v.UPLOAD_TEXT_AS_FILE:
                        if ("" === D) return null;
                        return (0, i.jsx)(
                            r.Drp,
                            {
                                id: "upload-text-as-file",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: B,
                            },
                            "upload-text-as-file",
                        );
                    case C.v.CLIPS:
                        return (0, i.jsx)(
                            r.Drp,
                            {
                                id: "clips",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                badge: null != e.badgeVal && e.badgeVal > 0 ? { text: e.badgeVal.toString() } : void 0,
                                action: F,
                            },
                            "clips",
                        );
                    case C.v.POLL:
                        return (0, i.jsx)(
                            r.Drp,
                            {
                                id: "poll",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: H,
                            },
                            "poll",
                        );
                    case C.v.INVITE_TO_PLAY_GAME:
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
                                            type: x.xL.JOIN,
                                            activity: n,
                                            location: P[P.length - 1],
                                        })
                                    );
                                },
                            },
                            "play",
                        );
                    case C.v.INVITE_TO_LISTEN:
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
                                            type: x.xL.LISTEN,
                                            activity: n,
                                            location: P[P.length - 1],
                                        })
                                    );
                                },
                            },
                            "listen",
                        );
                    case C.v.INVITE_TO_WATCH:
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
                                            type: x.xL.WATCH,
                                            activity: n,
                                            location: P[P.length - 1],
                                        })
                                    );
                                },
                            },
                            "watch",
                        );
                    case C.v.CREATE_THREAD:
                        return (0, i.jsx)(
                            r.Drp,
                            {
                                id: "THREAD",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: U,
                            },
                            "THREAD",
                        );
                    case C.v.SLASH_COMMAND:
                        return (0, i.jsx)(
                            r.Drp,
                            {
                                id: "SLASH_COMMAND",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: G,
                            },
                            "SLASH_COMMAND",
                        );
                    case C.v.SCHEDULED_MESSAGE:
                        return (0, i.jsx)(
                            r.Drp,
                            {
                                id: "scheduled_message",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => (0, u.e0)({ channel: t }),
                                children: w,
                            },
                            "scheduled_message",
                        );
                    case C.v.SUMMARIZE_THREAD:
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
                                                      label: I.intl.string(I.t.eCzSdd),
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
                                                      label: I.intl.string(I.t["HOe+Hq"]),
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
