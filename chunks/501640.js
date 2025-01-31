n.d(t, { Z: () => o });
var i = n(149765),
    l = n(442837),
    r = n(984933),
    a = n(496675),
    s = n(981631);
function o(e) {
    let t = (0, l.e7)(
        [r.ZP],
        () => {
            var t;
            return null !== (t = r.ZP.getChannels(e)[r.sH]) && void 0 !== t ? t : [];
        },
        [e]
    );
    return 0 === t.length
        ? 0
        : t.filter((e) => {
              let { channel: t } = e;
              return a.Z.can(i.$e(s.Plq.SEND_MESSAGES, s.Plq.VIEW_CHANNEL), t);
          }).length;
}
