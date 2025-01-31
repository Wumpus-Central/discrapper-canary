n.d(t, {
    G: () => o,
    H: () => l
}),
    n(309749),
    n(518263),
    n(970173),
    n(520712),
    n(268111),
    n(941497),
    n(32026),
    n(480839),
    n(744285),
    n(492257),
    n(873817);
var i = n(392711),
    r = n.n(i),
    a = n(149765),
    s = n(915486);
function o(e) {
    return r().cloneDeepWith(e, (e) =>
        (0, a.Bw)(e)
            ? {
                  __tag__: 'bigflag',
                  data: e.toJSON()
              }
            : (0, s.lq)(e)
              ? {
                    __tag__: 'uint8array',
                    data: Array.from(e)
                }
              : void 0
    );
}
function l(e) {
    return r().cloneDeepWith(e, (e) => (null != e && 'object' == typeof e && '__tag__' in e && 'bigflag' === e.__tag__ ? a.vB(e.data) : (0, s.Bx)(e) ? new Uint8Array(e.data) : void 0));
}
