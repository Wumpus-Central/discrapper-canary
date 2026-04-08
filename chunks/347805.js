n.d(l, { A: () => p });
var t = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(629403),
    o = n(612630),
    d = n(351906),
    c = n(652215),
    u = n(985018),
    m = n(36755);
function p(e) {
    let { autoFocus: l = !1, className: n, userId: p, onUpdate: x } = e,
        A = (0, s.bG)([d.A], () => d.A.hidePersonalInformation),
        { loading: g, note: f } = (0, o.A)(p),
        h = i.useRef(null);
    return (i.useEffect(() => {
        if (!l || A) return;
        let e = h.current;
        e?.selectionStart != null && (e.focus(), e.setSelection(e.value.length, e.value.length));
    }, [l, A]),
    A)
        ? null
        : (0, t.jsx)("div", {
              className: n,
              children: (0, t.jsx)(a.d4u, {
                  ref: h,
                  className: m.P,
                  disabled: g,
                  placeholder: g ? u.intl.string(u.t["WLKx/9"]) : u.intl.string(u.t.VBhOe2),
                  "aria-label": u.intl.string(u.t.PbMNh2),
                  onBlur: (e) => {
                      let l = e.currentTarget.value;
                      (f ?? "") !== l && (x?.(), r.A.updateNote(p, l));
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
