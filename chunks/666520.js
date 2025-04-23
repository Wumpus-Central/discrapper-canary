t.d(n, { Z: () => p }), t(35282);
var l = t(200651),
    r = t(192379),
    i = t(442837),
    o = t(481060),
    s = t(34854),
    u = t(531301),
    a = t(246946),
    c = t(981631),
    d = t(388032),
    f = t(343074);
function p(e) {
    let { autoFocus: n = !1, className: t, userId: p, onUpdate: g } = e,
        b = (0, i.e7)([a.Z], () => a.Z.hidePersonalInformation),
        { loading: v, note: h } = (0, u.Z)(p),
        j = r.useRef(null);
    return (r.useEffect(() => {
        if (!n || b) return;
        let e = j.current;
        (null == e ? void 0 : e.selectionStart) != null && (e.focus(), e.setSelection(e.value.length, e.value.length));
    }, [n, b]),
    b)
        ? null
        : (0, l.jsx)('div', {
              className: t,
              children: (0, l.jsx)(o.lcI, {
                  ref: j,
                  className: f.textarea,
                  disabled: v,
                  placeholder: v ? d.intl.string(d.t['WLKx//']) : d.intl.string(d.t.VBhOe3),
                  'aria-label': d.intl.string(d.t.PbMNh4),
                  onBlur: (e) => {
                      let n = e.currentTarget.value;
                      (null != h ? h : '') !== n && (null == g || g(), s.Z.updateNote(p, n));
                  },
                  onKeyPress: (e) => {
                      if (13 === e.which)
                          if (e.shiftKey) {
                              var n;
                              (null != (n = e.currentTarget.value.match(/\n/g)) ? n : []).length >= 5 && e.preventDefault();
                          } else e.preventDefault(), e.currentTarget.blur();
                      else e.which === c.yXg.SPACE && e.stopPropagation();
                  },
                  defaultValue: null != h ? h : void 0,
                  maxLength: c.vuo
              })
          });
}
