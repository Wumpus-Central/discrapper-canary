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
    a = n(149765),
    o = n(915486);
function s(e) {
    return i().cloneDeepWith(e, (e) =>
        (0, a.Bw)(e)
            ? {
                  __tag__: 'bigflag',
                  data: e.toJSON()
              }
            : (0, o.lq)(e)
              ? {
                    __tag__: 'uint8array',
                    data: Array.from(e)
                }
              : void 0
    );
}
function l(e) {
    return i().cloneDeepWith(e, (e) => (null != e && 'object' == typeof e && '__tag__' in e && 'bigflag' === e.__tag__ ? a.vB(e.data) : (0, o.Bx)(e) ? new Uint8Array(e.data) : void 0));
}
