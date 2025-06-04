n.d(t, {
    A6: () => o,
    Ef: () => a,
    HO: () => c,
    Wo: () => u,
    bM: () => f,
    cc: () => O,
    cp: () => d,
    sG: () => b,
    xx: () => s
}),
    n(781311),
    n(73800);
var l = n(531578),
    i = n(388032),
    r = n(925126);
let a = 'other';
function u(e) {
    return {
        name: e.label,
        value: e.value,
        radioBarClassName: r.radioBar
    };
}
function s(e, t) {
    return t.find((t) => t.value === e.value);
}
function o(e) {
    return (null == e ? void 0 : e.value) === a;
}
function b(e) {
    return o(e.selectedOption) ? e.freeformText.trim().slice(0, l.iF) : null;
}
function c(e) {
    var t;
    return null == (t = e.selectedOption) ? void 0 : t.value;
}
function d(e) {
    if (null == c(e)) return !1;
    if (o(e.selectedOption)) {
        let t = b(e);
        return null != t && t.length > 0;
    }
    return !0;
}
function f() {
    return [
        {
            value: 'missing_expected_result',
            label: i.intl.string(i.t['4DEniY'])
        },
        {
            value: 'no_results',
            label: i.intl.string(i.t.jlh29f)
        },
        {
            value: 'required_multiple_searches',
            label: i.intl.string(i.t.TpGBIC)
        },
        {
            value: 'buried_expected_result',
            label: i.intl.string(i.t.Zh6bND)
        },
        {
            value: 'irrelevant_results',
            label: i.intl.string(i.t.WCiDBA)
        },
        {
            value: 'inadequate_filters',
            label: i.intl.string(i.t.mf36b2)
        },
        {
            value: 'hard_to_scan_results',
            label: i.intl.string(i.t.ECI0OT)
        },
        {
            value: a,
            label: i.intl.string(i.t.oxbtmJ)
        }
    ];
}
function O() {
    return [
        {
            value: 'looking_for_known_answer',
            label: i.intl.string(i.t['Str6/v'])
        },
        {
            value: 'looking_for_unknown_answer',
            label: i.intl.string(i.t.DePZNT)
        },
        {
            value: 'message_from_specific_author',
            label: i.intl.string(i.t['sGKG/f'])
        },
        {
            value: 'images_and_files_results',
            label: i.intl.string(i.t.DYLXHx)
        },
        {
            value: 'link_results',
            label: i.intl.string(i.t.a1ZtEx)
        },
        {
            value: 'specific_topic',
            label: i.intl.string(i.t.EIHXbW)
        },
        {
            value: 'navigation_results',
            label: i.intl.string(i.t['6wKpiY'])
        },
        {
            value: a,
            label: i.intl.string(i.t.RBmOLi)
        }
    ];
}
