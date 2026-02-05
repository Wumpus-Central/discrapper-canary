n.d(t, { A: () => o });
var i = n(136722),
    r = n(311907),
    a = n(808728),
    l = n(576705),
    s = n(652215);
function o(e) {
    let t = (0, r.bG)([a.Ay], () => a.Ay.getChannels(e)[a.I6] ?? [], [e]);
    return 0 === t.length
        ? 0
        : t.filter((e) => {
              let { channel: t } = e;
              return l.A.can(i.kg(s.xBc.SEND_MESSAGES, s.xBc.VIEW_CHANNEL), t);
          }).length;
}
