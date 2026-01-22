r.d(t, { f: () => i });
var n = r(311907),
    o = r(430452),
    u = r(28075);
function i() {
    return (0, n.cf)([o.A, u.A], () => ({
        activeVoice: o.A.getActiveVoiceFilter(),
        mostRecentlyRequestedVoiceId: o.A.getMostRecentlyRequestedVoiceFilter(),
        lastInitAttemptMayHaveCrashed: u.A.getLastInitAttemptMayHaveCrashed(),
    }));
}
