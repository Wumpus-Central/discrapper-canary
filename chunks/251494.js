var i = n(775602),
    r = n(188567),
    a = n(652215);
n.d(
    t,
    {},
    {
        X: {
            binds: ["return"],
            action() {
                if (!i.Ay.keyboardModeEnabled && r._.hasSubscribers(a.jej.MODAL_SUBMIT))
                    return (r._.dispatch(a.jej.MODAL_SUBMIT), !1);
            },
        },
    },
);
