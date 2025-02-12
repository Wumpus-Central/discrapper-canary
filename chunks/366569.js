a.d(e, { i: () => n });
var r = a(573736);
function n(t, e, a = () => {}) {
    var _, o, i;
    let c;
    try {
        c = t();
    } catch (t) {
        throw (e(t), a(), t);
    }
    return (
        (_ = c),
        (o = e),
        (i = a),
        (0, r.J8)(_)
            ? _.then(
                  (t) => (i(), t),
                  (t) => {
                      throw (o(t), i(), t);
                  }
              )
            : (i(), _)
    );
}
