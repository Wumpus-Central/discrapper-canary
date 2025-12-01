n.d(t, { Z: () => u });
var r = n(54381),
    i = n(473749),
    a = n(952164),
    o = n(758371),
    s = n(994339),
    l = n(89219),
    c = n(23015);
function u(e) {
    var t;
    let {
            application: n,
            currentUserPresenceActivity: u,
            hideParty: d,
            message: f,
            onView: p,
            partyStatusElement: _,
            presenceActivity: m,
            guildId: h,
        } = e,
        g = !(0, s.Z)(m, f, n.id),
        E = (0, o.dQ)(n.name, null == (t = f.activity) ? void 0 : t.type, g),
        b = i.useMemo(() => {
            if (null != m) return () => (0, a.aG)(m);
        }, [m]);
    return g
        ? (0, r.jsx)(l.Z, {
              application: n,
              message: f,
              header: E,
              onClickContent: b,
              onView: p,
              guildId: h,
          })
        : (0, r.jsx)(c.Z, {
              application: n,
              message: f,
              header: E,
              presenceActivity: m,
              hideParty: d,
              partyStatusElement: _,
              currentUserPresenceActivity: u,
              onClickContent: b,
              onView: p,
              guildId: h,
          });
}
