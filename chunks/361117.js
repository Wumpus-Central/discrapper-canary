n.d(t, {
    G: function () {
        return o;
    }
}),
    n(47120),
    n(773603);
var i = n(399606),
    s = n(570140),
    r = n(493773),
    a = n(986197),
    l = n(135200);
let o = (e) => {
    let [t, n] = (0, i.Wu)([l.Z], () => [l.Z.usernameSuggestion(), l.Z.usernameSuggestionLoading()]);
    return (
        (0, r.Z)(
            () => (
                l.Z.wasSuggestionsFetched()
                    ? s.Z.dispatch({
                          type: 'POMELO_SUGGESTIONS_FETCH',
                          usernameSuggestionLoading: !1
                      })
                    : a.Z.fetchSuggestions(e).finally(() => {
                          s.Z.dispatch({
                              type: 'POMELO_SUGGESTIONS_FETCH',
                              usernameSuggestionLoading: !1
                          });
                      }),
                () => {
                    a.Z.resetSuggestions();
                }
            )
        ),
        {
            usernameSuggestion: t,
            usernameSuggestionLoading: n
        }
    );
};
