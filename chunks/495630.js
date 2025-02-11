n.d(t, { Z: () => u }), n(627341);
var i = n(278074),
    r = n(657305),
    a = n(841784),
    s = n(833664),
    o = n(981631),
    l = n(388032);
function u(e) {
    let { activity: t, stream: n } = e,
        u = (null == t ? void 0 : t.name) === '' ? null : null == t ? void 0 : t.name,
        c = (null == t ? void 0 : t.details) === '' ? null : null == t ? void 0 : t.details;
    if (null != n && (0, s.Z)(t) && null != u)
        return {
            text: l.intl.format(l.t['0wJXSk'], { name: u }),
            tooltip: l.intl.formatToPlainString(l.t['0wJXSk'], { name: u })
        };
    if (null != n) {
        let e = l.intl.string(l.t.eXan7O);
        return {
            text: e,
            tooltip: e
        };
    }
    if ((0, a.Z)(t)) {
        let e = (0, r.Z)(u);
        return {
            text: e,
            tooltip: e
        };
    }
    return null == u
        ? {}
        : (0, i.EQ)(t)
              .with({ type: o.IIU.PLAYING }, () => ({
                  text: l.intl.format(l.t.lFApm5, { game: u }),
                  tooltip: l.intl.formatToPlainString(l.t.lFApm5, { game: u })
              }))
              .with({ type: o.IIU.LISTENING }, () => ({
                  text: l.intl.format(l.t.Vnuxub, { name: u }),
                  tooltip: l.intl.formatToPlainString(l.t.Vnuxub, { name: u })
              }))
              .with({ type: o.IIU.WATCHING }, () => ({
                  text: l.intl.format(l.t.pW3Ip6, { name: u }),
                  tooltip: l.intl.formatToPlainString(l.t.pW3Ip6, { name: u })
              }))
              .with({ type: o.IIU.COMPETING }, () => ({
                  text: l.intl.format(l.t.QQ2wVF, { name: u }),
                  tooltip: l.intl.formatToPlainString(l.t.QQ2wVF, { name: u })
              }))
              .with({ type: o.IIU.STREAMING }, () => ({
                  text: l.intl.format(l.t['0wJXSk'], { name: null != c ? c : u }),
                  tooltip: l.intl.formatToPlainString(l.t['0wJXSk'], { name: null != c ? c : u })
              }))
              .otherwise(() => ({}));
}
