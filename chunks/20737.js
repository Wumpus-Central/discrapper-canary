n.d(t, { A: () => U });
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
    g = n(157207),
    _ = n(794905),
    p = n(450510),
    f = n(267102),
    E = n(969632),
    C = n(566908),
    x = n(406704),
    S = n(253932),
    I = n(761640),
    T = n(629016),
    v = n(186111),
    N = n(576705),
    y = n(461213),
    b = n(203982),
    j = n(723702),
    R = n(518960),
    M = n(545428),
    L = n(38198),
    O = n(447155),
    D = n(652215),
    P = n(696016),
    k = n(985018),
    w = n(334556);
let U = l.memo(function (e) {
    let { className: t, channel: a, draftType: U, editorTextContent: G, setValue: F, canOnlyUseTextCommands: H } = e,
        B = (0, f.Us)(),
        V = l.useRef(null),
        W = l.useRef(null),
        K = (0, r.bG)([y.A], () => y.A.getActivities()),
        z = (0, A.Et)(),
        Y = (0, r.bG)([m.A], () => m.A.getLastClipsSession()),
        J = (0, r.yK)([m.A], () => m.A.getNewClipIds()),
        q = (0, r.bG)([I.Ay], () => null == I.Ay.getCurrentSidebarChannelId(a.id)),
        $ = (0, r.yK)(
            [T.A],
            () => (a.type === D.rbe.DM ? K.filter((e) => !T.A.getParty(e.party?.id)?.has(a.getRecipientId())) : K),
            [K, a],
        ),
        { showClipsHeaderEntrypoint: Z } = h.L_.useConfig({ location: "ChannelAttachButton" }),
        { onShareClick: X } = (0, _.A)(a.id),
        Q = (0, r.bG)([p.HP], () => p.HP.hasHotspot(p._2.CLIPS_CHANNEL_ATTACH_REMINDER)),
        ee = (0, o.red)((e) => (0, o.fDT)(e, P.nm)),
        et = (0, r.bG)([v.A], () => v.A.hasLayers()),
        en = (0, r.bG)([m.A], () => m.A.hasClips()),
        [ei, el] = l.useState(null),
        ea = (0, h.sw)() && (z || en),
        es = a.isPrivate(),
        er = (0, r.bG)([N.A], () => es || (N.A.can(D.xBc.ATTACH_FILES, a) && N.A.can(D.xBc.SEND_MESSAGES, a))),
        eo = (0, d.A)(Y);
    function ec() {
        (0, o.mMO)(
            async () => {
                let { default: e } = await Promise.all([n.e("42784"), n.e("3101")]).then(n.bind(n, 543428));
                return (t) => (0, i.jsx)(e, { ...t, channelId: a.id, onClipClick: (e) => X({ clips: [e] }) });
            },
            { modalKey: P.nm },
        ),
            el(null);
    }
    eo?.newClipIds.length !== Y?.newClipIds.length &&
        (Y?.newClipIds.length ?? 0) > 0 &&
        null == ei &&
        Q &&
        q &&
        !ee &&
        !Z &&
        !et &&
        el("recentClips"),
        l.useEffect(() => {
            let e = (e) => {
                let { channelId: t } = e;
                t === a.id && V.current?.activateUploadDialogue();
            };
            return (
                b._.subscribe(D.jej.UPLOAD_FILE, e),
                () => {
                    b._.unsubscribe(D.jej.UPLOAD_FILE, e);
                }
            );
        });
    let ed = (0, x.n)(a),
        eu = (0, x.Tb)(a),
        eh = !S.D_.useSetting() && !(0, j.isAndroidWeb)() && null != window.ResizeObserver,
        em = (0, E.I7)(a ?? void 0),
        eA = (0, C.Sc)(),
        eg = (0, u.b)(),
        e_ = J?.length ?? 0,
        ep = (0, O.A)({
            canAttachFiles: er,
            canStartThreads: ed || eu,
            useSlate: eh,
            hasClips: ea,
            canUseApplicationCommands: !H,
            channel: a,
            activities: $,
            newClipsCount: e_,
            canPostPolls: em,
            appContext: B,
            canSendScheduledMessages: eA,
            canSummarizeThreads: eg,
        });
    if (0 === ep.length) return null;
    let ef = (0, i.jsx)(o.pa$, { size: "refresh_sm", color: "currentColor", colorClass: w.dW }),
        eE = (0, i.jsx)(o.YNO, {
            targetElementRef: W,
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
                        return (0, i.jsx)(g.A, { ...e, onOpenClips: ec, lastClipsSession: Y });
                    case "attachMenu":
                        return (0, i.jsx)(L.A, {
                            ...e,
                            onClose: () => el(null),
                            options: ep,
                            channel: a,
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
                    ref: W,
                    className: s()(w.g$, t),
                    childClassName: w.wh,
                    isActive: !1,
                    "aria-label": k.intl.string(k.t.d56gCa),
                    onDoubleClick: er ? () => V.current?.activateUploadDialogue() : void 0,
                    "aria-haspopup": "menu",
                    ...e,
                    children: ef,
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
                                ? (0, R.V)(a, [])
                                : (0, R.R)(t, a, U, { requireConfirm: !0, origin: "file_picker" }),
                            b._.dispatchToLastSubscribed(D.jej.TEXTAREA_FOCUS),
                            (e.currentTarget.value = "");
                    },
                    multiple: a.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, i.jsx)("div", { className: w.Jd, children: eE }),
        ],
    });
});
