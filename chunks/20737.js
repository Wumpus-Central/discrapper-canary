n.d(t, { A: () => k });
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
    C = n(566908),
    x = n(406704),
    S = n(253932),
    T = n(761640),
    N = n(186111),
    I = n(576705),
    v = n(461213),
    y = n(203982),
    b = n(723702),
    j = n(518960),
    R = n(545428),
    M = n(38198),
    D = n(447155),
    O = n(652215),
    L = n(696016),
    P = n(985018),
    w = n(802607);
let k = l.memo(function (e) {
    let { className: t, channel: s, draftType: k, editorTextContent: U, setValue: G, canOnlyUseTextCommands: F } = e,
        H = (0, _.Us)(),
        B = l.useRef(null),
        V = l.useRef(null),
        K = (0, r.bG)([v.A], () => v.A.getActivities()),
        W = (0, A.Et)(),
        z = (0, r.bG)([m.A], () => m.A.getLastClipsSession()),
        Y = (0, r.yK)([m.A], () => m.A.getNewClipIds()),
        q = (0, r.bG)([T.Ay], () => null == T.Ay.getCurrentSidebarChannelId(s.id)),
        { showClipsHeaderEntrypoint: J } = h.L_.useExperiment(
            { location: "ChannelAttachButton" },
            { autoTrackExposure: !1 },
        ),
        { onShareClick: $ } = (0, p.A)(s.id),
        X = (0, r.bG)([f.HP], () => f.HP.hasHotspot(f._2.CLIPS_CHANNEL_ATTACH_REMINDER)),
        Z = (0, o.red)((e) => (0, o.fDT)(e, L.nm)),
        Q = (0, r.bG)([N.A], () => N.A.hasLayers()),
        ee = (0, r.bG)([m.A], () => m.A.hasClips()),
        [et, en] = l.useState(null),
        ei = (0, h.sw)() && (W || ee),
        el = s.isPrivate(),
        es = (0, r.bG)([I.A], () => el || (I.A.can(O.xBc.ATTACH_FILES, s) && I.A.can(O.xBc.SEND_MESSAGES, s))),
        ea = (0, d.A)(z);
    function er() {
        (0, o.mMO)(
            async () => {
                let { default: e } = await Promise.all([n.e("4918"), n.e("8894")]).then(n.bind(n, 543428));
                return (t) => (0, i.jsx)(e, { ...t, channelId: s.id, onClipClick: (e) => $({ clips: [e] }) });
            },
            { modalKey: L.nm },
        ),
            en(null);
    }
    ea?.newClipIds.length !== z?.newClipIds.length &&
        (z?.newClipIds.length ?? 0) > 0 &&
        null == et &&
        X &&
        q &&
        !Z &&
        !J &&
        !Q &&
        en("recentClips"),
        l.useEffect(() => {
            let e = (e) => {
                let { channelId: t } = e;
                t === s.id && B.current?.activateUploadDialogue();
            };
            return (
                y._.subscribe(O.jej.UPLOAD_FILE, e),
                () => {
                    y._.unsubscribe(O.jej.UPLOAD_FILE, e);
                }
            );
        });
    let eo = (0, x.n)(s),
        ec = (0, x.Tb)(s),
        ed = !S.D_.useSetting() && !(0, b.isAndroidWeb)() && null != window.ResizeObserver,
        eu = (0, E.I7)(s ?? void 0),
        eh = (0, C.Sc)({ location: "ChannelAttachButton" }),
        em = (0, u.b)(),
        eA = Y?.length ?? 0,
        eg = (0, D.A)({
            canAttachFiles: es,
            canStartThreads: eo || ec,
            useSlate: ed,
            hasClips: ei,
            canUseApplicationCommands: !F,
            channel: s,
            activities: K,
            newClipsCount: eA,
            canPostPolls: eu,
            appContext: H,
            canSendScheduledMessages: eh,
            canSummarizeThreads: em,
        });
    if (0 === eg.length) return null;
    let ep = (0, i.jsx)(o.pa$, { size: "refresh_sm", color: "currentColor", colorClass: w.dW }),
        ef = (0, i.jsx)(o.YNO, {
            targetElementRef: V,
            shouldShow: null != et,
            animation: o.YNO.Animation.NONE,
            align: "recentClips" === et ? "center" : "left",
            position: "top",
            positionKey: et ?? "null",
            onRequestOpen: () => {
                en("attachMenu");
            },
            onRequestClose: () => {
                (0, o.ueM)() || en(null);
            },
            renderPopout: (e) => {
                switch (et) {
                    case "recentClips":
                        return (0, i.jsx)(g.A, { ...e, onOpenClips: er, lastClipsSession: z });
                    case "attachMenu":
                        return (0, i.jsx)(M.A, {
                            ...e,
                            onClose: () => en(null),
                            options: eg,
                            channel: s,
                            onFileUpload: () => B.current?.activateUploadDialogue(),
                            draftType: k,
                            editorTextContent: U,
                            setValue: G,
                            openClips: er,
                        });
                    default:
                        throw Error("Invalid popout type provided");
                }
            },
            children: (e) =>
                (0, i.jsx)(R.A, {
                    ref: V,
                    className: a()(w.g$, t),
                    childClassName: w.wh,
                    isActive: !1,
                    "aria-label": P.intl.string(P.t.d56gCa),
                    onDoubleClick: es ? () => B.current?.activateUploadDialogue() : void 0,
                    "aria-haspopup": "menu",
                    ...e,
                    children: ep,
                }),
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: w.EJ,
                children: (0, i.jsx)(c.A, {
                    ref: B,
                    onChange: (e) => {
                        var t, n;
                        (t = e.currentTarget.files),
                            null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code
                                ? (0, j.V)(s, [])
                                : (0, j.R)(t, s, k, { requireConfirm: !0, origin: "file_picker" }),
                            y._.dispatchToLastSubscribed(O.jej.TEXTAREA_FOCUS),
                            (e.currentTarget.value = "");
                    },
                    multiple: s.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, i.jsx)("div", { className: w.Jd, children: ef }),
        ],
    });
});
