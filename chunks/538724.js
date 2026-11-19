var i = n(73153);
let r = new Set(),
    a = new Set();
function s() {
    i.h.dispatch({ type: "CLIPS_SET_EXPORTING", clipIds: [...new Set([...r, ...a])] });
}
n.d(
    t,
    {},
    {
        D: function (e) {
            if (e.some((e) => a.has(e) || r.has(e))) return null;
            for (let t of e) a.add(t);
            s();
            let t = !1;
            return () => {
                if (!t) {
                    for (let n of ((t = !0), e)) a.delete(n);
                    s();
                }
            };
        },
        T: function (e) {
            ((r = new Set(e ?? [])), s());
        },
    },
);
