n.d(t, {
    A: () => o,
}),
    n(896048);
var r = n(73153),
    i = n(636401),
    l = n(629471),
    a = n(360469),
    s = n(818348);
let o = {
    [s.e$.SET_ORIENTATION_LOCK_STATE]: {
        validation: (e) =>
            (0, l.A)(e)
                .required()
                .keys({
                    lock_state: e.number().valid(a.N7.UNLOCKED, a.N7.PORTRAIT, a.N7.LANDSCAPE).required(),
                    picture_in_picture_lock_state: e
                        .number()
                        .valid(a.N7.UNLOCKED, a.N7.PORTRAIT, a.N7.LANDSCAPE)
                        .allow(null)
                        .optional(),
                    grid_lock_state: e
                        .number()
                        .valid(a.N7.UNLOCKED, a.N7.PORTRAIT, a.N7.LANDSCAPE)
                        .allow(null)
                        .optional(),
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { lock_state: n, picture_in_picture_lock_state: l, grid_lock_state: a },
                } = e,
                o = t.application.id;
            if (null != o)
                r.h.dispatch({
                    type: "FRAME_SET_ORIENTATION_LOCK_STATE",
                    applicationId: o,
                    lockState: n,
                    pictureInPictureLockState: l,
                }),
                    r.h.dispatch({
                        type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE",
                        applicationId: o,
                        lockState: n,
                        pictureInPictureLockState: l,
                        gridLockState: a,
                    });
            else
                throw new i.A(
                    {
                        errorCode: s.Lw.INVALID_COMMAND,
                    },
                    "No application.",
                );
        },
    },
};
