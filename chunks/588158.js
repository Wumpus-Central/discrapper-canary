n.d(t, { A: () => eM });
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
    A = n(274372),
    f = n(572164),
    C = n(111994),
    x = n(352527),
    E = n(267102),
    S = n(969632),
    I = n(554146),
    y = n(131607);
let j = I.M.SCHEDULED_MESSAGES_DRAFT_COACHMARK;
var v = n(566908),
    _ = n(43105),
    b = n(49999),
    N = n(105292),
    T = n(474218);
function M(e) {
    let { targetElementRef: t, onDismiss: n } = e;
    return (0, i.jsx)(_.A, {
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
    D = n(885386),
    k = n(951260),
    L = n(74477),
    P = n(87207),
    O = n(629016),
    G = n(576705),
    U = n(461213),
    w = n(625494),
    F = n(723702),
    B = n(518960),
    H = n(767089),
    K = n(477782),
    V = n(177953),
    z = n(950305),
    W = n(980707),
    $ = n(308368),
    q = n(688810),
    Z = n(211401),
    J = n(500049),
    Y = n(551640),
    X = n(970244),
    Q = n(867455),
    ee = n(780057),
    et = n(747926),
    en = n(709372),
    el = n(264391),
    ei = n(174459),
    es = n(453771),
    ea = n(408018);
n(321073);
var er = n(661531),
    eo = n(81369),
    ec = n(176781),
    ed = n(523056),
    eu = n(642846),
    eh = n(323384),
    em = n(111219),
    eg = n(835723),
    ep = n(39623),
    eA = n(588190),
    ef = n(831544),
    eC = n(152367),
    ex = n(55730),
    eE = n(47167),
    eS = n(994500),
    eI = n(287809),
    ey = n(652215),
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
let e_ = /(.*)```(\w+)\n(.*)```(.*)/s;
function eb(e) {
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
        f = (0, X.s)({ channel: t }),
        C = (0, o.bG)([ee.A], () => ee.A.isInProgress()),
        x = (0, en.wX)();
    function E() {
        (0, et.Tv)(t, void 0, "Plus Button");
    }
    function S() {
        (ei.default.track(ey.HAw.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), m("/", (0, ea.x7)("/")));
    }
    function I() {
        (ei.default.track(ey.HAw.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), Z.R(J.s4.TEXT, p, void 0, t.id));
    }
    function y() {
        g();
    }
    function j() {
        (0, c.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("669706"), n.e("842322")]).then(n.bind(n, 143657));
                return (n) => (0, i.jsx)(e, { ...n, channel: t });
            },
            { modalKey: ev.sm },
        );
    }
    function v() {
        let e = h,
            n = "txt",
            l = "",
            i = h.match(e_);
        (null != i && ((l = i[1]), (n = i[2]), (e = i[3]), (l += i[4])),
            (0, B.R)([(0, es.VE)(new Blob([e], { type: "text/plain" }), `message.${n}`, "text/plain")], t, u),
            w._.dispatchToLastSubscribed(ey.jej.CLEAR_TEXT),
            "" !== l && w._.dispatchToLastSubscribed(ey.jej.INSERT_TEXT, { plainText: l }));
    }
    return (
        s.useEffect(() => {
            ei.default.track(ey.HAw.OPEN_POPOUT, { type: "Send Attachment", channel_id: t.id, guild_id: t.guild_id });
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
                                action: v,
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
                                action: j,
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
                                            type: ey.xL.JOIN,
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
                                            type: ey.xL.LISTEN,
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
                                            type: ey.xL.WATCH,
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
                                action: () => (0, X.e0)({ channel: t, entryPoint: Y.t.ATTACH_MENU }),
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
var eN = n(696016),
    eT = n(657851);
let eM = s.memo(function (e) {
    let {
            className: t,
            channel: l,
            draftType: a,
            editorTextContent: I,
            setValue: _,
            canOnlyUseTextCommands: T,
            chatInputType: K,
        } = e,
        V = (0, k.n)("ChannelAttachButton"),
        z = (0, o.bG)([m.Ay], () => m.Ay.isAppsButtonEnabled),
        W = (0, E.Us)(),
        $ = s.useRef(null),
        q = s.useRef(null),
        Z = (0, o.bG)([U.A], () => U.A.getActivities()),
        J = (0, f.E)(),
        Y = (0, o.yK)([A.Ay], () => A.Ay.getNewClipIds()),
        X = (0, o.yK)(
            [O.A],
            () => (l.type === ey.rbe.DM ? Z.filter((e) => !O.A.getParty(e.party?.id)?.has(l.getRecipientId())) : Z),
            [Z, l],
        ),
        { onShareClick: Q } = (0, x.A)(l.id),
        ee = (0, o.bG)([A.Ay], () => A.Ay.hasClips()),
        [et, en] = s.useState(null),
        el = (0, p.sw)() && (J || ee),
        ei = l.isPrivate(),
        es = (0, o.bG)([G.A], () => ei || (G.A.can(ey.xBc.ATTACH_FILES, l) && G.A.can(ey.xBc.SEND_MESSAGES, l)));
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
                    n.e("641794"),
                    n.e("914553"),
                    n.e("586467"),
                    n.e("203930"),
                    n.e("903663"),
                    n.e("496268"),
                    n.e("918024"),
                    n.e("466147"),
                    n.e("507406"),
                    n.e("838090"),
                    n.e("501962"),
                    n.e("901922"),
                    n.e("583518"),
                    n.e("746623"),
                    n.e("974049"),
                    n.e("280559"),
                    n.e("237715"),
                    n.e("231782"),
                    n.e("895008"),
                    n.e("352566"),
                    n.e("793784"),
                    n.e("689160"),
                    n.e("520342"),
                    n.e("306270"),
                    n.e("650676"),
                    n.e("717278"),
                ]).then(n.bind(n, 272351));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        channelId: l.id,
                        initialMainLink: C.oH.ALL_CLIPS,
                        picker: { onPick: (e) => Q({ clips: [e] }), action: C.qh.SHARE, allowMultiSelect: !0 },
                    });
            },
            { modalKey: eN.nm },
        ),
            en(null));
    }
    s.useEffect(() => {
        let e = (e) => {
            let { channelId: t } = e;
            t === l.id && $.current?.activateUploadDialogue();
        };
        return (
            w._.subscribe(ey.jej.UPLOAD_FILE, e),
            () => {
                w._.unsubscribe(ey.jej.UPLOAD_FILE, e);
            }
        );
    });
    let ej = (0, R.n)(l),
        ev = (0, R.Tb)(l),
        e_ = !D.D_.useSetting() && !(0, F.isAndroidWeb)() && null != window.ResizeObserver,
        eM = (0, S.I7)(l ?? void 0),
        eR = (0, v.vK)(l),
        eD = (0, g.b)(),
        ek = (0, P.A)(l, K),
        { enabled: eL } = L.A.useConfig({ location: L.R }),
        eP = (function (e) {
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
                    (p.push({ type: "UPLOAD_A_FILE", icon: eo.H, display: N.intl.string(N.t["d3+iYs"]) }),
                    p.push({ type: "UPLOAD_TEXT_AS_FILE", icon: eo.H, display: N.intl.string(N.t["G9s+EM"]) })),
                s &&
                    t &&
                    d !== ey.BRT.POPOUT &&
                    d !== ey.BRT.OVERLAY &&
                    p.push({
                        type: "CLIPS",
                        icon: ec.x,
                        display: N.intl.string(N.t.o034cv),
                        badgeVal: o,
                        badgeColor: er.A.colors.BACKGROUND_BRAND.css,
                    }),
                n && p.push({ type: "CREATE_THREAD", icon: ed.G, display: N.intl.string(N.t.rBIGBL) }),
                c && p.push({ type: "POLL", icon: eu.Y, display: N.intl.string(N.t.Flr51u) }),
                l &&
                    i &&
                    (m
                        ? p.push({ type: "SLASH_COMMAND", icon: eh.k, display: N.intl.string(N.t.Bbvp6G) })
                        : p.push({ type: "APP_LAUNCHER", icon: eh.k, display: N.intl.string(N.t.hSQgW9) })),
                r.forEach((e) => {
                    !(0, ex.A)(e, ey.jUm.EMBEDDED) &&
                        (e.type === ey.$pd.PLAYING &&
                            (0, ex.A)(e, ey.jUm.JOIN) &&
                            p.push({
                                type: "INVITE_TO_GAME",
                                icon: em.L,
                                display: N.intl.formatToPlainString(N.t["KHLo+F"], {
                                    channel: (0, eE.m1)(a, eI.default, eS.A, !0),
                                    game: null != e ? e.name : "",
                                }),
                                activity: e,
                            }),
                        e.type === ey.$pd.LISTENING &&
                            (0, ex.A)(e, ey.jUm.SYNC) &&
                            p.push({
                                type: "INVITE_TO_LISTEN",
                                icon: eg.J,
                                display: N.intl.formatToPlainString(N.t.I479px, {
                                    channel: (0, eE.m1)(a, eI.default, eS.A, !0),
                                    name: null != e ? e.name : "",
                                }),
                                activity: e,
                            }),
                        e.type === ey.$pd.WATCHING &&
                            (0, ex.A)(e, ey.jUm.SYNC) &&
                            p.push({
                                type: "INVITE_TO_WATCH",
                                icon: ep.EyeIcon,
                                display: N.intl.formatToPlainString(N.t["EvCP/g"], {
                                    channel: (0, eE.m1)(a, eI.default, eS.A, !0),
                                    name: null != e ? e.name : "",
                                }),
                                activity: e,
                            }));
                }),
                u && p.push({ type: "SCHEDULED_MESSAGE", icon: eA.U, display: N.intl.string(N.t["3+ii4F"]) }),
                g &&
                    p.push({
                        type: "RECORD_VOICE_MESSAGE",
                        icon: ef.MicrophoneIcon,
                        display: N.intl.string(N.t.lwy6aX),
                    }),
                a.isThread() &&
                    h &&
                    p.push({ type: "SUMMARIZE_THREAD", icon: eC.D, display: N.intl.string(N.t.EXfguE) }),
                p
            );
        })({
            canAttachFiles: es,
            canStartThreads: ej || ev,
            useSlate: e_,
            hasClips: el,
            canUseApplicationCommands: !T,
            channel: l,
            activities: X,
            newClipsCount: Y?.length ?? 0,
            canPostPolls: eM,
            appContext: W,
            canSendScheduledMessages: eR,
            canSummarizeThreads: eD,
            isAppsButtonEnabled: !V || z,
            canRecordVoiceMessage: ek && eL,
        }),
        { isCoachmarkVisible: eO, dismissCoachmark: eG } = (function (e) {
            let { isEligible: t } = e,
                [n, l] = (0, y.kn)(t ? [j] : []);
            return { isCoachmarkVisible: n === j, dismissCoachmark: l };
        })({ isEligible: eR });
    if (0 === eP.length) return null;
    let eU = (0, i.jsx)(d.PlusLargeIcon, { size: "refresh_sm", color: "currentColor", colorClass: eT.dW }),
        ew = (0, i.jsx)(u.Y, {
            targetElementRef: q,
            shouldShow: null != et,
            animation: u.Y.Animation.NONE,
            align: "left",
            position: "top",
            positionKey: et ?? "null",
            onRequestOpen: () => {
                (en("attachMenu"), eO && eG(b.i.TAKE_ACTION));
            },
            onRequestClose: () => {
                (0, c.hasAnyModalOpen)() || en(null);
            },
            renderPopout: (e) => {
                if ("attachMenu" === et)
                    return (0, i.jsx)(eb, {
                        ...e,
                        onClose: () => en(null),
                        options: eP,
                        channel: l,
                        onFileUpload: () => $.current?.activateUploadDialogue(),
                        draftType: a,
                        editorTextContent: I,
                        setValue: _,
                        openClips: ea,
                        chatInputType: K,
                    });
                throw Error("Invalid popout type provided");
            },
            children: (e) =>
                (0, i.jsx)(H.A, {
                    ref: q,
                    className: r()(eT.g$, t),
                    childClassName: eT.wh,
                    isActive: !1,
                    "aria-label": N.intl.string(N.t.d56gCa),
                    onDoubleClick: es ? () => $.current?.activateUploadDialogue() : void 0,
                    "aria-haspopup": "menu",
                    ...e,
                    children: eU,
                }),
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: eT.EJ,
                children: (0, i.jsx)(h.A, {
                    ref: $,
                    onChange: function (e) {
                        var t, n;
                        ((t = e.currentTarget.files),
                            null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code
                                ? (0, B.V)(l, [])
                                : (0, B.R)(t, l, a, { requireConfirm: !0, origin: "file_picker" }),
                            w._.dispatchToLastSubscribed(ey.jej.TEXTAREA_FOCUS),
                            (e.currentTarget.value = ""));
                    },
                    multiple: l.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, i.jsx)("div", { className: eT.Jd, children: ew }),
            eO && (0, i.jsx)(M, { targetElementRef: q, onDismiss: eG }),
        ],
    });
});
