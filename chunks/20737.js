n.d(t, {
    A: () => z,
}),
    n(896048),
    n(65821);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(554146),
    c = n(397927),
    u = n(817363),
    d = n(475743),
    f = n(811024),
    p = n(147087),
    h = n(33659),
    b = n(734066),
    g = n(274372),
    m = n(572164),
    A = n(157207),
    y = n(794905),
    O = n(826673),
    j = n(450510),
    v = n(267102),
    x = n(969632),
    E = n(566908),
    _ = n(406704),
    C = n(253932),
    S = n(761640),
    I = n(186111),
    N = n(320501),
    T = n(576705),
    P = n(461213),
    w = n(203982),
    R = n(723702),
    D = n(518960),
    M = n(782093),
    L = n(545428),
    G = n(38198),
    k = n(447155),
    U = n(652215),
    V = n(696016),
    F = n(49999),
    H = n(985018),
    B = n(275825);

function K(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let z = l.memo(function (e) {
    var t, i;
    let {
            className: z,
            channel: Y,
            draftType: q,
            editorTextContent: X,
            setValue: J,
            canOnlyUseTextCommands: Q,
            chatInputType: Z,
        } = e,
        $ = (0, v.Us)(),
        ee = l.useRef(null),
        et = l.useRef(null),
        en = (0, s.bG)([P.A], () => P.A.getActivities()),
        er = (0, m.Et)(),
        el = (0, s.bG)([g.A], () => g.A.getLastClipsSession()),
        ei = (0, s.yK)([g.A], () => g.A.getNewClipIds()),
        ea = (0, s.bG)([S.Ay], () => null == S.Ay.getCurrentSidebarChannelId(Y.id)),
        { showClipsHeaderEntrypoint: es } = b.L_.useExperiment(
            {
                location: "ChannelAttachButton",
            },
            {
                autoTrackExposure: !1,
            },
        ),
        { onShareClick: eo } = (0, y.A)(Y.id),
        ec = (0, s.bG)([j.HP], () => j.HP.hasHotspot(j._2.CLIPS_CHANNEL_ATTACH_REMINDER)),
        eu = (0, c.red)((e) => (0, c.fDT)(e, V.nm)),
        ed = (0, s.bG)([I.A], () => I.A.hasLayers()),
        ef = (0, s.bG)([g.A], () => g.A.hasClips()),
        [ep, eh] = l.useState(null),
        eb = (0, b.sw)() && (er || ef),
        eg = Y.isPrivate(),
        em = (0, s.bG)([T.A], () => eg || (T.A.can(U.xBc.ATTACH_FILES, Y) && T.A.can(U.xBc.SEND_MESSAGES, Y))),
        eA = (0, d.A)(el);
    (null == eA ? void 0 : eA.newClipIds.length) !== (null == el ? void 0 : el.newClipIds.length) &&
        (null != (t = null == el ? void 0 : el.newClipIds.length) ? t : 0) > 0 &&
        null == ep &&
        ec &&
        ea &&
        !eu &&
        !es &&
        !ed &&
        eh("recentClips");
    let ey = (0, s.bG)([N.A], () => N.A.hasCurrentUserSentMessageSinceAppStart());

    function eO() {
        (0, c.mMO)(
            async () => {
                let { default: e } = await Promise.all([n.e("4918"), n.e("98184")]).then(n.bind(n, 543428));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        W(K({}, t), {
                            channelId: Y.id,
                            onClipClick: (e) =>
                                eo({
                                    clips: [e],
                                }),
                        }),
                    );
            },
            {
                modalKey: V.nm,
            },
        ),
            eh(null);
    }
    l.useEffect(() => {
        let e = (e) => {
            let { channelId: t } = e;
            if (t === Y.id) {
                var n;
                null == (n = ee.current) || n.activateUploadDialogue();
            }
        };
        return (
            w._.subscribe(U.jej.UPLOAD_FILE, e),
            () => {
                w._.unsubscribe(U.jej.UPLOAD_FILE, e);
            }
        );
    });
    let ej = (0, _.n)(Y),
        ev = (0, _.Tb)(Y),
        ex = !C.D_.useSetting() && !(0, R.isAndroidWeb)() && null != window.ResizeObserver,
        eE = (0, h.H)({
            channel: Y,
            chatInputType: Z,
        }),
        e_ = (0, x.I7)(null != Y ? Y : void 0),
        eC = (0, f.t8)(),
        eS = (0, E.Sc)({
            location: "ChannelAttachButton",
        }),
        eI = (0, p.b)(),
        eN = null != (i = null == ei ? void 0 : ei.length) ? i : 0,
        eT = (0, k.A)({
            canAttachFiles: em,
            canStartThreads: ej || ev,
            useSlate: ex,
            hasClips: eb,
            canUseApplicationCommands: !Q,
            channel: Y,
            activities: en,
            newClipsCount: eN,
            canPostPolls: e_,
            canLaunchActivities: eC,
            appContext: $,
            canSendScheduledMessages: eS,
            canSummarizeThreads: eI,
            showAppLauncher: eE,
        });
    if (0 === eT.length) return null;
    let eP = (0, r.jsx)(c.pa$, {
            size: "refresh_sm",
            color: "currentColor",
            colorClass: B.dW,
        }),
        ew = (0, r.jsx)(c.YNO, {
            targetElementRef: et,
            shouldShow: null != ep,
            animation: c.YNO.Animation.NONE,
            align: "recentClips" === ep ? "center" : "left",
            position: "top",
            positionKey: null != ep ? ep : "null",
            onRequestOpen: () => {
                ey &&
                    (0, O.Dr)(o.M.ACTIVITIES_CHAT_BUTTON_NUX_V2, {
                        dismissAction: F.i.TAKE_ACTION,
                    }),
                    eh("attachMenu");
            },
            onRequestClose: () => {
                (0, c.ueM)() ||
                    (ey &&
                        (0, O.Dr)(o.M.ACTIVITIES_CHAT_MENU_NEW_BADGE, {
                            dismissAction: F.i.TAKE_ACTION,
                        }),
                    eh(null));
            },
            renderPopout: (e) => {
                switch (ep) {
                    case "recentClips":
                        return (0, r.jsx)(
                            A.A,
                            W(K({}, e), {
                                onOpenClips: eO,
                                lastClipsSession: el,
                            }),
                        );
                    case "attachMenu":
                        return (0, r.jsx)(
                            G.A,
                            W(K({}, e), {
                                onClose: () => eh(null),
                                options: eT,
                                channel: Y,
                                onFileUpload: () => {
                                    var e;
                                    return null == (e = ee.current) ? void 0 : e.activateUploadDialogue();
                                },
                                draftType: q,
                                editorTextContent: X,
                                setValue: J,
                                openClips: eO,
                                chatInputType: Z,
                            }),
                        );
                    default:
                        throw Error("Invalid popout type provided");
                }
            },
            children: (e) =>
                (0, r.jsx)(
                    L.A,
                    W(
                        K(
                            {
                                ref: et,
                                className: a()(B.g$, z),
                                childClassName: B.wh,
                                isActive: !1,
                                "aria-label": H.intl.string(H.t.d56gCa),
                                onDoubleClick: em
                                    ? () => {
                                          var e;
                                          return null == (e = ee.current) ? void 0 : e.activateUploadDialogue();
                                      }
                                    : void 0,
                                "aria-haspopup": "menu",
                            },
                            e,
                        ),
                        {
                            children: eP,
                        },
                    ),
                ),
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: B.EJ,
                children: (0, r.jsx)(u.A, {
                    ref: ee,
                    onChange: (e) => {
                        var t, n;
                        (t = e.currentTarget.files),
                            null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code
                                ? (0, D.V)(Y, [])
                                : (0, D.R)(t, Y, q, {
                                      requireConfirm: !0,
                                      origin: "file_picker",
                                  }),
                            w._.dispatchToLastSubscribed(U.jej.TEXTAREA_FOCUS),
                            (e.currentTarget.value = "");
                    },
                    multiple: Y.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, r.jsx)("div", {
                className: B.Jd,
                children: (0, r.jsx)(M.A, {
                    channel: Y,
                    isOmniMenuOpen: "attachMenu" === ep,
                    openOmniMenu: () => eh("attachMenu"),
                    enabled: eC,
                    animationContainerClassName: B.Vk,
                    glowClassName: B.im,
                    trinketsClassName: B.xK,
                    children: ew,
                }),
            }),
        ],
    });
});
