t.d(n, { Z: () => o });
var i = t(544891),
    l = t(981631);
let o = {
    updateNote(e, n) {
        i.tn.put({
            url: l.ANM.NOTE(e),
            body: { note: n },
            oldFormErrors: !0,
            rejectWithError: !0
        });
    }
};
