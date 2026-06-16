e.d(n, { default: () => c });
var s = e(627968),
    i = e(64700),
    r = e(189213),
    l = e(167417),
    a = e(462116),
    S = e(375708);
let u = ["MESSAGE_SPAM", "DM_SPAM", "MENTION_SPAM", "SUSPICIOUS_USERS", "SETTINGS_SPAM"];
function c(t) {
    let { guildId: n, transitionState: e, onClose: c } = t,
        [o, M] = i.useState([]),
        C = i.useCallback(() => {
            (0, a.G1)(n, o), (0, a.B)(n), c();
        }, [n, c, o]),
        E = i.useCallback((t) => {
            M(t);
        }, []),
        d = i.useCallback(() => {
            open("https://discord.com/community/securing-your-server");
        }, []),
        g = i.useMemo(
            () =>
                u.map((t) => ({
                    label: String(
                        ((t) => {
                            switch (t) {
                                case "DM_SPAM":
                                    return S.intl.string(S.t["9CYNmS"]);
                                case "MENTION_SPAM":
                                    return S.intl.string(S.t["hR/IdO"]);
                                case "MESSAGE_SPAM":
                                    return S.intl.string(S.t.fwloj2);
                                case "SETTINGS_SPAM":
                                    return S.intl.string(S.t.ETFVFw);
                                case "SUSPICIOUS_USERS":
                                    return S.intl.string(S.t["lKXu+n"]);
                            }
                            return null;
                        })(t),
                    ),
                    value: t,
                })),
            [],
        );
    return (0, s.jsx)(r.Modal, {
        transitionState: e,
        title: S.intl.string(S.t.uYPGsS),
        subtitle: S.intl.format(S.t.Hg8Ee7, { onClick: d }),
        actions: [
            { text: S.intl.string(S.t["ETE/oC"]), onClick: c, variant: "secondary" },
            { text: S.intl.string(S.t.geKm7t), onClick: C },
        ],
        onClose: c,
        children: (0, s.jsx)(l.$, { selectedValues: o, onChange: E, options: g }),
    });
}
