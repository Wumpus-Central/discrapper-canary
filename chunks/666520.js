t.d(n, { Z: () => p }), t(35282);
var l = t(255367),
    r = t(73800),
    i = t(442837),
    o = t(481060),
    s = t(34854),
    c = t(531301),
    u = t(246946),
    a = t(981631),
    d = t(388032),
    f = t(343074);
function p(e) {
    let { autoFocus: n = !1, className: t, userId: p, onUpdate: g } = e,
        v = (0, i.e7)([u.Z], () => u.Z.hidePersonalInformation),
        { loading: h, note: j } = (0, c.Z)(p),
        m = r.useRef(null);
    return (r.useEffect(() => {
        if (!n || v) return;
        let e = m.current;
        (null == e ? void 0 : e.selectionStart) != null && (e.focus(), e.setSelection(e.value.length, e.value.length));
    }, [n, v]),
    v)
        ? null
        : (0, l.jsx)('div', {
              className: t,
              children: (0, l.jsx)(o.lcI, {
                  ref: m,
                  className: f.textarea,
                  disabled: h,
                  placeholder: h ? d.intl.string(d.t['WLKx//']) : d.intl.string(d.t.VBhOe3),
                  'aria-label': d.intl.string(d.t.PbMNh4),
                  onBlur: (e) => {
                      let n = e.currentTarget.value;
                      (null != j ? j : '') !== n && (null == g || g(), s.Z.updateNote(p, n));
                  },
                  onKeyPress: (e) => {
                      if (13 === e.which)
                          if (e.shiftKey) {
                              var n;
                              (null != (n = e.currentTarget.value.match(/\n/g)) ? n : []).length >= 5 && e.preventDefault();
                          } else e.preventDefault(), e.currentTarget.blur();
                      else e.which === a.yXg.SPACE && e.stopPropagation();
                  },
                  defaultValue: null != j ? j : void 0,
                  maxLength: a.vuo
              })
          });
}
