i.d(l, { A: () => m });
var n = i(627968),
    t = i(64700),
    s = i(311907),
    a = i(397927),
    r = i(629403),
    o = i(612630),
    d = i(351906),
    c = i(652215),
    u = i(985018),
    A = i(75945);
function m(e) {
    let { autoFocus: l = !1, className: i, userId: m, onUpdate: p } = e,
        x = (0, s.bG)([d.A], () => d.A.hidePersonalInformation),
        { loading: g, note: h } = (0, o.A)(m),
        f = t.useRef(null);
    return (t.useEffect(() => {
        if (!l || x) return;
        let e = f.current;
        e?.selectionStart != null && (e.focus(), e.setSelection(e.value.length, e.value.length));
    }, [l, x]),
    x)
        ? null
        : (0, n.jsx)("div", {
              className: i,
              children: (0, n.jsx)(a.d4u, {
                  ref: f,
                  className: A.P,
                  disabled: g,
                  placeholder: g ? u.intl.string(u.t["WLKx/9"]) : u.intl.string(u.t.VBhOe2),
                  "aria-label": u.intl.string(u.t.PbMNh2),
                  onBlur: (e) => {
                      let l = e.currentTarget.value;
                      (h ?? "") !== l && (p?.(), r.A.updateNote(m, l));
                  },
                  onKeyPress: (e) => {
                      13 === e.which
                          ? e.shiftKey
                              ? (e.currentTarget.value.match(/\n/g) ?? []).length >= 5 && e.preventDefault()
                              : (e.preventDefault(), e.currentTarget.blur())
                          : e.which === c.Ks6.SPACE && e.stopPropagation();
                  },
                  defaultValue: h ?? void 0,
                  maxLength: c.T7x,
              }),
          });
}
