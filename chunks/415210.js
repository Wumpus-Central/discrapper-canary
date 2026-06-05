n.d(t, { A: () => eL });
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
    x = n(710315),
    E = n(534514),
    S = n(834730),
    _ = n(825484),
    I = n(821609),
    j = n(315240),
    v = n(403362),
    T = n(372684),
    N = n(226421),
    y = n(732774);
function b() {
    let e = (0, o.yK)([f.Ay], () => {
        let e = f.Ay.getLastClipsSession()?.newClipIds;
        return null == e
            ? []
            : f.Ay.getClipIds()
                  .slice(0, 4)
                  .filter((t) => e.includes(t))
                  .map((e) => f.Ay.getClipById(e))
                  .filter(v.Vq);
    });
    return (0, i.jsx)("div", {
        className: r()(y.vH, {
            [y.gb]: 1 === e.length,
            [y.$d]: 2 === e.length,
            [y.gS]: 3 === e.length,
            [y.hA]: e.length >= 4,
        }),
        children: Array.from({ ...e, length: 4 })
            .map((e, t) =>
                null != e
                    ? e.type === T.nQ.VOICE_CLIP
                        ? (0, i.jsx)(N.A, { className: y.xn }, e.id)
                        : (0, i.jsx)("img", { alt: "", className: y.xn, src: e.thumbnail }, e.id)
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
                  (0, i.jsx)("div", { className: R.Yt, children: (0, i.jsx)(b, {}) }),
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
    k = n(352527),
    O = n(267102),
    P = n(969632),
    G = n(910425),
    U = n(406704),
    w = n(885386),
    F = n(761640),
    H = n(629016),
    B = n(186111),
    V = n(576705),
    K = n(461213),
    z = n(625494),
    W = n(723702),
    q = n(518960),
    $ = n(767089),
    J = n(554146),
    Z = n(477782),
    Y = n(177953),
    X = n(950305),
    Q = n(980707),
    ee = n(308368),
    et = n(688810),
    en = n(826673),
    el = n(970244),
    ei = n(867455),
    es = n(780057),
    ea = n(747926),
    er = n(174459),
    eo = n(453771),
    ec = n(408018);
n(321073);
var ed = n(661531),
    eu = n(81369),
    eh = n(176781),
    em = n(523056),
    eg = n(642846),
    ep = n(323384),
    eA = n(111219),
    ef = n(835723),
    eC = n(39623),
    ex = n(406810),
    eE = n(152367),
    eS = n(55730),
    e_ = n(47167),
    eI = n(994500),
    ej = n(287809),
    ev = n(652215),
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
    ey = n(412136);
let eb = /(.*)```(\w+)\n(.*)```(.*)/s;
function eM(e) {
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
        { analyticsLocations: p } = (0, et.Ay)(),
        A = (0, el.s)({ channel: t }),
        f = (0, o.bG)([es.A], () => es.A.isInProgress());
    function C() {
        (0, ea.Tv)(t, void 0, "Plus Button");
    }
    function x() {
        er.default.track(ev.HAw.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), m("/", (0, ec.x7)("/"));
    }
    function E() {
        g();
    }
    function S() {
        (0, en.Dr)(J.M.POLLS_CHAT_INPUT_COACHMARK, { dismissAction: eN.i.TAKE_ACTION }),
            (0, c.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("83644"), n.e("42322")]).then(n.bind(n, 143657));
                    return (n) => (0, i.jsx)(e, { ...n, channel: t });
                },
                { modalKey: ey.sm },
            );
    }
    function _() {
        let e = h,
            n = "txt",
            l = "",
            i = h.match(eb);
        null != i && ((l = i[1]), (n = i[2]), (e = i[3]), (l += i[4])),
            (0, q.R)([(0, eo.VE)(new Blob([e], { type: "text/plain" }), `message.${n}`, "text/plain")], t, u),
            z._.dispatchToLastSubscribed(ev.jej.CLEAR_TEXT),
            "" !== l && z._.dispatchToLastSubscribed(ev.jej.INSERT_TEXT, { plainText: l });
    }
    return (
        s.useEffect(() => {
            er.default.track(ev.HAw.OPEN_POPOUT, { type: "Send Attachment", channel_id: t.id, guild_id: t.guild_id });
        }, [t.guild_id, t.id]),
        (0, i.jsx)(Q.W, {
            "data-menu-migrated": !0,
            onSelect: d,
            navId: "channel-attach",
            onClose: r,
            "aria-label": M.intl.string(M.t.Xm41aV),
            children: l.map(function (e) {
                switch (e.type) {
                    case eT.UPLOAD_A_FILE:
                        return (0, i.jsx)(
                            Z.Dr,
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
                            Z.Dr,
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
                            Z.Dr,
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
                    case eT.POLL:
                        return (0, i.jsx)(
                            Z.Dr,
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
                            Z.Dr,
                            {
                                id: "play",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void ee.A.sendActivityInvite({
                                            channelId: t.id,
                                            type: ev.xL.JOIN,
                                            activity: n,
                                            location: p[p.length - 1],
                                        })
                                    );
                                },
                            },
                            "play",
                        );
                    case eT.INVITE_TO_LISTEN:
                        return (0, i.jsx)(
                            Z.Dr,
                            {
                                id: "listen",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void ee.A.sendActivityInvite({
                                            channelId: t.id,
                                            type: ev.xL.LISTEN,
                                            activity: n,
                                            location: p[p.length - 1],
                                        })
                                    );
                                },
                            },
                            "listen",
                        );
                    case eT.INVITE_TO_WATCH:
                        return (0, i.jsx)(
                            Z.Dr,
                            {
                                id: "watch",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void ee.A.sendActivityInvite({
                                            channelId: t.id,
                                            type: ev.xL.WATCH,
                                            activity: n,
                                            location: p[p.length - 1],
                                        })
                                    );
                                },
                            },
                            "watch",
                        );
                    case eT.CREATE_THREAD:
                        return (0, i.jsx)(
                            Z.Dr,
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
                            Z.Dr,
                            {
                                id: "SLASH_COMMAND",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: x,
                            },
                            "SLASH_COMMAND",
                        );
                    case eT.SCHEDULED_MESSAGE:
                        return (0, i.jsx)(
                            Z.Dr,
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
                    case eT.SUMMARIZE_THREAD:
                        return (0, i.jsx)(
                            Z.Dr,
                            {
                                id: "summarize_thread",
                                label: e.display,
                                iconLeft: e.icon,
                                leadingAccessory: { type: "icon", icon: e.icon },
                                action: () => ei.A.summarizeThread(t),
                                loading: f,
                                disabled: f,
                                children: f
                                    ? null
                                    : (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(
                                                  Z.Dr,
                                                  {
                                                      id: "summarize_thread_for_everyone",
                                                      label: M.intl.string(M.t.eCzSdd),
                                                      iconLeft: Y.n,
                                                      leadingAccessory: { type: "icon", icon: Y.n },
                                                      action: () => ei.A.summarizeThread(t, !1),
                                                  },
                                                  "summarize_thread_for_everyone",
                                              ),
                                              (0, i.jsx)(
                                                  Z.Dr,
                                                  {
                                                      id: "summarize_thread_for_me",
                                                      label: M.intl.string(M.t["HOe+Hq"]),
                                                      iconLeft: X.n,
                                                      leadingAccessory: { type: "icon", icon: X.n },
                                                      action: () => ei.A.summarizeThread(t),
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
var eR = n(696016),
    eD = n(644268);
let eL = s.memo(function (e) {
    let { className: t, channel: l, draftType: a, editorTextContent: E, setValue: S, canOnlyUseTextCommands: _ } = e,
        I = (0, O.Us)(),
        j = s.useRef(null),
        v = s.useRef(null),
        T = (0, o.bG)([K.A], () => K.A.getActivities()),
        N = (0, C.Et)(),
        y = (0, o.bG)([f.Ay], () => f.Ay.getLastClipsSession()),
        b = (0, o.yK)([f.Ay], () => f.Ay.getNewClipIds()),
        R = (0, o.bG)([F.Ay], () => null == F.Ay.getCurrentSidebarChannelId(l.id)),
        J = (0, o.yK)(
            [H.A],
            () => (l.type === ev.rbe.DM ? T.filter((e) => !H.A.getParty(e.party?.id)?.has(l.getRecipientId())) : T),
            [T, l],
        ),
        { topBarButton: Z } = x.$.useConfig({ location: "ChannelAttachButton" }),
        { enableQuickBar: Y } = A.h.useConfig({ location: "ChannelAttachButton" }),
        X = !Z && !Y && I !== ev.BRT.OVERLAY && I !== ev.BRT.POPOUT,
        { onShareClick: Q } = (0, k.A)(l.id),
        ee = (0, o.bG)([f.Ay], () => f.Ay.getSettings().remindersEnabled),
        et = (0, c.useModalsStore)((e) => (0, c.hasModalOpenSelector)(e, eR.nm)),
        en = (0, o.bG)([B.A], () => B.A.hasLayers()),
        el = (0, o.bG)([f.Ay], () => f.Ay.hasClips()),
        [ei, es] = s.useState(null),
        ea = (0, p.sw)() && (N || el),
        er = l.isPrivate(),
        eo = (0, o.bG)([V.A], () => er || (V.A.can(ev.xBc.ATTACH_FILES, l) && V.A.can(ev.xBc.SEND_MESSAGES, l))),
        ec = (0, m.A)(y);
    function eT() {
        (0, c.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("29169"),
                    n.e("32490"),
                    n.e("88623"),
                    n.e("79825"),
                    n.e("71254"),
                    n.e("31983"),
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
                        onClipClick: (e) => Q({ clips: [e] }),
                    });
            },
            { modalKey: eR.nm },
        ),
            es(null);
    }
    ec?.newClipIds.length !== y?.newClipIds.length &&
        (y?.newClipIds.length ?? 0) > 0 &&
        null == ei &&
        ee &&
        R &&
        !et &&
        X &&
        !en &&
        es("recentClips"),
        s.useEffect(() => {
            let e = (e) => {
                let { channelId: t } = e;
                t === l.id && j.current?.activateUploadDialogue();
            };
            return (
                z._.subscribe(ev.jej.UPLOAD_FILE, e),
                () => {
                    z._.unsubscribe(ev.jej.UPLOAD_FILE, e);
                }
            );
        });
    let eN = (0, U.n)(l),
        ey = (0, U.Tb)(l),
        eb = !w.D_.useSetting() && !(0, W.isAndroidWeb)() && null != window.ResizeObserver,
        eL = (0, P.I7)(l ?? void 0),
        ek = (0, G.Sc)(),
        eO = (0, g.b)(),
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
                    (m.push({ type: "UPLOAD_A_FILE", icon: eu.H, display: M.intl.string(M.t["d3+iYs"]) }),
                    m.push({ type: "UPLOAD_TEXT_AS_FILE", icon: eu.H, display: M.intl.string(M.t["G9s+EM"]) })),
                s &&
                    t &&
                    d !== ev.BRT.POPOUT &&
                    d !== ev.BRT.OVERLAY &&
                    m.push({
                        type: "CLIPS",
                        icon: eh.x,
                        display: M.intl.string(M.t.o034cv),
                        badgeVal: o,
                        badgeColor: ed.A.colors.BACKGROUND_BRAND.css,
                    }),
                n && m.push({ type: "CREATE_THREAD", icon: em.G, display: M.intl.string(M.t.rBIGBL) }),
                c && m.push({ type: "POLL", icon: eg.Y, display: M.intl.string(M.t.Flr51u) }),
                l && i && m.push({ type: "SLASH_COMMAND", icon: ep.k, display: M.intl.string(M.t.Bbvp6G) }),
                r.forEach((e) => {
                    !(0, eS.A)(e, ev.jUm.EMBEDDED) &&
                        (e.type === ev.$pd.PLAYING &&
                            (0, eS.A)(e, ev.jUm.JOIN) &&
                            m.push({
                                type: "INVITE_TO_GAME",
                                icon: eA.L,
                                display: M.intl.formatToPlainString(M.t["KHLo+F"], {
                                    channel: (0, e_.m1)(a, ej.default, eI.A, !0),
                                    game: null != e ? e.name : "",
                                }),
                                activity: e,
                            }),
                        e.type === ev.$pd.LISTENING &&
                            (0, eS.A)(e, ev.jUm.SYNC) &&
                            m.push({
                                type: "INVITE_TO_LISTEN",
                                icon: ef.J,
                                display: M.intl.formatToPlainString(M.t.I479px, {
                                    channel: (0, e_.m1)(a, ej.default, eI.A, !0),
                                    name: null != e ? e.name : "",
                                }),
                                activity: e,
                            }),
                        e.type === ev.$pd.WATCHING &&
                            (0, eS.A)(e, ev.jUm.SYNC) &&
                            m.push({
                                type: "INVITE_TO_WATCH",
                                icon: eC.b,
                                display: M.intl.formatToPlainString(M.t["EvCP/g"], {
                                    channel: (0, e_.m1)(a, ej.default, eI.A, !0),
                                    name: null != e ? e.name : "",
                                }),
                                activity: e,
                            }));
                }),
                u && m.push({ type: "SCHEDULED_MESSAGE", icon: ex.O, display: M.intl.string(M.t["3+ii4F"]) }),
                a.isThread() &&
                    h &&
                    m.push({ type: "SUMMARIZE_THREAD", icon: eE.D, display: M.intl.string(M.t.EXfguE) }),
                m
            );
        })({
            canAttachFiles: eo,
            canStartThreads: eN || ey,
            useSlate: eb,
            hasClips: ea,
            canUseApplicationCommands: !_,
            channel: l,
            activities: J,
            newClipsCount: b?.length ?? 0,
            canPostPolls: eL,
            appContext: I,
            canSendScheduledMessages: ek,
            canSummarizeThreads: eO,
        });
    if (0 === eP.length) return null;
    let eG = (0, i.jsx)(d.p, { size: "refresh_sm", color: "currentColor", colorClass: eD.dW }),
        eU = (0, i.jsx)(u.Y, {
            targetElementRef: v,
            shouldShow: null != ei,
            animation: u.Y.Animation.NONE,
            align: "recentClips" === ei ? "center" : "left",
            position: "top",
            positionKey: ei ?? "null",
            onRequestOpen: () => {
                es("attachMenu");
            },
            onRequestClose: () => {
                (0, c.hasAnyModalOpen)() || es(null);
            },
            renderPopout: (e) => {
                switch (ei) {
                    case "recentClips":
                        return (0, i.jsx)(D, { ...e, onOpenClips: eT, lastClipsSession: y });
                    case "attachMenu":
                        return (0, i.jsx)(eM, {
                            ...e,
                            onClose: () => es(null),
                            options: eP,
                            channel: l,
                            onFileUpload: () => j.current?.activateUploadDialogue(),
                            draftType: a,
                            editorTextContent: E,
                            setValue: S,
                            openClips: eT,
                        });
                    default:
                        throw Error("Invalid popout type provided");
                }
            },
            children: (e) =>
                (0, i.jsx)($.A, {
                    ref: v,
                    className: r()(eD.g$, t),
                    childClassName: eD.wh,
                    isActive: !1,
                    "aria-label": M.intl.string(M.t.d56gCa),
                    onDoubleClick: eo ? () => j.current?.activateUploadDialogue() : void 0,
                    "aria-haspopup": "menu",
                    ...e,
                    children: eG,
                }),
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: eD.EJ,
                children: (0, i.jsx)(h.A, {
                    ref: j,
                    onChange: (e) => {
                        var t, n;
                        (t = e.currentTarget.files),
                            null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code
                                ? (0, q.V)(l, [])
                                : (0, q.R)(t, l, a, { requireConfirm: !0, origin: "file_picker" }),
                            z._.dispatchToLastSubscribed(ev.jej.TEXTAREA_FOCUS),
                            (e.currentTarget.value = "");
                    },
                    multiple: l.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, i.jsx)("div", { className: eD.Jd, children: eU }),
        ],
    });
});
