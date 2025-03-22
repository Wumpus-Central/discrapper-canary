n.d(t, { Z: () => c }), n(627341);
var r = n(278074),
    i = n(657305),
    o = n(841784),
    a = n(833664),
    s = n(981631),
    l = n(388032);
function c(e) {
    let { activity: t, stream: n, useDescriptiveActivity: c = !1 } = e,
        u = (null == t ? void 0 : t.name) === '' ? null : null == t ? void 0 : t.name,
        d = (null == t ? void 0 : t.details) === '' ? null : null == t ? void 0 : t.details,
        f = (null == t ? void 0 : t.state) === '' ? null : null == t ? void 0 : t.state;
    if (null != n && (0, a.Z)(t) && null != u)
        return {
            text: l.NW.format(l.t['0wJXSk'], { name: u }),
            tooltip: l.NW.formatToPlainString(l.t['0wJXSk'], { name: u })
        };
    if (null != n) {
        let e = l.NW.string(l.t.eXan7O);
        return {
            text: e,
            tooltip: e
        };
    }
    if ((0, o.Z)(t)) {
        let e = (0, i.Z)(u);
        return {
            text: e,
            tooltip: e
        };
    }
    return null == u
        ? {}
        : (0, r.EQ)(t)
              .with({ type: s.IIU.PLAYING }, () => ({
                  text: l.NW.format(l.t.lFApm5, { game: u }),
                  tooltip: l.NW.formatToPlainString(l.t.lFApm5, { game: u })
              }))
              .with({ type: s.IIU.LISTENING }, () => ({
                  text: l.NW.format(l.t.Vnuxub, { name: c && null != f ? f : u }),
                  tooltip: l.NW.formatToPlainString(l.t.Vnuxub, { name: c && null != f ? f : u })
              }))
              .with({ type: s.IIU.WATCHING }, () => ({
                  text: l.NW.format(l.t.pW3Ip6, { name: c && null != d ? d : u }),
                  tooltip: l.NW.formatToPlainString(l.t.pW3Ip6, { name: c && null != d ? d : u })
              }))
              .with({ type: s.IIU.COMPETING }, () => ({
                  text: l.NW.format(l.t.QQ2wVF, { name: u }),
                  tooltip: l.NW.formatToPlainString(l.t.QQ2wVF, { name: u })
              }))
              .with({ type: s.IIU.STREAMING }, () => ({
                  text: l.NW.format(l.t['0wJXSk'], { name: null != d ? d : u }),
                  tooltip: l.NW.formatToPlainString(l.t['0wJXSk'], { name: null != d ? d : u })
              }))
              .otherwise(() => ({}));
}
