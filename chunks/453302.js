"use strict";
n.d(t, { A: () => f });
var l = n(477900);
n(582128);
var i = n(691540),
    s = n(857250),
    r = n(97483),
    a = n(192308),
    o = n(174459),
    u = n(863922),
    c = n(652215),
    d = n(670455),
    h = n(375708);
function m(e, t, n) {
    let { rating: l, problem: a, feedback: d } = n;
    !(function (e) {
        let {
            summary: t,
            guildId: n,
            channelId: l,
            rating: i = null,
            problem: s = null,
            feedback: r = "",
            location: a,
        } = e;
        (0, u.C7)(t, i),
            o.default.track(c.HAw.SUMMARIES_REPORT_PROBLEM, {
                reason: s,
                location: a,
                rating: i,
                feedback: r,
                participant_count: t.people.length,
                message_count: t.count,
                start_message_id: t.startId,
                guild_id: n,
                channel_id: l,
                summary_id: t.id,
                summary_source: t.source,
                summary_type: t.type,
            });
    })({
        problem: a?.value ?? null,
        summary: e,
        feedback: d,
        guildId: t.guild_id,
        channelId: t.id,
        location: "Summary divider",
        rating: l,
    }),
        (0, i.P0)((0, s.o)(h.intl.string(h.t["d9+vQ8"]), r.Ck.SUCCESS));
}
function f(e) {
    let { summary: t, channel: i, rating: s } = e;
    null != t &&
        (s === d.P0.BAD
            ? (0, a.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([
                      n.e("142753"),
                      n.e("312513"),
                      n.e("268582"),
                      n.e("36395"),
                      n.e("155925"),
                      n.e("218413"),
                      n.e("137381"),
                      n.e("326484"),
                      n.e("600352"),
                  ]).then(n.bind(n, 447696));
                  return (n) => (0, l.jsx)(e, { ...n, onSubmit: (e) => m(t, i, e), startRating: s });
              })
            : m(t, i, { rating: s, problem: null, feedback: "", dontShowAgain: !1 }));
}
