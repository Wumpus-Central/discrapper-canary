var i = n(951178);
n.d(
    t,
    {},
    {
        j: function (e) {
            return (
                "guild" === e.install_scope &&
                null != e.guild_id &&
                e.supported_surfaces?.includes(i.q7.OVERLAY) === !0 &&
                null != e.overlay_widget
            );
        },
        o: function (e) {
            return (
                "user" === e.install_scope &&
                e.supported_surfaces?.includes(i.q7.OVERLAY) === !0 &&
                null != e.overlay_widget
            );
        },
    },
);
