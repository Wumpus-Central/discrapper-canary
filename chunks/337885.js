n.d(t, { d: () => R, default: () => _ });
var l = n(627968),
    i = n(64700),
    s = n(189213),
    a = n(452027),
    r = n(243721),
    o = n(17928),
    c = n(990078),
    d = n(192308),
    u = n(627363),
    m = n(355622),
    h = n(408018),
    x = n(201349),
    g = n(376310),
    f = n(659617),
    j = n(474078),
    p = n(747926),
    v = n(55294),
    A = n(71393),
    C = n(807632),
    N = n(437992),
    b = n(652215),
    E = n(774418),
    S = n(375708),
    y = n(939422);
let T = m.oU.CREATE_GAME_INVITE_POST_DESCRIPTION,
    I = "create-game-invite-post";
function R(e) {
    (0, d.openModalLazy)(
        async () => {
            let { default: t } = await Promise.resolve().then(n.bind(n, 337885));
            return (n) => (0, l.jsx)(t, { ...n, parentChannel: e });
        },
        { modalKey: I },
    );
}
let k = () => Promise.resolve({ shouldClear: !1, shouldRefocus: !1 });
function _(e) {
    let t,
        { parentChannel: n, transitionState: d, onClose: m } = e,
        R = i.useMemo(() => n.availableTags ?? [], [n.availableTags]),
        _ = (0, o.bG)([A.A], () => A.A.getGuild(n.guild_id)?.gameApplicationIds?.[0], [n.guild_id]),
        { data: M } = (0, u.YY)(_),
        [{ textValue: w, richValue: D }, L] = i.useState(() => (0, h.N3)()),
        [P, O] = i.useState(!1),
        [F, G] = i.useState(() => new Set()),
        [z, U] = i.useState(!1),
        H = i.useMemo(() => R.find((e) => e.name === C.Dg), [R]),
        B = null == H || !F.has(H.id),
        V = i.useCallback((e, t, n) => {
            L({ textValue: t, richValue: n });
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
        q = ((t = w.trim().split("\n")[0] ?? ""), (0, j.A)(t.slice(0, b.Ign), !0)),
        K = (0, f.w0)({ parentChannel: n, name: q, appliedTags: F, upload: v.Se }),
        Y = !z && w.length > 0 && w.length <= 120,
        X = i.useCallback(async () => {
            if (Y) {
                U(!0);
                try {
                    let e = await K(w);
                    (0, p.JA)(e), m();
                } catch {
                    U(!1);
                }
            }
        }, [Y, K, m, w]);
    return (0, l.jsx)(s.Modal, {
        title: S.intl.string(E.default.tOsHsu),
        transitionState: d,
        onClose: m,
        actions: [
            { variant: "secondary", text: S.intl.string(S.t["ETE/oC"]), onClick: m, disabled: z },
            { variant: "primary", text: S.intl.string(S.t.CumH4u), onClick: X, disabled: !Y, loading: z },
        ],
        children: (0, l.jsxs)("div", {
            className: y.r,
            children: [
                (0, l.jsx)(a.D, {
                    required: !0,
                    label: S.intl.string(E.default["/mEbGf"]),
                    children: (0, l.jsx)(x.Ay, {
                        type: T,
                        channel: n,
                        placeholder: S.intl.string(E.default["SU/IAE"]),
                        textValue: w,
                        richValue: D,
                        focused: P,
                        onChange: V,
                        onFocus: () => O(!0),
                        onBlur: () => O(!1),
                        onSubmit: k,
                        parentModalKey: I,
                        disableThemedBackground: !0,
                        maxCharacterCount: 120,
                        showRemainingCharsAfterCount: 120,
                    }),
                }),
                R.length > 0
                    ? (0, l.jsx)(a.D, {
                          label: S.intl.string(S.t.KM6lRG),
                          description: S.intl.string(E.default["yoIAe/"]),
                          children: (0, l.jsx)("div", {
                              className: y.G,
                              children: R.map((e) =>
                                  (0, l.jsx)(
                                      g.A,
                                      { tag: e, size: g.A.Sizes.SMALL, selected: F.has(e.id), onClick: () => W(e.id) },
                                      e.id,
                                  ),
                              ),
                          }),
                      })
                    : null,
                (0, l.jsx)(a.D, {
                    layout: "horizontal",
                    label: S.intl.string(E.default.Xd2NFi),
                    description: S.intl.string(E.default.G91SYQ),
                    children: (0, l.jsx)(c.m, {
                        text: S.intl.formatToPlainString(E.default["0s2ICk"], { noMicTagName: C.Dg }),
                        shouldShow: null == H,
                        asContainer: !0,
                        children: (0, l.jsx)(r.d, { checked: B, onChange: $, disabled: null == H }),
                    }),
                }),
                null != M && (0, l.jsx)(N.A, { application: M, size: "md" }),
            ],
        }),
    });
}
