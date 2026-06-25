n.d(t, { d: () => k, default: () => w });
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
    E = n(437992),
    S = n(652215);
n(253913);
var y = n(559965),
    T = n(375708),
    I = n(45342);
let _ = h.oU.CREATE_GAME_INVITE_POST_DESCRIPTION,
    R = "create-game-invite-post";
function k(e) {
    (0, d.openModalLazy)(
        async () => {
            let { default: t } = await Promise.resolve().then(n.bind(n, 337885));
            return (n) => (0, l.jsx)(t, { ...n, parentChannel: e });
        },
        { modalKey: R },
    );
}
let M = () => Promise.resolve({ shouldClear: !1, shouldRefocus: !1 });
function w(e) {
    let t,
        { parentChannel: n, transitionState: d, onClose: h } = e,
        k = i.useMemo(() => n.availableTags ?? [], [n.availableTags]),
        { application: w } = (0, b._k)(n.guild_id),
        L = (0, o.bG)([C.A, N.A], () => (0, u.A)(C.A, N.A, w?.id), [w]),
        [{ textValue: P, richValue: D }, O] = i.useState(() => (0, x.N3)()),
        [F, G] = i.useState(!1),
        [z, U] = i.useState(() => new Set()),
        [H, B] = i.useState(!1),
        V = i.useMemo(() => k.find((e) => e.name === b.Dg), [k]),
        W = null == V || !z.has(V.id),
        $ = z.size < 5,
        q = i.useCallback((e, t, n) => {
            O({ textValue: t, richValue: n });
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
        Q = ((t = P.trim().split("\n")[0] ?? ""), (0, v.A)(t.slice(0, S.Ign), !0)),
        X = i.useMemo(() => (null != L ? { type: S.xL.JOIN, activity: L } : void 0), [L]),
        J = (0, j.w0)({
            parentChannel: n,
            name: Q,
            appliedTags: z,
            upload: A.Se,
            activityAction: X,
            applicationId: w?.id,
            voiceChatEnabled: W,
        }),
        Z = !H && P.length > 0 && P.length <= 120,
        ee = i.useCallback(async () => {
            if (Z) {
                B(!0);
                try {
                    let e = await J(P);
                    (0, p.JA)(e), h();
                } catch {
                    B(!1);
                }
            }
        }, [Z, J, h, P]);
    return (0, l.jsx)(s.Modal, {
        title: T.intl.string(y.default.tOsHsu),
        transitionState: d,
        onClose: h,
        actions: [
            { variant: "secondary", text: T.intl.string(T.t["ETE/oC"]), onClick: h, disabled: H },
            { variant: "primary", text: T.intl.string(T.t.CumH4u), onClick: ee, disabled: !Z, loading: H },
        ],
        children: (0, l.jsxs)("div", {
            className: I.rf,
            children: [
                (0, l.jsx)(a.D, {
                    required: !0,
                    label: T.intl.string(y.default["/mEbGf"]),
                    children: (0, l.jsx)(g.Ay, {
                        type: _,
                        channel: n,
                        placeholder: T.intl.string(y.default["SU/IAE"]),
                        textValue: P,
                        richValue: D,
                        focused: F,
                        onChange: q,
                        onFocus: () => G(!0),
                        onBlur: () => G(!1),
                        onSubmit: M,
                        parentModalKey: R,
                        disableThemedBackground: !0,
                        maxCharacterCount: 120,
                        showRemainingCharsAfterCount: 120,
                        editorClassName: I.s7,
                    }),
                }),
                k.length > 0
                    ? (0, l.jsx)(a.D, {
                          label: T.intl.string(T.t.KM6lRG),
                          description: T.intl.string(y.default["yoIAe/"]),
                          children: (0, l.jsx)("div", {
                              className: I.GA,
                              children: k.map((e) =>
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
                    label: T.intl.string(y.default.Xd2NFi),
                    description: T.intl.string(y.default.G91SYQ),
                    children: (0, l.jsx)(c.m, {
                        text: T.intl.formatToPlainString(y.default["0s2ICk"], { noMicTagName: b.Dg }),
                        shouldShow: null == V,
                        asContainer: !0,
                        children: (0, l.jsx)(r.d, {
                            checked: W,
                            onChange: Y,
                            disabled: null == V || (!$ && !z.has(V.id)),
                        }),
                    }),
                }),
                null != w &&
                    (0, l.jsx)(E.A, {
                        application: w,
                        size: "md",
                        analyticsLocation: m.A.GAME_INVITE_CHANNEL_POST_CREATION,
                    }),
            ],
        }),
    });
}
