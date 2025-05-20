n.d(t, { Z: () => u }), n(35282);
var r = n(657305),
    i = n(394821),
    o = n(841784),
    a = n(503438),
    s = n(750154),
    l = n(981631),
    c = n(388032);
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (null == e ? void 0 : e.name) === '' ? null : null == e ? void 0 : e.name,
        u = (null == e ? void 0 : e.details) === '' ? null : null == e ? void 0 : e.details,
        d = (null == e ? void 0 : e.state) === '' ? null : null == e ? void 0 : e.state;
    if ((0, o.Z)(e)) {
        let e = (0, r.Z)(n);
        return {
            text: e,
            tooltip: e
        };
    }
    if ((null == e ? void 0 : e.type) === l.IIU.PLAYING && null != n)
        return {
            text: c.intl.format(c.t.lFApm5, { game: n }),
            tooltip: c.intl.formatToPlainString(c.t.lFApm5, { game: n })
        };
    if ((0, a.Z)(e) && t && null != d) {
        var f;
        let e = null == (f = d.split(';')) ? void 0 : f.join(', ');
        return {
            text: c.intl.format(c.t.Vnuxub, { name: e }),
            tooltip: c.intl.formatToPlainString(c.t.Vnuxub, { name: e })
        };
    }
    return (0, s.dS)(e) && null != n
        ? {
              text: c.intl.format(c.t.pW3Ip6, { name: n }),
              tooltip: c.intl.formatToPlainString(c.t.pW3Ip6, { name: n })
          }
        : (null == e ? void 0 : e.type) === l.IIU.LISTENING && null != n
          ? {
                text: c.intl.format(c.t.Vnuxub, { name: n }),
                tooltip: c.intl.formatToPlainString(c.t.Vnuxub, { name: n })
            }
          : (0, i.Z)(e) && t && null != u
            ? {
                  text: c.intl.format(c.t.pW3Ip6, { name: u }),
                  tooltip: c.intl.formatToPlainString(c.t.pW3Ip6, { name: u })
              }
            : (null == e ? void 0 : e.type) === l.IIU.WATCHING && null != n
              ? {
                    text: c.intl.format(c.t.pW3Ip6, { name: n }),
                    tooltip: c.intl.formatToPlainString(c.t.pW3Ip6, { name: n })
                }
              : (null == e ? void 0 : e.type) === l.IIU.COMPETING && null != n
                ? {
                      text: c.intl.format(c.t.QQ2wVF, { name: n }),
                      tooltip: c.intl.formatToPlainString(c.t.QQ2wVF, { name: n })
                  }
                : (null == e ? void 0 : e.type) === l.IIU.STREAMING && null != u
                  ? {
                        text: c.intl.format(c.t['0wJXSk'], { name: u }),
                        tooltip: c.intl.formatToPlainString(c.t['0wJXSk'], { name: u })
                    }
                  : (null == e ? void 0 : e.type) === l.IIU.STREAMING && null != n
                    ? {
                          text: c.intl.format(c.t['0wJXSk'], { name: n }),
                          tooltip: c.intl.formatToPlainString(c.t['0wJXSk'], { name: n })
                      }
                    : {};
}
