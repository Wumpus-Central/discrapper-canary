n.d(t, { Z: () => o });
var r = n(877481),
    i = n(358085),
    a = n(817788);
let o = {
    async getRobloxSubgameURL(e) {
        let t = (0, i.isMac)() ? (0, a.VX)(e) : a.HQ;
        return (0, i.isDesktop)() && (await r.Z.isProtocolRegistered(t)) ? (0, a.VX)(e) : (0, a.uf)(e);
    },
};
