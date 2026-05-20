"use strict";
n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var r = n(691540),
    s = n(857250),
    a = n(97483),
    o = n(192308),
    l = n(174459),
    u = n(863922),
    c = n(652215),
    d = n(670455),
    _ = n(375708);
function f(e, t, n) {
    let { rating: i, problem: o, feedback: d } = n;
    !(function (e) {
        let {
            summary: t,
            guildId: n,
            channelId: i,
            rating: r = null,
            problem: s = null,
            feedback: a = "",
            location: o,
        } = e;
        (0, u.C7)(t, r),
            l.default.track(c.HAw.SUMMARIES_REPORT_PROBLEM, {
                reason: s,
                location: o,
                rating: r,
                feedback: a,
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
        problem: o?.value ?? null,
        summary: e,
        feedback: d,
        guildId: t.guild_id,
        channelId: t.id,
        location: "Summary divider",
        rating: i,
    }),
        (0, r.P0)((0, s.o)(_.intl.string(_.t["d9+vQ8"]), a.Ck.SUCCESS));
}
function h(e) {
    let { summary: t, channel: r, rating: s } = e;
    null != t &&
        (s === d.P0.BAD
            ? (0, o.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([
                      n.e("8802"),
                      n.e("56030"),
                      n.e("8891"),
                      n.e("18413"),
                      n.e("22255"),
                      n.e("55925"),
                      n.e("85033"),
                      n.e("26484"),
                      n.e("352"),
                  ]).then(n.bind(n, 447696));
                  return (n) => (0, i.jsx)(e, { ...n, onSubmit: (e) => f(t, r, e), startRating: s });
              })
            : f(t, r, { rating: s, problem: null, feedback: "", dontShowAgain: !1 }));
}
