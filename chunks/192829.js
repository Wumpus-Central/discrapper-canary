n.d(t, { A: () => eR });
var i,
    l = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(17928),
    c = n(192308),
    d = n(663341),
    u = n(922016),
    h = n(780777),
    m = n(475743),
    p = n(147087),
    g = n(734066),
    A = n(274372),
    f = n(572164),
    _ = n(710315),
    E = n(534514),
    C = n(834730),
    x = n(825484),
    b = n(821609),
    S = n(399925),
    I = n(403362),
    y = n(372684),
    T = n(226421),
    v = n(732774);
function N() {
    let e = (0, o.yK)([A.A], () => {
        let e = A.A.getLastClipsSession()?.newClipIds;
        return null == e
            ? []
            : A.A.getClipIds()
                  .slice(0, 4)
                  .filter((t) => e.includes(t))
                  .map((e) => A.A.getClipById(e))
                  .filter(I.Vq);
    });
    return (0, l.jsx)("div", {
        className: r()(v.vH, {
            [v.gb]: 1 === e.length,
            [v.$d]: 2 === e.length,
            [v.gS]: 3 === e.length,
            [v.hA]: e.length >= 4,
        }),
        children: Array.from({ ...e, length: 4 })
            .map((e, t) =>
                null != e
                    ? e.type === y.nQ.VOICE_CLIP
                        ? (0, l.jsx)(T.A, { className: v.xn }, e.id)
                        : (0, l.jsx)("img", { alt: "", className: v.xn, src: e.thumbnail }, e.id)
                    : (0, l.jsx)("div", {}, `placeholder-${t}`),
            )
            .reverse(),
    });
}
var j = n(985018),
    M = n(280508);
function R(e) {
    let { onOpenClips: t, lastClipsSession: n, closePopout: i } = e;
    return (s.useEffect(
        () => () => {
            (0, S.jA)();
        },
        [],
    ),
    null == n)
        ? null
        : (0, l.jsxs)("div", {
              className: M.WG,
              children: [
                  (0, l.jsx)("div", { className: M.Yt, children: (0, l.jsx)(N, {}) }),
                  (0, l.jsx)(E.D, {
                      className: M.wx,
                      color: "text-strong",
                      variant: "heading-md/extrabold",
                      children: j.intl.format(j.t["+qxkzC"], { count: n.newClipIds.length }),
                  }),
                  (0, l.jsx)(C.E, {
                      color: "text-default",
                      className: M.__invalid_content,
                      variant: "text-sm/medium",
                      children: j.intl.format(j.t["7XX0/X"], { applicationName: n.applicationName }),
                  }),
                  (0, l.jsx)("div", {
                      className: M.NC,
                      children: (0, l.jsxs)(x.e, {
                          children: [
                              (0, l.jsx)(b.$, {
                                  variant: "secondary",
                                  text: j.intl.string(j.t["7r5Z19"]),
                                  onClick: function () {
                                      (0, S.Mt)(!1), i();
                                  },
                              }),
                              (0, l.jsx)(b.$, { variant: "primary", text: j.intl.string(j.t.md4qKz), onClick: t }),
                          ],
                      }),
                  }),
              ],
          });
}
var L = n(794905),
    D = n(267102),
    k = n(969632),
    P = n(910425),
    G = n(406704),
    O = n(253932),
    w = n(761640),
    U = n(629016),
    F = n(186111),
    B = n(576705),
    H = n(461213),
    K = n(625494),
    V = n(723702),
    z = n(518960),
    W = n(767089),
    q = n(554146),
    $ = n(477782),
    J = n(177953),
    Z = n(950305),
    Y = n(550079),
    X = n(308368),
    Q = n(688810),
    ee = n(826673),
    et = n(970244),
    en = n(867455),
    ei = n(780057),
    el = n(747926),
    es = n(954571),
    ea = n(453771),
    er = n(408018);
n(321073);
var eo = n(661531),
    ec = n(81369),
    ed = n(176781),
    eu = n(523056),
    eh = n(642846),
    em = n(323384),
    ep = n(111219),
    eg = n(835723),
    eA = n(39623),
    ef = n(406810),
    e_ = n(152367),
    eE = n(833349),
    eC = n(47167),
    ex = n(994500),
    eb = n(287809),
    eS = n(652215),
    eI =
        (((i = {}).UPLOAD_A_FILE = "UPLOAD_A_FILE"),
        (i.UPLOAD_TEXT_AS_FILE = "UPLOAD_TEXT_AS_FILE"),
        (i.INVITE_TO_PLAY_GAME = "INVITE_TO_GAME"),
        (i.INVITE_TO_LISTEN = "INVITE_TO_LISTEN"),
        (i.INVITE_TO_WATCH = "INVITE_TO_WATCH"),
        (i.CREATE_THREAD = "CREATE_THREAD"),
        (i.SLASH_COMMAND = "SLASH_COMMAND"),
        (i.CLIPS = "CLIPS"),
        (i.POLL = "POLL"),
        (i.ACTIVITY = "ACTIVITY"),
        (i.SCHEDULED_MESSAGE = "SCHEDULED_MESSAGE"),
        (i.SUMMARIZE_THREAD = "SUMMARIZE_THREAD"),
        i),
    ey = n(49999),
    eT = n(412136);
let ev = /(.*)```(\w+)\n(.*)```(.*)/s;
function eN(e) {
    let {
            channel: t,
            options: i,
            onFileUpload: a,
            onClose: r,
            onSelect: d,
            draftType: u,
            editorTextContent: h,
            setValue: m,
            openClips: p,
        } = e,
        { analyticsLocations: g } = (0, Q.Ay)(),
        A = (0, et.s)({ channel: t }),
        f = (0, o.bG)([ei.A], () => ei.A.isInProgress());
    function _() {
        (0, el.Tv)(t, void 0, "Plus Button");
    }
    function E() {
        es.default.track(eS.HAw.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), m("/", (0, er.x7)("/"));
    }
    function C() {
        p();
    }
    function x() {
        (0, ee.Dr)(q.M.POLLS_CHAT_INPUT_COACHMARK, { dismissAction: ey.i.TAKE_ACTION }),
            (0, c.openModalLazy)(
                async () => {
                    let { default: e } = await n.e("42322").then(n.bind(n, 143657));
                    return (n) => (0, l.jsx)(e, { ...n, channel: t });
                },
                { modalKey: eT.sm },
            );
    }
    function b() {
        let e = h,
            n = "txt",
            i = "",
            l = h.match(ev);
        null != l && ((i = l[1]), (n = l[2]), (e = l[3]), (i += l[4])),
            (0, z.R)([(0, ea.VE)(new Blob([e], { type: "text/plain" }), `message.${n}`, "text/plain")], t, u),
            K._.dispatchToLastSubscribed(eS.jej.CLEAR_TEXT),
            "" !== i && K._.dispatchToLastSubscribed(eS.jej.INSERT_TEXT, { plainText: i });
    }
    return (
        s.useEffect(() => {
            es.default.track(eS.HAw.OPEN_POPOUT, { type: "Send Attachment", channel_id: t.id, guild_id: t.guild_id });
        }, [t.guild_id, t.id]),
        (0, l.jsx)(Y.W, {
            "data-menu-migrated": !0,
            onSelect: d,
            navId: "channel-attach",
            onClose: r,
            "aria-label": j.intl.string(j.t.Xm41aV),
            children: i.map(function (e) {
                switch (e.type) {
                    case eI.UPLOAD_A_FILE:
                        return (0, l.jsx)(
                            $.Dr,
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
                        return (0, l.jsx)(
                            $.Dr,
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
                        return (0, l.jsx)(
                            $.Dr,
                            {
                                id: "clips",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                badge: null != e.badgeVal && e.badgeVal > 0 ? { text: e.badgeVal.toString() } : void 0,
                                action: C,
                            },
                            "clips",
                        );
                    case eI.POLL:
                        return (0, l.jsx)(
                            $.Dr,
                            {
                                id: "poll",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: x,
                            },
                            "poll",
                        );
                    case eI.INVITE_TO_PLAY_GAME:
                        return (0, l.jsx)(
                            $.Dr,
                            {
                                id: "play",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void X.A.sendActivityInvite({
                                            channelId: t.id,
                                            type: eS.xL.JOIN,
                                            activity: n,
                                            location: g[g.length - 1],
                                        })
                                    );
                                },
                            },
                            "play",
                        );
                    case eI.INVITE_TO_LISTEN:
                        return (0, l.jsx)(
                            $.Dr,
                            {
                                id: "listen",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void X.A.sendActivityInvite({
                                            channelId: t.id,
                                            type: eS.xL.LISTEN,
                                            activity: n,
                                            location: g[g.length - 1],
                                        })
                                    );
                                },
                            },
                            "listen",
                        );
                    case eI.INVITE_TO_WATCH:
                        return (0, l.jsx)(
                            $.Dr,
                            {
                                id: "watch",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void X.A.sendActivityInvite({
                                            channelId: t.id,
                                            type: eS.xL.WATCH,
                                            activity: n,
                                            location: g[g.length - 1],
                                        })
                                    );
                                },
                            },
                            "watch",
                        );
                    case eI.CREATE_THREAD:
                        return (0, l.jsx)(
                            $.Dr,
                            {
                                id: "THREAD",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: _,
                            },
                            "THREAD",
                        );
                    case eI.SLASH_COMMAND:
                        return (0, l.jsx)(
                            $.Dr,
                            {
                                id: "SLASH_COMMAND",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: E,
                            },
                            "SLASH_COMMAND",
                        );
                    case eI.SCHEDULED_MESSAGE:
                        return (0, l.jsx)(
                            $.Dr,
                            {
                                id: "scheduled_message",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => (0, et.e0)({ channel: t }),
                                children: A,
                            },
                            "scheduled_message",
                        );
                    case eI.SUMMARIZE_THREAD:
                        return (0, l.jsx)(
                            $.Dr,
                            {
                                id: "summarize_thread",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => en.A.summarizeThread(t),
                                loading: f,
                                disabled: f,
                                children: f
                                    ? null
                                    : (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(
                                                  $.Dr,
                                                  {
                                                      id: "summarize_thread_for_everyone",
                                                      label: j.intl.string(j.t.eCzSdd),
                                                      iconLeft: J.n,
                                                      leadingAccessory: { type: "icon", icon: J.n },
                                                      action: () => en.A.summarizeThread(t, !1),
                                                  },
                                                  "summarize_thread_for_everyone",
                                              ),
                                              (0, l.jsx)(
                                                  $.Dr,
                                                  {
                                                      id: "summarize_thread_for_me",
                                                      label: j.intl.string(j.t["HOe+Hq"]),
                                                      iconLeft: Z.n,
                                                      leadingAccessory: { type: "icon", icon: Z.n },
                                                      action: () => en.A.summarizeThread(t),
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
    eM = n(644268);
let eR = s.memo(function (e) {
    let { className: t, channel: i, draftType: a, editorTextContent: E, setValue: C, canOnlyUseTextCommands: x } = e,
        b = (0, D.Us)(),
        S = s.useRef(null),
        I = s.useRef(null),
        y = (0, o.bG)([H.A], () => H.A.getActivities()),
        T = (0, f.Et)(),
        v = (0, o.bG)([A.A], () => A.A.getLastClipsSession()),
        N = (0, o.yK)([A.A], () => A.A.getNewClipIds()),
        M = (0, o.bG)([w.Ay], () => null == w.Ay.getCurrentSidebarChannelId(i.id)),
        q = (0, o.yK)(
            [U.A],
            () => (i.type === eS.rbe.DM ? y.filter((e) => !U.A.getParty(e.party?.id)?.has(i.getRecipientId())) : y),
            [y, i],
        ),
        { showClipsHeaderEntrypoint: $ } = g.L_.useConfig({ location: "ChannelAttachButton" }),
        { topBarButton: J } = _.$.useConfig({ location: "ChannelAttachButton" }),
        { onShareClick: Z } = (0, L.A)(i.id),
        Y = (0, o.bG)([A.A], () => A.A.getSettings().remindersEnabled),
        X = (0, c.useModalsStore)((e) => (0, c.hasModalOpenSelector)(e, ej.nm)),
        Q = (0, o.bG)([F.A], () => F.A.hasLayers()),
        ee = (0, o.bG)([A.A], () => A.A.hasClips()),
        [et, en] = s.useState(null),
        ei = (0, g.sw)() && (T || ee),
        el = i.isPrivate(),
        es = (0, o.bG)([B.A], () => el || (B.A.can(eS.xBc.ATTACH_FILES, i) && B.A.can(eS.xBc.SEND_MESSAGES, i))),
        ea = (0, m.A)(v);
    function er() {
        (0, c.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("74068"), n.e("36189")]).then(n.bind(n, 867487));
                return (t) => (0, l.jsx)(e, { ...t, channelId: i.id, onClipClick: (e) => Z({ clips: [e] }) });
            },
            { modalKey: ej.nm },
        ),
            en(null);
    }
    ea?.newClipIds.length !== v?.newClipIds.length &&
        (v?.newClipIds.length ?? 0) > 0 &&
        null == et &&
        Y &&
        M &&
        !X &&
        !$ &&
        !J &&
        !Q &&
        en("recentClips"),
        s.useEffect(() => {
            let e = (e) => {
                let { channelId: t } = e;
                t === i.id && S.current?.activateUploadDialogue();
            };
            return (
                K._.subscribe(eS.jej.UPLOAD_FILE, e),
                () => {
                    K._.unsubscribe(eS.jej.UPLOAD_FILE, e);
                }
            );
        });
    let eI = (0, G.n)(i),
        ey = (0, G.Tb)(i),
        eT = !O.D_.useSetting() && !(0, V.isAndroidWeb)() && null != window.ResizeObserver,
        ev = (0, k.I7)(i ?? void 0),
        eR = (0, P.Sc)(),
        eL = (0, p.b)(),
        eD = (function (e) {
            let {
                    canAttachFiles: t,
                    canStartThreads: n,
                    useSlate: i,
                    canUseApplicationCommands: l,
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
                    (m.push({ type: "UPLOAD_A_FILE", icon: ec.H, display: j.intl.string(j.t["d3+iYs"]) }),
                    m.push({ type: "UPLOAD_TEXT_AS_FILE", icon: ec.H, display: j.intl.string(j.t["G9s+EM"]) })),
                s &&
                    t &&
                    d !== eS.BRT.POPOUT &&
                    m.push({
                        type: "CLIPS",
                        icon: ed.x,
                        display: j.intl.string(j.t.o034cv),
                        badgeVal: o,
                        badgeColor: eo.A.colors.BACKGROUND_BRAND.css,
                    }),
                n && m.push({ type: "CREATE_THREAD", icon: eu.G, display: j.intl.string(j.t.rBIGBL) }),
                c && m.push({ type: "POLL", icon: eh.Y, display: j.intl.string(j.t.Flr51u) }),
                i && l && m.push({ type: "SLASH_COMMAND", icon: em.k, display: j.intl.string(j.t.Bbvp6G) }),
                r.forEach((e) => {
                    !(0, eE.A)(e, eS.jUm.EMBEDDED) &&
                        (e.type === eS.$pd.PLAYING &&
                            (0, eE.A)(e, eS.jUm.JOIN) &&
                            m.push({
                                type: "INVITE_TO_GAME",
                                icon: ep.L,
                                display: j.intl.formatToPlainString(j.t["KHLo+F"], {
                                    channel: (0, eC.m1)(a, eb.default, ex.A, !0),
                                    game: null != e ? e.name : "",
                                }),
                                activity: e,
                            }),
                        e.type === eS.$pd.LISTENING &&
                            (0, eE.A)(e, eS.jUm.SYNC) &&
                            m.push({
                                type: "INVITE_TO_LISTEN",
                                icon: eg.J,
                                display: j.intl.formatToPlainString(j.t.I479px, {
                                    channel: (0, eC.m1)(a, eb.default, ex.A, !0),
                                    name: null != e ? e.name : "",
                                }),
                                activity: e,
                            }),
                        e.type === eS.$pd.WATCHING &&
                            (0, eE.A)(e, eS.jUm.SYNC) &&
                            m.push({
                                type: "INVITE_TO_WATCH",
                                icon: eA.b,
                                display: j.intl.formatToPlainString(j.t["EvCP/g"], {
                                    channel: (0, eC.m1)(a, eb.default, ex.A, !0),
                                    name: null != e ? e.name : "",
                                }),
                                activity: e,
                            }));
                }),
                u && m.push({ type: "SCHEDULED_MESSAGE", icon: ef.O, display: j.intl.string(j.t["3+ii4F"]) }),
                a.isThread() &&
                    h &&
                    m.push({ type: "SUMMARIZE_THREAD", icon: e_.D, display: j.intl.string(j.t.EXfguE) }),
                m
            );
        })({
            canAttachFiles: es,
            canStartThreads: eI || ey,
            useSlate: eT,
            hasClips: ei,
            canUseApplicationCommands: !x,
            channel: i,
            activities: q,
            newClipsCount: N?.length ?? 0,
            canPostPolls: ev,
            appContext: b,
            canSendScheduledMessages: eR,
            canSummarizeThreads: eL,
        });
    if (0 === eD.length) return null;
    let ek = (0, l.jsx)(d.p, { size: "refresh_sm", color: "currentColor", colorClass: eM.dW }),
        eP = (0, l.jsx)(u.Y, {
            targetElementRef: I,
            shouldShow: null != et,
            animation: u.Y.Animation.NONE,
            align: "recentClips" === et ? "center" : "left",
            position: "top",
            positionKey: et ?? "null",
            onRequestOpen: () => {
                en("attachMenu");
            },
            onRequestClose: () => {
                (0, c.hasAnyModalOpen)() || en(null);
            },
            renderPopout: (e) => {
                switch (et) {
                    case "recentClips":
                        return (0, l.jsx)(R, { ...e, onOpenClips: er, lastClipsSession: v });
                    case "attachMenu":
                        return (0, l.jsx)(eN, {
                            ...e,
                            onClose: () => en(null),
                            options: eD,
                            channel: i,
                            onFileUpload: () => S.current?.activateUploadDialogue(),
                            draftType: a,
                            editorTextContent: E,
                            setValue: C,
                            openClips: er,
                        });
                    default:
                        throw Error("Invalid popout type provided");
                }
            },
            children: (e) =>
                (0, l.jsx)(W.A, {
                    ref: I,
                    className: r()(eM.g$, t),
                    childClassName: eM.wh,
                    isActive: !1,
                    "aria-label": j.intl.string(j.t.d56gCa),
                    onDoubleClick: es ? () => S.current?.activateUploadDialogue() : void 0,
                    "aria-haspopup": "menu",
                    ...e,
                    children: ek,
                }),
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                className: eM.EJ,
                children: (0, l.jsx)(h.A, {
                    ref: S,
                    onChange: (e) => {
                        var t, n;
                        (t = e.currentTarget.files),
                            null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code
                                ? (0, z.V)(i, [])
                                : (0, z.R)(t, i, a, { requireConfirm: !0, origin: "file_picker" }),
                            K._.dispatchToLastSubscribed(eS.jej.TEXTAREA_FOCUS),
                            (e.currentTarget.value = "");
                    },
                    multiple: i.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, l.jsx)("div", { className: eM.Jd, children: eP }),
        ],
    });
});
