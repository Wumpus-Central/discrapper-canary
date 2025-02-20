t.d(n, { H: () => r });
let r = (e) => {
    let { guildId: n, guildEventId: t } = e;
    return 'https://discord.com/events/'.concat(n, '/').concat(t);
};
