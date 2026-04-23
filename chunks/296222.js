n.d(e, { default: () => o });
var l = n(627968),
    r = n(64700),
    i = n(189213),
    u = n(167417),
    s = n(462116),
    a = n(985018);
let d = ["MESSAGE_SPAM", "DM_SPAM", "MENTION_SPAM", "SUSPICIOUS_USERS", "SETTINGS_SPAM"];
function o(t) {
    let { guildId: e, transitionState: n, onClose: o } = t,
        [S, c] = r.useState([]),
        _ = r.useCallback(() => {
            (0, s.G1)(e, S), (0, s.B)(e), o();
        }, [e, o, S]),
        I = r.useCallback((t) => {
            c(t);
        }, []),
        E = r.useCallback(() => {
            open("https://discord.com/community/securing-your-server");
        }, []),
        A = r.useMemo(
            () =>
                d.map((t) => ({
                    label: String(
                        ((t) => {
                            switch (t) {
                                case "DM_SPAM":
                                    return a.intl.string(a.t["9CYNmS"]);
                                case "MENTION_SPAM":
                                    return a.intl.string(a.t["hR/IdO"]);
                                case "MESSAGE_SPAM":
                                    return a.intl.string(a.t.fwloj2);
                                case "SETTINGS_SPAM":
                                    return a.intl.string(a.t.ETFVFw);
                                case "SUSPICIOUS_USERS":
                                    return a.intl.string(a.t["lKXu+n"]);
                            }
                            return null;
                        })(t),
                    ),
                    value: t,
                })),
            [],
        );
    return (0, l.jsx)(i.Modal, {
        transitionState: n,
        title: a.intl.string(a.t.uYPGsS),
        subtitle: a.intl.format(a.t.Hg8Ee7, { onClick: E }),
        actions: [
            { text: a.intl.string(a.t["ETE/oC"]), onClick: o, variant: "secondary" },
            { text: a.intl.string(a.t.geKm7t), onClick: _ },
        ],
        onClose: o,
        children: (0, l.jsx)(u.$, { selectedValues: S, onChange: I, options: A }),
    });
}
