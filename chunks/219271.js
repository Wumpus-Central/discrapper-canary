a.d(t, { u: () => o });
var n = a(636537),
    l = a(228366),
    r = a(153488),
    i = a(427358),
    s = a(652215);
function o() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return i.A.shouldFetch() && r.A.hasConsented(s.YAq.PERSONALIZATION)
        ? (l.h.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
          n.Bo.get({ url: s.Rsh.USER_AFFINITIES_V2, retries: 3 * !!e, oldFormErrors: !0, rejectWithError: !1 }).then(
              (e) => {
                  let { body: t } = e;
                  l.h.dispatch({
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
                  l.h.dispatch({ type: "LOAD_USER_AFFINITIES_V2_FAILURE" });
              },
          ))
        : Promise.resolve();
}
