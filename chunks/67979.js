n.d(t, { W: () => h });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(547800),
    o = n(1561),
    l = n(507274),
    u = n(235874),
    c = n(481060),
    d = n(540059),
    f = n(736213),
    _ = n(223952);
let p = 'MMM D, YYYY';
function h(e) {
    let { value: t, onSelect: n, dateFormat: r = p, minDate: h, maxDate: m, disabled: g = !1 } = e,
        E = (0, d.Q3)('DateInput');
    function v(e) {
        let { closePopout: r } = e;
        return (0, i.jsx)(l.V, {
            children: (0, i.jsx)(s.CalendarPicker, {
                minDate: h,
                maxDate: m,
                value: t,
                onSelect: (e) => {
                    n(e), r();
                },
                calendarClassName: f.calendarContainer,
                onClickOutside: r,
                autoFocus: !0
            })
        });
    }
    return (0, i.jsx)(u.y, {
        renderPopout: v,
        position: 'bottom',
        children: (e) => {
            let { onClick: n, ...s } = e;
            return (0, i.jsx)(o.P, {
                ...s,
                className: a()(_.inputDefault, f.container, {
                    [_.disabled]: g,
                    [f.disabled]: g
                }),
                onClick: g ? void 0 : n,
                'aria-disabled': g,
                children: (0, i.jsxs)('div', {
                    className: f.content,
                    children: [
                        (0, i.jsx)('div', {
                            className: f.text,
                            children: null == t ? void 0 : t.format(r)
                        }),
                        (0, i.jsx)(c.Que, {
                            size: E ? 'sm' : 'md',
                            color: 'currentColor',
                            className: f.icon
                        })
                    ]
                })
            });
        }
    });
}
