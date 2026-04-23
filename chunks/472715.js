l.d(e, { De: () => d, GP: () => b, MA: () => u, ZJ: () => i, aK: () => E, mX: () => v, mq: () => s, zS: () => r });
var n = l(670455),
    a = l(985018);
let i = "other";
function r(t) {
    return { name: t.label, value: t.value };
}
function u(t, e) {
    return e.find((e) => e.value === t);
}
function s(t) {
    let e = t.freeformText.trim().slice(0, n.u0);
    return e.length > 0 ? e : null;
}
function d(t) {
    return t.selectedOption?.value;
}
function b(t) {
    var e;
    if (null == d(t)) return !1;
    if (((e = t.selectedOption), e?.value === i)) {
        let e = s(t);
        return null != e && e.length > 0;
    }
    return !0;
}
function E() {
    return [
        { value: "missing_expected_result", label: a.intl.string(a.t["4DEniX"]) },
        { value: "no_results", label: a.intl.string(a.t.jlh29e) },
        { value: "required_multiple_searches", label: a.intl.string(a.t.TpGBIB) },
        { value: "buried_expected_result", label: a.intl.string(a.t.Zh6bNN) },
        { value: "irrelevant_results", label: a.intl.string(a.t.WCiDBF) },
        { value: "inadequate_filters", label: a.intl.string(a.t.mf36b7) },
        { value: "hard_to_scan_results", label: a.intl.string(a.t.ECI0Of) },
        { value: i, label: a.intl.string(a.t.oxbtmN) },
    ];
}
function v() {
    return [
        { value: "looking_for_known_answer", label: a.intl.string(a.t["Str6/o"]) },
        { value: "looking_for_unknown_answer", label: a.intl.string(a.t.DePZNY) },
        { value: "message_from_specific_author", label: a.intl.string(a.t["sGKG/Y"]) },
        { value: "images_and_files_results", label: a.intl.string(a.t.DYLXHx) },
        { value: "link_results", label: a.intl.string(a.t.a1ZtE8) },
        { value: "specific_topic", label: a.intl.string(a.t.EIHXbc) },
        { value: "navigation_results", label: a.intl.string(a.t["6wKpiV"]) },
        { value: i, label: a.intl.string(a.t.RBmOLj) },
    ];
}
