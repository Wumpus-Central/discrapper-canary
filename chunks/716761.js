n.d(t, { X: () => r });
var i = n(174459);
function r(e, t, n) {
    i.default.track(e, {
        campaign_id: t.id,
        application_id: t.applicationId,
        reason: n.type,
        blocker: "blocked" === n.type ? n.blocker : null,
    });
}
