s.d(t, { A: () => p });
var n = s(477900);
s(582128);
var a = s(739187),
    l = s(857250),
    i = s(97483),
    r = s(192308),
    o = s(174459),
    u = s(863922),
    d = s(652215),
    c = s(670455),
    h = s(375708);
function m(e, t, s) {
    let { rating: n, problem: r, feedback: c } = s;
    (!(function (e) {
        let {
            summary: t,
            guildId: s,
            channelId: n,
            rating: a = null,
            problem: l = null,
            feedback: i = "",
            location: r,
        } = e;
        ((0, u.C7)(t, a),
            o.default.track(d.HAw.SUMMARIES_REPORT_PROBLEM, {
                reason: l,
                location: r,
                rating: a,
                feedback: i,
                participant_count: t.people.length,
                message_count: t.count,
                start_message_id: t.startId,
                guild_id: s,
                channel_id: n,
                summary_id: t.id,
                summary_source: t.source,
                summary_type: t.type,
            }));
    })({
        problem: r?.value ?? null,
        summary: e,
        feedback: c,
        guildId: t.guild_id,
        channelId: t.id,
        location: "Summary divider",
        rating: n,
    }),
        (0, a.P)((0, l.o)(h.intl.string(h.t["d9+vQ8"]), i.Ck.SUCCESS)));
}
function p(e) {
    let { summary: t, channel: a, rating: l } = e;
    null != t &&
        (l === c.P0.BAD
            ? (0, r.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([
                      s.e("142753"),
                      s.e("312513"),
                      s.e("161379"),
                      s.e("268582"),
                      s.e("36395"),
                      s.e("155925"),
                      s.e("218413"),
                      s.e("137381"),
                      s.e("326484"),
                      s.e("600352"),
                  ]).then(s.bind(s, 447696));
                  return (s) => (0, n.jsx)(e, { ...s, onSubmit: (e) => m(t, a, e), startRating: l });
              })
            : m(t, a, { rating: l, problem: null, feedback: "", dontShowAgain: !1 }));
}
