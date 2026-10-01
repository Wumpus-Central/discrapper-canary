e.d(i, { default: () => B });
var n = e(477900),
    s = e(582128),
    u = e(189213),
    l = e(77468),
    a = e(968309),
    o = e(377980),
    r = e(581298),
    c = e(419954),
    d = e(107384),
    p = e(641216),
    _ = e(972737),
    f = e(550004),
    g = e(77915),
    m = e(652215),
    y = e(272984),
    T = e(61567),
    b = e(375708),
    h = e(57129);
function S() {
    (0, _.O)({
        header: b.intl.string(b.t.j2d6Km),
        confirmText: b.intl.string(b.t.BddRzS),
        body: b.intl.string(T.default.HmFYc5),
    });
}
function P() {
    return b.intl.string(T.default.B39UTK);
}
function v() {
    return b.intl.string(T.default.bZ0yGQ);
}
let C = (0, c.v_)("guild_space_popular_music_spotify_connected_setting", {
        useTitle: P,
        useSubtitle: v,
        useTrailingDecoration: () => ({ type: d.Ln.TEXT, text: b.intl.string(b.t["LV+CXH"]) }),
        usePredicate: g.B6,
    }),
    w = (0, c.Tf)("guild_space_popular_music_spotify_connect_setting", {
        useTitle: P,
        useSubtitle: v,
        useLabel: () => b.intl.string(T.default.V5eNx6),
        useVariant: () => "secondary",
        onClick: () => (0, a.A)({ platformType: m.fg2.SPOTIFY, location: "Server Hub Popular Music" }),
        usePredicate: () => !(0, g.B6)(),
    }),
    A = (0, c.zD)("guild_space_popular_music_spotify_show_activity_setting", {
        useTitle: () => b.intl.formatToPlainString(b.t["6u6J0q"], { platform: y.HD }),
        useValue: g.WK,
        setValue: (t) => {
            Promise.all(
                (0, g.XG)()
                    .filter((i) => i.showActivity !== t)
                    .map((i) => l.A.setShowActivity(i.type, i.id, t)),
            ).catch(S);
        },
        useDisabled: () => !(0, g.B6)(),
    });
function B(t) {
    let { guildId: i, widgetName: e, transitionState: l, onClose: a } = t,
        d = s.useMemo(
            () =>
                (0, c.zZ)("guild_space_popular_music_contribution_modal", {
                    initialize: f.zE,
                    buildLayout: () => [C, w, A, (0, f.F6)(i, { useTitle: () => b.intl.string(b.t.FoqwvH) }), p._],
                }),
            [i],
        ),
        { node: _ } = (0, r.Ay)(d, ""),
        { isContributing: m } = (0, g.MX)(i);
    return (
        s.useEffect(() => {
            m && a();
        }, [m, a]),
        (0, n.jsx)(u.a, {
            transitionState: l,
            onClose: a,
            title: b.intl.string(h.default.WhdCGP),
            subtitle: b.intl.formatToPlainString(T.default.BeCUHZ, { widgetName: e }),
            actions: [],
            children: (0, n.jsx)(o.A, { node: _ }),
        })
    );
}
