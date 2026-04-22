n.d(t, { A: () => c });
var i = n(627968),
    s = n(64700),
    l = n(308528),
    a = n(442433),
    r = n(707606),
    o = n(71393);
function c(e) {
    return (0, r.A)(
        class extends s.Component {
            render() {
                return (0, i.jsx)(e, {
                    ...this.props,
                    onMessageUser: this.handleMessageUser,
                    onUserContextMenu: this.handleUserContextMenu,
                    onGuildContextMenu: this.handleGuildContextMenu,
                    onChannelContextMenu: this.handleChannelContextMenu,
                });
            }
            handleMessageUser(e, t) {
                return l.A.openPrivateChannel({ recipientIds: t.id });
            }
            handleUserContextMenu(e, t, s) {
                (0, a.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("22880")]).then(
                            n.bind(n, 668569),
                        );
                        return (n) => (0, i.jsx)(e, { ...n, user: t });
                    },
                    { onClose: s },
                );
            }
            handleGuildContextMenu(e, t) {
                (0, a.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("49681"),
                        n.e("96382"),
                        n.e("20044"),
                        n.e("28136"),
                        n.e("82486"),
                        n.e("43600"),
                        n.e("77602"),
                        n.e("68587"),
                        n.e("86546"),
                        n.e("15373"),
                        n.e("63379"),
                        n.e("56026"),
                        n.e("16301"),
                        n.e("22191"),
                        n.e("13334"),
                        n.e("25961"),
                        n.e("2736"),
                        n.e("13848"),
                        n.e("47810"),
                        n.e("54828"),
                        n.e("94683"),
                        n.e("50796"),
                        n.e("8458"),
                        n.e("94253"),
                        n.e("11810"),
                        n.e("72756"),
                        n.e("13337"),
                        n.e("54469"),
                        n.e("74607"),
                    ]).then(n.bind(n, 544676));
                    return (n) => (0, i.jsx)(e, { ...n, guild: t });
                });
            }
            handleChannelContextMenu(e, t) {
                let s = o.A.getGuild(t.getGuildId());
                if (null == s) return null;
                (0, a.L3)(e, async () => {
                    let { default: e } = await n.e("67596").then(n.bind(n, 113255));
                    return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: s });
                });
            }
        },
    );
}
