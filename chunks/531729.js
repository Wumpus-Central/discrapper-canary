n.d(t, { default: () => V, d: () => H });
var l = n(477900),
    i = n(582128),
    s = n(189213),
    a = n(192308),
    r = n(452027),
    o = n(866665),
    c = n(193249),
    d = n(793574),
    u = n(355622),
    m = n(408018),
    h = n(479909),
    x = n(376310),
    g = n(230397),
    f = n(747926),
    j = n(55294),
    v = n(807632),
    p = n(17928),
    A = n(454292),
    C = n(960850),
    N = n(985253),
    b = n(659617),
    E = n(480595),
    S = n(461213),
    y = n(101392),
    T = n(652215),
    I = n(746080),
    _ = n(834730),
    k = n(123292),
    M = n(688810),
    R = n(359800),
    w = n(206828),
    L = n(769015),
    P = n(490094),
    D = n(375708),
    O = n(425256);
function G(e) {
    let t,
        { application: n, size: i = "md", analyticsLocation: s = d.A.GAME_INVITE_CHANNEL_ACCOUNT_LINK_BANNER } = e,
        { analyticsLocations: a } = (0, M.Ay)(s),
        { canStartAuthorization: r, hasAlreadyLinked: o, startAuthorization: c, fetched: u } = (0, w.RD)(n),
        m = (0, R.z)(c, o);
    if (!u || !r || o) return null;
    let h = !1;
    return (
        "sm" === i
            ? (t = D.intl.format(P.default.vznMVa, { onClick: () => m({ analyticsLocations: a }) }))
            : ((t = D.intl.string(P.default.UHF2Zn)), (h = !0)),
        (0, l.jsxs)("div", {
            className: O._,
            children: [
                (0, l.jsx)(L.A, { game: n, size: L.M.MEDIUM }),
                (0, l.jsx)(_.E, { variant: "text-sm/medium", color: "text-default", className: O.d, children: t }),
                h
                    ? (0, l.jsx)(k.Q, {
                          variant: "primary",
                          size: "sm",
                          text: D.intl.string(P.default.EBSaL4),
                          onClick: () => m({ analyticsLocations: a }),
                      })
                    : null,
            ],
        })
    );
}
n(253913);
var F = n(548759);
let z = u.oU.CREATE_GAME_INVITE_POST_DESCRIPTION,
    U = "create-game-invite-post";
function H(e) {
    (0, a.openModalLazy)(
        async () => {
            let { default: t } = await Promise.resolve().then(n.bind(n, 531729));
            return (n) => (0, l.jsx)(t, { ...n, parentChannel: e });
        },
        { modalKey: U },
    );
}
let B = () => Promise.resolve({ shouldClear: !1, shouldRefocus: !1 });
function V(e) {
    let { parentChannel: t, transitionState: n, onClose: a } = e,
        u = i.useMemo(() => t.availableTags ?? [], [t.availableTags]),
        [{ textValue: _, richValue: k }, M] = i.useState(() => (0, m.N3)()),
        [R, w] = i.useState(!1),
        [L, O] = i.useState(() => new Set()),
        H = (0, v.t4)(L),
        {
            application: V,
            noMicTag: W,
            voiceChatEnabled: $,
            voiceToggleDisabled: q,
            isTagRequired: K,
            hasTagRequiredError: Y,
            isSlowmodeEnabled: Q,
            rateLimitPerUser: X,
            slowmodeCooldownGuess: J,
            isBypassSlowmode: Z,
            submitting: ee,
            canSubmit: et,
            submit: en,
        } = (function (e) {
            let { parentChannel: t, description: n, appliedTagIds: l, upload: s, onThreadCreated: a } = e,
                { application: r } = (0, v._k)(t.id),
                o = (0, N.T)(t.gameId),
                c = (0, p.bG)(
                    [E.A, S.A],
                    () => {
                        for (let e of o) {
                            let t = (0, A.A)(E.A, S.A, e);
                            if (null != t && (0, v.Ij)(t)) return t;
                        }
                        return null;
                    },
                    [o],
                ),
                { noMicTag: d, voiceChatEnabled: u, voiceToggleDisabled: m } = (0, v.Qq)(t.availableTags ?? [], l),
                h = i.useMemo(() => {
                    if (null != c && (0, v.Ij)(c)) return { type: T.xL.JOIN, activity: c };
                }, [c]),
                x = (0, b.w0)({
                    parentChannel: t,
                    name: (0, v.Zu)(n),
                    appliedTags: l,
                    activityAction: h,
                    applicationId: r?.id,
                    voiceChatEnabled: u,
                    upload: s,
                    onThreadCreated: a,
                }),
                g = t.hasFlag(I.lx.REQUIRE_TAG),
                f = g && 0 === l.size,
                { rateLimitPerUser: j } = t,
                _ = j > 0,
                k = (0, p.bG)([y.A], () => y.A.getSlowmodeCooldownGuess(t.id, y.R.CreateThread)),
                M = (0, C._i)(t),
                [R, w] = i.useState(!1),
                [L, P] = i.useState(!1),
                D = !R && n.trim().length > 0 && n.length <= v.YS && !(_ && !M && k > 0),
                O = i.useCallback(async () => {
                    if (D) {
                        if (f) return void P(!0);
                        w(!0);
                        try {
                            await x(n);
                        } catch {
                            w(!1);
                        }
                    }
                }, [D, f, x, n]);
            return {
                application: r,
                noMicTag: d,
                voiceChatEnabled: u,
                voiceToggleDisabled: m,
                isTagRequired: g,
                hasTagRequiredError: L && f,
                isSlowmodeEnabled: _,
                rateLimitPerUser: j,
                slowmodeCooldownGuess: k,
                isBypassSlowmode: M,
                submitting: R,
                canSubmit: D,
                submit: O,
            };
        })({
            parentChannel: t,
            description: _,
            appliedTagIds: L,
            upload: j.Se,
            onThreadCreated: (e) => {
                ((0, f.JA)(e), a());
            },
        }),
        el = i.useCallback((e, t, n) => {
            M({ textValue: t, richValue: n });
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
        title: D.intl.string(P.default.tOsHsu),
        transitionState: n,
        onClose: a,
        actions: [
            { variant: "secondary", text: D.intl.string(D.t["ETE/oC"]), onClick: a, disabled: ee },
            { variant: "primary", text: D.intl.string(D.t.CumH4u), onClick: en, disabled: !et, loading: ee },
        ],
        children: (0, l.jsxs)("div", {
            className: F.rf,
            children: [
                (0, l.jsx)(r.D, {
                    required: !0,
                    label: D.intl.string(P.default["/mEbGf"]),
                    children: (0, l.jsx)(h.Ay, {
                        type: z,
                        channel: t,
                        placeholder: D.intl.string(P.default["SU/IAE"]),
                        textValue: _,
                        richValue: k,
                        focused: R,
                        onChange: el,
                        onFocus: () => w(!0),
                        onBlur: () => w(!1),
                        onSubmit: B,
                        parentModalKey: U,
                        disableThemedBackground: !0,
                        maxCharacterCount: v.YS,
                        showRemainingCharsAfterCount: v.YS,
                        editorClassName: F.s7,
                    }),
                }),
                u.length > 0
                    ? (0, l.jsx)(r.D, {
                          label: D.intl.string(D.t.KM6lRG),
                          required: K,
                          errorMessage: Y ? D.intl.string(D.t.xPfNQi) : void 0,
                          description: D.intl.formatToPlainString(P.default["yoIAe/"], { tagsMax: 5 }),
                          children: (0, l.jsx)("div", {
                              className: F.GA,
                              children: u.map((e) =>
                                  (0, l.jsx)(
                                      x.Ay,
                                      {
                                          tag: e,
                                          size: x.Ay.Sizes.SMALL,
                                          selected: L.has(e.id),
                                          onClick: !H || L.has(e.id) ? () => ei(e.id) : void 0,
                                          disabled: !L.has(e.id) && H,
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      })
                    : null,
                (0, l.jsx)(r.D, {
                    layout: "horizontal",
                    label: D.intl.string(P.default.Xd2NFi),
                    description: D.intl.string(P.default.G91SYQ),
                    children: (0, l.jsx)(o.m, {
                        text: D.intl.formatToPlainString(P.default["0s2ICk"], { noMicTagName: v.Dg }),
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
                Q
                    ? (0, l.jsx)("div", {
                          className: F.Vw,
                          children: (0, l.jsx)(g.A, {
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
