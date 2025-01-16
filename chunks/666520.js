t.d(n, {
    Z: function () {
        return m;
    }
});
var i = t(200651),
    l = t(192379),
    o = t(442837),
    r = t(481060),
    s = t(34854),
    c = t(531301),
    a = t(246946),
    d = t(981631),
    u = t(388032),
    f = t(120238);
function m(e) {
    let { autoFocus: n = !1, className: t, userId: m, onUpdate: x } = e,
        I = (0, o.e7)([a.Z], () => a.Z.hidePersonalInformation),
        { loading: p, note: h } = (0, c.Z)(m),
        v = l.useRef(null);
    return (l.useEffect(() => {
        if (!n || I) return;
        let e = v.current;
        (null == e ? void 0 : e.selectionStart) != null && (e.focus(), e.setSelection(e.value.length, e.value.length));
    }, [n, I]),
    I)
        ? null
        : (0, i.jsx)('div', {
              className: t,
              children: (0, i.jsx)(r.TextAreaAutosize, {
                  ref: v,
                  className: f.textarea,
                  disabled: p,
                  placeholder: p ? u.intl.string(u.t['WLKx//']) : u.intl.string(u.t.VBhOe3),
                  'aria-label': u.intl.string(u.t.PbMNh4),
                  onBlur: (e) => {
                      let n = e.currentTarget.value;
                      if ((null != h ? h : '') !== n) null == x || x(), s.Z.updateNote(m, n);
                  },
                  onKeyPress: (e) => {
                      if (13 === e.which) {
                          if (e.shiftKey) {
                              var n;
                              (null !== (n = e.currentTarget.value.match(/\n/g)) && void 0 !== n ? n : []).length >= 5 && e.preventDefault();
                          } else e.preventDefault(), e.currentTarget.blur();
                      } else e.which === d.yXg.SPACE && e.stopPropagation();
                  },
                  defaultValue: null != h ? h : void 0,
                  maxLength: d.vuo
              })
          });
}
