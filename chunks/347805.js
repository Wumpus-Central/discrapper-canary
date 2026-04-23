t.d(n, { A: () => m });
var l = t(627968),
    i = t(64700),
    r = t(311907),
    a = t(826745),
    s = t(629403),
    o = t(612630),
    d = t(351906),
    u = t(652215),
    c = t(650583),
    g = t(985018),
    A = t(999878);
function m(e) {
    let { autoFocus: n = !1, className: t, userId: m, onUpdate: f } = e,
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
        : (0, l.jsx)("div", {
              className: t,
              children: (0, l.jsx)(a.y, {
                  ref: v,
                  className: A.P,
                  disabled: x,
                  placeholder: x ? g.intl.string(g.t["WLKx/9"]) : g.intl.string(g.t.VBhOe2),
                  "aria-label": g.intl.string(g.t.PbMNh2),
                  onBlur: (e) => {
                      let n = e.currentTarget.value;
                      (h ?? "") !== n && (f?.(), s.A.updateNote(m, n));
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
