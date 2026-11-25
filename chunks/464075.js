n.d(t, { H: () => p });
var i = n(477900),
    s = n(582128),
    r = n(43105),
    a = n(727419),
    o = n(975571),
    l = n(726362),
    c = n(391523),
    d = n(652215),
    u = n(137005),
    _ = n(792996);
function p(e) {
    let { guildId: t, targetElementRef: n } = e;
    return (
        s.useEffect(() => {
            (0, c.Ws)({ noticeType: "admin_settings", guildId: t });
        }, [t]),
        (0, i.jsx)("div", {
            onClick: (e) => e.stopPropagation(),
            onKeyPress: (e) => e.stopPropagation(),
            onContextMenu: (e) => e.stopPropagation(),
            children: (0, i.jsx)(r.A, {
                targetElementRef: n,
                badge: "new",
                title: _.intl.string(u.default.BpbdcS),
                body: _.intl.string(u.default.PY2mND),
                graphic: {
                    type: "image",
                    src: "https://cdn.discordapp.com/assets/content/8d3ce9025ba058683db6904fe74153a834b5331af2c89da160918f0e416b9a92.svg",
                },
                gradientColor: "purple",
                textLink: {
                    text: _.intl.string(_.t.hvVgAZ),
                    link: o.A.getArticleURL(d.MVz.SERVER_WEB_PAGES_ADMIN),
                    onClick: function () {
                        (0, c.Yy)({ noticeType: "admin_settings", guildId: t }, "learn_more");
                    },
                },
                actions: [
                    {
                        text: _.intl.string(u.default.AMw39B),
                        variant: "primary",
                        onClick: function () {
                            ((0, c.Yy)({ noticeType: "admin_settings", guildId: t }, "open_settings"),
                                (0, l.dM)(t),
                                a.A.open(t, d.BEX.DISCOVERY_LANDING_PAGE));
                        },
                    },
                ],
                onRequestClose: function (e) {
                    "user:explicit" === e
                        ? ((0, c.Yy)({ noticeType: "admin_settings", guildId: t }, "dismiss"), (0, l.dM)(t))
                        : "user:escape" === e &&
                          ((0, c.Yy)({ noticeType: "admin_settings", guildId: t }, "hide"), (0, l.Ug)(t));
                },
                position: "bottom",
            }),
        })
    );
}
