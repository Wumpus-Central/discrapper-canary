t.d(n, {
    H: function () {
        return i;
    }
});
let i = (e) => {
    let { guildId: n, guildEventId: t } = e;
    return 'https://discord.com/events/'.concat(n, '/').concat(t);
};
