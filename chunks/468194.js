t.d(r, {
    Fv: () => l,
    _I: () => o
}),
    t(301563),
    t(47120),
    t(757143),
    t(513431);
let n = /[\u0300-\u036f]/g,
    o = null == String.prototype.normalize ? (e) => e : (e) => e.normalize('NFD').replace(n, '').normalize('NFC'),
    l =
        null == String.prototype.normalize
            ? (e) => e
            : function (e) {
                  let r = t(510085),
                      n = '';
                  return (
                      [...e.normalize('NFD')].forEach((e) => {
                          var t;
                          n += null != (t = r[e]) ? t : e;
                      }),
                      n.normalize('NFD').toLocaleLowerCase()
                  );
              };
