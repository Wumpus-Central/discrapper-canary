t.d(l, { A: () => x });
var n = t(627968),
    i = t(64700),
    s = t(311907),
    a = t(397927),
    r = t(629403),
    o = t(612630),
    d = t(351906),
    c = t(652215),
    u = t(985018),
    m = t(828950);
function x(e) {
    let { autoFocus: l = !1, className: t, userId: x, onUpdate: p } = e,
        A = (0, s.bG)([d.A], () => d.A.hidePersonalInformation),
        { loading: g, note: f } = (0, o.A)(x),
        h = i.useRef(null);
    return (i.useEffect(() => {
        if (!l || A) return;
        let e = h.current;
        e?.selectionStart != null && (e.focus(), e.setSelection(e.value.length, e.value.length));
    }, [l, A]),
    A)
        ? null
        : (0, n.jsx)("div", {
              className: t,
              children: (0, n.jsx)(a.d4u, {
                  ref: h,
                  className: m.P,
                  disabled: g,
                  placeholder: g ? u.intl.string(u.t["WLKx/9"]) : u.intl.string(u.t.VBhOe2),
                  "aria-label": u.intl.string(u.t.PbMNh2),
                  onBlur: (e) => {
                      let l = e.currentTarget.value;
                      (f ?? "") !== l && (p?.(), r.A.updateNote(x, l));
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
