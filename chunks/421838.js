var i = n(73153),
    r = n(129230),
    a = n(652215);
n.d(
    t,
    {},
    {
        Kl: function (e, t) {
            i.h.dispatch({ type: "HOTSPOT_OVERRIDE_SET", location: e, enabled: t });
        },
        LF: function (e) {
            i.h.dispatch({ type: "HOTSPOT_OVERRIDE_CLEAR", location: e });
        },
        sF: function (e) {
            (r.default.track(a.HAw.HOTSPOT_HIDDEN, { hotspot_location: e }),
                i.h.dispatch({ type: "HOTSPOT_HIDE", location: e }));
        },
    },
);
