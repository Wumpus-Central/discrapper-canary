a.d(e, { W: () => i });
var r = a(617726),
    n = a(967752),
    _ = a(510529);
function o(t, e) {
    let a;
    return (0, r.gv)(t, (t, r) => (e.includes(r) && (a = Array.isArray(t) ? t[1] : void 0), !!a)), a;
}
function i(t, e) {
    return (a) => {
        let i = t(a),
            c = new Map();
        function s(e, r) {
            let i = r ? `${e}:${r}` : e,
                s = c.get(i);
            if (!s) {
                let E = (0, n.U4)(e);
                if (!E) return;
                let l = (0, _.U)(E, a.tunnel);
                (s = r
                    ? ((e) => {
                          let a = t(e);
                          return {
                              ...a,
                              send: async (t) => {
                                  let e = o(t, ['event', 'transaction', 'profile', 'replay_event']);
                                  return e && (e.release = r), a.send(t);
                              }
                          };
                      })({
                          ...a,
                          url: l
                      })
                    : t({
                          ...a,
                          url: l
                      })),
                    c.set(i, s);
            }
            return [e, s];
        }
        return {
            send: async function (t) {
                let a = e({
                        envelope: t,
                        getEvent: function (e) {
                            return o(t, e && e.length ? e : ['event']);
                        }
                    })
                        .map((t) => ('string' == typeof t ? s(t, void 0) : s(t.dsn, t.release)))
                        .filter((t) => !!t),
                    n = a.length ? a : [['', i]];
                return (
                    await Promise.all(
                        n.map(([e, a]) =>
                            a.send(
                                (0, r.Jd)(
                                    e
                                        ? {
                                              ...t[0],
                                              dsn: e
                                          }
                                        : t[0],
                                    t[1]
                                )
                            )
                        )
                    )
                )[0];
            },
            flush: async function (t) {
                let e = [...c.values(), i];
                return (await Promise.all(e.map((e) => e.flush(t)))).every((t) => t);
            }
        };
    };
}
