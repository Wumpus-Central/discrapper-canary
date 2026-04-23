n.d(t, { A: () => j });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(761508),
    d = n(83257),
    u = n(159001),
    c = n(766569),
    g = n(836602),
    m = n(576622),
    _ = n(178241),
    A = n(183476),
    h = n(338318),
    p = n(71393),
    x = n(967198),
    E = n(711014),
    T = n(287809),
    S = n(203982),
    f = n(115063),
    b = n(507553),
    C = n(652215),
    v = n(355097),
    N = n(985018),
    I = n(454078);
let y = { [v.Eq.USER_PROFILE]: "main_profile_tab", [v.Eq.GUILD]: "guild_profile_tab" };
function j() {
    let e = (0, r.bG)([x.A, E.Ay, g.A], () => {
            let e = g.A.selectedGuildId ?? x.A.getGuildId();
            return null == e || g._.has(e) ? E.Ay.getFlattenedGuildIds().find((e) => !g._.has(e)) : e;
        }),
        t = (0, r.bG)([p.A], () => p.A.getGuild(e)),
        n = (0, r.bG)([g.A], () => g.A.showNotice()),
        l = (0, r.bG)([T.default], () => T.default.getCurrentUser()),
        j = b.A.useField("subsection");
    return (
        s.useEffect(() => {
            (0, _._)(y[j]);
        }, [j]),
        s.useEffect(() => {
            null != l && t?.id != null && (0, m.A)(l.id, l.getAvatarURL(t?.id, 80), { guildId: t?.id });
        }, [t?.id, l]),
        (0, i.jsxs)(A.R, {
            children: [
                (0, i.jsxs)(o.V, {
                    className: I.$H,
                    type: "top",
                    look: "brand",
                    selectedItem: j,
                    onItemSelect: function (e) {
                        if (j !== e) {
                            if (n) {
                                (0, f.fO)({ duration: 300, intensity: d.n3 }), S._.dispatch(C.jej.EMPHASIZE_NOTICE);
                                return;
                            }
                            e === v.Eq.GUILD && null != t && (0, u.V2)(t.id), b.A.setState({ subsection: e });
                        }
                    },
                    children: [
                        (0, i.jsx)(
                            o.V.Item,
                            { className: I.YU, id: v.Eq.USER_PROFILE, children: N.intl.string(N.t["2p07FR"]) },
                            v.Eq.USER_PROFILE,
                        ),
                        (0, i.jsx)(
                            o.V.Item,
                            {
                                className: a()(I.YU, I.HY),
                                "aria-label": N.intl.string(N.t.kPHroX),
                                id: v.Eq.GUILD,
                                children: N.intl.string(N.t.kPHroX),
                            },
                            v.Eq.GUILD,
                        ),
                    ],
                }),
                j === v.Eq.GUILD
                    ? (0, i.jsx)(c.A, {
                          selectedGuild: t,
                          onGuildChange: function (e) {
                              if (n) {
                                  (0, f.fO)({ duration: 300, intensity: d.n3 }), S._.dispatch(C.jej.EMPHASIZE_NOTICE);
                                  return;
                              }
                              null != e && (0, u.JJ)(e.id);
                          },
                      })
                    : (0, i.jsx)(h.A, {}),
            ],
        })
    );
}
