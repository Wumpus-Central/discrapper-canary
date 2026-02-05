"use strict";
n.d(t, { u: () => u });
var r = n(562465),
    i = n(73153),
    a = n(153488),
    s = n(318295),
    o = n(21119),
    l = n(652215);
function u() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return o.A.shouldFetch() && a.A.hasConsented(l.YAq.PERSONALIZATION)
        ? (i.h.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
          r.Bo.get({
              url: l.Rsh.USER_AFFINITIES_V2,
              retries: 3 * !!e,
              oldFormErrors: !0,
              rejectWithError: !1,
              query: { user_flags: s.b.RECENTLY_RETURNED },
          }).then(
              (e) => {
                  let { body: t } = e;
                  i.h.dispatch({
                      type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
                      affineUsers: t.user_affinities.map((e) => ({
                          otherUserId: e.other_user_id,
                          userSegment: e.user_segment,
                          otherUserSegment: e.other_user_segment,
                          isFriend: e.is_friend,
                          dmProbability: e.dm_probability ?? 0,
                          dmRank: e.dm_rank ?? 0,
                          vcProbability: e.vc_probability ?? 0,
                          vcRank: e.vc_rank ?? 0,
                          serverMessageProbability: e.server_message_probability ?? 0,
                          serverMessageRank: e.server_message_rank ?? 0,
                          communicationProbability: e.communication_probability ?? 0,
                          communicationRank: e.communication_rank ?? 0,
                      })),
                      userFlags: t.user_flags ?? {},
                  });
              },
              () => {
                  i.h.dispatch({ type: "LOAD_USER_AFFINITIES_V2_FAILURE" });
              },
          ))
        : Promise.resolve();
}
