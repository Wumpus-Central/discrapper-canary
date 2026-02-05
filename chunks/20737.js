n.d(t, { A: () => k });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(397927),
    c = n(817363),
    d = n(475743),
    u = n(147087),
    h = n(734066),
    m = n(274372),
    A = n(572164),
    p = n(157207),
    g = n(794905),
    f = n(450510),
    _ = n(267102),
    E = n(969632),
    C = n(566908),
    x = n(406704),
    S = n(253932),
    T = n(761640),
    I = n(186111),
    N = n(576705),
    v = n(461213),
    y = n(203982),
    b = n(723702),
    R = n(518960),
    j = n(545428),
    M = n(38198),
    D = n(447155),
    O = n(652215),
    L = n(696016),
    P = n(985018),
    w = n(275825);
let k = l.memo(function (e) {
    let { className: t, channel: a, draftType: k, editorTextContent: U, setValue: G, canOnlyUseTextCommands: F } = e,
        H = (0, _.Us)(),
        B = l.useRef(null),
        V = l.useRef(null),
        W = (0, r.bG)([v.A], () => v.A.getActivities()),
        K = (0, A.Et)(),
        z = (0, r.bG)([m.A], () => m.A.getLastClipsSession()),
        Y = (0, r.yK)([m.A], () => m.A.getNewClipIds()),
        q = (0, r.bG)([T.Ay], () => null == T.Ay.getCurrentSidebarChannelId(a.id)),
        { showClipsHeaderEntrypoint: J } = h.L_.useExperiment(
            { location: "ChannelAttachButton" },
            { autoTrackExposure: !1 },
        ),
        { onShareClick: $ } = (0, g.A)(a.id),
        Z = (0, r.bG)([f.HP], () => f.HP.hasHotspot(f._2.CLIPS_CHANNEL_ATTACH_REMINDER)),
        X = (0, o.red)((e) => (0, o.fDT)(e, L.nm)),
        Q = (0, r.bG)([I.A], () => I.A.hasLayers()),
        ee = (0, r.bG)([m.A], () => m.A.hasClips()),
        [et, en] = l.useState(null),
        ei = (0, h.sw)() && (K || ee),
        el = a.isPrivate(),
        ea = (0, r.bG)([N.A], () => el || (N.A.can(O.xBc.ATTACH_FILES, a) && N.A.can(O.xBc.SEND_MESSAGES, a))),
        es = (0, d.A)(z);
    function er() {
        (0, o.mMO)(
            async () => {
                let { default: e } = await Promise.all([n.e("4918"), n.e("98184")]).then(n.bind(n, 543428));
                return (t) => (0, i.jsx)(e, { ...t, channelId: a.id, onClipClick: (e) => $({ clips: [e] }) });
            },
            { modalKey: L.nm },
        ),
            en(null);
    }
    es?.newClipIds.length !== z?.newClipIds.length &&
        (z?.newClipIds.length ?? 0) > 0 &&
        null == et &&
        Z &&
        q &&
        !X &&
        !J &&
        !Q &&
        en("recentClips"),
        l.useEffect(() => {
            let e = (e) => {
                let { channelId: t } = e;
                t === a.id && B.current?.activateUploadDialogue();
            };
            return (
                y._.subscribe(O.jej.UPLOAD_FILE, e),
                () => {
                    y._.unsubscribe(O.jej.UPLOAD_FILE, e);
                }
            );
        });
    let eo = (0, x.n)(a),
        ec = (0, x.Tb)(a),
        ed = !S.D_.useSetting() && !(0, b.isAndroidWeb)() && null != window.ResizeObserver,
        eu = (0, E.I7)(a ?? void 0),
        eh = (0, C.Sc)({ location: "ChannelAttachButton" }),
        em = (0, u.b)(),
        eA = Y?.length ?? 0,
        ep = (0, D.A)({
            canAttachFiles: ea,
            canStartThreads: eo || ec,
            useSlate: ed,
            hasClips: ei,
            canUseApplicationCommands: !F,
            channel: a,
            activities: W,
            newClipsCount: eA,
            canPostPolls: eu,
            appContext: H,
            canSendScheduledMessages: eh,
            canSummarizeThreads: em,
        });
    if (0 === ep.length) return null;
    let eg = (0, i.jsx)(o.pa$, { size: "refresh_sm", color: "currentColor", colorClass: w.dW }),
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
                        return (0, i.jsx)(p.A, { ...e, onOpenClips: er, lastClipsSession: z });
                    case "attachMenu":
                        return (0, i.jsx)(M.A, {
                            ...e,
                            onClose: () => en(null),
                            options: ep,
                            channel: a,
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
                (0, i.jsx)(j.A, {
                    ref: V,
                    className: s()(w.g$, t),
                    childClassName: w.wh,
                    isActive: !1,
                    "aria-label": P.intl.string(P.t.d56gCa),
                    onDoubleClick: ea ? () => B.current?.activateUploadDialogue() : void 0,
                    "aria-haspopup": "menu",
                    ...e,
                    children: eg,
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
                                ? (0, R.V)(a, [])
                                : (0, R.R)(t, a, k, { requireConfirm: !0, origin: "file_picker" }),
                            y._.dispatchToLastSubscribed(O.jej.TEXTAREA_FOCUS),
                            (e.currentTarget.value = "");
                    },
                    multiple: a.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, i.jsx)("div", { className: w.Jd, children: ef }),
        ],
    });
});
