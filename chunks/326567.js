t.d(n, { r: () => i });
var a = t(477900);
t(582128);
var r = t(442433);
function i(e, n, i, s, u) {
    let l = i.getGuildId();
    return null != l
        ? (0, r.L3)(
              e,
              async () => {
                  let { default: e } = await Promise.all([
                      t.e("397705"),
                      t.e("926132"),
                      t.e("146652"),
                      t.e("834552"),
                      t.e("708757"),
                      t.e("21921"),
                      t.e("189673"),
                      t.e("676418"),
                      t.e("797558"),
                      t.e("691994"),
                      t.e("435027"),
                      t.e("624198"),
                      t.e("939171"),
                      t.e("245996"),
                      t.e("700792"),
                      t.e("592822"),
                      t.e("449145"),
                      t.e("139103"),
                      t.e("470314"),
                      t.e("404524"),
                      t.e("654148"),
                      t.e("717334"),
                      t.e("45916"),
                      t.e("743076"),
                      t.e("152502"),
                  ]).then(t.bind(t, 335253));
                  return (t) =>
                      (0, a.jsx)(e, {
                          ...t,
                          user: n,
                          channel: i,
                          guildId: l,
                          onInteraction: (e) => u("GuildVoiceUserContextMenu", e),
                      });
              },
              s,
          )
        : (0, r.L3)(
              e,
              async () => {
                  let { default: e } = await Promise.all([
                      t.e("397705"),
                      t.e("926132"),
                      t.e("146652"),
                      t.e("834552"),
                      t.e("708757"),
                      t.e("189673"),
                      t.e("797558"),
                      t.e("624198"),
                      t.e("245996"),
                      t.e("700792"),
                      t.e("592822"),
                      t.e("45916"),
                      t.e("743076"),
                  ]).then(t.bind(t, 661455));
                  return (t) =>
                      (0, a.jsx)(e, {
                          ...t,
                          user: n,
                          channel: i,
                          onInteraction: (e) => u("BaseVoiceUserContextMenu", e),
                      });
              },
              s,
          );
}
