var i = n(620632),
    s = n(73153),
    a = n(153488),
    h = n(134460),
    c = n(652215);
n.d(
    t,
    {},
    {
        I: function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            return h.A.shouldFetch() && a.A.hasConsented(c.YAq.PERSONALIZATION)
                ? (s.h.dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2" }),
                  i.Bo.get({
                      url: c.Rsh.CHANNEL_AFFINITIES_V2,
                      retries: 3 * !!e,
                      oldFormErrors: !0,
                      rejectWithError: !1,
                  }).then(
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
        },
    },
);
