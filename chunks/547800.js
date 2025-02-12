n.r(t),
    n.d(t, {
        CalendarPicker: () => f,
        default: () => _
    });
var i = n(200651),
    r = n(192379),
    a = n(913527),
    s = n.n(a),
    o = n(674091),
    l = n.n(o),
    u = n(442837),
    c = n(706454);
n(756249);
var d = n(93904);
function f(e) {
    let { value: t = s()().local(), minDate: n, maxDate: a, onSelect: o, calendarClassName: f, autoFocus: _, onClickOutside: p } = e,
        h = r.useCallback(
            (e, t) => {
                null == o || o(s()(e), t);
            },
            [o]
        ),
        m = r.useMemo(() => t.toDate(), [t]),
        g = r.useMemo(() => (null == a ? void 0 : a.toDate()), [a]),
        E = r.useMemo(() => (null == n ? void 0 : n.toDate()), [n]),
        v = (0, u.e7)([c.default], () => c.default.locale),
        y = r.useRef(null),
        I = r.useCallback((e) => {
            let t = e.currentTarget;
            t.classList.contains('react-datepicker__day') &&
                setTimeout(() => {
                    var e, n;
                    if (null === (e = y.current) || void 0 === e ? void 0 : e.contains(t)) return;
                    let i = null === (n = y.current) || void 0 === n ? void 0 : n.querySelector('.react-datepicker__day[tabindex="0"]');
                    null != i && i.focus();
                }, 100);
        }, []);
    return (0, i.jsx)('div', {
        ref: y,
        className: d.calendarPicker,
        children: (0, i.jsx)(l(), {
            calendarClassName: f,
            selected: m,
            onChange: h,
            autoFocus: _,
            fixedHeight: !0,
            inline: !0,
            locale: v,
            maxDate: g,
            minDate: E,
            onKeyDown: I,
            onClickOutside: p
        })
    });
}
let _ = f;
