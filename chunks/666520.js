t.d(n, { Z: () => x });
var i = t(200651),
    l = t(192379),
    o = t(442837),
    s = t(481060),
    r = t(34854),
    a = t(531301),
    c = t(246946),
    d = t(981631),
    u = t(388032),
    m = t(120238);
function x(e) {
    let { autoFocus: n = !1, className: t, userId: x, onUpdate: p } = e,
        f = (0, o.e7)([c.Z], () => c.Z.hidePersonalInformation),
        { loading: I, note: h } = (0, a.Z)(x),
        v = l.useRef(null);
    return (l.useEffect(() => {
        if (!n || f) return;
        let e = v.current;
        (null == e ? void 0 : e.selectionStart) != null && (e.focus(), e.setSelection(e.value.length, e.value.length));
    }, [n, f]),
    f)
        ? null
        : (0, i.jsx)('div', {
              className: t,
              children: (0, i.jsx)(s.lcI, {
                  ref: v,
                  className: m.textarea,
                  disabled: I,
                  placeholder: I ? u.intl.string(u.t['WLKx//']) : u.intl.string(u.t.VBhOe3),
                  'aria-label': u.intl.string(u.t.PbMNh4),
                  onBlur: (e) => {
                      let n = e.currentTarget.value;
                      (null != h ? h : '') !== n && (null == p || p(), r.Z.updateNote(x, n));
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
