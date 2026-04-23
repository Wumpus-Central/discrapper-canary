s.d(t, { o: () => i });
var n = s(64700);
s(309613);
var a = s(652215);
let l = 9975 + a.T_y,
    r = 9975 / a.T_y;
function i(e) {
    let { totalResults: t, isSearching: s } = e,
        [i, o] = n.useState(t);
    return (
        n.useEffect(() => {
            s || o(t);
        }, [t, s]),
        { isPaginationTotalCountLimited: i > 9975 + a.T_y, paginationTotalCount: Math.min(i, l), paginationMaxIndex: r }
    );
}
