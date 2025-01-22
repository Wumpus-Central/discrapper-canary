r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(784712),
    s = r(531578),
    l = r(388032);
function u(e, n, r) {
    let { rating: i, problem: s, feedback: u } = r;
    (0, o.Z)({
        problem: s,
        summary: e,
        feedback: u,
        guildId: n.guild_id,
        channelId: n.id,
        location: 'Summary divider',
        rating: i
    }),
        (0, a.showToast)((0, a.createToast)(l.intl.string(l.t['d9+vQ0']), a.ToastType.SUCCESS));
}
function c(e) {
    let { summary: n, channel: o, rating: l } = e;
    null != n &&
        (l === s.aZ.BAD
            ? (0, a.openModalLazy)(async () => {
                  let { default: e } = await r.e('62104').then(r.bind(r, 580584));
                  return (r) =>
                      (0, i.jsx)(e, {
                          ...r,
                          onSubmit: (e) => u(n, o, e),
                          startRating: l
                      });
              })
            : u(n, o, {
                  rating: l,
                  problem: null,
                  feedback: '',
                  dontShowAgain: !1
              }));
}
