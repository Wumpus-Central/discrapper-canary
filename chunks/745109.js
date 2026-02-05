n.d(t, { A: () => R });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(83257),
    c = n(159001),
    u = n(766569),
    h = n(836602),
    A = n(576622),
    g = n(358776),
    m = n(740625),
    p = n(955872),
    _ = n(987281),
    x = n(71393),
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
    let e = (0, g.dk)("ProfileCustomizationSettingsPage"),
        t = (0, I.A)(),
        n = (0, r.bG)([h.A, x.A], () => x.A.getGuild(h.A.selectedGuildId) ?? t),
        s = (0, r.bG)([h.A], () => h.A.showNotice()),
        R = (0, r.bG)([f.default], () => f.default.getCurrentUser()),
        { subsection: O, setSubsection: L } = (0, S.A)(),
        D = _.a.useField("hasSearchResults"),
        M = _.a.useField("searchResults");
    function G(e) {
        if (O !== e) {
            if (s) {
                (0, C.fO)({ duration: 300, intensity: d.n3 }), E._.dispatch(b.jej.EMPHASIZE_NOTICE);
                return;
            }
            e === T.Eq.GUILD && null != n && (0, c.V2)(n.id), L(e);
        }
    }
    l.useEffect(() => {
        null != R && n?.id !== N.V && (0, A.A)(R.id, R.getAvatarURL(n?.id, 80), { guildId: n?.id });
    }, [n?.id, R]);
    let U = !0,
        P = !0;
    return (
        D &&
            1 === M.length &&
            (M.includes(j.H.PROFILE_SERVER_PROFILES)
                ? (G(T.Eq.GUILD), (P = !1))
                : M.includes(j.H.PROFILE_USER_PROFILE) && (G(T.Eq.USER_PROFILE), (U = !1))),
        (0, i.jsxs)(m.R, {
            header: v.intl.string(v.t["vi7f+q"]),
            children: [
                (0, i.jsxs)(o.VQ0, {
                    className: y.$H,
                    type: "top",
                    look: "brand",
                    selectedItem: O,
                    onItemSelect: G,
                    children: [
                        P || e
                            ? (0, i.jsx)(
                                  o.VQ0.Item,
                                  { className: y.YU, id: T.Eq.USER_PROFILE, children: v.intl.string(v.t["2p07FR"]) },
                                  T.Eq.USER_PROFILE,
                              )
                            : null,
                        U || e
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
                O === T.Eq.GUILD
                    ? (0, i.jsx)(u.A, {
                          selectedGuild: n,
                          onGuildChange: function (e) {
                              if (s) {
                                  (0, C.fO)({ duration: 300, intensity: d.n3 }), E._.dispatch(b.jej.EMPHASIZE_NOTICE);
                                  return;
                              }
                              null != e && (0, c.JJ)(e.id);
                          },
                      })
                    : (0, i.jsx)(p.A, {}),
            ],
        })
    );
}
