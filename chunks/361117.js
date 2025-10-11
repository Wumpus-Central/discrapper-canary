n.d(t, { G: () => l }), n(388685), n(457542);
var r = n(399606),
    i = n(570140),
    a = n(493773),
    o = n(986197),
    s = n(135200);
let l = (e) => {
    let [t, n] = (0, r.Wu)([s.Z], () => [s.Z.usernameSuggestion(), s.Z.usernameSuggestionLoading()]);
    return (
        (0, a.ZP)(
            () => (
                s.Z.wasSuggestionsFetched()
                    ? i.Z.dispatch({
                          type: "POMELO_SUGGESTIONS_FETCH",
                          usernameSuggestionLoading: !1,
                      })
                    : o.Z.fetchSuggestions(e).finally(() => {
                          i.Z.dispatch({
                              type: "POMELO_SUGGESTIONS_FETCH",
                              usernameSuggestionLoading: !1,
                          });
                      }),
                () => {
                    o.Z.resetSuggestions();
                }
            ),
        ),
        {
            usernameSuggestion: t,
            usernameSuggestionLoading: n,
        }
    );
};
