t.d(n, { A: () => f });
var l = t(477900),
    i = t(582128),
    r = t(17928),
    s = t(826745),
    a = t(629403),
    o = t(612630),
    d = t(351906),
    u = t(652215),
    c = t(650583),
    g = t(375708),
    m = t(759847);
function f(e) {
    let { autoFocus: n = !1, className: t, userId: f, onUpdate: p } = e,
        h = (0, r.bG)([d.A], () => d.A.hidePersonalInformation),
        { loading: x, note: A } = (0, o.A)(f),
        v = i.useRef(null);
    return (i.useEffect(() => {
        if (!n || h) return;
        let e = v.current;
        e?.selectionStart != null && (e.focus(), e.setSelection(e.value.length, e.value.length));
    }, [n, h]),
    h)
        ? null
        : (0, l.jsx)("div", {
              className: t,
              children: (0, l.jsx)(s.y, {
                  ref: v,
                  className: m.P,
                  disabled: x,
                  placeholder: x ? g.intl.string(g.t["WLKx/9"]) : g.intl.string(g.t.VBhOe2),
                  "aria-label": g.intl.string(g.t.PbMNh2),
                  onBlur: function (e) {
                      let n = e.currentTarget.value;
                      (A ?? "") !== n && (p?.(), a.A.updateNote(f, n));
                  },
                  onKeyPress: function (e) {
                      e.key === c.dh.ENTER
                          ? e.shiftKey
                              ? (e.currentTarget.value.match(/\n/g) ?? []).length >= 5 && e.preventDefault()
                              : (e.preventDefault(), e.currentTarget.blur())
                          : e.key === c.dh.SPACE && e.stopPropagation();
                  },
                  defaultValue: A ?? void 0,
                  maxLength: u.T7x,
              }),
          });
}
