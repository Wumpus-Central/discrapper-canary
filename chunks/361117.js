r.d(t, { G: () => l }), r(47120), r(773603);
var n = r(399606),
    i = r(570140),
    s = r(493773),
    o = r(986197),
    a = r(135200);
let l = (e) => {
    let [t, r] = (0, n.Wu)([a.Z], () => [a.Z.usernameSuggestion(), a.Z.usernameSuggestionLoading()]);
    return (
        (0, s.ZP)(
            () => (
                a.Z.wasSuggestionsFetched()
                    ? i.Z.dispatch({
                          type: 'POMELO_SUGGESTIONS_FETCH',
                          usernameSuggestionLoading: !1
                      })
                    : o.Z.fetchSuggestions(e).finally(() => {
                          i.Z.dispatch({
                              type: 'POMELO_SUGGESTIONS_FETCH',
                              usernameSuggestionLoading: !1
                          });
                      }),
                () => {
                    o.Z.resetSuggestions();
                }
            )
        ),
        {
            usernameSuggestion: t,
            usernameSuggestionLoading: r
        }
    );
};
