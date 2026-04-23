t.d(n, { A: () => p });
var l = t(627968),
    i = t(64700),
    r = t(17928),
    a = t(826745),
    s = t(636537),
    o = t(652215);
let d = {
    updateNote(e, n) {
        s.Bo.put({ url: o.Rsh.NOTE(e), body: { note: n }, oldFormErrors: !0, rejectWithError: !0 });
    },
};
var u = t(612630),
    c = t(351906),
    g = t(650583),
    m = t(985018),
    f = t(999878);
function p(e) {
    let { autoFocus: n = !1, className: t, userId: s, onUpdate: p } = e,
        x = (0, r.bG)([c.A], () => c.A.hidePersonalInformation),
        { loading: A, note: h } = (0, u.A)(s),
        v = i.useRef(null);
    return (i.useEffect(() => {
        if (!n || x) return;
        let e = v.current;
        e?.selectionStart != null && (e.focus(), e.setSelection(e.value.length, e.value.length));
    }, [n, x]),
    x)
        ? null
        : (0, l.jsx)("div", {
              className: t,
              children: (0, l.jsx)(a.y, {
                  ref: v,
                  className: f.P,
                  disabled: A,
                  placeholder: A ? m.intl.string(m.t["WLKx/9"]) : m.intl.string(m.t.VBhOe2),
                  "aria-label": m.intl.string(m.t.PbMNh2),
                  onBlur: (e) => {
                      let n = e.currentTarget.value;
                      (h ?? "") !== n && (p?.(), d.updateNote(s, n));
                  },
                  onKeyPress: (e) => {
                      e.key === g.dh.ENTER
                          ? e.shiftKey
                              ? (e.currentTarget.value.match(/\n/g) ?? []).length >= 5 && e.preventDefault()
                              : (e.preventDefault(), e.currentTarget.blur())
                          : e.key === g.dh.SPACE && e.stopPropagation();
                  },
                  defaultValue: h ?? void 0,
                  maxLength: o.T7x,
              }),
          });
}
