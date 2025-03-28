n.d(t, { Z: () => l }), n(301563);
var r = n(657305),
    i = n(841784),
    o = n(503438),
    a = n(981631),
    s = n(388032);
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (null == e ? void 0 : e.name) === '' ? null : null == e ? void 0 : e.name,
        l = (null == e ? void 0 : e.details) === '' ? null : null == e ? void 0 : e.details,
        c = (null == e ? void 0 : e.state) === '' ? null : null == e ? void 0 : e.state;
    if ((0, i.Z)(e)) {
        let e = (0, r.Z)(n);
        return {
            text: e,
            tooltip: e
        };
    }
    if ((null == e ? void 0 : e.type) === a.IIU.PLAYING && null != n)
        return {
            text: s.NW.format(s.t.lFApm5, { game: n }),
            tooltip: s.NW.formatToPlainString(s.t.lFApm5, { game: n })
        };
    if ((null == e ? void 0 : e.type) === a.IIU.LISTENING && t && null != c) {
        var u;
        let t = (0, o.Z)(e) ? (null === (u = c.split(';')) || void 0 === u ? void 0 : u.join(', ')) : c;
        return {
            text: s.NW.format(s.t.Vnuxub, { name: t }),
            tooltip: s.NW.formatToPlainString(s.t.Vnuxub, { name: t })
        };
    }
    return (null == e ? void 0 : e.type) === a.IIU.LISTENING && null != n
        ? {
              text: s.NW.format(s.t.Vnuxub, { name: n }),
              tooltip: s.NW.formatToPlainString(s.t.Vnuxub, { name: n })
          }
        : (null == e ? void 0 : e.type) === a.IIU.WATCHING && t && null != l
          ? {
                text: s.NW.format(s.t.pW3Ip6, { name: l }),
                tooltip: s.NW.formatToPlainString(s.t.pW3Ip6, { name: l })
            }
          : (null == e ? void 0 : e.type) === a.IIU.WATCHING && null != n
            ? {
                  text: s.NW.format(s.t.pW3Ip6, { name: n }),
                  tooltip: s.NW.formatToPlainString(s.t.pW3Ip6, { name: n })
              }
            : (null == e ? void 0 : e.type) === a.IIU.COMPETING && null != n
              ? {
                    text: s.NW.format(s.t.QQ2wVF, { name: n }),
                    tooltip: s.NW.formatToPlainString(s.t.QQ2wVF, { name: n })
                }
              : (null == e ? void 0 : e.type) === a.IIU.STREAMING && null != l
                ? {
                      text: s.NW.format(s.t['0wJXSk'], { name: l }),
                      tooltip: s.NW.formatToPlainString(s.t['0wJXSk'], { name: l })
                  }
                : (null == e ? void 0 : e.type) === a.IIU.STREAMING && null != n
                  ? {
                        text: s.NW.format(s.t['0wJXSk'], { name: n }),
                        tooltip: s.NW.formatToPlainString(s.t['0wJXSk'], { name: n })
                    }
                  : {};
}
