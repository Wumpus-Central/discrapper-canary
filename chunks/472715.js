l.d(t, {
    De: () => d,
    GP: () => b,
    MA: () => u,
    ZJ: () => i,
    aK: () => O,
    mX: () => o,
    mq: () => s,
    zS: () => r,
}),
    l(733351);
var n = l(670455),
    a = l(985018);
let i = "other";

function r(e) {
    return {
        name: e.label,
        value: e.value,
    };
}

function u(e, t) {
    return t.find((t) => t.value === e);
}

function s(e) {
    let t = e.freeformText.trim().slice(0, n.u0);
    return t.length > 0 ? t : null;
}

function d(e) {
    var t;
    return null == (t = e.selectedOption) ? void 0 : t.value;
}

function b(e) {
    var t;
    if (null == d(e)) return !1;
    if ((null == (t = e.selectedOption) ? void 0 : t.value) === i) {
        let t = s(e);
        return null != t && t.length > 0;
    }
    return !0;
}

function O() {
    return [
        {
            value: "missing_expected_result",
            label: a.intl.string(a.t["4DEniX"]),
        },
        {
            value: "no_results",
            label: a.intl.string(a.t.jlh29e),
        },
        {
            value: "required_multiple_searches",
            label: a.intl.string(a.t.TpGBIB),
        },
        {
            value: "buried_expected_result",
            label: a.intl.string(a.t.Zh6bNN),
        },
        {
            value: "irrelevant_results",
            label: a.intl.string(a.t.WCiDBF),
        },
        {
            value: "inadequate_filters",
            label: a.intl.string(a.t.mf36b7),
        },
        {
            value: "hard_to_scan_results",
            label: a.intl.string(a.t.ECI0Of),
        },
        {
            value: i,
            label: a.intl.string(a.t.oxbtmN),
        },
    ];
}

function o() {
    return [
        {
            value: "looking_for_known_answer",
            label: a.intl.string(a.t["Str6/o"]),
        },
        {
            value: "looking_for_unknown_answer",
            label: a.intl.string(a.t.DePZNY),
        },
        {
            value: "message_from_specific_author",
            label: a.intl.string(a.t["sGKG/Y"]),
        },
        {
            value: "images_and_files_results",
            label: a.intl.string(a.t.DYLXHx),
        },
        {
            value: "link_results",
            label: a.intl.string(a.t.a1ZtE8),
        },
        {
            value: "specific_topic",
            label: a.intl.string(a.t.EIHXbc),
        },
        {
            value: "navigation_results",
            label: a.intl.string(a.t["6wKpiV"]),
        },
        {
            value: i,
            label: a.intl.string(a.t.RBmOLj),
        },
    ];
}
