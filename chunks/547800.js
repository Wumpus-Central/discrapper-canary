r.r(n),
    r.d(n, {
        CalendarPicker: function () {
            return _;
        }
    });
var i = r(200651),
    a = r(192379),
    s = r(913527),
    o = r.n(s),
    l = r(674091),
    u = r.n(l),
    c = r(442837),
    d = r(706454);
r(623931);
var f = r(55825);
function _(e) {
    let { value: n = o()().local(), minDate: r, maxDate: s, onSelect: l, calendarClassName: _, autoFocus: h, onClickOutside: p } = e,
        m = a.useCallback(
            (e, n) => {
                null == l || l(o()(e), n);
            },
            [l]
        ),
        g = a.useMemo(() => n.toDate(), [n]),
        E = a.useMemo(() => (null == s ? void 0 : s.toDate()), [s]),
        v = a.useMemo(() => (null == r ? void 0 : r.toDate()), [r]),
        I = (0, c.e7)([d.default], () => d.default.locale),
        T = a.useRef(null),
        b = a.useCallback((e) => {
            let n = e.currentTarget;
            if (!!n.classList.contains('react-datepicker__day'))
                setTimeout(() => {
                    var e, r;
                    if (null === (e = T.current) || void 0 === e ? void 0 : e.contains(n)) return;
                    let i = null === (r = T.current) || void 0 === r ? void 0 : r.querySelector('.react-datepicker__day[tabindex="0"]');
                    if (null != i) i.focus();
                }, 100);
        }, []);
    return (0, i.jsx)('div', {
        ref: T,
        className: f.calendarPicker,
        children: (0, i.jsx)(u(), {
            calendarClassName: _,
            selected: g,
            onChange: m,
            autoFocus: h,
            fixedHeight: !0,
            inline: !0,
            locale: I,
            maxDate: E,
            minDate: v,
            onKeyDown: b,
            onClickOutside: p
        })
    });
}
n.default = _;
