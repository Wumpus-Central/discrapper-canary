t.d(n, { r: () => i });
var a = t(627968);
t(64700);
var r = t(442433);
function i(e, n, i, s, u) {
    let l = i.getGuildId();
    return null != l
        ? (0, r.L3)(
              e,
              async () => {
                  let { default: e } = await Promise.all([
                      t.e("94881"),
                      t.e("26132"),
                      t.e("46652"),
                      t.e("34552"),
                      t.e("8757"),
                      t.e("89673"),
                      t.e("76418"),
                      t.e("97558"),
                      t.e("82263"),
                      t.e("91994"),
                      t.e("35027"),
                      t.e("24198"),
                      t.e("39171"),
                      t.e("45996"),
                      t.e("792"),
                      t.e("92822"),
                      t.e("49145"),
                      t.e("11617"),
                      t.e("70314"),
                      t.e("27435"),
                      t.e("17334"),
                      t.e("45916"),
                      t.e("43076"),
                      t.e("52502"),
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
                      t.e("94881"),
                      t.e("26132"),
                      t.e("46652"),
                      t.e("34552"),
                      t.e("8757"),
                      t.e("89673"),
                      t.e("97558"),
                      t.e("24198"),
                      t.e("45996"),
                      t.e("792"),
                      t.e("92822"),
                      t.e("45916"),
                      t.e("43076"),
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
