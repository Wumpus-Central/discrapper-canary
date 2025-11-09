n.d(t, { Z: () => o });
var r = n(149765),
    i = n(442837),
    l = n(984933),
    a = n(496675),
    s = n(981631);
function o(e) {
    let t = (0, i.e7)([l.ZP], () => {
        var t;
        return null != (t = l.ZP.getChannels(e)[l.sH]) ? t : [];
    }, [e]);
    return 0 === t.length
        ? 0
        : t.filter((e) => {
              let { channel: t } = e;
              return a.Z.can(r.$e(s.Plq.SEND_MESSAGES, s.Plq.VIEW_CHANNEL), t);
          }).length;
}
