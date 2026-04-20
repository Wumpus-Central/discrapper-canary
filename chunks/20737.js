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
    g = n(710315),
    _ = n(157207),
    p = n(794905),
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
    D = n(447155),
    O = n(652215),
    P = n(696016),
    k = n(985018),
    w = n(644268);
let U = l.memo(function (e) {
    let { className: t, channel: a, draftType: U, editorTextContent: G, setValue: F, canOnlyUseTextCommands: B } = e,
        H = (0, f.Us)(),
        V = l.useRef(null),
        W = l.useRef(null),
        K = (0, r.bG)([y.A], () => y.A.getActivities()),
        z = (0, A.Et)(),
        Y = (0, r.bG)([m.A], () => m.A.getLastClipsSession()),
        J = (0, r.yK)([m.A], () => m.A.getNewClipIds()),
        q = (0, r.bG)([I.Ay], () => null == I.Ay.getCurrentSidebarChannelId(a.id)),
        $ = (0, r.yK)(
            [T.A],
            () => (a.type === O.rbe.DM ? K.filter((e) => !T.A.getParty(e.party?.id)?.has(a.getRecipientId())) : K),
            [K, a],
        ),
        { showClipsHeaderEntrypoint: Z } = h.L_.useConfig({ location: "ChannelAttachButton" }),
        { topBarButton: X } = g.$.useConfig({ location: "ChannelAttachButton" }),
        { onShareClick: Q } = (0, p.A)(a.id),
        ee = (0, r.bG)([m.A], () => m.A.getSettings().remindersEnabled),
        et = (0, o.red)((e) => (0, o.fDT)(e, P.nm)),
        en = (0, r.bG)([v.A], () => v.A.hasLayers()),
        ei = (0, r.bG)([m.A], () => m.A.hasClips()),
        [el, ea] = l.useState(null),
        es = (0, h.sw)() && (z || ei),
        er = a.isPrivate(),
        eo = (0, r.bG)([N.A], () => er || (N.A.can(O.xBc.ATTACH_FILES, a) && N.A.can(O.xBc.SEND_MESSAGES, a))),
        ec = (0, d.A)(Y);
    function ed() {
        (0, o.mMO)(
            async () => {
                let { default: e } = await Promise.all([n.e("42784"), n.e("90333")]).then(n.bind(n, 543428));
                return (t) => (0, i.jsx)(e, { ...t, channelId: a.id, onClipClick: (e) => Q({ clips: [e] }) });
            },
            { modalKey: P.nm },
        ),
            ea(null);
    }
    ec?.newClipIds.length !== Y?.newClipIds.length &&
        (Y?.newClipIds.length ?? 0) > 0 &&
        null == el &&
        ee &&
        q &&
        !et &&
        !Z &&
        !X &&
        !en &&
        ea("recentClips"),
        l.useEffect(() => {
            let e = (e) => {
                let { channelId: t } = e;
                t === a.id && V.current?.activateUploadDialogue();
            };
            return (
                b._.subscribe(O.jej.UPLOAD_FILE, e),
                () => {
                    b._.unsubscribe(O.jej.UPLOAD_FILE, e);
                }
            );
        });
    let eu = (0, x.n)(a),
        eh = (0, x.Tb)(a),
        em = !S.D_.useSetting() && !(0, j.isAndroidWeb)() && null != window.ResizeObserver,
        eA = (0, E.I7)(a ?? void 0),
        eg = (0, C.Sc)(),
        e_ = (0, u.b)(),
        ep = J?.length ?? 0,
        ef = (0, D.A)({
            canAttachFiles: eo,
            canStartThreads: eu || eh,
            useSlate: em,
            hasClips: es,
            canUseApplicationCommands: !B,
            channel: a,
            activities: $,
            newClipsCount: ep,
            canPostPolls: eA,
            appContext: H,
            canSendScheduledMessages: eg,
            canSummarizeThreads: e_,
        });
    if (0 === ef.length) return null;
    let eE = (0, i.jsx)(o.pa$, { size: "refresh_sm", color: "currentColor", colorClass: w.dW }),
        eC = (0, i.jsx)(o.YNO, {
            targetElementRef: W,
            shouldShow: null != el,
            animation: o.YNO.Animation.NONE,
            align: "recentClips" === el ? "center" : "left",
            position: "top",
            positionKey: el ?? "null",
            onRequestOpen: () => {
                ea("attachMenu");
            },
            onRequestClose: () => {
                (0, o.ueM)() || ea(null);
            },
            renderPopout: (e) => {
                switch (el) {
                    case "recentClips":
                        return (0, i.jsx)(_.A, { ...e, onOpenClips: ed, lastClipsSession: Y });
                    case "attachMenu":
                        return (0, i.jsx)(L.A, {
                            ...e,
                            onClose: () => ea(null),
                            options: ef,
                            channel: a,
                            onFileUpload: () => V.current?.activateUploadDialogue(),
                            draftType: U,
                            editorTextContent: G,
                            setValue: F,
                            openClips: ed,
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
                    onDoubleClick: eo ? () => V.current?.activateUploadDialogue() : void 0,
                    "aria-haspopup": "menu",
                    ...e,
                    children: eE,
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
                            b._.dispatchToLastSubscribed(O.jej.TEXTAREA_FOCUS),
                            (e.currentTarget.value = "");
                    },
                    multiple: a.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, i.jsx)("div", { className: w.Jd, children: eC }),
        ],
    });
});
