n.d(t, { Z: () => c }), n(627341);
var r = n(278074),
    i = n(657305),
    o = n(841784),
    a = n(833664),
    s = n(981631),
    l = n(388032);
function c(e) {
    let { activity: t, stream: n } = e,
        c = (null == t ? void 0 : t.name) === '' ? null : null == t ? void 0 : t.name,
        u = (null == t ? void 0 : t.details) === '' ? null : null == t ? void 0 : t.details;
    if (null != n && (0, a.Z)(t) && null != c)
        return {
            text: l.NW.format(l.t['0wJXSk'], { name: c }),
            tooltip: l.NW.formatToPlainString(l.t['0wJXSk'], { name: c })
        };
    if (null != n) {
        let e = l.NW.string(l.t.eXan7O);
        return {
            text: e,
            tooltip: e
        };
    }
    if ((0, o.Z)(t)) {
        let e = (0, i.Z)(c);
        return {
            text: e,
            tooltip: e
        };
    }
    return null == c
        ? {}
        : (0, r.EQ)(t)
              .with({ type: s.IIU.PLAYING }, () => ({
                  text: l.NW.format(l.t.lFApm5, { game: c }),
                  tooltip: l.NW.formatToPlainString(l.t.lFApm5, { game: c })
              }))
              .with({ type: s.IIU.LISTENING }, () => ({
                  text: l.NW.format(l.t.Vnuxub, { name: c }),
                  tooltip: l.NW.formatToPlainString(l.t.Vnuxub, { name: c })
              }))
              .with({ type: s.IIU.WATCHING }, () => ({
                  text: l.NW.format(l.t.pW3Ip6, { name: c }),
                  tooltip: l.NW.formatToPlainString(l.t.pW3Ip6, { name: c })
              }))
              .with({ type: s.IIU.COMPETING }, () => ({
                  text: l.NW.format(l.t.QQ2wVF, { name: c }),
                  tooltip: l.NW.formatToPlainString(l.t.QQ2wVF, { name: c })
              }))
              .with({ type: s.IIU.STREAMING }, () => ({
                  text: l.NW.format(l.t['0wJXSk'], { name: null != u ? u : c }),
                  tooltip: l.NW.formatToPlainString(l.t['0wJXSk'], { name: null != u ? u : c })
              }))
              .otherwise(() => ({}));
}
