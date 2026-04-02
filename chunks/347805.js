t.d(l, { A: () => A });
var i = t(627968),
    n = t(64700),
    s = t(311907),
    a = t(397927),
    r = t(629403),
    o = t(612630),
    d = t(351906),
    c = t(652215),
    u = t(985018),
    m = t(828950);
function A(e) {
    let { autoFocus: l = !1, className: t, userId: A, onUpdate: x } = e,
        p = (0, s.bG)([d.A], () => d.A.hidePersonalInformation),
        { loading: g, note: f } = (0, o.A)(A),
        h = n.useRef(null);
    return (n.useEffect(() => {
        if (!l || p) return;
        let e = h.current;
        e?.selectionStart != null && (e.focus(), e.setSelection(e.value.length, e.value.length));
    }, [l, p]),
    p)
        ? null
        : (0, i.jsx)("div", {
              className: t,
              children: (0, i.jsx)(a.d4u, {
                  ref: h,
                  className: m.P,
                  disabled: g,
                  placeholder: g ? u.intl.string(u.t["WLKx/9"]) : u.intl.string(u.t.VBhOe2),
                  "aria-label": u.intl.string(u.t.PbMNh2),
                  onBlur: (e) => {
                      let l = e.currentTarget.value;
                      (f ?? "") !== l && (x?.(), r.A.updateNote(A, l));
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
