t.d(n, { Z: () => c });
var i = t(200651);
t(192379);
var l = t(481060),
    o = t(596454),
    s = t(318766),
    r = t(907040),
    a = t(273039),
    d = t(185923);
function c(e) {
    let { className: n, emojiClassName: t, emoji: c, setEmoji: u, channel: m } = e,
        h = (e) => (n, t) => {
            var i, l;
            null != n &&
                (null == n.id
                    ? u({ name: null !== (i = n.optionallyDiverseSequence) && void 0 !== i ? i : '' })
                    : u({
                          id: n.id,
                          name: null !== (l = n.originalName) && void 0 !== l ? l : n.name,
                          animated: n.animated
                      }),
                t && e());
        },
        x =
            null == c || null == c.name
                ? null
                : () => {
                      var e;
                      return (0, i.jsx)(o.Z, {
                          className: t,
                          animated: null !== (e = c.animated) && void 0 !== e && e,
                          emojiId: c.id,
                          emojiName: c.name
                      });
                  };
    return (0, i.jsx)(a.Z, {
        hasSetEmoji: null != c && null != c.name,
        onClick: () => {
            u(null);
        },
        children: (0, i.jsx)(l.yRy, {
            position: 'bottom',
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return (0, i.jsx)(r.Z, {
                    closePopout: n,
                    onSelectEmoji: h(n),
                    pickerIntention: d.Hz.COMMUNITY_CONTENT,
                    channel: m
                });
            },
            children: (e, t) => {
                let { isShown: l } = t;
                return (0, i.jsx)(s.Z, {
                    ...e,
                    tabIndex: 0,
                    active: l,
                    className: n,
                    renderButtonContents: x
                });
            }
        })
    });
}
