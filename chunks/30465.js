n.d(t, {
    KR: () => l,
    p8: () => s,
    sJ: () => c
});
var r = n(73800),
    i = n(381814),
    a = n(731965);
let o = Object.freeze({
        id: null,
        activeDescendant: null
    }),
    s = (0, i.U)(() => o);
function l(e, t, n) {
    (0, r.useEffect)(() => {
        (0, a.j)(() => {
            t
                ? s.setState({
                      id: e,
                      activeDescendant: n
                  })
                : s.setState({
                      id: null,
                      activeDescendant: null
                  });
        });
    }, [e, t, n]);
}
function c() {
    (0, a.j)(() => s.setState(() => o));
}
