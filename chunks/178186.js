var i = _(620632),
    n = _(73153),
    c = _(652215);
_.d(
    r,
    {},
    {
        Ey: function (t) {
            return i.Bo.del({ url: c.Rsh.DELETE_SAFETY_WARNINGS(t), rejectWithError: (0, i.fT)() });
        },
        O$: function () {
            n.h.dispatch({ type: "VIBING_WUMPUS_PAUSE_MUSIC" });
        },
        Rw: function (t, r) {
            return i.Bo.post({
                url: c.Rsh.ADD_SAFETY_WARNING(t),
                body: { safety_warning_type: r },
                rejectWithError: (0, i.fT)(),
            });
        },
        S9: function () {
            n.h.dispatch({ type: "VIBING_WUMPUS_STOP_MUSIC" });
        },
        q0: function () {
            n.h.dispatch({ type: "VIBING_WUMPUS_PLAY_MUSIC" });
        },
    },
);
