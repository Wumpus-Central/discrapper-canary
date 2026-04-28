n.d(t, { A: () => ek });
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
    A = n(672477),
    f = n(274372),
    _ = n(572164),
    E = n(710315),
    C = n(534514),
    x = n(834730),
    b = n(825484),
    S = n(821609),
    I = n(399925),
    y = n(403362),
    T = n(372684),
    v = n(226421),
    N = n(732774);
function j() {
    let e = (0, o.yK)([f.A], () => {
        let e = f.A.getLastClipsSession()?.newClipIds;
        return null == e
            ? []
            : f.A.getClipIds()
                  .slice(0, 4)
                  .filter((t) => e.includes(t))
                  .map((e) => f.A.getClipById(e))
                  .filter(y.Vq);
    });
    return (0, l.jsx)("div", {
        className: r()(N.vH, {
            [N.gb]: 1 === e.length,
            [N.$d]: 2 === e.length,
            [N.gS]: 3 === e.length,
            [N.hA]: e.length >= 4,
        }),
        children: Array.from({ ...e, length: 4 })
            .map((e, t) =>
                null != e
                    ? e.type === T.nQ.VOICE_CLIP
                        ? (0, l.jsx)(v.A, { className: N.xn }, e.id)
                        : (0, l.jsx)("img", { alt: "", className: N.xn, src: e.thumbnail }, e.id)
                    : (0, l.jsx)("div", {}, `placeholder-${t}`),
            )
            .reverse(),
    });
}
var M = n(985018),
    R = n(280508);
function L(e) {
    let { onOpenClips: t, lastClipsSession: n, closePopout: i } = e;
    return (s.useEffect(
        () => () => {
            (0, I.jA)();
        },
        [],
    ),
    null == n)
        ? null
        : (0, l.jsxs)("div", {
              className: R.WG,
              children: [
                  (0, l.jsx)("div", { className: R.Yt, children: (0, l.jsx)(j, {}) }),
                  (0, l.jsx)(C.D, {
                      className: R.wx,
                      color: "text-strong",
                      variant: "heading-md/extrabold",
                      children: M.intl.format(M.t["+qxkzC"], { count: n.newClipIds.length }),
                  }),
                  (0, l.jsx)(x.E, {
                      color: "text-default",
                      className: R.__invalid_content,
                      variant: "text-sm/medium",
                      children: M.intl.format(M.t["7XX0/X"], { applicationName: n.applicationName }),
                  }),
                  (0, l.jsx)("div", {
                      className: R.NC,
                      children: (0, l.jsxs)(b.e, {
                          children: [
                              (0, l.jsx)(S.$, {
                                  variant: "secondary",
                                  text: M.intl.string(M.t["7r5Z19"]),
                                  onClick: function () {
                                      (0, I.Mt)(!1), i();
                                  },
                              }),
                              (0, l.jsx)(S.$, { variant: "primary", text: M.intl.string(M.t.md4qKz), onClick: t }),
                          ],
                      }),
                  }),
              ],
          });
}
var D = n(370791),
    k = n(794905),
    P = n(793943),
    G = n(267102),
    O = n(969632),
    w = n(910425),
    U = n(406704),
    F = n(253932),
    B = n(761640),
    H = n(629016),
    K = n(186111),
    V = n(576705),
    z = n(461213),
    W = n(625494),
    q = n(723702),
    $ = n(518960),
    J = n(767089),
    Z = n(554146),
    Y = n(477782),
    X = n(177953),
    Q = n(950305),
    ee = n(550079),
    et = n(308368),
    en = n(688810),
    ei = n(826673),
    el = n(970244),
    es = n(867455),
    ea = n(780057),
    er = n(747926),
    eo = n(954571),
    ec = n(453771),
    ed = n(408018);
n(321073);
var eu = n(661531),
    eh = n(81369),
    em = n(176781),
    ep = n(523056),
    eg = n(642846),
    eA = n(323384),
    ef = n(111219),
    e_ = n(835723),
    eE = n(39623),
    eC = n(406810),
    ex = n(152367),
    eb = n(833349),
    eS = n(47167),
    eI = n(994500),
    ey = n(287809),
    eT = n(652215),
    ev =
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
    eN = n(49999),
    ej = n(412136);
let eM = /(.*)```(\w+)\n(.*)```(.*)/s;
function eR(e) {
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
        { analyticsLocations: g } = (0, en.Ay)(),
        A = (0, el.s)({ channel: t }),
        f = (0, o.bG)([ea.A], () => ea.A.isInProgress());
    function _() {
        (0, er.Tv)(t, void 0, "Plus Button");
    }
    function E() {
        eo.default.track(eT.HAw.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), m("/", (0, ed.x7)("/"));
    }
    function C() {
        p();
    }
    function x() {
        (0, ei.Dr)(Z.M.POLLS_CHAT_INPUT_COACHMARK, { dismissAction: eN.i.TAKE_ACTION }),
            (0, c.openModalLazy)(
                async () => {
                    let { default: e } = await n.e("42322").then(n.bind(n, 143657));
                    return (n) => (0, l.jsx)(e, { ...n, channel: t });
                },
                { modalKey: ej.sm },
            );
    }
    function b() {
        let e = h,
            n = "txt",
            i = "",
            l = h.match(eM);
        null != l && ((i = l[1]), (n = l[2]), (e = l[3]), (i += l[4])),
            (0, $.R)([(0, ec.VE)(new Blob([e], { type: "text/plain" }), `message.${n}`, "text/plain")], t, u),
            W._.dispatchToLastSubscribed(eT.jej.CLEAR_TEXT),
            "" !== i && W._.dispatchToLastSubscribed(eT.jej.INSERT_TEXT, { plainText: i });
    }
    return (
        s.useEffect(() => {
            eo.default.track(eT.HAw.OPEN_POPOUT, { type: "Send Attachment", channel_id: t.id, guild_id: t.guild_id });
        }, [t.guild_id, t.id]),
        (0, l.jsx)(ee.W, {
            "data-menu-migrated": !0,
            onSelect: d,
            navId: "channel-attach",
            onClose: r,
            "aria-label": M.intl.string(M.t.Xm41aV),
            children: i.map(function (e) {
                switch (e.type) {
                    case ev.UPLOAD_A_FILE:
                        return (0, l.jsx)(
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
                        return (0, l.jsx)(
                            Y.Dr,
                            {
                                id: "upload-text-as-file",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: b,
                            },
                            "upload-text-as-file",
                        );
                    case ev.CLIPS:
                        return (0, l.jsx)(
                            Y.Dr,
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
                    case ev.POLL:
                        return (0, l.jsx)(
                            Y.Dr,
                            {
                                id: "poll",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: x,
                            },
                            "poll",
                        );
                    case ev.INVITE_TO_PLAY_GAME:
                        return (0, l.jsx)(
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
                                            type: eT.xL.JOIN,
                                            activity: n,
                                            location: g[g.length - 1],
                                        })
                                    );
                                },
                            },
                            "play",
                        );
                    case ev.INVITE_TO_LISTEN:
                        return (0, l.jsx)(
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
                                            type: eT.xL.LISTEN,
                                            activity: n,
                                            location: g[g.length - 1],
                                        })
                                    );
                                },
                            },
                            "listen",
                        );
                    case ev.INVITE_TO_WATCH:
                        return (0, l.jsx)(
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
                                            type: eT.xL.WATCH,
                                            activity: n,
                                            location: g[g.length - 1],
                                        })
                                    );
                                },
                            },
                            "watch",
                        );
                    case ev.CREATE_THREAD:
                        return (0, l.jsx)(
                            Y.Dr,
                            {
                                id: "THREAD",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: _,
                            },
                            "THREAD",
                        );
                    case ev.SLASH_COMMAND:
                        return (0, l.jsx)(
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
                    case ev.SCHEDULED_MESSAGE:
                        return (0, l.jsx)(
                            Y.Dr,
                            {
                                id: "scheduled_message",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => (0, el.e0)({ channel: t }),
                                children: A,
                            },
                            "scheduled_message",
                        );
                    case ev.SUMMARIZE_THREAD:
                        return (0, l.jsx)(
                            Y.Dr,
                            {
                                id: "summarize_thread",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => es.A.summarizeThread(t),
                                loading: f,
                                disabled: f,
                                children: f
                                    ? null
                                    : (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(
                                                  Y.Dr,
                                                  {
                                                      id: "summarize_thread_for_everyone",
                                                      label: M.intl.string(M.t.eCzSdd),
                                                      iconLeft: X.n,
                                                      leadingAccessory: { type: "icon", icon: X.n },
                                                      action: () => es.A.summarizeThread(t, !1),
                                                  },
                                                  "summarize_thread_for_everyone",
                                              ),
                                              (0, l.jsx)(
                                                  Y.Dr,
                                                  {
                                                      id: "summarize_thread_for_me",
                                                      label: M.intl.string(M.t["HOe+Hq"]),
                                                      iconLeft: Q.n,
                                                      leadingAccessory: { type: "icon", icon: Q.n },
                                                      action: () => es.A.summarizeThread(t),
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
var eL = n(696016),
    eD = n(644268);
let ek = s.memo(function (e) {
    let { className: t, channel: i, draftType: a, editorTextContent: C, setValue: x, canOnlyUseTextCommands: b } = e,
        S = (0, G.Us)(),
        I = s.useRef(null),
        y = s.useRef(null),
        T = (0, o.bG)([z.A], () => z.A.getActivities()),
        v = (0, _.Et)(),
        N = (0, o.bG)([f.A], () => f.A.getLastClipsSession()),
        j = (0, o.yK)([f.A], () => f.A.getNewClipIds()),
        R = (0, o.bG)([B.Ay], () => null == B.Ay.getCurrentSidebarChannelId(i.id)),
        Z = (0, o.yK)(
            [H.A],
            () => (i.type === eT.rbe.DM ? T.filter((e) => !H.A.getParty(e.party?.id)?.has(i.getRecipientId())) : T),
            [T, i],
        ),
        { enableReminderSidebar: Y } = A.Z.useConfig({ location: "ClipsButton" }),
        { showClipsHeaderEntrypoint: X } = g.L_.useConfig({ location: "ChannelAttachButton" }),
        { topBarButton: Q } = E.$.useConfig({ location: "ChannelAttachButton" }),
        ee = !X && !Q && !Y,
        { onShareClick: et } = (0, k.A)(i.id),
        en = (0, o.bG)([f.A], () => f.A.getSettings().remindersEnabled),
        ei = (0, c.useModalsStore)((e) => (0, c.hasModalOpenSelector)(e, eL.nm)),
        el = (0, o.bG)([K.A], () => K.A.hasLayers()),
        es = (0, o.bG)([f.A], () => f.A.hasClips()),
        [ea, er] = s.useState(null),
        eo = (0, g.sw)() && (v || es),
        ec = i.isPrivate(),
        ed = (0, o.bG)([V.A], () => ec || (V.A.can(eT.xBc.ATTACH_FILES, i) && V.A.can(eT.xBc.SEND_MESSAGES, i))),
        ev = (0, m.A)(N);
    function eN() {
        (0, c.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("74068"), n.e("2211")]).then(n.bind(n, 867487));
                return (t) => (0, l.jsx)(e, { ...t, channelId: i.id, onClipClick: (e) => et({ clips: [e] }) });
            },
            { modalKey: eL.nm },
        ),
            er(null);
    }
    s.useEffect(() => {
        if (X || !en || ei || !Y || ev?.newClipIds.length === N?.newClipIds.length) return;
        let e = N?.newClipIds;
        if ((e?.length ?? 0) === 0 || el || (0, c.hasAnyModalOpen)()) return;
        let { activePanel: t } = P.fy.getState();
        t !== P.HP.CLIPS_REMINDER && (0, D.w)();
    }, [N, ev, Y, X, en, ei, el]),
        ev?.newClipIds.length !== N?.newClipIds.length &&
            (N?.newClipIds.length ?? 0) > 0 &&
            null == ea &&
            en &&
            R &&
            !ei &&
            ee &&
            !el &&
            er("recentClips"),
        s.useEffect(() => {
            let e = (e) => {
                let { channelId: t } = e;
                t === i.id && I.current?.activateUploadDialogue();
            };
            return (
                W._.subscribe(eT.jej.UPLOAD_FILE, e),
                () => {
                    W._.unsubscribe(eT.jej.UPLOAD_FILE, e);
                }
            );
        });
    let ej = (0, U.n)(i),
        eM = (0, U.Tb)(i),
        ek = !F.D_.useSetting() && !(0, q.isAndroidWeb)() && null != window.ResizeObserver,
        eP = (0, O.I7)(i ?? void 0),
        eG = (0, w.Sc)(),
        eO = (0, p.b)(),
        ew = (function (e) {
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
                    (m.push({ type: "UPLOAD_A_FILE", icon: eh.H, display: M.intl.string(M.t["d3+iYs"]) }),
                    m.push({ type: "UPLOAD_TEXT_AS_FILE", icon: eh.H, display: M.intl.string(M.t["G9s+EM"]) })),
                s &&
                    t &&
                    d !== eT.BRT.POPOUT &&
                    m.push({
                        type: "CLIPS",
                        icon: em.x,
                        display: M.intl.string(M.t.o034cv),
                        badgeVal: o,
                        badgeColor: eu.A.colors.BACKGROUND_BRAND.css,
                    }),
                n && m.push({ type: "CREATE_THREAD", icon: ep.G, display: M.intl.string(M.t.rBIGBL) }),
                c && m.push({ type: "POLL", icon: eg.Y, display: M.intl.string(M.t.Flr51u) }),
                i && l && m.push({ type: "SLASH_COMMAND", icon: eA.k, display: M.intl.string(M.t.Bbvp6G) }),
                r.forEach((e) => {
                    !(0, eb.A)(e, eT.jUm.EMBEDDED) &&
                        (e.type === eT.$pd.PLAYING &&
                            (0, eb.A)(e, eT.jUm.JOIN) &&
                            m.push({
                                type: "INVITE_TO_GAME",
                                icon: ef.L,
                                display: M.intl.formatToPlainString(M.t["KHLo+F"], {
                                    channel: (0, eS.m1)(a, ey.default, eI.A, !0),
                                    game: null != e ? e.name : "",
                                }),
                                activity: e,
                            }),
                        e.type === eT.$pd.LISTENING &&
                            (0, eb.A)(e, eT.jUm.SYNC) &&
                            m.push({
                                type: "INVITE_TO_LISTEN",
                                icon: e_.J,
                                display: M.intl.formatToPlainString(M.t.I479px, {
                                    channel: (0, eS.m1)(a, ey.default, eI.A, !0),
                                    name: null != e ? e.name : "",
                                }),
                                activity: e,
                            }),
                        e.type === eT.$pd.WATCHING &&
                            (0, eb.A)(e, eT.jUm.SYNC) &&
                            m.push({
                                type: "INVITE_TO_WATCH",
                                icon: eE.b,
                                display: M.intl.formatToPlainString(M.t["EvCP/g"], {
                                    channel: (0, eS.m1)(a, ey.default, eI.A, !0),
                                    name: null != e ? e.name : "",
                                }),
                                activity: e,
                            }));
                }),
                u && m.push({ type: "SCHEDULED_MESSAGE", icon: eC.O, display: M.intl.string(M.t["3+ii4F"]) }),
                a.isThread() &&
                    h &&
                    m.push({ type: "SUMMARIZE_THREAD", icon: ex.D, display: M.intl.string(M.t.EXfguE) }),
                m
            );
        })({
            canAttachFiles: ed,
            canStartThreads: ej || eM,
            useSlate: ek,
            hasClips: eo,
            canUseApplicationCommands: !b,
            channel: i,
            activities: Z,
            newClipsCount: j?.length ?? 0,
            canPostPolls: eP,
            appContext: S,
            canSendScheduledMessages: eG,
            canSummarizeThreads: eO,
        });
    if (0 === ew.length) return null;
    let eU = (0, l.jsx)(d.p, { size: "refresh_sm", color: "currentColor", colorClass: eD.dW }),
        eF = (0, l.jsx)(u.Y, {
            targetElementRef: y,
            shouldShow: null != ea,
            animation: u.Y.Animation.NONE,
            align: "recentClips" === ea ? "center" : "left",
            position: "top",
            positionKey: ea ?? "null",
            onRequestOpen: () => {
                er("attachMenu");
            },
            onRequestClose: () => {
                (0, c.hasAnyModalOpen)() || er(null);
            },
            renderPopout: (e) => {
                switch (ea) {
                    case "recentClips":
                        return (0, l.jsx)(L, { ...e, onOpenClips: eN, lastClipsSession: N });
                    case "attachMenu":
                        return (0, l.jsx)(eR, {
                            ...e,
                            onClose: () => er(null),
                            options: ew,
                            channel: i,
                            onFileUpload: () => I.current?.activateUploadDialogue(),
                            draftType: a,
                            editorTextContent: C,
                            setValue: x,
                            openClips: eN,
                        });
                    default:
                        throw Error("Invalid popout type provided");
                }
            },
            children: (e) =>
                (0, l.jsx)(J.A, {
                    ref: y,
                    className: r()(eD.g$, t),
                    childClassName: eD.wh,
                    isActive: !1,
                    "aria-label": M.intl.string(M.t.d56gCa),
                    onDoubleClick: ed ? () => I.current?.activateUploadDialogue() : void 0,
                    "aria-haspopup": "menu",
                    ...e,
                    children: eU,
                }),
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                className: eD.EJ,
                children: (0, l.jsx)(h.A, {
                    ref: I,
                    onChange: (e) => {
                        var t, n;
                        (t = e.currentTarget.files),
                            null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code
                                ? (0, $.V)(i, [])
                                : (0, $.R)(t, i, a, { requireConfirm: !0, origin: "file_picker" }),
                            W._.dispatchToLastSubscribed(eT.jej.TEXTAREA_FOCUS),
                            (e.currentTarget.value = "");
                    },
                    multiple: i.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, l.jsx)("div", { className: eD.Jd, children: eF }),
        ],
    });
});
