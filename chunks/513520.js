a.d(t, { I: () => o });
var n = a(562465),
    l = a(73153),
    i = a(153488),
    s = a(209390),
    r = a(652215);
function o() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return s.A.shouldFetch() && i.A.hasConsented(r.YAq.PERSONALIZATION)
        ? (l.h.dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2" }),
          n.Bo.get({ url: r.Rsh.CHANNEL_AFFINITIES_V2, retries: 3 * !!e, oldFormErrors: !0, rejectWithError: !1 }).then(
              (e) => {
                  let { body: t } = e;
                  l.h.dispatch({
                      type: "LOAD_CHANNEL_AFFINITIES_V2_SUCCESS",
                      affineChannels: t.channel_affinities.map((e) => ({
                          channelId: e.channel_id,
                          score: e.score ?? 0,
                      })),
                  });
              },
              () => {
                  l.h.dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2_FAILURE" });
              },
          ))
        : Promise.resolve();
}
