r.d(n, {
    KR: function () {
        return u;
    },
    p8: function () {
        return l;
    },
    sJ: function () {
        return c;
    }
});
var i = r(192379),
    a = r(15729),
    o = r(731965);
let s = Object.freeze({
        id: null,
        activeDescendant: null
    }),
    l = (0, a.U)(() => s);
function u(e, n, r) {
    (0, i.useEffect)(() => {
        (0, o.j)(() => {
            n
                ? l.setState({
                      id: e,
                      activeDescendant: r
                  })
                : l.setState({
                      id: null,
                      activeDescendant: null
                  });
        });
    }, [e, n, r]);
}
function c() {
    (0, o.j)(() => l.setState(() => s));
}
