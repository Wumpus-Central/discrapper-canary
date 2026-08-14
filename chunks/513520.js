n.d(t, { I: () => r });
var i = n(636537),
    s = n(228366),
    a = n(153488),
    h = n(130100),
    c = n(652215);
function r() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return h.A.shouldFetch() && a.A.hasConsented(c.YAq.PERSONALIZATION)
        ? (s.h.dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2" }),
          i.Bo.get({ url: c.Rsh.CHANNEL_AFFINITIES_V2, retries: 3 * !!e, oldFormErrors: !0, rejectWithError: !1 }).then(
              (e) => {
                  let { body: t } = e;
                  s.h.dispatch({
                      type: "LOAD_CHANNEL_AFFINITIES_V2_SUCCESS",
                      affineChannels: t.channel_affinities.map((e) => ({
                          channelId: e.channel_id,
                          score: e.score ?? 0,
                      })),
                  });
              },
              () => {
                  s.h.dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2_FAILURE" });
              },
          ))
        : Promise.resolve();
}
