n.d(t, { CustomThemesShareModalWrapper: () => b });
var a = n(627968),
    l = n(64700),
    r = n(353640),
    s = n(478437),
    o = n(311907),
    i = n(141468),
    c = n(963852),
    u = n(544028),
    d = n(95701),
    _ = n(954571),
    h = n(467135),
    f = n(739031),
    p = n(457417),
    m = n(567951),
    g = n(285188),
    C = n(652215);
let b = (e) => {
    let { transitionState: t, onClose: n } = e,
        b = (0, l.useRef)((0, p.E3)()).current,
        {
            selectedDestinations: k,
            messageText: A,
            canSend: w,
            setSend: x,
            updateMessage: E,
            updateChannel: M,
        } = (0, r.P)(b),
        [y, S] = l.useState(!1),
        { colors: v, chassisMixAmount: T, gradientAngle: j } = (0, h.ko)(),
        I = (0, o.bG)([u.A], () => u.A.theme),
        P = (0, l.useMemo)(
            () => ({
                colors: v.map((e) => e.replace("#", "")),
                gradient_angle: j,
                base_mix: T,
                base_theme: (0, f.O)(I),
            }),
            [v, j, T, I],
        ),
        R = l.useMemo(() => (0, d.createChannelRecord)({ id: "1", type: s.r.DM }), []),
        D = l.useMemo(() => (0, i.rh)({ ...(0, c.Ay)({ channelId: R.id, content: "" }) }), [R]);
    (0, l.useEffect)(() => {
        E(D), M(R), S(!0);
    }, [D, R, E, M]);
    let O = l.useCallback(async () => {
        if (!w()) return Promise.reject();
        await (0, g.N)(k, P, A), _.default.track(C.HAw.CUSTOM_THEME_SHARED, { num_destinations: k.length }), await n();
    }, [P, k, A, w, n]);
    return ((0, l.useEffect)(() => {
        x(O);
    }, [O, x]),
    y)
        ? (0, a.jsx)(p.KH.Provider, { value: b, children: (0, a.jsx)(m.y, { transitionState: t, onClose: n }) })
        : null;
};
