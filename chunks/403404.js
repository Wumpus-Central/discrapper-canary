n.d(t, { Z: () => i });
var r = n(397698);
function i(e) {
    let { channel: t, openInPopout: n, analyticsLocations: i } = e,
        a = i.length > 0 ? i[i.length - 1] : 'open-activity-shelf';
    (0, r.Z)({
        openInPopout: n,
        context:
            null != t
                ? {
                      type: 'channel',
                      channel: t
                  }
                : { type: 'contextless' },
        analyticsLocation: a
    });
}
