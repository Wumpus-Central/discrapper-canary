n.r(t),
    n.d(t, {
        CalendarPicker: () => f,
        default: () => _
    });
var r = n(255367),
    i = n(73800),
    a = n(913527),
    o = n.n(a),
    s = n(352374),
    l = n.n(s),
    c = n(442837),
    u = n(706454);
n(212932);
var d = n(145606);
function f(e) {
    let { value: t = o()().local(), minDate: n, maxDate: a, onSelect: s, calendarClassName: f, autoFocus: _, onClickOutside: p } = e,
        h = i.useCallback(
            (e, t) => {
                null == s || s(o()(e), t);
            },
            [s]
        ),
        m = i.useMemo(() => t.toDate(), [t]),
        g = i.useMemo(() => (null == a ? void 0 : a.toDate()), [a]),
        E = i.useMemo(() => (null == n ? void 0 : n.toDate()), [n]),
        b = (0, c.e7)([u.default], () => u.default.locale),
        y = i.useRef(null),
        O = i.useCallback((e) => {
            let t = e.currentTarget;
            t.classList.contains('react-datepicker__day') &&
                setTimeout(() => {
                    var e, n;
                    if (null == (e = y.current) ? void 0 : e.contains(t)) return;
                    let r = null == (n = y.current) ? void 0 : n.querySelector('.react-datepicker__day[tabindex="0"]');
                    null != r && r.focus();
                }, 100);
        }, []);
    return (0, r.jsx)('div', {
        ref: y,
        className: d.calendarPicker,
        children: (0, r.jsx)(l(), {
            calendarClassName: f,
            selected: m,
            onChange: h,
            autoFocus: _,
            fixedHeight: !0,
            inline: !0,
            locale: b,
            maxDate: g,
            minDate: E,
            onKeyDown: O,
            onClickOutside: p
        })
    });
}
let _ = f;
