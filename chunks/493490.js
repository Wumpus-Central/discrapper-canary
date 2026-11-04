var i = n(855986),
    r = n(73153);
let a = [],
    s = new Map();
class l extends i.Ay.Store {
    getCaptures(e) {
        return s.get(e)?.captures ?? a;
    }
    getSelectedCapture(e) {
        let t = s.get(e);
        return null == t || 0 === t.captures.length || null === t.selectedId
            ? null
            : (t.captures.find((e) => e.id === t.selectedId) ?? t.captures[0]);
    }
}
let o = new l(r.h, {
    CONJURE_GAME_CAPTURES_SET: function (e) {
        let { projectId: t, captures: n, selectedId: i } = e;
        s.set(t, { captures: n, selectedId: i ?? s.get(t)?.selectedId });
    },
    CONJURE_GAME_CAPTURE_SELECT: function (e) {
        let { projectId: t, captureId: n } = e,
            i = s.get(t);
        if (null == i) return !1;
        s.set(t, { ...i, selectedId: n });
    },
});
n.d(t, {}, { A: o });
