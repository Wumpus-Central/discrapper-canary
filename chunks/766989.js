i.d(t, { A: () => t_, u: () => ty });
var n = i(477900),
    s = i(582128),
    l = i(503698),
    r = i.n(l),
    a = i(17928),
    o = i(885574),
    d = i(834730),
    c = i(429913),
    u = i(277984),
    g = i(840387),
    m = i(201718),
    x = i(615405),
    f = i(633075),
    h = i(646976),
    p = i(289173),
    I = i(311043),
    j = i(569926),
    A = i(958805),
    E = i(61881),
    S = i(435558),
    v = i(196765),
    T = i(540185),
    N = i(282435);
let b = (0, S.sampleSize)(N.sx, N.sx.length),
    C = (0, v.v)((e, t) => ({
        stack: [],
        wishlistStack: [],
        gameIds: {},
        peekedGameIds: {},
        onLoad: (i, n, s) => {
            let l = new Set(s.map((e) => e.applicationId));
            for (let s of (e({
                stack: [...i.filter((e) => !l.has(e)), ...b],
                wishlistStack: [...n.filter((e) => !l.has(e)), ...b],
            }),
            Object.values(T.x)))
                t().setNext(6, s);
        },
        setNext: (e, i) => {
            let n = t().getNext(e, i);
            t()._setGameIds(i, n);
            let s = t().peekNext(7, i);
            t()._setPeekedGameIds(i, s);
        },
        getNext: (e, i) => {
            let n = i === T.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack,
                s = n.slice(0, e),
                l = n.slice(e);
            return t()._setStack(i, l), s;
        },
        peekNext: (e, i) => (i === T.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).slice(0, e),
        bump: (e, i) => {
            let n = t().gameIds[i] ?? [],
                s = n.indexOf(e);
            if (-1 === s) return;
            let l = [...n];
            l.splice(s, 1);
            let r = t().getNext(1, i),
                a = t().peekNext(7, i);
            t()._setGameIds(i, [...l, ...r]), t()._setPeekedGameIds(i, [...a, ...r]);
        },
        bumpMultiple: (e, i) => {
            let n = (t().gameIds[i] ?? []).filter((t) => !e.includes(t)),
                s = t().getNext(6 - n.length, i),
                l = t().peekNext(7, i);
            t()._setGameIds(i, [...n, ...s]), t()._setPeekedGameIds(i, [...l, ...s]);
        },
        remove: (e, i) => {
            let n = (i === T.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).filter((t) => t !== e);
            t()._setStack(i, n), t()._setPeekedGameIds(i, t().peekNext(7, i));
        },
        _setGameIds: (t, i) => {
            e((e) => ({ gameIds: { ...e.gameIds, [t]: i } }));
        },
        _setStack: (t, i) => {
            t === T.x.WANT_TO_PLAY_GAMES ? e({ wishlistStack: i }) : e({ stack: i });
        },
        _setPeekedGameIds: (t, i) => {
            e((e) => ({ peekedGameIds: { ...e.peekedGameIds, [t]: i } }));
        },
    }));
function w(e) {
    let { bump: t, bumpMultiple: i, gameIds: n } = C();
    !(function (e) {
        let { remove: t, peekedGameIds: i } = C(),
            n = s.useMemo(() => i[e] ?? [], [i, e]);
        (0, j.x)(n);
        let l = (0, a.yK)([I.A], () => n.map((e) => I.A.isFetching(e)));
        s.useEffect(() => {
            for (let i of n) {
                let n = I.A.didFetchingFail(i),
                    s = I.A.hasNoData(i),
                    l = !!I.A.getGame(i),
                    r = null != I.A.getCoverImageUrl(i);
                (n || s || (l && !r)) && t(i, e);
            }
        }, [n, t, e, l]);
    })(e);
    let l = s.useMemo(() => n[e] ?? [], [n, e]),
        r = s.useCallback(
            (i) => {
                t(i, e);
            },
            [t, e],
        ),
        o = (0, a.yK)([I.A], () => l.map((e) => I.A.isFetching(e)));
    s.useEffect(() => {
        let t = l.filter((e) => {
            let t = I.A.didFetchingFail(e),
                i = I.A.hasNoData(e),
                n = !!I.A.getGame(e),
                s = null != I.A.getCoverImageUrl(e);
            return t || i || (n && !s);
        });
        t.length > 0 && i(t, e);
    }, [l, e, i, o]);
    let d = s.useMemo(() => l.map((e) => ({ applicationId: e })), [l]);
    return { applicationIds: l, games: d, onAddGame: r };
}
var k = i(600761),
    y = i(667049),
    R = i(579950),
    O = i(605694),
    _ = i(192308),
    L = i(821609),
    P = i(307301),
    G = i(183555),
    D = i(375708),
    M = i(964828);
function U(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: l } = (0, G.NJ)(),
        a = s.useCallback(() => {
            l({ action: "PRESS_ADD_WIDGET" }),
                (0, _.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([i.e("8888"), i.e("22420"), i.e("26623")]).then(
                            i.bind(i, 850370),
                        );
                        return (t) => (0, n.jsx)(e, { ...t, trackUserProfileEditAction: l });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [l]);
    return (0, n.jsxs)("div", {
        className: r()(M.w, t),
        children: [
            (0, n.jsx)(d.E, { variant: "text-xs/semibold", color: "text-subtle", children: D.intl.string(D.t.OYlggR) }),
            (0, n.jsx)(L.$, {
                icon: P.j,
                text: D.intl.string(D.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: a,
            }),
        ],
    });
}
var F = i(192);
i(157992);
var W = i(866665),
    H = i(408278),
    B = i(499373),
    V = i(793574),
    X = i(111994),
    z = i(735321),
    Y = i(623280),
    K = i(607470),
    q = i(590251),
    Q = i(530059);
function Z(e) {
    let { item: t, size: i } = e,
        s = "exporting" === t.status,
        l = "uploading" === t.status ? Math.round(100 * t.progress) : 25;
    return (0, n.jsx)("div", {
        className: r()(Q.ring, Q[i], { [Q.indeterminate]: s }),
        role: "progressbar",
        "aria-label": D.intl.string(D.t.RFRuwZ),
        "aria-valuenow": s ? void 0 : l,
        children: (0, n.jsx)(q.a, {
            percent: l,
            strokeSize: q.a.StrokeSizes.MEDIUM,
            colorOverride: "var(--icon-overlay-light)",
        }),
    });
}
var J = i(213879);
function $(e) {
    let { item: t, ringSize: i, className: s } = e,
        l = "exporting" === t.status || "uploading" === t.status,
        a = r()(J.Gt, { [J.ob]: l });
    return (0, n.jsxs)("div", {
        className: r()(J.$_, s),
        children: [
            "saved" === t.status
                ? null != t.videoURL
                    ? (0, n.jsx)(K.A, { src: t.videoURL, preload: "metadata", muted: !0, className: a })
                    : null
                : (0, n.jsx)("img", { src: t.thumbnail, alt: "", className: a, loading: "lazy" }),
            l && (0, n.jsx)(Z, { item: t, size: i }),
        ],
    });
}
var ee = i(939249),
    et = i(663341),
    ei = i(547193);
function en(e) {
    let { items: t, selectedKey: i, onSelect: s, onAddClip: l } = e,
        a = Math.max(0, 4 - t.length);
    return (0, n.jsxs)("ul", {
        className: ei.Xm,
        children: [
            t.map((e, t) =>
                (0, n.jsx)(
                    "li",
                    {
                        className: ei.NI,
                        children: (0, n.jsx)(ee.D, {
                            className: r()(ei.Vs, { [ei.wH]: e.key === i }),
                            "aria-pressed": e.key === i,
                            "aria-label": D.intl.formatToPlainString(D.t.zrtAwA, { clipNumber: t + 1 }),
                            onClick: () => s(e.key),
                            children: (0, n.jsx)($, { item: e, ringSize: "sm", className: ei.nC }),
                        }),
                    },
                    e.key,
                ),
            ),
            null != l &&
                Array.from({ length: a }, (e, t) =>
                    (0, n.jsx)(
                        "li",
                        {
                            className: ei.NI,
                            children: (0, n.jsx)(ee.D, {
                                className: ei.Yn,
                                "aria-label": D.intl.string(D.t.rI0i0a),
                                onClick: l,
                                children: (0, n.jsx)(et.p, { size: "sm", color: "currentColor" }),
                            }),
                        },
                        `empty-${t}`,
                    ),
                ),
        ],
    });
}
var es = i(691540),
    el = i(857250),
    er = i(97483),
    ea = i(430795),
    eo = i(696016);
let ed = (0, v.v)(() => ({ localClips: new Map() }));
function ec(e, t) {
    ed.setState((i) => ({ localClips: new Map(i.localClips).set(e, t) }));
}
async function eu(e, t) {
    if (!ed.getState().localClips.has(e.id)) {
        if (null == e.applicationId) return void (0, es.P0)((0, el.o)(D.intl.string(D.t.xcLXWy), er.Ck.FAILURE));
        ec(e.id, { status: "exporting", clip: e });
        try {
            let i = await (0, ea.VO)(e, { analyticsLocations: t });
            ec(e.id, { status: "uploading", clip: e, progress: 0 });
            let n = new File([i], "clip.mp4", { type: "video/mp4" }),
                s = await A.A.uploadWidgetClip(n, {
                    onProgress: (t) => {
                        var i;
                        return (
                            (i = e.id),
                            void ed.setState((e) => {
                                let n = e.localClips.get(i);
                                return n?.status !== "uploading"
                                    ? e
                                    : { localClips: new Map(e.localClips).set(i, { ...n, progress: t }) };
                            })
                        );
                    },
                });
            ec(e.id, { status: "uploaded", clip: e, uploadFilename: s }),
                (0, z.XW)({ status: "pending", gameId: e.applicationId, uploadFilename: s });
        } catch (t) {
            var i;
            (i = e.id),
                ed.setState((e) => {
                    let t = new Map(e.localClips);
                    return t.delete(i), { localClips: t };
                }),
                eo.nx.error("Failed to upload a clip for the clips gallery widget", t),
                (0, es.P0)((0, el.o)(D.intl.string(D.t.iufib1), er.Ck.FAILURE));
        }
    }
}
var eg = i(465927);
function em(e) {
    let { onClick: t } = e,
        i = D.intl.string(D.t.rI0i0a);
    return (0, n.jsx)(W.m, {
        text: i,
        asContainer: !0,
        ariaHidden: !0,
        children: (0, n.jsx)(H.K, { variant: "secondary", size: "sm", icon: B.T, "aria-label": i, onClick: t }),
    });
}
function ex() {
    return (0, n.jsx)("div", {
        className: eg.p$,
        children: (0, n.jsx)(d.E, {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: D.intl.format(D.t.FEcbkU, { maxClips: 4 }),
        }),
    });
}
function ef(e) {
    var t;
    let l,
        { widget: r, user: a, allowEditing: o, disableInteraction: d, ...c } = e,
        [u, g] = s.useState(null),
        m =
            ((t = a.id),
            (l = ed((e) => e.localClips)),
            s.useMemo(() => {
                let e = new Map();
                for (let t of l.values()) "uploaded" === t.status && e.set(t.uploadFilename, t);
                return [
                    ...r.clips.flatMap((i) => {
                        if ("saved" === i.status)
                            return [
                                {
                                    status: "saved",
                                    key: i.id,
                                    videoURL: (function (e, t) {
                                        let i = window.GLOBAL_ENV.CDN_HOST;
                                        if (null != i) return `https://${i}/profile-widget-clips/${e}/${t}`;
                                    })(t, i.fileId),
                                },
                            ];
                        let n = e.get(i.uploadFilename);
                        return null != n ? [{ status: "pending", key: n.clip.id, thumbnail: n.clip.thumbnail }] : [];
                    }),
                    ...Array.from(l.values()).flatMap((e) => {
                        switch (e.status) {
                            case "exporting":
                                return [{ status: "exporting", key: e.clip.id, thumbnail: e.clip.thumbnail }];
                            case "uploading":
                                return [
                                    {
                                        status: "uploading",
                                        key: e.clip.id,
                                        thumbnail: e.clip.thumbnail,
                                        progress: e.progress,
                                    },
                                ];
                            case "uploaded":
                                return [];
                        }
                    }),
                ];
            }, [r.clips, l, t])),
        x = o && !0 !== d,
        f = 0 === m.length,
        h = m.length >= 4,
        p = m.find((e) => e.key === u) ?? m[m.length - 1],
        I = s.useCallback(() => {
            (0, _.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        i.e("69884"),
                        i.e("18757"),
                        i.e("47899"),
                        i.e("94373"),
                        i.e("57860"),
                        i.e("21035"),
                        i.e("21398"),
                        i.e("81277"),
                        i.e("16832"),
                        i.e("68877"),
                        i.e("48380"),
                        i.e("41882"),
                        i.e("57066"),
                        i.e("48442"),
                        i.e("37944"),
                        i.e("27392"),
                        i.e("93218"),
                        i.e("14146"),
                        i.e("75842"),
                        i.e("83952"),
                        i.e("58337"),
                        i.e("20287"),
                        i.e("24761"),
                        i.e("18024"),
                        i.e("3930"),
                        i.e("3663"),
                        i.e("3131"),
                        i.e("47177"),
                        i.e("69201"),
                        i.e("8563"),
                        i.e("69985"),
                        i.e("27272"),
                        i.e("21573"),
                        i.e("96268"),
                        i.e("80007"),
                        i.e("66147"),
                        i.e("38090"),
                        i.e("22266"),
                        i.e("1962"),
                        i.e("1922"),
                        i.e("83518"),
                        i.e("32736"),
                        i.e("37715"),
                        i.e("74049"),
                        i.e("80559"),
                        i.e("95008"),
                        i.e("52566"),
                        i.e("39408"),
                        i.e("89160"),
                        i.e("31782"),
                        i.e("20342"),
                        i.e("71453"),
                        i.e("94676"),
                    ]).then(i.bind(i, 671884));
                    return (t) =>
                        (0, n.jsx)(e, {
                            ...t,
                            initialMainLink: X.oH.ALL_CLIPS,
                            onClipClick: (e) => {
                                ((e) => eu(e, [V.A.USER_PROFILE_MODAL_V2]))(e), t.onClose();
                            },
                        });
                },
                { modalKey: eo.nm },
            );
        }, []);
    return (0, n.jsx)(Y.A, {
        userId: a.id,
        widget: r,
        allowEditing: o,
        disableInteraction: d,
        className: eg.kL,
        headerTitle: (0, z.L)(r),
        headerActionButtons: x && f ? [(0, n.jsx)(em, { onClick: I }, "clips-gallery-add-clip")] : void 0,
        ...c,
        children:
            null != p
                ? (0, n.jsxs)("div", {
                      className: eg.nV,
                      children: [
                          (0, n.jsx)($, { item: p, ringSize: "lg", className: eg.VH }),
                          (0, n.jsx)(en, {
                              items: m,
                              selectedKey: p.key,
                              onSelect: g,
                              onAddClip: x && !h ? I : void 0,
                          }),
                      ],
                  })
                : (0, n.jsx)(ex, {}),
    });
}
var eh = i(554146),
    ep = i(704824),
    eI = i(382483),
    ej = i(385113),
    eA = i(334074),
    eE = i(287809),
    eS = i(657718),
    ev = i(789645),
    eT = i(478016),
    eN = i(384377),
    eb = i(518477),
    eC = i(49999);
function ew(e) {
    let { user: t, application: i, onDismiss: l } = e,
        { trackUserProfileEditAction: r } = (0, G.NJ)(),
        a = s.useMemo(() => new f.R({ applicationId: i.id }), [i.id]),
        o = s.useCallback(() => {
            null != a &&
                ((0, z.Y5)(a),
                r({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, eN.XA)(eb.jM.WIDGET_ADDED));
        }, [a, r]);
    return (0, n.jsx)(O.A, {
        user: t,
        widget: a,
        allowEditing: !1,
        subtle: !0,
        cta: (0, n.jsx)(O.A.Cta, {
            showSuggestedForYou: !0,
            heading: D.intl.format(D.t.OIzLCy, { applicationName: i.name }),
            content: D.intl.format(D.t.BQySru, { applicationName: i.name }),
            buttons: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(W.m, {
                        text: D.intl.string(D.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, n.jsx)(eS.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: ev.P,
                            "aria-label": D.intl.string(D.t.WAI6xu),
                            onClick: () => {
                                l(eC.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, n.jsx)(W.m, {
                        text: D.intl.string(D.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, n.jsx)(eS.S, {
                            variant: "primary",
                            size: "sm",
                            icon: eT.U,
                            "aria-label": D.intl.formatToPlainString(D.t.KfGahB, { applicationName: i.name }),
                            onClick: () => {
                                l(eC.i.TAKE_ACTION), o();
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
function ek() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: i,
        markAsDismissed: l,
    } = (function () {
        let e = (0, a.yK)([ej.A], () => ej.A.getFeaturedApplicationIds());
        s.useEffect(() => {
            (0, eI.Wq)();
        }, []);
        let t = (0, a.bG)([eE.default], () => eE.default.getCurrentUser()),
            i = (0, c.A)(e),
            { tokens: n, fetched: l } = (0, ep.j)(e),
            r = (0, y.A)(t?.id),
            o = null == t || null == e || null == n || !l,
            d = s.useMemo(
                () =>
                    o
                        ? []
                        : i.filter(
                              (e) =>
                                  !(null == e || r.some((t) => t instanceof f.R && t.applicationId === e.id)) &&
                                  null != n.find((t) => t.application.id === e.id),
                          ),
                [o, i, n, r],
            ),
            { eligibleToShow: u, markAsDismissed: g } = (0, eA.hj)({
                applications: d,
                dismissibleContent: eh.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: eA.SH,
            }),
            m = s.useMemo(() => d.filter((e) => u.includes(e.id)), [d, u]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: m, markAsDismissed: g };
    })();
    if (e || null == t) return null;
    let r = i[0];
    return null == r ? null : (0, n.jsx)(ew, { user: t, application: r, onDismiss: (e) => l([r.id], e) }, r.id);
}
var ey = i(128988),
    eR = i(280450),
    eO = i(321191),
    e_ = i(896170),
    eL = i(765178),
    eP = i(922016),
    eG = i(305866),
    eD = i(732771),
    eM = i(321108),
    eU = i(383329),
    eF = i(250573);
function eW(e) {
    let { widgetType: t, widget: i, onAddGame: l, children: r, ...a } = e,
        o = s.useMemo(() => new Set(i.games.map((e) => e.applicationId)), [i.games]),
        { trackUserProfileEditAction: d } = (0, G.NJ)(),
        [c, u] = s.useState(""),
        g = s.useRef(""),
        { options: m, matchSorterOptions: x } = (0, eU.R)({ query: c }),
        f = c.trim().length > 0,
        { applicationIds: h, onAddGame: p } = w(t),
        I = (0, eM.A)(h),
        j = s.useCallback(
            (e) => {
                (0, z.ew)({ widgetType: t, game: { applicationId: e } }),
                    eL.O.announce(D.intl.string(D.t.q0U3DE)),
                    d({ action: "GAME_ADDED", gameId: e, widgetEdited: t }),
                    h.includes(e) && p(e),
                    l?.();
            },
            [t, d, l, h, p],
        ),
        A = s.useMemo(() => {
            let e = new Map(
                m.map((e) => [
                    String(e.value),
                    { id: String(e.value), value: String(e.value), label: e.label, disabled: o.has(e.value) },
                ]),
            );
            if (f) return [...e.values()];
            let t = I.filter((e) => !o.has(e.id) && (0, z.XX)(e)).map((e) => ({
                    id: String(e.id),
                    value: String(e.id),
                    label: e.name,
                    disabled: !1,
                })),
                i = new Set(t.map((e) => e.id));
            return [...t, ...[...e.values()].filter((e) => !i.has(e.id))];
        }, [m, o, I, f]),
        E = s.useCallback((e) => e, []),
        S = s.useMemo(() => ({ ...x, threshold: e_.Ht.rankings.CONTAINS, keys: ["label"] }), [x]),
        v = s.useCallback((e) => (f || "" === e.trim() ? A.length : (0, e_.Ht)(A, e, S).length), [f, A, S]),
        T = s.useCallback(
            (e) => {
                let i = e.target.value;
                "" === c.trim() &&
                    "" !== i.trim() &&
                    d({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: i.trim().length,
                        numResults: v(i),
                    }),
                    u(i),
                    (g.current = i);
            },
            [c, d, t, v],
        );
    return (0, n.jsx)(eP.Y, {
        ...a,
        onRequestOpen: () => {
            d({ action: "PRESS_ADD_GAME", widgetEdited: t }), u(""), (g.current = "");
        },
        onRequestClose: () => {
            d({
                action: "GAME_SEARCH_SESSION_ENDED",
                widgetEdited: t,
                numCharacters: g.current.trim().length,
                numResults: v(g.current),
            });
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(eG.l, {
                className: eF.C,
                "aria-label": D.intl.string(D.t.uqw8wK),
                children: (0, n.jsxs)(eD.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (j(e), t());
                    },
                    options: A,
                    matchSorterOptions: S,
                    customMatchSorter: f ? E : void 0,
                    children: [
                        (0, n.jsx)(eD.a3, {
                            label: D.intl.string(D.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: D.intl.string(D.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: T,
                        }),
                        (0, n.jsx)(eD.X2, { maxVisibleItems: 7 }),
                    ],
                }),
            });
        },
        children: (e) => r(e),
    });
}
function eH(e) {
    let { disabled: t, ...i } = e,
        l = s.useRef(null);
    return (0, n.jsx)(eW, {
        targetElementRef: l,
        position: "bottom",
        align: "center",
        ...i,
        children: (e) =>
            (0, n.jsx)(W.m, {
                text: D.intl.string(D.t.SgTOtX),
                asContainer: !0,
                ariaHidden: !0,
                children: (0, n.jsx)(H.K, {
                    buttonRef: l,
                    variant: "secondary",
                    size: "sm",
                    icon: B.T,
                    "aria-label": D.intl.string(D.t.SgTOtX),
                    disabled: t,
                    ...e,
                }),
            }),
    });
}
function eB(e) {
    let t = s.useRef(null);
    return (0, n.jsx)(eW, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, n.jsx)(ee.D, {
                innerRef: t,
                className: eF.c,
                "aria-label": D.intl.string(D.t.SgTOtX),
                ...e,
                children: (0, n.jsx)(et.p, { color: "currentColor" }),
            }),
    });
}
let eV = s.createContext(null);
function eX(e) {
    let { widgetType: t, children: i } = e,
        l = (0, a.bG)([E.A], () => {
            let e = E.A.getPendingWidgets();
            if (null == e) return !1;
            let i = e.find((e) => e.type === t);
            if (null == i) return !1;
            let n = (0, z.cv)(t);
            return i.games.length > n;
        }),
        [r, o] = s.useState(l);
    return (0, n.jsx)(eV.Provider, { value: { expanded: r, setExpanded: o }, children: i });
}
function ez() {
    let e = s.useContext(eV);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var eY = i(308685);
function eK(e) {
    let { widget: t } = e,
        i = (0, z.cv)(t.type),
        s = 1 === i,
        l = s ? D.intl.string(D.t["3FdPBT"]) : D.intl.format(D.t.W8K2GH, { maxGames: i });
    return (0, n.jsxs)("div", {
        className: s ? eY.O : eY.k,
        children: [
            s && (0, n.jsx)(eB, { widget: t, widgetType: t.type }),
            (0, n.jsx)(d.E, { variant: "text-xs/normal", color: "text-subtle", children: l }),
        ],
    });
}
var eq = i(823016),
    eQ = i(683071),
    eZ = i(116363);
function eJ(e) {
    let { widgetType: t, gameCount: i } = e,
        s = (0, z.cv)(t);
    return i <= s
        ? null
        : (0, n.jsx)("div", {
              role: "alert",
              className: eZ.l,
              children: (0, n.jsx)(eQ.w, {
                  type: "warning",
                  children: D.intl.formatToPlainString(D.t.Rv3wYq, { maxGames: s }),
              }),
          });
}
var e$ = i(17110);
function e0(e) {
    let { onClick: t, expanded: i } = e;
    return (0, n.jsx)(ee.D, {
        onClick: t,
        className: e$.x,
        "aria-expanded": i,
        children: (0, n.jsx)(d.E, {
            variant: "text-sm/medium",
            color: "none",
            children: i ? D.intl.string(D.t["6MwJo/"]) : D.intl.string(D.t.lBeKY2),
        }),
    });
}
var e1 = i(249264),
    e8 = i(462037);
function e2(e) {
    let { games: t, user: i, widgetType: s, ...l } = e,
        { registerItemRef: r, manageFocusOnDelete: a } = (0, eq.r)();
    return (0, n.jsx)("ul", {
        className: e8.h,
        children: t.map((e, t) =>
            (0, n.jsx)(
                "li",
                {
                    children: (0, n.jsx)(e1.A, {
                        index: t,
                        user: i,
                        game: e,
                        widgetType: s,
                        coverRef: r(e.applicationId),
                        onRemoveGame: a,
                        ...l,
                    }),
                },
                e.applicationId,
            ),
        ),
    });
}
function e7(e) {
    let { widgetType: t, allowEditing: i, disableInteraction: s = !1, games: l } = e,
        { getManageButtonForWidget: r } = (0, F.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = ez(),
        c = o ? l : l.slice(0, 2),
        u = l.length > 2,
        g = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(e2, { ...e, games: c }),
                u && (0, n.jsx)(e0, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return i && !s
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(eJ, { widgetType: t, gameCount: l.length }),
                  (0, n.jsx)(eq.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function e5(e) {
    let { user: t, widget: i, guildId: s, channelId: l, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(Y.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(e7, {
                      user: t,
                      widgetType: i.type,
                      games: i.games,
                      guildId: s,
                      channelId: l,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(eK, { widget: i }),
    });
}
function e6(e) {
    let { user: t, widget: i, guildId: s, channelId: l, allowEditing: r, disableInteraction: a, ...o } = e,
        d = i.games[0];
    return (0, n.jsx)(Y.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            null != d
                ? (0, n.jsx)(e1.A, {
                      user: t,
                      widgetType: i.type,
                      game: d,
                      guildId: s,
                      channelId: l,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(eK, { widget: i }),
    });
}
var e3 = i(768754);
function e9(e) {
    let { games: t, renderGame: i } = e;
    return (0, n.jsx)("ul", {
        className: e3.V,
        children: t.map((e, t) => (0, n.jsx)("li", { children: i(e, t) }, e.applicationId)),
    });
}
var e4 = i(686246),
    te = i(201438),
    tt = i(451395),
    ti = i(788593),
    tn = i(858808),
    ts = i(350956),
    tl = i(466215);
function tr(e) {
    let { index: t, widgetType: i, game: l, coverImageUrl: r, gameName: a, children: o } = e,
        { manageFocusOnReorder: d } = (0, eq.r)(),
        c = s.useRef(null);
    return (0, n.jsx)(tt.mG, {
        index: t,
        itemId: l.applicationId,
        listType: i,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: r, gameName: a, getWidth: () => c.current?.offsetWidth },
        "aria-label": D.intl.formatToPlainString(D.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, z.Un)(i, e, t),
        onEnd: () => d(l.applicationId),
        className: tl.kL,
        dropBeforeClassName: tl.A,
        dropAfterClassName: tl.Ze,
        draggingClassName: tl.Id,
        children: (0, n.jsx)("div", { ref: c, className: tl.An, children: o }),
    });
}
function ta(e) {
    let {
            game: t,
            userId: i,
            widgetType: s,
            allowEditing: l,
            disableInteraction: r = !1,
            index: a,
            onRemoveGame: o,
            coverRef: d,
        } = e,
        { coverImageUrl: c, gameName: u, isLoading: g } = (0, te.A)(t.applicationId),
        { registerDragHandleRef: m } = (0, eq.r)(),
        x = l && !r,
        { isDragging: f } = (0, e4.V)((e) => ({ isDragging: e.isDragging() }));
    function h() {
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(ti.A, {
                    imageSrc: c,
                    gameName: u,
                    applicationId: t.applicationId,
                    userId: i,
                    disableInteraction: r,
                    className: null == c || r ? void 0 : ts.iL,
                    hideTooltip: f,
                    coverRef: d,
                }),
                x && (0, n.jsx)(tt.jV, { buttonRef: m(t.applicationId), className: tl.BU }),
                x &&
                    (0, n.jsx)(tn.A, {
                        game: t,
                        widgetType: s,
                        className: tl.vS,
                        onRemove: () => o?.(t.applicationId),
                    }),
            ],
        });
    }
    return g
        ? (0, n.jsx)("div", { className: ts.mD })
        : x
          ? (0, n.jsx)(tr, { widgetType: s, index: a ?? 0, game: t, coverImageUrl: c, gameName: u, children: h() })
          : (0, n.jsx)("div", { className: tl.kL, children: h() });
}
function to(e) {
    let { games: t, userId: i, widgetType: s, allowEditing: l, disableInteraction: r } = e,
        { registerItemRef: a, manageFocusOnDelete: o } = (0, eq.r)();
    return (0, n.jsx)(e9, {
        games: t,
        renderGame: (e, t) =>
            (0, n.jsx)(ta, {
                index: t,
                game: e,
                userId: i,
                widgetType: s,
                allowEditing: l,
                disableInteraction: r,
                coverRef: a(e.applicationId),
                onRemoveGame: o,
            }),
    });
}
function td(e) {
    let { widgetType: t, allowEditing: i, disableInteraction: s = !1, games: l } = e,
        { getManageButtonForWidget: r } = (0, F.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = ez(),
        c = o ? l : l.slice(0, 8),
        u = l.length > 8,
        g = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(to, { ...e, games: c }),
                u && (0, n.jsx)(e0, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return i && !s
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(eJ, { widgetType: t, gameCount: l.length }),
                  (0, n.jsx)(eq.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function tc(e) {
    let { user: t, widget: i, guildId: s, channelId: l, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(Y.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(td, {
                      userId: t.id,
                      widgetType: i.type,
                      games: i.games,
                      guildId: s,
                      channelId: l,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(eK, { widget: i }),
    });
}
function tu(e) {
    let { user: t, widget: i, guildId: s, channelId: l, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(Y.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(td, {
                      userId: t.id,
                      widgetType: i.type,
                      games: i.games,
                      guildId: s,
                      channelId: l,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(eK, { widget: i }),
    });
}
var tg = i(661531),
    tm = i(297264),
    tx = i(915089),
    tf = i(30061);
function th(e) {
    let { applicationId: t, userId: i, onClick: s } = e,
        { coverImageUrl: l, gameName: r, isLoading: o } = (0, te.A)(t),
        d = (0, a.bG)([E.A], () => E.A.suggestedFetchIsLoading),
        c = D.intl.formatToPlainString(D.t["3mb1s5"], { game: r });
    return o || d
        ? (0, n.jsx)("div", { className: ts.mD })
        : (0, n.jsx)(W.m, {
              text: c,
              ariaHidden: !0,
              children: (0, n.jsxs)(ee.D, {
                  className: tf.c9,
                  onClick: s,
                  "aria-label": c,
                  children: [
                      (0, n.jsx)(ti.A, {
                          className: tf.Iv,
                          imageSrc: l,
                          gameName: r,
                          applicationId: t,
                          userId: i,
                          disableInteraction: !0,
                      }),
                      (0, n.jsx)(et.p, { size: "md", className: tf.Xv, color: tg.A.colors.WHITE }),
                  ],
              }),
          });
}
function tp(e) {
    let { userId: t, games: i, onDismiss: s, onClick: l, className: a } = e,
        o = (0, tx.GV)();
    return (0, n.jsxs)("aside", {
        className: r()(tf.kL, a),
        "aria-labelledby": o,
        children: [
            (0, n.jsxs)("div", {
                className: tf.wx,
                children: [
                    (0, n.jsx)(ee.D, {
                        className: tf.r,
                        "aria-label": D.intl.string(D.t["pUR+3g"]),
                        onClick: s,
                        children: (0, n.jsx)(ev.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, n.jsx)(tm.D, {
                        id: o,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: D.intl.string(D.t.zMUr6Z),
                    }),
                ],
            }),
            (0, n.jsx)("ul", {
                className: tf.Vg,
                children: i.map((e) => {
                    let { applicationId: i } = e;
                    return (0, n.jsx)(
                        "li",
                        { children: (0, n.jsx)(th, { onClick: () => l(i), userId: t, applicationId: i }) },
                        i,
                    );
                }),
            }),
        ],
    });
}
function tI(e) {
    let { widgetType: t, ...i } = e,
        { games: l, onAddGame: r } = w(t),
        { setExpanded: a } = ez(),
        { trackUserProfileEditAction: o } = (0, G.NJ)(),
        d = s.useCallback(
            (e) => {
                r(e),
                    a(!0),
                    (0, z.ew)({ widgetType: t, game: { applicationId: e } }),
                    o({ action: "GAME_ADDED", gameId: e, widgetEdited: t });
            },
            [r, t, o, a],
        );
    return (0, n.jsx)(tp, { games: l, onClick: d, ...i });
}
var tj = i(344287);
function tA(e) {
    let { widget: t, ...i } = e;
    switch (t.type) {
        case T.x.FAVORITE_GAMES:
            return (0, n.jsx)(e6, { widget: t, ...i });
        case T.x.CURRENT_GAMES:
            return (0, n.jsx)(e5, { widget: t, ...i });
        case T.x.WANT_TO_PLAY_GAMES:
            return (0, n.jsx)(tu, { widget: t, ...i });
        case T.x.PLAYED_GAMES:
            return (0, n.jsx)(tc, { widget: t, ...i });
        default:
            return null;
    }
}
function tE(e) {
    let { widget: t, user: i, allowEditing: l, disableInteraction: r, ...o } = e,
        { setExpanded: d } = ez(),
        { shouldShowSuggestions: c, handleDismissSuggestions: u } = (function (e) {
            let [t, i] = s.useState(!1),
                n = e.type,
                l = (0, a.bG)([eR.default, eO.A], () => {
                    let e = eR.default.getId();
                    if (null == e) return !1;
                    let t = eO.A.getUserProfile(e);
                    return (t?.widgets ?? []).some((e) => e.type === n);
                }),
                r = (0, z.uA)(e);
            return {
                shouldShowSuggestions: !l && !t && !r,
                handleDismissSuggestions: s.useCallback(() => {
                    i(!0);
                }, []),
            };
        })(t),
        g = l && !r,
        m = g && c,
        x = (0, z.L)(t),
        f = (0, z.FM)(t, { showEditingControls: g }),
        h = (0, z.uA)(t),
        p = 1 === (0, z.cv)(t.type);
    return (0, n.jsx)(tA, {
        widget: t,
        user: i,
        allowEditing: l,
        disableInteraction: r,
        headerTitle: x,
        headerSubtitle: f,
        headerActionButtons:
            g && !p
                ? [
                      (0, n.jsx)(
                          eH,
                          { disabled: h, widgetType: t.type, widget: t, onAddGame: () => d(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: m && (0, n.jsx)(tI, { userId: i.id, widgetType: t.type, onDismiss: u, className: tj.r }),
        ...o,
    });
}
function tS(e) {
    let { widget: t, ...i } = e;
    return (0, n.jsx)(eX, { widgetType: t.type, children: (0, n.jsx)(tE, { widget: t, ...i }) });
}
var tv = i(576260),
    tT = i(94160),
    tN = i(96173),
    tb = i(117937),
    tC = i(902394);
function tw(e) {
    let { userId: t } = e,
        { trackUserProfileAction: i, trackUserProfileEditAction: l } = (0, G.NJ)(),
        r = s.useRef(!1),
        o = (0, a.bG)([eO.A], () => eO.A.getUserProfile(t)?.fetchError != null, [t]),
        c = (0, tN.A)();
    return (
        s.useEffect(() => {
            r.current || o || (i({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (r.current = !0));
        }, [o, i]),
        (0, n.jsxs)("div", {
            className: tC.Ie,
            children: [
                (0, n.jsxs)("div", {
                    className: tC.FS,
                    children: [
                        (0, n.jsx)(tm.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: D.intl.string(D.t["oqalC+"]),
                        }),
                        (0, n.jsx)(d.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: o ? D.intl.string(D.t["+W59o5"]) : D.intl.string(D.t.O9SQ1c),
                        }),
                    ],
                }),
                !o &&
                    (0, n.jsx)("ul", {
                        className: tC.ZW,
                        "aria-label": D.intl.string(D.t["+EIBSA"]),
                        children: c.map((e) =>
                            (0, n.jsx)(
                                "li",
                                {
                                    children: (0, n.jsx)(tb.A, {
                                        widget: e,
                                        size: "small",
                                        trackUserProfileEditAction: l,
                                    }),
                                },
                                e.getUniqueKey(),
                            ),
                        ),
                    }),
            ],
        })
    );
}
var tk = i(456620);
function ty(e) {
    let { widget: t, ...i } = e;
    return t instanceof f.R
        ? (0, n.jsx)(O.A, { widget: t, ...i })
        : (0, p.fu)(t)
          ? (0, n.jsx)(tS, { widget: t, ...i })
          : t instanceof h.k
            ? (0, n.jsx)(ef, { widget: t, ...i })
            : null;
}
function tR() {
    return (0, n.jsxs)("div", {
        className: tk.mJ,
        children: [
            (0, n.jsx)(o.m, { size: "xs" }),
            (0, n.jsx)(d.E, {
                "aria-label": D.intl.string(D.t["7blcz6"]),
                variant: "text-xs/normal",
                color: "text-muted",
                children: D.intl.string(D.t["7blcz6"]),
            }),
        ],
    });
}
function tO(e) {
    let { user: t, guildId: i, channelId: l } = e,
        r = (0, y.A)(t.id),
        o = (0, R.A)(t.id),
        d = (function () {
            let [e, t] = (0, a.yK)([x.A], () => [x.A.ipCountryCode, x.A.ipCountryCodeRequest]),
                i = (0, g.Z)();
            return (
                s.useEffect(() => {
                    null == e && null == t && i && (0, u.xe)();
                }, [e, t, i]),
                "GB" === e && i
            );
        })(),
        h = 0 === r.length && o,
        I = s.useMemo(() => r.filter(p.fu), [r]),
        j = s.useMemo(() => r.filter((e) => e instanceof f.R), [r]);
    function S() {
        return (0, n.jsxs)(n.Fragment, {
            children: [
                o &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(U, { className: tk.cG }), d && (0, n.jsx)(tR, {}), (0, n.jsx)(ek, {})],
                    }),
                r.map((e, s) =>
                    (0, n.jsx)(
                        ty,
                        { widget: e, user: t, guildId: i, channelId: l, allowEditing: o, index: s },
                        e.getUniqueKey(),
                    ),
                ),
            ],
        });
    }
    return (!(function (e, t) {
        let [i, n, l, r] = (0, a.yK)([E.A], () => [
                E.A.suggestedFetchAttempted,
                E.A.suggestedFetchError,
                E.A.suggestedGameIds,
                E.A.suggestedFetchIsLoading,
            ]),
            { onLoad: o } = C();
        s.useEffect(() => {
            !i && e && A.A.fetchSuggestedGames();
        }, [i, e]);
        let d = i && !r;
        s.useEffect(() => {
            if (!d) return;
            let e = t.map((e) => e.games).flat();
            n || o(l.suggestedGamesIds ?? [], l.suggestedWishlistGamesIds ?? [], e);
        }, [d]);
    })(o, I),
    !(function (e, t) {
        let i = s.useMemo(() => t.map((e) => e.applicationId), [t]);
        (0, c.A)(i);
        let { data: n, refetch: l } = (0, m.P)(e),
            r = s.useRef(null !== n);
        s.useEffect(() => {
            r.current && ((r.current = !1), l());
        }, [l]);
    })(t.id, j),
    h)
        ? (0, n.jsx)(tw, { userId: t.id })
        : o
          ? (0, n.jsx)(F.D, { children: S() })
          : S();
}
function t_(e) {
    let { user: t, ...i } = e,
        l = s.useRef(null);
    (0, k.i)({ containerRef: l });
    let a = (0, tv.k)(t.id);
    return (0, n.jsxs)(tT.K, {
        "data-scroller": !0,
        scrollerRef: l,
        className: r()(tk.XG, { [tk.az]: a }),
        fade: !0,
        children: [(0, n.jsx)(ey.A, { scrollerRef: l }), (0, n.jsx)(tO, { user: t, ...i })],
    });
}
