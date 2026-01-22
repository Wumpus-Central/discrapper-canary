n.d(t, { A: () => c }), n(65821);
var r = n(64700),
    i = n(311907),
    a = n(562465),
    s = n(73153),
    o = n(279263),
    l = n(652215);
function c(e) {
    let t = (0, i.bG)([o.A], () => o.A.getNote(e));
    return (
        r.useEffect(() => {
            null == t && u(e);
        }, [t, e]),
        null != t
            ? t
            : {
                  loading: !0,
                  note: null,
              }
    );
}
async function u(e) {
    s.h.dispatch({
        type: "USER_NOTE_LOAD_START",
        userId: e,
    });
    try {
        let { body: t } = await a.Bo.get({
            url: l.Rsh.NOTE(e),
            oldFormErrors: !0,
            rejectWithError: !0,
        });
        if (t.note_user_id !== e) throw Error("Invalid response from server");
        s.h.dispatch({
            type: "USER_NOTE_UPDATE",
            id: e,
            note: t.note,
        });
    } catch (t) {
        s.h.dispatch({
            type: "USER_NOTE_UPDATE",
            id: e,
        });
    }
}
