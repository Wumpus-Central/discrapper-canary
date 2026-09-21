n.d(t, { default: () => z, d: () => F });
var l = n(477900),
    i = n(582128),
    s = n(189213),
    a = n(452027),
    r = n(193249),
    o = n(192308),
    c = n(866665),
    d = n(793574),
    u = n(355622),
    m = n(408018),
    h = n(959070),
    x = n(376310),
    g = n(747926),
    f = n(55294),
    j = n(807632),
    v = n(17928),
    p = n(454292),
    A = n(985253),
    C = n(659617),
    N = n(480595),
    b = n(461213),
    E = n(652215),
    S = n(123292),
    y = n(834730),
    T = n(688810),
    I = n(359800),
    _ = n(206828),
    k = n(769015),
    M = n(490094),
    R = n(375708),
    w = n(425256);
function L(e) {
    let t,
        { application: n, size: i = "md", analyticsLocation: s = d.A.GAME_INVITE_CHANNEL_ACCOUNT_LINK_BANNER } = e,
        { analyticsLocations: a } = (0, T.Ay)(s),
        { canStartAuthorization: r, hasAlreadyLinked: o, startAuthorization: c, fetched: u } = (0, _.RD)(n),
        m = (0, I.z)(c, o);
    if (!u || !r || o) return null;
    let h = !1;
    return (
        "sm" === i
            ? (t = R.intl.format(M.default.vznMVa, { onClick: () => m({ analyticsLocations: a }) }))
            : ((t = R.intl.string(M.default.UHF2Zn)), (h = !0)),
        (0, l.jsxs)("div", {
            className: w._,
            children: [
                (0, l.jsx)(k.A, { game: n, size: k.M.MEDIUM }),
                (0, l.jsx)(y.E, { variant: "text-sm/medium", color: "text-default", className: w.d, children: t }),
                h
                    ? (0, l.jsx)(S.Q, {
                          variant: "primary",
                          size: "sm",
                          text: R.intl.string(M.default.EBSaL4),
                          onClick: () => m({ analyticsLocations: a }),
                      })
                    : null,
            ],
        })
    );
}
n(253913);
var P = n(548759);
let D = u.oU.CREATE_GAME_INVITE_POST_DESCRIPTION,
    O = "create-game-invite-post";
function F(e) {
    (0, o.openModalLazy)(
        async () => {
            let { default: t } = await Promise.resolve().then(n.bind(n, 531729));
            return (n) => (0, l.jsx)(t, { ...n, parentChannel: e });
        },
        { modalKey: O },
    );
}
let G = () => Promise.resolve({ shouldClear: !1, shouldRefocus: !1 });
function z(e) {
    let { parentChannel: t, transitionState: n, onClose: o } = e,
        u = i.useMemo(() => t.availableTags ?? [], [t.availableTags]),
        [{ textValue: S, richValue: y }, T] = i.useState(() => (0, m.N3)()),
        [I, _] = i.useState(!1),
        [k, w] = i.useState(() => new Set()),
        F = (0, j.t4)(k),
        {
            application: z,
            noMicTag: U,
            voiceChatEnabled: H,
            voiceToggleDisabled: B,
            submitting: V,
            canSubmit: W,
            submit: $,
        } = (function (e) {
            let { parentChannel: t, description: n, appliedTagIds: l, upload: s, onThreadCreated: a } = e,
                { application: r } = (0, j._k)(t.id),
                o = (0, A.T)(t.gameId),
                c = (0, v.bG)(
                    [N.A, b.A],
                    () => {
                        for (let e of o) {
                            let t = (0, p.A)(N.A, b.A, e);
                            if (null != t && (0, j.Ij)(t)) return t;
                        }
                        return null;
                    },
                    [o],
                ),
                { noMicTag: d, voiceChatEnabled: u, voiceToggleDisabled: m } = (0, j.Qq)(t.availableTags ?? [], l),
                h = i.useMemo(() => {
                    if (null != c && (0, j.Ij)(c)) return { type: E.xL.JOIN, activity: c };
                }, [c]),
                x = (0, C.w0)({
                    parentChannel: t,
                    name: (0, j.Zu)(n),
                    appliedTags: l,
                    activityAction: h,
                    applicationId: r?.id,
                    voiceChatEnabled: u,
                    upload: s,
                    onThreadCreated: a,
                }),
                [g, f] = i.useState(!1),
                S = !g && n.trim().length > 0 && n.length <= j.YS,
                y = i.useCallback(async () => {
                    if (S) {
                        f(!0);
                        try {
                            await x(n);
                        } catch {
                            f(!1);
                        }
                    }
                }, [S, x, n]);
            return {
                application: r,
                noMicTag: d,
                voiceChatEnabled: u,
                voiceToggleDisabled: m,
                submitting: g,
                canSubmit: S,
                submit: y,
            };
        })({
            parentChannel: t,
            description: S,
            appliedTagIds: k,
            upload: f.Se,
            onThreadCreated: (e) => {
                ((0, g.JA)(e), o());
            },
        }),
        q = i.useCallback((e, t, n) => {
            T({ textValue: t, richValue: n });
        }, []),
        K = i.useCallback((e) => {
            w((t) => {
                let n = new Set(t);
                return (n.has(e) ? n.delete(e) : n.add(e), n);
            });
        }, []),
        Y = i.useCallback(
            (e) => {
                null != U &&
                    w((t) => {
                        let n = new Set(t);
                        return (e ? n.delete(U.id) : n.add(U.id), n);
                    });
            },
            [U],
        );
    return (0, l.jsx)(s.Modal, {
        title: R.intl.string(M.default.tOsHsu),
        transitionState: n,
        onClose: o,
        actions: [
            { variant: "secondary", text: R.intl.string(R.t["ETE/oC"]), onClick: o, disabled: V },
            { variant: "primary", text: R.intl.string(R.t.CumH4u), onClick: $, disabled: !W, loading: V },
        ],
        children: (0, l.jsxs)("div", {
            className: P.rf,
            children: [
                (0, l.jsx)(a.D, {
                    required: !0,
                    label: R.intl.string(M.default["/mEbGf"]),
                    children: (0, l.jsx)(h.Ay, {
                        type: D,
                        channel: t,
                        placeholder: R.intl.string(M.default["SU/IAE"]),
                        textValue: S,
                        richValue: y,
                        focused: I,
                        onChange: q,
                        onFocus: () => _(!0),
                        onBlur: () => _(!1),
                        onSubmit: G,
                        parentModalKey: O,
                        disableThemedBackground: !0,
                        maxCharacterCount: j.YS,
                        showRemainingCharsAfterCount: j.YS,
                        editorClassName: P.s7,
                    }),
                }),
                u.length > 0
                    ? (0, l.jsx)(a.D, {
                          label: R.intl.string(R.t.KM6lRG),
                          description: R.intl.formatToPlainString(M.default["yoIAe/"], { tagsMax: 5 }),
                          children: (0, l.jsx)("div", {
                              className: P.GA,
                              children: u.map((e) =>
                                  (0, l.jsx)(
                                      x.A,
                                      {
                                          tag: e,
                                          size: x.A.Sizes.SMALL,
                                          selected: k.has(e.id),
                                          onClick: !F || k.has(e.id) ? () => K(e.id) : void 0,
                                          disabled: !k.has(e.id) && F,
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      })
                    : null,
                (0, l.jsx)(a.D, {
                    layout: "horizontal",
                    label: R.intl.string(M.default.Xd2NFi),
                    description: R.intl.string(M.default.G91SYQ),
                    children: (0, l.jsx)(c.m, {
                        text: R.intl.formatToPlainString(M.default["0s2ICk"], { noMicTagName: j.Dg }),
                        shouldShow: null == U,
                        asContainer: !0,
                        children: (0, l.jsx)(r.d, { checked: H, onChange: Y, disabled: B }),
                    }),
                }),
                null != z &&
                    (0, l.jsx)(L, {
                        application: z,
                        size: "md",
                        analyticsLocation: d.A.GAME_INVITE_CHANNEL_POST_CREATION,
                    }),
            ],
        }),
    });
}
