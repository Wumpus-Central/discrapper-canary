n.d(t, {
    NS: () => o,
    YZ: () => a,
    p9: () => s,
});
var r = n(130978),
    i = n(818337);

function a(e, t) {
    let { enabled: n } = i.E.useExperiment({
            location: t,
        }),
        a = (0, r.w)(e, t);
    return n && a;
}

function s(e, t) {
    let { enabled: n } = i.E.getCurrentConfig({
            location: t,
        }),
        a = (0, r.$)(e, t);
    return n && a;
}

function o(e) {
    let { enabled: t } = i.l.useExperiment({
        location: e,
    });
    return t;
}
