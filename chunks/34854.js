n.d(t, { Z: () => l });
var r = n(544891),
    o = n(981631);
let l = {
    updateNote(e, t) {
        r.tn.put({
            url: o.ANM.NOTE(e),
            body: { note: t },
            oldFormErrors: !0,
            rejectWithError: !0
        });
    }
};
