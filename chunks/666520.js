i.d(n, { Z: () => x });
var t = i(200651),
    l = i(192379),
    o = i(442837),
    s = i(481060),
    r = i(34854),
    a = i(531301),
    d = i(246946),
    c = i(981631),
    u = i(388032),
    m = i(120238);
function x(e) {
    let { autoFocus: n = !1, className: i, userId: x, onUpdate: p } = e,
        f = (0, o.e7)([d.Z], () => d.Z.hidePersonalInformation),
        { loading: I, note: h } = (0, a.Z)(x),
        v = l.useRef(null);
    return (l.useEffect(() => {
        if (!n || f) return;
        let e = v.current;
        (null == e ? void 0 : e.selectionStart) != null && (e.focus(), e.setSelection(e.value.length, e.value.length));
    }, [n, f]),
    f)
        ? null
        : (0, t.jsx)('div', {
              className: i,
              children: (0, t.jsx)(s.lcI, {
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
                      } else e.which === c.yXg.SPACE && e.stopPropagation();
                  },
                  defaultValue: null != h ? h : void 0,
                  maxLength: c.vuo
              })
          });
}
