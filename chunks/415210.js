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
    A = n(147087),
    g = n(734066),
    p = n(150616),
    f = n(274372),
    C = n(572164),
    E = n(710315),
    x = n(534514),
    S = n(834730),
    _ = n(825484),
    I = n(821609),
    y = n(607814),
    N = n(403362),
    j = n(372684),
    T = n(226421),
    b = n(732774);
function v() {
    let e = (0, o.yK)([f.A], () => {
        let e = f.A.getLastClipsSession()?.newClipIds;
        return null == e
            ? []
            : f.A.getClipIds()
                  .slice(0, 4)
                  .filter((t) => e.includes(t))
                  .map((e) => f.A.getClipById(e))
                  .filter(N.Vq);
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
                    ? e.type === j.nQ.VOICE_CLIP
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
var L = n(794905),
    P = n(267102),
    k = n(969632),
    O = n(910425),
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
    $ = n(767089),
    q = n(554146),
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
    eA = n(323384),
    eg = n(111219),
    ep = n(835723),
    ef = n(39623),
    eC = n(406810),
    eE = n(152367),
    ex = n(55730),
    eS = n(47167),
    e_ = n(994500),
    eI = n(287809),
    ey = n(652215),
    eN =
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
    ej = n(49999),
    eT = n(412136);
let eb = /(.*)```(\w+)\n(.*)```(.*)/s;
function ev(e) {
    let {
            channel: t,
            options: l,
            onFileUpload: a,
            onClose: r,
            onSelect: d,
            draftType: u,
            editorTextContent: h,
            setValue: m,
            openClips: A,
        } = e,
        { analyticsLocations: g } = (0, ee.Ay)(),
        p = (0, en.s)({ channel: t }),
        f = (0, o.bG)([ei.A], () => ei.A.isInProgress());
    function C() {
        (0, es.Tv)(t, void 0, "Plus Button");
    }
    function E() {
        ea.default.track(ey.HAw.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), m("/", (0, eo.x7)("/"));
    }
    function x() {
        A();
    }
    function S() {
        (0, et.Dr)(q.M.POLLS_CHAT_INPUT_COACHMARK, { dismissAction: ej.i.TAKE_ACTION }),
            (0, c.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("83644"), n.e("42322")]).then(n.bind(n, 143657));
                    return (n) => (0, i.jsx)(e, { ...n, channel: t });
                },
                { modalKey: eT.sm },
            );
    }
    function _() {
        let e = h,
            n = "txt",
            l = "",
            i = h.match(eb);
        null != i && ((l = i[1]), (n = i[2]), (e = i[3]), (l += i[4])),
            (0, W.R)([(0, er.VE)(new Blob([e], { type: "text/plain" }), `message.${n}`, "text/plain")], t, u),
            K._.dispatchToLastSubscribed(ey.jej.CLEAR_TEXT),
            "" !== l && K._.dispatchToLastSubscribed(ey.jej.INSERT_TEXT, { plainText: l });
    }
    return (
        s.useEffect(() => {
            ea.default.track(ey.HAw.OPEN_POPOUT, { type: "Send Attachment", channel_id: t.id, guild_id: t.guild_id });
        }, [t.guild_id, t.id]),
        (0, i.jsx)(X.W, {
            "data-menu-migrated": !0,
            onSelect: d,
            navId: "channel-attach",
            onClose: r,
            "aria-label": M.intl.string(M.t.Xm41aV),
            children: l.map(function (e) {
                switch (e.type) {
                    case eN.UPLOAD_A_FILE:
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
                    case eN.UPLOAD_TEXT_AS_FILE:
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
                    case eN.CLIPS:
                        return (0, i.jsx)(
                            J.Dr,
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
                    case eN.POLL:
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
                    case eN.INVITE_TO_PLAY_GAME:
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
                                            type: ey.xL.JOIN,
                                            activity: n,
                                            location: g[g.length - 1],
                                        })
                                    );
                                },
                            },
                            "play",
                        );
                    case eN.INVITE_TO_LISTEN:
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
                                            type: ey.xL.LISTEN,
                                            activity: n,
                                            location: g[g.length - 1],
                                        })
                                    );
                                },
                            },
                            "listen",
                        );
                    case eN.INVITE_TO_WATCH:
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
                                            type: ey.xL.WATCH,
                                            activity: n,
                                            location: g[g.length - 1],
                                        })
                                    );
                                },
                            },
                            "watch",
                        );
                    case eN.CREATE_THREAD:
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
                    case eN.SLASH_COMMAND:
                        return (0, i.jsx)(
                            J.Dr,
                            {
                                id: "SLASH_COMMAND",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: E,
                            },
                            "SLASH_COMMAND",
                        );
                    case eN.SCHEDULED_MESSAGE:
                        return (0, i.jsx)(
                            J.Dr,
                            {
                                id: "scheduled_message",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => (0, en.e0)({ channel: t }),
                                children: p,
                            },
                            "scheduled_message",
                        );
                    case eN.SUMMARIZE_THREAD:
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
                                                      label: M.intl.string(M.t.eCzSdd),
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
                                                      label: M.intl.string(M.t["HOe+Hq"]),
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
    let { className: t, channel: l, draftType: a, editorTextContent: x, setValue: S, canOnlyUseTextCommands: _ } = e,
        I = (0, P.Us)(),
        y = s.useRef(null),
        N = s.useRef(null),
        j = (0, o.bG)([V.A], () => V.A.getActivities()),
        T = (0, C.Et)(),
        b = (0, o.bG)([f.A], () => f.A.getLastClipsSession()),
        v = (0, o.yK)([f.A], () => f.A.getNewClipIds()),
        R = (0, o.bG)([w.Ay], () => null == w.Ay.getCurrentSidebarChannelId(l.id)),
        q = (0, o.yK)(
            [F.A],
            () => (l.type === ey.rbe.DM ? j.filter((e) => !F.A.getParty(e.party?.id)?.has(l.getRecipientId())) : j),
            [j, l],
        ),
        { enableReminderSidebar: J } = p.Z.useConfig({ location: "ClipsButton" }),
        { topBarButton: Z } = E.$.useConfig({ location: "ChannelAttachButton" }),
        { onShareClick: Y } = (0, L.A)(l.id),
        X = (0, o.bG)([f.A], () => f.A.getSettings().remindersEnabled),
        Q = (0, c.useModalsStore)((e) => (0, c.hasModalOpenSelector)(e, eM.nm)),
        ee = (0, o.bG)([H.A], () => H.A.hasLayers()),
        et = (0, o.bG)([f.A], () => f.A.hasClips()),
        [en, el] = s.useState(null),
        ei = (0, g.sw)() && (T || et),
        es = l.isPrivate(),
        ea = (0, o.bG)([B.A], () => es || (B.A.can(ey.xBc.ATTACH_FILES, l) && B.A.can(ey.xBc.SEND_MESSAGES, l))),
        er = (0, m.A)(b);
    function eo() {
        (0, c.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("52197"),
                    n.e("71104"),
                    n.e("19397"),
                    n.e("88623"),
                    n.e("24063"),
                    n.e("8516"),
                    n.e("40502"),
                    n.e("83952"),
                    n.e("30920"),
                    n.e("81202"),
                    n.e("1962"),
                    n.e("88990"),
                    n.e("37715"),
                    n.e("80559"),
                    n.e("95008"),
                    n.e("74049"),
                    n.e("86745"),
                    n.e("89597"),
                    n.e("20342"),
                    n.e("99419"),
                ]).then(n.bind(n, 445398));
                return (t) => (0, i.jsx)(e, { ...t, channelId: l.id, onClipClick: (e) => Y({ clips: [e] }) });
            },
            { modalKey: eM.nm },
        ),
            el(null);
    }
    er?.newClipIds.length !== b?.newClipIds.length &&
        (b?.newClipIds.length ?? 0) > 0 &&
        null == en &&
        X &&
        R &&
        !Q &&
        !Z &&
        !J &&
        !ee &&
        el("recentClips"),
        s.useEffect(() => {
            let e = (e) => {
                let { channelId: t } = e;
                t === l.id && y.current?.activateUploadDialogue();
            };
            return (
                K._.subscribe(ey.jej.UPLOAD_FILE, e),
                () => {
                    K._.unsubscribe(ey.jej.UPLOAD_FILE, e);
                }
            );
        });
    let eN = (0, G.n)(l),
        ej = (0, G.Tb)(l),
        eT = !U.D_.useSetting() && !(0, z.isAndroidWeb)() && null != window.ResizeObserver,
        eb = (0, k.I7)(l ?? void 0),
        eD = (0, O.Sc)(),
        eL = (0, A.b)(),
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
                } = e,
                m = [];
            return (
                t &&
                    (m.push({ type: "UPLOAD_A_FILE", icon: ed.H, display: M.intl.string(M.t["d3+iYs"]) }),
                    m.push({ type: "UPLOAD_TEXT_AS_FILE", icon: ed.H, display: M.intl.string(M.t["G9s+EM"]) })),
                s &&
                    t &&
                    d !== ey.BRT.POPOUT &&
                    m.push({
                        type: "CLIPS",
                        icon: eu.x,
                        display: M.intl.string(M.t.o034cv),
                        badgeVal: o,
                        badgeColor: ec.A.colors.BACKGROUND_BRAND.css,
                    }),
                n && m.push({ type: "CREATE_THREAD", icon: eh.G, display: M.intl.string(M.t.rBIGBL) }),
                c && m.push({ type: "POLL", icon: em.Y, display: M.intl.string(M.t.Flr51u) }),
                l && i && m.push({ type: "SLASH_COMMAND", icon: eA.k, display: M.intl.string(M.t.Bbvp6G) }),
                r.forEach((e) => {
                    !(0, ex.A)(e, ey.jUm.EMBEDDED) &&
                        (e.type === ey.$pd.PLAYING &&
                            (0, ex.A)(e, ey.jUm.JOIN) &&
                            m.push({
                                type: "INVITE_TO_GAME",
                                icon: eg.L,
                                display: M.intl.formatToPlainString(M.t["KHLo+F"], {
                                    channel: (0, eS.m1)(a, eI.default, e_.A, !0),
                                    game: null != e ? e.name : "",
                                }),
                                activity: e,
                            }),
                        e.type === ey.$pd.LISTENING &&
                            (0, ex.A)(e, ey.jUm.SYNC) &&
                            m.push({
                                type: "INVITE_TO_LISTEN",
                                icon: ep.J,
                                display: M.intl.formatToPlainString(M.t.I479px, {
                                    channel: (0, eS.m1)(a, eI.default, e_.A, !0),
                                    name: null != e ? e.name : "",
                                }),
                                activity: e,
                            }),
                        e.type === ey.$pd.WATCHING &&
                            (0, ex.A)(e, ey.jUm.SYNC) &&
                            m.push({
                                type: "INVITE_TO_WATCH",
                                icon: ef.b,
                                display: M.intl.formatToPlainString(M.t["EvCP/g"], {
                                    channel: (0, eS.m1)(a, eI.default, e_.A, !0),
                                    name: null != e ? e.name : "",
                                }),
                                activity: e,
                            }));
                }),
                u && m.push({ type: "SCHEDULED_MESSAGE", icon: eC.O, display: M.intl.string(M.t["3+ii4F"]) }),
                a.isThread() &&
                    h &&
                    m.push({ type: "SUMMARIZE_THREAD", icon: eE.D, display: M.intl.string(M.t.EXfguE) }),
                m
            );
        })({
            canAttachFiles: ea,
            canStartThreads: eN || ej,
            useSlate: eT,
            hasClips: ei,
            canUseApplicationCommands: !_,
            channel: l,
            activities: q,
            newClipsCount: v?.length ?? 0,
            canPostPolls: eb,
            appContext: I,
            canSendScheduledMessages: eD,
            canSummarizeThreads: eL,
        });
    if (0 === eP.length) return null;
    let ek = (0, i.jsx)(d.p, { size: "refresh_sm", color: "currentColor", colorClass: eR.dW }),
        eO = (0, i.jsx)(u.Y, {
            targetElementRef: N,
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
                        return (0, i.jsx)(D, { ...e, onOpenClips: eo, lastClipsSession: b });
                    case "attachMenu":
                        return (0, i.jsx)(ev, {
                            ...e,
                            onClose: () => el(null),
                            options: eP,
                            channel: l,
                            onFileUpload: () => y.current?.activateUploadDialogue(),
                            draftType: a,
                            editorTextContent: x,
                            setValue: S,
                            openClips: eo,
                        });
                    default:
                        throw Error("Invalid popout type provided");
                }
            },
            children: (e) =>
                (0, i.jsx)($.A, {
                    ref: N,
                    className: r()(eR.g$, t),
                    childClassName: eR.wh,
                    isActive: !1,
                    "aria-label": M.intl.string(M.t.d56gCa),
                    onDoubleClick: ea ? () => y.current?.activateUploadDialogue() : void 0,
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
                    ref: y,
                    onChange: (e) => {
                        var t, n;
                        (t = e.currentTarget.files),
                            null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code
                                ? (0, W.V)(l, [])
                                : (0, W.R)(t, l, a, { requireConfirm: !0, origin: "file_picker" }),
                            K._.dispatchToLastSubscribed(ey.jej.TEXTAREA_FOCUS),
                            (e.currentTarget.value = "");
                    },
                    multiple: l.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, i.jsx)("div", { className: eR.Jd, children: eO }),
        ],
    });
});
