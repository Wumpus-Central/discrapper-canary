var i = n(754712);
function r() {
    return i.Ay.getMediaEngine().getSystemSteadyClockNowMs() ?? Date.now();
}
n.d(
    t,
    {},
    {
        l: r,
        p: function (e) {
            return Math.round(Date.now() + (e ?? 0) - r());
        },
    },
);
