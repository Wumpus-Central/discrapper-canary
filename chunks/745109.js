n.d(t, { A: () => y });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(83257),
    c = n(159001),
    u = n(766569),
    _ = n(836602),
    m = n(576622),
    g = n(740625),
    A = n(841329),
    x = n(955872),
    h = n(71393),
    p = n(967198),
    T = n(711014),
    E = n(287809),
    S = n(203982),
    f = n(115063),
    C = n(507553),
    b = n(652215),
    N = n(355097),
    I = n(985018),
    v = n(439627);
let j = { [N.Eq.USER_PROFILE]: "main_profile_tab", [N.Eq.GUILD]: "guild_profile_tab" };
function y() {
    let e = (0, r.bG)([p.A, T.Ay, _.A], () => {
            let e = _.A.selectedGuildId ?? p.A.getGuildId();
            return null == e || _._.has(e) ? T.Ay.getFlattenedGuildIds().find((e) => !_._.has(e)) : e;
        }),
        t = (0, r.bG)([h.A], () => h.A.getGuild(e)),
        n = (0, r.bG)([_.A], () => _.A.showNotice()),
        l = (0, r.bG)([E.default], () => E.default.getCurrentUser()),
        y = C.A.useField("subsection");
    return (
        s.useEffect(() => {
            (0, A._)(j[y]);
        }, [y]),
        s.useEffect(() => {
            null != l && t?.id != null && (0, m.A)(l.id, l.getAvatarURL(t?.id, 80), { guildId: t?.id });
        }, [t?.id, l]),
        (0, i.jsxs)(g.R, {
            header: I.intl.string(I.t["vi7f+q"]),
            children: [
                (0, i.jsxs)(o.VQ0, {
                    className: v.$H,
                    type: "top",
                    look: "brand",
                    selectedItem: y,
                    onItemSelect: function (e) {
                        if (y !== e) {
                            if (n) {
                                (0, f.fO)({ duration: 300, intensity: d.n3 }), S._.dispatch(b.jej.EMPHASIZE_NOTICE);
                                return;
                            }
                            e === N.Eq.GUILD && null != t && (0, c.V2)(t.id), C.A.setState({ subsection: e });
                        }
                    },
                    children: [
                        (0, i.jsx)(
                            o.VQ0.Item,
                            { className: v.YU, id: N.Eq.USER_PROFILE, children: I.intl.string(I.t["2p07FR"]) },
                            N.Eq.USER_PROFILE,
                        ),
                        (0, i.jsx)(
                            o.VQ0.Item,
                            {
                                className: a()(v.YU, v.HY),
                                "aria-label": I.intl.string(I.t.kPHroX),
                                id: N.Eq.GUILD,
                                children: I.intl.string(I.t.kPHroX),
                            },
                            N.Eq.GUILD,
                        ),
                    ],
                }),
                y === N.Eq.GUILD
                    ? (0, i.jsx)(u.A, {
                          selectedGuild: t,
                          onGuildChange: function (e) {
                              if (n) {
                                  (0, f.fO)({ duration: 300, intensity: d.n3 }), S._.dispatch(b.jej.EMPHASIZE_NOTICE);
                                  return;
                              }
                              null != e && (0, c.JJ)(e.id);
                          },
                      })
                    : (0, i.jsx)(x.A, {}),
            ],
        })
    );
}
