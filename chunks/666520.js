t.d(n, { Z: () => f });
var i = t(200651),
    l = t(192379),
    o = t(442837),
    s = t(481060),
    r = t(34854),
    a = t(531301),
    d = t(246946),
    c = t(981631),
    u = t(388032),
    I = t(751970);
function f(e) {
    let { autoFocus: n = !1, className: t, userId: f, onUpdate: p } = e,
        x = (0, o.e7)([d.Z], () => d.Z.hidePersonalInformation),
        { loading: m, note: _ } = (0, a.Z)(f),
        h = l.useRef(null);
    return (l.useEffect(() => {
        if (!n || x) return;
        let e = h.current;
        (null == e ? void 0 : e.selectionStart) != null && (e.focus(), e.setSelection(e.value.length, e.value.length));
    }, [n, x]),
    x)
        ? null
        : (0, i.jsx)('div', {
              className: t,
              children: (0, i.jsx)(s.lcI, {
                  ref: h,
                  className: I.textarea,
                  disabled: m,
                  placeholder: m ? u.intl.string(u.t['WLKx//']) : u.intl.string(u.t.VBhOe3),
                  'aria-label': u.intl.string(u.t.PbMNh4),
                  onBlur: (e) => {
                      let n = e.currentTarget.value;
                      (null != _ ? _ : '') !== n && (null == p || p(), r.Z.updateNote(f, n));
                  },
                  onKeyPress: (e) => {
                      if (13 === e.which) {
                          if (e.shiftKey) {
                              var n;
                              (null !== (n = e.currentTarget.value.match(/\n/g)) && void 0 !== n ? n : []).length >= 5 && e.preventDefault();
                          } else e.preventDefault(), e.currentTarget.blur();
                      } else e.which === c.yXg.SPACE && e.stopPropagation();
                  },
                  defaultValue: null != _ ? _ : void 0,
                  maxLength: c.vuo
              })
          });
}
