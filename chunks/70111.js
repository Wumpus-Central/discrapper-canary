e.d(i, { default: () => B });
var n = e(477900),
    s = e(582128),
    l = e(189213),
    u = e(77468),
    a = e(968309),
    r = e(377980),
    o = e(581298),
    c = e(419954),
    d = e(107384),
    p = e(641216),
    _ = e(972737),
    f = e(17085),
    g = e(77915),
    m = e(652215),
    y = e(272984),
    T = e(61567),
    h = e(375708),
    b = e(57129),
    S = e(205069);
function v() {
    (0, _.O)({
        header: h.intl.string(h.t.j2d6Km),
        confirmText: h.intl.string(h.t.BddRzS),
        body: h.intl.string(T.default.HmFYc5),
    });
}
function P() {
    return h.intl.string(T.default.B39UTK);
}
function C() {
    return h.intl.string(T.default.bZ0yGQ);
}
let w = (0, c.v_)("guild_space_popular_music_spotify_connected_setting", {
        useTitle: P,
        useSubtitle: C,
        useTrailingDecoration: () => ({ type: d.Ln.TEXT, text: h.intl.string(h.t["LV+CXH"]) }),
        usePredicate: g.B6,
    }),
    x = (0, c.Tf)("guild_space_popular_music_spotify_connect_setting", {
        useTitle: P,
        useSubtitle: C,
        useLabel: () => h.intl.string(T.default.V5eNx6),
        useVariant: () => "secondary",
        onClick: () => (0, a.A)({ platformType: m.fg2.SPOTIFY, location: "Server Hub Popular Music" }),
        usePredicate: () => !(0, g.B6)(),
    }),
    A = (0, c.zD)("guild_space_popular_music_spotify_show_activity_setting", {
        useTitle: () => h.intl.formatToPlainString(h.t["6u6J0q"], { platform: y.HD }),
        useValue: g.WK,
        setValue: (t) => {
            Promise.all(
                (0, g.XG)()
                    .filter((i) => i.showActivity !== t)
                    .map((i) => u.A.setShowActivity(i.type, i.id, t)),
            ).catch(v);
        },
        useDisabled: () => !(0, g.B6)(),
    });
function B(t) {
    let { guildId: i, widgetName: e, transitionState: u, onClose: a } = t,
        d = s.useMemo(
            () =>
                (0, c.zZ)("guild_space_popular_music_contribution_modal", {
                    initialize: f.zE,
                    buildLayout: () => [w, x, A, (0, f.F6)(i, { useTitle: () => h.intl.string(h.t.FoqwvH) }), p._],
                }),
            [i],
        ),
        { node: _ } = (0, o.Ay)(d, ""),
        { isContributing: m } = (0, g.MX)(i);
    return (
        s.useEffect(() => {
            m && a();
        }, [m, a]),
        (0, n.jsx)(l.a, {
            transitionState: u,
            onClose: a,
            title: h.intl.string(b.default.WhdCGP),
            subtitle: h.intl.formatToPlainString(T.default.BeCUHZ, { widgetName: e }),
            actions: [],
            children: (0, n.jsx)("div", { className: S.W, children: (0, n.jsx)(r.A, { node: _ }) }),
        })
    );
}
