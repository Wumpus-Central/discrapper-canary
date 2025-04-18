t.d(n, { Z: () => i });
var r = t(544891),
    o = t(981631);
let i = {
    updateNote(e, n) {
        r.tn.put({
            url: o.ANM.NOTE(e),
            body: { note: n },
            oldFormErrors: !0,
            rejectWithError: !0
        });
    }
};
