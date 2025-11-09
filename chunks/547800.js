n.r(t),
    n.d(t, {
        CalendarPicker: () => _,
        default: () => p,
    });
var r = n(951288),
    i = n(647438),
    a = n(913527),
    o = n.n(a),
    s = n(939711),
    l = n.n(s),
    c = n(442837),
    u = n(241601),
    d = n(706454);
n(438236);
var f = n(67309);
function _(e) {
    var t, n;
    let {
            value: a = o()().local(),
            minDate: s,
            maxDate: _,
            onSelect: p,
            calendarClassName: h,
            autoFocus: m,
            onClickOutside: g,
        } = e,
        E = i.useCallback(
            (e, t) => {
                null == p || p(o()(e), t);
            },
            [p],
        ),
        b = i.useMemo(() => a.toDate(), [a]),
        y = i.useMemo(() => (null == _ ? void 0 : _.toDate()), [_]),
        O = i.useMemo(() => (null == s ? void 0 : s.toDate()), [s]),
        v = (0, c.e7)([d.default], () => d.default.locale),
        I = (0, u.jY)(),
        S = i.useRef(null),
        T = i.useCallback((e) => {
            let t = e.currentTarget;
            t.classList.contains("react-datepicker__day") &&
                setTimeout(() => {
                    var e, n;
                    if (null == (e = S.current) ? void 0 : e.contains(t)) return;
                    let r = null == (n = S.current) ? void 0 : n.querySelector('.react-datepicker__day[tabindex="0"]');
                    null != r && r.focus();
                }, 100);
        }, []);
    return (0, r.jsx)("div", {
        ref: S,
        className: f.calendarPicker,
        children: (0, r.jsx)(l(), {
            calendarClassName: h,
            selected: b,
            onChange: E,
            autoFocus: m,
            fixedHeight: !0,
            inline: !0,
            locale: v,
            calendarStartDay: null != (n = null == (t = I.options) ? void 0 : t.weekStartsOn) ? n : 0,
            maxDate: y,
            minDate: O,
            onKeyDown: T,
            onClickOutside: g,
        }),
    });
}
let p = _;
