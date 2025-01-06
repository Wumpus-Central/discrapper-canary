n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(493683),
    a = n(239091),
    s = n(730749),
    o = n(430824);
function c(e) {
    return (0, s.Z)(
        class extends r.Component {
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
                return l.Z.openPrivateChannel(t.id);
            }
            handleUserContextMenu(e, t, r) {
                (0, a.jW)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('95052')]).then(n.bind(n, 881351));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                user: t
                            });
                    },
                    { onClose: r }
                );
            }
            handleGuildContextMenu(e, t) {
                (0, a.jW)(e, async () => {
                    let { default: e } = await Promise.all([n.e('63288'), n.e('33053'), n.e('15669'), n.e('7654'), n.e('98479'), n.e('31113'), n.e('60696'), n.e('58227'), n.e('16114'), n.e('4604'), n.e('33213'), n.e('43954')]).then(n.bind(n, 545135));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            guild: t
                        });
                });
            }
            handleChannelContextMenu(e, t) {
                let r = o.Z.getGuild(t.getGuildId());
                if (null == r) return null;
                (0, a.jW)(e, async () => {
                    let { default: e } = await n.e('40283').then(n.bind(n, 428108));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            channel: t,
                            guild: r
                        });
                });
            }
        }
    );
}
