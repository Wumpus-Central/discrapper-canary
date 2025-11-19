_.d(e, { i: () => r });
var a = _(573736);
function r(t, e, _ = () => {}) {
    var n, o, E;
    let i;
    try {
        i = t();
    } catch (t) {
        throw (e(t), _(), t);
    }
    return (
        (n = i),
        (o = e),
        (E = _),
        (0, a.J8)(n)
            ? n.then(
                  (t) => (E(), t),
                  (t) => {
                      throw (o(t), E(), t);
                  },
              )
            : (E(), n)
    );
}
