r.d(t, { G: () => l }), r(388685), r(457542);
var n = r(399606),
    i = r(570140),
    o = r(493773),
    a = r(986197),
    s = r(135200);
let l = (e) => {
    let [t, r] = (0, n.Wu)([s.Z], () => [s.Z.usernameSuggestion(), s.Z.usernameSuggestionLoading()]);
    return (
        (0, o.ZP)(
            () => (
                s.Z.wasSuggestionsFetched()
                    ? i.Z.dispatch({
                          type: "POMELO_SUGGESTIONS_FETCH",
                          usernameSuggestionLoading: !1,
                      })
                    : a.Z.fetchSuggestions(e).finally(() => {
                          i.Z.dispatch({
                              type: "POMELO_SUGGESTIONS_FETCH",
                              usernameSuggestionLoading: !1,
                          });
                      }),
                () => {
                    a.Z.resetSuggestions();
                }
            ),
        ),
        {
            usernameSuggestion: t,
            usernameSuggestionLoading: r,
        }
    );
};
