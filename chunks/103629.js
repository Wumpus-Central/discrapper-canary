n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    a = n(845625),
    o = n(785823),
    u = n(137207),
    c = n(734057),
    s = n(320501),
    d = n(576705),
    A = n(652215),
    b = n(985018);
function f(e, t) {
    let n = (0, l.bG)([d.A], () => null != e && d.A.canWithPartialContext(A.xBc.MANAGE_MESSAGES, { channelId: e }), [
            e,
        ]),
        f = (0, l.bG)([c.A], () => c.A.getChannel(e), [e]),
        O = (0, l.bG)([s.A], () => (null != e && null != t ? s.A.getMessage(e, t) : null)),
        g = (0, o.kZ)(null != O ? O : null);
    if (null == f || null == O) return null;
    let y = null != g && g.actions.hasOwnProperty(a.G.SET_COMPLETED) ? a.G.UNSET_COMPLETED : a.G.SET_COMPLETED,
        p = y === a.G.SET_COMPLETED ? b.intl.string(b.t.VWNyUu) : b.intl.string(b.t.l9GqxI);
    return n && null != t
        ? (0, r.jsx)(
              i.Drp,
              {
                  id: "mark-automod-alert-completed",
                  label: p,
                  action: () => {
                      (0, u.E5)(t, f, y);
                  },
              },
              "mark-automod-alert-completed",
          )
        : null;
}
