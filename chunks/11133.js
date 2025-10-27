n.d(t, { Z: () => f }), n(35282);
var r = n(734959),
    i = n(835834),
    a = n(657305),
    o = n(394821),
    s = n(841784),
    l = n(503438),
    c = n(750154),
    u = n(981631),
    d = n(388032);
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (null == e ? void 0 : e.name) === "" ? null : null == e ? void 0 : e.name,
        f = (null == e ? void 0 : e.details) === "" ? null : null == e ? void 0 : e.details,
        _ = (null == e ? void 0 : e.state) === "" ? null : null == e ? void 0 : e.state,
        p = (0, i.R)("getActivityStatusText"),
        h = (null == e ? void 0 : e.type) === u.IIU.STREAMING && null != f ? f : n;
    if (
        ((null == e ? void 0 : e.status_display_type) === r.D.NAME && null != n
            ? (h = n)
            : (null == e ? void 0 : e.status_display_type) === r.D.STATE && null != _
              ? (h = _)
              : (null == e ? void 0 : e.status_display_type) === r.D.DETAILS && null != f && (h = f),
        (0, s.Z)(e))
    ) {
        let e = (0, a.Z)(n);
        return {
            text: e,
            tooltip: e,
        };
    }
    if ((null == e ? void 0 : e.type) === u.IIU.PLAYING && null != h)
        return {
            text: p ? h : d.intl.format(d.t.lFApmz, { game: h }),
            tooltip: d.intl.formatToPlainString(d.t.lFApmz, { game: h }),
        };
    if ((0, l.Z)(e) && t && null != _) {
        var m;
        let e = null == (m = _.split("; ")) ? void 0 : m.join(", ");
        return {
            text: p ? e : d.intl.format(d.t.Vnuxue, { name: e }),
            tooltip: d.intl.formatToPlainString(d.t.Vnuxue, { name: e }),
        };
    }
    return (0, c.dS)(e) && null != n
        ? {
              text: p ? n : d.intl.format(d.t.pW3Ip3, { name: n }),
              tooltip: d.intl.formatToPlainString(d.t.pW3Ip3, { name: n }),
          }
        : (null == e ? void 0 : e.type) === u.IIU.LISTENING && null != h
          ? {
                text: p ? h : d.intl.format(d.t.Vnuxue, { name: h }),
                tooltip: d.intl.formatToPlainString(d.t.Vnuxue, { name: h }),
            }
          : (0, o.Z)(e) && t && null != f
            ? {
                  text: p ? f : d.intl.format(d.t.pW3Ip3, { name: f }),
                  tooltip: d.intl.formatToPlainString(d.t.pW3Ip3, { name: f }),
              }
            : (null == e ? void 0 : e.type) === u.IIU.WATCHING && null != h
              ? {
                    text: p ? h : d.intl.format(d.t.pW3Ip3, { name: h }),
                    tooltip: d.intl.formatToPlainString(d.t.pW3Ip3, { name: h }),
                }
              : (null == e ? void 0 : e.type) === u.IIU.COMPETING && null != h
                ? {
                      text: p ? h : d.intl.format(d.t.QQ2wVE, { name: h }),
                      tooltip: d.intl.formatToPlainString(d.t.QQ2wVE, { name: h }),
                  }
                : (null == e ? void 0 : e.type) === u.IIU.STREAMING && null != h
                  ? {
                        text: p ? h : d.intl.format(d.t["0wJXSh"], { name: h }),
                        tooltip: d.intl.formatToPlainString(d.t["0wJXSh"], { name: h }),
                    }
                  : {};
}
