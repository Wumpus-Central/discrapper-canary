n.d(t, {
    y: function () {
        return l;
    }
});
var i,
    l,
    r = n(200651);
n(192379);
var a = n(120356),
    o = n.n(a),
    s = n(481060),
    d = n(388032),
    c = n(634455);
((i = l || (l = {})).DENY = 'DENY'), (i.PASSTHROUGH = 'PASSTHROUGH'), (i.ALLOW = 'ALLOW');
let u = Object.keys(l);
function m(e) {
    let { value: t = 'PASSTHROUGH', onChange: n, labelledBy: i, disabled: l = !1 } = e,
        a = (0, s.useRadioGroup)({
            orientation: 'horizontal',
            isDisabled: l,
            labelledBy: i
        });
    return (0, r.jsx)('div', {
        className: o()(c.group, { [c.disabled]: l }),
        ...a,
        children: u.map((e) =>
            (0, r.jsx)(
                h,
                {
                    type: e,
                    isSelected: t === e,
                    onSelect: (e) => {
                        t !== e && !l && n(e);
                    }
                },
                e
            )
        )
    });
}
function h(e) {
    let t,
        n,
        i,
        { type: l, onSelect: a, isSelected: u } = e;
    switch (l) {
        case 'DENY':
            (i = d.intl.string(d.t['6639Oz'])), (t = s.XSmallIcon), (n = c.deny);
            break;
        case 'ALLOW':
            (i = d.intl.string(d.t.RzDfSk)), (t = s.CheckmarkLargeIcon), (n = c.allow);
            break;
        default:
            (i = d.intl.string(d.t.ujC3ZW)), (t = s.SlashIcon), (n = c.passthrough);
    }
    let m = (0, s.useRadioItem)({
        isSelected: u,
        label: i
    });
    return (0, r.jsx)(s.Clickable, {
        className: o()(c.item, n, { [c.selected]: u }),
        onClick: () => a(l),
        ...m,
        children: (0, r.jsx)(t, {
            color: 'currentColor',
            size: 'xs'
        })
    });
}
(m.Types = l), (t.Z = m);
