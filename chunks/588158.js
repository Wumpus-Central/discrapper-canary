n.d(t, { A: () => eT });
var l,
    i = n(477900),
    s = n(582128),
    a = n(503698),
    r = n.n(a),
    o = n(17928),
    c = n(192308),
    d = n(663341),
    u = n(922016),
    h = n(780777),
    m = n(775602),
    g = n(147087),
    A = n(734066),
    p = n(915725),
    f = n(572164),
    C = n(111994),
    x = n(352527),
    E = n(267102),
    S = n(969632),
    I = n(554146),
    _ = n(826673),
    j = n(367727),
    y = n(597643),
    b = n(31717),
    N = n(49999);
let T = I.M.SCHEDULED_MESSAGES_DRAFT_COACHMARK;
var v = n(566908),
    M = n(43105),
    R = n(375708),
    D = n(632946);
function L(e) {
    let { targetElementRef: t, onDismiss: n } = e;
    return (0, i.jsx)(M.A, {
        targetElementRef: t,
        gradientColor: "purple",
        position: "top",
        align: "left",
        shouldShow: !0,
        scrollBehavior: "close",
        caretConfig: { align: "start" },
        onRequestClose: () => n(N.i.USER_DISMISS),
        title: R.intl.string(R.t.Pu7sCU),
        body: [R.intl.format(R.t.A2yQnt, {})],
        actions: [{ text: R.intl.string(R.t["NX+WJN"]), onClick: () => n(N.i.USER_DISMISS) }],
        graphic: { type: "image", src: D },
    });
}
var k = n(406704),
    P = n(885386),
    O = n(951260),
    G = n(629016),
    U = n(576705),
    w = n(461213),
    F = n(625494),
    H = n(723702),
    B = n(518960),
    K = n(767089),
    V = n(477782),
    z = n(177953),
    W = n(950305),
    $ = n(980707),
    J = n(308368),
    q = n(688810),
    Z = n(211401),
    Y = n(500049),
    X = n(551640),
    Q = n(970244),
    ee = n(867455),
    et = n(780057),
    en = n(747926),
    el = n(174459),
    ei = n(453771),
    es = n(408018);
n(321073);
var ea = n(661531),
    er = n(81369),
    eo = n(176781),
    ec = n(523056),
    ed = n(642846),
    eu = n(323384),
    eh = n(111219),
    em = n(835723),
    eg = n(39623),
    eA = n(588190),
    ep = n(152367),
    ef = n(55730),
    eC = n(47167),
    ex = n(994500),
    eE = n(287809),
    eS = n(652215),
    eI =
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
        l),
    e_ = n(412136);
let ej = /(.*)```(\w+)\n(.*)```(.*)/s;
function ey(e) {
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
            chatInputType: A,
        } = e,
        { analyticsLocations: p } = (0, q.Ay)(),
        f = (0, Q.s)({ channel: t }),
        C = (0, o.bG)([et.A], () => et.A.isInProgress());
    function x() {
        (0, en.Tv)(t, void 0, "Plus Button");
    }
    function E() {
        el.default.track(eS.HAw.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), m("/", (0, es.x7)("/"));
    }
    function S() {
        el.default.track(eS.HAw.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), Z.R(Y.s4.TEXT, A, void 0, t.id);
    }
    function j() {
        g();
    }
    function y() {
        (0, _.Dr)(I.M.POLLS_CHAT_INPUT_COACHMARK, { dismissAction: N.i.TAKE_ACTION }),
            (0, c.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("669706"), n.e("842322")]).then(n.bind(n, 143657));
                    return (n) => (0, i.jsx)(e, { ...n, channel: t });
                },
                { modalKey: e_.sm },
            );
    }
    function b() {
        let e = h,
            n = "txt",
            l = "",
            i = h.match(ej);
        null != i && ((l = i[1]), (n = i[2]), (e = i[3]), (l += i[4])),
            (0, B.R)([(0, ei.VE)(new Blob([e], { type: "text/plain" }), `message.${n}`, "text/plain")], t, u),
            F._.dispatchToLastSubscribed(eS.jej.CLEAR_TEXT),
            "" !== l && F._.dispatchToLastSubscribed(eS.jej.INSERT_TEXT, { plainText: l });
    }
    return (
        s.useEffect(() => {
            el.default.track(eS.HAw.OPEN_POPOUT, { type: "Send Attachment", channel_id: t.id, guild_id: t.guild_id });
        }, [t.guild_id, t.id]),
        (0, i.jsx)($.W, {
            "data-menu-migrated": !0,
            onSelect: d,
            navId: "channel-attach",
            onClose: r,
            "aria-label": R.intl.string(R.t.Xm41aV),
            children: l.map(function (e) {
                switch (e.type) {
                    case eI.UPLOAD_A_FILE:
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
                    case eI.UPLOAD_TEXT_AS_FILE:
                        if ("" === h) return null;
                        return (0, i.jsx)(
                            V.Dr,
                            {
                                id: "upload-text-as-file",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: b,
                            },
                            "upload-text-as-file",
                        );
                    case eI.CLIPS:
                        return (0, i.jsx)(
                            V.Dr,
                            {
                                id: "clips",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                badge: null != e.badgeVal && e.badgeVal > 0 ? { text: e.badgeVal.toString() } : void 0,
                                action: j,
                            },
                            "clips",
                        );
                    case eI.POLL:
                        return (0, i.jsx)(
                            V.Dr,
                            {
                                id: "poll",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: y,
                            },
                            "poll",
                        );
                    case eI.INVITE_TO_PLAY_GAME:
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
                                        void J.A.sendActivityInvite({
                                            channelId: t.id,
                                            type: eS.xL.JOIN,
                                            activity: n,
                                            location: p[p.length - 1],
                                        })
                                    );
                                },
                            },
                            "play",
                        );
                    case eI.INVITE_TO_LISTEN:
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
                                        void J.A.sendActivityInvite({
                                            channelId: t.id,
                                            type: eS.xL.LISTEN,
                                            activity: n,
                                            location: p[p.length - 1],
                                        })
                                    );
                                },
                            },
                            "listen",
                        );
                    case eI.INVITE_TO_WATCH:
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
                                        void J.A.sendActivityInvite({
                                            channelId: t.id,
                                            type: eS.xL.WATCH,
                                            activity: n,
                                            location: p[p.length - 1],
                                        })
                                    );
                                },
                            },
                            "watch",
                        );
                    case eI.CREATE_THREAD:
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
                    case eI.SLASH_COMMAND:
                        return (0, i.jsx)(
                            V.Dr,
                            {
                                id: "SLASH_COMMAND",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: E,
                            },
                            "SLASH_COMMAND",
                        );
                    case eI.APP_LAUNCHER:
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
                    case eI.SCHEDULED_MESSAGE:
                        return (0, i.jsx)(
                            V.Dr,
                            {
                                id: "scheduled_message",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => (0, Q.e0)({ channel: t, entryPoint: X.t.ATTACH_MENU }),
                                children: f,
                            },
                            "scheduled_message",
                        );
                    case eI.SUMMARIZE_THREAD:
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
                                                      label: R.intl.string(R.t.eCzSdd),
                                                      iconLeft: z.n,
                                                      leadingAccessory: { type: "icon", icon: z.n },
                                                      action: () => ee.A.summarizeThread(t, !1),
                                                  },
                                                  "summarize_thread_for_everyone",
                                              ),
                                              (0, i.jsx)(
                                                  V.Dr,
                                                  {
                                                      id: "summarize_thread_for_me",
                                                      label: R.intl.string(R.t["HOe+Hq"]),
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
                    default:
                        return null;
                }
            }),
        })
    );
}
var eb = n(696016),
    eN = n(657851);
let eT = s.memo(function (e) {
    let {
            className: t,
            channel: l,
            draftType: a,
            editorTextContent: I,
            setValue: M,
            canOnlyUseTextCommands: D,
            chatInputType: V,
        } = e,
        z = (0, O.n)("ChannelAttachButton"),
        W = (0, o.bG)([m.Ay], () => m.Ay.isAppsButtonEnabled),
        $ = (0, E.Us)(),
        J = s.useRef(null),
        q = s.useRef(null),
        Z = (0, o.bG)([w.A], () => w.A.getActivities()),
        Y = (0, f.E)(),
        X = (0, o.yK)([p.Ay], () => p.Ay.getNewClipIds()),
        Q = (0, o.yK)(
            [G.A],
            () => (l.type === eS.rbe.DM ? Z.filter((e) => !G.A.getParty(e.party?.id)?.has(l.getRecipientId())) : Z),
            [Z, l],
        ),
        { onShareClick: ee } = (0, x.A)(l.id),
        et = (0, o.bG)([p.Ay], () => p.Ay.hasClips()),
        [en, el] = s.useState(null),
        ei = (0, A.sw)() && (Y || et),
        es = l.isPrivate(),
        eI = (0, o.bG)([U.A], () => es || (U.A.can(eS.xBc.ATTACH_FILES, l) && U.A.can(eS.xBc.SEND_MESSAGES, l)));
    function e_() {
        (0, c.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("459368"),
                    n.e("251714"),
                    n.e("860350"),
                    n.e("821717"),
                    n.e("269714"),
                    n.e("19385"),
                    n.e("398104"),
                    n.e("553829"),
                    n.e("33091"),
                    n.e("865257"),
                    n.e("318196"),
                    n.e("323079"),
                    n.e("437655"),
                    n.e("430877"),
                    n.e("48055"),
                    n.e("808915"),
                    n.e("586467"),
                    n.e("883952"),
                    n.e("203930"),
                    n.e("903663"),
                    n.e("496268"),
                    n.e("466147"),
                    n.e("838090"),
                    n.e("501962"),
                    n.e("901922"),
                    n.e("583518"),
                    n.e("746623"),
                    n.e("237715"),
                    n.e("974049"),
                    n.e("280559"),
                    n.e("895008"),
                    n.e("352566"),
                    n.e("489492"),
                    n.e("689160"),
                    n.e("231782"),
                    n.e("520342"),
                    n.e("771453"),
                    n.e("194676"),
                ]).then(n.bind(n, 671884));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        channelId: l.id,
                        initialMainLink: C.oH.ALL_CLIPS,
                        onClipClick: (e) => ee({ clips: [e] }),
                    });
            },
            { modalKey: eb.nm },
        ),
            el(null);
    }
    s.useEffect(() => {
        let e = (e) => {
            let { channelId: t } = e;
            t === l.id && J.current?.activateUploadDialogue();
        };
        return (
            F._.subscribe(eS.jej.UPLOAD_FILE, e),
            () => {
                F._.unsubscribe(eS.jej.UPLOAD_FILE, e);
            }
        );
    });
    let ej = (0, k.n)(l),
        eT = (0, k.Tb)(l),
        ev = !P.D_.useSetting() && !(0, H.isAndroidWeb)() && null != window.ResizeObserver,
        eM = (0, S.I7)(l ?? void 0),
        eR = (0, v.Sc)(),
        eD = (0, g.b)(),
        eL = (function (e) {
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
                } = e,
                g = [];
            return (
                t &&
                    (g.push({ type: "UPLOAD_A_FILE", icon: er.H, display: R.intl.string(R.t["d3+iYs"]) }),
                    g.push({ type: "UPLOAD_TEXT_AS_FILE", icon: er.H, display: R.intl.string(R.t["G9s+EM"]) })),
                s &&
                    t &&
                    d !== eS.BRT.POPOUT &&
                    d !== eS.BRT.OVERLAY &&
                    g.push({
                        type: "CLIPS",
                        icon: eo.x,
                        display: R.intl.string(R.t.o034cv),
                        badgeVal: o,
                        badgeColor: ea.A.colors.BACKGROUND_BRAND.css,
                    }),
                n && g.push({ type: "CREATE_THREAD", icon: ec.G, display: R.intl.string(R.t.rBIGBL) }),
                c && g.push({ type: "POLL", icon: ed.Y, display: R.intl.string(R.t.Flr51u) }),
                l &&
                    i &&
                    (m
                        ? g.push({ type: "SLASH_COMMAND", icon: eu.k, display: R.intl.string(R.t.Bbvp6G) })
                        : g.push({ type: "APP_LAUNCHER", icon: eu.k, display: R.intl.string(R.t.hSQgW9) })),
                r.forEach((e) => {
                    !(0, ef.A)(e, eS.jUm.EMBEDDED) &&
                        (e.type === eS.$pd.PLAYING &&
                            (0, ef.A)(e, eS.jUm.JOIN) &&
                            g.push({
                                type: "INVITE_TO_GAME",
                                icon: eh.L,
                                display: R.intl.formatToPlainString(R.t["KHLo+F"], {
                                    channel: (0, eC.m1)(a, eE.default, ex.A, !0),
                                    game: null != e ? e.name : "",
                                }),
                                activity: e,
                            }),
                        e.type === eS.$pd.LISTENING &&
                            (0, ef.A)(e, eS.jUm.SYNC) &&
                            g.push({
                                type: "INVITE_TO_LISTEN",
                                icon: em.J,
                                display: R.intl.formatToPlainString(R.t.I479px, {
                                    channel: (0, eC.m1)(a, eE.default, ex.A, !0),
                                    name: null != e ? e.name : "",
                                }),
                                activity: e,
                            }),
                        e.type === eS.$pd.WATCHING &&
                            (0, ef.A)(e, eS.jUm.SYNC) &&
                            g.push({
                                type: "INVITE_TO_WATCH",
                                icon: eg.EyeIcon,
                                display: R.intl.formatToPlainString(R.t["EvCP/g"], {
                                    channel: (0, eC.m1)(a, eE.default, ex.A, !0),
                                    name: null != e ? e.name : "",
                                }),
                                activity: e,
                            }));
                }),
                u && g.push({ type: "SCHEDULED_MESSAGE", icon: eA.U, display: R.intl.string(R.t["3+ii4F"]) }),
                a.isThread() &&
                    h &&
                    g.push({ type: "SUMMARIZE_THREAD", icon: ep.D, display: R.intl.string(R.t.EXfguE) }),
                g
            );
        })({
            canAttachFiles: eI,
            canStartThreads: ej || eT,
            useSlate: ev,
            hasClips: ei,
            canUseApplicationCommands: !D,
            channel: l,
            activities: Q,
            newClipsCount: X?.length ?? 0,
            canPostPolls: eM,
            appContext: $,
            canSendScheduledMessages: eR,
            canSummarizeThreads: eD,
            isAppsButtonEnabled: !z || W,
        }),
        { isCoachmarkVisible: ek, dismissCoachmark: eP } = (function (e) {
            let { channel: t, draftText: n, isEligible: l } = e,
                i = (0, _.HX)(T),
                a = (0, o.bG)([b.A], () => null != b.A.getScheduledMessage(t.id)),
                r = (0, o.bG)([y.A], () => y.A.isConnected()),
                c = l && n.trim().length > 10 && !a && r,
                [d, u] = s.useState(!1),
                h = d && c,
                [m, g] = s.useState("0");
            m !== t.id && (g(t.id), u(c && !i)),
                s.useEffect(() => {
                    if (!c || i || d) return;
                    let e = setTimeout(() => u(!0), 6e4);
                    return () => clearTimeout(e);
                }, [c, i, d, n]),
                !c && d && u(!1);
            let A = s.useCallback((e) => {
                u(!1), (0, _.Dr)(T, { dismissAction: e });
            }, []);
            return (
                s.useEffect(() => {
                    h && ((0, j.Wx)(T), (0, _.Dr)(T, { dismissAction: N.i.AUTO_DISMISS }));
                }, [h]),
                { isCoachmarkVisible: h, dismissCoachmark: A }
            );
        })({ channel: l, draftText: I, isEligible: eR });
    if (0 === eL.length) return null;
    let eO = (0, i.jsx)(d.PlusLargeIcon, { size: "refresh_sm", color: "currentColor", colorClass: eN.dW }),
        eG = (0, i.jsx)(u.Y, {
            targetElementRef: q,
            shouldShow: null != en,
            animation: u.Y.Animation.NONE,
            align: "left",
            position: "top",
            positionKey: en ?? "null",
            onRequestOpen: () => {
                el("attachMenu"), ek && eP(N.i.TAKE_ACTION);
            },
            onRequestClose: () => {
                (0, c.hasAnyModalOpen)() || el(null);
            },
            renderPopout: (e) => {
                if ("attachMenu" === en)
                    return (0, i.jsx)(ey, {
                        ...e,
                        onClose: () => el(null),
                        options: eL,
                        channel: l,
                        onFileUpload: () => J.current?.activateUploadDialogue(),
                        draftType: a,
                        editorTextContent: I,
                        setValue: M,
                        openClips: e_,
                        chatInputType: V,
                    });
                throw Error("Invalid popout type provided");
            },
            children: (e) =>
                (0, i.jsx)(K.A, {
                    ref: q,
                    className: r()(eN.g$, t),
                    childClassName: eN.wh,
                    isActive: !1,
                    "aria-label": R.intl.string(R.t.d56gCa),
                    onDoubleClick: eI ? () => J.current?.activateUploadDialogue() : void 0,
                    "aria-haspopup": "menu",
                    ...e,
                    children: eO,
                }),
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: eN.EJ,
                children: (0, i.jsx)(h.A, {
                    ref: J,
                    onChange: function (e) {
                        var t, n;
                        (t = e.currentTarget.files),
                            null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code
                                ? (0, B.V)(l, [])
                                : (0, B.R)(t, l, a, { requireConfirm: !0, origin: "file_picker" }),
                            F._.dispatchToLastSubscribed(eS.jej.TEXTAREA_FOCUS),
                            (e.currentTarget.value = "");
                    },
                    multiple: l.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, i.jsx)("div", { className: eN.Jd, children: eG }),
            ek && (0, i.jsx)(L, { targetElementRef: q, onDismiss: eP }),
        ],
    });
});
