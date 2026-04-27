"use strict";
r.d(t, { u: () => o });
var n = r(636537),
    i = r(228366),
    a = r(153488),
    s = r(427358),
    l = r(652215);
function o() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return s.A.shouldFetch() && a.A.hasConsented(l.YAq.PERSONALIZATION)
        ? (i.h.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
          n.Bo.get({ url: l.Rsh.USER_AFFINITIES_V2, retries: 3 * !!e, oldFormErrors: !0, rejectWithError: !1 }).then(
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
                  });
              },
              () => {
                  i.h.dispatch({ type: "LOAD_USER_AFFINITIES_V2_FAILURE" });
              },
          ))
        : Promise.resolve();
}
