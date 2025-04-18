n.d(t, { Z: () => c });
var r = n(192379),
    i = n(442837),
    a = n(544891),
    o = n(570140),
    s = n(722086),
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
                  note: null
              }
    );
}
async function u(e) {
    o.Z.dispatch({
        type: 'USER_NOTE_LOAD_START',
        userId: e
    });
    try {
        let { body: t } = await a.tn.get({
            url: l.ANM.NOTE(e),
            oldFormErrors: !0,
            rejectWithError: !0
        });
        o.Z.dispatch({
            type: 'USER_NOTE_LOADED',
            userId: e,
            note: t
        });
    } catch (t) {
        o.Z.dispatch({
            type: 'USER_NOTE_LOADED',
            userId: e
        });
    }
}
