t.d(n, { Z: () => h }), t(35282);
var l = t(200651),
    r = t(192379),
    i = t(442837),
    o = t(481060),
    s = t(34854),
    a = t(531301),
    d = t(246946),
    c = t(981631),
    u = t(388032),
    f = t(343074);
function h(e) {
    let { autoFocus: n = !1, className: t, userId: h, onUpdate: p } = e,
        g = (0, i.e7)([d.Z], () => d.Z.hidePersonalInformation),
        { loading: j, note: v } = (0, a.Z)(h),
        m = r.useRef(null);
    return (r.useEffect(() => {
        if (!n || g) return;
        let e = m.current;
        (null == e ? void 0 : e.selectionStart) != null && (e.focus(), e.setSelection(e.value.length, e.value.length));
    }, [n, g]),
    g)
        ? null
        : (0, l.jsx)('div', {
              className: t,
              children: (0, l.jsx)(o.lcI, {
                  ref: m,
                  className: f.textarea,
                  disabled: j,
                  placeholder: j ? u.intl.string(u.t['WLKx//']) : u.intl.string(u.t.VBhOe3),
                  'aria-label': u.intl.string(u.t.PbMNh4),
                  onBlur: (e) => {
                      let n = e.currentTarget.value;
                      (null != v ? v : '') !== n && (null == p || p(), s.Z.updateNote(h, n));
                  },
                  onKeyPress: (e) => {
                      if (13 === e.which)
                          if (e.shiftKey) {
                              var n;
                              (null != (n = e.currentTarget.value.match(/\n/g)) ? n : []).length >= 5 && e.preventDefault();
                          } else e.preventDefault(), e.currentTarget.blur();
                      else e.which === c.yXg.SPACE && e.stopPropagation();
                  },
                  defaultValue: null != v ? v : void 0,
                  maxLength: c.vuo
              })
          });
}
