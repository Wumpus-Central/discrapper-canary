n.d(t, { A: () => m });
var i = n(477900),
    l = n(582128),
    r = n(17928),
    s = n(826745),
    a = n(629403),
    o = n(612630),
    u = n(351906),
    d = n(652215),
    c = n(650583),
    g = n(375708),
    f = n(759847);
function m(e) {
    let { autoFocus: t = !1, className: n, userId: m, onUpdate: p } = e,
        h = (0, r.bG)([u.A], () => u.A.hidePersonalInformation),
        { loading: x, note: A } = (0, o.A)(m),
        v = l.useRef(null);
    return (l.useEffect(() => {
        if (!t || h) return;
        let e = v.current;
        e?.selectionStart != null && (e.focus(), e.setSelection(e.value.length, e.value.length));
    }, [t, h]),
    h)
        ? null
        : (0, i.jsx)("div", {
              className: n,
              children: (0, i.jsx)(s.y, {
                  ref: v,
                  className: f.P,
                  disabled: x,
                  placeholder: x ? g.intl.string(g.t["WLKx/9"]) : g.intl.string(g.t.VBhOe2),
                  "aria-label": g.intl.string(g.t.PbMNh2),
                  onBlur: function (e) {
                      let t = e.currentTarget.value;
                      (A ?? "") !== t && (p?.(), a.A.updateNote(m, t));
                  },
                  onKeyPress: function (e) {
                      e.key === c.dh.ENTER
                          ? e.shiftKey
                              ? (e.currentTarget.value.match(/\n/g) ?? []).length >= 5 && e.preventDefault()
                              : (e.preventDefault(), e.currentTarget.blur())
                          : e.key === c.dh.SPACE && e.stopPropagation();
                  },
                  defaultValue: A ?? void 0,
                  maxLength: d.T7x,
              }),
          });
}
