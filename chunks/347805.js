n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(629403),
    d = n(612630),
    o = n(351906),
    c = n(652215),
    u = n(985018),
    A = n(893251);
function x(e) {
    let { autoFocus: t = !1, className: n, userId: x, onUpdate: m } = e,
        p = (0, l.bG)([o.A], () => o.A.hidePersonalInformation),
        { loading: h, note: f } = (0, d.A)(x),
        g = s.useRef(null);
    return (s.useEffect(() => {
        if (!t || p) return;
        let e = g.current;
        e?.selectionStart != null && (e.focus(), e.setSelection(e.value.length, e.value.length));
    }, [t, p]),
    p)
        ? null
        : (0, i.jsx)("div", {
              className: n,
              children: (0, i.jsx)(a.d4u, {
                  ref: g,
                  className: A.P,
                  disabled: h,
                  placeholder: h ? u.intl.string(u.t["WLKx/9"]) : u.intl.string(u.t.VBhOe2),
                  "aria-label": u.intl.string(u.t.PbMNh2),
                  onBlur: (e) => {
                      let t = e.currentTarget.value;
                      (f ?? "") !== t && (m?.(), r.A.updateNote(x, t));
                  },
                  onKeyPress: (e) => {
                      13 === e.which
                          ? e.shiftKey
                              ? (e.currentTarget.value.match(/\n/g) ?? []).length >= 5 && e.preventDefault()
                              : (e.preventDefault(), e.currentTarget.blur())
                          : e.which === c.Ks6.SPACE && e.stopPropagation();
                  },
                  defaultValue: f ?? void 0,
                  maxLength: c.T7x,
              }),
          });
}
