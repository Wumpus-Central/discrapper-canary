n.d(t, { Z: () => b });
var r = n(255367);
n(73800);
var i = n(399606),
    o = n(481060),
    a = n(7284),
    s = n(210975),
    l = n(158776),
    c = n(699516),
    u = n(594174),
    d = n(51144),
    f = n(984370),
    _ = n(388032),
    p = n(97009);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e) {
    let t = e.channel.getRecipientId(),
        n = e.channel.isSystemDM(),
        h = (0, i.e7)([u.default], () => u.default.getUser(t)),
        g = (0, i.e7)([l.Z], () => l.Z.getStatus(t)),
        b = (0, i.e7)([l.Z], () => l.Z.isMobileOnline(t)),
        y = (0, i.e7)([c.Z], () => c.Z.getNickname(t)),
        O = d.ZP.useUserTag(h),
        v = (0, a.j)({ displayNameStyles: null == h ? void 0 : h.displayNameStyles }),
        I = (0, s.m$)({ channelId: e.channel.id });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.nn4, { children: _.intl.string(_.t.EJRzg4) }),
            null != h &&
                !n &&
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(o.qEK, {
                        status: g,
                        isMobile: b,
                        className: p.avatar,
                        size: o.EFr.SIZE_20,
                        "aria-label": d.ZP.getName(h),
                        src: h.getAvatarURL(void 0, 20),
                    }),
                }),
            (0, r.jsx)(f.Z.Title, {
                level: e.level,
                onClick: e.handleClick,
                onContextMenu: e.handleContextMenu,
                className: null != e.handleClick ? p.cursorPointer : null,
                children: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(o.DY3, {
                            text: O,
                            position: "bottom",
                            className: v,
                            children: null != y ? y : d.ZP.getName(h),
                        }),
                        I &&
                            (0, r.jsx)(o.ua7, {
                                text: _.intl.string(_.t.QyZ4TU),
                                children: (e) =>
                                    (0, r.jsx)(
                                        o.tQf,
                                        E(m({}, e), {
                                            size: "xs",
                                            "aria-label": _.intl.string(_.t.VHXh8f),
                                            color: o.TVs.colors.INTERACTIVE_NORMAL,
                                            className: p.secureFramesIcon,
                                        }),
                                    ),
                            }),
                    ],
                }),
            }),
        ],
    });
}
