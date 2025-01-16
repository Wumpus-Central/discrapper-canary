n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(471445),
    o = n(430824),
    s = n(264365);
function c(e) {
    let { channel: t } = e,
        n = (0, l.e7)([o.Z], () => o.Z.getGuild(t.guild_id)),
        c = (0, a.KS)(t, n);
    return null == c
        ? null
        : (0, i.jsxs)('div', {
              className: s.popoutHeader,
              children: [
                  (0, i.jsx)(c, { className: s.channelIcon }),
                  (0, i.jsx)(r.Text, {
                      variant: 'text-md/semibold',
                      color: 'interactive-normal',
                      className: s.channelName,
                      children: t.name
                  })
              ]
          });
}
