n.d(t, { G: () => o }), n(47120), n(773603);
var i = n(399606),
    s = n(570140),
    a = n(493773),
    l = n(986197),
    r = n(135200);
let o = (e) => {
    let [t, n] = (0, i.Wu)([r.Z], () => [r.Z.usernameSuggestion(), r.Z.usernameSuggestionLoading()]);
    return (
        (0, a.Z)(
            () => (
                r.Z.wasSuggestionsFetched()
                    ? s.Z.dispatch({
                          type: 'POMELO_SUGGESTIONS_FETCH',
                          usernameSuggestionLoading: !1
                      })
                    : l.Z.fetchSuggestions(e).finally(() => {
                          s.Z.dispatch({
                              type: 'POMELO_SUGGESTIONS_FETCH',
                              usernameSuggestionLoading: !1
                          });
                      }),
                () => {
                    l.Z.resetSuggestions();
                }
            )
        ),
        {
            usernameSuggestion: t,
            usernameSuggestionLoading: n
        }
    );
};
