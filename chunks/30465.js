n.d(t, {
    KR: () => l,
    p8: () => s,
    sJ: () => c
});
var r = n(192379),
    i = n(230383),
    o = n(731965);
let a = Object.freeze({
        id: null,
        activeDescendant: null
    }),
    s = (0, i.U)(() => a);
function l(e, t, n) {
    (0, r.useEffect)(() => {
        (0, o.j)(() => {
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
    (0, o.j)(() => s.setState(() => a));
}
