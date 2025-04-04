n.d(t, { Z: () => c }), n(301563);
var r = n(657305),
    i = n(394821),
    o = n(841784),
    a = n(503438),
    s = n(981631),
    l = n(388032);
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (null == e ? void 0 : e.name) === '' ? null : null == e ? void 0 : e.name,
        c = (null == e ? void 0 : e.details) === '' ? null : null == e ? void 0 : e.details,
        u = (null == e ? void 0 : e.state) === '' ? null : null == e ? void 0 : e.state;
    if ((0, o.Z)(e)) {
        let e = (0, r.Z)(n);
        return {
            text: e,
            tooltip: e
        };
    }
    if ((null == e ? void 0 : e.type) === s.IIU.PLAYING && null != n)
        return {
            text: l.NW.format(l.t.lFApm5, { game: n }),
            tooltip: l.NW.formatToPlainString(l.t.lFApm5, { game: n })
        };
    if ((0, a.Z)(e) && t && null != u) {
        var d;
        let e = null == (d = u.split(';')) ? void 0 : d.join(', ');
        return {
            text: l.NW.format(l.t.Vnuxub, { name: e }),
            tooltip: l.NW.formatToPlainString(l.t.Vnuxub, { name: e })
        };
    }
    return (null == e ? void 0 : e.type) === s.IIU.LISTENING && null != n
        ? {
              text: l.NW.format(l.t.Vnuxub, { name: n }),
              tooltip: l.NW.formatToPlainString(l.t.Vnuxub, { name: n })
          }
        : (0, i.Z)(e) && t && null != c
          ? {
                text: l.NW.format(l.t.pW3Ip6, { name: c }),
                tooltip: l.NW.formatToPlainString(l.t.pW3Ip6, { name: c })
            }
          : (null == e ? void 0 : e.type) === s.IIU.WATCHING && null != n
            ? {
                  text: l.NW.format(l.t.pW3Ip6, { name: n }),
                  tooltip: l.NW.formatToPlainString(l.t.pW3Ip6, { name: n })
              }
            : (null == e ? void 0 : e.type) === s.IIU.COMPETING && null != n
              ? {
                    text: l.NW.format(l.t.QQ2wVF, { name: n }),
                    tooltip: l.NW.formatToPlainString(l.t.QQ2wVF, { name: n })
                }
              : (null == e ? void 0 : e.type) === s.IIU.STREAMING && null != c
                ? {
                      text: l.NW.format(l.t['0wJXSk'], { name: c }),
                      tooltip: l.NW.formatToPlainString(l.t['0wJXSk'], { name: c })
                  }
                : (null == e ? void 0 : e.type) === s.IIU.STREAMING && null != n
                  ? {
                        text: l.NW.format(l.t['0wJXSk'], { name: n }),
                        tooltip: l.NW.formatToPlainString(l.t['0wJXSk'], { name: n })
                    }
                  : {};
}
