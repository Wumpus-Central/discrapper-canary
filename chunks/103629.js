n.d(t, { A: () => _ });
var l = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    r = n(845625),
    d = n(785823),
    o = n(137207),
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
        M = (0, d.kZ)(null != g ? g : null);
    if (null == _ || null == g) return null;
    let O = null != M && M.actions.hasOwnProperty(r.G.SET_COMPLETED) ? r.G.UNSET_COMPLETED : r.G.SET_COMPLETED,
        I = O === r.G.SET_COMPLETED ? E.intl.string(E.t.VWNyUu) : E.intl.string(E.t.l9GqxI);
    return n && null != t
        ? (0, l.jsx)(
              a.Drp,
              {
                  id: "mark-automod-alert-completed",
                  label: I,
                  action: () => {
                      (0, o.E5)(t, _, O);
                  },
              },
              "mark-automod-alert-completed",
          )
        : null;
}
