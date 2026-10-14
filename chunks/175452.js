r.d(i, { C: () => m, u: () => b });
var t,
    s = r(636537),
    a = r(73153),
    n = r(153488),
    o =
        588245 != r.j
            ? (((t = {}).HFU_MAU = "HFU_MAU"), (t.NON_HFU_MAU = "NON_HFU_MAU"), (t.NON_MAU = "NON_MAU"), t)
            : null,
    _ = r(427358),
    c = r(652215);
function b() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return _.A.shouldFetch() && n.A.hasConsented(c.YAq.PERSONALIZATION)
        ? (a.h.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
          s.Bo.get({ url: c.Rsh.USER_AFFINITIES_V2, retries: 3 * !!e, oldFormErrors: !0, rejectWithError: !1 }).then(
              (e) => {
                  let { body: i } = e;
                  a.h.dispatch({
                      type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
                      affineUsers: i.user_affinities.map((e) => ({
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
                  a.h.dispatch({ type: "LOAD_USER_AFFINITIES_V2_FAILURE" });
              },
          ))
        : Promise.resolve();
}
function m(e) {
    a.h.dispatch({
        type: "DEV_TOOLS_SET_USER_AFFINITY_OVERRIDE",
        override:
            null == e
                ? null
                : {
                      otherUserId: e.userId,
                      userSegment: o.HFU_MAU,
                      otherUserSegment: o.HFU_MAU,
                      isFriend: !1,
                      dmProbability: e.communicationProbability,
                      dmRank: 1,
                      vcProbability: e.vcProbability,
                      vcRank: 1,
                      serverMessageProbability: 0,
                      serverMessageRank: 1,
                      communicationProbability: e.communicationProbability,
                      communicationRank: 1,
                  },
    });
}
