n.d(t, {
    Z: () => x,
    y: () => c
});
var i,
    l = n(200651);
n(192379);
var a = n(120356),
    r = n.n(a),
    s = n(481060),
    o = n(388032),
    d = n(22313),
    c = (((i = {}).DENY = 'DENY'), (i.PASSTHROUGH = 'PASSTHROUGH'), (i.ALLOW = 'ALLOW'), i);
let u = Object.keys(c);
function m(e) {
    let { value: t = 'PASSTHROUGH', onChange: n, labelledBy: i, disabled: a = !1 } = e,
        o = (0, s.arW)({
            orientation: 'horizontal',
            isDisabled: a,
            labelledBy: i
        });
    return (0, l.jsx)('div', {
        className: r()(d.group, { [d.disabled]: a }),
        ...o,
        children: u.map((e) =>
            (0, l.jsx)(
                h,
                {
                    type: e,
                    isSelected: t === e,
                    onSelect: (e) => {
                        t === e || a || n(e);
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
        { type: a, onSelect: c, isSelected: u } = e;
    switch (a) {
        case 'DENY':
            (i = o.intl.string(o.t['6639Oz'])), (t = s.Dio), (n = d.deny);
            break;
        case 'ALLOW':
            (i = o.intl.string(o.t.RzDfSk)), (t = s.dz2), (n = d.allow);
            break;
        default:
            (i = o.intl.string(o.t.ujC3ZW)), (t = s.XZC), (n = d.passthrough);
    }
    let m = (0, s.xUy)({
        isSelected: u,
        label: i
    });
    return (0, l.jsx)(s.P3F, {
        className: r()(d.item, n, { [d.selected]: u }),
        onClick: () => c(a),
        ...m,
        children: (0, l.jsx)(t, {
            color: 'currentColor',
            size: 'xs'
        })
    });
}
m.Types = c;
let x = m;
