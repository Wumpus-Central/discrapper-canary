l.d(t, { Z: () => m });
var n = l(200651);
l(192379);
var a = l(498607),
    i = l.n(a),
    o = l(913527),
    s = l.n(o),
    r = l(399606),
    c = l(893966),
    d = l(527379),
    C = l(932039),
    u = l(388032);
function m(e) {
    let { guildId: t, onClose: l } = e,
        a = (0, r.e7)([c.Z], () => c.Z.getSearchStateByGuildId(t), [t], i()),
        { selectedAccountAgeOption: o } = a,
        { afterDate: m, beforeDate: h, optionId: x } = o,
        g = x === C.Ol.CUSTOM,
        p = g && null != m ? s()(m).format(C.N2) : null,
        _ = g && null != h ? s()(h).format(C.N2) : null;
    return (0, n.jsx)(C.ZP, {
        startDateLabel: p,
        endDateLabel: _,
        afterDate: m,
        beforeDate: h,
        selectedOption: x,
        isCustomDateRange: g,
        menuName: 'account-age',
        accessibilityLabel: u.intl.string(u.t['D++TgY']),
        onClose: l,
        onSelectDateOption: function (e, l) {
            let n = null != l ? s()().subtract(l.input, l.unit).valueOf() : null;
            (0, d.Dr)(t, {
                ...a,
                selectedAccountAgeOption: {
                    optionId: e,
                    afterDate: n,
                    beforeDate: null
                }
            });
        },
        onToggleCustomDateRange: function () {
            (0, d.Dr)(t, {
                ...a,
                selectedAccountAgeOption: {
                    optionId: C.Ol.CUSTOM,
                    afterDate: g ? m : null,
                    beforeDate: g ? h : null
                }
            });
        },
        onSelectStartDate: function (e) {
            (0, d.Dr)(t, {
                ...a,
                selectedAccountAgeOption: {
                    optionId: C.Ol.CUSTOM,
                    afterDate: e.valueOf(),
                    beforeDate: h
                }
            });
        },
        onSelectEndDate: function (e) {
            (0, d.Dr)(t, {
                ...a,
                selectedAccountAgeOption: {
                    optionId: C.Ol.CUSTOM,
                    afterDate: m,
                    beforeDate: e.valueOf()
                }
            });
        }
    });
}
