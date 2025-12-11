n.d(t, { Z: () => b });
var r = n(54381);
n(473749);
var i = n(399606),
    l = n(28664),
    a = n(481060),
    o = n(7284),
    s = n(210975),
    c = n(158776),
    u = n(699516),
    d = n(594174),
    f = n(51144),
    h = n(984370),
    p = n(388032),
    g = n(978966);
function b(e) {
    let t = e.channel.getRecipientId(),
        n = e.channel.isSystemDM(),
        b = (0, i.e7)([d.default], () => d.default.getUser(t)),
        m = (0, i.e7)([c.Z], () => c.Z.getStatus(t)),
        y = (0, i.e7)([c.Z], () => c.Z.isMobileOnline(t)),
        O = (0, i.e7)([u.Z], () => u.Z.getNickname(t)),
        v = f.ZP.useUserTag(b),
        j = (0, o.j)({ displayNameStyles: null == b ? void 0 : b.displayNameStyles }),
        C = (0, s.m$)({ channelId: e.channel.id });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.nn4, { children: p.intl.string(p.t.EJRzg7) }),
            null != b &&
                !n &&
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(a.qEK, {
                        status: m,
                        isMobile: y,
                        className: g.avatar,
                        size: a.EFr.SIZE_20,
                        "aria-label": f.ZP.getName(b),
                        src: b.getAvatarURL(void 0, 20),
                    }),
                }),
            (0, r.jsx)(h.Z.Title, {
                level: e.level,
                onClick: e.handleClick,
                onContextMenu: e.handleContextMenu,
                className: null != e.handleClick ? g.cursorPointer : null,
                children: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.u, {
                            text: v,
                            position: "bottom",
                            children: (0, r.jsx)("span", {
                                className: j,
                                children: null != O ? O : f.ZP.getName(b),
                            }),
                        }),
                        C &&
                            (0, r.jsx)(l.u, {
                                text: p.intl.string(p.t.QyZ4Td),
                                children: (0, r.jsx)(a.tQf, {
                                    size: "xs",
                                    "aria-label": p.intl.string(p.t.VHXh8a),
                                    color: a.TVs.colors.INTERACTIVE_TEXT_DEFAULT,
                                    className: g.secureFramesIcon,
                                }),
                            }),
                    ],
                }),
            }),
        ],
    });
}
