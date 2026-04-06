n.d(t, { A: () => d });
var i = n(627968),
    a = n(64700),
    r = n(308528),
    l = n(442433),
    s = n(707606),
    o = n(71393);
function d(e) {
    return (0, s.A)(
        class extends a.Component {
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
                return r.A.openPrivateChannel({ recipientIds: t.id });
            }
            handleUserContextMenu(e, t, a) {
                (0, l.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("54631")]).then(
                            n.bind(n, 668569),
                        );
                        return (n) => (0, i.jsx)(e, { ...n, user: t });
                    },
                    { onClose: a },
                );
            }
            handleGuildContextMenu(e, t) {
                (0, l.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("43600"),
                        n.e("68587"),
                        n.e("63379"),
                        n.e("56026"),
                        n.e("16301"),
                        n.e("22191"),
                        n.e("25961"),
                        n.e("91872"),
                        n.e("35894"),
                        n.e("50796"),
                        n.e("94253"),
                        n.e("8458"),
                        n.e("11810"),
                        n.e("85200"),
                        n.e("54469"),
                        n.e("52191"),
                    ]).then(n.bind(n, 544676));
                    return (n) => (0, i.jsx)(e, { ...n, guild: t });
                });
            }
            handleChannelContextMenu(e, t) {
                let a = o.A.getGuild(t.getGuildId());
                if (null == a) return null;
                (0, l.L3)(e, async () => {
                    let { default: e } = await n.e("67596").then(n.bind(n, 113255));
                    return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: a });
                });
            }
        },
    );
}
