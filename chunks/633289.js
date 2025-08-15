n.d(t, { Z: () => c }), n(388685);
var r = n(299021),
    i = n(570140),
    a = n(865427),
    o = n(314897),
    s = n(626135);
class l extends r.Z {
    initialize(e) {
        this.waitFor(o.default), this.loadStoredState(e, (0, a._S)());
    }
    constructor() {
        super(
            i.Z,
            {
                CONNECTION_OPEN: (e) => this.setExperimentAssignments(e.apexExperiments),
                CONNECTION_OPEN_STATE_UPDATE: (e) => this.setExperimentAssignments(e.apexExperiments),
                APEX_EXPERIMENT_OVERRIDE_CREATE: (e) => this.createOverride(e.experimentName, e.variantId),
                APEX_EXPERIMENT_OVERRIDE_DELETE: (e) => this.deleteOverride(e.experimentName),
                APEX_EXPERIMENT_OVERRIDE_CLEAR: () => this.clearAllOverrides(),
                APEX_EXPERIMENT_CLEAR_SERVER_ASSIGNMENTS: () => this.clearAllServerAssignments(),
                APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS: (e) => this.setExperimentsMetadata(e.experiments),
                LOGOUT: (e) => this.handleLogout(e.isSwitchingAccount),
            },
            i.c.Early,
        ),
            (this.track = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return s.default.track(...t);
            });
    }
}
let c = new l();
