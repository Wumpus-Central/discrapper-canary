t.d(n, { Z: () => p }), t(35282);
var r = t(200651),
    o = t(192379),
    i = t(442837),
    l = t(481060),
    s = t(34854),
    c = t(531301),
    a = t(246946),
    d = t(981631),
    u = t(388032),
    f = t(343074);
function p(e) {
    let { autoFocus: n = !1, className: t, userId: p, onUpdate: m } = e,
        b = (0, i.e7)([a.Z], () => a.Z.hidePersonalInformation),
        { loading: h, note: g } = (0, c.Z)(p),
        j = o.useRef(null);
    return (o.useEffect(() => {
        if (!n || b) return;
        let e = j.current;
        (null == e ? void 0 : e.selectionStart) != null && (e.focus(), e.setSelection(e.value.length, e.value.length));
    }, [n, b]),
    b)
        ? null
        : (0, r.jsx)('div', {
              className: t,
              children: (0, r.jsx)(l.lcI, {
                  ref: j,
                  className: f.textarea,
                  disabled: h,
                  placeholder: h ? u.intl.string(u.t['WLKx//']) : u.intl.string(u.t.VBhOe3),
                  'aria-label': u.intl.string(u.t.PbMNh4),
                  onBlur: (e) => {
                      let n = e.currentTarget.value;
                      (null != g ? g : '') !== n && (null == m || m(), s.Z.updateNote(p, n));
                  },
                  onKeyPress: (e) => {
                      if (13 === e.which)
                          if (e.shiftKey) {
                              var n;
                              (null != (n = e.currentTarget.value.match(/\n/g)) ? n : []).length >= 5 && e.preventDefault();
                          } else e.preventDefault(), e.currentTarget.blur();
                      else e.which === d.yXg.SPACE && e.stopPropagation();
                  },
                  defaultValue: null != g ? g : void 0,
                  maxLength: d.vuo
              })
          });
}
