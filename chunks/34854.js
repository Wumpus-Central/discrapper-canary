i.d(n, { Z: () => o });
var t = i(544891),
    l = i(981631);
let o = {
    updateNote(e, n) {
        t.tn.put({
            url: l.ANM.NOTE(e),
            body: { note: n },
            oldFormErrors: !0,
            rejectWithError: !0
        });
    }
};
