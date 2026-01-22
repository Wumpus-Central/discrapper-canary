n.d(t, {
    A: () => c,
}),
    n(896048);
var r = n(789459),
    i = n(73153),
    a = n(380610),
    s = n(961350),
    o = n(954571);
class l extends r.A {
    initialize(e) {
        this.waitFor(s.default), this.loadStoredState(e, (0, a.DI)());
    }
    constructor() {
        super(
            i.h,
            {
                CONNECTION_OPEN: (e) => this.setExperimentAssignments(e.apexExperiments),
                CONNECTION_OPEN_STATE_UPDATE: (e) => this.setExperimentAssignments(e.apexExperiments),
                APEX_EXPERIMENT_OVERRIDE_CREATE: (e) => this.createOverride(e.experimentName, e.variantId),
                APEX_EXPERIMENT_OVERRIDE_DELETE: (e) => this.deleteOverride(e.experimentName),
                APEX_EXPERIMENT_OVERRIDE_CLEAR: () => this.clearAllOverrides(),
                APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE: (e) =>
                    this.createSessionOverride(e.experimentName, e.variantId),
                APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE: (e) => this.deleteSessionOverride(e.experimentName),
                APEX_EXPERIMENT_CLEAR_FOR_TESTS: () => this.clearForTests(),
                APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS: (e) => this.setExperimentsMetadata(e.experiments),
                APEX_EXPERIMENTS_FETCH_START: (e) => this.handleFetchStart(e.unitId),
                APEX_EXPERIMENTS_FETCH_SUCCESS: (e) => this.handleFetchSuccess(e.unitId, e.experiments),
                APEX_EXPERIMENTS_FETCH_FAILURE: (e) => this.handleFetchFailure(e.unitId),
                LOGOUT: (e) => this.handleLogout(e.isSwitchingAccount),
            },
            i.A.Early,
        ),
            (this.track = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return o.default.track(...t);
            }),
            (this.surface = "discord_app");
    }
}
let c = new l();
