n.d(t, { A: () => eb });
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
    p = n(734066),
    A = n(915725),
    f = n(572164),
    C = n(111994),
    x = n(352527),
    E = n(267102),
    S = n(969632),
    I = n(554146),
    _ = n(826673),
    j = n(367727),
    y = n(31717),
    b = n(49999);
let N = I.M.SCHEDULED_MESSAGES_DRAFT_COACHMARK;
var T = n(674470),
    v = n(43105),
    M = n(375708),
    R = n(632946);
function D(e) {
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
        title: M.intl.string(M.t.Pu7sCU),
        body: [M.intl.format(M.t.A2yQnt, {})],
        actions: [{ text: M.intl.string(M.t["NX+WJN"]), onClick: () => n(b.i.USER_DISMISS) }],
        graphic: { type: "image", src: R },
    });
}
var L = n(406704),
    k = n(885386),
    P = n(951260),
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
    J = n(688810),
    q = n(211401),
    Z = n(500049),
    Y = n(970244),
    X = n(867455),
    Q = n(780057),
    ee = n(747926),
    et = n(174459),
    en = n(453771),
    el = n(408018);
n(321073);
var ei = n(661531),
    es = n(81369),
    ea = n(176781),
    er = n(523056),
    eo = n(642846),
    ec = n(323384),
    ed = n(111219),
    eu = n(835723),
    eh = n(39623),
    em = n(588190),
    eg = n(152367),
    ep = n(55730),
    eA = n(47167),
    ef = n(994500),
    eC = n(287809),
    ex = n(652215),
    eE =
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
    eS = n(412136);
let eI = /(.*)```(\w+)\n(.*)```(.*)/s;
function e_(e) {
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
        { analyticsLocations: A } = (0, J.Ay)(),
        f = (0, Y.s)({ channel: t }),
        C = (0, o.bG)([Q.A], () => Q.A.isInProgress());
    function x() {
        (0, ee.Tv)(t, void 0, "Plus Button");
    }
    function E() {
        et.default.track(ex.HAw.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), m("/", (0, el.x7)("/"));
    }
    function S() {
        et.default.track(ex.HAw.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), q.R(Z.s4.TEXT, p, void 0, t.id);
    }
    function j() {
        g();
    }
    function y() {
        (0, _.Dr)(I.M.POLLS_CHAT_INPUT_COACHMARK, { dismissAction: b.i.TAKE_ACTION }),
            (0, c.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("669706"), n.e("842322")]).then(n.bind(n, 143657));
                    return (n) => (0, i.jsx)(e, { ...n, channel: t });
                },
                { modalKey: eS.sm },
            );
    }
    function N() {
        let e = h,
            n = "txt",
            l = "",
            i = h.match(eI);
        null != i && ((l = i[1]), (n = i[2]), (e = i[3]), (l += i[4])),
            (0, H.R)([(0, en.VE)(new Blob([e], { type: "text/plain" }), `message.${n}`, "text/plain")], t, u),
            w._.dispatchToLastSubscribed(ex.jej.CLEAR_TEXT),
            "" !== l && w._.dispatchToLastSubscribed(ex.jej.INSERT_TEXT, { plainText: l });
    }
    return (
        s.useEffect(() => {
            et.default.track(ex.HAw.OPEN_POPOUT, { type: "Send Attachment", channel_id: t.id, guild_id: t.guild_id });
        }, [t.guild_id, t.id]),
        (0, i.jsx)(W.W, {
            "data-menu-migrated": !0,
            onSelect: d,
            navId: "channel-attach",
            onClose: r,
            "aria-label": M.intl.string(M.t.Xm41aV),
            children: l.map(function (e) {
                switch (e.type) {
                    case eE.UPLOAD_A_FILE:
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
                    case eE.UPLOAD_TEXT_AS_FILE:
                        if ("" === h) return null;
                        return (0, i.jsx)(
                            K.Dr,
                            {
                                id: "upload-text-as-file",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: N,
                            },
                            "upload-text-as-file",
                        );
                    case eE.CLIPS:
                        return (0, i.jsx)(
                            K.Dr,
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
                    case eE.POLL:
                        return (0, i.jsx)(
                            K.Dr,
                            {
                                id: "poll",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: y,
                            },
                            "poll",
                        );
                    case eE.INVITE_TO_PLAY_GAME:
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
                                            type: ex.xL.JOIN,
                                            activity: n,
                                            location: A[A.length - 1],
                                        })
                                    );
                                },
                            },
                            "play",
                        );
                    case eE.INVITE_TO_LISTEN:
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
                                            type: ex.xL.LISTEN,
                                            activity: n,
                                            location: A[A.length - 1],
                                        })
                                    );
                                },
                            },
                            "listen",
                        );
                    case eE.INVITE_TO_WATCH:
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
                                            type: ex.xL.WATCH,
                                            activity: n,
                                            location: A[A.length - 1],
                                        })
                                    );
                                },
                            },
                            "watch",
                        );
                    case eE.CREATE_THREAD:
                        return (0, i.jsx)(
                            K.Dr,
                            {
                                id: "THREAD",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: x,
                            },
                            "THREAD",
                        );
                    case eE.SLASH_COMMAND:
                        return (0, i.jsx)(
                            K.Dr,
                            {
                                id: "SLASH_COMMAND",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: E,
                            },
                            "SLASH_COMMAND",
                        );
                    case eE.APP_LAUNCHER:
                        return (0, i.jsx)(
                            K.Dr,
                            {
                                id: "APP_LAUNCHER",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: S,
                            },
                            "APP_LAUNCHER",
                        );
                    case eE.SCHEDULED_MESSAGE:
                        return (0, i.jsx)(
                            K.Dr,
                            {
                                id: "scheduled_message",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => (0, Y.e0)({ channel: t }),
                                children: f,
                            },
                            "scheduled_message",
                        );
                    case eE.SUMMARIZE_THREAD:
                        return (0, i.jsx)(
                            K.Dr,
                            {
                                id: "summarize_thread",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => X.A.summarizeThread(t),
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
                                                      label: M.intl.string(M.t.eCzSdd),
                                                      iconLeft: V.n,
                                                      leadingAccessory: { type: "icon", icon: V.n },
                                                      action: () => X.A.summarizeThread(t, !1),
                                                  },
                                                  "summarize_thread_for_everyone",
                                              ),
                                              (0, i.jsx)(
                                                  K.Dr,
                                                  {
                                                      id: "summarize_thread_for_me",
                                                      label: M.intl.string(M.t["HOe+Hq"]),
                                                      iconLeft: z.UserIcon,
                                                      leadingAccessory: { type: "icon", icon: z.UserIcon },
                                                      action: () => X.A.summarizeThread(t),
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
var ej = n(696016),
    ey = n(657851);
let eb = s.memo(function (e) {
    let {
            className: t,
            channel: l,
            draftType: a,
            editorTextContent: I,
            setValue: v,
            canOnlyUseTextCommands: R,
            chatInputType: K,
        } = e,
        V = (0, P.n)("ChannelAttachButton"),
        z = (0, o.bG)([m.Ay], () => m.Ay.isAppsButtonEnabled),
        W = (0, E.Us)(),
        $ = s.useRef(null),
        J = s.useRef(null),
        q = (0, o.bG)([U.A], () => U.A.getActivities()),
        Z = (0, f.E)(),
        Y = (0, o.yK)([A.Ay], () => A.Ay.getNewClipIds()),
        X = (0, o.yK)(
            [O.A],
            () => (l.type === ex.rbe.DM ? q.filter((e) => !O.A.getParty(e.party?.id)?.has(l.getRecipientId())) : q),
            [q, l],
        ),
        { onShareClick: Q } = (0, x.A)(l.id),
        ee = (0, o.bG)([A.Ay], () => A.Ay.hasClips()),
        [et, en] = s.useState(null),
        el = (0, p.sw)() && (Z || ee),
        eE = l.isPrivate(),
        eS = (0, o.bG)([G.A], () => eE || (G.A.can(ex.xBc.ATTACH_FILES, l) && G.A.can(ex.xBc.SEND_MESSAGES, l)));
    function eI() {
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
                        onClipClick: (e) => Q({ clips: [e] }),
                    });
            },
            { modalKey: ej.nm },
        ),
            en(null);
    }
    s.useEffect(() => {
        let e = (e) => {
            let { channelId: t } = e;
            t === l.id && $.current?.activateUploadDialogue();
        };
        return (
            w._.subscribe(ex.jej.UPLOAD_FILE, e),
            () => {
                w._.unsubscribe(ex.jej.UPLOAD_FILE, e);
            }
        );
    });
    let eb = (0, L.n)(l),
        eN = (0, L.Tb)(l),
        eT = !k.D_.useSetting() && !(0, F.isAndroidWeb)() && null != window.ResizeObserver,
        ev = (0, S.I7)(l ?? void 0),
        eM = (0, T.Sc)(),
        eR = (0, g.b)(),
        eD = (function (e) {
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
                    (g.push({ type: "UPLOAD_A_FILE", icon: es.H, display: M.intl.string(M.t["d3+iYs"]) }),
                    g.push({ type: "UPLOAD_TEXT_AS_FILE", icon: es.H, display: M.intl.string(M.t["G9s+EM"]) })),
                s &&
                    t &&
                    d !== ex.BRT.POPOUT &&
                    d !== ex.BRT.OVERLAY &&
                    g.push({
                        type: "CLIPS",
                        icon: ea.x,
                        display: M.intl.string(M.t.o034cv),
                        badgeVal: o,
                        badgeColor: ei.A.colors.BACKGROUND_BRAND.css,
                    }),
                n && g.push({ type: "CREATE_THREAD", icon: er.G, display: M.intl.string(M.t.rBIGBL) }),
                c && g.push({ type: "POLL", icon: eo.Y, display: M.intl.string(M.t.Flr51u) }),
                l &&
                    i &&
                    (m
                        ? g.push({ type: "SLASH_COMMAND", icon: ec.k, display: M.intl.string(M.t.Bbvp6G) })
                        : g.push({ type: "APP_LAUNCHER", icon: ec.k, display: M.intl.string(M.t.hSQgW9) })),
                r.forEach((e) => {
                    !(0, ep.A)(e, ex.jUm.EMBEDDED) &&
                        (e.type === ex.$pd.PLAYING &&
                            (0, ep.A)(e, ex.jUm.JOIN) &&
                            g.push({
                                type: "INVITE_TO_GAME",
                                icon: ed.L,
                                display: M.intl.formatToPlainString(M.t["KHLo+F"], {
                                    channel: (0, eA.m1)(a, eC.default, ef.A, !0),
                                    game: null != e ? e.name : "",
                                }),
                                activity: e,
                            }),
                        e.type === ex.$pd.LISTENING &&
                            (0, ep.A)(e, ex.jUm.SYNC) &&
                            g.push({
                                type: "INVITE_TO_LISTEN",
                                icon: eu.J,
                                display: M.intl.formatToPlainString(M.t.I479px, {
                                    channel: (0, eA.m1)(a, eC.default, ef.A, !0),
                                    name: null != e ? e.name : "",
                                }),
                                activity: e,
                            }),
                        e.type === ex.$pd.WATCHING &&
                            (0, ep.A)(e, ex.jUm.SYNC) &&
                            g.push({
                                type: "INVITE_TO_WATCH",
                                icon: eh.EyeIcon,
                                display: M.intl.formatToPlainString(M.t["EvCP/g"], {
                                    channel: (0, eA.m1)(a, eC.default, ef.A, !0),
                                    name: null != e ? e.name : "",
                                }),
                                activity: e,
                            }));
                }),
                u && g.push({ type: "SCHEDULED_MESSAGE", icon: em.U, display: M.intl.string(M.t["3+ii4F"]) }),
                a.isThread() &&
                    h &&
                    g.push({ type: "SUMMARIZE_THREAD", icon: eg.D, display: M.intl.string(M.t.EXfguE) }),
                g
            );
        })({
            canAttachFiles: eS,
            canStartThreads: eb || eN,
            useSlate: eT,
            hasClips: el,
            canUseApplicationCommands: !R,
            channel: l,
            activities: X,
            newClipsCount: Y?.length ?? 0,
            canPostPolls: ev,
            appContext: W,
            canSendScheduledMessages: eM,
            canSummarizeThreads: eR,
            isAppsButtonEnabled: !V || z,
        }),
        { isCoachmarkVisible: eL, dismissCoachmark: ek } = (function (e) {
            let { channel: t, draftText: n, isEligible: l } = e,
                i = (0, _.HX)(N),
                a = (0, o.bG)([y.A], () => null != y.A.getScheduledMessage(t.id)),
                r = l && n.trim().length > 10 && !a,
                [c, d] = s.useState(!1),
                u = c && r,
                [h, m] = s.useState("0");
            h !== t.id && (m(t.id), d(r && !i)),
                s.useEffect(() => {
                    if (!r || i || c) return;
                    let e = setTimeout(() => d(!0), 6e4);
                    return () => clearTimeout(e);
                }, [r, i, c, n]);
            let g = s.useCallback((e) => {
                d(!1), (0, _.Dr)(N, { dismissAction: e });
            }, []);
            return (
                s.useEffect(() => {
                    u && ((0, j.Wx)(N), (0, _.Dr)(N, { dismissAction: b.i.AUTO_DISMISS }));
                }, [u]),
                { isCoachmarkVisible: u, dismissCoachmark: g }
            );
        })({ channel: l, draftText: I, isEligible: eM });
    if (0 === eD.length) return null;
    let eP = (0, i.jsx)(d.PlusLargeIcon, { size: "refresh_sm", color: "currentColor", colorClass: ey.dW }),
        eO = (0, i.jsx)(u.Y, {
            targetElementRef: J,
            shouldShow: null != et,
            animation: u.Y.Animation.NONE,
            align: "left",
            position: "top",
            positionKey: et ?? "null",
            onRequestOpen: () => {
                en("attachMenu"), eL && ek(b.i.TAKE_ACTION);
            },
            onRequestClose: () => {
                (0, c.hasAnyModalOpen)() || en(null);
            },
            renderPopout: (e) => {
                if ("attachMenu" === et)
                    return (0, i.jsx)(e_, {
                        ...e,
                        onClose: () => en(null),
                        options: eD,
                        channel: l,
                        onFileUpload: () => $.current?.activateUploadDialogue(),
                        draftType: a,
                        editorTextContent: I,
                        setValue: v,
                        openClips: eI,
                        chatInputType: K,
                    });
                throw Error("Invalid popout type provided");
            },
            children: (e) =>
                (0, i.jsx)(B.A, {
                    ref: J,
                    className: r()(ey.g$, t),
                    childClassName: ey.wh,
                    isActive: !1,
                    "aria-label": M.intl.string(M.t.d56gCa),
                    onDoubleClick: eS ? () => $.current?.activateUploadDialogue() : void 0,
                    "aria-haspopup": "menu",
                    ...e,
                    children: eP,
                }),
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: ey.EJ,
                children: (0, i.jsx)(h.A, {
                    ref: $,
                    onChange: function (e) {
                        var t, n;
                        (t = e.currentTarget.files),
                            null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code
                                ? (0, H.V)(l, [])
                                : (0, H.R)(t, l, a, { requireConfirm: !0, origin: "file_picker" }),
                            w._.dispatchToLastSubscribed(ex.jej.TEXTAREA_FOCUS),
                            (e.currentTarget.value = "");
                    },
                    multiple: l.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, i.jsx)("div", { className: ey.Jd, children: eO }),
            eL && (0, i.jsx)(D, { targetElementRef: J, onDismiss: ek }),
        ],
    });
});
