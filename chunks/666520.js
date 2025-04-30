t.d(n, { Z: () => p }), t(35282);
var l = t(200651),
    r = t(192379),
    i = t(442837),
    s = t(481060),
    o = t(34854),
    a = t(531301),
    c = t(246946),
    d = t(981631),
    u = t(388032),
    f = t(343074);
function p(e) {
    let { autoFocus: n = !1, className: t, userId: p, onUpdate: h } = e,
        v = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation),
        { loading: g, note: j } = (0, a.Z)(p),
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
              children: (0, l.jsx)(s.lcI, {
                  ref: m,
                  className: f.textarea,
                  disabled: g,
                  placeholder: g ? u.intl.string(u.t['WLKx//']) : u.intl.string(u.t.VBhOe3),
                  'aria-label': u.intl.string(u.t.PbMNh4),
                  onBlur: (e) => {
                      let n = e.currentTarget.value;
                      (null != j ? j : '') !== n && (null == h || h(), o.Z.updateNote(p, n));
                  },
                  onKeyPress: (e) => {
                      if (13 === e.which)
                          if (e.shiftKey) {
                              var n;
                              (null != (n = e.currentTarget.value.match(/\n/g)) ? n : []).length >= 5 && e.preventDefault();
                          } else e.preventDefault(), e.currentTarget.blur();
                      else e.which === d.yXg.SPACE && e.stopPropagation();
                  },
                  defaultValue: null != j ? j : void 0,
                  maxLength: d.vuo
              })
          });
}
