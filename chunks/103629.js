n.d(t, { A: () => _ });
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(477782),
    a = n(845625),
    o = n(785823),
    d = n(137207),
    u = n(734057),
    s = n(320501),
    c = n(576705),
    A = n(652215),
    E = n(985018);
function _(e, t) {
    let n = (0, i.bG)([c.A], () => null != e && c.A.canWithPartialContext(A.xBc.MANAGE_MESSAGES, { channelId: e }), [
            e,
        ]),
        _ = (0, i.bG)([u.A], () => u.A.getChannel(e), [e]),
        g = (0, i.bG)([s.A], () => (null != e && null != t ? s.A.getMessage(e, t) : null)),
        I = (0, o.kZ)(null != g ? g : null);
    if (null == _ || null == g) return null;
    let S = null != I && I.actions.hasOwnProperty(a.G.SET_COMPLETED) ? a.G.UNSET_COMPLETED : a.G.SET_COMPLETED,
        f = S === a.G.SET_COMPLETED ? E.intl.string(E.t.VWNyUu) : E.intl.string(E.t.l9GqxI);
    return n && null != t
        ? (0, l.jsx)(
              r.Dr,
              {
                  id: "mark-automod-alert-completed",
                  label: f,
                  action: () => {
                      (0, d.E5)(t, _, S);
                  },
              },
              "mark-automod-alert-completed",
          )
        : null;
}
