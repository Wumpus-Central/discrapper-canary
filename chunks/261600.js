n.d(t, { U: () => f });
var l = n(200651),
    i = n(192379),
    a = n(399606),
    r = n(481060),
    o = n(592125),
    s = n(922482),
    c = n(750154),
    u = n(427679),
    d = n(388032);
function h(e) {
    var t, n;
    let { activity: h } = e,
        { channelId: f } = null !== (t = (0, c.rq)(h)) && void 0 !== t ? t : {},
        g = (0, a.e7)([u.Z], () => u.Z.getStageInstanceByChannel(f), [f]),
        p = i.useRef(null),
        N = i.useCallback(() => {
            let e = o.Z.getChannel(f);
            null != e && s.Cq(e);
        }, [f]),
        v = null !== (n = null == g ? void 0 : g.topic) && void 0 !== n ? n : h.name,
        x = d.intl.formatToPlainString(d.t['T+DNAA'], { channel: v });
    return (0, l.jsx)('div', {
        ref: p,
        children: (0, l.jsx)(r.P3F, {
            onClick: N,
            focusProps: { ringTarget: p },
            children: (0, l.jsx)(r.X6q, {
                variant: 'heading-sm/semibold',
                children: x
            })
        })
    });
}
class f {
    shouldShow(e) {
        return (0, c.JE)(e);
    }
    createHeader(e) {
        return {
            subtitle: d.intl.string(d.t['+AJFJy']),
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
