n.d(t, { default: () => p });
var l = n(627968),
    i = n(550079),
    a = n(17928),
    r = n(477782),
    o = n(138134),
    s = n(928658),
    c = n(734057),
    d = n(985018),
    u = n(652215);
function p(e) {
    var t;
    let n,
        p,
        { onClose: m, onSelect: A, application: h, channelId: x } = e,
        v =
            ((t = u.BRT.POPOUT),
            (n = (0, a.bG)([c.A], () => c.A.getChannel(x))),
            (p = n?.getGuildId()),
            (0, l.jsx)(r.Dr, {
                id: "report-app",
                color: "danger",
                label: d.intl.string(d.t.NgA5vp),
                action: () =>
                    (0, s.r3)({
                        application: h,
                        entrypoint: "activity_ui_popout",
                        contextualGuildId: p ?? void 0,
                        contextualChannelId: n?.id,
                        appContext: t,
                    }),
                icon: o.i,
                leadingAccessory: { type: "icon", icon: o.i },
            }));
    return (0, l.jsx)(i.W, {
        "data-menu-migrated": !0,
        navId: "activity-popout-overflow-popout",
        onClose: m,
        onSelect: A,
        "aria-label": d.intl.string(d.t.SS9Y6P),
        children: v,
    });
}
