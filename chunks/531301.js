n.d(t, { Z: () => c }), n(415506);
var r = n(473749),
    i = n(442837),
    a = n(544891),
    o = n(570140),
    s = n(432835),
    l = n(981631);
function c(e) {
    let t = (0, i.e7)([s.Z], () => s.Z.getNote(e));
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
    o.Z.dispatch({
        type: "USER_NOTE_LOAD_START",
        userId: e,
    });
    try {
        let { body: t } = await a.tn.get({
            url: l.ANM.NOTE(e),
            oldFormErrors: !0,
            rejectWithError: !0,
        });
        if (t.note_user_id !== e) throw Error("Invalid response from server");
        o.Z.dispatch({
            type: "USER_NOTE_UPDATE",
            id: e,
            note: t.note,
        });
    } catch (t) {
        o.Z.dispatch({
            type: "USER_NOTE_UPDATE",
            id: e,
        });
    }
}
