t.d(n, {
    Z: function () {
        return I;
    }
});
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
    a = t(749210),
    u = t(287734),
    o = t(933557),
    d = t(314897),
    s = t(592125),
    c = t(984933),
    Z = t(271383),
    f = t(430824),
    m = t(496675),
    g = t(699516),
    M = t(594174),
    x = t(979651),
    h = t(934415),
    v = t(700785),
    p = t(981631),
    b = t(388032);
function I(e, n) {
    let t = (0, i.e7)([c.ZP], () => c.ZP.getChannels(n)[c.Zb], [n]),
        I = (0, i.e7)(
            [x.Z, s.Z],
            () => {
                let t = x.Z.getUserVoiceChannelId(n, e.id);
                return s.Z.getChannel(t);
            },
            [n, e.id]
        );
    if ((0, i.e7)([Z.ZP], () => Z.ZP.isGuestOrLurker(n, e.id), [n, e.id]) || null == I) return null;
    let C = e.id === d.default.getId();
    if (!C && !m.Z.can(p.Plq.MOVE_MEMBERS, I)) return null;
    let P = t.filter((n) => {
        let { channel: t } = n;
        return (
            t.id !== I.id &&
            (C
                ? m.Z.can(p.Plq.CONNECT, t) && !(0, h.rY)(t, x.Z, f.Z)
                : m.Z.can(p.Plq.MOVE_MEMBERS, t) &&
                  (m.Z.can(p.Plq.CONNECT, t) ||
                      v.BT({
                          permission: p.Plq.CONNECT,
                          user: e,
                          context: t
                      })) &&
                  !(0, h.rY)(t, x.Z, f.Z))
        );
    });
    return 0 === P.length
        ? null
        : (0, l.jsx)(r.MenuItem, {
              id: 'voice-move',
              label: b.intl.string(b.t.FAplmp),
              children: P.map((t) => {
                  let { channel: i } = t;
                  return (0, l.jsx)(
                      r.MenuItem,
                      {
                          id: i.id,
                          action: () => {
                              var t;
                              return (t = i), void (e.id === d.default.getId() ? u.default.selectVoiceChannel(t.id) : a.Z.setChannel(n, e.id, t.id));
                          },
                          label: (0, o.F6)(i, M.default, g.Z)
                      },
                      i.id
                  );
              })
          });
}
