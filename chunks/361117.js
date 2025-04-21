n.d(t, { G: () => a }), n(388685), n(457542);
var r = n(399606),
    i = n(570140),
    s = n(493773),
    o = n(986197),
    l = n(135200);
let a = (e) => {
    let [t, n] = (0, r.Wu)([l.Z], () => [l.Z.usernameSuggestion(), l.Z.usernameSuggestionLoading()]);
    return (
        (0, s.ZP)(
            () => (
                l.Z.wasSuggestionsFetched()
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
            usernameSuggestionLoading: n
        }
    );
};
