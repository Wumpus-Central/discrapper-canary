n.d(t, { Z: () => m });
var r = n(951288);
n(647438);
var i = n(399606),
    l = n(28664),
    o = n(481060),
    a = n(7284),
    s = n(210975),
    c = n(158776),
    u = n(699516),
    d = n(594174),
    p = n(51144),
    h = n(984370),
    f = n(388032),
    g = n(161655);
function m(e) {
    let t = e.channel.getRecipientId(),
        n = e.channel.isSystemDM(),
        m = (0, i.e7)([d.default], () => d.default.getUser(t)),
        b = (0, i.e7)([c.Z], () => c.Z.getStatus(t)),
        _ = (0, i.e7)([c.Z], () => c.Z.isMobileOnline(t)),
        y = (0, i.e7)([u.Z], () => u.Z.getNickname(t)),
        O = p.ZP.useUserTag(m),
        v = (0, a.j)({ displayNameStyles: null == m ? void 0 : m.displayNameStyles }),
        j = (0, s.m$)({ channelId: e.channel.id });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.nn4, { children: f.intl.string(f.t.EJRzg7) }),
            null != m &&
                !n &&
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(o.qEK, {
                        status: b,
                        isMobile: _,
                        className: g.avatar,
                        size: o.EFr.SIZE_20,
                        "aria-label": p.ZP.getName(m),
                        src: m.getAvatarURL(void 0, 20),
                    }),
                }),
            (0, r.jsx)(h.Z.Title, {
                level: e.level,
                onClick: e.handleClick,
                onContextMenu: e.handleContextMenu,
                className: null != e.handleClick ? g.cursorPointer : null,
                children: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(o.jSM, {
                            text: O,
                            position: "bottom",
                            className: v,
                            children: null != y ? y : p.ZP.getName(m),
                        }),
                        j &&
                            (0, r.jsx)(l.u, {
                                text: f.intl.string(f.t.QyZ4Td),
                                children: (0, r.jsx)(o.tQf, {
                                    size: "xs",
                                    "aria-label": f.intl.string(f.t.VHXh8a),
                                    color: o.TVs.colors.INTERACTIVE_NORMAL,
                                    className: g.secureFramesIcon,
                                }),
                            }),
                    ],
                }),
            }),
        ],
    });
}
