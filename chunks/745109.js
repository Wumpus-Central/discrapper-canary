n.d(t, { A: () => R });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(83257),
    c = n(159001),
    u = n(833336),
    h = n(766569),
    A = n(836602),
    g = n(576622),
    m = n(358776),
    p = n(740625),
    _ = n(955872),
    x = n(987281),
    f = n(287809),
    E = n(203982),
    C = n(115063),
    I = n(841643),
    S = n(894013),
    b = n(652215),
    N = n(349828),
    T = n(355097),
    j = n(531525),
    v = n(985018),
    y = n(298109);
function R() {
    let e = (0, m.dk)("ProfileCustomizationSettingsPage"),
        t = (0, r.bG)([u.A], () => u.A.getGuild()),
        n = (0, I.A)(),
        s = (0, r.bG)([u.A, A.A], () => u.A.showNotice() || A.A.showNotice()),
        R = t ?? n,
        O = (0, r.bG)([f.default], () => f.default.getCurrentUser()),
        { subsection: L, setSubsection: D } = (0, S.A)(),
        M = x.a.useField("hasSearchResults"),
        G = x.a.useField("searchResults");
    function U(e) {
        if (L !== e) {
            if (s) {
                (0, C.fO)({ duration: 300, intensity: d.n3 }), E._.dispatch(b.jej.EMPHASIZE_NOTICE);
                return;
            }
            e === T.Eq.GUILD && null == t && null != R && (0, c.V2)(R), D(e);
        }
    }
    l.useEffect(() => {
        null != O && R?.id !== N.V && (0, g.A)(O.id, O.getAvatarURL(R?.id, 80), { guildId: R?.id });
    }, [R?.id, O]);
    let P = !0,
        k = !0;
    return (
        M &&
            1 === G.length &&
            (G.includes(j.H.PROFILE_SERVER_PROFILES)
                ? (U(T.Eq.GUILD), (k = !1))
                : G.includes(j.H.PROFILE_USER_PROFILE) && (U(T.Eq.USER_PROFILE), (P = !1))),
        (0, i.jsxs)(p.R, {
            header: v.intl.string(v.t["vi7f+q"]),
            children: [
                (0, i.jsxs)(o.VQ0, {
                    className: y.$H,
                    type: "top",
                    look: "brand",
                    selectedItem: L,
                    onItemSelect: U,
                    children: [
                        k || e
                            ? (0, i.jsx)(
                                  o.VQ0.Item,
                                  { className: y.YU, id: T.Eq.USER_PROFILE, children: v.intl.string(v.t["2p07FR"]) },
                                  T.Eq.USER_PROFILE,
                              )
                            : null,
                        P || e
                            ? (0, i.jsx)(
                                  o.VQ0.Item,
                                  {
                                      className: a()(y.YU, y.HY),
                                      "aria-label": v.intl.string(v.t.kPHroX),
                                      id: T.Eq.GUILD,
                                      children: v.intl.string(v.t.kPHroX),
                                  },
                                  T.Eq.GUILD,
                              )
                            : null,
                    ],
                }),
                L === T.Eq.GUILD ? (0, i.jsx)(h.A, { selectedGuild: R }) : (0, i.jsx)(_.A, {}),
            ],
        })
    );
}
