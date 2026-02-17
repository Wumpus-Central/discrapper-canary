n.d(t, { A: () => R });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(311907),
    o = n(397927),
    c = n(83257),
    d = n(159001),
    u = n(766569),
    _ = n(836602),
    m = n(576622),
    A = n(358776),
    g = n(740625),
    h = n(955872),
    x = n(987281),
    p = n(71393),
    E = n(287809),
    C = n(203982),
    T = n(115063),
    S = n(841643),
    I = n(894013),
    f = n(652215),
    N = n(349828),
    b = n(355097),
    j = n(531525),
    v = n(985018),
    O = n(298109);
function R() {
    let e = (0, A.dk)("ProfileCustomizationSettingsPage"),
        t = (0, S.A)(),
        n = (0, r.bG)([_.A, p.A], () => p.A.getGuild(_.A.selectedGuildId) ?? t),
        a = (0, r.bG)([_.A], () => _.A.showNotice()),
        R = (0, r.bG)([E.default], () => E.default.getCurrentUser()),
        { subsection: y, setSubsection: P } = (0, I.A)(),
        L = x.a.useField("hasSearchResults"),
        D = x.a.useField("searchResults");
    function M(e) {
        if (y !== e) {
            if (a) {
                (0, T.fO)({ duration: 300, intensity: c.n3 }), C._.dispatch(f.jej.EMPHASIZE_NOTICE);
                return;
            }
            e === b.Eq.GUILD && null != n && (0, d.V2)(n.id), P(e);
        }
    }
    s.useEffect(() => {
        null != R && n?.id !== N.Vc && (0, m.A)(R.id, R.getAvatarURL(n?.id, 80), { guildId: n?.id });
    }, [n?.id, R]);
    let G = !0,
        U = !0;
    return (
        L &&
            1 === D.length &&
            (D.includes(j.H.PROFILE_SERVER_PROFILES)
                ? (M(b.Eq.GUILD), (U = !1))
                : D.includes(j.H.PROFILE_USER_PROFILE) && (M(b.Eq.USER_PROFILE), (G = !1))),
        (0, i.jsxs)(g.R, {
            header: v.intl.string(v.t["vi7f+q"]),
            children: [
                (0, i.jsxs)(o.VQ0, {
                    className: O.$H,
                    type: "top",
                    look: "brand",
                    selectedItem: y,
                    onItemSelect: M,
                    children: [
                        U || e
                            ? (0, i.jsx)(
                                  o.VQ0.Item,
                                  { className: O.YU, id: b.Eq.USER_PROFILE, children: v.intl.string(v.t["2p07FR"]) },
                                  b.Eq.USER_PROFILE,
                              )
                            : null,
                        G || e
                            ? (0, i.jsx)(
                                  o.VQ0.Item,
                                  {
                                      className: l()(O.YU, O.HY),
                                      "aria-label": v.intl.string(v.t.kPHroX),
                                      id: b.Eq.GUILD,
                                      children: v.intl.string(v.t.kPHroX),
                                  },
                                  b.Eq.GUILD,
                              )
                            : null,
                    ],
                }),
                y === b.Eq.GUILD
                    ? (0, i.jsx)(u.A, {
                          selectedGuild: n,
                          onGuildChange: function (e) {
                              if (a) {
                                  (0, T.fO)({ duration: 300, intensity: c.n3 }), C._.dispatch(f.jej.EMPHASIZE_NOTICE);
                                  return;
                              }
                              null != e && (0, d.JJ)(e.id);
                          },
                      })
                    : (0, i.jsx)(h.A, {}),
            ],
        })
    );
}
