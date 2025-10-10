n.d(e, {
    Ef: () => i,
    HO: () => b,
    Wo: () => r,
    bM: () => o,
    cc: () => v,
    cp: () => d,
    sG: () => s,
    xx: () => u,
}),
    n(781311);
var l = n(531578),
    a = n(388032);
let i = "other";
function r(t) {
    return {
        name: t.label,
        value: t.value,
    };
}
function u(t, e) {
    return e.find((e) => e.value === t);
}
function s(t) {
    let e = t.freeformText.trim().slice(0, l.iF);
    return e.length > 0 ? e : null;
}
function b(t) {
    var e;
    return null == (e = t.selectedOption) ? void 0 : e.value;
}
function d(t) {
    var e;
    if (null == b(t)) return !1;
    if ((null == (e = t.selectedOption) ? void 0 : e.value) === i) {
        let e = s(t);
        return null != e && e.length > 0;
    }
    return !0;
}
function o() {
    return [
        {
            value: "missing_expected_result",
            label: a.intl.string(a.t["4DEniY"]),
        },
        {
            value: "no_results",
            label: a.intl.string(a.t.jlh29f),
        },
        {
            value: "required_multiple_searches",
            label: a.intl.string(a.t.TpGBIC),
        },
        {
            value: "buried_expected_result",
            label: a.intl.string(a.t.Zh6bND),
        },
        {
            value: "irrelevant_results",
            label: a.intl.string(a.t.WCiDBA),
        },
        {
            value: "inadequate_filters",
            label: a.intl.string(a.t.mf36b2),
        },
        {
            value: "hard_to_scan_results",
            label: a.intl.string(a.t.ECI0OT),
        },
        {
            value: i,
            label: a.intl.string(a.t.oxbtmJ),
        },
    ];
}
function v() {
    return [
        {
            value: "looking_for_known_answer",
            label: a.intl.string(a.t["Str6/v"]),
        },
        {
            value: "looking_for_unknown_answer",
            label: a.intl.string(a.t.DePZNT),
        },
        {
            value: "message_from_specific_author",
            label: a.intl.string(a.t["sGKG/f"]),
        },
        {
            value: "images_and_files_results",
            label: a.intl.string(a.t.DYLXHx),
        },
        {
            value: "link_results",
            label: a.intl.string(a.t.a1ZtEx),
        },
        {
            value: "specific_topic",
            label: a.intl.string(a.t.EIHXbW),
        },
        {
            value: "navigation_results",
            label: a.intl.string(a.t["6wKpiY"]),
        },
        {
            value: i,
            label: a.intl.string(a.t.RBmOLi),
        },
    ];
}
