n.d(t, {
    H: () => i,
    a: () => l
});
var r = n(460083);
function i(e) {
    let { enabled: t } = r.d.getCurrentConfig({
        guildId: e,
        location: '988d4e_3'
    });
    return t;
}
function l(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { enabled: n } = r.d.useExperiment(
            {
                guildId: e,
                location: '988d4e_4'
            },
            { autoTrackExposure: t }
        );
    return n;
}
