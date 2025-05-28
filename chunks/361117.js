r.d(t, { G: () => a }), r(388685), r(457542);
var n = r(399606),
    i = r(570140),
    o = r(493773),
    s = r(986197),
    l = r(135200);
let a = (e) => {
    let [t, r] = (0, n.Wu)([l.Z], () => [l.Z.usernameSuggestion(), l.Z.usernameSuggestionLoading()]);
    return (
        (0, o.ZP)(
            () => (
                l.Z.wasSuggestionsFetched()
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
