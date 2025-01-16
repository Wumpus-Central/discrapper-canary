r.d(n, {
    W: function () {
        return p;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(547800),
    l = r(1561),
    u = r(507274),
    c = r(235874),
    d = r(481060),
    f = r(538207),
    _ = r(716722);
let h = 'MMM D, YYYY';
function p(e) {
    let { value: n, onSelect: r, dateFormat: a = h, minDate: p, maxDate: m, disabled: g = !1 } = e;
    function E(e) {
        let { closePopout: a } = e;
        return (0, i.jsx)(u.V, {
            children: (0, i.jsx)(o.CalendarPicker, {
                minDate: p,
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
            let { onClick: r, ...o } = e;
            return (0, i.jsx)(l.P, {
                ...o,
                className: s()(_.inputDefault, f.container, {
                    [_.disabled]: g,
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
