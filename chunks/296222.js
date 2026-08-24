e.d(n, { default: () => M });
var i = e(477900),
    s = e(582128),
    l = e(189213),
    r = e(167417),
    a = e(462116),
    S = e(975571),
    u = e(652215),
    c = e(375708);
let o = ["MESSAGE_SPAM", "DM_SPAM", "MENTION_SPAM", "SUSPICIOUS_USERS", "SETTINGS_SPAM"];
function M(t) {
    let { guildId: n, transitionState: e, onClose: M } = t,
        [C, E] = s.useState([]),
        g = s.useCallback(() => {
            (0, a.G1)(n, C), (0, a.B)(n), M();
        }, [n, M, C]),
        A = s.useCallback((t) => {
            E(t);
        }, []),
        _ = s.useCallback(() => {
            window.open(S.A.getArticleURL(u.MVz.GUILD_RAID));
        }, []),
        d = s.useMemo(
            () =>
                o.map((t) => ({
                    label: String(
                        (function (t) {
                            switch (t) {
                                case "DM_SPAM":
                                    return c.intl.string(c.t["9CYNmS"]);
                                case "MENTION_SPAM":
                                    return c.intl.string(c.t["hR/IdO"]);
                                case "MESSAGE_SPAM":
                                    return c.intl.string(c.t.fwloj2);
                                case "SETTINGS_SPAM":
                                    return c.intl.string(c.t.ETFVFw);
                                case "SUSPICIOUS_USERS":
                                    return c.intl.string(c.t["lKXu+n"]);
                            }
                            return null;
                        })(t),
                    ),
                    value: t,
                })),
            [],
        );
    return (0, i.jsx)(l.Modal, {
        transitionState: e,
        title: c.intl.string(c.t.uYPGsS),
        subtitle: c.intl.format(c.t.Hg8Ee7, { onClick: _ }),
        actions: [
            { text: c.intl.string(c.t["ETE/oC"]), onClick: M, variant: "secondary" },
            { text: c.intl.string(c.t.geKm7t), onClick: g },
        ],
        onClose: M,
        children: (0, i.jsx)(r.$, { selectedValues: C, onChange: A, options: d }),
    });
}
