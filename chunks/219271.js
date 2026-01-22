n.d(t, {
    u: () => c,
});
var r = n(562465),
    i = n(73153),
    a = n(153488),
    s = n(318295),
    o = n(21119),
    l = n(652215);

function c() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return o.A.shouldFetch() && a.A.hasConsented(l.YAq.PERSONALIZATION)
        ? (i.h.dispatch({
              type: "LOAD_USER_AFFINITIES_V2",
          }),
          r.Bo.get({
              url: l.Rsh.USER_AFFINITIES_V2,
              retries: 3 * !!e,
              oldFormErrors: !0,
              rejectWithError: !1,
              query: {
                  user_flags: s.b.RECENTLY_RETURNED,
              },
          }).then(
              (e) => {
                  var t;
                  let { body: n } = e;
                  i.h.dispatch({
                      type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
                      affineUsers: n.user_affinities.map((e) => {
                          var t, n, r, i, a, s, o, l;
                          return {
                              otherUserId: e.other_user_id,
                              userSegment: e.user_segment,
                              otherUserSegment: e.other_user_segment,
                              isFriend: e.is_friend,
                              dmProbability: null != (t = e.dm_probability) ? t : 0,
                              dmRank: null != (n = e.dm_rank) ? n : 0,
                              vcProbability: null != (r = e.vc_probability) ? r : 0,
                              vcRank: null != (i = e.vc_rank) ? i : 0,
                              serverMessageProbability: null != (a = e.server_message_probability) ? a : 0,
                              serverMessageRank: null != (s = e.server_message_rank) ? s : 0,
                              communicationProbability: null != (o = e.communication_probability) ? o : 0,
                              communicationRank: null != (l = e.communication_rank) ? l : 0,
                          };
                      }),
                      userFlags: null != (t = n.user_flags) ? t : {},
                  });
              },
              () => {
                  i.h.dispatch({
                      type: "LOAD_USER_AFFINITIES_V2_FAILURE",
                  });
              },
          ))
        : Promise.resolve();
}
