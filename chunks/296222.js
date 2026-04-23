l.d(t, { default: () => c });
var n = l(627968),
    a = l(64700),
    i = l(189213),
    r = l(167417),
    s = l(462116),
    u = l(985018);
let d = ["MESSAGE_SPAM", "DM_SPAM", "MENTION_SPAM", "SUSPICIOUS_USERS", "SETTINGS_SPAM"];
function c(e) {
    let { guildId: t, transitionState: l, onClose: c } = e,
        [o, S] = a.useState([]),
        _ = a.useCallback(() => {
            (0, s.G1)(t, o), (0, s.B)(t), c();
        }, [t, c, o]),
        I = a.useCallback((e) => {
            S(e);
        }, []),
        g = a.useCallback(() => {
            open("https://discord.com/community/securing-your-server");
        }, []),
        E = a.useMemo(
            () =>
                d.map((e) => ({
                    label: String(
                        ((e) => {
                            switch (e) {
                                case "DM_SPAM":
                                    return u.intl.string(u.t["9CYNmS"]);
                                case "MENTION_SPAM":
                                    return u.intl.string(u.t["hR/IdO"]);
                                case "MESSAGE_SPAM":
                                    return u.intl.string(u.t.fwloj2);
                                case "SETTINGS_SPAM":
                                    return u.intl.string(u.t.ETFVFw);
                                case "SUSPICIOUS_USERS":
                                    return u.intl.string(u.t["lKXu+n"]);
                            }
                            return null;
                        })(e),
                    ),
                    value: e,
                })),
            [],
        );
    return (0, n.jsx)(i.Modal, {
        transitionState: l,
        title: u.intl.string(u.t.uYPGsS),
        subtitle: u.intl.format(u.t.Hg8Ee7, { onClick: g }),
        actions: [
            { text: u.intl.string(u.t["ETE/oC"]), onClick: c, variant: "secondary" },
            { text: u.intl.string(u.t.geKm7t), onClick: _ },
        ],
        onClose: c,
        children: (0, n.jsx)(r.$, { selectedValues: o, onChange: I, options: E }),
    });
}
