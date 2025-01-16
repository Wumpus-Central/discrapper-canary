t.d(e, {
    H: function () {
        return i;
    }
});
let i = (n) => {
    let { guildId: e, guildEventId: t } = n;
    return 'https://discord.com/events/'.concat(e, '/').concat(t);
};
