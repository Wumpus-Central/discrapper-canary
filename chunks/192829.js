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
    g = n(147087),
    A = n(734066),
    p = n(672477),
    f = n(274372),
    C = n(572164),
    E = n(710315),
    x = n(534514),
    S = n(834730),
    _ = n(825484),
    I = n(821609),
    y = n(399925),
    j = n(403362),
    b = n(372684),
    T = n(226421),
    N = n(732774);
function v() {
    let e = (0, o.yK)([f.A], () => {
        let e = f.A.getLastClipsSession()?.newClipIds;
        return null == e
            ? []
            : f.A.getClipIds()
                  .slice(0, 4)
                  .filter((t) => e.includes(t))
                  .map((e) => f.A.getClipById(e))
                  .filter(j.Vq);
    });
    return (0, i.jsx)("div", {
        className: r()(N.vH, {
            [N.gb]: 1 === e.length,
            [N.$d]: 2 === e.length,
            [N.gS]: 3 === e.length,
            [N.hA]: e.length >= 4,
        }),
        children: Array.from({ ...e, length: 4 })
            .map((e, t) =>
                null != e
                    ? e.type === b.nQ.VOICE_CLIP
                        ? (0, i.jsx)(T.A, { className: N.xn }, e.id)
                        : (0, i.jsx)("img", { alt: "", className: N.xn, src: e.thumbnail }, e.id)
                    : (0, i.jsx)("div", {}, `placeholder-${t}`),
            )
            .reverse(),
    });
}
var M = n(985018),
    R = n(280508);
function D(e) {
    let { onOpenClips: t, lastClipsSession: n, closePopout: l } = e;
    return (s.useEffect(
        () => () => {
            (0, y.jA)();
        },
        [],
    ),
    null == n)
        ? null
        : (0, i.jsxs)("div", {
              className: R.WG,
              children: [
                  (0, i.jsx)("div", { className: R.Yt, children: (0, i.jsx)(v, {}) }),
                  (0, i.jsx)(x.D, {
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
                                      (0, y.Mt)(!1), l();
                                  },
                              }),
                              (0, i.jsx)(I.$, { variant: "primary", text: M.intl.string(M.t.md4qKz), onClick: t }),
                          ],
                      }),
                  }),
              ],
          });
}
var L = n(370791),
    k = n(794905),
    P = n(793943),
    G = n(267102),
    O = n(969632),
    U = n(910425),
    w = n(406704),
    F = n(253932),
    B = n(761640),
    H = n(629016),
    K = n(186111),
    V = n(576705),
    z = n(461213),
    W = n(625494),
    $ = n(723702),
    q = n(518960),
    J = n(767089),
    Z = n(554146),
    Y = n(477782),
    X = n(177953),
    Q = n(950305),
    ee = n(550079),
    et = n(308368),
    en = n(688810),
    el = n(826673),
    ei = n(970244),
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
    eg = n(523056),
    eA = n(642846),
    ep = n(323384),
    ef = n(111219),
    eC = n(835723),
    eE = n(39623),
    ex = n(406810),
    eS = n(152367),
    e_ = n(833349),
    eI = n(47167),
    ey = n(994500),
    ej = n(287809),
    eb = n(652215),
    eT =
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
    eN = n(49999),
    ev = n(412136);
let eM = /(.*)```(\w+)\n(.*)```(.*)/s;
function eR(e) {
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
        { analyticsLocations: A } = (0, en.Ay)(),
        p = (0, ei.s)({ channel: t }),
        f = (0, o.bG)([ea.A], () => ea.A.isInProgress());
    function C() {
        (0, er.Tv)(t, void 0, "Plus Button");
    }
    function E() {
        eo.default.track(eb.HAw.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), m("/", (0, ed.x7)("/"));
    }
    function x() {
        g();
    }
    function S() {
        (0, el.Dr)(Z.M.POLLS_CHAT_INPUT_COACHMARK, { dismissAction: eN.i.TAKE_ACTION }),
            (0, c.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("83644"), n.e("42322")]).then(n.bind(n, 143657));
                    return (n) => (0, i.jsx)(e, { ...n, channel: t });
                },
                { modalKey: ev.sm },
            );
    }
    function _() {
        let e = h,
            n = "txt",
            l = "",
            i = h.match(eM);
        null != i && ((l = i[1]), (n = i[2]), (e = i[3]), (l += i[4])),
            (0, q.R)([(0, ec.VE)(new Blob([e], { type: "text/plain" }), `message.${n}`, "text/plain")], t, u),
            W._.dispatchToLastSubscribed(eb.jej.CLEAR_TEXT),
            "" !== l && W._.dispatchToLastSubscribed(eb.jej.INSERT_TEXT, { plainText: l });
    }
    return (
        s.useEffect(() => {
            eo.default.track(eb.HAw.OPEN_POPOUT, { type: "Send Attachment", channel_id: t.id, guild_id: t.guild_id });
        }, [t.guild_id, t.id]),
        (0, i.jsx)(ee.W, {
            "data-menu-migrated": !0,
            onSelect: d,
            navId: "channel-attach",
            onClose: r,
            "aria-label": M.intl.string(M.t.Xm41aV),
            children: l.map(function (e) {
                switch (e.type) {
                    case eT.UPLOAD_A_FILE:
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
                    case eT.UPLOAD_TEXT_AS_FILE:
                        if ("" === h) return null;
                        return (0, i.jsx)(
                            Y.Dr,
                            {
                                id: "upload-text-as-file",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: _,
                            },
                            "upload-text-as-file",
                        );
                    case eT.CLIPS:
                        return (0, i.jsx)(
                            Y.Dr,
                            {
                                id: "clips",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                badge: null != e.badgeVal && e.badgeVal > 0 ? { text: e.badgeVal.toString() } : void 0,
                                action: x,
                            },
                            "clips",
                        );
                    case eT.POLL:
                        return (0, i.jsx)(
                            Y.Dr,
                            {
                                id: "poll",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: S,
                            },
                            "poll",
                        );
                    case eT.INVITE_TO_PLAY_GAME:
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
                    case eT.INVITE_TO_LISTEN:
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
                    case eT.INVITE_TO_WATCH:
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
                    case eT.CREATE_THREAD:
                        return (0, i.jsx)(
                            Y.Dr,
                            {
                                id: "THREAD",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: C,
                            },
                            "THREAD",
                        );
                    case eT.SLASH_COMMAND:
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
                    case eT.SCHEDULED_MESSAGE:
                        return (0, i.jsx)(
                            Y.Dr,
                            {
                                id: "scheduled_message",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => (0, ei.e0)({ channel: t }),
                                children: p,
                            },
                            "scheduled_message",
                        );
                    case eT.SUMMARIZE_THREAD:
                        return (0, i.jsx)(
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
                                    : (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(
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
                                              (0, i.jsx)(
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
var eD = n(696016),
    eL = n(644268);
let ek = s.memo(function (e) {
    let { className: t, channel: l, draftType: a, editorTextContent: x, setValue: S, canOnlyUseTextCommands: _ } = e,
        I = (0, G.Us)(),
        y = s.useRef(null),
        j = s.useRef(null),
        b = (0, o.bG)([z.A], () => z.A.getActivities()),
        T = (0, C.Et)(),
        N = (0, o.bG)([f.A], () => f.A.getLastClipsSession()),
        v = (0, o.yK)([f.A], () => f.A.getNewClipIds()),
        R = (0, o.bG)([B.Ay], () => null == B.Ay.getCurrentSidebarChannelId(l.id)),
        Z = (0, o.yK)(
            [H.A],
            () => (l.type === eb.rbe.DM ? b.filter((e) => !H.A.getParty(e.party?.id)?.has(l.getRecipientId())) : b),
            [b, l],
        ),
        { enableReminderSidebar: Y } = p.Z.useConfig({ location: "ClipsButton" }),
        { showClipsHeaderEntrypoint: X } = A.L_.useConfig({ location: "ChannelAttachButton" }),
        { topBarButton: Q } = E.$.useConfig({ location: "ChannelAttachButton" }),
        ee = !X && !Q && !Y,
        { onShareClick: et } = (0, k.A)(l.id),
        en = (0, o.bG)([f.A], () => f.A.getSettings().remindersEnabled),
        el = (0, c.useModalsStore)((e) => (0, c.hasModalOpenSelector)(e, eD.nm)),
        ei = (0, o.bG)([K.A], () => K.A.hasLayers()),
        es = (0, o.bG)([f.A], () => f.A.hasClips()),
        [ea, er] = s.useState(null),
        eo = (0, A.sw)() && (T || es),
        ec = l.isPrivate(),
        ed = (0, o.bG)([V.A], () => ec || (V.A.can(eb.xBc.ATTACH_FILES, l) && V.A.can(eb.xBc.SEND_MESSAGES, l))),
        eT = (0, m.A)(N);
    function eN() {
        (0, c.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("3215"),
                    n.e("22471"),
                    n.e("73432"),
                    n.e("13922"),
                    n.e("83952"),
                    n.e("81202"),
                    n.e("88990"),
                    n.e("30920"),
                    n.e("1962"),
                    n.e("37715"),
                    n.e("80559"),
                    n.e("74049"),
                    n.e("65722"),
                    n.e("74068"),
                ]).then(n.bind(n, 867487));
                return (t) => (0, i.jsx)(e, { ...t, channelId: l.id, onClipClick: (e) => et({ clips: [e] }) });
            },
            { modalKey: eD.nm },
        ),
            er(null);
    }
    s.useEffect(() => {
        if (X || !en || el || !Y || eT?.newClipIds.length === N?.newClipIds.length) return;
        let e = N?.newClipIds;
        if ((e?.length ?? 0) === 0 || ei || (0, c.hasAnyModalOpen)()) return;
        let { activePanel: t } = P.fy.getState();
        t !== P.HP.CLIPS_REMINDER && (0, L.w)();
    }, [N, eT, Y, X, en, el, ei]),
        eT?.newClipIds.length !== N?.newClipIds.length &&
            (N?.newClipIds.length ?? 0) > 0 &&
            null == ea &&
            en &&
            R &&
            !el &&
            ee &&
            !ei &&
            er("recentClips"),
        s.useEffect(() => {
            let e = (e) => {
                let { channelId: t } = e;
                t === l.id && y.current?.activateUploadDialogue();
            };
            return (
                W._.subscribe(eb.jej.UPLOAD_FILE, e),
                () => {
                    W._.unsubscribe(eb.jej.UPLOAD_FILE, e);
                }
            );
        });
    let ev = (0, w.n)(l),
        eM = (0, w.Tb)(l),
        ek = !F.D_.useSetting() && !(0, $.isAndroidWeb)() && null != window.ResizeObserver,
        eP = (0, O.I7)(l ?? void 0),
        eG = (0, U.Sc)(),
        eO = (0, g.b)(),
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
                } = e,
                m = [];
            return (
                t &&
                    (m.push({ type: "UPLOAD_A_FILE", icon: eh.H, display: M.intl.string(M.t["d3+iYs"]) }),
                    m.push({ type: "UPLOAD_TEXT_AS_FILE", icon: eh.H, display: M.intl.string(M.t["G9s+EM"]) })),
                s &&
                    t &&
                    d !== eb.BRT.POPOUT &&
                    m.push({
                        type: "CLIPS",
                        icon: em.x,
                        display: M.intl.string(M.t.o034cv),
                        badgeVal: o,
                        badgeColor: eu.A.colors.BACKGROUND_BRAND.css,
                    }),
                n && m.push({ type: "CREATE_THREAD", icon: eg.G, display: M.intl.string(M.t.rBIGBL) }),
                c && m.push({ type: "POLL", icon: eA.Y, display: M.intl.string(M.t.Flr51u) }),
                l && i && m.push({ type: "SLASH_COMMAND", icon: ep.k, display: M.intl.string(M.t.Bbvp6G) }),
                r.forEach((e) => {
                    !(0, e_.A)(e, eb.jUm.EMBEDDED) &&
                        (e.type === eb.$pd.PLAYING &&
                            (0, e_.A)(e, eb.jUm.JOIN) &&
                            m.push({
                                type: "INVITE_TO_GAME",
                                icon: ef.L,
                                display: M.intl.formatToPlainString(M.t["KHLo+F"], {
                                    channel: (0, eI.m1)(a, ej.default, ey.A, !0),
                                    game: null != e ? e.name : "",
                                }),
                                activity: e,
                            }),
                        e.type === eb.$pd.LISTENING &&
                            (0, e_.A)(e, eb.jUm.SYNC) &&
                            m.push({
                                type: "INVITE_TO_LISTEN",
                                icon: eC.J,
                                display: M.intl.formatToPlainString(M.t.I479px, {
                                    channel: (0, eI.m1)(a, ej.default, ey.A, !0),
                                    name: null != e ? e.name : "",
                                }),
                                activity: e,
                            }),
                        e.type === eb.$pd.WATCHING &&
                            (0, e_.A)(e, eb.jUm.SYNC) &&
                            m.push({
                                type: "INVITE_TO_WATCH",
                                icon: eE.b,
                                display: M.intl.formatToPlainString(M.t["EvCP/g"], {
                                    channel: (0, eI.m1)(a, ej.default, ey.A, !0),
                                    name: null != e ? e.name : "",
                                }),
                                activity: e,
                            }));
                }),
                u && m.push({ type: "SCHEDULED_MESSAGE", icon: ex.O, display: M.intl.string(M.t["3+ii4F"]) }),
                a.isThread() &&
                    h &&
                    m.push({ type: "SUMMARIZE_THREAD", icon: eS.D, display: M.intl.string(M.t.EXfguE) }),
                m
            );
        })({
            canAttachFiles: ed,
            canStartThreads: ev || eM,
            useSlate: ek,
            hasClips: eo,
            canUseApplicationCommands: !_,
            channel: l,
            activities: Z,
            newClipsCount: v?.length ?? 0,
            canPostPolls: eP,
            appContext: I,
            canSendScheduledMessages: eG,
            canSummarizeThreads: eO,
        });
    if (0 === eU.length) return null;
    let ew = (0, i.jsx)(d.p, { size: "refresh_sm", color: "currentColor", colorClass: eL.dW }),
        eF = (0, i.jsx)(u.Y, {
            targetElementRef: j,
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
                        return (0, i.jsx)(D, { ...e, onOpenClips: eN, lastClipsSession: N });
                    case "attachMenu":
                        return (0, i.jsx)(eR, {
                            ...e,
                            onClose: () => er(null),
                            options: eU,
                            channel: l,
                            onFileUpload: () => y.current?.activateUploadDialogue(),
                            draftType: a,
                            editorTextContent: x,
                            setValue: S,
                            openClips: eN,
                        });
                    default:
                        throw Error("Invalid popout type provided");
                }
            },
            children: (e) =>
                (0, i.jsx)(J.A, {
                    ref: j,
                    className: r()(eL.g$, t),
                    childClassName: eL.wh,
                    isActive: !1,
                    "aria-label": M.intl.string(M.t.d56gCa),
                    onDoubleClick: ed ? () => y.current?.activateUploadDialogue() : void 0,
                    "aria-haspopup": "menu",
                    ...e,
                    children: ew,
                }),
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: eL.EJ,
                children: (0, i.jsx)(h.A, {
                    ref: y,
                    onChange: (e) => {
                        var t, n;
                        (t = e.currentTarget.files),
                            null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code
                                ? (0, q.V)(l, [])
                                : (0, q.R)(t, l, a, { requireConfirm: !0, origin: "file_picker" }),
                            W._.dispatchToLastSubscribed(eb.jej.TEXTAREA_FOCUS),
                            (e.currentTarget.value = "");
                    },
                    multiple: l.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, i.jsx)("div", { className: eL.Jd, children: eF }),
        ],
    });
});
