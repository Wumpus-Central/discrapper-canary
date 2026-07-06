n.d(t, { default: () => z, d: () => F });
var l = n(627968),
    i = n(64700),
    s = n(189213),
    a = n(452027),
    r = n(243721),
    o = n(17928),
    c = n(990078),
    d = n(192308),
    u = n(454292),
    m = n(793574),
    h = n(355622),
    x = n(408018),
    g = n(138617),
    f = n(376310),
    j = n(659617),
    v = n(474078),
    p = n(747926),
    A = n(55294),
    C = n(480595),
    N = n(461213),
    b = n(807632),
    E = n(123292),
    S = n(834730),
    y = n(688810),
    T = n(359800),
    I = n(206828),
    _ = n(769015),
    k = n(774418),
    M = n(375708),
    R = n(27549);
function w(e) {
    let t,
        { application: n, size: i = "md", analyticsLocation: s = m.A.GAME_INVITE_CHANNEL_ACCOUNT_LINK_BANNER } = e,
        { analyticsLocations: a } = (0, y.Ay)(s),
        { canStartAuthorization: r, hasAlreadyLinked: o, startAuthorization: c, fetched: d } = (0, I.RD)(n),
        u = (0, T.z)(c, o);
    if (!d || !r || o) return null;
    let h = !1;
    return (
        "sm" === i
            ? (t = M.intl.format(k.default.vznMVa, { onClick: () => u({ analyticsLocations: a }) }))
            : ((t = M.intl.string(k.default.UHF2Zn)), (h = !0)),
        (0, l.jsxs)("div", {
            className: R._,
            children: [
                (0, l.jsx)(_.A, { game: n, size: _.M.MEDIUM }),
                (0, l.jsx)(S.E, { variant: "text-sm/medium", color: "text-default", className: R.d, children: t }),
                h
                    ? (0, l.jsx)(E.Q, {
                          variant: "primary",
                          size: "sm",
                          text: M.intl.string(k.default.EBSaL4),
                          onClick: () => u({ analyticsLocations: a }),
                      })
                    : null,
            ],
        })
    );
}
var L = n(652215);
n(253913);
var D = n(939422);
let P = h.oU.CREATE_GAME_INVITE_POST_DESCRIPTION,
    O = "create-game-invite-post";
function F(e) {
    (0, d.openModalLazy)(
        async () => {
            let { default: t } = await Promise.resolve().then(n.bind(n, 515408));
            return (n) => (0, l.jsx)(t, { ...n, parentChannel: e });
        },
        { modalKey: O },
    );
}
let G = () => Promise.resolve({ shouldClear: !1, shouldRefocus: !1 });
function z(e) {
    let t,
        { parentChannel: n, transitionState: d, onClose: h } = e,
        E = i.useMemo(() => n.availableTags ?? [], [n.availableTags]),
        { application: S } = (0, b._k)(n.guild_id),
        y = (0, o.bG)([C.A, N.A], () => (0, u.A)(C.A, N.A, S?.id), [S]),
        [{ textValue: T, richValue: I }, _] = i.useState(() => (0, x.N3)()),
        [R, F] = i.useState(!1),
        [z, U] = i.useState(() => new Set()),
        [H, B] = i.useState(!1),
        V = i.useMemo(() => E.find((e) => e.name === b.Dg), [E]),
        W = null == V || !z.has(V.id),
        $ = z.size < 5,
        q = i.useCallback((e, t, n) => {
            _({ textValue: t, richValue: n });
        }, []),
        K = i.useCallback((e) => {
            U((t) => {
                let n = new Set(t);
                return n.has(e) ? n.delete(e) : n.add(e), n;
            });
        }, []),
        Y = i.useCallback(
            (e) => {
                null != V &&
                    U((t) => {
                        let n = new Set(t);
                        return e ? n.delete(V.id) : n.add(V.id), n;
                    });
            },
            [V],
        ),
        Q = ((t = T.trim().split("\n")[0] ?? ""), (0, v.A)(t.slice(0, L.Ign), !0)),
        X = i.useMemo(() => {
            if (null != y && (0, b.Ij)(y)) return { type: L.xL.JOIN, activity: y };
        }, [y]),
        J = (0, j.w0)({
            parentChannel: n,
            name: Q,
            appliedTags: z,
            upload: A.Se,
            activityAction: X,
            applicationId: S?.id,
            voiceChatEnabled: W,
        }),
        Z = !H && T.length > 0 && T.length <= 120,
        ee = i.useCallback(async () => {
            if (Z) {
                B(!0);
                try {
                    let e = await J(T);
                    (0, p.JA)(e), h();
                } catch {
                    B(!1);
                }
            }
        }, [Z, J, h, T]);
    return (0, l.jsx)(s.Modal, {
        title: M.intl.string(k.default.tOsHsu),
        transitionState: d,
        onClose: h,
        actions: [
            { variant: "secondary", text: M.intl.string(M.t["ETE/oC"]), onClick: h, disabled: H },
            { variant: "primary", text: M.intl.string(M.t.CumH4u), onClick: ee, disabled: !Z, loading: H },
        ],
        children: (0, l.jsxs)("div", {
            className: D.rf,
            children: [
                (0, l.jsx)(a.D, {
                    required: !0,
                    label: M.intl.string(k.default["/mEbGf"]),
                    children: (0, l.jsx)(g.Ay, {
                        type: P,
                        channel: n,
                        placeholder: M.intl.string(k.default["SU/IAE"]),
                        textValue: T,
                        richValue: I,
                        focused: R,
                        onChange: q,
                        onFocus: () => F(!0),
                        onBlur: () => F(!1),
                        onSubmit: G,
                        parentModalKey: O,
                        disableThemedBackground: !0,
                        maxCharacterCount: 120,
                        showRemainingCharsAfterCount: 120,
                        editorClassName: D.s7,
                    }),
                }),
                E.length > 0
                    ? (0, l.jsx)(a.D, {
                          label: M.intl.string(M.t.KM6lRG),
                          description: M.intl.formatToPlainString(k.default["yoIAe/"], { tagsMax: 5 }),
                          children: (0, l.jsx)("div", {
                              className: D.GA,
                              children: E.map((e) =>
                                  (0, l.jsx)(
                                      f.A,
                                      {
                                          tag: e,
                                          size: f.A.Sizes.SMALL,
                                          selected: z.has(e.id),
                                          onClick: $ || z.has(e.id) ? () => K(e.id) : void 0,
                                          disabled: !z.has(e.id) && !$,
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      })
                    : null,
                (0, l.jsx)(a.D, {
                    layout: "horizontal",
                    label: M.intl.string(k.default.Xd2NFi),
                    description: M.intl.string(k.default.G91SYQ),
                    children: (0, l.jsx)(c.m, {
                        text: M.intl.formatToPlainString(k.default["0s2ICk"], { noMicTagName: b.Dg }),
                        shouldShow: null == V,
                        asContainer: !0,
                        children: (0, l.jsx)(r.d, {
                            checked: W,
                            onChange: Y,
                            disabled: null == V || (!$ && !z.has(V.id)),
                        }),
                    }),
                }),
                null != S &&
                    (0, l.jsx)(w, {
                        application: S,
                        size: "md",
                        analyticsLocation: m.A.GAME_INVITE_CHANNEL_POST_CREATION,
                    }),
            ],
        }),
    });
}
