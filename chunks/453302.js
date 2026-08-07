"use strict";
n.d(t, { A: () => A });
var i = n(477900);
n(582128);
var r = n(691540),
    a = n(857250),
    s = n(97483),
    l = n(192308),
    o = n(174459),
    d = n(863922),
    c = n(652215),
    u = n(670455),
    _ = n(375708);
function E(e, t, n) {
    let { rating: i, problem: l, feedback: u } = n;
    !(function (e) {
        let {
            summary: t,
            guildId: n,
            channelId: i,
            rating: r = null,
            problem: a = null,
            feedback: s = "",
            location: l,
        } = e;
        (0, d.C7)(t, r),
            o.default.track(c.HAw.SUMMARIES_REPORT_PROBLEM, {
                reason: a,
                location: l,
                rating: r,
                feedback: s,
                participant_count: t.people.length,
                message_count: t.count,
                start_message_id: t.startId,
                guild_id: n,
                channel_id: i,
                summary_id: t.id,
                summary_source: t.source,
                summary_type: t.type,
            });
    })({
        problem: l?.value ?? null,
        summary: e,
        feedback: u,
        guildId: t.guild_id,
        channelId: t.id,
        location: "Summary divider",
        rating: i,
    }),
        (0, r.P0)((0, a.o)(_.intl.string(_.t["d9+vQ8"]), s.Ck.SUCCESS));
}
function A(e) {
    let { summary: t, channel: r, rating: a } = e;
    null != t &&
        (a === u.P0.BAD
            ? (0, l.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([
                      n.e("9198"),
                      n.e("4079"),
                      n.e("8891"),
                      n.e("22255"),
                      n.e("55925"),
                      n.e("40794"),
                      n.e("37381"),
                      n.e("26484"),
                      n.e("352"),
                  ]).then(n.bind(n, 447696));
                  return (n) => (0, i.jsx)(e, { ...n, onSubmit: (e) => E(t, r, e), startRating: a });
              })
            : E(t, r, { rating: a, problem: null, feedback: "", dontShowAgain: !1 }));
}
