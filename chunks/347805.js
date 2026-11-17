var i = n(477900),
    l = n(582128),
    r = n(855986),
    s = n(826745),
    a = n(629403),
    o = n(612630),
    u = n(351906);
n(652215);
var d = n(650583),
    c = n(792996),
    g = n(759847);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { autoFocus: t = !1, className: n, userId: f, onUpdate: m } = e,
                p = (0, r.bG)([u.A], () => u.A.hidePersonalInformation),
                { loading: h, note: x } = (0, o.A)(f),
                A = l.useRef(null);
            return (l.useEffect(() => {
                if (!t || p) return;
                let e = A.current;
                e?.selectionStart != null && (e.focus(), e.setSelection(e.value.length, e.value.length));
            }, [t, p]),
            p)
                ? null
                : (0, i.jsx)("div", {
                      className: n,
                      children: (0, i.jsx)(s.y, {
                          ref: A,
                          className: g.P,
                          disabled: h,
                          placeholder: h ? c.intl.string(c.t["WLKx/9"]) : c.intl.string(c.t.VBhOe2),
                          "aria-label": c.intl.string(c.t.PbMNh2),
                          onBlur: function (e) {
                              let t = e.currentTarget.value;
                              (x ?? "") !== t && (m?.(), a.A.updateNote(f, t));
                          },
                          onKeyPress: function (e) {
                              e.key === d.dh.ENTER
                                  ? e.shiftKey
                                      ? (e.currentTarget.value.match(/\n/g) ?? []).length >= 5 && e.preventDefault()
                                      : (e.preventDefault(), e.currentTarget.blur())
                                  : e.key === d.dh.SPACE && e.stopPropagation();
                          },
                          defaultValue: x ?? void 0,
                          maxLength: 256,
                      }),
                  });
        },
    },
);
