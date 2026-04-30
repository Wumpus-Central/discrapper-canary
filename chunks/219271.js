"use strict";
n.d(t, { u: () => l });
var i = n(636537),
    r = n(228366),
    s = n(153488),
    a = n(427358),
    o = n(652215);
function l() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return a.A.shouldFetch() && s.A.hasConsented(o.YAq.PERSONALIZATION)
        ? (r.h.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
          i.Bo.get({ url: o.Rsh.USER_AFFINITIES_V2, retries: 3 * !!e, oldFormErrors: !0, rejectWithError: !1 }).then(
              (e) => {
                  let { body: t } = e;
                  r.h.dispatch({
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
                  });
              },
              () => {
                  r.h.dispatch({ type: "LOAD_USER_AFFINITIES_V2_FAILURE" });
              },
          ))
        : Promise.resolve();
}
