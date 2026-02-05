n.d(t, { A: () => d });
var i = n(627968),
    r = n(64700),
    a = n(308528),
    l = n(442433),
    s = n(707606),
    o = n(71393);
function d(e) {
    return (0, s.A)(
        class extends r.Component {
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
                return a.A.openPrivateChannel({ recipientIds: t.id });
            }
            handleUserContextMenu(e, t, r) {
                (0, l.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("22252")]).then(
                            n.bind(n, 668569),
                        );
                        return (n) => (0, i.jsx)(e, { ...n, user: t });
                    },
                    { onClose: r },
                );
            }
            handleGuildContextMenu(e, t) {
                (0, l.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("68587"),
                        n.e("43600"),
                        n.e("63379"),
                        n.e("56026"),
                        n.e("16301"),
                        n.e("22191"),
                        n.e("25961"),
                        n.e("21968"),
                        n.e("35894"),
                        n.e("50796"),
                        n.e("8458"),
                        n.e("11810"),
                        n.e("39048"),
                        n.e("54469"),
                        n.e("52191"),
                    ]).then(n.bind(n, 544676));
                    return (n) => (0, i.jsx)(e, { ...n, guild: t });
                });
            }
            handleChannelContextMenu(e, t) {
                let r = o.A.getGuild(t.getGuildId());
                if (null == r) return null;
                (0, l.L3)(e, async () => {
                    let { default: e } = await n.e("67596").then(n.bind(n, 113255));
                    return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: r });
                });
            }
        },
    );
}
