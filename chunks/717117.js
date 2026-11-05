var i = n(582128),
    r = n(120692);
n.d(
    t,
    {},
    {
        P: function (e) {
            let t = i.forwardRef(function (t, n) {
                return i.createElement(e, { ...t, ref: n });
            });
            return (
                (t.displayName = `AnimatedWithRef(${("displayName" in e ? e.displayName : void 0) ?? e.name})`),
                (0, r.animated)(t)
            );
        },
    },
);
