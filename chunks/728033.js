n.d(i, { default: () => s });
var a = n(477900),
    o = n(980707),
    e = n(17928),
    l = n(477782),
    c = n(138134),
    p = n(928658),
    r = n(734057),
    d = n(375708),
    u = n(652215);
function s(t) {
    var i;
    let n,
        s,
        { onClose: g, onSelect: h, application: v, channelId: I } = t,
        b =
            ((i = u.BRT.POPOUT),
            (n = (0, e.bG)([r.A], () => r.A.getChannel(I))),
            (s = n?.getGuildId()),
            (0, a.jsx)(l.Dr, {
                id: "report-app",
                color: "danger",
                label: d.intl.string(d.t.NgA5vp),
                action: () =>
                    (0, p.r3)({
                        application: v,
                        entrypoint: "activity_ui_popout",
                        contextualGuildId: s ?? void 0,
                        contextualChannelId: n?.id,
                        appContext: i,
                    }),
                icon: c.FlagIcon,
                leadingAccessory: { type: "icon", icon: c.FlagIcon },
            }));
    return (0, a.jsx)(o.W, {
        "data-menu-migrated": !0,
        navId: "activity-popout-overflow-popout",
        onClose: g,
        onSelect: h,
        "aria-label": d.intl.string(d.t.SS9Y6P),
        children: b,
    });
}
