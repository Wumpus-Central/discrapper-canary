t.d(n, { Z: () => o });
var l = t(544891),
    i = t(981631);
let o = {
    updateNote(e, n) {
        l.tn.put({
            url: i.ANM.NOTE(e),
            body: { note: n },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
    },
};
