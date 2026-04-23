n.d(t, { A: () => F });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(192308),
    c = n(663341),
    d = n(265872),
    u = n(817363),
    h = n(475743),
    m = n(147087),
    A = n(734066),
    g = n(274372),
    _ = n(572164),
    p = n(710315),
    f = n(157207),
    E = n(794905),
    C = n(267102),
    x = n(969632),
    S = n(566908),
    I = n(406704),
    v = n(253932),
    N = n(761640),
    T = n(629016),
    y = n(186111),
    b = n(576705),
    j = n(461213),
    R = n(203982),
    M = n(723702),
    L = n(518960),
    D = n(545428),
    P = n(38198),
    O = n(447155),
    w = n(652215),
    U = n(696016),
    k = n(985018),
    G = n(644268);
let F = l.memo(function (e) {
    let { className: t, channel: a, draftType: F, editorTextContent: H, setValue: B, canOnlyUseTextCommands: V } = e,
        W = (0, C.Us)(),
        z = l.useRef(null),
        K = l.useRef(null),
        Y = (0, r.bG)([j.A], () => j.A.getActivities()),
        q = (0, _.Et)(),
        J = (0, r.bG)([g.A], () => g.A.getLastClipsSession()),
        $ = (0, r.yK)([g.A], () => g.A.getNewClipIds()),
        Z = (0, r.bG)([N.Ay], () => null == N.Ay.getCurrentSidebarChannelId(a.id)),
        X = (0, r.yK)(
            [T.A],
            () => (a.type === w.rbe.DM ? Y.filter((e) => !T.A.getParty(e.party?.id)?.has(a.getRecipientId())) : Y),
            [Y, a],
        ),
        { showClipsHeaderEntrypoint: Q } = A.L_.useConfig({ location: "ChannelAttachButton" }),
        { topBarButton: ee } = p.$.useConfig({ location: "ChannelAttachButton" }),
        { onShareClick: et } = (0, E.A)(a.id),
        en = (0, r.bG)([g.A], () => g.A.getSettings().remindersEnabled),
        ei = (0, o.useModalsStore)((e) => (0, o.hasModalOpenSelector)(e, U.nm)),
        el = (0, r.bG)([y.A], () => y.A.hasLayers()),
        ea = (0, r.bG)([g.A], () => g.A.hasClips()),
        [es, er] = l.useState(null),
        eo = (0, A.sw)() && (q || ea),
        ec = a.isPrivate(),
        ed = (0, r.bG)([b.A], () => ec || (b.A.can(w.xBc.ATTACH_FILES, a) && b.A.can(w.xBc.SEND_MESSAGES, a))),
        eu = (0, h.A)(J);
    function eh() {
        (0, o.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("42784"), n.e("24588")]).then(n.bind(n, 543428));
                return (t) => (0, i.jsx)(e, { ...t, channelId: a.id, onClipClick: (e) => et({ clips: [e] }) });
            },
            { modalKey: U.nm },
        ),
            er(null);
    }
    eu?.newClipIds.length !== J?.newClipIds.length &&
        (J?.newClipIds.length ?? 0) > 0 &&
        null == es &&
        en &&
        Z &&
        !ei &&
        !Q &&
        !ee &&
        !el &&
        er("recentClips"),
        l.useEffect(() => {
            let e = (e) => {
                let { channelId: t } = e;
                t === a.id && z.current?.activateUploadDialogue();
            };
            return (
                R._.subscribe(w.jej.UPLOAD_FILE, e),
                () => {
                    R._.unsubscribe(w.jej.UPLOAD_FILE, e);
                }
            );
        });
    let em = (0, I.n)(a),
        eA = (0, I.Tb)(a),
        eg = !v.D_.useSetting() && !(0, M.isAndroidWeb)() && null != window.ResizeObserver,
        e_ = (0, x.I7)(a ?? void 0),
        ep = (0, S.Sc)(),
        ef = (0, m.b)(),
        eE = $?.length ?? 0,
        eC = (0, O.A)({
            canAttachFiles: ed,
            canStartThreads: em || eA,
            useSlate: eg,
            hasClips: eo,
            canUseApplicationCommands: !V,
            channel: a,
            activities: X,
            newClipsCount: eE,
            canPostPolls: e_,
            appContext: W,
            canSendScheduledMessages: ep,
            canSummarizeThreads: ef,
        });
    if (0 === eC.length) return null;
    let ex = (0, i.jsx)(c.p, { size: "refresh_sm", color: "currentColor", colorClass: G.dW }),
        eS = (0, i.jsx)(d.Y, {
            targetElementRef: K,
            shouldShow: null != es,
            animation: d.Y.Animation.NONE,
            align: "recentClips" === es ? "center" : "left",
            position: "top",
            positionKey: es ?? "null",
            onRequestOpen: () => {
                er("attachMenu");
            },
            onRequestClose: () => {
                (0, o.hasAnyModalOpen)() || er(null);
            },
            renderPopout: (e) => {
                switch (es) {
                    case "recentClips":
                        return (0, i.jsx)(f.A, { ...e, onOpenClips: eh, lastClipsSession: J });
                    case "attachMenu":
                        return (0, i.jsx)(P.A, {
                            ...e,
                            onClose: () => er(null),
                            options: eC,
                            channel: a,
                            onFileUpload: () => z.current?.activateUploadDialogue(),
                            draftType: F,
                            editorTextContent: H,
                            setValue: B,
                            openClips: eh,
                        });
                    default:
                        throw Error("Invalid popout type provided");
                }
            },
            children: (e) =>
                (0, i.jsx)(D.A, {
                    ref: K,
                    className: s()(G.g$, t),
                    childClassName: G.wh,
                    isActive: !1,
                    "aria-label": k.intl.string(k.t.d56gCa),
                    onDoubleClick: ed ? () => z.current?.activateUploadDialogue() : void 0,
                    "aria-haspopup": "menu",
                    ...e,
                    children: ex,
                }),
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: G.EJ,
                children: (0, i.jsx)(u.A, {
                    ref: z,
                    onChange: (e) => {
                        var t, n;
                        (t = e.currentTarget.files),
                            null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code
                                ? (0, L.V)(a, [])
                                : (0, L.R)(t, a, F, { requireConfirm: !0, origin: "file_picker" }),
                            R._.dispatchToLastSubscribed(w.jej.TEXTAREA_FOCUS),
                            (e.currentTarget.value = "");
                    },
                    multiple: a.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, i.jsx)("div", { className: G.Jd, children: eS }),
        ],
    });
});
