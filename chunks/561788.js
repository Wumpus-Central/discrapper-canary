n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(481060),
    a = n(471445),
    o = n(430824),
    s = n(724101);
function c(e) {
    let { channel: t } = e,
        n = (0, i.e7)([o.Z], () => o.Z.getGuild(t.guild_id)),
        c = (0, a.KS)(t, n);
    return null == c
        ? null
        : (0, r.jsxs)("div", {
              className: s.popoutHeader,
              children: [
                  (0, r.jsx)(c, { className: s.channelIcon }),
                  (0, r.jsx)(l.Text, {
                      variant: "text-md/semibold",
                      color: "interactive-text-default",
                      className: s.channelName,
                      children: t.name,
                  }),
              ],
          });
}
