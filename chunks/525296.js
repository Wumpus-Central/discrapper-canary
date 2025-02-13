n.d(t, { Z: () => c });
var i = n(200651),
    l = n(192379),
    r = n(493683),
    a = n(239091),
    s = n(730749),
    o = n(430824);
function c(e) {
    return (0, s.Z)(
        class extends l.Component {
            render() {
                return (0, i.jsx)(e, {
                    ...this.props,
                    onMessageUser: this.handleMessageUser,
                    onUserContextMenu: this.handleUserContextMenu,
                    onGuildContextMenu: this.handleGuildContextMenu,
                    onChannelContextMenu: this.handleChannelContextMenu
                });
            }
            handleMessageUser(e, t) {
                return r.Z.openPrivateChannel(t.id);
            }
            handleUserContextMenu(e, t, l) {
                (0, a.jW)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('45078')]).then(n.bind(n, 881351));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                user: t
                            });
                    },
                    { onClose: l }
                );
            }
            handleGuildContextMenu(e, t) {
                (0, a.jW)(e, async () => {
                    let { default: e } = await Promise.all([n.e('33053'), n.e('17298'), n.e('7654'), n.e('44156'), n.e('90255'), n.e('6850'), n.e('58227'), n.e('16114'), n.e('54408'), n.e('23958'), n.e('33213'), n.e('16524')]).then(n.bind(n, 545135));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            guild: t
                        });
                });
            }
            handleChannelContextMenu(e, t) {
                let l = o.Z.getGuild(t.getGuildId());
                if (null == l) return null;
                (0, a.jW)(e, async () => {
                    let { default: e } = await n.e('40283').then(n.bind(n, 428108));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            channel: t,
                            guild: l
                        });
                });
            }
        }
    );
}
