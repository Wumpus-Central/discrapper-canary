r.d(n, {
    W: function () {
        return m;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(547800),
    l = r(1561),
    u = r(507274),
    c = r(235874),
    d = r(481060),
    f = r(540059),
    p = r(538207),
    h = r(716722);
let _ = 'MMM D, YYYY';
function m(e) {
    let { value: n, onSelect: r, dateFormat: a = _, minDate: m, maxDate: g, disabled: E = !1 } = e,
        v = (0, f.Q3)('DateInput');
    function y(e) {
        let { closePopout: a } = e;
        return (0, i.jsx)(u.V, {
            children: (0, i.jsx)(s.CalendarPicker, {
                minDate: m,
                maxDate: g,
                value: n,
                onSelect: (e) => {
                    r(e), a();
                },
                calendarClassName: p.calendarContainer,
                onClickOutside: a,
                autoFocus: !0
            })
        });
    }
    return (0, i.jsx)(c.y, {
        renderPopout: y,
        position: 'bottom',
        children: (e) => {
            let { onClick: r, ...s } = e;
            return (0, i.jsx)(l.P, {
                ...s,
                className: o()(h.inputDefault, p.container, {
                    [h.disabled]: E,
                    [p.disabled]: E
                }),
                onClick: E ? void 0 : r,
                'aria-disabled': E,
                children: (0, i.jsxs)('div', {
                    className: p.content,
                    children: [
                        (0, i.jsx)('div', {
                            className: p.text,
                            children: null == n ? void 0 : n.format(a)
                        }),
                        (0, i.jsx)(d.CalendarIcon, {
                            size: v ? 'sm' : 'md',
                            color: 'currentColor',
                            className: p.icon
                        })
                    ]
                })
            });
        }
    });
}
