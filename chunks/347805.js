n.d(l, { A: () => m });
var t = n(627968),
    i = n(64700),
    r = n(17928),
    a = n(826745),
    s = n(629403),
    o = n(612630),
    d = n(351906),
    u = n(652215),
    c = n(650583),
    g = n(375708),
    f = n(999878);
function m(e) {
    let { autoFocus: l = !1, className: n, userId: m, onUpdate: p } = e,
        x = (0, r.bG)([d.A], () => d.A.hidePersonalInformation),
        { loading: h, note: v } = (0, o.A)(m),
        A = i.useRef(null);
    return (i.useEffect(() => {
        if (!l || x) return;
        let e = A.current;
        e?.selectionStart != null && (e.focus(), e.setSelection(e.value.length, e.value.length));
    }, [l, x]),
    x)
        ? null
        : (0, t.jsx)("div", {
              className: n,
              children: (0, t.jsx)(a.y, {
                  ref: A,
                  className: f.P,
                  disabled: h,
                  placeholder: h ? g.intl.string(g.t["WLKx/9"]) : g.intl.string(g.t.VBhOe2),
                  "aria-label": g.intl.string(g.t.PbMNh2),
                  onBlur: (e) => {
                      let l = e.currentTarget.value;
                      (v ?? "") !== l && (p?.(), s.A.updateNote(m, l));
                  },
                  onKeyPress: (e) => {
                      e.key === c.dh.ENTER
                          ? e.shiftKey
                              ? (e.currentTarget.value.match(/\n/g) ?? []).length >= 5 && e.preventDefault()
                              : (e.preventDefault(), e.currentTarget.blur())
                          : e.key === c.dh.SPACE && e.stopPropagation();
                  },
                  defaultValue: v ?? void 0,
                  maxLength: u.T7x,
              }),
          });
}
