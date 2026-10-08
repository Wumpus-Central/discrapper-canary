s.d(t, { A: () => h });
var n = s(477900);
s(582128);
var a = s(376357),
    l = s(192308),
    i = s(174459),
    r = s(863922),
    o = s(652215),
    u = s(670455),
    d = s(660183);
function c(e, t, s) {
    let { rating: n, problem: l, feedback: u } = s;
    (!(function (e) {
        let {
            summary: t,
            guildId: s,
            channelId: n,
            rating: a = null,
            problem: l = null,
            feedback: u = "",
            location: d,
        } = e;
        ((0, r.C7)(t, a),
            i.default.track(o.HAw.SUMMARIES_REPORT_PROBLEM, {
                reason: l,
                location: d,
                rating: a,
                feedback: u,
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
        problem: l?.value ?? null,
        summary: e,
        feedback: u,
        guildId: t.guild_id,
        channelId: t.id,
        location: "Summary divider",
        rating: n,
    }),
        (0, a.P0)((0, a.ox)(d.intl.string(d.t["d9+vQ8"]), a.Ck.SUCCESS)));
}
function h(e) {
    let { summary: t, channel: a, rating: i } = e;
    null != t &&
        (i === u.P0.BAD
            ? (0, l.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([
                      s.e("142753"),
                      s.e("36781"),
                      s.e("161379"),
                      s.e("268582"),
                      s.e("36395"),
                      s.e("155925"),
                      s.e("218413"),
                      s.e("137381"),
                      s.e("326484"),
                      s.e("600352"),
                  ]).then(s.bind(s, 447696));
                  return (s) => (0, n.jsx)(e, { ...s, onSubmit: (e) => c(t, a, e), startRating: i });
              })
            : c(t, a, { rating: i, problem: null, feedback: "", dontShowAgain: !1 }));
}
