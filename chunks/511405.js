n.d(t, {
    G: () => s,
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
    n(873817),
    n(610885),
    n(126298);
var r = n(392711),
    i = n.n(r),
    o = n(149765),
    a = n(915486);
function s(e) {
    return i().cloneDeepWith(e, (e) =>
        (0, o.Bw)(e)
            ? {
                  __tag__: 'bigflag',
                  data: e.toJSON()
              }
            : (0, a.lq)(e)
              ? {
                    __tag__: 'uint8array',
                    data: Array.from(e)
                }
              : void 0
    );
}
function l(e) {
    return i().cloneDeepWith(e, (e) => (null != e && 'object' == typeof e && '__tag__' in e && 'bigflag' === e.__tag__ ? o.vB(e.data) : (0, a.Bx)(e) ? new Uint8Array(e.data) : void 0));
}
