var i = t(477900),
    a = t(582128),
    d = t(855986),
    r = t(477782),
    l = t(192308),
    s = t(73153),
    p = t(474196),
    h = t(985925),
    u = t(267102),
    c = t(474397),
    o = t(378570),
    C = t(799704),
    _ = t(734057),
    A = t(309010),
    b = t(129230),
    g = t(652215),
    E = t(746080),
    I = t(486974),
    k = t(792996);
t.d(
    n,
    {},
    {
        A: function (e) {
            let { userId: n, guildId: t, channelId: O, location: S, onAction: j, appContext: w } = e,
                y = a.useContext(b.Ig),
                L = (0, u.aL)(),
                z = (0, d.bG)([A.Ay], () => O ?? A.Ay.getChannelId(t, !0), [O, t]),
                P = (0, h.q)(t);
            return null != t && P
                ? (0, i.jsx)(r.Dr, {
                      id: "mod-view",
                      label: k.intl.string(k.t.kj3tz2),
                      action: () => {
                          (j?.(), (0, c.A)(w), L.dispatch(g.jej.POPOUT_CLOSE), (0, l.s7)());
                          let e = _.A.getChannel(z),
                              i = { modViewPanel: I.g.INFO, sourceLocation: S ?? y.location };
                          if (e?.isThread() && null != e.parent_id) {
                              (C.Ay.getCurrentSidebarChannelId(e.parent_id) === e.id &&
                                  (s.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e.parent_id }),
                                  (0, o.iN)(e.id)),
                                  (0, p.z)(t, n, e.parent_id, i));
                              return;
                          }
                          (0, p.z)(t, n, z ?? E.VV.MEMBER_SAFETY, i);
                      },
                  })
                : null;
        },
    },
);
