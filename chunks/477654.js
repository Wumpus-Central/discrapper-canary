n.d(t, { o: () => r });
var i = n(64700);
n(309613);
var l = n(652215);
let s = 9975 + l.T_y,
    a = 9975 / l.T_y;
function r(e) {
    let { totalResults: t, isSearching: n } = e,
        [r, o] = i.useState(t);
    return (
        i.useEffect(() => {
            n || o(t);
        }, [t, n]),
        { isPaginationTotalCountLimited: r > 9975 + l.T_y, paginationTotalCount: Math.min(r, s), paginationMaxIndex: a }
    );
}
