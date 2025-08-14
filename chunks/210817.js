n.d(t, { Z: () => a });
var r = n(877481),
    i = n(358085),
    o = n(817788);
let a = {
    async getRobloxSubgameURL(e) {
        let t = (0, i.isMac)() ? (0, o.VX)(e) : o.HQ;
        return (0, i.isDesktop)() && (await r.Z.isProtocolRegistered(t)) ? (0, o.VX)(e) : (0, o.uf)(e);
    },
};
