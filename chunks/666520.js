t.d(n, { Z: () => p }), t(35282);
var l = t(951288),
    i = t(647438),
    r = t(442837),
    o = t(481060),
    s = t(34854),
    a = t(531301),
    c = t(246946),
    d = t(981631),
    u = t(388032),
    m = t(215258);
function p(e) {
    let { autoFocus: n = !1, className: t, userId: p, onUpdate: f } = e,
        h = (0, r.e7)([c.Z], () => c.Z.hidePersonalInformation),
        { loading: x, note: j } = (0, a.Z)(p),
        v = i.useRef(null);
    return (i.useEffect(() => {
        if (!n || h) return;
        let e = v.current;
        (null == e ? void 0 : e.selectionStart) != null && (e.focus(), e.setSelection(e.value.length, e.value.length));
    }, [n, h]),
    h)
        ? null
        : (0, l.jsx)("div", {
              className: t,
              children: (0, l.jsx)(o.lcI, {
                  ref: v,
                  className: m.textarea,
                  disabled: x,
                  placeholder: x ? u.intl.string(u.t["WLKx//"]) : u.intl.string(u.t.VBhOe3),
                  "aria-label": u.intl.string(u.t.PbMNh4),
                  onBlur: (e) => {
                      let n = e.currentTarget.value;
                      (null != j ? j : "") !== n && (null == f || f(), s.Z.updateNote(p, n));
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
                  defaultValue: null != j ? j : void 0,
                  maxLength: d.vuo,
              }),
          });
}
