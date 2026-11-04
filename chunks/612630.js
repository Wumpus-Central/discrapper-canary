var o = r(582128),
    i = r(855986),
    s = r(620632),
    n = r(73153),
    c = r(279263),
    d = r(652215);
r.d(
    e,
    {},
    {
        A: function (t) {
            let e = (0, i.bG)([c.A], () => c.A.getNote(t));
            return (
                o.useEffect(() => {
                    null == e &&
                        (async function (t) {
                            n.h.dispatch({ type: "USER_NOTE_LOAD_START", userId: t });
                            try {
                                let { body: e } = await s.Bo.get({
                                    url: d.Rsh.NOTE(t),
                                    oldFormErrors: !0,
                                    rejectWithError: !0,
                                });
                                if (e.note_user_id !== t) throw Error("Invalid response from server");
                                n.h.dispatch({ type: "USER_NOTE_UPDATE", id: t, note: e.note });
                            } catch (e) {
                                n.h.dispatch({ type: "USER_NOTE_UPDATE", id: t });
                            }
                        })(t);
                }, [e, t]),
                e ?? { loading: !0, note: null }
            );
        },
    },
);
