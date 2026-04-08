n.d(t, { A: () => U });
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
    g = n(157207),
    p = n(794905),
    f = n(450510),
    _ = n(267102),
    E = n(969632),
    x = n(566908),
    C = n(406704),
    S = n(253932),
    T = n(761640),
    I = n(629016),
    N = n(186111),
    v = n(576705),
    y = n(461213),
    b = n(203982),
    j = n(723702),
    R = n(518960),
    M = n(545428),
    D = n(38198),
    O = n(447155),
    L = n(652215),
    P = n(696016),
    k = n(985018),
    w = n(91167);
let U = l.memo(function (e) {
    let { className: t, channel: s, draftType: U, editorTextContent: G, setValue: F, canOnlyUseTextCommands: B } = e,
        H = (0, _.Us)(),
        V = l.useRef(null),
        K = l.useRef(null),
        W = (0, r.bG)([y.A], () => y.A.getActivities()),
        z = (0, A.Et)(),
        q = (0, r.bG)([m.A], () => m.A.getLastClipsSession()),
        Y = (0, r.yK)([m.A], () => m.A.getNewClipIds()),
        J = (0, r.bG)([T.Ay], () => null == T.Ay.getCurrentSidebarChannelId(s.id)),
        $ = (0, r.yK)(
            [I.A],
            () => (s.type === L.rbe.DM ? W.filter((e) => !I.A.getParty(e.party?.id)?.has(s.getRecipientId())) : W),
            [W, s],
        ),
        { showClipsHeaderEntrypoint: Z } = h.L_.useConfig({ location: "ChannelAttachButton" }),
        { onShareClick: X } = (0, p.A)(s.id),
        Q = (0, r.bG)([f.HP], () => f.HP.hasHotspot(f._2.CLIPS_CHANNEL_ATTACH_REMINDER)),
        ee = (0, o.red)((e) => (0, o.fDT)(e, P.nm)),
        et = (0, r.bG)([N.A], () => N.A.hasLayers()),
        en = (0, r.bG)([m.A], () => m.A.hasClips()),
        [ei, el] = l.useState(null),
        es = (0, h.sw)() && (z || en),
        ea = s.isPrivate(),
        er = (0, r.bG)([v.A], () => ea || (v.A.can(L.xBc.ATTACH_FILES, s) && v.A.can(L.xBc.SEND_MESSAGES, s))),
        eo = (0, d.A)(q);
    function ec() {
        (0, o.mMO)(
            async () => {
                let { default: e } = await Promise.all([n.e("42784"), n.e("24035")]).then(n.bind(n, 543428));
                return (t) => (0, i.jsx)(e, { ...t, channelId: s.id, onClipClick: (e) => X({ clips: [e] }) });
            },
            { modalKey: P.nm },
        ),
            el(null);
    }
    eo?.newClipIds.length !== q?.newClipIds.length &&
        (q?.newClipIds.length ?? 0) > 0 &&
        null == ei &&
        Q &&
        J &&
        !ee &&
        !Z &&
        !et &&
        el("recentClips"),
        l.useEffect(() => {
            let e = (e) => {
                let { channelId: t } = e;
                t === s.id && V.current?.activateUploadDialogue();
            };
            return (
                b._.subscribe(L.jej.UPLOAD_FILE, e),
                () => {
                    b._.unsubscribe(L.jej.UPLOAD_FILE, e);
                }
            );
        });
    let ed = (0, C.n)(s),
        eu = (0, C.Tb)(s),
        eh = !S.D_.useSetting() && !(0, j.isAndroidWeb)() && null != window.ResizeObserver,
        em = (0, E.I7)(s ?? void 0),
        eA = (0, x.Sc)(),
        eg = (0, u.b)(),
        ep = Y?.length ?? 0,
        ef = (0, O.A)({
            canAttachFiles: er,
            canStartThreads: ed || eu,
            useSlate: eh,
            hasClips: es,
            canUseApplicationCommands: !B,
            channel: s,
            activities: $,
            newClipsCount: ep,
            canPostPolls: em,
            appContext: H,
            canSendScheduledMessages: eA,
            canSummarizeThreads: eg,
        });
    if (0 === ef.length) return null;
    let e_ = (0, i.jsx)(o.pa$, { size: "refresh_sm", color: "currentColor", colorClass: w.dW }),
        eE = (0, i.jsx)(o.YNO, {
            targetElementRef: K,
            shouldShow: null != ei,
            animation: o.YNO.Animation.NONE,
            align: "recentClips" === ei ? "center" : "left",
            position: "top",
            positionKey: ei ?? "null",
            onRequestOpen: () => {
                el("attachMenu");
            },
            onRequestClose: () => {
                (0, o.ueM)() || el(null);
            },
            renderPopout: (e) => {
                switch (ei) {
                    case "recentClips":
                        return (0, i.jsx)(g.A, { ...e, onOpenClips: ec, lastClipsSession: q });
                    case "attachMenu":
                        return (0, i.jsx)(D.A, {
                            ...e,
                            onClose: () => el(null),
                            options: ef,
                            channel: s,
                            onFileUpload: () => V.current?.activateUploadDialogue(),
                            draftType: U,
                            editorTextContent: G,
                            setValue: F,
                            openClips: ec,
                        });
                    default:
                        throw Error("Invalid popout type provided");
                }
            },
            children: (e) =>
                (0, i.jsx)(M.A, {
                    ref: K,
                    className: a()(w.g$, t),
                    childClassName: w.wh,
                    isActive: !1,
                    "aria-label": k.intl.string(k.t.d56gCa),
                    onDoubleClick: er ? () => V.current?.activateUploadDialogue() : void 0,
                    "aria-haspopup": "menu",
                    ...e,
                    children: e_,
                }),
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: w.EJ,
                children: (0, i.jsx)(c.A, {
                    ref: V,
                    onChange: (e) => {
                        var t, n;
                        (t = e.currentTarget.files),
                            null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code
                                ? (0, R.V)(s, [])
                                : (0, R.R)(t, s, U, { requireConfirm: !0, origin: "file_picker" }),
                            b._.dispatchToLastSubscribed(L.jej.TEXTAREA_FOCUS),
                            (e.currentTarget.value = "");
                    },
                    multiple: s.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, i.jsx)("div", { className: w.Jd, children: eE }),
        ],
    });
});
