n.d(t, { o: () => s }), n(896048);
var r = n(64700);
n(309613);
var l = n(652215);
let i = 9975 + l.T_y,
    a = 9975 / l.T_y;
function s(e) {
    let { totalResults: t, isSearching: n } = e,
        [s, o] = r.useState(t);
    return (
        r.useEffect(() => {
            n || o(t);
        }, [t, n]),
        {
            isPaginationTotalCountLimited: s > 9975 + l.T_y,
            paginationTotalCount: Math.min(s, i),
            paginationMaxIndex: a,
        }
    );
}
