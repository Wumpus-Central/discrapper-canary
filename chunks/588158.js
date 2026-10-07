n.d(t, { A: () => ev });
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
    x = n(111994),
    C = n(352527),
    E = n(267102),
    S = n(969632),
    I = n(554146),
    j = n(131607);
let y = I.M.SCHEDULED_MESSAGES_DRAFT_COACHMARK;
var v = n(566908),
    _ = n(43105),
    b = n(49999),
    N = n(660183),
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
    L = n(951260),
    k = n(629016),
    P = n(576705),
    O = n(461213),
    G = n(625494),
    U = n(723702),
    w = n(518960),
    F = n(767089),
    B = n(477782),
    H = n(177953),
    K = n(950305),
    V = n(980707),
    z = n(308368),
    W = n(688810),
    $ = n(211401),
    q = n(500049),
    Z = n(551640),
    J = n(970244),
    Y = n(867455),
    X = n(780057),
    Q = n(747926),
    ee = n(174459),
    et = n(453771),
    en = n(408018);
n(321073);
var el = n(661531),
    ei = n(81369),
    es = n(176781),
    ea = n(523056),
    er = n(642846),
    eo = n(323384),
    ec = n(111219),
    ed = n(835723),
    eu = n(39623),
    eh = n(588190),
    em = n(152367),
    eg = n(55730),
    ep = n(47167),
    eA = n(994500),
    ef = n(287809),
    ex = n(652215),
    eC =
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
    eE = n(412136);
let eS = /(.*)```(\w+)\n(.*)```(.*)/s;
function eI(e) {
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
        { analyticsLocations: A } = (0, W.Ay)(),
        f = (0, J.s)({ channel: t }),
        x = (0, o.bG)([X.A], () => X.A.isInProgress());
    function C() {
        (0, Q.Tv)(t, void 0, "Plus Button");
    }
    function E() {
        (ee.default.track(ex.HAw.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), m("/", (0, en.x7)("/")));
    }
    function S() {
        (ee.default.track(ex.HAw.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), $.R(q.s4.TEXT, p, void 0, t.id));
    }
    function I() {
        g();
    }
    function j() {
        (0, c.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("669706"), n.e("842322")]).then(n.bind(n, 143657));
                return (n) => (0, i.jsx)(e, { ...n, channel: t });
            },
            { modalKey: eE.sm },
        );
    }
    function y() {
        let e = h,
            n = "txt",
            l = "",
            i = h.match(eS);
        (null != i && ((l = i[1]), (n = i[2]), (e = i[3]), (l += i[4])),
            (0, w.R)([(0, et.VE)(new Blob([e], { type: "text/plain" }), `message.${n}`, "text/plain")], t, u),
            G._.dispatchToLastSubscribed(ex.jej.CLEAR_TEXT),
            "" !== l && G._.dispatchToLastSubscribed(ex.jej.INSERT_TEXT, { plainText: l }));
    }
    return (
        s.useEffect(() => {
            ee.default.track(ex.HAw.OPEN_POPOUT, { type: "Send Attachment", channel_id: t.id, guild_id: t.guild_id });
        }, [t.guild_id, t.id]),
        (0, i.jsx)(V.W, {
            "data-menu-migrated": !0,
            onSelect: d,
            navId: "channel-attach",
            onClose: r,
            "aria-label": N.intl.string(N.t.Xm41aV),
            children: l.map(function (e) {
                switch (e.type) {
                    case eC.UPLOAD_A_FILE:
                        return (0, i.jsx)(
                            B.Dr,
                            {
                                id: "upload-file",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: a,
                            },
                            "upload-file",
                        );
                    case eC.UPLOAD_TEXT_AS_FILE:
                        if ("" === h) return null;
                        return (0, i.jsx)(
                            B.Dr,
                            {
                                id: "upload-text-as-file",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: y,
                            },
                            "upload-text-as-file",
                        );
                    case eC.CLIPS:
                        return (0, i.jsx)(
                            B.Dr,
                            {
                                id: "clips",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                badge: null != e.badgeVal && e.badgeVal > 0 ? { text: e.badgeVal.toString() } : void 0,
                                action: I,
                            },
                            "clips",
                        );
                    case eC.POLL:
                        return (0, i.jsx)(
                            B.Dr,
                            {
                                id: "poll",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: j,
                            },
                            "poll",
                        );
                    case eC.INVITE_TO_PLAY_GAME:
                        return (0, i.jsx)(
                            B.Dr,
                            {
                                id: "play",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void z.A.sendActivityInvite({
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
                    case eC.INVITE_TO_LISTEN:
                        return (0, i.jsx)(
                            B.Dr,
                            {
                                id: "listen",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void z.A.sendActivityInvite({
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
                    case eC.INVITE_TO_WATCH:
                        return (0, i.jsx)(
                            B.Dr,
                            {
                                id: "watch",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void z.A.sendActivityInvite({
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
                    case eC.CREATE_THREAD:
                        return (0, i.jsx)(
                            B.Dr,
                            {
                                id: "THREAD",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: C,
                            },
                            "THREAD",
                        );
                    case eC.SLASH_COMMAND:
                        return (0, i.jsx)(
                            B.Dr,
                            {
                                id: "SLASH_COMMAND",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: E,
                            },
                            "SLASH_COMMAND",
                        );
                    case eC.APP_LAUNCHER:
                        return (0, i.jsx)(
                            B.Dr,
                            {
                                id: "APP_LAUNCHER",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: S,
                            },
                            "APP_LAUNCHER",
                        );
                    case eC.SCHEDULED_MESSAGE:
                        return (0, i.jsx)(
                            B.Dr,
                            {
                                id: "scheduled_message",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => (0, J.e0)({ channel: t, entryPoint: Z.t.ATTACH_MENU }),
                                children: f,
                            },
                            "scheduled_message",
                        );
                    case eC.SUMMARIZE_THREAD:
                        return (0, i.jsx)(
                            B.Dr,
                            {
                                id: "summarize_thread",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => Y.A.summarizeThread(t),
                                loading: x,
                                disabled: x,
                                children: x
                                    ? null
                                    : (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(
                                                  B.Dr,
                                                  {
                                                      id: "summarize_thread_for_everyone",
                                                      label: N.intl.string(N.t.eCzSdd),
                                                      iconLeft: H.n,
                                                      leadingAccessory: { type: "icon", icon: H.n },
                                                      action: () => Y.A.summarizeThread(t, !1),
                                                  },
                                                  "summarize_thread_for_everyone",
                                              ),
                                              (0, i.jsx)(
                                                  B.Dr,
                                                  {
                                                      id: "summarize_thread_for_me",
                                                      label: N.intl.string(N.t["HOe+Hq"]),
                                                      iconLeft: K.UserIcon,
                                                      leadingAccessory: { type: "icon", icon: K.UserIcon },
                                                      action: () => Y.A.summarizeThread(t),
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
let ev = s.memo(function (e) {
    let {
            className: t,
            channel: l,
            draftType: a,
            editorTextContent: I,
            setValue: _,
            canOnlyUseTextCommands: T,
            chatInputType: B,
        } = e,
        H = (0, L.n)("ChannelAttachButton"),
        K = (0, o.bG)([m.Ay], () => m.Ay.isAppsButtonEnabled),
        V = (0, E.Us)(),
        z = s.useRef(null),
        W = s.useRef(null),
        $ = (0, o.bG)([O.A], () => O.A.getActivities()),
        q = (0, f.E)(),
        Z = (0, o.yK)([A.Ay], () => A.Ay.getNewClipIds()),
        J = (0, o.yK)(
            [k.A],
            () => (l.type === ex.rbe.DM ? $.filter((e) => !k.A.getParty(e.party?.id)?.has(l.getRecipientId())) : $),
            [$, l],
        ),
        { onShareClick: Y } = (0, C.A)(l.id),
        X = (0, o.bG)([A.Ay], () => A.Ay.hasClips()),
        [Q, ee] = s.useState(null),
        et = (0, p.sw)() && (q || X),
        en = l.isPrivate(),
        eC = (0, o.bG)([P.A], () => en || (P.A.can(ex.xBc.ATTACH_FILES, l) && P.A.can(ex.xBc.SEND_MESSAGES, l)));
    function eE() {
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
                    n.e("415809"),
                    n.e("237715"),
                    n.e("231782"),
                    n.e("895008"),
                    n.e("352566"),
                    n.e("793784"),
                    n.e("689160"),
                    n.e("565977"),
                    n.e("520342"),
                    n.e("650676"),
                    n.e("717278"),
                ]).then(n.bind(n, 272351));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        channelId: l.id,
                        initialMainLink: x.oH.ALL_CLIPS,
                        picker: { onPick: (e) => Y({ clips: [e] }), action: x.qh.SHARE, allowMultiSelect: !0 },
                    });
            },
            { modalKey: ej.nm },
        ),
            ee(null));
    }
    s.useEffect(() => {
        let e = (e) => {
            let { channelId: t } = e;
            t === l.id && z.current?.activateUploadDialogue();
        };
        return (
            G._.subscribe(ex.jej.UPLOAD_FILE, e),
            () => {
                G._.unsubscribe(ex.jej.UPLOAD_FILE, e);
            }
        );
    });
    let eS = (0, R.n)(l),
        ev = (0, R.Tb)(l),
        e_ = !D.D_.useSetting() && !(0, U.isAndroidWeb)() && null != window.ResizeObserver,
        eb = (0, S.I7)(l ?? void 0),
        eN = (0, v.vK)(l),
        eT = (0, g.b)(),
        eM = (function (e) {
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
                    (g.push({ type: "UPLOAD_A_FILE", icon: ei.H, display: N.intl.string(N.t["d3+iYs"]) }),
                    g.push({ type: "UPLOAD_TEXT_AS_FILE", icon: ei.H, display: N.intl.string(N.t["G9s+EM"]) })),
                s &&
                    t &&
                    d !== ex.BRT.POPOUT &&
                    d !== ex.BRT.OVERLAY &&
                    g.push({
                        type: "CLIPS",
                        icon: es.x,
                        display: N.intl.string(N.t.o034cv),
                        badgeVal: o,
                        badgeColor: el.A.colors.BACKGROUND_BRAND.css,
                    }),
                n && g.push({ type: "CREATE_THREAD", icon: ea.G, display: N.intl.string(N.t.rBIGBL) }),
                c && g.push({ type: "POLL", icon: er.Y, display: N.intl.string(N.t.Flr51u) }),
                l &&
                    i &&
                    (m
                        ? g.push({ type: "SLASH_COMMAND", icon: eo.k, display: N.intl.string(N.t.Bbvp6G) })
                        : g.push({ type: "APP_LAUNCHER", icon: eo.k, display: N.intl.string(N.t.hSQgW9) })),
                r.forEach((e) => {
                    !(0, eg.A)(e, ex.jUm.EMBEDDED) &&
                        (e.type === ex.$pd.PLAYING &&
                            (0, eg.A)(e, ex.jUm.JOIN) &&
                            g.push({
                                type: "INVITE_TO_GAME",
                                icon: ec.L,
                                display: N.intl.formatToPlainString(N.t["KHLo+F"], {
                                    channel: (0, ep.m1)(a, ef.default, eA.A, !0),
                                    game: null != e ? e.name : "",
                                }),
                                activity: e,
                            }),
                        e.type === ex.$pd.LISTENING &&
                            (0, eg.A)(e, ex.jUm.SYNC) &&
                            g.push({
                                type: "INVITE_TO_LISTEN",
                                icon: ed.J,
                                display: N.intl.formatToPlainString(N.t.I479px, {
                                    channel: (0, ep.m1)(a, ef.default, eA.A, !0),
                                    name: null != e ? e.name : "",
                                }),
                                activity: e,
                            }),
                        e.type === ex.$pd.WATCHING &&
                            (0, eg.A)(e, ex.jUm.SYNC) &&
                            g.push({
                                type: "INVITE_TO_WATCH",
                                icon: eu.EyeIcon,
                                display: N.intl.formatToPlainString(N.t["EvCP/g"], {
                                    channel: (0, ep.m1)(a, ef.default, eA.A, !0),
                                    name: null != e ? e.name : "",
                                }),
                                activity: e,
                            }));
                }),
                u && g.push({ type: "SCHEDULED_MESSAGE", icon: eh.U, display: N.intl.string(N.t["3+ii4F"]) }),
                a.isThread() &&
                    h &&
                    g.push({ type: "SUMMARIZE_THREAD", icon: em.D, display: N.intl.string(N.t.EXfguE) }),
                g
            );
        })({
            canAttachFiles: eC,
            canStartThreads: eS || ev,
            useSlate: e_,
            hasClips: et,
            canUseApplicationCommands: !T,
            channel: l,
            activities: J,
            newClipsCount: Z?.length ?? 0,
            canPostPolls: eb,
            appContext: V,
            canSendScheduledMessages: eN,
            canSummarizeThreads: eT,
            isAppsButtonEnabled: !H || K,
        }),
        { isCoachmarkVisible: eR, dismissCoachmark: eD } = (function (e) {
            let { isEligible: t } = e,
                [n, l] = (0, j.kn)(t ? [y] : []);
            return { isCoachmarkVisible: n === y, dismissCoachmark: l };
        })({ isEligible: eN });
    if (0 === eM.length) return null;
    let eL = (0, i.jsx)(d.PlusLargeIcon, { size: "refresh_sm", color: "currentColor", colorClass: ey.dW }),
        ek = (0, i.jsx)(u.Y, {
            targetElementRef: W,
            shouldShow: null != Q,
            animation: u.Y.Animation.NONE,
            align: "left",
            position: "top",
            positionKey: Q ?? "null",
            onRequestOpen: () => {
                (ee("attachMenu"), eR && eD(b.i.TAKE_ACTION));
            },
            onRequestClose: () => {
                (0, c.hasAnyModalOpen)() || ee(null);
            },
            renderPopout: (e) => {
                if ("attachMenu" === Q)
                    return (0, i.jsx)(eI, {
                        ...e,
                        onClose: () => ee(null),
                        options: eM,
                        channel: l,
                        onFileUpload: () => z.current?.activateUploadDialogue(),
                        draftType: a,
                        editorTextContent: I,
                        setValue: _,
                        openClips: eE,
                        chatInputType: B,
                    });
                throw Error("Invalid popout type provided");
            },
            children: (e) =>
                (0, i.jsx)(F.A, {
                    ref: W,
                    className: r()(ey.g$, t),
                    childClassName: ey.wh,
                    isActive: !1,
                    "aria-label": N.intl.string(N.t.d56gCa),
                    onDoubleClick: eC ? () => z.current?.activateUploadDialogue() : void 0,
                    "aria-haspopup": "menu",
                    ...e,
                    children: eL,
                }),
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: ey.EJ,
                children: (0, i.jsx)(h.A, {
                    ref: z,
                    onChange: function (e) {
                        var t, n;
                        ((t = e.currentTarget.files),
                            null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code
                                ? (0, w.V)(l, [])
                                : (0, w.R)(t, l, a, { requireConfirm: !0, origin: "file_picker" }),
                            G._.dispatchToLastSubscribed(ex.jej.TEXTAREA_FOCUS),
                            (e.currentTarget.value = ""));
                    },
                    multiple: l.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, i.jsx)("div", { className: ey.Jd, children: ek }),
            eR && (0, i.jsx)(M, { targetElementRef: W, onDismiss: eD }),
        ],
    });
});
