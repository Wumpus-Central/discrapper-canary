var i = n(397369),
    r = n(887287),
    a = n(244055),
    s = n(37595);
n.d(
    t,
    {},
    {
        _: function () {
            let e = (0, s.V)(i.Ay, r.A);
            return (
                !(
                    null != e &&
                    a.A.isOverlayEnabled &&
                    r.A.isOverlayV3EnabledForPID(e.pid) &&
                    r.A.getTargetPID() === e.pid
                ) || r.A.isFocused(e.pid)
            );
        },
    },
);
