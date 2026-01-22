n.d(t, {
    A: () => u,
});
var r = n(627968),
    i = n(64700),
    a = n(172710),
    s = n(456060),
    o = n(659051),
    l = n(798899),
    c = n(829963);

function u(e) {
    var t;
    let {
            application: n,
            currentUserPresenceActivity: u,
            hideParty: d,
            message: f,
            onView: p,
            partyStatusElement: _,
            presenceActivity: h,
            guildId: m,
        } = e,
        g = !(0, o.A)(h, f, n.id),
        E = (0, s.n$)(n.name, null == (t = f.activity) ? void 0 : t.type, g),
        b = i.useMemo(() => {
            if (null != h) return () => (0, a.Mp)(h);
        }, [h]);
    return g
        ? (0, r.jsx)(l.A, {
              application: n,
              message: f,
              header: E,
              onClickContent: b,
              onView: p,
              guildId: m,
          })
        : (0, r.jsx)(c.A, {
              application: n,
              message: f,
              header: E,
              presenceActivity: h,
              hideParty: d,
              partyStatusElement: _,
              currentUserPresenceActivity: u,
              onClickContent: b,
              onView: p,
              guildId: m,
          });
}
