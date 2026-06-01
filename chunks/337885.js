n.d(t, { d: () => M, default: () => k });
var l = n(627968),
    i = n(64700),
    s = n(189213),
    a = n(452027),
    r = n(243721),
    o = n(17928),
    d = n(990078),
    c = n(192308),
    u = n(454292),
    m = n(355622),
    h = n(408018),
    g = n(201349),
    x = n(376310),
    f = n(659617),
    j = n(474078),
    p = n(747926),
    v = n(55294),
    A = n(480595),
    C = n(461213),
    N = n(807632),
    b = n(437992),
    E = n(652215),
    S = n(774418),
    y = n(375708),
    T = n(939422);
let I = m.oU.CREATE_GAME_INVITE_POST_DESCRIPTION,
    R = "create-game-invite-post";
function M(e) {
    (0, c.openModalLazy)(
        async () => {
            let { default: t } = await Promise.resolve().then(n.bind(n, 337885));
            return (n) => (0, l.jsx)(t, { ...n, parentChannel: e });
        },
        { modalKey: R },
    );
}
let _ = () => Promise.resolve({ shouldClear: !1, shouldRefocus: !1 });
function k(e) {
    let t,
        { parentChannel: n, transitionState: c, onClose: m } = e,
        M = i.useMemo(() => n.availableTags ?? [], [n.availableTags]),
        { application: k } = (0, N._k)(n.guild_id),
        w = (0, o.bG)([A.A, C.A], () => (0, u.A)(A.A, C.A, k?.id), [k]),
        [{ textValue: L, richValue: O }, D] = i.useState(() => (0, h.N3)()),
        [P, F] = i.useState(!1),
        [G, U] = i.useState(() => new Set()),
        [z, H] = i.useState(!1),
        B = i.useMemo(() => M.find((e) => e.name === N.Dg), [M]),
        V = null == B || !G.has(B.id),
        W = i.useCallback((e, t, n) => {
            D({ textValue: t, richValue: n });
        }, []),
        $ = i.useCallback((e) => {
            U((t) => {
                let n = new Set(t);
                return n.has(e) ? n.delete(e) : n.add(e), n;
            });
        }, []),
        q = i.useCallback(
            (e) => {
                null != B &&
                    U((t) => {
                        let n = new Set(t);
                        return e ? n.delete(B.id) : n.add(B.id), n;
                    });
            },
            [B],
        ),
        K = ((t = L.trim().split("\n")[0] ?? ""), (0, j.A)(t.slice(0, E.Ign), !0)),
        Y = i.useMemo(() => (null != w ? { type: E.xL.JOIN, activity: w } : void 0), [w]),
        Q = (0, f.w0)({ parentChannel: n, name: K, appliedTags: G, upload: v.Se, activityAction: Y }),
        X = !z && L.length > 0 && L.length <= 120,
        J = i.useCallback(async () => {
            if (X) {
                H(!0);
                try {
                    let e = await Q(L);
                    (0, p.JA)(e), m();
                } catch {
                    H(!1);
                }
            }
        }, [X, Q, m, L]);
    return (0, l.jsx)(s.Modal, {
        title: y.intl.string(S.default.tOsHsu),
        transitionState: c,
        onClose: m,
        actions: [
            { variant: "secondary", text: y.intl.string(y.t["ETE/oC"]), onClick: m, disabled: z },
            { variant: "primary", text: y.intl.string(y.t.CumH4u), onClick: J, disabled: !X, loading: z },
        ],
        children: (0, l.jsxs)("div", {
            className: T.r,
            children: [
                (0, l.jsx)(a.D, {
                    required: !0,
                    label: y.intl.string(S.default["/mEbGf"]),
                    children: (0, l.jsx)(g.Ay, {
                        type: I,
                        channel: n,
                        placeholder: y.intl.string(S.default["SU/IAE"]),
                        textValue: L,
                        richValue: O,
                        focused: P,
                        onChange: W,
                        onFocus: () => F(!0),
                        onBlur: () => F(!1),
                        onSubmit: _,
                        parentModalKey: R,
                        disableThemedBackground: !0,
                        maxCharacterCount: 120,
                        showRemainingCharsAfterCount: 120,
                    }),
                }),
                M.length > 0
                    ? (0, l.jsx)(a.D, {
                          label: y.intl.string(y.t.KM6lRG),
                          description: y.intl.string(S.default["yoIAe/"]),
                          children: (0, l.jsx)("div", {
                              className: T.G,
                              children: M.map((e) =>
                                  (0, l.jsx)(
                                      x.A,
                                      { tag: e, size: x.A.Sizes.SMALL, selected: G.has(e.id), onClick: () => $(e.id) },
                                      e.id,
                                  ),
                              ),
                          }),
                      })
                    : null,
                (0, l.jsx)(a.D, {
                    layout: "horizontal",
                    label: y.intl.string(S.default.Xd2NFi),
                    description: y.intl.string(S.default.G91SYQ),
                    children: (0, l.jsx)(d.m, {
                        text: y.intl.formatToPlainString(S.default["0s2ICk"], { noMicTagName: N.Dg }),
                        shouldShow: null == B,
                        asContainer: !0,
                        children: (0, l.jsx)(r.d, { checked: V, onChange: q, disabled: null == B }),
                    }),
                }),
                null != k && (0, l.jsx)(b.A, { application: k, size: "md" }),
            ],
        }),
    });
}
