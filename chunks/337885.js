n.d(t, { d: () => D, default: () => P });
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
    k = n(375708),
    _ = n(939422);
let M = p.oU.CREATE_GAME_INVITE_POST_DESCRIPTION,
    w = "create-game-invite-post";
function D(e) {
    (0, u.openModalLazy)(
        async () => {
            let { default: t } = await Promise.resolve().then(n.bind(n, 337885));
            return (n) => (0, l.jsx)(t, { ...n, parentChannel: e });
        },
        { modalKey: w },
    );
}
let L = () => Promise.resolve({ shouldClear: !1, shouldRefocus: !1 });
function O(e) {
    let { application: t } = e,
        { analyticsLocations: n } = (0, x.Ay)(h.A.GAME_INVITE_CHANNEL_CREATE_POST),
        { canStartAuthorization: i, hasAlreadyLinked: a, startAuthorization: r, fetched: o } = (0, f.RD)(t),
        c = (0, g.z)(r, a);
    return o && i && !a
        ? (0, l.jsxs)("div", {
              className: _.Op,
              children: [
                  (0, l.jsx)(N.A, { game: t, size: N.M.MEDIUM }),
                  (0, l.jsx)(m.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      className: _.xs,
                      children: k.intl.string(k.t.UHF2Zn),
                  }),
                  (0, l.jsx)(s.Q, {
                      variant: "primary",
                      size: "sm",
                      text: k.intl.string(k.t.EBSaL4),
                      onClick: () => c({ analyticsLocations: n }),
                  }),
              ],
          })
        : null;
}
function P(e) {
    let t,
        { parentChannel: n, transitionState: s, onClose: u } = e,
        m = i.useMemo(() => n.availableTags ?? [], [n.availableTags]),
        h = (0, c.bG)([T.A], () => T.A.getGuild(n.guild_id)?.gameApplicationIds?.[0], [n.guild_id]),
        { data: x } = (0, j.YY)(h),
        [{ textValue: g, richValue: f }, p] = i.useState(() => (0, v.N3)()),
        [N, D] = i.useState(!1),
        [P, F] = i.useState(() => new Set()),
        [G, U] = i.useState(!1),
        z = i.useMemo(() => m.find((e) => e.name === I.Dg), [m]),
        H = null == z || !P.has(z.id),
        B = i.useCallback((e, t, n) => {
            p({ textValue: t, richValue: n });
        }, []),
        V = i.useCallback((e) => {
            F((t) => {
                let n = new Set(t);
                return n.has(e) ? n.delete(e) : n.add(e), n;
            });
        }, []),
        W = i.useCallback(
            (e) => {
                null != z &&
                    F((t) => {
                        let n = new Set(t);
                        return e ? n.delete(z.id) : n.add(z.id), n;
                    });
            },
            [z],
        ),
        $ = ((t = g.trim().split("\n")[0] ?? ""), (0, E.A)(t.slice(0, R.Ign), !0)),
        q = (0, b.w0)({ parentChannel: n, name: $, appliedTags: P, upload: y.Se }),
        K = !G && g.length > 0 && g.length <= 120,
        Y = i.useCallback(async () => {
            if (K) {
                U(!0);
                try {
                    let e = await q(g);
                    (0, S.JA)(e), u();
                } catch {
                    U(!1);
                }
            }
        }, [K, q, u, g]);
    return (0, l.jsx)(a.Modal, {
        title: k.intl.string(k.t.tOsHsu),
        transitionState: s,
        onClose: u,
        actions: [
            { variant: "secondary", text: k.intl.string(k.t["ETE/oC"]), onClick: u, disabled: G },
            { variant: "primary", text: k.intl.string(k.t.CumH4u), onClick: Y, disabled: !K, loading: G },
        ],
        children: (0, l.jsxs)("div", {
            className: _.rf,
            children: [
                (0, l.jsx)(r.D, {
                    required: !0,
                    label: k.intl.string(k.t["/mEbGf"]),
                    children: (0, l.jsx)(A.Ay, {
                        type: M,
                        channel: n,
                        placeholder: k.intl.string(k.t["SU/IAE"]),
                        textValue: g,
                        richValue: f,
                        focused: N,
                        onChange: B,
                        onFocus: () => D(!0),
                        onBlur: () => D(!1),
                        onSubmit: L,
                        parentModalKey: w,
                        disableThemedBackground: !0,
                        maxCharacterCount: 120,
                        showRemainingCharsAfterCount: 120,
                    }),
                }),
                m.length > 0
                    ? (0, l.jsx)(r.D, {
                          label: k.intl.string(k.t.KM6lRG),
                          description: k.intl.string(k.t["yoIAe/"]),
                          children: (0, l.jsx)("div", {
                              className: _.GA,
                              children: m.map((e) =>
                                  (0, l.jsx)(
                                      C.A,
                                      { tag: e, size: C.A.Sizes.SMALL, selected: P.has(e.id), onClick: () => V(e.id) },
                                      e.id,
                                  ),
                              ),
                          }),
                      })
                    : null,
                (0, l.jsx)(r.D, {
                    layout: "horizontal",
                    label: k.intl.string(k.t.Xd2NFi),
                    description: k.intl.string(k.t.G91SYQ),
                    children: (0, l.jsx)(d.m, {
                        text: k.intl.formatToPlainString(k.t["0s2ICk"], { noMicTagName: I.Dg }),
                        shouldShow: null == z,
                        asContainer: !0,
                        children: (0, l.jsx)(o.d, { checked: H, onChange: W, disabled: null == z }),
                    }),
                }),
                null != x && (0, l.jsx)(O, { application: x }),
            ],
        }),
    });
}
