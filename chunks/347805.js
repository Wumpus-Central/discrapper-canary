l.d(n, { A: () => p });
var t = l(627968),
    i = l(64700),
    s = l(311907),
    a = l(397927),
    r = l(629403),
    o = l(612630),
    d = l(351906),
    c = l(652215),
    u = l(650583),
    m = l(985018),
    A = l(999878);
function p(e) {
    let { autoFocus: n = !1, className: l, userId: p, onUpdate: x } = e,
        g = (0, s.bG)([d.A], () => d.A.hidePersonalInformation),
        { loading: f, note: h } = (0, o.A)(p),
        v = i.useRef(null);
    return (i.useEffect(() => {
        if (!n || g) return;
        let e = v.current;
        e?.selectionStart != null && (e.focus(), e.setSelection(e.value.length, e.value.length));
    }, [n, g]),
    g)
        ? null
        : (0, t.jsx)("div", {
              className: l,
              children: (0, t.jsx)(a.d4u, {
                  ref: v,
                  className: A.P,
                  disabled: f,
                  placeholder: f ? m.intl.string(m.t["WLKx/9"]) : m.intl.string(m.t.VBhOe2),
                  "aria-label": m.intl.string(m.t.PbMNh2),
                  onBlur: (e) => {
                      let n = e.currentTarget.value;
                      (h ?? "") !== n && (x?.(), r.A.updateNote(p, n));
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
