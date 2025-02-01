a.d(e, { i: () => n });
var r = a(573736);
function n(t, e, a = () => {}) {
    var o, _, i;
    let c;
    try {
        c = t();
    } catch (t) {
        throw (e(t), a(), t);
    }
    return (
        (o = c),
        (_ = e),
        (i = a),
        (0, r.J8)(o)
            ? o.then(
                  (t) => (i(), t),
                  (t) => {
                      throw (_(t), i(), t);
                  }
              )
            : (i(), o)
    );
}
