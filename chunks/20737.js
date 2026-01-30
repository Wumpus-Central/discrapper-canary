n.d(t, {
    A: () => U,
}),
    n(896048),
    n(65821);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(397927),
    c = n(817363),
    u = n(475743),
    d = n(147087),
    h = n(734066),
    p = n(274372),
    g = n(572164),
    f = n(157207),
    m = n(794905),
    b = n(450510),
    A = n(267102),
    y = n(969632),
    O = n(566908),
    _ = n(406704),
    j = n(253932),
    x = n(761640),
    v = n(186111),
    E = n(576705),
    C = n(461213),
    S = n(203982),
    I = n(723702),
    N = n(518960),
    T = n(545428),
    P = n(38198),
    w = n(447155),
    R = n(652215),
    D = n(696016),
    L = n(985018),
    M = n(275825);

function G(e) {
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

function k(e, t) {
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
let U = l.memo(function (e) {
    var t, i;
    let { className: U, channel: V, draftType: B, editorTextContent: H, setValue: F, canOnlyUseTextCommands: K } = e,
        Y = (0, A.Us)(),
        W = l.useRef(null),
        z = l.useRef(null),
        q = (0, a.bG)([C.A], () => C.A.getActivities()),
        X = (0, g.Et)(),
        J = (0, a.bG)([p.A], () => p.A.getLastClipsSession()),
        Q = (0, a.yK)([p.A], () => p.A.getNewClipIds()),
        Z = (0, a.bG)([x.Ay], () => null == x.Ay.getCurrentSidebarChannelId(V.id)),
        { showClipsHeaderEntrypoint: $ } = h.L_.useExperiment(
            {
                location: "ChannelAttachButton",
            },
            {
                autoTrackExposure: !1,
            },
        ),
        { onShareClick: ee } = (0, m.A)(V.id),
        et = (0, a.bG)([b.HP], () => b.HP.hasHotspot(b._2.CLIPS_CHANNEL_ATTACH_REMINDER)),
        en = (0, o.red)((e) => (0, o.fDT)(e, D.nm)),
        er = (0, a.bG)([v.A], () => v.A.hasLayers()),
        el = (0, a.bG)([p.A], () => p.A.hasClips()),
        [ei, es] = l.useState(null),
        ea = (0, h.sw)() && (X || el),
        eo = V.isPrivate(),
        ec = (0, a.bG)([E.A], () => eo || (E.A.can(R.xBc.ATTACH_FILES, V) && E.A.can(R.xBc.SEND_MESSAGES, V))),
        eu = (0, u.A)(J);

    function ed() {
        (0, o.mMO)(
            async () => {
                let { default: e } = await Promise.all([n.e("4918"), n.e("98184")]).then(n.bind(n, 543428));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        k(G({}, t), {
                            channelId: V.id,
                            onClipClick: (e) =>
                                ee({
                                    clips: [e],
                                }),
                        }),
                    );
            },
            {
                modalKey: D.nm,
            },
        ),
            es(null);
    }
    (null == eu ? void 0 : eu.newClipIds.length) !== (null == J ? void 0 : J.newClipIds.length) &&
        (null != (t = null == J ? void 0 : J.newClipIds.length) ? t : 0) > 0 &&
        null == ei &&
        et &&
        Z &&
        !en &&
        !$ &&
        !er &&
        es("recentClips"),
        l.useEffect(() => {
            let e = (e) => {
                let { channelId: t } = e;
                if (t === V.id) {
                    var n;
                    null == (n = W.current) || n.activateUploadDialogue();
                }
            };
            return (
                S._.subscribe(R.jej.UPLOAD_FILE, e),
                () => {
                    S._.unsubscribe(R.jej.UPLOAD_FILE, e);
                }
            );
        });
    let eh = (0, _.n)(V),
        ep = (0, _.Tb)(V),
        eg = !j.D_.useSetting() && !(0, I.isAndroidWeb)() && null != window.ResizeObserver,
        ef = (0, y.I7)(null != V ? V : void 0),
        em = (0, O.Sc)({
            location: "ChannelAttachButton",
        }),
        eb = (0, d.b)(),
        eA = null != (i = null == Q ? void 0 : Q.length) ? i : 0,
        ey = (0, w.A)({
            canAttachFiles: ec,
            canStartThreads: eh || ep,
            useSlate: eg,
            hasClips: ea,
            canUseApplicationCommands: !K,
            channel: V,
            activities: q,
            newClipsCount: eA,
            canPostPolls: ef,
            appContext: Y,
            canSendScheduledMessages: em,
            canSummarizeThreads: eb,
        });
    if (0 === ey.length) return null;
    let eO = (0, r.jsx)(o.pa$, {
            size: "refresh_sm",
            color: "currentColor",
            colorClass: M.dW,
        }),
        e_ = (0, r.jsx)(o.YNO, {
            targetElementRef: z,
            shouldShow: null != ei,
            animation: o.YNO.Animation.NONE,
            align: "recentClips" === ei ? "center" : "left",
            position: "top",
            positionKey: null != ei ? ei : "null",
            onRequestOpen: () => {
                es("attachMenu");
            },
            onRequestClose: () => {
                (0, o.ueM)() || es(null);
            },
            renderPopout: (e) => {
                switch (ei) {
                    case "recentClips":
                        return (0, r.jsx)(
                            f.A,
                            k(G({}, e), {
                                onOpenClips: ed,
                                lastClipsSession: J,
                            }),
                        );
                    case "attachMenu":
                        return (0, r.jsx)(
                            P.A,
                            k(G({}, e), {
                                onClose: () => es(null),
                                options: ey,
                                channel: V,
                                onFileUpload: () => {
                                    var e;
                                    return null == (e = W.current) ? void 0 : e.activateUploadDialogue();
                                },
                                draftType: B,
                                editorTextContent: H,
                                setValue: F,
                                openClips: ed,
                            }),
                        );
                    default:
                        throw Error("Invalid popout type provided");
                }
            },
            children: (e) =>
                (0, r.jsx)(
                    T.A,
                    k(
                        G(
                            {
                                ref: z,
                                className: s()(M.g$, U),
                                childClassName: M.wh,
                                isActive: !1,
                                "aria-label": L.intl.string(L.t.d56gCa),
                                onDoubleClick: ec
                                    ? () => {
                                          var e;
                                          return null == (e = W.current) ? void 0 : e.activateUploadDialogue();
                                      }
                                    : void 0,
                                "aria-haspopup": "menu",
                            },
                            e,
                        ),
                        {
                            children: eO,
                        },
                    ),
                ),
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: M.EJ,
                children: (0, r.jsx)(c.A, {
                    ref: W,
                    onChange: (e) => {
                        var t, n;
                        (t = e.currentTarget.files),
                            null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code
                                ? (0, N.V)(V, [])
                                : (0, N.R)(t, V, B, {
                                      requireConfirm: !0,
                                      origin: "file_picker",
                                  }),
                            S._.dispatchToLastSubscribed(R.jej.TEXTAREA_FOCUS),
                            (e.currentTarget.value = "");
                    },
                    multiple: V.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, r.jsx)("div", {
                className: M.Jd,
                children: e_,
            }),
        ],
    });
});
