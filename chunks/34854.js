t.d(n, { Z: () => r });
var l = t(544891),
    i = t(981631);
let r = {
    updateNote(e, n) {
        l.tn.put({
            url: i.ANM.NOTE(e),
            body: { note: n },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
    },
};
