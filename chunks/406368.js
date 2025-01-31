n.d(t, { Z: () => d }), n(627341);
var i = n(192379),
    r = n(278074),
    a = n(657305),
    s = n(841784),
    o = n(833664),
    l = n(981631),
    u = n(388032);
let c = (e) => {
    let { activity: t, stream: n } = e;
    if (null != n && !(0, o.Z)(t)) {
        let e = u.intl.string(u.t.eXan7O);
        return {
            text: e,
            tooltip: e
        };
    }
    if ((0, s.Z)(t)) {
        let e = (0, a.Z)(null == t ? void 0 : t.name);
        return {
            text: e,
            tooltip: e
        };
    }
    return (null == t ? void 0 : t.name) == null || (null == t ? void 0 : t.name) === ''
        ? {}
        : (0, r.EQ)(t)
              .with({ type: l.IIU.PLAYING }, () => ({
                  text: u.intl.format(u.t.lFApm5, { game: t.name }),
                  tooltip: u.intl.formatToPlainString(u.t.lFApm5, { game: t.name })
              }))
              .with({ type: l.IIU.LISTENING }, () => ({
                  text: u.intl.format(u.t.Vnuxub, { name: t.name }),
                  tooltip: u.intl.formatToPlainString(u.t.Vnuxub, { name: t.name })
              }))
              .with({ type: l.IIU.WATCHING }, () => ({
                  text: u.intl.format(u.t.pW3Ip6, { name: t.name }),
                  tooltip: u.intl.formatToPlainString(u.t.pW3Ip6, { name: t.name })
              }))
              .with({ type: l.IIU.COMPETING }, () => ({
                  text: u.intl.format(u.t.QQ2wVF, { name: t.name }),
                  tooltip: u.intl.formatToPlainString(u.t.QQ2wVF, { name: t.name })
              }))
              .with({ type: l.IIU.STREAMING }, () => {
                  let e = null != t.details && '' !== t.details ? t.details : t.name;
                  return {
                      text: u.intl.format(u.t['0wJXSk'], { name: e }),
                      tooltip: u.intl.formatToPlainString(u.t['0wJXSk'], { name: e })
                  };
              })
              .otherwise(() => ({}));
};
function d(e) {
    let { activities: t, stream: n } = e,
        r =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t !== l.IIU.CUSTOM_STATUS && t !== l.IIU.HANG_STATUS;
                  }),
        { text: a, tooltip: s } = (0, i.useMemo)(
            () =>
                c({
                    activity: r,
                    stream: n
                }),
            [r, n]
        ),
        o =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === l.IIU.CUSTOM_STATUS;
                  });
    return {
        activity: r,
        text: a,
        tooltip: s,
        customStatus: (0, i.useMemo)(() => {
            var e, t;
            if (null == o) return null;
            let n = null !== (t = null === (e = o.state) || void 0 === e ? void 0 : e.trim()) && void 0 !== t ? t : null,
                i = '' === n ? null : n;
            return null == i && null == o.emoji
                ? null
                : {
                      text: i,
                      emoji: o.emoji
                  };
        }, [o])
    };
}
