var i = n(196765),
    r = n(314116),
    a = n(792996);
let s = (0, i.v)(() => ({ attempts: new Map() }));
function l(e) {
    s.setState((t) => {
        if (!t.attempts.has(e)) return t;
        let n = new Map(t.attempts);
        return (n.delete(e), { attempts: n });
    });
}
n.d(
    t,
    {},
    {
        Fj: function (e, t) {
            s.setState((n) => {
                let i = n.attempts.get(e);
                return null == i ? n : { attempts: new Map(n.attempts).set(e, { ...i, progress: t }) };
            });
        },
        Ib: function (e) {
            return s((t) => t.attempts.get(e)?.progress);
        },
        _V: function (e) {
            (s.getState().attempts.get(e)?.controller.abort(), l(e));
        },
        cG: l,
        vQ: function (e) {
            return (
                s.getState().attempts.size > 0 &&
                ((0, r.A)({
                    title: a.intl.string(a.t.PqpqTp),
                    subtitle: a.intl.string(a.t.ByJmnc),
                    confirmText: a.intl.string(a.t["ETE/oC"]),
                    cancelText: a.intl.string(a.t["3ilveh"]),
                    onConfirm: () => {
                        for (let e of s.getState().attempts.values()) e.controller.abort();
                        (s.setState({ attempts: new Map() }), e());
                    },
                }),
                !0)
            );
        },
        yf: function (e, t) {
            s.setState((n) => ({ attempts: new Map(n.attempts).set(e, { controller: t, progress: 0 }) }));
        },
    },
);
