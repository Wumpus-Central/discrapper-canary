r.d(n, {
    G: function () {
        return v;
    },
    H: function () {
        return y;
    }
});
var i = r(309749);
var a = r(518263);
var o = r(970173);
var s = r(520712);
var l = r(268111);
var u = r(941497);
var c = r(32026);
var d = r(480839);
var f = r(744285);
var p = r(492257);
var h = r(873817);
var _ = r(392711),
    m = r.n(_),
    g = r(149765),
    E = r(915486);
function v(e) {
    return m().cloneDeepWith(e, (e) =>
        (0, g.Bw)(e)
            ? {
                  __tag__: 'bigflag',
                  data: e.toJSON()
              }
            : (0, E.lq)(e)
              ? {
                    __tag__: 'uint8array',
                    data: Array.from(e)
                }
              : void 0
    );
}
function y(e) {
    return m().cloneDeepWith(e, (e) => (null != e && 'object' == typeof e && '__tag__' in e && 'bigflag' === e.__tag__ ? g.vB(e.data) : (0, E.Bx)(e) ? new Uint8Array(e.data) : void 0));
}
