t.d(l, {
    A: () => p,
}),
    t(747238);
var n = t(627968),
    i = t(64700),
    r = t(311907),
    s = t(397927),
    a = t(629403),
    o = t(612630),
    d = t(351906),
    c = t(652215),
    u = t(985018),
    f = t(75945);

function p(e) {
    let { autoFocus: l = !1, className: t, userId: p, onUpdate: m } = e,
        x = (0, r.bG)([d.A], () => d.A.hidePersonalInformation),
        { loading: A, note: j } = (0, o.A)(p),
        h = i.useRef(null);
    return (i.useEffect(() => {
        if (!l || x) return;
        let e = h.current;
        (null == e ? void 0 : e.selectionStart) != null && (e.focus(), e.setSelection(e.value.length, e.value.length));
    }, [l, x]),
    x)
        ? null
        : (0, n.jsx)("div", {
              className: t,
              children: (0, n.jsx)(s.d4u, {
                  ref: h,
                  className: f.P,
                  disabled: A,
                  placeholder: A ? u.intl.string(u.t["WLKx/9"]) : u.intl.string(u.t.VBhOe2),
                  "aria-label": u.intl.string(u.t.PbMNh2),
                  onBlur: (e) => {
                      let l = e.currentTarget.value;
                      (null != j ? j : "") !== l && (null == m || m(), a.A.updateNote(p, l));
                  },
                  onKeyPress: (e) => {
                      if (13 === e.which)
                          if (e.shiftKey) {
                              var l;
                              (null != (l = e.currentTarget.value.match(/\n/g)) ? l : []).length >= 5 &&
                                  e.preventDefault();
                          } else e.preventDefault(), e.currentTarget.blur();
                      else e.which === c.Ks6.SPACE && e.stopPropagation();
                  },
                  defaultValue: null != j ? j : void 0,
                  maxLength: c.T7x,
              }),
          });
}
