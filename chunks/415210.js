n.d(t, { A: () => eD });
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
    g = n(147087),
    p = n(734066),
    A = n(138082),
    f = n(274372),
    C = n(572164),
    x = n(534514),
    E = n(834730),
    S = n(825484),
    _ = n(821609),
    j = n(315240),
    I = n(403362),
    y = n(372684),
    v = n(226421),
    b = n(732774);
function N() {
    let e = (0, o.yK)([f.Ay], () => {
        let e = f.Ay.getLastClipsSession()?.newClipIds;
        return null == e
            ? []
            : f.Ay.getClipIds()
                  .slice(0, 4)
                  .filter((t) => e.includes(t))
                  .map((e) => f.Ay.getClipById(e))
                  .filter(I.Vq);
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
                    ? e.type === y.nQ.VOICE_CLIP
                        ? (0, i.jsx)(v.A, { className: b.xn }, e.id)
                        : (0, i.jsx)("img", { alt: "", className: b.xn, src: e.thumbnail }, e.id)
                    : (0, i.jsx)("div", {}, `placeholder-${t}`),
            )
            .reverse(),
    });
}
var T = n(375708),
    M = n(280508);
function R(e) {
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
              className: M.WG,
              children: [
                  (0, i.jsx)("div", { className: M.Yt, children: (0, i.jsx)(N, {}) }),
                  (0, i.jsx)(x.D, {
                      className: M.wx,
                      color: "text-strong",
                      variant: "heading-md/extrabold",
                      children: T.intl.format(T.t["+qxkzC"], { count: n.newClipIds.length }),
                  }),
                  (0, i.jsx)(E.E, {
                      color: "text-default",
                      className: M.__invalid_content,
                      variant: "text-sm/medium",
                      children: T.intl.format(T.t["7XX0/X"], { applicationName: n.applicationName }),
                  }),
                  (0, i.jsx)("div", {
                      className: M.NC,
                      children: (0, i.jsxs)(S.e, {
                          children: [
                              (0, i.jsx)(_.$, {
                                  variant: "secondary",
                                  text: T.intl.string(T.t["7r5Z19"]),
                                  onClick: function () {
                                      (0, j.Mt)(!1), l();
                                  },
                              }),
                              (0, i.jsx)(_.$, { variant: "primary", text: T.intl.string(T.t.md4qKz), onClick: t }),
                          ],
                      }),
                  }),
              ],
          });
}
var D = n(111994),
    L = n(352527),
    O = n(267102),
    k = n(969632),
    P = n(910425),
    G = n(406704),
    U = n(885386),
    w = n(761640),
    F = n(629016),
    H = n(186111),
    B = n(576705),
    V = n(461213),
    K = n(625494),
    z = n(723702),
    W = n(518960),
    q = n(767089),
    $ = n(554146),
    J = n(477782),
    Z = n(177953),
    Y = n(950305),
    X = n(980707),
    Q = n(308368),
    ee = n(688810),
    et = n(826673),
    en = n(970244),
    el = n(867455),
    ei = n(780057),
    es = n(747926),
    ea = n(174459),
    er = n(453771),
    eo = n(408018);
n(321073);
var ec = n(661531),
    ed = n(81369),
    eu = n(176781),
    eh = n(523056),
    em = n(642846),
    eg = n(323384),
    ep = n(111219),
    eA = n(835723),
    ef = n(39623),
    eC = n(406810),
    ex = n(152367),
    eE = n(55730),
    eS = n(47167),
    e_ = n(994500),
    ej = n(287809),
    eI = n(652215),
    ey =
        (((l = {}).UPLOAD_A_FILE = "UPLOAD_A_FILE"),
        (l.UPLOAD_TEXT_AS_FILE = "UPLOAD_TEXT_AS_FILE"),
        (l.INVITE_TO_PLAY_GAME = "INVITE_TO_GAME"),
        (l.INVITE_TO_LISTEN = "INVITE_TO_LISTEN"),
        (l.INVITE_TO_WATCH = "INVITE_TO_WATCH"),
        (l.CREATE_THREAD = "CREATE_THREAD"),
        (l.SLASH_COMMAND = "SLASH_COMMAND"),
        (l.CLIPS = "CLIPS"),
        (l.POLL = "POLL"),
        (l.ACTIVITY = "ACTIVITY"),
        (l.SCHEDULED_MESSAGE = "SCHEDULED_MESSAGE"),
        (l.SUMMARIZE_THREAD = "SUMMARIZE_THREAD"),
        l),
    ev = n(49999),
    eb = n(412136);
let eN = /(.*)```(\w+)\n(.*)```(.*)/s;
function eT(e) {
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
        } = e,
        { analyticsLocations: p } = (0, ee.Ay)(),
        A = (0, en.s)({ channel: t }),
        f = (0, o.bG)([ei.A], () => ei.A.isInProgress());
    function C() {
        (0, es.Tv)(t, void 0, "Plus Button");
    }
    function x() {
        ea.default.track(eI.HAw.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), m("/", (0, eo.x7)("/"));
    }
    function E() {
        g();
    }
    function S() {
        (0, et.Dr)($.M.POLLS_CHAT_INPUT_COACHMARK, { dismissAction: ev.i.TAKE_ACTION }),
            (0, c.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("83644"), n.e("42322")]).then(n.bind(n, 143657));
                    return (n) => (0, i.jsx)(e, { ...n, channel: t });
                },
                { modalKey: eb.sm },
            );
    }
    function _() {
        let e = h,
            n = "txt",
            l = "",
            i = h.match(eN);
        null != i && ((l = i[1]), (n = i[2]), (e = i[3]), (l += i[4])),
            (0, W.R)([(0, er.VE)(new Blob([e], { type: "text/plain" }), `message.${n}`, "text/plain")], t, u),
            K._.dispatchToLastSubscribed(eI.jej.CLEAR_TEXT),
            "" !== l && K._.dispatchToLastSubscribed(eI.jej.INSERT_TEXT, { plainText: l });
    }
    return (
        s.useEffect(() => {
            ea.default.track(eI.HAw.OPEN_POPOUT, { type: "Send Attachment", channel_id: t.id, guild_id: t.guild_id });
        }, [t.guild_id, t.id]),
        (0, i.jsx)(X.W, {
            "data-menu-migrated": !0,
            onSelect: d,
            navId: "channel-attach",
            onClose: r,
            "aria-label": T.intl.string(T.t.Xm41aV),
            children: l.map(function (e) {
                switch (e.type) {
                    case ey.UPLOAD_A_FILE:
                        return (0, i.jsx)(
                            J.Dr,
                            {
                                id: "upload-file",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: a,
                            },
                            "upload-file",
                        );
                    case ey.UPLOAD_TEXT_AS_FILE:
                        if ("" === h) return null;
                        return (0, i.jsx)(
                            J.Dr,
                            {
                                id: "upload-text-as-file",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: _,
                            },
                            "upload-text-as-file",
                        );
                    case ey.CLIPS:
                        return (0, i.jsx)(
                            J.Dr,
                            {
                                id: "clips",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                badge: null != e.badgeVal && e.badgeVal > 0 ? { text: e.badgeVal.toString() } : void 0,
                                action: E,
                            },
                            "clips",
                        );
                    case ey.POLL:
                        return (0, i.jsx)(
                            J.Dr,
                            {
                                id: "poll",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: S,
                            },
                            "poll",
                        );
                    case ey.INVITE_TO_PLAY_GAME:
                        return (0, i.jsx)(
                            J.Dr,
                            {
                                id: "play",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void Q.A.sendActivityInvite({
                                            channelId: t.id,
                                            type: eI.xL.JOIN,
                                            activity: n,
                                            location: p[p.length - 1],
                                        })
                                    );
                                },
                            },
                            "play",
                        );
                    case ey.INVITE_TO_LISTEN:
                        return (0, i.jsx)(
                            J.Dr,
                            {
                                id: "listen",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void Q.A.sendActivityInvite({
                                            channelId: t.id,
                                            type: eI.xL.LISTEN,
                                            activity: n,
                                            location: p[p.length - 1],
                                        })
                                    );
                                },
                            },
                            "listen",
                        );
                    case ey.INVITE_TO_WATCH:
                        return (0, i.jsx)(
                            J.Dr,
                            {
                                id: "watch",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void Q.A.sendActivityInvite({
                                            channelId: t.id,
                                            type: eI.xL.WATCH,
                                            activity: n,
                                            location: p[p.length - 1],
                                        })
                                    );
                                },
                            },
                            "watch",
                        );
                    case ey.CREATE_THREAD:
                        return (0, i.jsx)(
                            J.Dr,
                            {
                                id: "THREAD",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: C,
                            },
                            "THREAD",
                        );
                    case ey.SLASH_COMMAND:
                        return (0, i.jsx)(
                            J.Dr,
                            {
                                id: "SLASH_COMMAND",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: x,
                            },
                            "SLASH_COMMAND",
                        );
                    case ey.SCHEDULED_MESSAGE:
                        return (0, i.jsx)(
                            J.Dr,
                            {
                                id: "scheduled_message",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => (0, en.e0)({ channel: t }),
                                children: A,
                            },
                            "scheduled_message",
                        );
                    case ey.SUMMARIZE_THREAD:
                        return (0, i.jsx)(
                            J.Dr,
                            {
                                id: "summarize_thread",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => el.A.summarizeThread(t),
                                loading: f,
                                disabled: f,
                                children: f
                                    ? null
                                    : (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(
                                                  J.Dr,
                                                  {
                                                      id: "summarize_thread_for_everyone",
                                                      label: T.intl.string(T.t.eCzSdd),
                                                      iconLeft: Z.n,
                                                      leadingAccessory: { type: "icon", icon: Z.n },
                                                      action: () => el.A.summarizeThread(t, !1),
                                                  },
                                                  "summarize_thread_for_everyone",
                                              ),
                                              (0, i.jsx)(
                                                  J.Dr,
                                                  {
                                                      id: "summarize_thread_for_me",
                                                      label: T.intl.string(T.t["HOe+Hq"]),
                                                      iconLeft: Y.n,
                                                      leadingAccessory: { type: "icon", icon: Y.n },
                                                      action: () => el.A.summarizeThread(t),
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
var eM = n(696016),
    eR = n(644268);
let eD = s.memo(function (e) {
    let { className: t, channel: l, draftType: a, editorTextContent: x, setValue: E, canOnlyUseTextCommands: S } = e,
        _ = (0, O.Us)(),
        j = s.useRef(null),
        I = s.useRef(null),
        y = (0, o.bG)([V.A], () => V.A.getActivities()),
        v = (0, C.Et)(),
        b = (0, o.bG)([f.Ay], () => f.Ay.getLastClipsSession()),
        N = (0, o.yK)([f.Ay], () => f.Ay.getNewClipIds()),
        M = (0, o.bG)([w.Ay], () => null == w.Ay.getCurrentSidebarChannelId(l.id)),
        $ = (0, o.yK)(
            [F.A],
            () => (l.type === eI.rbe.DM ? y.filter((e) => !F.A.getParty(e.party?.id)?.has(l.getRecipientId())) : y),
            [y, l],
        ),
        { enableQuickBar: J } = A.h.useConfig({ location: "ChannelAttachButton" }),
        Z = !J && _ !== eI.BRT.OVERLAY && _ !== eI.BRT.POPOUT,
        { onShareClick: Y } = (0, L.A)(l.id),
        X = (0, o.bG)([f.Ay], () => f.Ay.getSettings().remindersEnabled),
        Q = (0, c.useModalsStore)((e) => (0, c.hasModalOpenSelector)(e, eM.nm)),
        ee = (0, o.bG)([H.A], () => H.A.hasLayers()),
        et = (0, o.bG)([f.Ay], () => f.Ay.hasClips()),
        [en, el] = s.useState(null),
        ei = (0, p.sw)() && (v || et),
        es = l.isPrivate(),
        ea = (0, o.bG)([B.A], () => es || (B.A.can(eI.xBc.ATTACH_FILES, l) && B.A.can(eI.xBc.SEND_MESSAGES, l))),
        er = (0, m.A)(b);
    function eo() {
        (0, c.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("50884"),
                    n.e("98227"),
                    n.e("30204"),
                    n.e("83952"),
                    n.e("1922"),
                    n.e("83518"),
                    n.e("1962"),
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
                        initialMainLink: D.oH.ALL_CLIPS,
                        onClipClick: (e) => Y({ clips: [e] }),
                    });
            },
            { modalKey: eM.nm },
        ),
            el(null);
    }
    er?.newClipIds.length !== b?.newClipIds.length &&
        (b?.newClipIds.length ?? 0) > 0 &&
        null == en &&
        X &&
        M &&
        !Q &&
        Z &&
        !ee &&
        el("recentClips"),
        s.useEffect(() => {
            let e = (e) => {
                let { channelId: t } = e;
                t === l.id && j.current?.activateUploadDialogue();
            };
            return (
                K._.subscribe(eI.jej.UPLOAD_FILE, e),
                () => {
                    K._.unsubscribe(eI.jej.UPLOAD_FILE, e);
                }
            );
        });
    let ey = (0, G.n)(l),
        ev = (0, G.Tb)(l),
        eb = !U.D_.useSetting() && !(0, z.isAndroidWeb)() && null != window.ResizeObserver,
        eN = (0, k.I7)(l ?? void 0),
        eD = (0, P.Sc)(),
        eL = (0, g.b)(),
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
                } = e,
                m = [];
            return (
                t &&
                    (m.push({ type: "UPLOAD_A_FILE", icon: ed.H, display: T.intl.string(T.t["d3+iYs"]) }),
                    m.push({ type: "UPLOAD_TEXT_AS_FILE", icon: ed.H, display: T.intl.string(T.t["G9s+EM"]) })),
                s &&
                    t &&
                    d !== eI.BRT.POPOUT &&
                    d !== eI.BRT.OVERLAY &&
                    m.push({
                        type: "CLIPS",
                        icon: eu.x,
                        display: T.intl.string(T.t.o034cv),
                        badgeVal: o,
                        badgeColor: ec.A.colors.BACKGROUND_BRAND.css,
                    }),
                n && m.push({ type: "CREATE_THREAD", icon: eh.G, display: T.intl.string(T.t.rBIGBL) }),
                c && m.push({ type: "POLL", icon: em.Y, display: T.intl.string(T.t.Flr51u) }),
                l && i && m.push({ type: "SLASH_COMMAND", icon: eg.k, display: T.intl.string(T.t.Bbvp6G) }),
                r.forEach((e) => {
                    !(0, eE.A)(e, eI.jUm.EMBEDDED) &&
                        (e.type === eI.$pd.PLAYING &&
                            (0, eE.A)(e, eI.jUm.JOIN) &&
                            m.push({
                                type: "INVITE_TO_GAME",
                                icon: ep.L,
                                display: T.intl.formatToPlainString(T.t["KHLo+F"], {
                                    channel: (0, eS.m1)(a, ej.default, e_.A, !0),
                                    game: null != e ? e.name : "",
                                }),
                                activity: e,
                            }),
                        e.type === eI.$pd.LISTENING &&
                            (0, eE.A)(e, eI.jUm.SYNC) &&
                            m.push({
                                type: "INVITE_TO_LISTEN",
                                icon: eA.J,
                                display: T.intl.formatToPlainString(T.t.I479px, {
                                    channel: (0, eS.m1)(a, ej.default, e_.A, !0),
                                    name: null != e ? e.name : "",
                                }),
                                activity: e,
                            }),
                        e.type === eI.$pd.WATCHING &&
                            (0, eE.A)(e, eI.jUm.SYNC) &&
                            m.push({
                                type: "INVITE_TO_WATCH",
                                icon: ef.b,
                                display: T.intl.formatToPlainString(T.t["EvCP/g"], {
                                    channel: (0, eS.m1)(a, ej.default, e_.A, !0),
                                    name: null != e ? e.name : "",
                                }),
                                activity: e,
                            }));
                }),
                u && m.push({ type: "SCHEDULED_MESSAGE", icon: eC.O, display: T.intl.string(T.t["3+ii4F"]) }),
                a.isThread() &&
                    h &&
                    m.push({ type: "SUMMARIZE_THREAD", icon: ex.D, display: T.intl.string(T.t.EXfguE) }),
                m
            );
        })({
            canAttachFiles: ea,
            canStartThreads: ey || ev,
            useSlate: eb,
            hasClips: ei,
            canUseApplicationCommands: !S,
            channel: l,
            activities: $,
            newClipsCount: N?.length ?? 0,
            canPostPolls: eN,
            appContext: _,
            canSendScheduledMessages: eD,
            canSummarizeThreads: eL,
        });
    if (0 === eO.length) return null;
    let ek = (0, i.jsx)(d.p, { size: "refresh_sm", color: "currentColor", colorClass: eR.dW }),
        eP = (0, i.jsx)(u.Y, {
            targetElementRef: I,
            shouldShow: null != en,
            animation: u.Y.Animation.NONE,
            align: "recentClips" === en ? "center" : "left",
            position: "top",
            positionKey: en ?? "null",
            onRequestOpen: () => {
                el("attachMenu");
            },
            onRequestClose: () => {
                (0, c.hasAnyModalOpen)() || el(null);
            },
            renderPopout: (e) => {
                switch (en) {
                    case "recentClips":
                        return (0, i.jsx)(R, { ...e, onOpenClips: eo, lastClipsSession: b });
                    case "attachMenu":
                        return (0, i.jsx)(eT, {
                            ...e,
                            onClose: () => el(null),
                            options: eO,
                            channel: l,
                            onFileUpload: () => j.current?.activateUploadDialogue(),
                            draftType: a,
                            editorTextContent: x,
                            setValue: E,
                            openClips: eo,
                        });
                    default:
                        throw Error("Invalid popout type provided");
                }
            },
            children: (e) =>
                (0, i.jsx)(q.A, {
                    ref: I,
                    className: r()(eR.g$, t),
                    childClassName: eR.wh,
                    isActive: !1,
                    "aria-label": T.intl.string(T.t.d56gCa),
                    onDoubleClick: ea ? () => j.current?.activateUploadDialogue() : void 0,
                    "aria-haspopup": "menu",
                    ...e,
                    children: ek,
                }),
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: eR.EJ,
                children: (0, i.jsx)(h.A, {
                    ref: j,
                    onChange: (e) => {
                        var t, n;
                        (t = e.currentTarget.files),
                            null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code
                                ? (0, W.V)(l, [])
                                : (0, W.R)(t, l, a, { requireConfirm: !0, origin: "file_picker" }),
                            K._.dispatchToLastSubscribed(eI.jej.TEXTAREA_FOCUS),
                            (e.currentTarget.value = "");
                    },
                    multiple: l.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, i.jsx)("div", { className: eR.Jd, children: eP }),
        ],
    });
});
