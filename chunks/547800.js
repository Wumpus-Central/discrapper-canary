r.r(n),
    r.d(n, {
        CalendarPicker: function () {
            return p;
        }
    });
var i = r(200651),
    a = r(192379),
    o = r(913527),
    s = r.n(o),
    l = r(674091),
    u = r.n(l),
    c = r(442837),
    d = r(706454);
r(623931);
var f = r(55825);
function p(e) {
    let { value: n = s()().local(), minDate: r, maxDate: o, onSelect: l, calendarClassName: p, autoFocus: h, onClickOutside: _ } = e,
        m = a.useCallback(
            (e, n) => {
                null == l || l(s()(e), n);
            },
            [l]
        ),
        g = a.useMemo(() => n.toDate(), [n]),
        E = a.useMemo(() => (null == o ? void 0 : o.toDate()), [o]),
        v = a.useMemo(() => (null == r ? void 0 : r.toDate()), [r]),
        y = (0, c.e7)([d.default], () => d.default.locale),
        b = a.useRef(null),
        I = a.useCallback((e) => {
            let n = e.currentTarget;
            if (!!n.classList.contains('react-datepicker__day'))
                setTimeout(() => {
                    var e, r;
                    if (null === (e = b.current) || void 0 === e ? void 0 : e.contains(n)) return;
                    let i = null === (r = b.current) || void 0 === r ? void 0 : r.querySelector('.react-datepicker__day[tabindex="0"]');
                    if (null != i) i.focus();
                }, 100);
        }, []);
    return (0, i.jsx)('div', {
        ref: b,
        className: f.calendarPicker,
        children: (0, i.jsx)(u(), {
            calendarClassName: p,
            selected: g,
            onChange: m,
            autoFocus: h,
            fixedHeight: !0,
            inline: !0,
            locale: y,
            maxDate: E,
            minDate: v,
            onKeyDown: I,
            onClickOutside: _
        })
    });
}
n.default = p;
