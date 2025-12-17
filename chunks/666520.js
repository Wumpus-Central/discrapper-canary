t.d(n, { Z: () => m }), t(35282);
var l = t(54381),
    i = t(473749),
    o = t(442837),
    r = t(481060),
    a = t(34854),
    c = t(531301),
    s = t(246946),
    d = t(981631),
    u = t(388032),
    f = t(221805);
function m(e) {
    let { autoFocus: n = !1, className: t, userId: m, onUpdate: p } = e,
        x = (0, o.e7)([s.Z], () => s.Z.hidePersonalInformation),
        { loading: h, note: v } = (0, c.Z)(m),
        b = i.useRef(null);
    return (i.useEffect(() => {
        if (!n || x) return;
        let e = b.current;
        (null == e ? void 0 : e.selectionStart) != null && (e.focus(), e.setSelection(e.value.length, e.value.length));
    }, [n, x]),
    x)
        ? null
        : (0, l.jsx)("div", {
              className: t,
              children: (0, l.jsx)(r.lcI, {
                  ref: b,
                  className: f.textarea,
                  disabled: h,
                  placeholder: h ? u.intl.string(u.t["WLKx/9"]) : u.intl.string(u.t.VBhOe2),
                  "aria-label": u.intl.string(u.t.PbMNh2),
                  onBlur: (e) => {
                      let n = e.currentTarget.value;
                      (null != v ? v : "") !== n && (null == p || p(), a.Z.updateNote(m, n));
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
                  defaultValue: null != v ? v : void 0,
                  maxLength: d.vuo,
              }),
          });
}
