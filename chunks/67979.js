r.d(n, {
    W: function () {
        return _;
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
    f = r(538207),
    p = r(716722);
let h = 'MMM D, YYYY';
function _(e) {
    let { value: n, onSelect: r, dateFormat: a = h, minDate: _, maxDate: m, disabled: g = !1 } = e;
    function E(e) {
        let { closePopout: a } = e;
        return (0, i.jsx)(u.V, {
            children: (0, i.jsx)(s.CalendarPicker, {
                minDate: _,
                maxDate: m,
                value: n,
                onSelect: (e) => {
                    r(e), a();
                },
                calendarClassName: f.calendarContainer,
                onClickOutside: a,
                autoFocus: !0
            })
        });
    }
    return (0, i.jsx)(c.y, {
        renderPopout: E,
        position: 'bottom',
        children: (e) => {
            let { onClick: r, ...s } = e;
            return (0, i.jsx)(l.P, {
                ...s,
                className: o()(p.inputDefault, f.container, {
                    [p.disabled]: g,
                    [f.disabled]: g
                }),
                onClick: g ? void 0 : r,
                'aria-disabled': g,
                children: (0, i.jsxs)('div', {
                    className: f.content,
                    children: [
                        (0, i.jsx)('div', {
                            className: f.text,
                            children: null == n ? void 0 : n.format(a)
                        }),
                        (0, i.jsx)(d.CalendarIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: f.icon
                        })
                    ]
                })
            });
        }
    });
}
