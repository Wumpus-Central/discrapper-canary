n.d(t, { Z: () => s });
var r = n(149765),
    i = n(442837),
    l = n(984933),
    o = n(496675),
    a = n(981631);
function s(e) {
    let t = (0, i.e7)(
        [l.ZP],
        () => {
            var t;
            return null !== (t = l.ZP.getChannels(e)[l.sH]) && void 0 !== t ? t : [];
        },
        [e]
    );
    return 0 === t.length
        ? 0
        : t.filter((e) => {
              let { channel: t } = e;
              return o.Z.can(r.$e(a.Plq.SEND_MESSAGES, a.Plq.VIEW_CHANNEL), t);
          }).length;
}
