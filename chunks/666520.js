n.d(t, { Z: () => p }), n(35282);
var l = n(200651),
    r = n(192379),
    i = n(442837),
    s = n(481060),
    o = n(34854),
    c = n(531301),
    a = n(246946),
    d = n(981631),
    u = n(388032),
    f = n(343074);
function p(e) {
    let { autoFocus: t = !1, className: n, userId: p, onUpdate: h } = e,
        j = (0, i.e7)([a.Z], () => a.Z.hidePersonalInformation),
        { loading: g, note: v } = (0, c.Z)(p),
        m = r.useRef(null);
    return (r.useEffect(() => {
        if (!t || j) return;
        let e = m.current;
        (null == e ? void 0 : e.selectionStart) != null && (e.focus(), e.setSelection(e.value.length, e.value.length));
    }, [t, j]),
    j)
        ? null
        : (0, l.jsx)('div', {
              className: n,
              children: (0, l.jsx)(s.lcI, {
                  ref: m,
                  className: f.textarea,
                  disabled: g,
                  placeholder: g ? u.intl.string(u.t['WLKx//']) : u.intl.string(u.t.VBhOe3),
                  'aria-label': u.intl.string(u.t.PbMNh4),
                  onBlur: (e) => {
                      let t = e.currentTarget.value;
                      (null != v ? v : '') !== t && (null == h || h(), o.Z.updateNote(p, t));
                  },
                  onKeyPress: (e) => {
                      if (13 === e.which)
                          if (e.shiftKey) {
                              var t;
                              (null != (t = e.currentTarget.value.match(/\n/g)) ? t : []).length >= 5 && e.preventDefault();
                          } else e.preventDefault(), e.currentTarget.blur();
                      else e.which === d.yXg.SPACE && e.stopPropagation();
                  },
                  defaultValue: null != v ? v : void 0,
                  maxLength: d.vuo
              })
          });
}
