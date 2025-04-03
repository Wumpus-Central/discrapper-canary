n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(471445),
    a = n(430824),
    s = n(73566);
function c(e) {
    let { channel: t } = e,
        n = (0, i.e7)([a.Z], () => a.Z.getGuild(t.guild_id)),
        c = (0, o.KS)(t, n);
    return null == c
        ? null
        : (0, r.jsxs)('div', {
              className: s.popoutHeader,
              children: [
                  (0, r.jsx)(c, { className: s.channelIcon }),
                  (0, r.jsx)(l.Text, {
                      variant: 'text-md/semibold',
                      color: 'interactive-normal',
                      className: s.channelName,
                      children: t.name
                  })
              ]
          });
}
