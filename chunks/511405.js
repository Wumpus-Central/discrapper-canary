n.d(t, {
    G: () => s,
    H: () => l
}),
    n(368063),
    n(410992),
    n(227481),
    n(730884),
    n(20464),
    n(341884),
    n(364341),
    n(629680),
    n(505025),
    n(918970),
    n(121784),
    n(644351),
    n(146733);
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
