n.d(t, { Z: () => d }), n(35282);
var r = n(734959),
    i = n(657305),
    a = n(394821),
    o = n(841784),
    s = n(503438),
    l = n(750154),
    c = n(981631),
    u = n(388032);
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (null == e ? void 0 : e.name) === "" ? null : null == e ? void 0 : e.name,
        d = (null == e ? void 0 : e.details) === "" ? null : null == e ? void 0 : e.details,
        f = (null == e ? void 0 : e.state) === "" ? null : null == e ? void 0 : e.state,
        p = (null == e ? void 0 : e.type) === c.IIU.STREAMING && null != d ? d : n;
    if (
        ((null == e ? void 0 : e.status_display_type) === r.D.NAME && null != n
            ? (p = n)
            : (null == e ? void 0 : e.status_display_type) === r.D.STATE && null != f
              ? (p = f)
              : (null == e ? void 0 : e.status_display_type) === r.D.DETAILS && null != d && (p = d),
        (0, o.Z)(e))
    ) {
        let e = (0, i.Z)(n);
        return {
            text: e,
            tooltip: e,
        };
    }
    if ((null == e ? void 0 : e.type) === c.IIU.PLAYING && null != p)
        return {
            text: p,
            tooltip: u.intl.formatToPlainString(u.t.lFApmz, { game: p }),
        };
    if ((0, s.Z)(e) && t && null != f) {
        var _;
        let e = null == (_ = f.split("; ")) ? void 0 : _.join(", ");
        return {
            text: e,
            tooltip: u.intl.formatToPlainString(u.t.Vnuxue, { name: e }),
        };
    }
    return (0, l.dS)(e) && null != n
        ? {
              text: n,
              tooltip: u.intl.formatToPlainString(u.t.pW3Ip3, { name: n }),
          }
        : (null == e ? void 0 : e.type) === c.IIU.LISTENING && null != p
          ? {
                text: p,
                tooltip: u.intl.formatToPlainString(u.t.Vnuxue, { name: p }),
            }
          : (0, a.Z)(e) && t && null != d
            ? {
                  text: d,
                  tooltip: u.intl.formatToPlainString(u.t.pW3Ip3, { name: d }),
              }
            : (null == e ? void 0 : e.type) === c.IIU.WATCHING && null != p
              ? {
                    text: p,
                    tooltip: u.intl.formatToPlainString(u.t.pW3Ip3, { name: p }),
                }
              : (null == e ? void 0 : e.type) === c.IIU.COMPETING && null != p
                ? {
                      text: p,
                      tooltip: u.intl.formatToPlainString(u.t.QQ2wVE, { name: p }),
                  }
                : (null == e ? void 0 : e.type) === c.IIU.STREAMING && null != p
                  ? {
                        text: p,
                        tooltip: u.intl.formatToPlainString(u.t["0wJXSh"], { name: p }),
                    }
                  : {};
}
