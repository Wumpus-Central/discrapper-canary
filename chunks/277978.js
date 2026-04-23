a.d(t, { CustomThemesShareModalWrapper: () => N });
var s = a(627968),
    n = a(64700),
    l = a(353640),
    r = a(478437),
    i = a(311907),
    _ = a(141468),
    A = a(963852),
    o = a(544028),
    u = a(95701),
    c = a(954571),
    d = a(467135),
    h = a(739031),
    I = a(457417),
    E = a(567951),
    C = a(285188),
    L = a(652215);
let N = (e) => {
    let { transitionState: t, onClose: a } = e,
        N = (0, n.useRef)((0, I.E3)()).current,
        {
            selectedDestinations: b,
            messageText: f,
            canSend: g,
            setSend: P,
            updateMessage: p,
            updateChannel: G,
        } = (0, l.P)(N),
        [D, O] = n.useState(!1),
        { colors: S, chassisMixAmount: m, gradientAngle: T } = (0, d.ko)(),
        F = (0, i.bG)([o.A], () => o.A.theme),
        y = (0, n.useMemo)(
            () => ({
                colors: S.map((e) => e.replace("#", "")),
                gradient_angle: T,
                base_mix: m,
                base_theme: (0, h.O)(F),
            }),
            [S, T, m, F],
        ),
        W = n.useMemo(() => (0, u.createChannelRecord)({ id: "1", type: r.r.DM }), []),
        x = n.useMemo(() => (0, _.rh)({ ...(0, A.Ay)({ channelId: W.id, content: "" }) }), [W]);
    (0, n.useEffect)(() => {
        p(x), G(W), O(!0);
    }, [x, W, p, G]);
    let k = n.useCallback(async () => {
        if (!g()) return Promise.reject();
        await (0, C.N)(b, y, f), c.default.track(L.HAw.CUSTOM_THEME_SHARED, { num_destinations: b.length }), await a();
    }, [y, b, f, g, a]);
    return ((0, n.useEffect)(() => {
        P(k);
    }, [k, P]),
    D)
        ? (0, s.jsx)(I.KH.Provider, { value: N, children: (0, s.jsx)(E.y, { transitionState: t, onClose: a }) })
        : null;
};
