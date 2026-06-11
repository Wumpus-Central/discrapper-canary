n.d(t, { A: () => ek });
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
    m = n(475743),
    g = n(775602),
    p = n(147087),
    A = n(734066),
    f = n(138082),
    C = n(274372),
    x = n(572164),
    E = n(534514),
    S = n(834730),
    _ = n(825484),
    I = n(821609),
    j = n(315240),
    y = n(403362),
    N = n(372684),
    T = n(226421),
    b = n(732774);
function v() {
    let e = (0, o.yK)([C.Ay], () => {
        let e = C.Ay.getLastClipsSession()?.newClipIds;
        return null == e
            ? []
            : C.Ay.getClipIds()
                  .slice(0, 4)
                  .filter((t) => e.includes(t))
                  .map((e) => C.Ay.getClipById(e))
                  .filter(y.Vq);
    });
    return (0, i.jsx)("div", {
        className: r()(b.vH, {
            [b.gb]: 1 === e.length,
            [b.$d]: 2 === e.length,
            [b.gS]: 3 === e.length,
            [b.hA]: e.length >= 4,
        }),
        children: Array.from({ ...e, length: 4 })
            .map((e, t) =>
                null != e
                    ? e.type === N.nQ.VOICE_CLIP
                        ? (0, i.jsx)(T.A, { className: b.xn }, e.id)
                        : (0, i.jsx)("img", { alt: "", className: b.xn, src: e.thumbnail }, e.id)
                    : (0, i.jsx)("div", {}, `placeholder-${t}`),
            )
            .reverse(),
    });
}
var M = n(375708),
    R = n(280508);
function D(e) {
    let { onOpenClips: t, lastClipsSession: n, closePopout: l } = e;
    return (s.useEffect(
        () => () => {
            (0, j.TE)();
        },
        [],
    ),
    null == n)
        ? null
        : (0, i.jsxs)("div", {
              className: R.WG,
              children: [
                  (0, i.jsx)("div", { className: R.Yt, children: (0, i.jsx)(v, {}) }),
                  (0, i.jsx)(E.D, {
                      className: R.wx,
                      color: "text-strong",
                      variant: "heading-md/extrabold",
                      children: M.intl.format(M.t["+qxkzC"], { count: n.newClipIds.length }),
                  }),
                  (0, i.jsx)(S.E, {
                      color: "text-default",
                      className: R.__invalid_content,
                      variant: "text-sm/medium",
                      children: M.intl.format(M.t["7XX0/X"], { applicationName: n.applicationName }),
                  }),
                  (0, i.jsx)("div", {
                      className: R.NC,
                      children: (0, i.jsxs)(_.e, {
                          children: [
                              (0, i.jsx)(I.$, {
                                  variant: "secondary",
                                  text: M.intl.string(M.t["7r5Z19"]),
                                  onClick: function () {
                                      (0, j.Mt)(!1), l();
                                  },
                              }),
                              (0, i.jsx)(I.$, { variant: "primary", text: M.intl.string(M.t.md4qKz), onClick: t }),
                          ],
                      }),
                  }),
              ],
          });
}
var L = n(111994),
    P = n(352527),
    O = n(267102),
    k = n(969632),
    G = n(910425),
    U = n(406704),
    w = n(885386),
    F = n(951260),
    H = n(761640),
    B = n(629016),
    V = n(186111),
    K = n(576705),
    z = n(461213),
    W = n(625494),
    q = n(723702),
    $ = n(518960),
    J = n(767089),
    Z = n(554146),
    Y = n(477782),
    X = n(177953),
    Q = n(950305),
    ee = n(980707),
    et = n(308368),
    en = n(688810),
    el = n(211401),
    ei = n(500049),
    es = n(826673),
    ea = n(970244),
    er = n(867455),
    eo = n(780057),
    ec = n(747926),
    ed = n(174459),
    eu = n(453771),
    eh = n(408018);
n(321073);
var em = n(661531),
    eg = n(81369),
    ep = n(176781),
    eA = n(523056),
    ef = n(642846),
    eC = n(323384),
    ex = n(111219),
    eE = n(835723),
    eS = n(39623),
    e_ = n(406810),
    eI = n(152367),
    ej = n(55730),
    ey = n(47167),
    eN = n(994500),
    eT = n(287809),
    eb = n(652215),
    ev =
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
    eM = n(49999),
    eR = n(412136);
let eD = /(.*)```(\w+)\n(.*)```(.*)/s;
function eL(e) {
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
        { analyticsLocations: A } = (0, en.Ay)(),
        f = (0, ea.s)({ channel: t }),
        C = (0, o.bG)([eo.A], () => eo.A.isInProgress());
    function x() {
        (0, ec.Tv)(t, void 0, "Plus Button");
    }
    function E() {
        ed.default.track(eb.HAw.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), m("/", (0, eh.x7)("/"));
    }
    function S() {
        ed.default.track(eb.HAw.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), el.R(ei.s4.TEXT, p, void 0, t.id);
    }
    function _() {
        g();
    }
    function I() {
        (0, es.Dr)(Z.M.POLLS_CHAT_INPUT_COACHMARK, { dismissAction: eM.i.TAKE_ACTION }),
            (0, c.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("83644"), n.e("42322")]).then(n.bind(n, 143657));
                    return (n) => (0, i.jsx)(e, { ...n, channel: t });
                },
                { modalKey: eR.sm },
            );
    }
    function j() {
        let e = h,
            n = "txt",
            l = "",
            i = h.match(eD);
        null != i && ((l = i[1]), (n = i[2]), (e = i[3]), (l += i[4])),
            (0, $.R)([(0, eu.VE)(new Blob([e], { type: "text/plain" }), `message.${n}`, "text/plain")], t, u),
            W._.dispatchToLastSubscribed(eb.jej.CLEAR_TEXT),
            "" !== l && W._.dispatchToLastSubscribed(eb.jej.INSERT_TEXT, { plainText: l });
    }
    return (
        s.useEffect(() => {
            ed.default.track(eb.HAw.OPEN_POPOUT, { type: "Send Attachment", channel_id: t.id, guild_id: t.guild_id });
        }, [t.guild_id, t.id]),
        (0, i.jsx)(ee.W, {
            "data-menu-migrated": !0,
            onSelect: d,
            navId: "channel-attach",
            onClose: r,
            "aria-label": M.intl.string(M.t.Xm41aV),
            children: l.map(function (e) {
                switch (e.type) {
                    case ev.UPLOAD_A_FILE:
                        return (0, i.jsx)(
                            Y.Dr,
                            {
                                id: "upload-file",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: a,
                            },
                            "upload-file",
                        );
                    case ev.UPLOAD_TEXT_AS_FILE:
                        if ("" === h) return null;
                        return (0, i.jsx)(
                            Y.Dr,
                            {
                                id: "upload-text-as-file",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: j,
                            },
                            "upload-text-as-file",
                        );
                    case ev.CLIPS:
                        return (0, i.jsx)(
                            Y.Dr,
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
                    case ev.POLL:
                        return (0, i.jsx)(
                            Y.Dr,
                            {
                                id: "poll",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: I,
                            },
                            "poll",
                        );
                    case ev.INVITE_TO_PLAY_GAME:
                        return (0, i.jsx)(
                            Y.Dr,
                            {
                                id: "play",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void et.A.sendActivityInvite({
                                            channelId: t.id,
                                            type: eb.xL.JOIN,
                                            activity: n,
                                            location: A[A.length - 1],
                                        })
                                    );
                                },
                            },
                            "play",
                        );
                    case ev.INVITE_TO_LISTEN:
                        return (0, i.jsx)(
                            Y.Dr,
                            {
                                id: "listen",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void et.A.sendActivityInvite({
                                            channelId: t.id,
                                            type: eb.xL.LISTEN,
                                            activity: n,
                                            location: A[A.length - 1],
                                        })
                                    );
                                },
                            },
                            "listen",
                        );
                    case ev.INVITE_TO_WATCH:
                        return (0, i.jsx)(
                            Y.Dr,
                            {
                                id: "watch",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void et.A.sendActivityInvite({
                                            channelId: t.id,
                                            type: eb.xL.WATCH,
                                            activity: n,
                                            location: A[A.length - 1],
                                        })
                                    );
                                },
                            },
                            "watch",
                        );
                    case ev.CREATE_THREAD:
                        return (0, i.jsx)(
                            Y.Dr,
                            {
                                id: "THREAD",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: x,
                            },
                            "THREAD",
                        );
                    case ev.SLASH_COMMAND:
                        return (0, i.jsx)(
                            Y.Dr,
                            {
                                id: "SLASH_COMMAND",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: E,
                            },
                            "SLASH_COMMAND",
                        );
                    case ev.APP_LAUNCHER:
                        return (0, i.jsx)(
                            Y.Dr,
                            {
                                id: "APP_LAUNCHER",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: S,
                            },
                            "APP_LAUNCHER",
                        );
                    case ev.SCHEDULED_MESSAGE:
                        return (0, i.jsx)(
                            Y.Dr,
                            {
                                id: "scheduled_message",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => (0, ea.e0)({ channel: t }),
                                children: f,
                            },
                            "scheduled_message",
                        );
                    case ev.SUMMARIZE_THREAD:
                        return (0, i.jsx)(
                            Y.Dr,
                            {
                                id: "summarize_thread",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => er.A.summarizeThread(t),
                                loading: C,
                                disabled: C,
                                children: C
                                    ? null
                                    : (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(
                                                  Y.Dr,
                                                  {
                                                      id: "summarize_thread_for_everyone",
                                                      label: M.intl.string(M.t.eCzSdd),
                                                      iconLeft: X.n,
                                                      leadingAccessory: { type: "icon", icon: X.n },
                                                      action: () => er.A.summarizeThread(t, !1),
                                                  },
                                                  "summarize_thread_for_everyone",
                                              ),
                                              (0, i.jsx)(
                                                  Y.Dr,
                                                  {
                                                      id: "summarize_thread_for_me",
                                                      label: M.intl.string(M.t["HOe+Hq"]),
                                                      iconLeft: Q.n,
                                                      leadingAccessory: { type: "icon", icon: Q.n },
                                                      action: () => er.A.summarizeThread(t),
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
var eP = n(696016),
    eO = n(644268);
let ek = s.memo(function (e) {
    let {
            className: t,
            channel: l,
            draftType: a,
            editorTextContent: E,
            setValue: S,
            canOnlyUseTextCommands: _,
            chatInputType: I,
        } = e,
        j = (0, F.n)("ChannelAttachButton"),
        y = (0, o.bG)([g.Ay], () => g.Ay.isAppsButtonEnabled),
        N = (0, O.Us)(),
        T = s.useRef(null),
        b = s.useRef(null),
        v = (0, o.bG)([z.A], () => z.A.getActivities()),
        R = (0, x.Et)(),
        Z = (0, o.bG)([C.Ay], () => C.Ay.getLastClipsSession()),
        Y = (0, o.yK)([C.Ay], () => C.Ay.getNewClipIds()),
        X = (0, o.bG)([H.Ay], () => null == H.Ay.getCurrentSidebarChannelId(l.id)),
        Q = (0, o.yK)(
            [B.A],
            () => (l.type === eb.rbe.DM ? v.filter((e) => !B.A.getParty(e.party?.id)?.has(l.getRecipientId())) : v),
            [v, l],
        ),
        { enableQuickBar: ee } = f.h.useConfig({ location: "ChannelAttachButton" }),
        et = !ee && N !== eb.BRT.OVERLAY && N !== eb.BRT.POPOUT,
        { onShareClick: en } = (0, P.A)(l.id),
        el = (0, o.bG)([C.Ay], () => C.Ay.getSettings().remindersEnabled),
        ei = (0, c.useModalsStore)((e) => (0, c.hasModalOpenSelector)(e, eP.nm)),
        es = (0, o.bG)([V.A], () => V.A.hasLayers()),
        ea = (0, o.bG)([C.Ay], () => C.Ay.hasClips()),
        [er, eo] = s.useState(null),
        ec = (0, A.sw)() && (R || ea),
        ed = l.isPrivate(),
        eu = (0, o.bG)([K.A], () => ed || (K.A.can(eb.xBc.ATTACH_FILES, l) && K.A.can(eb.xBc.SEND_MESSAGES, l))),
        eh = (0, m.A)(Z);
    function ev() {
        (0, c.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("96084"),
                    n.e("91688"),
                    n.e("31573"),
                    n.e("2626"),
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
                    n.e("84020"),
                    n.e("75261"),
                ]).then(n.bind(n, 957503));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        channelId: l.id,
                        initialMainLink: L.oH.ALL_CLIPS,
                        onClipClick: (e) => en({ clips: [e] }),
                    });
            },
            { modalKey: eP.nm },
        ),
            eo(null);
    }
    eh?.newClipIds.length !== Z?.newClipIds.length &&
        (Z?.newClipIds.length ?? 0) > 0 &&
        null == er &&
        el &&
        X &&
        !ei &&
        et &&
        !es &&
        eo("recentClips"),
        s.useEffect(() => {
            let e = (e) => {
                let { channelId: t } = e;
                t === l.id && T.current?.activateUploadDialogue();
            };
            return (
                W._.subscribe(eb.jej.UPLOAD_FILE, e),
                () => {
                    W._.unsubscribe(eb.jej.UPLOAD_FILE, e);
                }
            );
        });
    let eM = (0, U.n)(l),
        eR = (0, U.Tb)(l),
        eD = !w.D_.useSetting() && !(0, q.isAndroidWeb)() && null != window.ResizeObserver,
        ek = (0, k.I7)(l ?? void 0),
        eG = (0, G.Sc)(),
        eU = (0, p.b)(),
        ew = (function (e) {
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
                    (g.push({ type: "UPLOAD_A_FILE", icon: eg.H, display: M.intl.string(M.t["d3+iYs"]) }),
                    g.push({ type: "UPLOAD_TEXT_AS_FILE", icon: eg.H, display: M.intl.string(M.t["G9s+EM"]) })),
                s &&
                    t &&
                    d !== eb.BRT.POPOUT &&
                    d !== eb.BRT.OVERLAY &&
                    g.push({
                        type: "CLIPS",
                        icon: ep.x,
                        display: M.intl.string(M.t.o034cv),
                        badgeVal: o,
                        badgeColor: em.A.colors.BACKGROUND_BRAND.css,
                    }),
                n && g.push({ type: "CREATE_THREAD", icon: eA.G, display: M.intl.string(M.t.rBIGBL) }),
                c && g.push({ type: "POLL", icon: ef.Y, display: M.intl.string(M.t.Flr51u) }),
                l &&
                    i &&
                    (m
                        ? g.push({ type: "SLASH_COMMAND", icon: eC.k, display: M.intl.string(M.t.Bbvp6G) })
                        : g.push({ type: "APP_LAUNCHER", icon: eC.k, display: M.intl.string(M.t.hSQgW9) })),
                r.forEach((e) => {
                    !(0, ej.A)(e, eb.jUm.EMBEDDED) &&
                        (e.type === eb.$pd.PLAYING &&
                            (0, ej.A)(e, eb.jUm.JOIN) &&
                            g.push({
                                type: "INVITE_TO_GAME",
                                icon: ex.L,
                                display: M.intl.formatToPlainString(M.t["KHLo+F"], {
                                    channel: (0, ey.m1)(a, eT.default, eN.A, !0),
                                    game: null != e ? e.name : "",
                                }),
                                activity: e,
                            }),
                        e.type === eb.$pd.LISTENING &&
                            (0, ej.A)(e, eb.jUm.SYNC) &&
                            g.push({
                                type: "INVITE_TO_LISTEN",
                                icon: eE.J,
                                display: M.intl.formatToPlainString(M.t.I479px, {
                                    channel: (0, ey.m1)(a, eT.default, eN.A, !0),
                                    name: null != e ? e.name : "",
                                }),
                                activity: e,
                            }),
                        e.type === eb.$pd.WATCHING &&
                            (0, ej.A)(e, eb.jUm.SYNC) &&
                            g.push({
                                type: "INVITE_TO_WATCH",
                                icon: eS.b,
                                display: M.intl.formatToPlainString(M.t["EvCP/g"], {
                                    channel: (0, ey.m1)(a, eT.default, eN.A, !0),
                                    name: null != e ? e.name : "",
                                }),
                                activity: e,
                            }));
                }),
                u && g.push({ type: "SCHEDULED_MESSAGE", icon: e_.O, display: M.intl.string(M.t["3+ii4F"]) }),
                a.isThread() &&
                    h &&
                    g.push({ type: "SUMMARIZE_THREAD", icon: eI.D, display: M.intl.string(M.t.EXfguE) }),
                g
            );
        })({
            canAttachFiles: eu,
            canStartThreads: eM || eR,
            useSlate: eD,
            hasClips: ec,
            canUseApplicationCommands: !_,
            channel: l,
            activities: Q,
            newClipsCount: Y?.length ?? 0,
            canPostPolls: ek,
            appContext: N,
            canSendScheduledMessages: eG,
            canSummarizeThreads: eU,
            isAppsButtonEnabled: !j || y,
        });
    if (0 === ew.length) return null;
    let eF = (0, i.jsx)(d.p, { size: "refresh_sm", color: "currentColor", colorClass: eO.dW }),
        eH = (0, i.jsx)(u.Y, {
            targetElementRef: b,
            shouldShow: null != er,
            animation: u.Y.Animation.NONE,
            align: "recentClips" === er ? "center" : "left",
            position: "top",
            positionKey: er ?? "null",
            onRequestOpen: () => {
                eo("attachMenu");
            },
            onRequestClose: () => {
                (0, c.hasAnyModalOpen)() || eo(null);
            },
            renderPopout: (e) => {
                switch (er) {
                    case "recentClips":
                        return (0, i.jsx)(D, { ...e, onOpenClips: ev, lastClipsSession: Z });
                    case "attachMenu":
                        return (0, i.jsx)(eL, {
                            ...e,
                            onClose: () => eo(null),
                            options: ew,
                            channel: l,
                            onFileUpload: () => T.current?.activateUploadDialogue(),
                            draftType: a,
                            editorTextContent: E,
                            setValue: S,
                            openClips: ev,
                            chatInputType: I,
                        });
                    default:
                        throw Error("Invalid popout type provided");
                }
            },
            children: (e) =>
                (0, i.jsx)(J.A, {
                    ref: b,
                    className: r()(eO.g$, t),
                    childClassName: eO.wh,
                    isActive: !1,
                    "aria-label": M.intl.string(M.t.d56gCa),
                    onDoubleClick: eu ? () => T.current?.activateUploadDialogue() : void 0,
                    "aria-haspopup": "menu",
                    ...e,
                    children: eF,
                }),
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: eO.EJ,
                children: (0, i.jsx)(h.A, {
                    ref: T,
                    onChange: (e) => {
                        var t, n;
                        (t = e.currentTarget.files),
                            null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code
                                ? (0, $.V)(l, [])
                                : (0, $.R)(t, l, a, { requireConfirm: !0, origin: "file_picker" }),
                            W._.dispatchToLastSubscribed(eb.jej.TEXTAREA_FOCUS),
                            (e.currentTarget.value = "");
                    },
                    multiple: l.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, i.jsx)("div", { className: eO.Jd, children: eH }),
        ],
    });
});
