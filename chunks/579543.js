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
            onView: _,
            partyStatusElement: p,
            presenceActivity: h,
            guildId: m,
        } = e,
        g = !(0, s.Z)(h, f, n.id),
        E = (0, o.dQ)(n.name, null == (t = f.activity) ? void 0 : t.type, g),
        b = i.useMemo(() => {
            if (null != h) return () => (0, a.aG)(h);
        }, [h]);
    return g
        ? (0, r.jsx)(l.Z, {
              application: n,
              message: f,
              header: E,
              onClickContent: b,
              onView: _,
              guildId: m,
          })
        : (0, r.jsx)(c.Z, {
              application: n,
              message: f,
              header: E,
              presenceActivity: h,
              hideParty: d,
              partyStatusElement: p,
              currentUserPresenceActivity: u,
              onClickContent: b,
              onView: _,
              guildId: m,
          });
}
