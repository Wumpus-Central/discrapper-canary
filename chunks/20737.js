n.d(t, {
    A: () => W,
}),
    n(896048),
    n(65821);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(554146),
    c = n(397927),
    u = n(817363),
    d = n(475743),
    p = n(811024),
    h = n(147087),
    f = n(734066),
    g = n(274372),
    m = n(572164),
    b = n(157207),
    A = n(794905),
    y = n(826673),
    _ = n(450510),
    O = n(267102),
    j = n(969632),
    v = n(566908),
    x = n(406704),
    E = n(253932),
    C = n(761640),
    S = n(186111),
    I = n(320501),
    N = n(576705),
    T = n(461213),
    P = n(203982),
    w = n(723702),
    R = n(518960),
    D = n(782093),
    M = n(545428),
    L = n(38198),
    k = n(447155),
    G = n(652215),
    U = n(696016),
    B = n(49999),
    V = n(985018),
    F = n(275825);

function H(e) {
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

function K(e, t) {
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
let W = l.memo(function (e) {
    var t, i;
    let { className: W, channel: z, draftType: Y, editorTextContent: q, setValue: X, canOnlyUseTextCommands: J } = e,
        Q = (0, O.Us)(),
        Z = l.useRef(null),
        $ = l.useRef(null),
        ee = (0, a.bG)([T.A], () => T.A.getActivities()),
        et = (0, m.Et)(),
        en = (0, a.bG)([g.A], () => g.A.getLastClipsSession()),
        er = (0, a.yK)([g.A], () => g.A.getNewClipIds()),
        el = (0, a.bG)([C.Ay], () => null == C.Ay.getCurrentSidebarChannelId(z.id)),
        { showClipsHeaderEntrypoint: ei } = f.L_.useExperiment(
            {
                location: "ChannelAttachButton",
            },
            {
                autoTrackExposure: !1,
            },
        ),
        { onShareClick: es } = (0, A.A)(z.id),
        ea = (0, a.bG)([_.HP], () => _.HP.hasHotspot(_._2.CLIPS_CHANNEL_ATTACH_REMINDER)),
        eo = (0, c.red)((e) => (0, c.fDT)(e, U.nm)),
        ec = (0, a.bG)([S.A], () => S.A.hasLayers()),
        eu = (0, a.bG)([g.A], () => g.A.hasClips()),
        [ed, ep] = l.useState(null),
        eh = (0, f.sw)() && (et || eu),
        ef = z.isPrivate(),
        eg = (0, a.bG)([N.A], () => ef || (N.A.can(G.xBc.ATTACH_FILES, z) && N.A.can(G.xBc.SEND_MESSAGES, z))),
        em = (0, d.A)(en);
    (null == em ? void 0 : em.newClipIds.length) !== (null == en ? void 0 : en.newClipIds.length) &&
        (null != (t = null == en ? void 0 : en.newClipIds.length) ? t : 0) > 0 &&
        null == ed &&
        ea &&
        el &&
        !eo &&
        !ei &&
        !ec &&
        ep("recentClips");
    let eb = (0, a.bG)([I.A], () => I.A.hasCurrentUserSentMessageSinceAppStart());

    function eA() {
        (0, c.mMO)(
            async () => {
                let { default: e } = await Promise.all([n.e("4918"), n.e("98184")]).then(n.bind(n, 543428));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        K(H({}, t), {
                            channelId: z.id,
                            onClipClick: (e) =>
                                es({
                                    clips: [e],
                                }),
                        }),
                    );
            },
            {
                modalKey: U.nm,
            },
        ),
            ep(null);
    }
    l.useEffect(() => {
        let e = (e) => {
            let { channelId: t } = e;
            if (t === z.id) {
                var n;
                null == (n = Z.current) || n.activateUploadDialogue();
            }
        };
        return (
            P._.subscribe(G.jej.UPLOAD_FILE, e),
            () => {
                P._.unsubscribe(G.jej.UPLOAD_FILE, e);
            }
        );
    });
    let ey = (0, x.n)(z),
        e_ = (0, x.Tb)(z),
        eO = !E.D_.useSetting() && !(0, w.isAndroidWeb)() && null != window.ResizeObserver,
        ej = (0, j.I7)(null != z ? z : void 0),
        ev = (0, p.t8)(),
        ex = (0, v.Sc)({
            location: "ChannelAttachButton",
        }),
        eE = (0, h.b)(),
        eC = null != (i = null == er ? void 0 : er.length) ? i : 0,
        eS = (0, k.A)({
            canAttachFiles: eg,
            canStartThreads: ey || e_,
            useSlate: eO,
            hasClips: eh,
            canUseApplicationCommands: !J,
            channel: z,
            activities: ee,
            newClipsCount: eC,
            canPostPolls: ej,
            canLaunchActivities: ev,
            appContext: Q,
            canSendScheduledMessages: ex,
            canSummarizeThreads: eE,
        });
    if (0 === eS.length) return null;
    let eI = (0, r.jsx)(c.pa$, {
            size: "refresh_sm",
            color: "currentColor",
            colorClass: F.dW,
        }),
        eN = (0, r.jsx)(c.YNO, {
            targetElementRef: $,
            shouldShow: null != ed,
            animation: c.YNO.Animation.NONE,
            align: "recentClips" === ed ? "center" : "left",
            position: "top",
            positionKey: null != ed ? ed : "null",
            onRequestOpen: () => {
                eb &&
                    (0, y.Dr)(o.M.ACTIVITIES_CHAT_BUTTON_NUX_V2, {
                        dismissAction: B.i.TAKE_ACTION,
                    }),
                    ep("attachMenu");
            },
            onRequestClose: () => {
                (0, c.ueM)() ||
                    (eb &&
                        (0, y.Dr)(o.M.ACTIVITIES_CHAT_MENU_NEW_BADGE, {
                            dismissAction: B.i.TAKE_ACTION,
                        }),
                    ep(null));
            },
            renderPopout: (e) => {
                switch (ed) {
                    case "recentClips":
                        return (0, r.jsx)(
                            b.A,
                            K(H({}, e), {
                                onOpenClips: eA,
                                lastClipsSession: en,
                            }),
                        );
                    case "attachMenu":
                        return (0, r.jsx)(
                            L.A,
                            K(H({}, e), {
                                onClose: () => ep(null),
                                options: eS,
                                channel: z,
                                onFileUpload: () => {
                                    var e;
                                    return null == (e = Z.current) ? void 0 : e.activateUploadDialogue();
                                },
                                draftType: Y,
                                editorTextContent: q,
                                setValue: X,
                                openClips: eA,
                            }),
                        );
                    default:
                        throw Error("Invalid popout type provided");
                }
            },
            children: (e) =>
                (0, r.jsx)(
                    M.A,
                    K(
                        H(
                            {
                                ref: $,
                                className: s()(F.g$, W),
                                childClassName: F.wh,
                                isActive: !1,
                                "aria-label": V.intl.string(V.t.d56gCa),
                                onDoubleClick: eg
                                    ? () => {
                                          var e;
                                          return null == (e = Z.current) ? void 0 : e.activateUploadDialogue();
                                      }
                                    : void 0,
                                "aria-haspopup": "menu",
                            },
                            e,
                        ),
                        {
                            children: eI,
                        },
                    ),
                ),
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: F.EJ,
                children: (0, r.jsx)(u.A, {
                    ref: Z,
                    onChange: (e) => {
                        var t, n;
                        (t = e.currentTarget.files),
                            null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code
                                ? (0, R.V)(z, [])
                                : (0, R.R)(t, z, Y, {
                                      requireConfirm: !0,
                                      origin: "file_picker",
                                  }),
                            P._.dispatchToLastSubscribed(G.jej.TEXTAREA_FOCUS),
                            (e.currentTarget.value = "");
                    },
                    multiple: z.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, r.jsx)("div", {
                className: F.Jd,
                children: (0, r.jsx)(D.A, {
                    channel: z,
                    isOmniMenuOpen: "attachMenu" === ed,
                    openOmniMenu: () => ep("attachMenu"),
                    enabled: ev,
                    animationContainerClassName: F.Vk,
                    glowClassName: F.im,
                    trinketsClassName: F.xK,
                    children: eN,
                }),
            }),
        ],
    });
});
