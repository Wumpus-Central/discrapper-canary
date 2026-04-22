l.d(n, { A: () => m });
var t = l(627968),
    i = l(64700),
    r = l(311907),
    s = l(826745),
    a = l(629403),
    o = l(612630),
    d = l(351906),
    c = l(652215),
    u = l(650583),
    g = l(985018),
    A = l(999878);
function m(e) {
    let { autoFocus: n = !1, className: l, userId: m, onUpdate: f } = e,
        p = (0, r.bG)([d.A], () => d.A.hidePersonalInformation),
        { loading: x, note: h } = (0, o.A)(m),
        v = i.useRef(null);
    return (i.useEffect(() => {
        if (!n || p) return;
        let e = v.current;
        e?.selectionStart != null && (e.focus(), e.setSelection(e.value.length, e.value.length));
    }, [n, p]),
    p)
        ? null
        : (0, t.jsx)("div", {
              className: l,
              children: (0, t.jsx)(s.y, {
                  ref: v,
                  className: A.P,
                  disabled: x,
                  placeholder: x ? g.intl.string(g.t["WLKx/9"]) : g.intl.string(g.t.VBhOe2),
                  "aria-label": g.intl.string(g.t.PbMNh2),
                  onBlur: (e) => {
                      let n = e.currentTarget.value;
                      (h ?? "") !== n && (f?.(), a.A.updateNote(m, n));
                  },
                  onKeyPress: (e) => {
                      e.key === u.dh.ENTER
                          ? e.shiftKey
                              ? (e.currentTarget.value.match(/\n/g) ?? []).length >= 5 && e.preventDefault()
                              : (e.preventDefault(), e.currentTarget.blur())
                          : e.key === u.dh.SPACE && e.stopPropagation();
                  },
                  defaultValue: h ?? void 0,
                  maxLength: c.T7x,
              }),
          });
}
