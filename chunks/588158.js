n.d(t, { A: () => eR });
var l,
    i = n(477900),
    s = n(582128),
    a = n(503698),
    r = n.n(a),
    o = n(17928),
    c = n(192308),
    d = n(663341),
    u = n(265872),
    h = n(780777),
    m = n(775602),
    g = n(147087),
    p = n(734066),
    A = n(915725),
    f = n(572164),
    C = n(111994),
    x = n(352527),
    E = n(267102),
    S = n(969632),
    I = n(554146),
    y = n(131607);
let _ = I.M.SCHEDULED_MESSAGES_DRAFT_COACHMARK;
var j = n(566908),
    v = n(43105),
    b = n(49999),
    N = n(105292),
    T = n(474218);
function M(e) {
    let { targetElementRef: t, onDismiss: n } = e;
    return (0, i.jsx)(v.A, {
        targetElementRef: t,
        gradientColor: "purple",
        position: "top",
        align: "left",
        shouldShow: !0,
        scrollBehavior: "close",
        caretConfig: { align: "start" },
        onRequestClose: () => n(b.i.USER_DISMISS),
        title: N.intl.string(N.t.ZT58S4),
        body: [N.intl.format(N.t.A2yQnt, {})],
        actions: [{ text: N.intl.string(N.t["NX+WJN"]), onClick: () => n(b.i.USER_DISMISS) }],
        graphic: { type: "image", src: T.A },
    });
}
var R = n(406704),
    D = n(253932),
    k = n(951260),
    L = n(74477),
    P = n(87207),
    O = n(629016),
    G = n(576705),
    U = n(461213),
    w = n(625494),
    F = n(723702),
    H = n(518960),
    B = n(767089),
    K = n(477782),
    V = n(177953),
    z = n(950305),
    W = n(980707),
    $ = n(308368),
    q = n(688810),
    J = n(211401),
    Z = n(500049),
    X = n(551640),
    Y = n(970244),
    Q = n(472456),
    ee = n(780057),
    et = n(747926),
    en = n(709372),
    el = n(264391),
    ei = n(174459),
    es = n(453771),
    ea = n(408018);
n(321073);
var er = n(350835),
    eo = n(661531),
    ec = n(81369),
    ed = n(176781),
    eu = n(523056),
    eh = n(642846),
    em = n(323384),
    eg = n(111219),
    ep = n(835723),
    eA = n(39623),
    ef = n(588190),
    eC = n(831544),
    ex = n(152367),
    eE = n(55730),
    eS = n(47167),
    eI = n(994500),
    ey = n(287809),
    e_ = n(652215),
    ej =
        (((l = {}).UPLOAD_A_FILE = "UPLOAD_A_FILE"),
        (l.UPLOAD_TEXT_AS_FILE = "UPLOAD_TEXT_AS_FILE"),
        (l.INVITE_TO_PLAY_GAME = "INVITE_TO_GAME"),
        (l.INVITE_TO_LISTEN = "INVITE_TO_LISTEN"),
        (l.INVITE_TO_WATCH = "INVITE_TO_WATCH"),
        (l.CREATE_THREAD = "CREATE_THREAD"),
        (l.SLASH_COMMAND = "SLASH_COMMAND"),
        (l.APP_LAUNCHER = "APP_LAUNCHER"),
        (l.CLIPS = "CLIPS"),
        (l.POLL = "POLL"),
        (l.ACTIVITY = "ACTIVITY"),
        (l.SCHEDULED_MESSAGE = "SCHEDULED_MESSAGE"),
        (l.SUMMARIZE_THREAD = "SUMMARIZE_THREAD"),
        (l.RECORD_VOICE_MESSAGE = "RECORD_VOICE_MESSAGE"),
        l),
    ev = n(412136);
let eb = /(.*)```(\w+)\n(.*)```(.*)/s;
function eN(e) {
    let {
            channel: t,
            options: l,
            onFileUpload: a,
            onClose: r,
            onSelect: d,
            draftType: u,
            editorTextContent: h,
            setValue: m,
            openClips: g,
            chatInputType: p,
        } = e,
        { analyticsLocations: A } = (0, q.Ay)(),
        f = (0, Y.s)({ channel: t }),
        C = (0, o.bG)([ee.A], () => ee.A.isInProgress()),
        x = (0, en.wX)();
    function E() {
        (0, et.Tv)(t, void 0, "Plus Button");
    }
    function S() {
        (ei.default.track(e_.HAw.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), m("/", (0, ea.x7)("/")));
    }
    function I() {
        (ei.default.track(e_.HAw.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), J.R(Z.s4.TEXT, p, void 0, t.id));
    }
    function y() {
        g();
    }
    function _() {
        (0, c.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("669706"), n.e("842322")]).then(n.bind(n, 143657));
                return (n) => (0, i.jsx)(e, { ...n, channel: t });
            },
            { modalKey: ev.sm },
        );
    }
    function j() {
        let e = h,
            n = "txt",
            l = "",
            i = h.match(eb);
        (null != i && ((l = i[1]), (n = i[2]), (e = i[3]), (l += i[4])),
            (0, H.R)([(0, es.VE)(new Blob([e], { type: "text/plain" }), `message.${n}`, "text/plain")], t, u),
            w._.dispatchToLastSubscribed(e_.jej.CLEAR_TEXT),
            "" !== l && w._.dispatchToLastSubscribed(e_.jej.INSERT_TEXT, { plainText: l }));
    }
    return (
        s.useEffect(() => {
            ei.default.track(e_.HAw.OPEN_POPOUT, { type: "Send Attachment", channel_id: t.id, guild_id: t.guild_id });
        }, [t.guild_id, t.id]),
        (0, i.jsx)(W.W, {
            "data-menu-migrated": !0,
            onSelect: d,
            navId: "channel-attach",
            onClose: r,
            "aria-label": N.intl.string(N.t.Xm41aV),
            children: l.map(function (e) {
                switch (e.type) {
                    case ej.UPLOAD_A_FILE:
                        return (0, i.jsx)(
                            K.Dr,
                            {
                                id: "upload-file",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: a,
                            },
                            "upload-file",
                        );
                    case ej.UPLOAD_TEXT_AS_FILE:
                        if ("" === h) return null;
                        return (0, i.jsx)(
                            K.Dr,
                            {
                                id: "upload-text-as-file",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: j,
                            },
                            "upload-text-as-file",
                        );
                    case ej.CLIPS:
                        return (0, i.jsx)(
                            K.Dr,
                            {
                                id: "clips",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                badge: null != e.badgeVal && e.badgeVal > 0 ? { text: e.badgeVal.toString() } : void 0,
                                action: y,
                            },
                            "clips",
                        );
                    case ej.POLL:
                        return (0, i.jsx)(
                            K.Dr,
                            {
                                id: "poll",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: _,
                            },
                            "poll",
                        );
                    case ej.INVITE_TO_PLAY_GAME:
                        return (0, i.jsx)(
                            K.Dr,
                            {
                                id: "play",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void $.A.sendActivityInvite({
                                            channelId: t.id,
                                            type: e_.xL.JOIN,
                                            activity: n,
                                            location: A[A.length - 1],
                                        })
                                    );
                                },
                            },
                            "play",
                        );
                    case ej.INVITE_TO_LISTEN:
                        return (0, i.jsx)(
                            K.Dr,
                            {
                                id: "listen",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void $.A.sendActivityInvite({
                                            channelId: t.id,
                                            type: e_.xL.LISTEN,
                                            activity: n,
                                            location: A[A.length - 1],
                                        })
                                    );
                                },
                            },
                            "listen",
                        );
                    case ej.INVITE_TO_WATCH:
                        return (0, i.jsx)(
                            K.Dr,
                            {
                                id: "watch",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void $.A.sendActivityInvite({
                                            channelId: t.id,
                                            type: e_.xL.WATCH,
                                            activity: n,
                                            location: A[A.length - 1],
                                        })
                                    );
                                },
                            },
                            "watch",
                        );
                    case ej.CREATE_THREAD:
                        return (0, i.jsx)(
                            K.Dr,
                            {
                                id: "THREAD",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: E,
                            },
                            "THREAD",
                        );
                    case ej.SLASH_COMMAND:
                        return (0, i.jsx)(
                            K.Dr,
                            {
                                id: "SLASH_COMMAND",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: S,
                            },
                            "SLASH_COMMAND",
                        );
                    case ej.APP_LAUNCHER:
                        return (0, i.jsx)(
                            K.Dr,
                            {
                                id: "APP_LAUNCHER",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: I,
                            },
                            "APP_LAUNCHER",
                        );
                    case ej.SCHEDULED_MESSAGE:
                        return (0, i.jsx)(
                            K.Dr,
                            {
                                id: "scheduled_message",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => (0, Y.e0)({ channel: t, entryPoint: X.t.ATTACH_MENU }),
                                children: f,
                            },
                            "scheduled_message",
                        );
                    case ej.SUMMARIZE_THREAD:
                        return (0, i.jsx)(
                            K.Dr,
                            {
                                id: "summarize_thread",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => Q.A.summarizeThread(t),
                                loading: C,
                                disabled: C,
                                children: C
                                    ? null
                                    : (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(
                                                  K.Dr,
                                                  {
                                                      id: "summarize_thread_for_everyone",
                                                      label: N.intl.string(N.t.eCzSdd),
                                                      iconLeft: V.n,
                                                      leadingAccessory: { type: "icon", icon: V.n },
                                                      action: () => Q.A.summarizeThread(t, !1),
                                                  },
                                                  "summarize_thread_for_everyone",
                                              ),
                                              (0, i.jsx)(
                                                  K.Dr,
                                                  {
                                                      id: "summarize_thread_for_me",
                                                      label: N.intl.string(N.t["HOe+Hq"]),
                                                      iconLeft: z.UserIcon,
                                                      leadingAccessory: { type: "icon", icon: z.UserIcon },
                                                      action: () => Q.A.summarizeThread(t),
                                                  },
                                                  "summarize_thread_for_me",
                                              ),
                                          ],
                                      }),
                            },
                            "summarize_thread",
                        );
                    case ej.RECORD_VOICE_MESSAGE:
                        return (0, i.jsx)(
                            K.Dr,
                            {
                                id: "record_voice_message",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                disabled: x,
                                action: () => {
                                    (0, el.K3)(t.id);
                                },
                            },
                            "record_voice_message",
                        );
                    default:
                        return null;
                }
            }),
        })
    );
}
var eT = n(696016),
    eM = n(657851);
let eR = s.memo(function (e) {
    let {
            className: t,
            channel: l,
            draftType: a,
            editorTextContent: I,
            setValue: v,
            canOnlyUseTextCommands: T,
            chatInputType: K,
        } = e,
        V = (0, k.n)("ChannelAttachButton"),
        z = (0, o.bG)([m.Ay], () => m.Ay.isAppsButtonEnabled),
        W = (0, E.Us)(),
        $ = s.useRef(null),
        q = s.useRef(null),
        J = (0, o.bG)([U.A], () => U.A.getActivities()),
        Z = (0, f.E)(),
        X = (0, o.yK)([A.Ay], () => A.Ay.getNewClipIds()),
        Y = (0, o.yK)(
            [O.A],
            () => (l.type === e_.rbe.DM ? J.filter((e) => !O.A.getParty(e.party?.id)?.has(l.getRecipientId())) : J),
            [J, l],
        ),
        { onShareClick: Q } = (0, x.A)(l.id),
        ee = (0, o.bG)([A.Ay], () => A.Ay.hasClips()),
        [et, en] = s.useState(null),
        el = (0, p.sw)() && (Z || ee),
        ei = l.isPrivate(),
        es = (0, o.bG)([G.A], () => ei || (G.A.can(e_.xBc.ATTACH_FILES, l) && G.A.can(e_.xBc.SEND_MESSAGES, l)));
    function ea() {
        ((0, c.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("459368"),
                    n.e("821717"),
                    n.e("269714"),
                    n.e("19385"),
                    n.e("718955"),
                    n.e("126301"),
                    n.e("498167"),
                    n.e("553829"),
                    n.e("895840"),
                    n.e("865257"),
                    n.e("228767"),
                    n.e("323079"),
                    n.e("437655"),
                    n.e("430877"),
                    n.e("988054"),
                    n.e("531123"),
                    n.e("5257"),
                    n.e("970846"),
                    n.e("334179"),
                    n.e("203930"),
                    n.e("903663"),
                    n.e("918024"),
                    n.e("466147"),
                    n.e("16954"),
                    n.e("507406"),
                    n.e("838090"),
                    n.e("501962"),
                    n.e("901922"),
                    n.e("583518"),
                    n.e("496268"),
                    n.e("746623"),
                    n.e("974049"),
                    n.e("280559"),
                    n.e("237715"),
                    n.e("231782"),
                    n.e("895008"),
                    n.e("98717"),
                    n.e("689160"),
                    n.e("520342"),
                    n.e("306270"),
                    n.e("55781"),
                    n.e("717278"),
                ]).then(n.bind(n, 954180));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        channelId: l.id,
                        initialMainLink: C.oH.ALL_CLIPS,
                        picker: { onPick: (e) => Q({ clips: [e] }), action: C.qh.SHARE, allowMultiSelect: !0 },
                    });
            },
            { modalKey: eT.nm },
        ),
            en(null));
    }
    s.useEffect(() => {
        let e = (e) => {
            let { channelId: t } = e;
            t === l.id && $.current?.activateUploadDialogue();
        };
        return (
            w._.subscribe(e_.jej.UPLOAD_FILE, e),
            () => {
                w._.unsubscribe(e_.jej.UPLOAD_FILE, e);
            }
        );
    });
    let ej = (0, R.n)(l),
        ev = (0, R.Tb)(l),
        eb = !D.D_.useSetting() && !(0, F.isAndroidWeb)() && null != window.ResizeObserver,
        eR = (0, S.I7)(l ?? void 0),
        eD = (0, j.vK)(l),
        ek = (0, g.b)(),
        eL = (0, P.A)(l, K),
        { enabled: eP } = L.A.useConfig({ location: L.R }),
        eO = (function (e) {
            let {
                    canAttachFiles: t,
                    canStartThreads: n,
                    useSlate: l,
                    canUseApplicationCommands: i,
                    hasClips: s,
                    channel: a,
                    activities: r,
                    newClipsCount: o,
                    canPostPolls: c,
                    appContext: d,
                    canSendScheduledMessages: u,
                    canSummarizeThreads: h,
                    isAppsButtonEnabled: m,
                    canRecordVoiceMessage: g,
                } = e,
                p = [];
            return (
                t &&
                    (p.push({ type: "UPLOAD_A_FILE", icon: ec.H, display: N.intl.string(N.t["d3+iYs"]) }),
                    p.push({ type: "UPLOAD_TEXT_AS_FILE", icon: ec.H, display: N.intl.string(N.t["G9s+EM"]) })),
                s &&
                    t &&
                    d !== e_.BRT.POPOUT &&
                    d !== e_.BRT.OVERLAY &&
                    p.push({
                        type: "CLIPS",
                        icon: ed.x,
                        display: N.intl.string(N.t.o034cv),
                        badgeVal: o,
                        badgeColor: eo.A.colors.BACKGROUND_BRAND.css,
                    }),
                n && p.push({ type: "CREATE_THREAD", icon: eu.G, display: N.intl.string(N.t.rBIGBL) }),
                c && p.push({ type: "POLL", icon: eh.Y, display: N.intl.string(N.t.Flr51u) }),
                l &&
                    i &&
                    (m
                        ? p.push({ type: "SLASH_COMMAND", icon: em.k, display: N.intl.string(N.t.Bbvp6G) })
                        : p.push({ type: "APP_LAUNCHER", icon: em.k, display: N.intl.string(N.t.hSQgW9) })),
                r.forEach((e) => {
                    !(0, eE.A)(e, e_.jUm.EMBEDDED) &&
                        (e.type === er.$.PLAYING &&
                            (0, eE.A)(e, e_.jUm.JOIN) &&
                            p.push({
                                type: "INVITE_TO_GAME",
                                icon: eg.L,
                                display: N.intl.formatToPlainString(N.t["KHLo+F"], {
                                    channel: (0, eS.m1)(a, ey.default, eI.A, !0),
                                    game: null != e ? e.name : "",
                                }),
                                activity: e,
                            }),
                        e.type === er.$.LISTENING &&
                            (0, eE.A)(e, e_.jUm.SYNC) &&
                            p.push({
                                type: "INVITE_TO_LISTEN",
                                icon: ep.J,
                                display: N.intl.formatToPlainString(N.t.I479px, {
                                    channel: (0, eS.m1)(a, ey.default, eI.A, !0),
                                    name: null != e ? e.name : "",
                                }),
                                activity: e,
                            }),
                        e.type === er.$.WATCHING &&
                            (0, eE.A)(e, e_.jUm.SYNC) &&
                            p.push({
                                type: "INVITE_TO_WATCH",
                                icon: eA.EyeIcon,
                                display: N.intl.formatToPlainString(N.t["EvCP/g"], {
                                    channel: (0, eS.m1)(a, ey.default, eI.A, !0),
                                    name: null != e ? e.name : "",
                                }),
                                activity: e,
                            }));
                }),
                u && p.push({ type: "SCHEDULED_MESSAGE", icon: ef.U, display: N.intl.string(N.t["3+ii4F"]) }),
                g &&
                    p.push({
                        type: "RECORD_VOICE_MESSAGE",
                        icon: eC.MicrophoneIcon,
                        display: N.intl.string(N.t.lwy6aX),
                    }),
                a.isThread() &&
                    h &&
                    p.push({ type: "SUMMARIZE_THREAD", icon: ex.D, display: N.intl.string(N.t.EXfguE) }),
                p
            );
        })({
            canAttachFiles: es,
            canStartThreads: ej || ev,
            useSlate: eb,
            hasClips: el,
            canUseApplicationCommands: !T,
            channel: l,
            activities: Y,
            newClipsCount: X?.length ?? 0,
            canPostPolls: eR,
            appContext: W,
            canSendScheduledMessages: eD,
            canSummarizeThreads: ek,
            isAppsButtonEnabled: !V || z,
            canRecordVoiceMessage: eL && eP,
        }),
        { isCoachmarkVisible: eG, dismissCoachmark: eU } = (function (e) {
            let { isEligible: t } = e,
                [n, l] = (0, y.kn)(t ? [_] : []);
            return { isCoachmarkVisible: n === _, dismissCoachmark: l };
        })({ isEligible: eD });
    if (0 === eO.length) return null;
    let ew = (0, i.jsx)(d.PlusLargeIcon, { size: "refresh_sm", color: "currentColor", colorClass: eM.dW }),
        eF = (0, i.jsx)(u.Y, {
            targetElementRef: q,
            shouldShow: null != et,
            animation: u.Y.Animation.NONE,
            align: "left",
            position: "top",
            positionKey: et ?? "null",
            onRequestOpen: () => {
                (en("attachMenu"), eG && eU(b.i.TAKE_ACTION));
            },
            onRequestClose: () => {
                (0, c.hasAnyModalOpen)() || en(null);
            },
            renderPopout: (e) => {
                if ("attachMenu" === et)
                    return (0, i.jsx)(eN, {
                        ...e,
                        onClose: () => en(null),
                        options: eO,
                        channel: l,
                        onFileUpload: () => $.current?.activateUploadDialogue(),
                        draftType: a,
                        editorTextContent: I,
                        setValue: v,
                        openClips: ea,
                        chatInputType: K,
                    });
                throw Error("Invalid popout type provided");
            },
            children: (e) =>
                (0, i.jsx)(B.A, {
                    ref: q,
                    className: r()(eM.g$, t),
                    childClassName: eM.wh,
                    isActive: !1,
                    "aria-label": N.intl.string(N.t.d56gCa),
                    onDoubleClick: es ? () => $.current?.activateUploadDialogue() : void 0,
                    "aria-haspopup": "menu",
                    ...e,
                    children: ew,
                }),
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: eM.EJ,
                children: (0, i.jsx)(h.A, {
                    ref: $,
                    onChange: function (e) {
                        var t, n;
                        ((t = e.currentTarget.files),
                            null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code
                                ? (0, H.V)(l, [])
                                : (0, H.R)(t, l, a, { requireConfirm: !0, origin: "file_picker" }),
                            w._.dispatchToLastSubscribed(e_.jej.TEXTAREA_FOCUS),
                            (e.currentTarget.value = ""));
                    },
                    multiple: l.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, i.jsx)("div", { className: eM.Jd, children: eF }),
            eG && (0, i.jsx)(M, { targetElementRef: q, onDismiss: eU }),
        ],
    });
});
