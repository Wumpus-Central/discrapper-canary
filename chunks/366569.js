r.d(t, { i: () => a });
var n = r(573736);
function a(e, t, r = () => {}) {
    var i, o, _;
    let s;
    try {
        s = e();
    } catch (e) {
        throw (t(e), r(), e);
    }
    return (
        (i = s),
        (o = t),
        (_ = r),
        (0, n.J8)(i)
            ? i.then(
                  (e) => (_(), e),
                  (e) => {
                      throw (o(e), _(), e);
                  },
              )
            : (_(), i)
    );
}
