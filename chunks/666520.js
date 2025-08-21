t.d(n, { Z: () => m }), t(35282);
var r = t(951288),
    o = t(647438),
    l = t(442837),
    i = t(481060),
    c = t(34854),
    a = t(531301),
    s = t(246946),
    d = t(981631),
    u = t(388032),
    f = t(215258);
function m(e) {
    let { autoFocus: n = !1, className: t, userId: m, onUpdate: p } = e,
        b = (0, l.e7)([s.Z], () => s.Z.hidePersonalInformation),
        { loading: x, note: g } = (0, a.Z)(m),
        h = o.useRef(null);
    return (o.useEffect(() => {
        if (!n || b) return;
        let e = h.current;
        (null == e ? void 0 : e.selectionStart) != null && (e.focus(), e.setSelection(e.value.length, e.value.length));
    }, [n, b]),
    b)
        ? null
        : (0, r.jsx)("div", {
              className: t,
              children: (0, r.jsx)(i.lcI, {
                  ref: h,
                  className: f.textarea,
                  disabled: x,
                  placeholder: x ? u.intl.string(u.t["WLKx//"]) : u.intl.string(u.t.VBhOe3),
                  "aria-label": u.intl.string(u.t.PbMNh4),
                  onBlur: (e) => {
                      let n = e.currentTarget.value;
                      (null != g ? g : "") !== n && (null == p || p(), c.Z.updateNote(m, n));
                  },
                  onKeyPress: (e) => {
                      if (13 === e.which)
                          if (e.shiftKey) {
                              var n;
                              (null != (n = e.currentTarget.value.match(/\n/g)) ? n : []).length >= 5 &&
                                  e.preventDefault();
                          } else e.preventDefault(), e.currentTarget.blur();
                      else e.which === d.yXg.SPACE && e.stopPropagation();
                  },
                  defaultValue: null != g ? g : void 0,
                  maxLength: d.vuo,
              }),
          });
}
