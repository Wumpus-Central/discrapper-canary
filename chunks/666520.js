n.d(t, { Z: () => p }), n(35282);
var r = n(255367),
    l = n(73800),
    i = n(442837),
    o = n(481060),
    a = n(34854),
    c = n(531301),
    s = n(246946),
    d = n(981631),
    u = n(388032),
    f = n(343074);
function p(e) {
    let { autoFocus: t = !1, className: n, userId: p, onUpdate: m } = e,
        g = (0, i.e7)([s.Z], () => s.Z.hidePersonalInformation),
        { loading: b, note: j } = (0, c.Z)(p),
        y = l.useRef(null);
    return (l.useEffect(() => {
        if (!t || g) return;
        let e = y.current;
        (null == e ? void 0 : e.selectionStart) != null && (e.focus(), e.setSelection(e.value.length, e.value.length));
    }, [t, g]),
    g)
        ? null
        : (0, r.jsx)("div", {
              className: n,
              children: (0, r.jsx)(o.lcI, {
                  ref: y,
                  className: f.textarea,
                  disabled: b,
                  placeholder: b ? u.intl.string(u.t["WLKx//"]) : u.intl.string(u.t.VBhOe3),
                  "aria-label": u.intl.string(u.t.PbMNh4),
                  onBlur: (e) => {
                      let t = e.currentTarget.value;
                      (null != j ? j : "") !== t && (null == m || m(), a.Z.updateNote(p, t));
                  },
                  onKeyPress: (e) => {
                      if (13 === e.which)
                          if (e.shiftKey) {
                              var t;
                              (null != (t = e.currentTarget.value.match(/\n/g)) ? t : []).length >= 5 &&
                                  e.preventDefault();
                          } else e.preventDefault(), e.currentTarget.blur();
                      else e.which === d.yXg.SPACE && e.stopPropagation();
                  },
                  defaultValue: null != j ? j : void 0,
                  maxLength: d.vuo,
              }),
          });
}
