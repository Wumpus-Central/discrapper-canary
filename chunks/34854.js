n.d(t, { Z: () => o });
var r = n(544891),
    l = n(981631);
let o = {
    updateNote(e, t) {
        r.tn.put({
            url: l.ANM.NOTE(e),
            body: { note: t },
            oldFormErrors: !0,
            rejectWithError: !0
        });
    }
};
