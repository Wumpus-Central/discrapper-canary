n.r(t),
    n.d(t, {
        CalendarPicker: () => f,
        default: () => p
    });
var r = n(200651),
    i = n(192379),
    o = n(913527),
    a = n.n(o),
    s = n(674091),
    l = n.n(s),
    c = n(442837),
    u = n(706454);
n(583690);
var d = n(261270);
function f(e) {
    let { value: t = a()().local(), minDate: n, maxDate: o, onSelect: s, calendarClassName: f, autoFocus: p, onClickOutside: _ } = e,
        h = i.useCallback(
            (e, t) => {
                null == s || s(a()(e), t);
            },
            [s]
        ),
        m = i.useMemo(() => t.toDate(), [t]),
        g = i.useMemo(() => (null == o ? void 0 : o.toDate()), [o]),
        E = i.useMemo(() => (null == n ? void 0 : n.toDate()), [n]),
        v = (0, c.e7)([u.default], () => u.default.locale),
        b = i.useRef(null),
        y = i.useCallback((e) => {
            let t = e.currentTarget;
            t.classList.contains('react-datepicker__day') &&
                setTimeout(() => {
                    var e, n;
                    if (null === (e = b.current) || void 0 === e ? void 0 : e.contains(t)) return;
                    let r = null === (n = b.current) || void 0 === n ? void 0 : n.querySelector('.react-datepicker__day[tabindex="0"]');
                    null != r && r.focus();
                }, 100);
        }, []);
    return (0, r.jsx)('div', {
        ref: b,
        className: d.calendarPicker,
        children: (0, r.jsx)(l(), {
            calendarClassName: f,
            selected: m,
            onChange: h,
            autoFocus: p,
            fixedHeight: !0,
            inline: !0,
            locale: v,
            maxDate: g,
            minDate: E,
            onKeyDown: y,
            onClickOutside: _
        })
    });
}
let p = f;
