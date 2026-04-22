n.d(t, { A: () => u });
var i = n(64700),
    l = n(311907),
    r = n(562465),
    a = n(73153),
    o = n(279263),
    d = n(652215);
function u(e) {
    let t = (0, l.bG)([o.A], () => o.A.getNote(e));
    return (
        i.useEffect(() => {
            null == t && s(e);
        }, [t, e]),
        t ?? { loading: !0, note: null }
    );
}
async function s(e) {
    a.h.dispatch({ type: "USER_NOTE_LOAD_START", userId: e });
    try {
        let { body: t } = await r.Bo.get({ url: d.Rsh.NOTE(e), oldFormErrors: !0, rejectWithError: !0 });
        if (t.note_user_id !== e) throw Error("Invalid response from server");
        a.h.dispatch({ type: "USER_NOTE_UPDATE", id: e, note: t.note });
    } catch (t) {
        a.h.dispatch({ type: "USER_NOTE_UPDATE", id: e });
    }
}
