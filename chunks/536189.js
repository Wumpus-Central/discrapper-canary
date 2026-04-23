n.d(t, { A: () => c });
var i = n(627968),
    l = n(64700),
    a = n(172710),
    s = n(456060),
    r = n(659051),
    o = n(798899),
    d = n(829963);
function c(e) {
    let {
            application: t,
            currentUserPresenceActivity: n,
            hideParty: c,
            message: u,
            onView: m,
            partyStatusElement: _,
            presenceActivity: h,
            guildId: p,
        } = e,
        g = !(0, r.A)(h, u, t.id),
        A = (0, s.n$)(t.name, u.activity?.type, g),
        f = l.useMemo(() => {
            if (null != h) return () => (0, a.Mp)(h);
        }, [h]);
    return g
        ? (0, i.jsx)(o.A, { application: t, message: u, header: A, onClickContent: f, onView: m, guildId: p })
        : (0, i.jsx)(d.A, {
              application: t,
              message: u,
              header: A,
              presenceActivity: h,
              hideParty: c,
              partyStatusElement: _,
              currentUserPresenceActivity: n,
              onClickContent: f,
              onView: m,
              guildId: p,
          });
}
