a.d(e, { i: () => _ });
var r = a(573736);
function _(t, e, a = () => {}) {
    var n, o, i;
    let c;
    try {
        c = t();
    } catch (t) {
        throw (e(t), a(), t);
    }
    return (
        (n = c),
        (o = e),
        (i = a),
        (0, r.J8)(n)
            ? n.then(
                  (t) => (i(), t),
                  (t) => {
                      throw (o(t), i(), t);
                  }
              )
            : (i(), n)
    );
}
