(n.d(t, {
    Ef: () => r,
    HO: () => o,
    Wo: () => a,
    bM: () => c,
    cc: () => d,
    cp: () => b,
    sG: () => s,
    xx: () => u
}),
    n(781311),
    n(73800));
var l = n(531578),
    i = n(388032);
let r = 'other';
function a(e) {
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
function o(e) {
    var t;
    return null == (t = e.selectedOption) ? void 0 : t.value;
}
function b(e) {
    var t;
    if (null == o(e)) return !1;
    if ((null == (t = e.selectedOption) ? void 0 : t.value) === r) {
        let t = s(e);
        return null != t && t.length > 0;
    }
    return !0;
}
function c() {
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
            value: r,
            label: i.intl.string(i.t.oxbtmJ)
        }
    ];
}
function d() {
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
            value: r,
            label: i.intl.string(i.t.RBmOLi)
        }
    ];
}
