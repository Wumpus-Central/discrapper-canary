n.d(t, { A: () => v });
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
    g = n(576622),
    m = n(740625),
    A = n(955872),
    h = n(71393),
    p = n(967198),
    x = n(711014),
    E = n(287809),
    T = n(203982),
    S = n(115063),
    C = n(894013),
    I = n(652215),
    f = n(355097),
    b = n(985018),
    N = n(298109);
function v() {
    let e = (0, r.bG)([p.A, x.Ay, _.A], () => {
            let e = _.A.selectedGuildId ?? p.A.getGuildId();
            return null == e || _._.has(e) ? x.Ay.getFlattenedGuildIds().find((e) => !_._.has(e)) : e;
        }),
        t = (0, r.bG)([h.A], () => h.A.getGuild(e)),
        n = (0, r.bG)([_.A], () => _.A.showNotice()),
        l = (0, r.bG)([E.default], () => E.default.getCurrentUser()),
        { subsection: v, setSubsection: j } = (0, C.A)();
    return (
        s.useEffect(() => {
            null != l && t?.id != null && (0, g.A)(l.id, l.getAvatarURL(t?.id, 80), { guildId: t?.id });
        }, [t?.id, l]),
        (0, i.jsxs)(m.R, {
            header: b.intl.string(b.t["vi7f+q"]),
            children: [
                (0, i.jsxs)(o.VQ0, {
                    className: N.$H,
                    type: "top",
                    look: "brand",
                    selectedItem: v,
                    onItemSelect: function (e) {
                        if (v !== e) {
                            if (n) {
                                (0, S.fO)({ duration: 300, intensity: d.n3 }), T._.dispatch(I.jej.EMPHASIZE_NOTICE);
                                return;
                            }
                            e === f.Eq.GUILD && null != t && (0, c.V2)(t.id), j(e);
                        }
                    },
                    children: [
                        (0, i.jsx)(
                            o.VQ0.Item,
                            { className: N.YU, id: f.Eq.USER_PROFILE, children: b.intl.string(b.t["2p07FR"]) },
                            f.Eq.USER_PROFILE,
                        ),
                        (0, i.jsx)(
                            o.VQ0.Item,
                            {
                                className: a()(N.YU, N.HY),
                                "aria-label": b.intl.string(b.t.kPHroX),
                                id: f.Eq.GUILD,
                                children: b.intl.string(b.t.kPHroX),
                            },
                            f.Eq.GUILD,
                        ),
                    ],
                }),
                v === f.Eq.GUILD
                    ? (0, i.jsx)(u.A, {
                          selectedGuild: t,
                          onGuildChange: function (e) {
                              if (n) {
                                  (0, S.fO)({ duration: 300, intensity: d.n3 }), T._.dispatch(I.jej.EMPHASIZE_NOTICE);
                                  return;
                              }
                              null != e && (0, c.JJ)(e.id);
                          },
                      })
                    : (0, i.jsx)(A.A, {}),
            ],
        })
    );
}
