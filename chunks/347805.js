n.d(l, { A: () => f });
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
    m = n(999878);
function f(e) {
    let { autoFocus: l = !1, className: n, userId: f, onUpdate: p } = e,
        x = (0, r.bG)([d.A], () => d.A.hidePersonalInformation),
        { loading: v, note: h } = (0, o.A)(f),
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
                  className: m.P,
                  disabled: v,
                  placeholder: v ? g.intl.string(g.t["WLKx/9"]) : g.intl.string(g.t.VBhOe2),
                  "aria-label": g.intl.string(g.t.PbMNh2),
                  onBlur: (e) => {
                      let l = e.currentTarget.value;
                      (h ?? "") !== l && (p?.(), s.A.updateNote(f, l));
                  },
                  onKeyPress: (e) => {
                      e.key === c.dh.ENTER
                          ? e.shiftKey
                              ? (e.currentTarget.value.match(/\n/g) ?? []).length >= 5 && e.preventDefault()
                              : (e.preventDefault(), e.currentTarget.blur())
                          : e.key === c.dh.SPACE && e.stopPropagation();
                  },
                  defaultValue: h ?? void 0,
                  maxLength: u.T7x,
              }),
          });
}
