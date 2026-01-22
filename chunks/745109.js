n.d(t, { A: () => w });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(83257),
    u = n(159001),
    d = n(833336),
    f = n(766569),
    p = n(576622),
    _ = n(358776),
    h = n(740625),
    m = n(955872),
    g = n(987281),
    E = n(752319),
    b = n(287809),
    y = n(203982),
    O = n(115063),
    A = n(841643),
    v = n(894013),
    S = n(652215),
    I = n(349828),
    T = n(355097),
    C = n(531525),
    N = n(985018),
    R = n(298109);
function w() {
    let e = (0, _.dk)("ProfileCustomizationSettingsPage"),
        t = (0, o.bG)([d.A], () => d.A.getGuild()),
        n = (0, A.A)(),
        a = (0, o.bG)([d.A, E.A], () => d.A.showNotice() || E.A.showNotice()),
        w = null != t ? t : n,
        P = (0, o.bG)([b.default], () => b.default.getCurrentUser()),
        { subsection: D, setSubsection: x } = (0, v.A)(),
        L = g.a.useField("hasSearchResults"),
        j = g.a.useField("searchResults");
    function M(e) {
        if (D !== e) {
            if (a) {
                (0, O.fO)({
                    duration: 300,
                    intensity: c.n3,
                }),
                    y._.dispatch(S.jej.EMPHASIZE_NOTICE);
                return;
            }
            e === T.Eq.GUILD && null == t && null != w && (0, u.V2)(w), x(e);
        }
    }
    i.useEffect(() => {
        null != P &&
            (null == w ? void 0 : w.id) !== I.V &&
            (0, p.A)(P.id, P.getAvatarURL(null == w ? void 0 : w.id, 80), { guildId: null == w ? void 0 : w.id });
    }, [null == w ? void 0 : w.id, P]);
    let k = !0,
        U = !0;
    return (
        L &&
            1 === j.length &&
            (j.includes(C.H.PROFILE_SERVER_PROFILES)
                ? (M(T.Eq.GUILD), (U = !1))
                : j.includes(C.H.PROFILE_USER_PROFILE) && (M(T.Eq.USER_PROFILE), (k = !1))),
        (0, r.jsxs)(h.R, {
            header: N.intl.string(N.t["vi7f+q"]),
            children: [
                (0, r.jsxs)(l.VQ0, {
                    className: R.$H,
                    type: "top",
                    look: "brand",
                    selectedItem: D,
                    onItemSelect: M,
                    children: [
                        U || e
                            ? (0, r.jsx)(
                                  l.VQ0.Item,
                                  {
                                      className: R.YU,
                                      id: T.Eq.USER_PROFILE,
                                      children: N.intl.string(N.t["2p07FR"]),
                                  },
                                  T.Eq.USER_PROFILE,
                              )
                            : null,
                        k || e
                            ? (0, r.jsx)(
                                  l.VQ0.Item,
                                  {
                                      className: s()(R.YU, R.HY),
                                      "aria-label": N.intl.string(N.t.kPHroX),
                                      id: T.Eq.GUILD,
                                      children: N.intl.string(N.t.kPHroX),
                                  },
                                  T.Eq.GUILD,
                              )
                            : null,
                    ],
                }),
                D === T.Eq.GUILD ? (0, r.jsx)(f.A, { selectedGuild: w }) : (0, r.jsx)(m.A, {}),
            ],
        })
    );
}
