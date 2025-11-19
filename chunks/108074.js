_.d(e, { W: () => E });
var a = _(617726),
    r = _(967752),
    n = _(510529);
function o(t, e) {
    let _;
    return (0, a.gv)(t, (t, a) => (e.includes(a) && (_ = Array.isArray(t) ? t[1] : void 0), !!_)), _;
}
function E(t, e) {
    return (_) => {
        let E = t(_),
            i = new Map();
        function c(e, a) {
            let E = a ? `${e}:${a}` : e,
                c = i.get(E);
            if (!c) {
                let s = (0, r.U4)(e);
                if (!s) return;
                let l = (0, n.U)(s, _.tunnel);
                (c = a
                    ? ((e) => {
                          let _ = t(e);
                          return {
                              ..._,
                              send: async (t) => {
                                  let e = o(t, ["event", "transaction", "profile", "replay_event"]);
                                  return e && (e.release = a), _.send(t);
                              },
                          };
                      })({
                          ..._,
                          url: l,
                      })
                    : t({
                          ..._,
                          url: l,
                      })),
                    i.set(E, c);
            }
            return [e, c];
        }
        return {
            send: async function (t) {
                let _ = e({
                        envelope: t,
                        getEvent: function (e) {
                            return o(t, e && e.length ? e : ["event"]);
                        },
                    })
                        .map((t) => ("string" == typeof t ? c(t, void 0) : c(t.dsn, t.release)))
                        .filter((t) => !!t),
                    r = _.length ? _ : [["", E]];
                return (
                    await Promise.all(
                        r.map(([e, _]) =>
                            _.send(
                                (0, a.Jd)(
                                    e
                                        ? {
                                              ...t[0],
                                              dsn: e,
                                          }
                                        : t[0],
                                    t[1],
                                ),
                            ),
                        ),
                    )
                )[0];
            },
            flush: async function (t) {
                let e = [...i.values(), E];
                return (await Promise.all(e.map((e) => e.flush(t)))).every((t) => t);
            },
        };
    };
}
