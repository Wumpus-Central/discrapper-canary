n.d(t, { A: () => ex });
var l,
    i = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(17928),
    c = n(192308),
    d = n(663341),
    u = n(922016),
    h = n(780777),
    m = n(775602),
    g = n(147087),
    p = n(734066),
    A = n(274372),
    f = n(572164),
    C = n(111994),
    E = n(352527),
    x = n(267102),
    S = n(969632),
    _ = n(910425),
    I = n(406704),
    j = n(885386),
    y = n(951260),
    T = n(629016),
    N = n(576705),
    b = n(461213),
    v = n(625494),
    M = n(723702),
    R = n(518960),
    D = n(767089),
    L = n(554146),
    P = n(477782),
    k = n(177953),
    O = n(950305),
    G = n(980707),
    U = n(308368),
    w = n(688810),
    F = n(211401),
    H = n(500049),
    B = n(826673),
    V = n(970244),
    K = n(867455),
    z = n(780057),
    W = n(747926),
    q = n(174459),
    $ = n(453771),
    J = n(408018);
n(321073);
var Z = n(661531),
    Y = n(81369),
    X = n(176781),
    Q = n(523056),
    ee = n(642846),
    et = n(323384),
    en = n(111219),
    el = n(835723),
    ei = n(39623),
    es = n(406810),
    ea = n(152367),
    er = n(55730),
    eo = n(47167),
    ec = n(994500),
    ed = n(287809),
    eu = n(652215),
    eh = n(375708),
    em =
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
    eg = n(49999),
    ep = n(412136);
let eA = /(.*)```(\w+)\n(.*)```(.*)/s;
function ef(e) {
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
        { analyticsLocations: A } = (0, w.Ay)(),
        f = (0, V.s)({ channel: t }),
        C = (0, o.bG)([z.A], () => z.A.isInProgress());
    function E() {
        (0, W.Tv)(t, void 0, "Plus Button");
    }
    function x() {
        q.default.track(eu.HAw.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), m("/", (0, J.x7)("/"));
    }
    function S() {
        q.default.track(eu.HAw.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), F.R(H.s4.TEXT, p, void 0, t.id);
    }
    function _() {
        g();
    }
    function I() {
        (0, B.Dr)(L.M.POLLS_CHAT_INPUT_COACHMARK, { dismissAction: eg.i.TAKE_ACTION }),
            (0, c.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("83644"), n.e("42322")]).then(n.bind(n, 143657));
                    return (n) => (0, i.jsx)(e, { ...n, channel: t });
                },
                { modalKey: ep.sm },
            );
    }
    function j() {
        let e = h,
            n = "txt",
            l = "",
            i = h.match(eA);
        null != i && ((l = i[1]), (n = i[2]), (e = i[3]), (l += i[4])),
            (0, R.R)([(0, $.VE)(new Blob([e], { type: "text/plain" }), `message.${n}`, "text/plain")], t, u),
            v._.dispatchToLastSubscribed(eu.jej.CLEAR_TEXT),
            "" !== l && v._.dispatchToLastSubscribed(eu.jej.INSERT_TEXT, { plainText: l });
    }
    return (
        s.useEffect(() => {
            q.default.track(eu.HAw.OPEN_POPOUT, { type: "Send Attachment", channel_id: t.id, guild_id: t.guild_id });
        }, [t.guild_id, t.id]),
        (0, i.jsx)(G.W, {
            "data-menu-migrated": !0,
            onSelect: d,
            navId: "channel-attach",
            onClose: r,
            "aria-label": eh.intl.string(eh.t.Xm41aV),
            children: l.map(function (e) {
                switch (e.type) {
                    case em.UPLOAD_A_FILE:
                        return (0, i.jsx)(
                            P.Dr,
                            {
                                id: "upload-file",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: a,
                            },
                            "upload-file",
                        );
                    case em.UPLOAD_TEXT_AS_FILE:
                        if ("" === h) return null;
                        return (0, i.jsx)(
                            P.Dr,
                            {
                                id: "upload-text-as-file",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: j,
                            },
                            "upload-text-as-file",
                        );
                    case em.CLIPS:
                        return (0, i.jsx)(
                            P.Dr,
                            {
                                id: "clips",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                badge: null != e.badgeVal && e.badgeVal > 0 ? { text: e.badgeVal.toString() } : void 0,
                                action: _,
                            },
                            "clips",
                        );
                    case em.POLL:
                        return (0, i.jsx)(
                            P.Dr,
                            {
                                id: "poll",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: I,
                            },
                            "poll",
                        );
                    case em.INVITE_TO_PLAY_GAME:
                        return (0, i.jsx)(
                            P.Dr,
                            {
                                id: "play",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void U.A.sendActivityInvite({
                                            channelId: t.id,
                                            type: eu.xL.JOIN,
                                            activity: n,
                                            location: A[A.length - 1],
                                        })
                                    );
                                },
                            },
                            "play",
                        );
                    case em.INVITE_TO_LISTEN:
                        return (0, i.jsx)(
                            P.Dr,
                            {
                                id: "listen",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void U.A.sendActivityInvite({
                                            channelId: t.id,
                                            type: eu.xL.LISTEN,
                                            activity: n,
                                            location: A[A.length - 1],
                                        })
                                    );
                                },
                            },
                            "listen",
                        );
                    case em.INVITE_TO_WATCH:
                        return (0, i.jsx)(
                            P.Dr,
                            {
                                id: "watch",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void U.A.sendActivityInvite({
                                            channelId: t.id,
                                            type: eu.xL.WATCH,
                                            activity: n,
                                            location: A[A.length - 1],
                                        })
                                    );
                                },
                            },
                            "watch",
                        );
                    case em.CREATE_THREAD:
                        return (0, i.jsx)(
                            P.Dr,
                            {
                                id: "THREAD",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: E,
                            },
                            "THREAD",
                        );
                    case em.SLASH_COMMAND:
                        return (0, i.jsx)(
                            P.Dr,
                            {
                                id: "SLASH_COMMAND",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: x,
                            },
                            "SLASH_COMMAND",
                        );
                    case em.APP_LAUNCHER:
                        return (0, i.jsx)(
                            P.Dr,
                            {
                                id: "APP_LAUNCHER",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: S,
                            },
                            "APP_LAUNCHER",
                        );
                    case em.SCHEDULED_MESSAGE:
                        return (0, i.jsx)(
                            P.Dr,
                            {
                                id: "scheduled_message",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => (0, V.e0)({ channel: t }),
                                children: f,
                            },
                            "scheduled_message",
                        );
                    case em.SUMMARIZE_THREAD:
                        return (0, i.jsx)(
                            P.Dr,
                            {
                                id: "summarize_thread",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => K.A.summarizeThread(t),
                                loading: C,
                                disabled: C,
                                children: C
                                    ? null
                                    : (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(
                                                  P.Dr,
                                                  {
                                                      id: "summarize_thread_for_everyone",
                                                      label: eh.intl.string(eh.t.eCzSdd),
                                                      iconLeft: k.n,
                                                      leadingAccessory: { type: "icon", icon: k.n },
                                                      action: () => K.A.summarizeThread(t, !1),
                                                  },
                                                  "summarize_thread_for_everyone",
                                              ),
                                              (0, i.jsx)(
                                                  P.Dr,
                                                  {
                                                      id: "summarize_thread_for_me",
                                                      label: eh.intl.string(eh.t["HOe+Hq"]),
                                                      iconLeft: O.n,
                                                      leadingAccessory: { type: "icon", icon: O.n },
                                                      action: () => K.A.summarizeThread(t),
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
var eC = n(696016),
    eE = n(644268);
let ex = s.memo(function (e) {
    let {
            className: t,
            channel: l,
            draftType: a,
            editorTextContent: L,
            setValue: P,
            canOnlyUseTextCommands: k,
            chatInputType: O,
        } = e,
        G = (0, y.n)("ChannelAttachButton"),
        U = (0, o.bG)([m.Ay], () => m.Ay.isAppsButtonEnabled),
        w = (0, x.Us)(),
        F = s.useRef(null),
        H = s.useRef(null),
        B = (0, o.bG)([b.A], () => b.A.getActivities()),
        V = (0, f.Et)(),
        K = (0, o.yK)([A.Ay], () => A.Ay.getNewClipIds()),
        z = (0, o.yK)(
            [T.A],
            () => (l.type === eu.rbe.DM ? B.filter((e) => !T.A.getParty(e.party?.id)?.has(l.getRecipientId())) : B),
            [B, l],
        ),
        { onShareClick: W } = (0, E.A)(l.id),
        q = (0, o.bG)([A.Ay], () => A.Ay.hasClips()),
        [$, J] = s.useState(null),
        em = (0, p.sw)() && (V || q),
        eg = l.isPrivate(),
        ep = (0, o.bG)([N.A], () => eg || (N.A.can(eu.xBc.ATTACH_FILES, l) && N.A.can(eu.xBc.SEND_MESSAGES, l)));
    function eA() {
        (0, c.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("11352"),
                    n.e("23887"),
                    n.e("24554"),
                    n.e("29244"),
                    n.e("17095"),
                    n.e("45043"),
                    n.e("30204"),
                    n.e("83952"),
                    n.e("1962"),
                    n.e("1922"),
                    n.e("83518"),
                    n.e("81202"),
                    n.e("37715"),
                    n.e("74049"),
                    n.e("80559"),
                    n.e("69201"),
                    n.e("95008"),
                    n.e("52566"),
                    n.e("73954"),
                    n.e("89160"),
                    n.e("31782"),
                    n.e("20342"),
                    n.e("85577"),
                    n.e("75261"),
                ]).then(n.bind(n, 310480));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        channelId: l.id,
                        initialMainLink: C.oH.ALL_CLIPS,
                        onClipClick: (e) => W({ clips: [e] }),
                    });
            },
            { modalKey: eC.nm },
        ),
            J(null);
    }
    s.useEffect(() => {
        let e = (e) => {
            let { channelId: t } = e;
            t === l.id && F.current?.activateUploadDialogue();
        };
        return (
            v._.subscribe(eu.jej.UPLOAD_FILE, e),
            () => {
                v._.unsubscribe(eu.jej.UPLOAD_FILE, e);
            }
        );
    });
    let ex = (0, I.n)(l),
        eS = (0, I.Tb)(l),
        e_ = !j.D_.useSetting() && !(0, M.isAndroidWeb)() && null != window.ResizeObserver,
        eI = (0, S.I7)(l ?? void 0),
        ej = (0, _.Sc)(),
        ey = (0, g.b)(),
        eT = (function (e) {
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
                    (g.push({ type: "UPLOAD_A_FILE", icon: Y.H, display: eh.intl.string(eh.t["d3+iYs"]) }),
                    g.push({ type: "UPLOAD_TEXT_AS_FILE", icon: Y.H, display: eh.intl.string(eh.t["G9s+EM"]) })),
                s &&
                    t &&
                    d !== eu.BRT.POPOUT &&
                    d !== eu.BRT.OVERLAY &&
                    g.push({
                        type: "CLIPS",
                        icon: X.x,
                        display: eh.intl.string(eh.t.o034cv),
                        badgeVal: o,
                        badgeColor: Z.A.colors.BACKGROUND_BRAND.css,
                    }),
                n && g.push({ type: "CREATE_THREAD", icon: Q.G, display: eh.intl.string(eh.t.rBIGBL) }),
                c && g.push({ type: "POLL", icon: ee.Y, display: eh.intl.string(eh.t.Flr51u) }),
                l &&
                    i &&
                    (m
                        ? g.push({ type: "SLASH_COMMAND", icon: et.k, display: eh.intl.string(eh.t.Bbvp6G) })
                        : g.push({ type: "APP_LAUNCHER", icon: et.k, display: eh.intl.string(eh.t.hSQgW9) })),
                r.forEach((e) => {
                    !(0, er.A)(e, eu.jUm.EMBEDDED) &&
                        (e.type === eu.$pd.PLAYING &&
                            (0, er.A)(e, eu.jUm.JOIN) &&
                            g.push({
                                type: "INVITE_TO_GAME",
                                icon: en.L,
                                display: eh.intl.formatToPlainString(eh.t["KHLo+F"], {
                                    channel: (0, eo.m1)(a, ed.default, ec.A, !0),
                                    game: null != e ? e.name : "",
                                }),
                                activity: e,
                            }),
                        e.type === eu.$pd.LISTENING &&
                            (0, er.A)(e, eu.jUm.SYNC) &&
                            g.push({
                                type: "INVITE_TO_LISTEN",
                                icon: el.J,
                                display: eh.intl.formatToPlainString(eh.t.I479px, {
                                    channel: (0, eo.m1)(a, ed.default, ec.A, !0),
                                    name: null != e ? e.name : "",
                                }),
                                activity: e,
                            }),
                        e.type === eu.$pd.WATCHING &&
                            (0, er.A)(e, eu.jUm.SYNC) &&
                            g.push({
                                type: "INVITE_TO_WATCH",
                                icon: ei.b,
                                display: eh.intl.formatToPlainString(eh.t["EvCP/g"], {
                                    channel: (0, eo.m1)(a, ed.default, ec.A, !0),
                                    name: null != e ? e.name : "",
                                }),
                                activity: e,
                            }));
                }),
                u && g.push({ type: "SCHEDULED_MESSAGE", icon: es.O, display: eh.intl.string(eh.t["3+ii4F"]) }),
                a.isThread() &&
                    h &&
                    g.push({ type: "SUMMARIZE_THREAD", icon: ea.D, display: eh.intl.string(eh.t.EXfguE) }),
                g
            );
        })({
            canAttachFiles: ep,
            canStartThreads: ex || eS,
            useSlate: e_,
            hasClips: em,
            canUseApplicationCommands: !k,
            channel: l,
            activities: z,
            newClipsCount: K?.length ?? 0,
            canPostPolls: eI,
            appContext: w,
            canSendScheduledMessages: ej,
            canSummarizeThreads: ey,
            isAppsButtonEnabled: !G || U,
        });
    if (0 === eT.length) return null;
    let eN = (0, i.jsx)(d.p, { size: "refresh_sm", color: "currentColor", colorClass: eE.dW }),
        eb = (0, i.jsx)(u.Y, {
            targetElementRef: H,
            shouldShow: null != $,
            animation: u.Y.Animation.NONE,
            align: "left",
            position: "top",
            positionKey: $ ?? "null",
            onRequestOpen: () => {
                J("attachMenu");
            },
            onRequestClose: () => {
                (0, c.hasAnyModalOpen)() || J(null);
            },
            renderPopout: (e) => {
                if ("attachMenu" === $)
                    return (0, i.jsx)(ef, {
                        ...e,
                        onClose: () => J(null),
                        options: eT,
                        channel: l,
                        onFileUpload: () => F.current?.activateUploadDialogue(),
                        draftType: a,
                        editorTextContent: L,
                        setValue: P,
                        openClips: eA,
                        chatInputType: O,
                    });
                throw Error("Invalid popout type provided");
            },
            children: (e) =>
                (0, i.jsx)(D.A, {
                    ref: H,
                    className: r()(eE.g$, t),
                    childClassName: eE.wh,
                    isActive: !1,
                    "aria-label": eh.intl.string(eh.t.d56gCa),
                    onDoubleClick: ep ? () => F.current?.activateUploadDialogue() : void 0,
                    "aria-haspopup": "menu",
                    ...e,
                    children: eN,
                }),
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: eE.EJ,
                children: (0, i.jsx)(h.A, {
                    ref: F,
                    onChange: (e) => {
                        var t, n;
                        (t = e.currentTarget.files),
                            null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code
                                ? (0, R.V)(l, [])
                                : (0, R.R)(t, l, a, { requireConfirm: !0, origin: "file_picker" }),
                            v._.dispatchToLastSubscribed(eu.jej.TEXTAREA_FOCUS),
                            (e.currentTarget.value = "");
                    },
                    multiple: l.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, i.jsx)("div", { className: eE.Jd, children: eb }),
        ],
    });
});
