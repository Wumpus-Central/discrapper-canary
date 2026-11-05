n.d(t, { default: () => V, d: () => H });
var l = n(477900),
    i = n(582128),
    s = n(189213),
    a = n(192308),
    r = n(452027),
    o = n(866665),
    c = n(143129),
    d = n(793574),
    u = n(355622),
    m = n(408018),
    h = n(989161),
    g = n(376310),
    x = n(230397),
    f = n(747926),
    j = n(55294),
    v = n(807632),
    p = n(855986),
    b = n(454292),
    C = n(960850),
    A = n(985253),
    N = n(971389),
    y = n(491009),
    E = n(894768),
    S = n(101392),
    I = n(652215),
    T = n(746080),
    M = n(834730),
    k = n(123292),
    R = n(688810),
    _ = n(359800),
    w = n(724302),
    P = n(769015),
    D = n(354817),
    L = n(792996),
    O = n(425256);
function G(e) {
    let t,
        { application: n, size: i = "md", analyticsLocation: s = d.A.GAME_INVITE_CHANNEL_ACCOUNT_LINK_BANNER } = e,
        { analyticsLocations: a } = (0, R.Ay)(s),
        { canStartAuthorization: r, hasAlreadyLinked: o, startAuthorization: c, fetched: u } = (0, w.RD)(n),
        m = (0, _.z)(c, o);
    if (!u || !r || o) return null;
    let h = !1;
    return (
        "sm" === i
            ? (t = L.intl.format(D.default.vznMVa, { onClick: () => m({ analyticsLocations: a }) }))
            : ((t = L.intl.string(D.default.UHF2Zn)), (h = !0)),
        (0, l.jsxs)("div", {
            className: O._,
            children: [
                (0, l.jsx)(P.A, { game: n, size: P.M.MEDIUM }),
                (0, l.jsx)(M.E, { variant: "body-sm/medium", color: "text-default", className: O.d, children: t }),
                h
                    ? (0, l.jsx)(k.Q, {
                          variant: "primary",
                          size: "sm",
                          text: L.intl.string(D.default.EBSaL4),
                          onClick: () => m({ analyticsLocations: a }),
                      })
                    : null,
            ],
        })
    );
}
n(253913);
var F = n(548759);
let U = u.oU.CREATE_GAME_INVITE_POST_DESCRIPTION,
    z = "create-game-invite-post";
function H(e) {
    (0, a.mM)(
        async () => {
            let { default: t } = await Promise.resolve().then(n.bind(n, 371115));
            return (n) => (0, l.jsx)(t, { ...n, parentChannel: e });
        },
        { modalKey: z },
    );
}
let B = () => Promise.resolve({ shouldClear: !1, shouldRefocus: !1 });
function V(e) {
    let { parentChannel: t, transitionState: n, onClose: a } = e,
        u = i.useMemo(() => t.availableTags ?? [], [t.availableTags]),
        [{ textValue: M, richValue: k }, R] = i.useState(() => (0, m.N3)()),
        [_, w] = i.useState(!1),
        [P, O] = i.useState(() => new Set()),
        H = (0, v.t4)(P),
        {
            application: V,
            noMicTag: W,
            voiceChatEnabled: $,
            voiceToggleDisabled: q,
            isTagRequired: K,
            hasTagRequiredError: Q,
            isSlowmodeEnabled: Y,
            rateLimitPerUser: X,
            slowmodeCooldownGuess: J,
            isBypassSlowmode: Z,
            submitting: ee,
            canSubmit: et,
            submit: en,
        } = (function (e) {
            let { parentChannel: t, description: n, appliedTagIds: l, upload: s, onThreadCreated: a } = e,
                { application: r } = (0, v._k)(t.id),
                o = (0, A.T)(t.gameId),
                c = (0, p.bG)(
                    [y.A, E.A],
                    () => {
                        for (let e of o) {
                            let t = (0, b.A)(y.A, E.A, e);
                            if (null != t && (0, v.Ij)(t)) return t;
                        }
                        return null;
                    },
                    [o],
                ),
                { noMicTag: d, voiceChatEnabled: u, voiceToggleDisabled: m } = (0, v.Qq)(t.availableTags ?? [], l),
                h = i.useMemo(() => {
                    if (null != c && (0, v.Ij)(c)) return { type: I.xL.JOIN, activity: c };
                }, [c]),
                g = (0, N.w0)({
                    parentChannel: t,
                    name: (0, v.Zu)(n),
                    appliedTags: l,
                    activityAction: h,
                    applicationId: r?.id,
                    voiceChatEnabled: u,
                    upload: s,
                    onThreadCreated: a,
                }),
                x = t.hasFlag(T.lx.REQUIRE_TAG),
                f = x && 0 === l.size,
                { rateLimitPerUser: j } = t,
                M = j > 0,
                k = (0, p.bG)([S.A], () => S.A.getSlowmodeCooldownGuess(t.id, S.R.CreateThread)),
                R = (0, C._i)(t),
                [_, w] = i.useState(!1),
                [P, D] = i.useState(!1),
                L = !_ && n.trim().length > 0 && n.length <= 120 && !(M && !R && k > 0),
                O = i.useCallback(async () => {
                    if (L) {
                        if (f) return void D(!0);
                        w(!0);
                        try {
                            await g(n);
                        } catch {
                            w(!1);
                        }
                    }
                }, [L, f, g, n]);
            return {
                application: r,
                noMicTag: d,
                voiceChatEnabled: u,
                voiceToggleDisabled: m,
                isTagRequired: x,
                hasTagRequiredError: P && f,
                isSlowmodeEnabled: M,
                rateLimitPerUser: j,
                slowmodeCooldownGuess: k,
                isBypassSlowmode: R,
                submitting: _,
                canSubmit: L,
                submit: O,
            };
        })({
            parentChannel: t,
            description: M,
            appliedTagIds: P,
            upload: j.Se,
            onThreadCreated: (e) => {
                ((0, f.GS)(e), a());
            },
        }),
        el = i.useCallback((e, t, n) => {
            R({ textValue: t, richValue: n });
        }, []),
        ei = i.useCallback((e) => {
            O((t) => {
                let n = new Set(t);
                return (n.has(e) ? n.delete(e) : n.add(e), n);
            });
        }, []),
        es = i.useCallback(
            (e) => {
                null != W &&
                    O((t) => {
                        let n = new Set(t);
                        return (e ? n.delete(W.id) : n.add(W.id), n);
                    });
            },
            [W],
        );
    return (0, l.jsx)(s.a, {
        title: L.intl.string(D.default.tOsHsu),
        transitionState: n,
        onClose: a,
        actions: [
            { variant: "secondary", text: L.intl.string(L.t["ETE/oC"]), onClick: a, disabled: ee },
            { variant: "primary", text: L.intl.string(L.t.CumH4u), onClick: en, disabled: !et, loading: ee },
        ],
        children: (0, l.jsxs)("div", {
            className: F.rf,
            children: [
                (0, l.jsx)(r.D, {
                    required: !0,
                    label: L.intl.string(D.default["/mEbGf"]),
                    children: (0, l.jsx)(h.Ay, {
                        type: U,
                        channel: t,
                        placeholder: L.intl.string(D.default["SU/IAE"]),
                        textValue: M,
                        richValue: k,
                        focused: _,
                        onChange: el,
                        onFocus: () => w(!0),
                        onBlur: () => w(!1),
                        onSubmit: B,
                        parentModalKey: z,
                        disableThemedBackground: !0,
                        maxCharacterCount: 120,
                        showRemainingCharsAfterCount: 120,
                        editorClassName: F.s7,
                    }),
                }),
                u.length > 0
                    ? (0, l.jsx)(r.D, {
                          label: L.intl.string(L.t.KM6lRG),
                          required: K,
                          errorMessage: Q ? L.intl.string(L.t.xPfNQi) : void 0,
                          description: L.intl.formatToPlainString(D.default["yoIAe/"], { tagsMax: 5 }),
                          children: (0, l.jsx)("div", {
                              className: F.GA,
                              children: u.map((e) =>
                                  (0, l.jsx)(
                                      g.Ay,
                                      {
                                          tag: e,
                                          size: g.Ay.Sizes.SMALL,
                                          selected: P.has(e.id),
                                          onClick: !H || P.has(e.id) ? () => ei(e.id) : void 0,
                                          disabled: !P.has(e.id) && H,
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      })
                    : null,
                (0, l.jsx)(r.D, {
                    layout: "horizontal",
                    label: L.intl.string(D.default.Xd2NFi),
                    description: L.intl.string(D.default.G91SYQ),
                    children: (0, l.jsx)(o.m, {
                        text: L.intl.formatToPlainString(D.default["0s2ICk"], { noMicTagName: "No Mic" }),
                        shouldShow: null == W,
                        asContainer: !0,
                        children: (0, l.jsx)(c.d, { checked: $, onChange: es, disabled: q }),
                    }),
                }),
                null != V &&
                    (0, l.jsx)(G, {
                        application: V,
                        size: "md",
                        analyticsLocation: d.A.GAME_INVITE_CHANNEL_POST_CREATION,
                    }),
                Y
                    ? (0, l.jsx)("div", {
                          className: F.Vw,
                          children: (0, l.jsx)(x.A, {
                              rateLimitPerUser: X,
                              slowmodeCooldownGuess: J,
                              isBypassSlowmode: Z,
                              leadingIcon: !0,
                          }),
                      })
                    : null,
            ],
        }),
    });
}
