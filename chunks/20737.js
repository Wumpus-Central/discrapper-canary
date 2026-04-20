n.d(t, { A: () => G });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    c = n(817363),
    d = n(475743),
    u = n(147087),
    h = n(734066),
    m = n(274372),
    A = n(572164),
    g = n(710315),
    _ = n(157207),
    p = n(794905),
    f = n(450510),
    E = n(267102),
    C = n(969632),
    x = n(566908),
    S = n(406704),
    I = n(253932),
    T = n(761640),
    v = n(629016),
    N = n(186111),
    y = n(576705),
    b = n(461213),
    j = n(203982),
    R = n(723702),
    M = n(518960),
    L = n(545428),
    D = n(38198),
    O = n(447155),
    P = n(652215),
    k = n(696016),
    w = n(985018),
    U = n(644268);
let G = l.memo(function (e) {
    let { className: t, channel: s, draftType: G, editorTextContent: F, setValue: B, canOnlyUseTextCommands: H } = e,
        V = (0, E.Us)(),
        W = l.useRef(null),
        K = l.useRef(null),
        z = (0, r.bG)([b.A], () => b.A.getActivities()),
        Y = (0, A.Et)(),
        J = (0, r.bG)([m.A], () => m.A.getLastClipsSession()),
        q = (0, r.yK)([m.A], () => m.A.getNewClipIds()),
        $ = (0, r.bG)([T.Ay], () => null == T.Ay.getCurrentSidebarChannelId(s.id)),
        Z = (0, r.yK)(
            [v.A],
            () => (s.type === P.rbe.DM ? z.filter((e) => !v.A.getParty(e.party?.id)?.has(s.getRecipientId())) : z),
            [z, s],
        ),
        { showClipsHeaderEntrypoint: X } = h.L_.useConfig({ location: "ChannelAttachButton" }),
        { topBarButton: Q } = g.$.useConfig({ location: "ChannelAttachButton" }),
        { onShareClick: ee } = (0, p.A)(s.id),
        et = (0, r.bG)([f.HP], () => f.HP.hasHotspot(f._2.CLIPS_CHANNEL_ATTACH_REMINDER)),
        en = (0, o.red)((e) => (0, o.fDT)(e, k.nm)),
        ei = (0, r.bG)([N.A], () => N.A.hasLayers()),
        el = (0, r.bG)([m.A], () => m.A.hasClips()),
        [es, ea] = l.useState(null),
        er = (0, h.sw)() && (Y || el),
        eo = s.isPrivate(),
        ec = (0, r.bG)([y.A], () => eo || (y.A.can(P.xBc.ATTACH_FILES, s) && y.A.can(P.xBc.SEND_MESSAGES, s))),
        ed = (0, d.A)(J);
    function eu() {
        (0, o.mMO)(
            async () => {
                let { default: e } = await Promise.all([n.e("42784"), n.e("90333")]).then(n.bind(n, 543428));
                return (t) => (0, i.jsx)(e, { ...t, channelId: s.id, onClipClick: (e) => ee({ clips: [e] }) });
            },
            { modalKey: k.nm },
        ),
            ea(null);
    }
    ed?.newClipIds.length !== J?.newClipIds.length &&
        (J?.newClipIds.length ?? 0) > 0 &&
        null == es &&
        et &&
        $ &&
        !en &&
        !X &&
        !Q &&
        !ei &&
        ea("recentClips"),
        l.useEffect(() => {
            let e = (e) => {
                let { channelId: t } = e;
                t === s.id && W.current?.activateUploadDialogue();
            };
            return (
                j._.subscribe(P.jej.UPLOAD_FILE, e),
                () => {
                    j._.unsubscribe(P.jej.UPLOAD_FILE, e);
                }
            );
        });
    let eh = (0, S.n)(s),
        em = (0, S.Tb)(s),
        eA = !I.D_.useSetting() && !(0, R.isAndroidWeb)() && null != window.ResizeObserver,
        eg = (0, C.I7)(s ?? void 0),
        e_ = (0, x.Sc)(),
        ep = (0, u.b)(),
        ef = q?.length ?? 0,
        eE = (0, O.A)({
            canAttachFiles: ec,
            canStartThreads: eh || em,
            useSlate: eA,
            hasClips: er,
            canUseApplicationCommands: !H,
            channel: s,
            activities: Z,
            newClipsCount: ef,
            canPostPolls: eg,
            appContext: V,
            canSendScheduledMessages: e_,
            canSummarizeThreads: ep,
        });
    if (0 === eE.length) return null;
    let eC = (0, i.jsx)(o.pa$, { size: "refresh_sm", color: "currentColor", colorClass: U.dW }),
        ex = (0, i.jsx)(o.YNO, {
            targetElementRef: K,
            shouldShow: null != es,
            animation: o.YNO.Animation.NONE,
            align: "recentClips" === es ? "center" : "left",
            position: "top",
            positionKey: es ?? "null",
            onRequestOpen: () => {
                ea("attachMenu");
            },
            onRequestClose: () => {
                (0, o.ueM)() || ea(null);
            },
            renderPopout: (e) => {
                switch (es) {
                    case "recentClips":
                        return (0, i.jsx)(_.A, { ...e, onOpenClips: eu, lastClipsSession: J });
                    case "attachMenu":
                        return (0, i.jsx)(D.A, {
                            ...e,
                            onClose: () => ea(null),
                            options: eE,
                            channel: s,
                            onFileUpload: () => W.current?.activateUploadDialogue(),
                            draftType: G,
                            editorTextContent: F,
                            setValue: B,
                            openClips: eu,
                        });
                    default:
                        throw Error("Invalid popout type provided");
                }
            },
            children: (e) =>
                (0, i.jsx)(L.A, {
                    ref: K,
                    className: a()(U.g$, t),
                    childClassName: U.wh,
                    isActive: !1,
                    "aria-label": w.intl.string(w.t.d56gCa),
                    onDoubleClick: ec ? () => W.current?.activateUploadDialogue() : void 0,
                    "aria-haspopup": "menu",
                    ...e,
                    children: eC,
                }),
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: U.EJ,
                children: (0, i.jsx)(c.A, {
                    ref: W,
                    onChange: (e) => {
                        var t, n;
                        (t = e.currentTarget.files),
                            null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code
                                ? (0, M.V)(s, [])
                                : (0, M.R)(t, s, G, { requireConfirm: !0, origin: "file_picker" }),
                            j._.dispatchToLastSubscribed(P.jej.TEXTAREA_FOCUS),
                            (e.currentTarget.value = "");
                    },
                    multiple: s.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, i.jsx)("div", { className: U.Jd, children: ex }),
        ],
    });
});
