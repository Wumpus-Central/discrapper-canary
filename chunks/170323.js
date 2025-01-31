l.d(t, { Z: () => m });
var n = l(200651);
l(192379);
var a = l(498607),
    i = l.n(a),
    o = l(913527),
    s = l.n(o),
    r = l(399606),
    c = l(893966),
    C = l(527379),
    d = l(932039),
    u = l(388032);
function m(e) {
    let { guildId: t, onClose: l } = e,
        a = (0, r.e7)([c.Z], () => c.Z.getSearchStateByGuildId(t), [t], i()),
        { selectedAccountAgeOption: o } = a,
        { afterDate: m, beforeDate: h, optionId: x } = o,
        g = x === d.Ol.CUSTOM,
        H = g && null != m ? s()(m).format(d.N2) : null,
        b = g && null != h ? s()(h).format(d.N2) : null;
    return (0, n.jsx)(d.ZP, {
        startDateLabel: H,
        endDateLabel: b,
        afterDate: m,
        beforeDate: h,
        selectedOption: x,
        isCustomDateRange: g,
        menuName: 'account-age',
        accessibilityLabel: u.intl.string(u.t['D++TgY']),
        onClose: l,
        onSelectDateOption: function (e, l) {
            let n = null != l ? s()().subtract(l.input, l.unit).valueOf() : null;
            (0, C.Dr)(t, {
                ...a,
                selectedAccountAgeOption: {
                    optionId: e,
                    afterDate: n,
                    beforeDate: null
                }
            });
        },
        onToggleCustomDateRange: function () {
            (0, C.Dr)(t, {
                ...a,
                selectedAccountAgeOption: {
                    optionId: d.Ol.CUSTOM,
                    afterDate: g ? m : null,
                    beforeDate: g ? h : null
                }
            });
        },
        onSelectStartDate: function (e) {
            (0, C.Dr)(t, {
                ...a,
                selectedAccountAgeOption: {
                    optionId: d.Ol.CUSTOM,
                    afterDate: e.valueOf(),
                    beforeDate: h
                }
            });
        },
        onSelectEndDate: function (e) {
            (0, C.Dr)(t, {
                ...a,
                selectedAccountAgeOption: {
                    optionId: d.Ol.CUSTOM,
                    afterDate: m,
                    beforeDate: e.valueOf()
                }
            });
        }
    });
}
