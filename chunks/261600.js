n.d(t, { U: () => p });
var i = n(200651),
    l = n(192379),
    r = n(399606),
    a = n(481060),
    o = n(592125),
    s = n(922482),
    c = n(750154),
    d = n(427679),
    u = n(388032);
function h(e) {
    var t, n;
    let { activity: h } = e,
        { channelId: p } = null !== (t = (0, c.rq)(h)) && void 0 !== t ? t : {},
        m = (0, r.e7)([d.Z], () => d.Z.getStageInstanceByChannel(p), [p]),
        g = l.useRef(null),
        f = l.useCallback(() => {
            let e = o.Z.getChannel(p);
            null != e && s.Cq(e);
        }, [p]),
        _ = null !== (n = null == m ? void 0 : m.topic) && void 0 !== n ? n : h.name,
        v = u.intl.formatToPlainString(u.t['T+DNAA'], { channel: _ });
    return (0, i.jsx)('div', {
        ref: g,
        children: (0, i.jsx)(a.P3F, {
            onClick: f,
            focusProps: { ringTarget: g },
            children: (0, i.jsx)(a.X6q, {
                variant: 'heading-sm/semibold',
                children: v
            })
        })
    });
}
class p {
    shouldShow(e) {
        return (0, c.JE)(e);
    }
    createHeader(e) {
        return {
            subtitle: u.intl.string(u.t['+AJFJy']),
            icon: null
        };
    }
    constructor() {
        var e;
        (e = 'body') in this
            ? Object.defineProperty(this, e, {
                  value: h,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (this[e] = h);
    }
}
