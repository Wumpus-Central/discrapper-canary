"use strict";
n.d(t, {
    A4: () => u,
    K0: () => h,
    VY: () => _,
    aH: () => o,
    ay: () => f,
    jZ: () => d,
    mg: () => p,
    tF: () => l,
    w$: () => c,
});
var r = n(554146),
    i = n(927813),
    a = n(294589),
    s = n(985018);
let o = 6 * i.A.Millis.DAYS_30;
var l = (function (e) {
    return (
        (e.CONFUSION = "confusion"),
        (e.DOES_NOT_ACHIEVE_WANTS = "does_not_achieve_wants"),
        (e.HARD_TO_ACCESS = "hard_to_access"),
        (e.SOMETHING_ELSE = "something_else"),
        e
    );
})({});
function u() {
    return [
        { value: "confusion", label: s.intl.string(s.t["64Oph/"]) },
        { value: "does_not_achieve_wants", label: s.intl.string(s.t["wH5R/r"]) },
        { value: "hard_to_access", label: s.intl.string(s.t["4uZBRp"]) },
        { value: "something_else", label: s.intl.string(s.t.YicFbD) },
    ];
}
var c = (function (e) {
    return (
        (e.CONFUSION = "confusion"),
        (e.DOES_NOT_ACHIEVE_WANTS = "does_not_achieve_wants"),
        (e.HARD_TO_ACCESS = "hard_to_access"),
        (e.SOMETHING_ELSE = "something_else"),
        e
    );
})({});
function d() {
    return [
        { value: "confusion", label: s.intl.string(s.t.IumZmj) },
        { value: "does_not_achieve_wants", label: s.intl.string(s.t.mXkYyW) },
        { value: "hard_to_access", label: s.intl.string(s.t.eg1hVP) },
        { value: "something_else", label: s.intl.string(s.t.WAYoTx) },
    ];
}
var _ = (function (e) {
    return (
        (e.PID_CONCERN = "pid_concern"),
        (e.TOO_MUCH_TIME = "too_much_time"),
        (e.CONFUSION = "confusion"),
        (e.CHANGED_MIND = "changed_mind"),
        (e.UNNECESSARY = "unnecessary"),
        (e.NEED_DOCUMENTS = "need_documents"),
        (e.DIDNT_WORK = "didnt_work"),
        (e.SOMETHING_ELSE = "something_else"),
        e
    );
})({});
function f(e) {
    let t = [
        { value: "pid_concern", label: s.intl.string(a.default.ZsnNgz) },
        { value: "too_much_time", label: s.intl.string(a.default.kkKhVJ) },
        { value: "confusion", label: s.intl.string(a.default.bC0QVX) },
        { value: "something_else", label: s.intl.string(s.t.WAYoTx) },
    ];
    return e === r.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE
        ? [
              ...t,
              { value: "need_documents", label: s.intl.string(a.default["Dl4A+U"]) },
              { value: "didnt_work", label: s.intl.string(a.default["8JFGXc"]) },
          ]
        : [
              ...t,
              { value: "changed_mind", label: s.intl.string(a.default.eSP1F9) },
              { value: "unnecessary", label: s.intl.string(a.default.maxf2S) },
          ];
}
var p = (function (e) {
    return (e.GET_STARTED = "age_verification_get_started"), (e.KID_STARTED = "age_verification_kid_started"), e;
})({});
let h = [r.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE, r.M.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED];
