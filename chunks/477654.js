"use strict";
n.d(t, { o: () => a });
var i = n(64700);
n(309613);
var s = n(652215);
let l = 9975 + s.T_y,
    r = 9975 / s.T_y;
function a(e) {
    let { totalResults: t, isSearching: n } = e,
        [a, o] = i.useState(t);
    return (
        i.useEffect(() => {
            n || o(t);
        }, [t, n]),
        { isPaginationTotalCountLimited: a > 9975 + s.T_y, paginationTotalCount: Math.min(a, l), paginationMaxIndex: r }
    );
}
