var i = n(192308),
    r = n(793322),
    a = n(174768),
    s = n(186111),
    l = n(114129),
    o = n(858760),
    d = n(254838);
n.d(
    t,
    {},
    {
        k: function (e) {
            if (a.A.isTabPicker()) return ((0, r.jD)(), !0);
            if (a.A.isOpen() || s.A.hasLayers() || (0, i.ue)()) return !1;
            if (!(0, d.H)()) return !0;
            let { newTabExperience: t } = o.A.getConfig({ location: "showNewTabSwitcher" }, { autoTrackExposure: !1 });
            switch (t) {
                case "friends":
                    return ((0, l.l7)(e), !0);
                case "popout":
                    return ((0, r.WU)("NEW_TAB_POPOUT", "", { isTabPicker: !0 }), !0);
            }
        },
    },
);
