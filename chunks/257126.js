(n.d(t, {
    Ef: () => i,
    HO: () => b,
    Wo: () => r,
    bM: () => o,
    cc: () => c,
    cp: () => d,
    sG: () => s,
    xx: () => u
}),
    n(781311),
    n(73800));
var l = n(531578),
    a = n(388032);
let i = 'other';
function r(e) {
    return {
        name: e.label,
        value: e.value
    };
}
function u(e, t) {
    return t.find((t) => t.value === e.value);
}
function s(e) {
    let t = e.freeformText.trim().slice(0, l.iF);
    return t.length > 0 ? t : null;
}
function b(e) {
    var t;
    return null == (t = e.selectedOption) ? void 0 : t.value;
}
function d(e) {
    var t;
    if (null == b(e)) return !1;
    if ((null == (t = e.selectedOption) ? void 0 : t.value) === i) {
        let t = s(e);
        return null != t && t.length > 0;
    }
    return !0;
}
function o() {
    return [
        {
            value: 'missing_expected_result',
            label: a.intl.string(a.t['4DEniY'])
        },
        {
            value: 'no_results',
            label: a.intl.string(a.t.jlh29f)
        },
        {
            value: 'required_multiple_searches',
            label: a.intl.string(a.t.TpGBIC)
        },
        {
            value: 'buried_expected_result',
            label: a.intl.string(a.t.Zh6bND)
        },
        {
            value: 'irrelevant_results',
            label: a.intl.string(a.t.WCiDBA)
        },
        {
            value: 'inadequate_filters',
            label: a.intl.string(a.t.mf36b2)
        },
        {
            value: 'hard_to_scan_results',
            label: a.intl.string(a.t.ECI0OT)
        },
        {
            value: i,
            label: a.intl.string(a.t.oxbtmJ)
        }
    ];
}
function c() {
    return [
        {
            value: 'looking_for_known_answer',
            label: a.intl.string(a.t['Str6/v'])
        },
        {
            value: 'looking_for_unknown_answer',
            label: a.intl.string(a.t.DePZNT)
        },
        {
            value: 'message_from_specific_author',
            label: a.intl.string(a.t['sGKG/f'])
        },
        {
            value: 'images_and_files_results',
            label: a.intl.string(a.t.DYLXHx)
        },
        {
            value: 'link_results',
            label: a.intl.string(a.t.a1ZtEx)
        },
        {
            value: 'specific_topic',
            label: a.intl.string(a.t.EIHXbW)
        },
        {
            value: 'navigation_results',
            label: a.intl.string(a.t['6wKpiY'])
        },
        {
            value: i,
            label: a.intl.string(a.t.RBmOLi)
        }
    ];
}
