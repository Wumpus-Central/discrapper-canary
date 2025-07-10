(n.d(t, { Z: () => d }), n(35282));
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
        n = (null == e ? void 0 : e.name) === '' ? null : null == e ? void 0 : e.name,
        d = (null == e ? void 0 : e.details) === '' ? null : null == e ? void 0 : e.details,
        f = (null == e ? void 0 : e.state) === '' ? null : null == e ? void 0 : e.state,
        _ = (null == e ? void 0 : e.type) === c.IIU.STREAMING && null != d ? d : n;
    if (((null == e ? void 0 : e.status_display_type) === r.D.NAME && null != n ? (_ = n) : (null == e ? void 0 : e.status_display_type) === r.D.STATE && null != f ? (_ = f) : (null == e ? void 0 : e.status_display_type) === r.D.DETAILS && null != d && (_ = d), (0, o.Z)(e))) {
        let e = (0, i.Z)(n);
        return {
            text: e,
            tooltip: e
        };
    }
    if ((null == e ? void 0 : e.type) === c.IIU.PLAYING && null != _)
        return {
            text: u.intl.format(u.t.lFApm5, { game: _ }),
            tooltip: u.intl.formatToPlainString(u.t.lFApm5, { game: _ })
        };
    if ((0, s.Z)(e) && t && null != f) {
        var p;
        let e = null == (p = f.split(';')) ? void 0 : p.join(', ');
        return {
            text: u.intl.format(u.t.Vnuxub, { name: e }),
            tooltip: u.intl.formatToPlainString(u.t.Vnuxub, { name: e })
        };
    }
    return (0, l.dS)(e) && null != n
        ? {
              text: u.intl.format(u.t.pW3Ip6, { name: n }),
              tooltip: u.intl.formatToPlainString(u.t.pW3Ip6, { name: n })
          }
        : (null == e ? void 0 : e.type) === c.IIU.LISTENING && null != _
          ? {
                text: u.intl.format(u.t.Vnuxub, { name: _ }),
                tooltip: u.intl.formatToPlainString(u.t.Vnuxub, { name: _ })
            }
          : (0, a.Z)(e) && t && null != d
            ? {
                  text: u.intl.format(u.t.pW3Ip6, { name: d }),
                  tooltip: u.intl.formatToPlainString(u.t.pW3Ip6, { name: d })
              }
            : (null == e ? void 0 : e.type) === c.IIU.WATCHING && null != _
              ? {
                    text: u.intl.format(u.t.pW3Ip6, { name: _ }),
                    tooltip: u.intl.formatToPlainString(u.t.pW3Ip6, { name: _ })
                }
              : (null == e ? void 0 : e.type) === c.IIU.COMPETING && null != _
                ? {
                      text: u.intl.format(u.t.QQ2wVF, { name: _ }),
                      tooltip: u.intl.formatToPlainString(u.t.QQ2wVF, { name: _ })
                  }
                : (null == e ? void 0 : e.type) === c.IIU.STREAMING && null != _
                  ? {
                        text: u.intl.format(u.t['0wJXSk'], { name: _ }),
                        tooltip: u.intl.formatToPlainString(u.t['0wJXSk'], { name: _ })
                    }
                  : {};
}
