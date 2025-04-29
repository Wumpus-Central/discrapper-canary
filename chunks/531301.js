n.d(t, { Z: () => c });
var r = n(192379),
    i = n(442837),
    o = n(544891),
    a = n(570140),
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
    a.Z.dispatch({
        type: 'USER_NOTE_LOAD_START',
        userId: e
    });
    try {
        let { body: t } = await o.tn.get({
            url: l.ANM.NOTE(e),
            oldFormErrors: !0,
            rejectWithError: !0
        });
        a.Z.dispatch({
            type: 'USER_NOTE_LOADED',
            userId: e,
            note: t
        });
    } catch (t) {
        a.Z.dispatch({
            type: 'USER_NOTE_LOADED',
            userId: e
        });
    }
}
