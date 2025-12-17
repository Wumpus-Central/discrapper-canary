n.d(t, { T: () => g }), n(388685);
var i = n(54381);
n(473749);
var r = n(442837),
    l = n(481060),
    a = n(346486),
    o = n(545594),
    s = n(314897),
    c = n(271383),
    u = n(322937),
    d = n(134049),
    p = n(893732),
    f = n(590433),
    h = n(388032),
    m = n(427988);
function g(e) {
    let { guild: t, disabledUntil: n } = e,
        [g, b] = (0, d.i)(t.id),
        C = (0, r.e7)([c.ZP, s.default], () => c.ZP.getMember(t.id, s.default.getId()), [t.id]);
    return (
        (0, u.$)(C),
        (0, i.jsxs)("div", {
            children: [
                g
                    ? (0, i.jsx)(p.Z, {
                          onClose: () => b(t.id),
                          guildName: t.name,
                      })
                    : null,
                (0, i.jsx)(o.i, {
                    bannerIcon: (0, i.jsx)(l.YlB, {
                        size: "md",
                        color: "currentColor",
                        className: m.bannerIcon,
                    }),
                    bannerHeader: h.intl.string(h.t["9UoK6Y"]),
                    bannerSubtext: h.intl.format(h.t["4ZwD5G"], { link: f.cu }),
                    textStyles: m.bannerContainer,
                    headerStyles: m.bannerHeader,
                    children: (0, i.jsx)(l.Text, {
                        variant: "text-sm/semibold",
                        children: (0, i.jsx)(a.Z, {
                            deadline: new Date(n),
                            showUnits: !0,
                            stopAtOneSec: !0,
                        }),
                    }),
                }),
            ],
        })
    );
}
