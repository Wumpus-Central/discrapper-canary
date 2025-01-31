n.d(t, {
    KR: () => l,
    p8: () => o,
    sJ: () => u
});
var i = n(192379),
    r = n(15729),
    a = n(731965);
let s = Object.freeze({
        id: null,
        activeDescendant: null
    }),
    o = (0, r.U)(() => s);
function l(e, t, n) {
    (0, i.useEffect)(() => {
        (0, a.j)(() => {
            t
                ? o.setState({
                      id: e,
                      activeDescendant: n
                  })
                : o.setState({
                      id: null,
                      activeDescendant: null
                  });
        });
    }, [e, t, n]);
}
function u() {
    (0, a.j)(() => o.setState(() => s));
}
