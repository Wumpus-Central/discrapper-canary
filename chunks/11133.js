n.d(t, { Z: () => l });
var r = n(657305),
    i = n(841784),
    o = n(833664),
    a = n(981631),
    s = n(388032);
function l(e) {
    let { activity: t, stream: n, useDescriptiveActivity: l = !1 } = e,
        c = (null == t ? void 0 : t.name) === '' ? null : null == t ? void 0 : t.name,
        u = (null == t ? void 0 : t.details) === '' ? null : null == t ? void 0 : t.details,
        d = (null == t ? void 0 : t.state) === '' ? null : null == t ? void 0 : t.state;
    if (null != n && (0, o.Z)(t) && null != c)
        return {
            text: s.NW.format(s.t['0wJXSk'], { name: c }),
            tooltip: s.NW.formatToPlainString(s.t['0wJXSk'], { name: c })
        };
    if (null != n) {
        let e = s.NW.string(s.t.eXan7O);
        return {
            text: e,
            tooltip: e
        };
    }
    if ((0, i.Z)(t)) {
        let e = (0, r.Z)(c);
        return {
            text: e,
            tooltip: e
        };
    }
    return (null == t ? void 0 : t.type) === a.IIU.PLAYING && null != c
        ? {
              text: s.NW.format(s.t.lFApm5, { game: c }),
              tooltip: s.NW.formatToPlainString(s.t.lFApm5, { game: c })
          }
        : (null == t ? void 0 : t.type) === a.IIU.LISTENING && l && null != d
          ? {
                text: s.NW.format(s.t.Vnuxub, { name: d }),
                tooltip: s.NW.formatToPlainString(s.t.Vnuxub, { name: d })
            }
          : (null == t ? void 0 : t.type) === a.IIU.LISTENING && null != c
            ? {
                  text: s.NW.format(s.t.Vnuxub, { name: c }),
                  tooltip: s.NW.formatToPlainString(s.t.Vnuxub, { name: c })
              }
            : (null == t ? void 0 : t.type) === a.IIU.WATCHING && l && null != u
              ? {
                    text: s.NW.format(s.t.pW3Ip6, { name: u }),
                    tooltip: s.NW.formatToPlainString(s.t.pW3Ip6, { name: u })
                }
              : (null == t ? void 0 : t.type) === a.IIU.WATCHING && null != c
                ? {
                      text: s.NW.format(s.t.pW3Ip6, { name: c }),
                      tooltip: s.NW.formatToPlainString(s.t.pW3Ip6, { name: c })
                  }
                : (null == t ? void 0 : t.type) === a.IIU.COMPETING && null != c
                  ? {
                        text: s.NW.format(s.t.QQ2wVF, { name: c }),
                        tooltip: s.NW.formatToPlainString(s.t.QQ2wVF, { name: c })
                    }
                  : (null == t ? void 0 : t.type) === a.IIU.STREAMING && null != u
                    ? {
                          text: s.NW.format(s.t['0wJXSk'], { name: u }),
                          tooltip: s.NW.formatToPlainString(s.t['0wJXSk'], { name: u })
                      }
                    : (null == t ? void 0 : t.type) === a.IIU.STREAMING && null != c
                      ? {
                            text: s.NW.format(s.t['0wJXSk'], { name: c }),
                            tooltip: s.NW.formatToPlainString(s.t['0wJXSk'], { name: c })
                        }
                      : {};
}
