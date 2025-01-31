l.d(n, { Z: () => C });
var t = l(200651);
l(192379);
var i = l(442837),
    r = l(481060),
    a = l(749210),
    d = l(287734),
    s = l(933557),
    u = l(314897),
    o = l(592125),
    c = l(984933),
    Z = l(271383),
    g = l(430824),
    f = l(496675),
    h = l(699516),
    m = l(594174),
    P = l(979651),
    N = l(934415),
    b = l(700785),
    x = l(981631),
    v = l(388032);
function C(e, n) {
    let l = (0, i.e7)([c.ZP], () => c.ZP.getChannels(n)[c.Zb], [n]),
        C = (0, i.e7)(
            [P.Z, o.Z],
            () => {
                let l = P.Z.getUserVoiceChannelId(n, e.id);
                return o.Z.getChannel(l);
            },
            [n, e.id]
        );
    if ((0, i.e7)([Z.ZP], () => Z.ZP.isGuestOrLurker(n, e.id), [n, e.id]) || null == C) return null;
    let E = e.id === u.default.getId();
    if (!E && !f.Z.can(x.Plq.MOVE_MEMBERS, C)) return null;
    let p = l.filter((n) => {
        let { channel: l } = n;
        return (
            l.id !== C.id &&
            (E
                ? f.Z.can(x.Plq.CONNECT, l) && !(0, N.rY)(l, P.Z, g.Z)
                : f.Z.can(x.Plq.MOVE_MEMBERS, l) &&
                  (f.Z.can(x.Plq.CONNECT, l) ||
                      b.BT({
                          permission: x.Plq.CONNECT,
                          user: e,
                          context: l
                      })) &&
                  !(0, N.rY)(l, P.Z, g.Z))
        );
    });
    return 0 === p.length
        ? null
        : (0, t.jsx)(r.sNh, {
              id: 'voice-move',
              label: v.intl.string(v.t.FAplmp),
              children: p.map((l) => {
                  let { channel: i } = l;
                  return (0, t.jsx)(
                      r.sNh,
                      {
                          id: i.id,
                          action: () => {
                              e.id === u.default.getId() ? d.default.selectVoiceChannel(i.id) : a.Z.setChannel(n, e.id, i.id);
                          },
                          label: (0, s.F6)(i, m.default, h.Z)
                      },
                      i.id
                  );
              })
          });
}
