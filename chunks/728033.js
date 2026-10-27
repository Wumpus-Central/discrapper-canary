i.d(n, { default: () => g });
var a = i(477900),
    e = i(980707),
    l = i(477782),
    o = i(136968),
    r = i(17928),
    c = i(138134),
    d = i(928658),
    p = i(734057),
    u = i(105292),
    s = i(652215);
function g(t) {
    var n;
    let i,
        g,
        { onClose: h, onSelect: v, application: x, channelId: I } = t,
        b =
            ((n = s.BRT.POPOUT),
            (i = (0, r.bG)([p.A], () => p.A.getChannel(I))),
            (g = i?.getGuildId()),
            (0, a.jsx)(l.Dr, {
                id: "report-app",
                color: "danger",
                label: u.intl.string(u.t.NgA5vp),
                action: () =>
                    (0, d.r3)({
                        application: x,
                        entrypoint: "activity_ui_popout",
                        contextualGuildId: g ?? void 0,
                        contextualChannelId: i?.id,
                        appContext: n,
                    }),
                icon: c.FlagIcon,
                leadingAccessory: { type: "icon", icon: c.FlagIcon },
            })),
        y = (0, o.A)(x.id);
    return (0, a.jsxs)(e.W, {
        "data-menu-migrated": !0,
        navId: "activity-popout-overflow-popout",
        onClose: h,
        onSelect: v,
        "aria-label": u.intl.string(u.t.SS9Y6P),
        children: [null != y ? (0, a.jsx)(l.rX, { children: y }) : null, (0, a.jsx)(l.rX, { children: b })],
    });
}
