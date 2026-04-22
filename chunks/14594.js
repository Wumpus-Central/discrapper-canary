"use strict";
n.d(t, {
    A4: () => f,
    K0: () => A,
    VY: () => p,
    aH: () => c,
    ay: () => m,
    jZ: () => h,
    mg: () => g,
    tF: () => _,
    w$: () => E,
});
var r,
    i,
    s,
    a,
    o = n(554146),
    l = n(927813),
    u = n(425548),
    d = n(985018);
let c = 6 * l.A.Millis.DAYS_30;
var _ =
    (((r = {}).CONFUSION = "confusion"),
    (r.DOES_NOT_ACHIEVE_WANTS = "does_not_achieve_wants"),
    (r.HARD_TO_ACCESS = "hard_to_access"),
    (r.SOMETHING_ELSE = "something_else"),
    r);
function f() {
    return [
        { value: "confusion", label: d.intl.string(d.t["64Oph/"]) },
        { value: "does_not_achieve_wants", label: d.intl.string(d.t["wH5R/r"]) },
        { value: "hard_to_access", label: d.intl.string(d.t["4uZBRp"]) },
        { value: "something_else", label: d.intl.string(d.t.YicFbD) },
    ];
}
var E =
    (((i = {}).CONFUSION = "confusion"),
    (i.DOES_NOT_ACHIEVE_WANTS = "does_not_achieve_wants"),
    (i.HARD_TO_ACCESS = "hard_to_access"),
    (i.SOMETHING_ELSE = "something_else"),
    i);
function h() {
    return [
        { value: "confusion", label: d.intl.string(d.t.IumZmj) },
        { value: "does_not_achieve_wants", label: d.intl.string(d.t.mXkYyW) },
        { value: "hard_to_access", label: d.intl.string(d.t.eg1hVP) },
        { value: "something_else", label: d.intl.string(d.t.WAYoTx) },
    ];
}
var p =
    (((s = {}).PID_CONCERN = "pid_concern"),
    (s.TOO_MUCH_TIME = "too_much_time"),
    (s.CONFUSION = "confusion"),
    (s.CHANGED_MIND = "changed_mind"),
    (s.UNNECESSARY = "unnecessary"),
    (s.NEED_DOCUMENTS = "need_documents"),
    (s.DIDNT_WORK = "didnt_work"),
    (s.SOMETHING_ELSE = "something_else"),
    s);
function m(e) {
    let t = [
        { value: "pid_concern", label: d.intl.string(u.default.ZsnNgz) },
        { value: "too_much_time", label: d.intl.string(u.default.kkKhVJ) },
        { value: "confusion", label: d.intl.string(u.default.bC0QVX) },
        { value: "something_else", label: d.intl.string(d.t.WAYoTx) },
    ];
    return e === o.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE
        ? [
              ...t,
              { value: "need_documents", label: d.intl.string(u.default["Dl4A+U"]) },
              { value: "didnt_work", label: d.intl.string(u.default["8JFGXc"]) },
          ]
        : [
              ...t,
              { value: "changed_mind", label: d.intl.string(u.default.eSP1F9) },
              { value: "unnecessary", label: d.intl.string(u.default.maxf2S) },
          ];
}
var g = (((a = {}).GET_STARTED = "age_verification_get_started"), (a.KID_STARTED = "age_verification_kid_started"), a);
let A = [o.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE, o.M.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED];
