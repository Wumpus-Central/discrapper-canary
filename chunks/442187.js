n.d(t, { A: () => o });
var r = n(136722),
    i = n(311907),
    l = n(808728),
    a = n(576705),
    s = n(652215);
function o(e) {
    let t = (0, i.bG)([l.Ay], () => {
        var t;
        return null != (t = l.Ay.getChannels(e)[l.I6]) ? t : [];
    }, [e]);
    return 0 === t.length
        ? 0
        : t.filter((e) => {
              let { channel: t } = e;
              return a.A.can(r.kg(s.xBc.SEND_MESSAGES, s.xBc.VIEW_CHANNEL), t);
          }).length;
}
