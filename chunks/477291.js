n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(784712),
    s = n(531578),
    o = n(388032);
function l(e, t, n) {
    let { rating: i, problem: s, feedback: l } = n;
    (0, a.Z)({
        problem: s,
        summary: e,
        feedback: l,
        guildId: t.guild_id,
        channelId: t.id,
        location: 'Summary divider',
        rating: i
    }),
        (0, r.showToast)((0, r.createToast)(o.intl.string(o.t['d9+vQ0']), r.ToastType.SUCCESS));
}
function u(e) {
    let { summary: t, channel: a, rating: o } = e;
    null != t &&
        (o === s.aZ.BAD
            ? (0, r.ZDy)(async () => {
                  let { default: e } = await n.e('62104').then(n.bind(n, 580584));
                  return (n) =>
                      (0, i.jsx)(e, {
                          ...n,
                          onSubmit: (e) => l(t, a, e),
                          startRating: o
                      });
              })
            : l(t, a, {
                  rating: o,
                  problem: null,
                  feedback: '',
                  dontShowAgain: !1
              }));
}
