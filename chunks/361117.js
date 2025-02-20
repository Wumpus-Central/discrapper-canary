r.d(t, { G: () => l }), r(47120), r(773603);
var n = r(399606),
    i = r(570140),
    o = r(493773),
    s = r(986197),
    a = r(135200);
let l = (e) => {
    let [t, r] = (0, n.Wu)([a.Z], () => [a.Z.usernameSuggestion(), a.Z.usernameSuggestionLoading()]);
    return (
        (0, o.ZP)(
            () => (
                a.Z.wasSuggestionsFetched()
                    ? i.Z.dispatch({
                          type: 'POMELO_SUGGESTIONS_FETCH',
                          usernameSuggestionLoading: !1
                      })
                    : s.Z.fetchSuggestions(e).finally(() => {
                          i.Z.dispatch({
                              type: 'POMELO_SUGGESTIONS_FETCH',
                              usernameSuggestionLoading: !1
                          });
                      }),
                () => {
                    s.Z.resetSuggestions();
                }
            )
        ),
        {
            usernameSuggestion: t,
            usernameSuggestionLoading: r
        }
    );
};
