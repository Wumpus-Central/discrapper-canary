t.d(n, { Z: () => i });
var o = t(544891),
    r = t(981631);
let i = {
    updateNote(e, n) {
        o.tn.put({
            url: r.ANM.NOTE(e),
            body: { note: n },
            oldFormErrors: !0,
            rejectWithError: !0
        });
    }
};
