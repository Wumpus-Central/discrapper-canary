n.d(t, { A: () => eD });
var l,
    i = n(477900),
    s = n(582128),
    a = n(503698),
    r = n.n(a),
    o = n(855986),
    c = n(192308),
    d = n(663341),
    u = n(265872),
    h = n(307955),
    m = n(775602),
    g = n(147087),
    p = n(167074),
    A = n(734066),
    f = n(419490),
    C = n(572164),
    E = n(111994),
    x = n(352527),
    I = n(267102),
    S = n(969632),
    y = n(554146),
    b = n(263775);
let _ = y.M.SCHEDULED_MESSAGES_DRAFT_COACHMARK;
var j = n(566908),
    v = n(43105),
    T = n(49999),
    N = n(792996),
    M = n(474218);
function R(e) {
    let { targetElementRef: t, onDismiss: n } = e;
    return (0, i.jsx)(v.A, {
        targetElementRef: t,
        gradientColor: "purple",
        position: "top",
        align: "left",
        shouldShow: !0,
        scrollBehavior: "close",
        caretConfig: { align: "start" },
        onRequestClose: () => n(T.i.USER_DISMISS),
        title: N.intl.string(N.t.ZT58S4),
        body: [N.intl.format(N.t.A2yQnt, {})],
        actions: [{ text: N.intl.string(N.t["NX+WJN"]), onClick: () => n(T.i.USER_DISMISS) }],
        graphic: { type: "image", src: M.A },
    });
}
var D = n(406704),
    k = n(253932),
    L = n(951260),
    P = n(74477),
    O = n(87207),
    G = n(629016),
    U = n(576705),
    w = n(894768),
    F = n(188567),
    H = n(723702),
    B = n(518960),
    K = n(243185),
    V = n(477782),
    z = n(177953),
    W = n(950305),
    $ = n(165862),
    q = n(308368),
    Z = n(688810),
    J = n(211401),
    X = n(500049),
    Y = n(551640),
    Q = n(970244),
    ee = n(7909),
    et = n(780057),
    en = n(747926),
    el = n(709372),
    ei = n(841817),
    es = n(129230),
    ea = n(453771),
    er = n(408018);
n(321073);
var eo = n(350835),
    ec = n(646514),
    ed = n(81369),
    eu = n(176781),
    eh = n(523056),
    em = n(642846),
    eg = n(323384),
    ep = n(111219),
    eA = n(835723),
    ef = n(39623),
    eC = n(588190),
    eE = n(831544),
    ex = n(152367),
    eI = n(55730),
    eS = n(47167),
    ey = n(994500),
    eb = n(287809),
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
let eT = /(.*)```(\w+)\n(.*)```(.*)/s;
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
        { analyticsLocations: A } = (0, Z.Ay)(),
        f = (0, Q.s)({ channel: t }),
        C = (0, o.bG)([et.A], () => et.A.isInProgress()),
        E = (0, el.wX)();
    function x() {
        (0, en.Tv)(t, void 0, "Plus Button");
    }
    function I() {
        (es.default.track(e_.HAw.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), m("/", (0, er.x7)("/")));
    }
    function S() {
        (es.default.track(e_.HAw.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), J.R(X.s4.TEXT, p, void 0, t.id));
    }
    function y() {
        g();
    }
    function b() {
        (0, c.mM)(
            async () => {
                let { default: e } = await Promise.all([n.e(669706), n.e(893019)]).then(n.bind(n, 50518));
                return (n) => (0, i.jsx)(e, { ...n, channel: t });
            },
            { modalKey: ev.sm },
        );
    }
    function _() {
        let e = h,
            n = "txt",
            l = "",
            i = h.match(eT);
        (null != i && ((l = i[1]), (n = i[2]), (e = i[3]), (l += i[4])),
            (0, B.R)([(0, ea.VE)(new Blob([e], { type: "text/plain" }), `message.${n}`, "text/plain")], t, u),
            F._.dispatchToLastSubscribed(e_.jej.CLEAR_TEXT),
            "" !== l && F._.dispatchToLastSubscribed(e_.jej.INSERT_TEXT, { plainText: l }));
    }
    return (
        s.useEffect(() => {
            es.default.track(e_.HAw.OPEN_POPOUT, { type: "Send Attachment", channel_id: t.id, guild_id: t.guild_id });
        }, [t.guild_id, t.id]),
        (0, i.jsx)($.W, {
            "data-menu-migrated": !0,
            onSelect: d,
            navId: "channel-attach",
            onClose: r,
            "aria-label": N.intl.string(N.t.Xm41aV),
            children: l.map(function (e) {
                switch (e.type) {
                    case ej.UPLOAD_A_FILE:
                        return (0, i.jsx)(
                            V.Dr,
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
                            V.Dr,
                            {
                                id: "upload-text-as-file",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: _,
                            },
                            "upload-text-as-file",
                        );
                    case ej.CLIPS:
                        return (0, i.jsx)(
                            V.Dr,
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
                            V.Dr,
                            {
                                id: "poll",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: b,
                            },
                            "poll",
                        );
                    case ej.INVITE_TO_PLAY_GAME:
                        return (0, i.jsx)(
                            V.Dr,
                            {
                                id: "play",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void q.A.sendActivityInvite({
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
                            V.Dr,
                            {
                                id: "listen",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void q.A.sendActivityInvite({
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
                            V.Dr,
                            {
                                id: "watch",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void q.A.sendActivityInvite({
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
                            V.Dr,
                            {
                                id: "THREAD",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: x,
                            },
                            "THREAD",
                        );
                    case ej.SLASH_COMMAND:
                        return (0, i.jsx)(
                            V.Dr,
                            {
                                id: "SLASH_COMMAND",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: I,
                            },
                            "SLASH_COMMAND",
                        );
                    case ej.APP_LAUNCHER:
                        return (0, i.jsx)(
                            V.Dr,
                            {
                                id: "APP_LAUNCHER",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: S,
                            },
                            "APP_LAUNCHER",
                        );
                    case ej.SCHEDULED_MESSAGE:
                        return (0, i.jsx)(
                            V.Dr,
                            {
                                id: "scheduled_message",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => (0, Q.e0)({ channel: t, entryPoint: Y.t.ATTACH_MENU }),
                                children: f,
                            },
                            "scheduled_message",
                        );
                    case ej.SUMMARIZE_THREAD:
                        return (0, i.jsx)(
                            V.Dr,
                            {
                                id: "summarize_thread",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => ee.A.summarizeThread(t),
                                loading: C,
                                disabled: C,
                                children: C
                                    ? null
                                    : (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(
                                                  V.Dr,
                                                  {
                                                      id: "summarize_thread_for_everyone",
                                                      label: N.intl.string(N.t.eCzSdd),
                                                      iconLeft: z.GroupIcon,
                                                      leadingAccessory: { type: "icon", icon: z.GroupIcon },
                                                      action: () => ee.A.summarizeThread(t, !1),
                                                  },
                                                  "summarize_thread_for_everyone",
                                              ),
                                              (0, i.jsx)(
                                                  V.Dr,
                                                  {
                                                      id: "summarize_thread_for_me",
                                                      label: N.intl.string(N.t["HOe+Hq"]),
                                                      iconLeft: W.UserIcon,
                                                      leadingAccessory: { type: "icon", icon: W.UserIcon },
                                                      action: () => ee.A.summarizeThread(t),
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
                            V.Dr,
                            {
                                id: "record_voice_message",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                disabled: E,
                                action: () => {
                                    (0, ei.K3)(t.id);
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
var eM = n(696016),
    eR = n(657851);
let eD = s.memo(function (e) {
    let {
            className: t,
            channel: l,
            draftType: a,
            editorTextContent: y,
            setValue: v,
            canOnlyUseTextCommands: M,
            chatInputType: V,
        } = e,
        z = (0, L.n)("ChannelAttachButton"),
        W = (0, o.bG)([m.Ay], () => m.Ay.isAppsButtonEnabled),
        $ = (0, I.Us)(),
        q = s.useRef(null),
        Z = s.useRef(null),
        J = (0, o.bG)([w.A], () => w.A.getActivities()),
        X = (0, C.E)(),
        Y = (0, o.yK)([f.Ay], () => f.Ay.getNewClipIds()),
        Q = (0, o.yK)(
            [G.A],
            () => (l.type === e_.rbe.DM ? J.filter((e) => !G.A.getParty(e.party?.id)?.has(l.getRecipientId())) : J),
            [J, l],
        ),
        { onShareClick: ee } = (0, x.A)(l.id),
        et = (0, o.bG)([f.Ay], () => f.Ay.hasClips()),
        [en, el] = s.useState(null),
        ei = (0, A.sw)() && (X || et),
        es = l.isPrivate(),
        ea = (0, o.bG)([U.A], () => es || (U.A.can(e_.xBc.ATTACH_FILES, l) && U.A.can(e_.xBc.SEND_MESSAGES, l)));
    function er() {
        ((0, c.mM)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e(409495),
                    n.e(685432),
                    n.e(269714),
                    n.e(19385),
                    n.e(718955),
                    n.e(126301),
                    n.e(498167),
                    n.e(553829),
                    n.e(624872),
                    n.e(865257),
                    n.e(228767),
                    n.e(323079),
                    n.e(437655),
                    n.e(626501),
                    n.e(5257),
                    n.e(970846),
                    n.e(795807),
                    n.e(918024),
                    n.e(838090),
                    n.e(203930),
                    n.e(903663),
                    n.e(781202),
                    n.e(583518),
                    n.e(507406),
                    n.e(466147),
                    n.e(16954),
                    n.e(501962),
                    n.e(17736),
                    n.e(350681),
                    n.e(280559),
                    n.e(156132),
                    n.e(974049),
                    n.e(237715),
                    n.e(895008),
                    n.e(231782),
                    n.e(827037),
                    n.e(377683),
                    n.e(698101),
                    n.e(746623),
                    n.e(306270),
                    n.e(291365),
                    n.e(626750),
                    n.e(689160),
                    n.e(520342),
                    n.e(401997),
                ]).then(n.bind(n, 852956));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        channelId: l.id,
                        initialMainLink: E.oH.ALL_CLIPS,
                        picker: { onPick: (e) => ee({ clips: [e] }), action: E.qh.SHARE, allowMultiSelect: !0 },
                    });
            },
            { modalKey: eM.nm },
        ),
            el(null));
    }
    s.useEffect(() => {
        let e = (e) => {
            let { channelId: t } = e;
            t === l.id && q.current?.activateUploadDialogue();
        };
        return (
            F._.subscribe(e_.jej.UPLOAD_FILE, e),
            () => {
                F._.unsubscribe(e_.jej.UPLOAD_FILE, e);
            }
        );
    });
    let ej = (0, D.n)(l),
        ev = (0, D.Tb)(l),
        eT = !k.D_.useSetting() && !(0, H.Ct)() && null != window.ResizeObserver,
        eD = (0, p.f)(l),
        ek = (0, S.I7)(l ?? void 0),
        eL = (0, j.vK)(l),
        eP = (0, g.b)(),
        eO = (0, O.A)(l, V),
        { enabled: eG } = P.A.useConfig({ location: P.R }),
        eU = (function (e) {
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
                    (p.push({ type: "UPLOAD_A_FILE", icon: ed.FileUpIcon, display: N.intl.string(N.t["d3+iYs"]) }),
                    p.push({
                        type: "UPLOAD_TEXT_AS_FILE",
                        icon: ed.FileUpIcon,
                        display: N.intl.string(N.t["G9s+EM"]),
                    })),
                s &&
                    t &&
                    d !== e_.BRT.POPOUT &&
                    d !== e_.BRT.OVERLAY &&
                    p.push({
                        type: "CLIPS",
                        icon: eu.ClipsIcon,
                        display: N.intl.string(N.t.o034cv),
                        badgeVal: o,
                        badgeColor: ec.A.colors.BACKGROUND_BRAND.css,
                    }),
                n && p.push({ type: "CREATE_THREAD", icon: eh.ThreadPlusIcon, display: N.intl.string(N.t.rBIGBL) }),
                c && p.push({ type: "POLL", icon: em.PollsIcon, display: N.intl.string(N.t.Flr51u) }),
                l &&
                    i &&
                    (m
                        ? p.push({ type: "SLASH_COMMAND", icon: eg.AppsIcon, display: N.intl.string(N.t.Bbvp6G) })
                        : p.push({ type: "APP_LAUNCHER", icon: eg.AppsIcon, display: N.intl.string(N.t.hSQgW9) })),
                r.forEach((e) => {
                    !(0, eI.A)(e, e_.jUm.EMBEDDED) &&
                        (e.type === eo.$.PLAYING &&
                            (0, eI.A)(e, e_.jUm.JOIN) &&
                            p.push({
                                type: "INVITE_TO_GAME",
                                icon: ep.DpadIcon,
                                display: N.intl.formatToPlainString(N.t["KHLo+F"], {
                                    channel: (0, eS.m1)(a, eb.default, ey.A, !0),
                                    game: null != e ? e.name : "",
                                }),
                                activity: e,
                            }),
                        e.type === eo.$.LISTENING &&
                            (0, eI.A)(e, e_.jUm.SYNC) &&
                            p.push({
                                type: "INVITE_TO_LISTEN",
                                icon: eA.UserPlayIcon,
                                display: N.intl.formatToPlainString(N.t.I479px, {
                                    channel: (0, eS.m1)(a, eb.default, ey.A, !0),
                                    name: null != e ? e.name : "",
                                }),
                                activity: e,
                            }),
                        e.type === eo.$.WATCHING &&
                            (0, eI.A)(e, e_.jUm.SYNC) &&
                            p.push({
                                type: "INVITE_TO_WATCH",
                                icon: ef.EyeIcon,
                                display: N.intl.formatToPlainString(N.t["EvCP/g"], {
                                    channel: (0, eS.m1)(a, eb.default, ey.A, !0),
                                    name: null != e ? e.name : "",
                                }),
                                activity: e,
                            }));
                }),
                u &&
                    p.push({
                        type: "SCHEDULED_MESSAGE",
                        icon: eC.CalendarPlusIcon,
                        display: N.intl.string(N.t["3+ii4F"]),
                    }),
                g &&
                    p.push({
                        type: "RECORD_VOICE_MESSAGE",
                        icon: eE.MicrophoneIcon,
                        display: N.intl.string(N.t.lwy6aX),
                    }),
                a.isThread() &&
                    h &&
                    p.push({ type: "SUMMARIZE_THREAD", icon: ex.MagicWandIcon, display: N.intl.string(N.t.EXfguE) }),
                p
            );
        })({
            canAttachFiles: ea,
            canStartThreads: ej || ev,
            useSlate: eT,
            hasClips: ei,
            canUseApplicationCommands: !M && eD,
            channel: l,
            activities: Q,
            newClipsCount: Y?.length ?? 0,
            canPostPolls: ek,
            appContext: $,
            canSendScheduledMessages: eL,
            canSummarizeThreads: eP,
            isAppsButtonEnabled: !z || W,
            canRecordVoiceMessage: eO && eG,
        }),
        { isCoachmarkVisible: ew, dismissCoachmark: eF } = (function (e) {
            let { isEligible: t } = e,
                [n, l] = (0, b.kn)(t ? [_] : []);
            return { isCoachmarkVisible: n === _, dismissCoachmark: l };
        })({ isEligible: eL });
    if (0 === eU.length) return null;
    let eH = (0, i.jsx)(d.PlusLargeIcon, { size: "refresh_sm", color: "currentColor", colorClass: eR.dW }),
        eB = (0, i.jsx)(u.Y, {
            targetElementRef: Z,
            shouldShow: null != en,
            animation: u.Y.Animation.NONE,
            align: "left",
            position: "top",
            positionKey: en ?? "null",
            onRequestOpen: () => {
                (el("attachMenu"), ew && eF(T.i.TAKE_ACTION));
            },
            onRequestClose: () => {
                (0, c.ue)() || el(null);
            },
            renderPopout: (e) => {
                if ("attachMenu" === en)
                    return (0, i.jsx)(eN, {
                        ...e,
                        onClose: () => el(null),
                        options: eU,
                        channel: l,
                        onFileUpload: () => q.current?.activateUploadDialogue(),
                        draftType: a,
                        editorTextContent: y,
                        setValue: v,
                        openClips: er,
                        chatInputType: V,
                    });
                throw Error("Invalid popout type provided");
            },
            children: (e) =>
                (0, i.jsx)(K.A, {
                    ref: Z,
                    className: r()(eR.g$, t),
                    childClassName: eR.wh,
                    isActive: !1,
                    "aria-label": N.intl.string(N.t.d56gCa),
                    onDoubleClick: ea ? () => q.current?.activateUploadDialogue() : void 0,
                    "aria-haspopup": "menu",
                    ...e,
                    children: eH,
                }),
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: eR.EJ,
                children: (0, i.jsx)(h.A, {
                    ref: q,
                    onChange: function (e) {
                        var t, n;
                        ((t = e.currentTarget.files),
                            null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code
                                ? (0, B.V)(l, [])
                                : (0, B.R)(t, l, a, { requireConfirm: !0, origin: "file_picker" }),
                            F._.dispatchToLastSubscribed(e_.jej.TEXTAREA_FOCUS),
                            (e.currentTarget.value = ""));
                    },
                    multiple: l.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, i.jsx)("div", { className: eR.Jd, children: eB }),
            ew && (0, i.jsx)(R, { targetElementRef: Z, onDismiss: eF }),
        ],
    });
});
