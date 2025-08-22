t.d(n, { Z: () => m }), t(35282);
var r = t(951288),
    l = t(647438),
    o = t(442837),
    i = t(481060),
    c = t(34854),
    s = t(531301),
    a = t(246946),
    d = t(981631),
    u = t(388032),
    f = t(215258);
function m(e) {
    let { autoFocus: n = !1, className: t, userId: m, onUpdate: p } = e,
        h = (0, o.e7)([a.Z], () => a.Z.hidePersonalInformation),
        { loading: x, note: b } = (0, s.Z)(m),
        j = l.useRef(null);
    return (l.useEffect(() => {
        if (!n || h) return;
        let e = j.current;
        (null == e ? void 0 : e.selectionStart) != null && (e.focus(), e.setSelection(e.value.length, e.value.length));
    }, [n, h]),
    h)
        ? null
        : (0, r.jsx)("div", {
              className: t,
              children: (0, r.jsx)(i.lcI, {
                  ref: j,
                  className: f.textarea,
                  disabled: x,
                  placeholder: x ? u.intl.string(u.t["WLKx//"]) : u.intl.string(u.t.VBhOe3),
                  "aria-label": u.intl.string(u.t.PbMNh4),
                  onBlur: (e) => {
                      let n = e.currentTarget.value;
                      (null != b ? b : "") !== n && (null == p || p(), c.Z.updateNote(m, n));
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
                  defaultValue: null != b ? b : void 0,
                  maxLength: d.vuo,
              }),
          });
}
