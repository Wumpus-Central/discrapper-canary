n.d(t, { A: () => o });
var i = n(73153),
    r = n(636401),
    a = n(629471),
    l = n(360469),
    s = n(818348);
let o = {
    [s.e$.SET_ORIENTATION_LOCK_STATE]: {
        validation: (e) =>
            (0, a.A)(e)
                .required()
                .keys({
                    lock_state: e.number().valid(l.N7.UNLOCKED, l.N7.PORTRAIT, l.N7.LANDSCAPE).required(),
                    picture_in_picture_lock_state: e
                        .number()
                        .valid(l.N7.UNLOCKED, l.N7.PORTRAIT, l.N7.LANDSCAPE)
                        .allow(null)
                        .optional(),
                    grid_lock_state: e
                        .number()
                        .valid(l.N7.UNLOCKED, l.N7.PORTRAIT, l.N7.LANDSCAPE)
                        .allow(null)
                        .optional(),
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { lock_state: n, picture_in_picture_lock_state: a, grid_lock_state: l },
                } = e,
                o = t.application.id;
            if (null != o)
                i.h.dispatch({
                    type: "FRAME_SET_ORIENTATION_LOCK_STATE",
                    applicationId: o,
                    lockState: n,
                    pictureInPictureLockState: a,
                }),
                    i.h.dispatch({
                        type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE",
                        applicationId: o,
                        lockState: n,
                        pictureInPictureLockState: a,
                        gridLockState: l,
                    });
            else throw new r.A({ errorCode: s.Lw.INVALID_COMMAND }, "No application.");
        },
    },
};
