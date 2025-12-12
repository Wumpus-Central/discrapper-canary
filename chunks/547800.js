n.r(t),
    n.d(t, {
        CalendarPicker: () => p,
        default: () => _,
    });
var r = n(54381),
    i = n(473749),
    a = n(913527),
    o = n.n(a),
    s = n(74570),
    l = n.n(s),
    c = n(442837),
    u = n(241601),
    d = n(706454);
n(694433);
var f = n(955929);
function p(e) {
    var t, n;
    let {
            value: a = o()().local(),
            minDate: s,
            maxDate: p,
            onSelect: _,
            calendarClassName: m,
            autoFocus: h,
            onClickOutside: g,
        } = e,
        E = i.useCallback(
            (e, t) => {
                null == _ || _(o()(e), t);
            },
            [_],
        ),
        b = i.useMemo(() => a.toDate(), [a]),
        y = i.useMemo(() => (null == p ? void 0 : p.toDate()), [p]),
        O = i.useMemo(() => (null == s ? void 0 : s.toDate()), [s]),
        v = (0, c.e7)([d.default], () => d.default.locale),
        S = (0, u.jY)(),
        I = i.useRef(null),
        T = i.useCallback((e) => {
            let t = e.currentTarget;
            t.classList.contains("react-datepicker__day") &&
                setTimeout(() => {
                    var e, n;
                    if (null == (e = I.current) ? void 0 : e.contains(t)) return;
                    let r = null == (n = I.current) ? void 0 : n.querySelector('.react-datepicker__day[tabindex="0"]');
                    null != r && r.focus();
                }, 100);
        }, []);
    return (0, r.jsx)("div", {
        ref: I,
        className: f.calendarPicker,
        children: (0, r.jsx)(l(), {
            calendarClassName: m,
            selected: b,
            onChange: E,
            autoFocus: h,
            fixedHeight: !0,
            inline: !0,
            locale: v,
            calendarStartDay: null != (n = null == (t = S.options) ? void 0 : t.weekStartsOn) ? n : 0,
            maxDate: y,
            minDate: O,
            onKeyDown: T,
            onClickOutside: g,
        }),
    });
}
let _ = p;
