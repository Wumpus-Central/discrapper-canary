n.d(t, { d: () => L, default: () => F });
var l = n(627968),
    i = n(64700),
    s = n(123292),
    a = n(189213),
    r = n(452027),
    o = n(243721),
    c = n(17928),
    d = n(990078),
    u = n(192308),
    m = n(834730),
    h = n(793574),
    x = n(688810),
    g = n(359800),
    f = n(46225),
    j = n(627363),
    p = n(355622),
    v = n(408018),
    A = n(201349),
    C = n(376310),
    N = n(137177),
    b = n(659617),
    E = n(474078),
    S = n(747926),
    y = n(55294),
    T = n(71393),
    I = n(807632),
    R = n(652215),
    k = n(774418),
    _ = n(375708),
    M = n(939422);
let w = p.oU.CREATE_GAME_INVITE_POST_DESCRIPTION,
    D = "create-game-invite-post";
function L(e) {
    (0, u.openModalLazy)(
        async () => {
            let { default: t } = await Promise.resolve().then(n.bind(n, 337885));
            return (n) => (0, l.jsx)(t, { ...n, parentChannel: e });
        },
        { modalKey: D },
    );
}
let O = () => Promise.resolve({ shouldClear: !1, shouldRefocus: !1 });
function P(e) {
    let { application: t } = e,
        { analyticsLocations: n } = (0, x.Ay)(h.A.GAME_INVITE_CHANNEL_CREATE_POST),
        { canStartAuthorization: i, hasAlreadyLinked: a, startAuthorization: r, fetched: o } = (0, f.RD)(t),
        c = (0, g.z)(r, a);
    return o && i && !a
        ? (0, l.jsxs)("div", {
              className: M.Op,
              children: [
                  (0, l.jsx)(N.A, { game: t, size: N.M.MEDIUM }),
                  (0, l.jsx)(m.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      className: M.xs,
                      children: _.intl.string(k.default.UHF2Zn),
                  }),
                  (0, l.jsx)(s.Q, {
                      variant: "primary",
                      size: "sm",
                      text: _.intl.string(k.default.EBSaL4),
                      onClick: () => c({ analyticsLocations: n }),
                  }),
              ],
          })
        : null;
}
function F(e) {
    let t,
        { parentChannel: n, transitionState: s, onClose: u } = e,
        m = i.useMemo(() => n.availableTags ?? [], [n.availableTags]),
        h = (0, c.bG)([T.A], () => T.A.getGuild(n.guild_id)?.gameApplicationIds?.[0], [n.guild_id]),
        { data: x } = (0, j.YY)(h),
        [{ textValue: g, richValue: f }, p] = i.useState(() => (0, v.N3)()),
        [N, L] = i.useState(!1),
        [F, G] = i.useState(() => new Set()),
        [U, z] = i.useState(!1),
        H = i.useMemo(() => m.find((e) => e.name === I.Dg), [m]),
        B = null == H || !F.has(H.id),
        V = i.useCallback((e, t, n) => {
            p({ textValue: t, richValue: n });
        }, []),
        W = i.useCallback((e) => {
            G((t) => {
                let n = new Set(t);
                return n.has(e) ? n.delete(e) : n.add(e), n;
            });
        }, []),
        $ = i.useCallback(
            (e) => {
                null != H &&
                    G((t) => {
                        let n = new Set(t);
                        return e ? n.delete(H.id) : n.add(H.id), n;
                    });
            },
            [H],
        ),
        q = ((t = g.trim().split("\n")[0] ?? ""), (0, E.A)(t.slice(0, R.Ign), !0)),
        K = (0, b.w0)({ parentChannel: n, name: q, appliedTags: F, upload: y.Se }),
        Y = !U && g.length > 0 && g.length <= 120,
        X = i.useCallback(async () => {
            if (Y) {
                z(!0);
                try {
                    let e = await K(g);
                    (0, S.JA)(e), u();
                } catch {
                    z(!1);
                }
            }
        }, [Y, K, u, g]);
    return (0, l.jsx)(a.Modal, {
        title: _.intl.string(k.default.tOsHsu),
        transitionState: s,
        onClose: u,
        actions: [
            { variant: "secondary", text: _.intl.string(_.t["ETE/oC"]), onClick: u, disabled: U },
            { variant: "primary", text: _.intl.string(_.t.CumH4u), onClick: X, disabled: !Y, loading: U },
        ],
        children: (0, l.jsxs)("div", {
            className: M.rf,
            children: [
                (0, l.jsx)(r.D, {
                    required: !0,
                    label: _.intl.string(k.default["/mEbGf"]),
                    children: (0, l.jsx)(A.Ay, {
                        type: w,
                        channel: n,
                        placeholder: _.intl.string(k.default["SU/IAE"]),
                        textValue: g,
                        richValue: f,
                        focused: N,
                        onChange: V,
                        onFocus: () => L(!0),
                        onBlur: () => L(!1),
                        onSubmit: O,
                        parentModalKey: D,
                        disableThemedBackground: !0,
                        maxCharacterCount: 120,
                        showRemainingCharsAfterCount: 120,
                    }),
                }),
                m.length > 0
                    ? (0, l.jsx)(r.D, {
                          label: _.intl.string(_.t.KM6lRG),
                          description: _.intl.string(k.default["yoIAe/"]),
                          children: (0, l.jsx)("div", {
                              className: M.GA,
                              children: m.map((e) =>
                                  (0, l.jsx)(
                                      C.A,
                                      { tag: e, size: C.A.Sizes.SMALL, selected: F.has(e.id), onClick: () => W(e.id) },
                                      e.id,
                                  ),
                              ),
                          }),
                      })
                    : null,
                (0, l.jsx)(r.D, {
                    layout: "horizontal",
                    label: _.intl.string(k.default.Xd2NFi),
                    description: _.intl.string(k.default.G91SYQ),
                    children: (0, l.jsx)(d.m, {
                        text: _.intl.formatToPlainString(k.default["0s2ICk"], { noMicTagName: I.Dg }),
                        shouldShow: null == H,
                        asContainer: !0,
                        children: (0, l.jsx)(o.d, { checked: B, onChange: $, disabled: null == H }),
                    }),
                }),
                null != x && (0, l.jsx)(P, { application: x }),
            ],
        }),
    });
}
