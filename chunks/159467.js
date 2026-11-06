var l = n(582128);
n.d(
    t,
    {},
    {
        A: function (e) {
            let [t] = l.useState(() => ({
                current: {
                    get element() {
                        return e.current?.getFocusReturnTarget()?.element ?? null;
                    },
                    focus(t) {
                        e.current?.getFocusReturnTarget()?.focus(t);
                    },
                },
            }));
            return t;
        },
    },
);
