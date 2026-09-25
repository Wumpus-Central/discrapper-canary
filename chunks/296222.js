e.d(n, { default: () => g });
var i = e(477900),
    s = e(582128),
    l = e(189213),
    r = e(765178),
    a = e(167417),
    S = e(462116),
    u = e(975571),
    c = e(652215),
    o = e(375708);
let M = ["MESSAGE_SPAM", "DM_SPAM", "MENTION_SPAM", "SUSPICIOUS_USERS", "SETTINGS_SPAM"];
function g(t) {
    let { guildId: n, transitionState: e, onClose: g } = t,
        [C, E] = s.useState([]),
        A = s.useCallback(() => {
            ((0, S.G1)(n, C), (0, S.B)(n), r.O.announce(o.intl.string(o.t["54qByS"])), g());
        }, [n, g, C]),
        _ = s.useCallback((t) => {
            E(t);
        }, []),
        d = s.useCallback(() => {
            window.open(u.A.getArticleURL(c.MVz.GUILD_RAID));
        }, []),
        I = s.useMemo(
            () =>
                M.map((t) => ({
                    label: String(
                        (function (t) {
                            switch (t) {
                                case "DM_SPAM":
                                    return o.intl.string(o.t["9CYNmS"]);
                                case "MENTION_SPAM":
                                    return o.intl.string(o.t["hR/IdO"]);
                                case "MESSAGE_SPAM":
                                    return o.intl.string(o.t.fwloj2);
                                case "SETTINGS_SPAM":
                                    return o.intl.string(o.t.ETFVFw);
                                case "SUSPICIOUS_USERS":
                                    return o.intl.string(o.t["lKXu+n"]);
                            }
                            return null;
                        })(t),
                    ),
                    value: t,
                })),
            [],
        );
    return (0, i.jsx)(l.a, {
        transitionState: e,
        title: o.intl.string(o.t.uYPGsS),
        subtitle: o.intl.format(o.t.Hg8Ee7, { onClick: d }),
        actions: [
            { text: o.intl.string(o.t["ETE/oC"]), onClick: g, variant: "secondary" },
            { text: o.intl.string(o.t.geKm7t), onClick: A },
        ],
        onClose: g,
        children: (0, i.jsx)(a.$, { selectedValues: C, onChange: _, options: I }),
    });
}
