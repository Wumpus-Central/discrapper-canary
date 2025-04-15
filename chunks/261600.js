n.d(t, { U: () => p });
var r = n(200651),
    l = n(192379),
    i = n(399606),
    o = n(481060),
    a = n(592125),
    s = n(922482),
    u = n(750154),
    c = n(427679),
    d = n(388032);
function h(e) {
    var t, n;
    let { activity: h } = e,
        { channelId: p } = null != (t = (0, u.rq)(h)) ? t : {},
        f = (0, i.e7)([c.Z], () => c.Z.getStageInstanceByChannel(p), [p]),
        g = l.useRef(null),
        y = l.useCallback(() => {
            let e = a.Z.getChannel(p);
            null != e && s.Cq(e);
        }, [p]),
        O = null != (n = null == f ? void 0 : f.topic) ? n : h.name,
        N = d.NW.formatToPlainString(d.t['T+DNAA'], { channel: O });
    return (0, r.jsx)('div', {
        ref: g,
        children: (0, r.jsx)(o.P3F, {
            onClick: y,
            focusProps: { ringTarget: g },
            children: (0, r.jsx)(o.X6q, {
                variant: 'heading-sm/semibold',
                children: N
            })
        })
    });
}
class p {
    shouldShow(e) {
        return (0, u.JE)(e);
    }
    createHeader(e) {
        return {
            subtitle: d.NW.string(d.t['+AJFJy']),
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
