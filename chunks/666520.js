n.d(t, { Z: () => b }), n(35282);
var r = n(200651),
    l = n(192379),
    o = n(442837),
    i = n(481060),
    u = n(34854),
    c = n(531301),
    s = n(246946),
    a = n(981631),
    d = n(388032),
    f = n(343074);
function b(e) {
    let { autoFocus: t = !1, className: n, userId: b, onUpdate: p } = e,
        O = (0, o.e7)([s.Z], () => s.Z.hidePersonalInformation),
        { loading: g, note: y } = (0, c.Z)(b),
        v = l.useRef(null);
    return (l.useEffect(() => {
        if (!t || O) return;
        let e = v.current;
        (null == e ? void 0 : e.selectionStart) != null && (e.focus(), e.setSelection(e.value.length, e.value.length));
    }, [t, O]),
    O)
        ? null
        : (0, r.jsx)('div', {
              className: n,
              children: (0, r.jsx)(i.lcI, {
                  ref: v,
                  className: f.textarea,
                  disabled: g,
                  placeholder: g ? d.intl.string(d.t['WLKx//']) : d.intl.string(d.t.VBhOe3),
                  'aria-label': d.intl.string(d.t.PbMNh4),
                  onBlur: (e) => {
                      let t = e.currentTarget.value;
                      (null != y ? y : '') !== t && (null == p || p(), u.Z.updateNote(b, t));
                  },
                  onKeyPress: (e) => {
                      if (13 === e.which)
                          if (e.shiftKey) {
                              var t;
                              (null != (t = e.currentTarget.value.match(/\n/g)) ? t : []).length >= 5 && e.preventDefault();
                          } else e.preventDefault(), e.currentTarget.blur();
                      else e.which === a.yXg.SPACE && e.stopPropagation();
                  },
                  defaultValue: null != y ? y : void 0,
                  maxLength: a.vuo
              })
          });
}
